# セッション引き継ぎメモ

> idle リポジトリ `world/doc/session.md` の写し（9f7e998 時点）。編集は idle 側で行い、`npm run wiki-update` で取り込む。

新しい会話への引き継ぎ用。**ここには「現在地」と「次の一手」だけを書く。** 作業を止めるたびに書き換え、経過は書き足さない。

- 決めたことと理由 → [plan.md](/ja/dev/doc/plan)（日付の新しい節ほど新しい。冒頭の「General設定」表がいまの値）
- 実測の所見 → `.reference/reports/report_worldplaytest_sunlit-to-sky_<YYMMDD>.md`
- エンジン側の罠 → [fix.md](/ja/dev/doc/fix)
- 2026-09-15 までの経過の記録 → [history.md](/ja/dev/doc/history)（読み物。書き足さない）

---

## 現在地（2026-10-30）

**フェーズ: 変換後の検証と調整。** CSV を作る段階（[roadmap.md](/ja/dev/doc/roadmap) の Step 1〜4）は 2026-09-05 に完了し、変換も済んでいる。いまは `world/world.json` をシミュレータで走らせ、所見を受けて CSV／`basic.json`／エンジンを直す往復をしている。

| 時期 | やったこと | 正本 |
|---|---|---|
| 〜09-05 | CSV を形にした（Step 1〜4） | roadmap.md・plan.md の各 Step 節 |
| 09-06〜09-11 | id 採番・型列・`world/basic.json`・`npm/world/convert.ts`（`world-convert`） | plan.md「変換フェーズ 論点1〜8」「CSV → worldType 変換仕様」 |
| 09-11〜09-14 | シミュレータで詰みを潰した（🚫1〜🚫17）。**800時間で24カテゴリすべてが解放される** | history.md・report_…_260911.md |
| 10-14〜10-18 | クリアまで走らせた検証と、それを受けた調整9件＋追加分 | plan.md「実プレイ検証を受けた調整（2026-10-17）」・report_…_261014.md |
| 10-20〜10-21 | Melvor Idle を参考にしたレベル調整（`levelCommonRatio` 1.11・`0.4^rare`・探索 Lv30/40・進行素材 `maximum=1`）。収入カーブは見送り | plan.md「Melvor Idle を参考にしたレベル調整」・report_…_261021.md |
| 10-25 | 討伐の1ターンを1〜3秒台へ。時間あたりの経験値・ドロップ・消費は保つ。`Item.consumeChance` を追加（fix.md B-6） | plan.md「討伐のターンを1〜3秒台へ（2026-10-25）」 |
| 10-28 | 温室の作り直し（Lv1〜50 均等・Lv50 まで約70日・種を無くした4種・装備枠 `畑の恵み`・`ミミズ`） | plan.md「温室の作り直し（2026-10-28）」 |
| 10-28 | 拠点6カテゴリ（台所・地下室・書斎・ロフト・庭・作業部屋）も Lv1〜50 へ配り直し。独立レーン（書斎・庭）は Lv50 まで約70日、排他レーンは約146時間のまま | plan.md「拠点6カテゴリの配り直し（2026-10-28）」 |
| 10-30 | 台所の縮小（アクション 35 → 18本・アイテム 89 → 38種）。調理器具は `道具` グループ・装備不要（所持で可）。入口の飴をメントスにして温室待ちを解いた | plan.md「台所の縮小（2026-10-30）」 |
| 10-30 | 庭の作り直し。ペット7種の改名・2種削除・`炎の鳥` 追加、アクション名をペット名だけに、グループ `遊ぶ`／`しつけ`、しつけは attribute 空欄（1戦2〜4時間・負けない）、成功率75〜100%、21本を Lv1〜50 に配り直し（Lv50 約70日のまま）、容器は全種 `impossible`・`観覧車のゴンドラ`→`コンテナ` | plan.md「庭の作り直し（2026-10-30）」 |

- ⚠️ **`python3 world/tool/check.py` は要対応 38件**（すべて 10-28 の温室の変更が原因。下の「次の一手」0）
- `world/world.json` の規模: category 24 / action 576 / item 819

## 次の一手

