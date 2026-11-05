# イヌ小屋の部品

<div class="wiki-infobox" style="--accent:#627777"><div class="wiki-infobox-title">イヌ小屋の部品</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔩</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/workshop"><span class="wiki-icon">🔧</span>作業部屋</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/parts"><span class="wiki-icon">🔩</span>部品</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>39,366 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 組み立てれば愛犬の家。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔩</span>イヌ小屋の部品](/ja/action/craft-dog-house-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv24 | 1 | 100% | 0.7 | 10.5 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐕</span>イヌ小屋](/ja/action/craft-dog-house) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv24 | 100 | 100% |  |

<div class="wiki-navbox" style="--accent:#627777"><div class="wiki-navbox-title">グループ: 部品</div><div class="wiki-navbox-body"><a href="#/ja/item/rabbit-hutch-parts"><span class="wiki-icon">🔩</span>ウサギ小屋の部品</a> ・ <a href="#/ja/item/ruining-cushion-parts"><span class="wiki-icon">🔩</span>人をダメにするクッションの部品</a> ・ <a href="#/ja/item/well-parts"><span class="wiki-icon">🔩</span>井戸の部品</a> ・ <a href="#/ja/item/bookshelf-parts"><span class="wiki-icon">🔩</span>本棚の部品</a> ・ <a href="#/ja/item/lawn-mower-parts"><span class="wiki-icon">🔩</span>芝刈り機の部品</a> ・ <a href="#/ja/item/oven-parts"><span class="wiki-icon">🔩</span>オーブンの部品</a> ・ <a href="#/ja/item/solar-panel-parts"><span class="wiki-icon">🔩</span>ソーラーパネルの部品</a> ・ <a href="#/ja/item/dog-house-parts"><span class="wiki-icon">🔩</span>イヌ小屋の部品</a> ・ <a href="#/ja/item/weather-box-parts"><span class="wiki-icon">🔩</span>百葉箱の部品</a> ・ <a href="#/ja/item/refrigerator-parts"><span class="wiki-icon">🔩</span>冷蔵庫の部品</a> ・ <a href="#/ja/item/generator-parts"><span class="wiki-icon">🔩</span>発電機の部品</a> ・ <a href="#/ja/item/hamster-wheel-parts"><span class="wiki-icon">🔩</span>ハムスターの回車の部品</a> ・ <a href="#/ja/item/stove-parts"><span class="wiki-icon">🔩</span>かまどの部品</a> ・ <a href="#/ja/item/fireplace-parts"><span class="wiki-icon">🔩</span>暖炉の部品</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `dog-house-parts` |
| `category` | `workshop` |
| `group` | `parts` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `39366` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 8 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "dog-house-parts",
		"name": "イヌ小屋の部品",
		"explanation": "組み立てれば愛犬の家。",
		"icon": {
			"emoji": "🔩",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "workshop",
	"group": "parts",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 39366,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
