# 妖精

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">妖精</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧚</span></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><span class="wiki-icon">🏰</span>城</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv40</td></tr><tr><th>所要時間</th><td>1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.57</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 自然の小さな使い手。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv40以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🍀</span>-4葉のクローバー](/ja/item/minus-four-leaf-clover) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪶</span>ロウで固めた羽](/ja/item/wax-wing) ×1 | 成功時 | 1.17% | 0.006 | 0.082 |
| [<span class="wiki-icon">🍄</span>エリンギ](/ja/item/king-oyster-mushroom) ×1 | 成功時 | 0.24% | 0.001 | 0.017 |
| [<span class="wiki-icon">👰</span>ウエディングベール](/ja/item/wedding-veil) ×1 | 成功時 | 0.056% | 0 | 0.004 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 201 | 86 | 0 | 13 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🐦</span>身軽](/ja/skill/light-footed)：毎ターン 4% で発動、防御-9・回避+12
- [<span class="wiki-icon">🤹</span>曲芸](/ja/skill/stunt)：毎ターン 5% で発動、精度+5・回避+9・回復+3

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv40） | 0.612% | 176.5% | 63.9% | 25% | 22% | 256.6 | 33,975.6% | 4分18秒 | 負ける見込みが高い |
| +10（Lv50） | 0.918% | 144.1% | 72.7% | 29% | 29.7% | 150 | 15,356.8% | 2分3秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv40） | 1秒 | 50% | 0.57 | 14 | 4 |
| +10（Lv50） | 0.8秒 | 60% | 0.38 | 29.2 | 7 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 4 | 0 | 4 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#776a48"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><span class="wiki-icon">🏰</span>城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><span class="wiki-icon">📚</span>書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><span class="wiki-icon">💰</span>宝物庫の整理</a> ・ <a href="#/ja/action/golem"><span class="wiki-icon">🗿</span>ゴーレム</a> ・ <a href="#/ja/action/elementalist"><span class="wiki-icon">🧙</span>エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><span class="wiki-icon">🪞</span>魔法の鏡</a> ・ <a href="#/ja/action/knight"><span class="wiki-icon">🛡️</span>騎士</a> ・ <a href="#/ja/action/ghost-knight"><span class="wiki-icon">👻</span>亡霊騎士</a> ・ <a href="#/ja/action/necromancer"><span class="wiki-icon">💀</span>ネクロマンサー</a> ・ <a href="#/ja/action/fairy"><span class="wiki-icon">🧚</span>妖精</a> ・ <a href="#/ja/action/jailer"><span class="wiki-icon">🔒</span>牢番</a> ・ <a href="#/ja/action/squirrel"><span class="wiki-icon">🐿️</span>リス</a> ・ <a href="#/ja/action/gargoyle"><span class="wiki-icon">🗿</span>ガーゴイル</a> ・ <a href="#/ja/action/banquet-ghost"><span class="wiki-icon">👻</span>宴の亡霊</a> ・ <a href="#/ja/action/deep-dungeon-cell"><span class="wiki-icon">⛓️</span>地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><span class="wiki-icon">🚪</span>隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><span class="wiki-icon">👑</span>王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `fairy` |
| `category` | `castle` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `40` |
| `experience` | `0.571` |
| `seconds` | `1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 8 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "fairy",
		"name": "妖精",
		"explanation": "自然の小さな使い手。",
		"icon": {
			"emoji": "🧚",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "castle",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 40,
	"experience": 0.571,
	"seconds": 1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "minus-four-leaf-clover",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "wax-wing",
			"count": 1,
			"chance": 0.0117
		},
		{
			"type": "item",
			"id": "king-oyster-mushroom",
			"count": 1,
			"chance": 0.0024
		},
		{
			"type": "item",
			"id": "wedding-veil",
			"count": 1,
			"chance": 0.000563
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 201,
		"defence": 86,
		"accuracy": 0,
		"evasion": 13,
		"restore": 0
	},
	"skills": [
		"light-footed",
		"stunt"
	]
}
```

</details>
