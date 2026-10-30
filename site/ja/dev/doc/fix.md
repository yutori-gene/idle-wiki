# 実装上の懸念事項（demoワールド作成・検証で判明）

> idle リポジトリ `world/doc/fix.md` の写し（9f7e998 時点）。編集は idle 側で行い、`npm run wiki-update` で取り込む。

対象: demo/yutri-idle-world-demo-20260626-214729.json
実エンジン（`player/control/game/`）のロジックを写経した実プレイ・シミュレーションで判明した、ワールド作成時に踏まないと完動しない/誤解しやすいポイントの記録。

**進捗**: A-2（装備の attack/defence が戦闘ダメージに乗らない）は修正済みのため本メモから削除した。番号は振り直していない。

**追記の出所**: B-5・C-3 は demo 検証ではなく、デバッグ／バランス調整の進め方を検討した際のコード読解で判明したもの。写経シミュレーションではなく実コードの走査で確認している。

---

## A. 戦闘エンジンの構造的な注意点（最重要）

### A-1. defaultCombat が弱いと戦闘が永久に決着せず力尽きる
- `restore` の回復は **1戦につき1回（tern==0時）** だけ適用される（update.ts:189-193）。一方ダメージは **毎ターン** 入る（update.ts:200-203）。
- そのため「1戦の被ダメ > 1戦のrestore」だと、プレイヤースタミナ（`thissidePercentage`）は戦闘をまたいで持ち越され（アクション開始時にしか100へ初期化されない: progress.ts:171。`tern==0` で戻るのは `oppositePercentage` だけ）、数戦で必ずゲームオーバーになる。
- **worldSample.ts の defaultCombat（25/10/80/20/10）はこの罠に該当**：装備・Lvに関係なく平均2〜3連勝で死亡（無限生存率0%）。サンプルを土台にすると気付かず継承する。
- **demoの対応**: `30/8/85/25/25`（config G）に変更。裸=危険・装備/育成で安定・dragonはLv10+板金で撃破、という曲線に調整済み。
- ✅ **要件**: stamina戦闘を含むワールドでは「(撃破ターン数)×(被ダメ/ターン) ≦ restore＋カテゴリLv補正」が成り立つよう defaultCombat を設定すること。

### A-3. 装備プロパティは「定数加算」ではなく「levelGapへの％補正」
- `equipmentCorrection` は levelGap に加算され、`calculateProperty(base, levelGap, ...)` で `base×(1+levelGap/100)` 等に効く（property.ts:83,186）。
- 例: 盾 restore=6 は「+6回復」ではなく「restoreが約+6%」。小さい値はほぼ誤差。
- **demoの対応**: 防具restoreを 盾20/板金45/ローブ25、ポーション30/60 に増強（小さい値だと無意味なため）。
- ✅ **要件**: 装備プロパティ値は「レベル差換算の補正量」として大きめに設計する。

---

## B. アイテム/アクションの仕様の落とし穴

### B-1. 装備必須(equipment:true)のツールも chance>0 だと消費される
- `reduceRequirements`（trade.ts）は `equipment` フラグを見ず、`chance` 判定だけで消費する。
- つまり「装備して使うツール（つるはし等）」でも requirement の `chance` が1なら毎回消費されて無くなる。
- **worldSample.ts は copper の rod 要求を `chance:1, equipment:true` にしており、これは毎回ツールが消費される潜在バグ**。
- **demoの対応**: ツール要求は `equipment:true, chance:0`（装備が条件・消費しない）に統一。
- ✅ **要件**: 持続させたい装備要求は必ず `chance:0`。
- **補足（2026-08-06）**: `chance:0` の要求アイテムが同時に `equipmentType:"consumable"` だと、装備消耗としての消費で在庫が尽きた瞬間に `reduceRequirements` が例外を投げてゲームが停止していた（サンプルの `keep-light`＋`wick`）。所持数チェックを `chance` 判定の後ろへ移し、`updateAction` の消費順を「要求 → 装備消耗品」に入れ替えて修正済み。`chance:0` の要求は在庫が尽きていても成立する。

### B-2. sellingValue=-1 用の「割引率」フィールドが型に存在しない
- ドキュメント([general.md])は売値-1時に「割引率×買値」と説明するが、`General` 型に割引率フィールドが無い（worldType.ts:31-46）。
- 売りたいアイテムは **明示的に正の `sellingValue`**、売れないものは `0` を指定するのが安全（-1は避ける）。
- **demoの対応**: 全アイテムで明示値（素材=正、武器防具=0）を設定済み。

