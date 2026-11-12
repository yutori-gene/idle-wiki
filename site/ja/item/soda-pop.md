# サイダー

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">サイダー</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/f00a3e48b0126398.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>36 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 飲むとスッキリした気分になる水。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/c1449d05731c58a5.svg" alt="">暴れ自販機](/ja/action/rampaging-vending-machine) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv1 | 1 | 0.614% | 0.003 | 0.148 |

### 購入

36 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2d32f6dba0c06950.svg" alt="">泡立つ薬](/ja/action/brew-bubbling-medicine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv7 | 1 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/1c9d2df10dfebe97.svg" alt="">メントス入りソーダ](/ja/action/craft-mentos-soda) | [<img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房](/ja/category/atelier) | Lv13 | 3 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv2以上
- [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) Lv9以上

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">215件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `soda-pop` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `36` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 2 |
| CSV `memo` | 効果なし |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "soda-pop",
		"name": "サイダー",
		"explanation": "飲むとスッキリした気分になる水。",
		"icon": {
			"emoji": "🥤",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/f00a3e48b0126398.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 36,
	"sellingValue": 18,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "park",
			"count": 2,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "category",
			"id": "kitchen",
			"count": 9,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
