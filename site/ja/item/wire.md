# ワイヤー

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ワイヤー</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/da37979c4eda612b.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>2 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>4 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 細くても切れない強さ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/43113159f0664f4b.svg" alt="">ケンタウロス](/ja/action/centaur) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv42 | 1 | 14.2% | 0.071 | 16.7 |
| [<img class="wiki-icon" src="assets/icon/6c40c4939eb20707.svg" alt="">ベルトコンベア漁り](/ja/action/conveyor-scavenging) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv1 | 5 | 56% | 1.4 | 84 |
| [<img class="wiki-icon" src="assets/icon/85fb750f8b81f006.svg" alt="">巨大クレーン](/ja/action/giant-crane) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv17 | 1 | 3.89% | 0.019 | 0.038 |
| [<img class="wiki-icon" src="assets/icon/a2083bedd68b34b6.svg" alt="">R2D2](/ja/action/scout-with-r2d2) | [<img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭](/ja/category/garden) | Lv35 | 4 | 100% | 3.6 | 0.6 |

### 購入

4 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3150d1aa1b70a020.svg" alt="">本棚の部品](/ja/action/craft-bookshelf-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv9 | 3 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/d20e9576e4413495.svg" alt="">井戸の部品](/ja/action/craft-well-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv12 | 10 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/906d33c5da4359d9.svg" alt="">百葉箱の部品](/ja/action/craft-weather-box-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv27 | 6 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv2以上

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">215件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wire` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `4` |
| `sellingValue` | `2` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wire",
		"name": "ワイヤー",
		"explanation": "細くても切れない強さ。",
		"icon": {
			"emoji": "🔌",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/da37979c4eda612b.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 4,
	"sellingValue": 2,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "forest",
			"count": 2,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
