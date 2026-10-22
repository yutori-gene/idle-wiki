# 宴の亡霊

<div class="wiki-infobox" style="--accent:#6b7a4a"><div class="wiki-infobox-title">宴の亡霊</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">👻</span></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><span class="wiki-icon">🏰</span>城</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv42</td></tr><tr><th>所要時間</th><td>8分／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>275</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 終わらない舞踏会。誰もいないのに、皿の触れ合う音がする。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv42以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍚</span>生米](/ja/item/raw-rice) ×7 | 成功時 | 80% | 2.8 | 0.082 |
| [<span class="wiki-icon">🍶</span>酒](/ja/item/liquor) ×3 | 成功時 | 76.8% | 1.2 | 0.034 |
| [<span class="wiki-icon">🍇</span>葡萄](/ja/item/wine-grape) ×3 | 成功時 | 76.8% | 1.2 | 0.034 |
| [<span class="wiki-icon">🍷</span>ワイン](/ja/item/wine) ×3 | 成功時 | 76.8% | 1.2 | 0.034 |
| [<span class="wiki-icon">🍎</span>禁断の果実](/ja/item/forbidden-fruit) ×2 | 成功時 | 57.6% | 0.576 | 0.017 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 201 | 86 | 0 | 13 | 0 |

**敵のスキル**

- [<span class="wiki-icon">👊</span>手数](/ja/skill/many-blows)：毎ターン 12% で発動、精度+3
- [<span class="wiki-icon">🍃</span>風読み](/ja/skill/wind-reading)：毎ターン 6% で発動、精度+7・回避+6

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv42） | 0.612% | 176.5% | 63.9% | 25% | 22% | 256.6 | 33,975.6% | 1日10時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv42） | 8分 | 50% | 275 | 0 | 4 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 4 | 0 | 4 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#a37d1c"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><span class="wiki-icon">🏰</span>城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><span class="wiki-icon">📚</span>書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><span class="wiki-icon">💰</span>宝物庫の整理</a> ・ <a href="#/ja/action/golem"><span class="wiki-icon">🗿</span>ゴーレム</a> ・ <a href="#/ja/action/elementalist"><span class="wiki-icon">🧙</span>エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><span class="wiki-icon">🪞</span>魔法の鏡</a> ・ <a href="#/ja/action/knight"><span class="wiki-icon">🛡️</span>騎士</a> ・ <a href="#/ja/action/ghost-knight"><span class="wiki-icon">👻</span>亡霊騎士</a> ・ <a href="#/ja/action/necromancer"><span class="wiki-icon">💀</span>ネクロマンサー</a> ・ <a href="#/ja/action/fairy"><span class="wiki-icon">🧚</span>妖精</a> ・ <a href="#/ja/action/jailer"><span class="wiki-icon">🔒</span>牢番</a> ・ <a href="#/ja/action/squirrel"><span class="wiki-icon">🐿️</span>リス</a> ・ <a href="#/ja/action/gargoyle"><span class="wiki-icon">🗿</span>ガーゴイル</a> ・ <a href="#/ja/action/banquet-ghost"><span class="wiki-icon">👻</span>宴の亡霊</a> ・ <a href="#/ja/action/deep-dungeon-cell"><span class="wiki-icon">⛓️</span>地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><span class="wiki-icon">🚪</span>隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><span class="wiki-icon">👑</span>王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `banquet-ghost` |
| `category` | `castle` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `42` |
| `experience` | `275` |
| `seconds` | `480` |
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
		"id": "banquet-ghost",
		"name": "宴の亡霊",
		"explanation": "終わらない舞踏会。誰もいないのに、皿の触れ合う音がする。",
		"icon": {
			"emoji": "👻",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "castle",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 42,
	"experience": 275,
	"seconds": 480,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "raw-rice",
			"count": 7,
			"chance": 0.8
		},
		{
			"type": "item",
			"id": "liquor",
			"count": 3,
			"chance": 0.768
		},
		{
			"type": "item",
			"id": "wine-grape",
			"count": 3,
			"chance": 0.768
		},
		{
			"type": "item",
			"id": "wine",
			"count": 3,
			"chance": 0.768
		},
		{
			"type": "item",
			"id": "forbidden-fruit",
			"count": 2,
			"chance": 0.576
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
		"many-blows",
		"wind-reading"
	]
}
```

</details>
