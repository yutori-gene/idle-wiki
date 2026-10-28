# 芝刈り機

<div class="wiki-infobox" style="--accent:#4f8a8a"><div class="wiki-infobox-title">芝刈り機</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌾</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/workshop"><span class="wiki-icon">🔧</span>作業部屋</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/infrastructure"><span class="wiki-icon">🏗️</span>インフラ</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 庭を整える機械の力。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 速度 |
| --- | --- |
| 全カテゴリ | +4 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌾</span>芝刈り機を組む](/ja/action/assemble-lawn-mower) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv16 | 1 | 100% | 1 | 0.333 |

<div class="wiki-navbox" style="--accent:#4f8a8a"><div class="wiki-navbox-title">グループ: インフラ</div><div class="wiki-navbox-body"><a href="#/ja/item/rabbit-hutch"><span class="wiki-icon">🐇</span>ウサギ小屋</a> ・ <a href="#/ja/item/ruining-cushion"><span class="wiki-icon">🛋️</span>人をダメにするクッション</a> ・ <a href="#/ja/item/well"><span class="wiki-icon">🪣</span>井戸</a> ・ <a href="#/ja/item/bookshelf"><span class="wiki-icon">📚</span>本棚</a> ・ <a href="#/ja/item/lawn-mower"><span class="wiki-icon">🌾</span>芝刈り機</a> ・ <a href="#/ja/item/oven"><span class="wiki-icon">🍞</span>オーブン</a> ・ <a href="#/ja/item/solar-panel"><span class="wiki-icon">☀️</span>ソーラーパネル</a> ・ <a href="#/ja/item/dog-house"><span class="wiki-icon">🐕</span>イヌ小屋</a> ・ <a href="#/ja/item/weather-box"><span class="wiki-icon">🌡️</span>百葉箱</a> ・ <a href="#/ja/item/refrigerator"><span class="wiki-icon">🧊</span>冷蔵庫</a> ・ <a href="#/ja/item/generator"><span class="wiki-icon">🔌</span>発電機</a> ・ <a href="#/ja/item/hamster-wheel"><span class="wiki-icon">🐹</span>ハムスターの回車</a> ・ <a href="#/ja/item/stove"><span class="wiki-icon">🔥</span>かまど</a> ・ <a href="#/ja/item/fireplace"><span class="wiki-icon">🔥</span>暖炉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `lawn-mower` |
| `category` | `workshop` |
| `group` | `infrastructure` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 6 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "lawn-mower",
		"name": "芝刈り機",
		"explanation": "庭を整える機械の力。",
		"icon": {
			"emoji": "🌾",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "workshop",
	"group": "infrastructure",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 4,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