0. **温室の変更で出た検査の不一致 38件を、他カテゴリとの調整の回で片づける（後回しはユーザー決定）。** 内訳と原因は plan.md「温室の作り直し」節の末尾と「拠点6カテゴリの配り直し」節の末尾。決定3 の4件は検査に例外を足して解消済み
   - 決定1（2件）: `空飛ぶ象` の `バナナ`、`オーク` の `蜂蜜` が温室の後半へ遠のいた（`マンモス` は物差しの修正で解けた）
   - tier と入手時期（36件）: 温室の作物・種苗と、それを使う台所・地下室の品の tier
   - ~~台所の入口 `飴` が `蜂蜜` 待ち~~ → 10-30 の台所の縮小で `メントス`（購入品）に替えて解消。⚠️ 地下室は Lv3 以降が `薬草`（温室 Lv28）待ちのまま。台所でも `ポーション入りパン`（Lv5）と `苦い団子` が `蜂蜜` を使う
1. **討伐の死亡が増えた件の扱いを決める（ユーザー判断）。** 10-25 の変更後、direct・3シード・200時間で死亡が **1／12／4 → 8／55／890**。進行の速さはほぼ変わらないが、ゲームオーバーで止まった討伐は次に見に来るまで再開しないので、放置する人ほど「すぐ止まる」と感じるおそれがある。原因は `canWinCombat` が期待値で足切りするため、薄い勝ちが分散で負けること（plan.md 同節「実測」）
2. **台所・地下室の変更（`consumeChance` と生産個数）を測る。** direct は台所・地下室を触らないので、10-25 の走行ではこの2つが効いていない。ターン制か、消耗品を使うポリシーで確かめる
3. 収入カーブ（`× 1.3^(period−1)`）は見送り中。外れ値を直した今、後半ほど稼げる形にするかを再検討するときは report_…_261021.md から読む

### 未決の小課題

- fix.md **B-5** `offlineMaxHours` を実装するか、機能ごと外すか
- fix.md **B-12** 敵の技の発動確率の倍率（`Action.skillChance`）。実プレイで調整したくなったら
- ワールド名「ひだまりから天空へ」（`sunlit-to-sky`）は**仮題**

---

## 作業の道具

```
python3 world/tool/check.py          # 全検査。CSV の検証の正本
python3 world/tool/check.py 街       # カテゴリを絞る
python3 world/tool/overview.py       # overview.md / overview.html の再生成
npm run world-convert                # CSV + basic.json → world/world.json（editor/data/worldFull.json へも複製）
npm run simulator-screening -- --world world/world.json --seeds 1-3 --minutes 12000   # 機械走行
npm run simulator-session -- --new --seed 1 --world world/world.json                  # ターン制で遊ぶ
```

**CSV か `basic.json` を触ったら、`check.py` → `overview.py` → `world-convert` の順に回す。** シミュレータの使い方は world-playtest スキル。

### 源泉と生成物

| 源泉（手で書く） | 生成物（手で直さない） |
|---|---|
| `world/list/*.csv`（6ファイル）・`world/basic.json` | `world/world.json`・`editor/data/worldFull.json`（`world-convert`） |
| CSV と overview.md の `<!-- fill:X -->` ブロック | `world/view/overview.md`・`overview.html`（`overview.py`） |

- **CSV に行を足すときは `id` と型列も書く。** `id` は英小文字ケバブケース・接頭辞なし・型内で一意（plan.md「変換フェーズ 論点2」の「id 列」節）
- **5ファイル（category / action / item / event / skill）の末尾の `feature` 列は要素ごとの方針。** 埋まっている行は、その行に限って plan.md の型・公式より優先する。空欄なら無視する。一括で直す前に必ず読む（plan.md「要素ごとの個性」節）
- **CSV の参照列は id ではなく name のまま。** 変換時に型ごとの name→id 辞書で解決する
- **`tier` は価格（`3^rare × tier`）と秒数の両方を動かす。** 動かすときは plan.md「Step 4-4」節の手順で一式やり直す

### CSV の改行と BOM（読み書きで必ず維持する）

`file` コマンドではなくバイト数で確かめる（`b.count(b'\r\n')`）。

| ファイル | 改行 | BOM |
|---|---|---|
| item.csv | CRLF | なし |
| action.csv | LF | なし |
| event.csv | CRLF | なし |
| group.csv | LF | なし |
| category.csv | CRLF | **あり**（`encoding='utf-8-sig'`） |
| skill.csv | LF | なし |

## 作業を止めるとき

この「現在地」と「次の一手」を書き換えてから終わる。決めたことは plan.md に、実測はレポートに書く（ここに経過を積まない）。
