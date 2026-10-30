# 読解力

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">読解力</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📖</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><span class="wiki-icon">📚</span>書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/knowledge"><span class="wiki-icon">🧠</span>知識</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 文章の本質を読み解く力。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 経験値 |
| --- | --- |
| [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | +1 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📗</span>小説](/ja/action/read-novel) | [<span class="wiki-icon">📚</span>書斎](/ja/category/study) | Lv13 | 1 | 100% | 0.65 | 0.433 |

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 知識</div><div class="wiki-navbox-body"><a href="#/ja/item/imagination"><span class="wiki-icon">💭</span>想像力</a> ・ <a href="#/ja/item/concentration"><span class="wiki-icon">🎯</span>集中力</a> ・ <a href="#/ja/item/current-affairs"><span class="wiki-icon">📰</span>時事知識</a> ・ <a href="#/ja/item/sensitivity"><span class="wiki-icon">💗</span>感受性</a> ・ <a href="#/ja/item/reading-comprehension"><span class="wiki-icon">📖</span>読解力</a> ・ <a href="#/ja/item/confidence"><span class="wiki-icon">💪</span>自信</a> ・ <a href="#/ja/item/erudition"><span class="wiki-icon">🧠</span>博識</a> ・ <a href="#/ja/item/aesthetic-eye"><span class="wiki-icon">🎨</span>審美眼</a> ・ <a href="#/ja/item/cunning"><span class="wiki-icon">🦊</span>悪知恵</a> ・ <a href="#/ja/item/cooking-knowledge"><span class="wiki-icon">🍳</span>料理知識</a> ・ <a href="#/ja/item/geography-knowledge"><span class="wiki-icon">🗺️</span>地理知識</a> ・ <a href="#/ja/item/history-knowledge"><span class="wiki-icon">📜</span>歴史知識</a> ・ <a href="#/ja/item/calculation"><span class="wiki-icon">🧮</span>計算力</a> ・ <a href="#/ja/item/medical-knowledge"><span class="wiki-icon">⚕️</span>医学知識</a> ・ <a href="#/ja/item/law-of-all-things"><span class="wiki-icon">🌌</span>万物の理</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `reading-comprehension` |
| `category` | `study` |
| `group` | `knowledge` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 知識型の雛形（Step 1-3 確定・書斎）](/ja/dev/doc/plan?id=%E7%9F%A5%E8%AD%98%E5%9E%8B%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E6%9B%B8%E6%96%8E%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "reading-comprehension",
		"name": "読解力",
		"explanation": "文章の本質を読み解く力。",
		"icon": {
			"emoji": "📖",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "study",
	"group": "knowledge",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "sky-garden",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 1
		}
	],
	"skill": ""
}
```

</details>