### B-3. property の category="*" はロード時展開に依存
- `refreshProperty` は `property.categoryId != categoryId` の厳密一致（property.ts:50）。"*" 単体ではマッチしない。
- 実際は `spiliProperties`（utilize.ts:15）がロード時に "*" を全カテゴリへ展開するため動作する。この前処理に依存している点に注意。

### B-4. actionLevelLimit は「実行回数」ではなく「カテゴリLv≧action.level」
- 有効時、各アクションに `{type:"category", id:属性, count:action.level}` を自動付与（initialize.ts:290-306）。
- 「同属性の実行回数」という説明文([general.md])と実装（カテゴリLv要求）が食い違って読める。`numeric:false` のカテゴリはスキップ。
- 解放段階＝アクションの `level` 設計で制御できる（demoはこれを進行軸に使用）。

### B-5. `offlineMaxHours` はワールド設定にあるが、プレイヤーの進行計算では読まれていない
- ドキュメント（document/data/editor.ts の `offlineMaxHours`）は「6時間とした場合は6時間までのプロセスが処理され、それ以上空けても6時間として扱う」「0時間なら復帰時のプロセス処理は全く行われない」と説明する。
- しかし player 側で `offlineMaxHours` を参照するのは record.ts:53（利用統計の送信）だけ。オフライン進行の実体である `updateOffline()`→`updateProgress()` は `Date.now() - progressing.time.updated` をそのまま使い、上限のクランプが無い（update.ts:52）。
- ロード時に `progressing.time.updated` を巻き戻す処理も無い（initialize.ts:208 が更新するのは `user.playing.time.updated` で別フィールド）。`progressOffline()` の入口ガードは `comebacked` イベントの再発火防止であって時間上限ではない（player.ts:106-110）。
- 結果、`offlineMaxHours` に何を設定しても**離席時間の全量がオフライン進行として処理される**。1週間放置すれば1週間分の報酬が入り、`0` にしてもオフライン進行は止まらない。
- ⚠️ **影響**: 「1日1回起動」のような復帰頻度を前提にした収支設計が成立しない。長期離席で経済が壊れる。小規模デモでは総量が小さく気付きにくいが、長時間プレイ想定のワールドほど効く。
- ✅ **要件（当面のワールド側の回避）**: オフライン進行に上限がかかる前提で数値を組まない。上限を効かせたい場合はエンジン側の実装が必要。

### B-6. `consumable` の消費確率が無い（0%か100%の二値しか表現できない）
- `consumeItem`（progress.ts:657）は、`shouldConsumeEquipment` が true を返した装備を **無条件で `countNow--`** する。確率判定が無い。
- そのため装備消耗品で表現できるのは **消費0%（`unnecessary`／`necessary`）** か **消費100%（`consumable`）** だけ。「装備しているブーストが確率で減る」が作れない。
- `req` 側の `chance`（trade.ts:72）は確率消費を持つが、`req` に置いた時点でそのアイテムが**そのアクションの必須条件**になる（`countMatchedRequirement` が未所持で0を返す）。任意装備のブーストには使えない。
- **ワールド側の要求**: 料理＝作成量少・消費確率低め（長持ち）／ポーション＝作成量多・消費確率高め（ただし100%ではない）という差別化を設計として確定済み（[plan.md](/ja/dev/doc/plan)「プロパティ経済」節）。二値では表現できない。
- ✅ **対応案**: `Item` に `consumeChance: number`（default 1、0〜1）を追加し、`shouldConsumeEquipment` の末尾に `if (Math.random() >= item.world.consumeChance) return false;` を1行足す。影響は worldType / worldSchema / progress.ts / worldEmpty・worldSample / description.json / document/data/editor.ts / item.csv の1列。**worldtype-sync スキル案件**（スキーマ翻訳・ドキュメント再生成の追従が要る）。
- **実施時期**: CSV を形にする現フェーズでは着手しない。CSV に `consumeChance` 列を先に持たせて設計値を埋めておき、**変換フェーズ直前に他の型変更とまとめて1回で追従する**。

