# ウサギ小屋

<div class="wiki-infobox" style="--accent:#627777"><div class="wiki-infobox-title">ウサギ小屋</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/d20af15fdf84be13.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/workshop"><img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/infrastructure"><img class="wiki-icon" src="assets/icon/e6d8b373dab1d666.svg" alt="">インフラ</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 人が住んでることもある。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 速度 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e23f33a0c0afe5ed.svg" alt="">ウサギ小屋](/ja/action/craft-rabbit-hutch) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv5 | 1 | 100% | 1 | 0.25 |

<div class="wiki-navbox" style="--accent:#627777"><div class="wiki-navbox-title">グループ: インフラ</div><div class="wiki-navbox-body"><a href="#/ja/item/rabbit-hutch"><img class="wiki-icon" src="assets/icon/d20af15fdf84be13.svg" alt="">ウサギ小屋</a> ・ <a href="#/ja/item/ruining-cushion"><img class="wiki-icon" src="assets/icon/d061d0b4fc8017f4.svg" alt="">人をダメにするクッション</a> ・ <a href="#/ja/item/well"><img class="wiki-icon" src="assets/icon/2e9ca8a99eeffc3a.svg" alt="">井戸</a> ・ <a href="#/ja/item/bookshelf"><img class="wiki-icon" src="assets/icon/8ca80b2480d6fb1f.svg" alt="">本棚</a> ・ <a href="#/ja/item/lawn-mower"><img class="wiki-icon" src="assets/icon/cd80af3b0b87ca59.svg" alt="">芝刈り機</a> ・ <a href="#/ja/item/oven"><img class="wiki-icon" src="assets/icon/8b5db6fffb5bb492.svg" alt="">オーブン</a> ・ <a href="#/ja/item/solar-panel"><img class="wiki-icon" src="assets/icon/97694fb5cc79e9a2.svg" alt="">ソーラーパネル</a> ・ <a href="#/ja/item/dog-house"><img class="wiki-icon" src="assets/icon/81b3c58eb8a7539b.svg" alt="">イヌ小屋</a> ・ <a href="#/ja/item/weather-box"><img class="wiki-icon" src="assets/icon/4ae919781f2c90a4.svg" alt="">百葉箱</a> ・ <a href="#/ja/item/refrigerator"><img class="wiki-icon" src="assets/icon/1869c897155c80cc.svg" alt="">冷蔵庫</a> ・ <a href="#/ja/item/generator"><img class="wiki-icon" src="assets/icon/5b1800f25518c83f.svg" alt="">発電機</a> ・ <a href="#/ja/item/hamster-wheel"><img class="wiki-icon" src="assets/icon/4260aef47730e5d1.svg" alt="">ハムスターの回車</a> ・ <a href="#/ja/item/stove"><img class="wiki-icon" src="assets/icon/dde7a8f5b7ef2232.svg" alt="">かまど</a> ・ <a href="#/ja/item/fireplace"><img class="wiki-icon" src="assets/icon/b53a3c89c58babec.svg" alt="">暖炉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rabbit-hutch` |
| `category` | `workshop` |
| `group` | `infrastructure` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 6 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rabbit-hutch",
		"name": "ウサギ小屋",
		"explanation": "人が住んでることもある。",
		"icon": {
			"emoji": "🐇",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/d20af15fdf84be13.svg）"
		},
		"color": ""
	},
	"category": "workshop",
	"group": "infrastructure",
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
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 3,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
