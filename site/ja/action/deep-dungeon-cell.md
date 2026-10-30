# 地下牢の奥

<div class="wiki-infobox" style="--accent:#776a48"><div class="wiki-infobox-title">地下牢の奥</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⛓️</span></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><span class="wiki-icon">🏰</span>城</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explore"><span class="wiki-icon">🔦</span>探索</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv8</td></tr><tr><th>所要時間</th><td>4時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>4,115</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 囚われた者の残したもの。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">🏰</span>城](/ja/category/castle) Lv8以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🩸</span>血液](/ja/item/blood) ×3 | 成功時 | 63.6% | 1.9 | 0.477 |
| [<span class="wiki-icon">🕍</span>聖櫃](/ja/item/ark-of-covenant) ×1 | 成功時 | 25.9% | 0.259 | 0.065 |
| [<span class="wiki-icon">⚔️</span>勇者の剣](/ja/item/hero-sword) ×1 | 成功時 | 12.4% | 0.124 | 0.031 |
| [<span class="wiki-icon">🛡️</span>聖なる盾](/ja/item/holy-shield) ×1 | 成功時 | 12.4% | 0.124 | 0.031 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv8） | 4時間 | 100% | 4,115 | 0.3 | 1,029 |
| +10（Lv18） | 3時間15分 | 100% | 2,743.33 | 0.3 | 840 |
| +20（Lv28） | 2時間40分 | 100% | 1,828.89 | 0.4 | 686 |
| +30（Lv38） | 2時間10分 | 100% | 1,219.26 | 0.5 | 560 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 52 | 0 | 52 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#776a48"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><span class="wiki-icon">🏰</span>城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><span class="wiki-icon">📚</span>書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><span class="wiki-icon">💰</span>宝物庫の整理</a> ・ <a href="#/ja/action/golem"><span class="wiki-icon">🗿</span>ゴーレム</a> ・ <a href="#/ja/action/elementalist"><span class="wiki-icon">🧙</span>エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><span class="wiki-icon">🪞</span>魔法の鏡</a> ・ <a href="#/ja/action/knight"><span class="wiki-icon">🛡️</span>騎士</a> ・ <a href="#/ja/action/ghost-knight"><span class="wiki-icon">👻</span>亡霊騎士</a> ・ <a href="#/ja/action/necromancer"><span class="wiki-icon">💀</span>ネクロマンサー</a> ・ <a href="#/ja/action/fairy"><span class="wiki-icon">🧚</span>妖精</a> ・ <a href="#/ja/action/jailer"><span class="wiki-icon">🔒</span>牢番</a> ・ <a href="#/ja/action/squirrel"><span class="wiki-icon">🐿️</span>リス</a> ・ <a href="#/ja/action/gargoyle"><span class="wiki-icon">🗿</span>ガーゴイル</a> ・ <a href="#/ja/action/banquet-ghost"><span class="wiki-icon">👻</span>宴の亡霊</a> ・ <a href="#/ja/action/deep-dungeon-cell"><span class="wiki-icon">⛓️</span>地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><span class="wiki-icon">🚪</span>隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><span class="wiki-icon">👑</span>王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `deep-dungeon-cell` |
| `category` | `castle` |
| `attribute` | （空） |
| `group` | `explore` |
| `unlocked` | `hidden` |
| `level` | `8` |
| `experience` | `4115` |
| `seconds` | `14400` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 8 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "deep-dungeon-cell",
		"name": "地下牢の奥",
		"explanation": "囚われた者の残したもの。",
		"icon": {
			"emoji": "⛓️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "castle",
	"attribute": "",
	"group": "explore",
	"unlocked": "hidden",
	"level": 8,
	"experience": 4115,
	"seconds": 14400,
	"chance": 1,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "blood",
			"count": 3,
			"chance": 0.636
		},
		{
			"type": "item",
			"id": "ark-of-covenant",
			"count": 1,
			"chance": 0.259
		},
		{
			"type": "item",
			"id": "hero-sword",
			"count": 1,
			"chance": 0.124
		},
		{
			"type": "item",
			"id": "holy-shield",
			"count": 1,
			"chance": 0.124
		}
	],
	"progressType": "single",
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"skills": []
}
```

</details>