### B-8. `impossible`・`unnecessary` は装備できないので、そのままでは装備条件の道具にできない
- `checkEquippable`（progress.ts:548）は `necessary`・`consumable` 以外を `unequippable-item` で弾く。
- そのため `req` を `equipment:true` にしても、対象アイテムが `impossible`（道具66・器具3）や `unnecessary`（インフラ14）だと**永久に条件を満たせない**。
- ✅ **対応**: 装備条件にする道具は `equipmentType` を **`necessary`** へ変更する（調理器具3種・調合器具3種）。
- ⚠️ **インフラ14種は変更しない。** `unnecessary` の効果は「所持数に比例」（property.ts:25）で、`necessary` にすると「装備枠の1つだけ」に落ちて恒常バフ設計が壊れる。インフラは `equipment:false, chance:0`（所持が条件・消費しない）で扱う。
- 補足: `necessary` にしたグループはカテゴリの `equipmentGroups` へ自動で載る（progress.ts:286）ので、装備枠の定義を別途足す必要はない。
- ⚠️ **枠は `group` 単位で1つ。** `equipHandler`（progress.ts:245）が装備時に同じ `world.group` の既存装備を外すため、器具3種を `group=道具` のまま `necessary` にすると**1つしか装備できず、料理のたびに付け替える**ことになる。器具6種は1種ごとに別グループへ分ける（plan.md「旧系統の掃除」）。

### B-7. `action.csv` に `req-N-equipment` 列が無い
- `Requirement` 型は `equipment: boolean` を持つ（worldType.ts:178）が、`world/list/action.csv` の80列は `req-N-id` / `req-N-count` / `req-N-chance` の3種だけで `equipment` に対応する列が無い。
- B-1 の「持続する装備要求は `equipment:true, chance:0`」を CSV で表現できない。
- 実測（2026-08-31）: `action.csv` の `req-N-chance` は**1497件すべて `1`**。つまり現状すべての要求が毎回消費され、フライパン・鍋・オーブン・すり鉢・蒸留器・るつぼ、庭のペット本体まで実行のたびに消える。
- ✅ **対応済み（Step 3-A4・2026-09-02）**: `action.csv` に `req-N-equipment` 列（10本分）を追加し、道具の `req` 47件を `chance=0` に変更した（道具・器具＝`equipment:true`、インフラ＝`false`）。「◯◯の分解」16件は道具そのものを素材に還すアクションなので `chance=1` のまま残した。**CSV 側だけの変更でエンジン改修は不要。**
- 📌 消費を止めるのは `chance=0` だけで足りる（trade.ts:35 のコメント）。`equipment` は「所持ではなく装備を条件にする」ぶんだけの列。

