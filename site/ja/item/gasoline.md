# ガソリン

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ガソリン</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/9e41fed82a038d68.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 引火厳禁の黒い液体。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3554c0b2b3d69b0c.svg" alt="">工具室の棚卸し](/ja/action/tool-room-inventory) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv3 | 3 | 48% | 0.72 | 43.2 |
| [<img class="wiki-icon" src="assets/icon/3e59793710a254dd.svg" alt="">汚染区画の調査](/ja/action/contaminated-zone-survey) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv30 | 3 | 63.6% | 1.9 | 0.636 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/552f45ee7971103d.svg" alt="">オーブンの部品](/ja/action/craft-oven-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv20 | 16 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/4cae3568b1c47521.svg" alt="">冷蔵庫の部品](/ja/action/craft-refrigerator-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv31 | 8 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/919ca0ee4fca874c.svg" alt="">発電機の部品](/ja/action/craft-generator-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv39 | 20 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">215件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `gasoline` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "gasoline",
		"name": "ガソリン",
		"explanation": "引火厳禁の黒い液体。",
		"icon": {
			"emoji": "⛽",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/9e41fed82a038d68.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 18,
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
