# カボチャ

<div class="wiki-infobox" style="--accent:#849b88"><div class="wiki-infobox-title">カボチャ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🎃</span></div><table><tr><th>場所</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/cultivate"><span class="wiki-icon">🌱</span>栽培</a></td></tr><tr><th>進行</th><td>連続</td></tr><tr><th>必要Lv</th><td>Lv4</td></tr><tr><th>所要時間</th><td>2時間</td></tr><tr><th>成功率</th><td>90%</td></tr><tr><th>経験値</th><td>195</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> カボチャを植えて増やす。


**連続**: 時間で進み、止めるまで繰り返す。オフライン中も進む。

## 必要なもの

- [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) Lv4以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🎃</span>カボチャ](/ja/item/pumpkin) ×1（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🎃</span>カボチャ](/ja/item/pumpkin) ×22 | 成功時 | 100% | 19.8 | 9.9 |
| [<span class="wiki-icon">🪱</span>ミミズ](/ja/item/earthworm) ×1 | 成功時 | 50% | 0.45 | 0.225 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 90%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv4） | 2時間 | 90% | 195 | 0.5 | 88 |
| +10（Lv14） | 1時間37分 | 93.1% | 130 | 0.6 | 74 |
| +20（Lv24） | 1時間20分 | 95.3% | 86.67 | 0.8 | 62 |
| +30（Lv34） | 1時間5分 | 96.8% | 57.78 | 0.9 | 51 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 10 | 1 | 10 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#849b88"><div class="wiki-navbox-title">温室のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/grow-carrot"><span class="wiki-icon">🥕</span>ニンジン</a> ・ <a href="#/ja/action/cut-earthworm"><span class="wiki-icon">🪱</span>ミミズの切断</a> ・ <a href="#/ja/action/grow-pumpkin"><span class="wiki-icon">🎃</span>カボチャ</a> ・ <a href="#/ja/action/grow-garlic"><span class="wiki-icon">🧄</span>ニンニク</a> ・ <a href="#/ja/action/grow-wheat"><span class="wiki-icon">🌾</span>小麦</a> ・ <a href="#/ja/action/grow-lettuce"><span class="wiki-icon">🥬</span>サラダ菜</a> ・ <a href="#/ja/action/grow-banana"><span class="wiki-icon">🍌</span>バナナ</a> ・ <a href="#/ja/action/grow-apple"><span class="wiki-icon">🍎</span>リンゴ</a> ・ <a href="#/ja/action/harvest-honey"><span class="wiki-icon">🍯</span>蜂蜜</a> ・ <a href="#/ja/action/breed-axolotl"><span class="wiki-icon">🦎</span>ウーパールーパー</a> ・ <a href="#/ja/action/grow-herb"><span class="wiki-icon">🌿</span>薬草</a> ・ <a href="#/ja/action/grow-hemp"><span class="wiki-icon">🌿</span>大麻</a> ・ <a href="#/ja/action/grow-potato"><span class="wiki-icon">🥔</span>ジャガイモ</a> ・ <a href="#/ja/action/grow-truffle"><span class="wiki-icon">🍄</span>トリュフ</a> ・ <a href="#/ja/action/grow-chili"><span class="wiki-icon">🌶️</span>とうがらし</a> ・ <a href="#/ja/action/grow-poison-herb"><span class="wiki-icon">☠️</span>毒草</a> ・ <a href="#/ja/action/grow-aromatic-herb"><span class="wiki-icon">🌿</span>香草</a> ・ <a href="#/ja/action/grow-world-tree-leaf"><span class="wiki-icon">🌳</span>世界樹の葉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `grow-pumpkin` |
| `category` | `greenhouse` |
| `attribute` | （空） |
| `group` | `cultivate` |
| `unlocked` | `hidden` |
| `level` | `4` |
| `experience` | `195` |
| `seconds` | `7200` |
| `chance` | `0.9` |
| `maximum` | `0` |
| `progressType` | `persistent` |
| CSV `tier` | 1 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "grow-pumpkin",
		"name": "カボチャ",
		"explanation": "カボチャを植えて増やす。",
		"icon": {
			"emoji": "🎃",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "greenhouse",
	"attribute": "",
	"group": "cultivate",
	"unlocked": "hidden",
	"level": 4,
	"experience": 195,
	"seconds": 7200,
	"chance": 0.9,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "pumpkin",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "pumpkin",
			"count": 22,
			"chance": 1
		},
		{
			"type": "item",
			"id": "earthworm",
			"count": 1,
			"chance": 0.5
		}
	],
	"progressType": "persistent",
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