### B-9. 「容器」グループにエンジン上の受け皿が無い（changed イベントで代替する）
- `terms.md` は容器を「所持でインベントリ容量増加」としているが、`PropertyTypes` に容量のプロパティは無い。容量は `basic.general.capacity` の**専用システムアイテム1つ**（`itemType: "capacity"`）で管理され、コインで枠を1つずつ買う仕組みで完結している（trade.ts:197・trade.ts:205）。ワールドの通常アイテムでは容量を増やせない。
- 実測（2026-09-01）: 容器9種はプロパティが**全ゼロ**、`req` でも使われず、入手経路も棺桶（地獄ドロップ→ロフトの開錠対象）以外は**ゼロ**。完全な死にアイテムになっている。
- ✅ **対応**: `events.changed` で「容器を入手した瞬間に capacity アイテムを +N」する。**エンジン改修は不要。** `addAcquisitions` が末尾で `checkChanged` を呼び（trade.ts:143）、changed の報酬もまた `addAcquisitions` を通る（event.ts:104）ため、`acq` に capacity アイテムの id を置けば増える。changed は UI に出ないので容量増加を裏で静かに行える。
- ⚠️ 前提が2つある。
  1. **`basic.general.capacity.initialCount > 0` にする。** 0 のままだと `getMaxCapacity()` が無制限を返し（trade.ts:207）、容量制限そのものが働かず容器が無意味になる。→ ✅ world/basic.json で **30** にした（2026-09-07）。
  2. **容器を売却不可（`sellingValue = 0`）にする。** 売って買い直せば `changed` が何度でも再発火する。入手経路を単発にしても売買で穴が開くので、`buyingValue` と `sellingValue` の両方を 0 にして塞ぐ。
  3. **容器の入手を1個きりにする。** changed は「1回の増加量」で判定するため、同じ容器を重複入手するたびに再発火して容量が青天井になる。`maximum=1` の所持上限クランプ（trade.ts:106）は `countNow` を切り詰めるだけで `trade` は積まれるので、**上限では止められない**。入手側（ダンジョンの探索報酬）を単発にして塞ぐ。
     - ✅ **2026-09-11 に塞いだ。** 容器を落とす探索9本を **`Action.maximum=1`** にした（実エンジンで「1回実行すると `impossible`／`maximumReached`」を確認。`maximum=0` の `夕暮れの散歩道` は `possible` のまま）。検査は check.py の `check_capacity_changed_source`（枠を配る changed の引き金を落とすアクションが `maximum=0` なら弾く）。以下は判明したときの記録。
     - ⚠️ **前提が未充足だった（2026-09-11 に判明）。** 「`progressType=single` なら一度きり」と読んでいたが、`single` は**宝箱型（時間で100%まで進んでから開封する）という進行の形でしかなく、実行回数は制限しない**。回数を止めるのは `Action.maximum > 0` だけ（progress.ts:38）で、**action.csv は592本すべて `maximum=0`＝無制限**（plan.md「maximum（最大実行回数）」が「例外なし」と決めている）。実エンジンで確認すると、容器を2個目入手した時点で changed が再発火して容量がもう一段増えた（30 → 9種そろえて210 → 重複1個で220）。
     - 単発化すると**その9本が落とす44種（容器9を除くと35種）も一度きりになる**。**繰り返すレシピの材料が絶えるのは2種だけ**だった（`琥珀` `蛍石` `耐熱レンガ` `氷の結晶` `木の宝箱` は森・北国・火山の討伐からも落ちるので影響なし）。
       - `財布`（ロフト/宝箱 rare3・`財布を開ける` の材料）→ **公園/自宅警備員 の acq に `×1 chance=0.05` で追加**（`鉄の宝箱` rare3@0.05 と同じ値）
       - `百科事典`（書斎/本 rare3・`シュレーディンガーの箱を開ける` の材料）→ **`req` の `chance` を 0 にして道具扱いにした**（消費しない）。rare3〜8 の本はそもそも「ダンジョンの探索報酬・1冊きり」が設計なので、消費する側が間違っていた。`木の宝箱を開ける` の `斧 chance=0` と同じ idiom
     - ✅ **この申し送りは 2026-09-11 の playtest で解消した。** 「確率ドロップが引き直せない」ものを数えると **29件**あり、`古い地図の断片`(0.02)・`下水道の鍵`(0.03) といった秘宝だけでなく、**下流のアクションを永久に止めるもの**が11件含まれていた（`死海文書` 6% → 読書 `宇宙真理学` → 書斎/能力 `万物の理`、`裁きの天秤` 6% → レシピ4本、`どんぐりショット` 40% → 投擲武器の入口）。**単発アクションが唯一の出所なら acq は `chance=1`** に統一し、`check.py` の `check_single_only_source` で守るようにした。他に出所がある10件は確率のまま。
- ⚠️ capacity を条件にする changed イベントは作らない（changed の報酬が changed を呼ぶ再帰になる）。

### B-10. 購入はエンジンのネイティブ機能。売店の36アクションは二重定義だった
- `buyingValue > 0` かつ解放済み（`locked === "released"`）のアイテムは、**そのアイテム自身のページからコインで買える**（itemColumn.tsx:50 → tradeColumn.tsx:59）。アイテム一覧は `countNow` で絞っていない（itemsColumn.tsx:15）ので、**所持0個の未入手品も買える**。購入用のアクションは要らない。
- 実測（2026-09-01）: `category=売店` の36本は `req コインN → acq そのアイテム1個`・`snap`・`seconds=0` で、このネイティブ機能の再実装だった。価格が「アクションの `req-count`」と「`item.buyingValue`」の2か所に割れており、両方に入っていたのは種・苗9種だけ。
- ✅ **対応**: 購入を `buyingValue` に一本化し、**売店カテゴリごと廃止**する（plan.md「購入型の雛形」）。品揃えの解放条件は `Item.requirements`（`type=category` のレベル／`type=item` の所持）で組む。**エンジン改修は不要。**
- ⚠️ 売却はカテゴリからは辿れない。「まとめ売り」画面は `inventoryColumn`（layer1）配下に固定されている（inventoryColumn.tsx:98）ので、売店を売却窓口として残すこともできない。
- ⚠️ `buyingValue` の実データは **-1 が857種・0 が36種・正が12種**。`getBuyingValue()` は `<= 0` を一律 0 として扱う（trade.ts:175）ので挙動は同じだが、B-2 のとおり **0 に統一**する。

### B-11. `numeric=false` のカテゴリのレベルは上がらない。それを条件にした127アイテムは永久に解放されない
- `numeric=false` のカテゴリは経験値を受け取らず（update.ts:185）レベルが 0 のまま動かない。現行は **倉庫・売店・防具・装飾・寝室**の5つ。
- 実測（2026-09-01）: そのレベルを `Item.requirements`（`type=category`）の条件にしているアイテムが **127種**ある（**防具73・装飾48・倉庫6**）。条件が永久に満たされないため、`getImpossibleEquipReasonPresetId` の `unmatched-equip-requirements` で弾かれ**装備できない**（progress.ts:552）。装備品121種が死んでいる。
- 同じ理由で **`level > 1` のアクション269本**（防具161・装飾102・寝室6）の `level` も無効。`actionLevelLimit` の条件注入は numeric=false のカテゴリをスキップし（initialize.ts:337）、`levelGap` も 0 になる（property.ts:190）ので、lv1 と lv20 で挙動が変わらない。実行は止まらず、段階付けが効かないだけ。
- ✅ **寝室の対応（拠点育成型で確定）**: `numeric=false` を維持し、`level` を全件 1 に戻す。段階は `req` の素材の rare で表す。美術品には装備条件を付けない。
- ✅ **防具・装飾の対応（装備管理型で確定・2026-09-03）**: `numeric=false` を維持し、**装備条件を全部外す**（plan.md「装備管理型の雛形 → 装備条件は全部外す」節）。順番は「行けるダンジョン」と「前の帯のくずが要ること」で守る。
- ✅ **防具ぶんは適用済み**（Step 3-5・2026-09-03）: 防具81種の `Item.requirements` を全クリアし、`level > 1` のアクション161本も旧系統の削除で消滅した。
- ✅ **装飾ぶんも解消**（装備管理型の適用で `Item.requirements` が空になった）。
- ✅ **倉庫ぶんも完了（2026-09-12）。** 残っていたのは5件ではなく **27件**（`腐った肉`・`ダンボール`・`枝`・`カッター`・`ほうき` に加えて `砂糖`・`鉄`・`布` など汎用素材22種）で、購入の解禁 period を兼ねていたため保留していた。**実プレイの到達可能性検査でこれが致命だと分かった**——`砂糖` が買えないので台所が入口から動かず、アイテム106種・アクション94本が到達不能だった。**使い先の numeric カテゴリ（15件）とその period のダンジョン Lv2（12件）へ振り直した**（plan.md「解禁条件は『満たせるカテゴリ』を指す」節）。`check.py` の物差し検査が要対応として数えるようになったので、再発すれば止まる。

### B-12. 敵側スキルの発動確率に係数を掛ける手段が無い
- `chance` はスキル自身の属性なので（skill.ts:46）、**味方と敵で同じ値が使われる**。ところが候補数が大きく違う: 味方は「いま効いているアイテム」全部から集まって**22候補**（plan.md「スキルの雛形」節）、敵は `action.skills` の **0〜3本**。同じ `chance` でも発動率が 80% 対 20% ほど開く。
- 現状は敵の `skills` の本数でしか調整できない。**敵側だけに掛かる倍率が欲しい**（ユーザー要望・2026-09-01）。
- ✅ **対応案**: `Action` に `skillChance: number`（default 1）を追加し、skill.ts:91 の相手側抽選だけ `selectSkill` に倍率を渡して `Math.random() < skill.world.chance * ratio` にする。影響は worldType / worldSchema / worldEmpty・worldSample / skill.ts / action.csv の1列 / description.json / document/data/editor.ts。**worldtype-sync 案件**（スキーマ翻訳・ドキュメント再生成の追従が要る）ので、B-6 と同じく**実プレイで必要になってから**に送る（2026-09-07）。
- ワールド全体の係数で足りるなら `General` に1つ置く手もあるが、ダンジョンごとに難易度の山を作れるアクション単位のほうが使い出がある。

### B-13. 味方スキルはカテゴリ横断で集まり、候補が増えるほど強スキルが埋もれる
- `getEffectiveItems` は**カテゴリ絞りが無く全カテゴリを走査する**ので、味方スキルの候補は「今そのカテゴリで有効な装備」ではなく**所持中の `unnecessary` ＋ 装備中の `necessary`/`consumable` 全部**から集まる。
- `selectSkill` はシャッフルして先頭から `chance` 判定し、最初に成立した1つだけ採用する。つまり **`chance` の高いスキルが先に成立すると、後ろに並んだ低 `chance` の強スキルは抽選されない**。
- 試算: 候補22・`chance` 0.03 の強スキルが選ばれる確率は、単独なら 3% が **1.55%** に落ちる。`chance` 0.25 の弱スキルを混ぜると更に下がる。
- ✅ **データ側で回避する**（エンジン改修は不要）。`chance` のレンジを 0.03〜0.12 に狭く保つ。plan.md「スキルの雛形」節で確定。

### B-14. `skill.csv` に icon / color の列が無い
- `Skill.information` は他のノードと同じく `icon` と `color` を持ち、発動トースト（skill.ts:122）とタグ表示（`listSkillTags`）に使われる。
- CSV は9列（name / explanation / chance / p-5値 / comment）しかないので、**このままだと100種のスキルが全部同じ見た目で出る**。
- ⬜ 変換スクリプトで既定を入れるか、CSV に2列足すかを **Step 4 で判断**。

### B-15. スキルに `speed` / `chance` / `experience` を持たせても素直には効かない
- `Skill.property` の型は `Combat`＝`StaminaList` の5値（conditionType.ts:9）。`speed` / `chance` / `experience` は `PropertyList` にはあるが `Combat` には無い。
- 型を広げても3値とも使いものにならない。**調べた結果を記録しておく**（同じ調査を繰り返さないため）:
  - `speed`: **一切効かない。** 所要時間は `calcuateActionTime` が `calculatePropertties(action.id)` を**補正なしで**呼んで決めるので、スキルの correction が届かない。届かせても進行率 `percentage += durationTime / actionTime` の分母が毎ターン揺れて進行バーが伸び縮みする。
  - `chance` / `experience`: **決着したターンだけ効く。** 成否判定（update.ts:161）とレベル加算（update.ts:189）はどちらも戦闘が決着した瞬間の properties を読む。10ターン戦っても噛むのは最後の1ターンぶんだけで、「たまたま最後に出たか」で報酬が決まるギャンブルになる。
- ✅ **スキルは5値のままで確定**（2026-09-01）。速度・成功率・経験値を伸ばしたいときは**アイテムの `p-*` 側**を使う（3値とも既に実データで動いている）。
- 型を共有している都合で、仮に広げるなら影響は `Combat` を使う3箇所（`defaultCombat` / `Action.property` / `Skill.property`）に及ぶ。`opposite()` が `action.world.property[key] + correction.opposite[key]` と両者を足すため（property.ts:90）、Skill だけ広げることはできない。

### B-16. 購入の所持金チェックが「支払総額」ではなく「購入個数」を見ている
- `trade.ts` の `buy()` の入口が `if (count <= 0 || count >= coin.user.countNow || buyingValue == 0) return;`。比べているのが**購入個数と所持コイン数**で、支払総額（`buyingValue × count`）ではない。
- UI 側（tradeColumn.tsx）が `buyingMax = floor(coinOwn / buyingValue)` で上限を出しているため所持金を超える購入は起きないが、**`購入個数 >= 所持コイン数` になる購入が無言で失敗する**。買値が安い品ほど当たりやすく、「ちょうどの枚数で買い切れない」形になる（買値1・所持5枚で5個買えない）。
- ✅ **正しくは `buyingValue * count > coin.user.countNow` で判定する。** データ側では回避できないのでエンジン修正が要る。実害は「上限いっぱいの購入が1個ぶん通らない」だけなので緊急度は低い。

### B-17. `changed` は req を消費せず、`requiringGroup` だと取得量に比例しない
倉庫の秘宝経済（`秘宝 → 秘宝メダル`）を組むときに確かめた `changed` の実挙動。3点とも仕様として利用できるが、思い込みと逆のものがある。

- **req は消費されない。** event.ts に `reduceRequirements` の呼び出しは無く、`checkChanged` は `addAcquisitions` しか呼ばない。イベントの `req` は**条件として見るだけ**で、条件アイテムは減らない（`req-N-chance` が `1` でも同じ）。session.md に「event.csv の `req-N-chance` 全124件 `1`＝条件アイテムを消費する」と書いていたのは誤りだった。
- **何度でも発火する。** `checkChanged` には `claimed` のガードが無く、`released` / `claimed` を毎回立て直して `count++` する。`tasked` などの「一度きり」とは別扱い。
- ⚠️ **`requiringGroup` では取得量に比例しない。** 判定は `getIncreasedAmount(...) >= requirement.count` の真偽だけなので、1アクションでグループ内のアイテムを3個取っても**発火は1回・acq も1回ぶん**。量で差を付けたいならグループを分けてイベントを複数本にするしかない。
- ⚠️ **`changed` の acq が別の `changed` の req を満たすと再帰する。** `addAcquisitions` が `checkChanged` を呼ぶ構造なので、自己参照（req と acq が同じアイテム／同じグループ）を作ると無限ループになる。秘宝の鑑定は `req=秘宝(group)` / `acq=秘宝メダル(通貨)` で交わらないため安全。

---

## C. ツール/ドキュメントの不整合

### C-1. `npm run editor:validate-level` が存在しない
- ルート CLAUDE.md は記載するが、package.json に該当スクリプト無し。
- 実体の検証ロジックは `editor/control/validation/`（ID重複・予約語・参照整合・group/equipmentGroups・event timing単発制限）。CLI化されていないため、ワールド単体の自動検証手段が無い。
- ✅ **提案**: 上記validationを叩く CLI（例 `editor:validate-level <json>`）を用意するとCI/手元検証が可能になる。

### C-2. icon名検証がネットワーク依存
- `validateIconifyId` は `icon.yu-to-ri.net/_list/<family>.json` を fetch して icon名の実在を確認（iconValidation.ts）。オフライン/CIでは検証不能（ローカルlist無し）。
- **demoの対応**: worldSample.tsで使用済み（=検証通過済み）の34アイコンのみ使用してリスクを回避。
- ✅ **提案**: アイコンリストをローカル同梱し、オフライン検証可能にする。

### C-3. `/world-balance` が存在しないフィールド・機能を参照している
- 当時のスラッシュコマンド `.claude/commands/world-balance.md`（現 .claude/skills/world-balance/SKILL.md）の「0. 準備」に「既存の到達時間推定があれば参考にする: `world.json` の `basic.development.simulations`（エディタの `runSimulations` 出力）」とあった。
- しかし `Development` 型に `simulations` は存在せず（worldType.ts:75-85）、`runSimulations` もリポジトリに無い（ts/tsx 全文検索で0件）。削除済み機能への参照が手順書に残っている。
- 手順書どおりに読むと「推定値がある前提」で探して見つからず空振りする。到達時間の裏取り手段が実質ゼロのまま、手計算に頼ることになる。
- ✅ **提案**: 当該手順を削除するか、代替の裏取り手段（実エンジンを Node で回すヘッドレスシミュレーション）に差し替える。
- **対応済み（2026-08-06）**: 参照を削除し、ヘッドレスシミュレーション（`npm/simulator` ＋ `world-playtest` スキル）へ差し替えた。到達時間は式からの概算ではなく実測で裏取りできる。

---

## D. demoで意図的に変えた・要確認の設定

| 項目 | 元 | demo | 理由 |
|---|---|---|---|
| `defaultCombat` | 全0（空テンプレ） | 30/8/85/25/25 | 0だと戦闘が決着しない（A-1）。実測で調整 |
| `maxCategoryLevels` | 100 | 30 | 小規模デモのテンポ。100に戻しても可 |
| dungeon解放条件 | （未設定） | crafting≥3 & smithing≥3 | サンプルは5。デモは軽め。好みで調整 |

---

## F. `world/list` の CSV を機械編集するときの罠

### F-1. 改行コードと BOM がファイルごとに違う
- 実測（2026-08-30）: `action.csv` LF/BOM無、`category.csv` **CRLF/BOM有**、`event.csv` CRLF/BOM無、`group.csv` LF/BOM無、`item.csv` **CRLF/BOM無**、`skill.csv` LF/BOM無。
- Python の `csv.writer` で全行を書き戻すと、改行が LF に揃い引用符も正規化されて **全行が diff に出る**。18行だけ直したいのに906行の差分になり、レビューが成立しない。
- また `encoding='utf-8-sig'` で**書く**と BOM 無しのファイルに BOM が付いてしまう（読む分には BOM 無しでも無害なので気付きにくい）。
- ✅ **要件**: 一括編集は「読み込み → 該当行だけ文字列置換 → 元の改行コードで書き戻す」。`csv` モジュールは**行のパース（列位置の特定）にだけ使い、書き出しには使わない**。編集後は必ず `git diff --numstat` で変更行数が期待どおりかを確認する。

---

## E. 残課題・今後の検討

- [ ] B-1（rod消費）はworldSample.ts側の修正も検討（サンプルを参照する人が踏む）。
- [ ] demoの武器/防具を attack/defence 込みで再設計するか検討（現在は武器=`experience`・防具/ポーション=`restore` で意味付けしてある）。
- [ ] spiliProperties の `isPropertyType` 判定（utilize.ts:9 `restore===undefined`）は Combat 型も restore を持つため誤判定の可能性。要レビュー。
- [ ] 戦闘難易度はデモ用に「死ににくい」寄り。歯ごたえを出すなら defaultCombat の defence↑/restore↓。
- [x] B-6: **完了（2026-10-25）。** `Item.consumeChance`（0〜1・既定1）を足し、`shouldConsumeEquipment` の末尾で確率判定する。値を持たない旧ワールドは `?? 1` で従来どおり必ず消費する。convert.ts は `item.csv` の `consumeChance` 列を読む（空欄＝1）。値は 投擲 0.5／ポーション（地下室）0.2／それ以外 1。討伐のターンを1〜3秒台にしたことで1戦あたりの消費が時間あたり20〜200倍になったのがきっかけ（plan.md「討伐のターンを1〜3秒台へ」節）。
- [x] B-7: **完了（2026-09-07 の列追加で実体化）。** `action.csv` に `req-N-equipment` 列（10列）を追加し、道具を要求する75件を `chance=0`・`equipment=true` へ変えた。残る124件は**消費させたいもの**なので空欄のまま——分解110本（道具そのものを壊す）・料理7本（`ネギ`・`フランスパン` のように武器と食材を兼ねる）・討伐4本・未使用3本。
- [x] B-8: **完了（Step 3）。** 調理器具は4種（`蒸籠`／`鍋`／`フライパン`／`ボウル`）、調合器具は3種（`すり鉢`／`蒸留器`／`るつぼ`）の計7種になり、すべて `necessary`・1種ごとに別グループ（蒸し／煮込み／炒め／混ぜ／粉砕／蒸留／溶解）。インフラ14種は `unnecessary` のまま。
- [x] B-9: **完了（2026-09-11）。** changed イベント9本（`storage-*`・物置を計180ひろげる）を書き、前提3つをすべて満たした——`initialCount=30`（world/basic.json）・売却不可（`sellingValue=0`）・**入手の単発化（探索9本を `Action.maximum=1`）**。実エンジンで 30 → 210 になること、2回目の実行が弾かれることを確認済み。
- [x] B-10: **完了（Step 3・Step 4）。** 売店カテゴリと36アクションを削除し（カテゴリ25 → 24）、`buyingValue` の -1 は0件になった。`group.csv` の `購入,action` は残してある。
- [x] B-11: **完了（2026-09-12）。** 防具73件（2026-09-03）→ 装飾48件 → 倉庫27件（実測は5件ではなく27件だった）。`numeric=false` のカテゴリLv要求は0件になり、`check.py` の「レベルの物差し」検査が要対応として数える。
- [ ] B-12: `Action.skillChance` を追加し、敵側スキルの発動確率に倍率を掛けられるようにする（~~worldtype-sync 案件・変換フェーズ直前~~ → **実プレイで敵の発動率を調整したくなってから**に送った。2026-09-07・B-6 と同じ扱い）。受け皿の型がまだ無いので論点5 の「受け皿がある項目は列を用意する」に当たらず、`action.csv` に列は足さない。それまでは敵の `skills` の本数で調整する。
- [x] B-14: `skill.csv` の icon / color は**変換で空欄のまま出す**と決めた（2026-09-07・変換フェーズ 論点5）。他の型と同じ扱いで、必要になってから2列足す。
- [ ] B-5: `offlineMaxHours` を実装する（`updateOffline` 側で経過時間をクランプ）か、機能ごと落として型・スキーマ・ドキュメントから外すかを決める。
- [x] C-3: world-balance の `basic.development.simulations` 参照を削除・差し替えした（2026-08-06）。代替の裏取り手段は `npm/simulator`（player の実エンジンを Node 駆動）＋ `world-playtest` スキル。world-balance は静的レビュー（全件走査）、実測は world-playtest、と役割を分けている。その後スラッシュコマンドはスキルへ統合され、実体は `.claude/skills/world-balance/` に移った。
