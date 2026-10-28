# 腐葉土

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">腐葉土</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍂</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>2 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>4 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 栄養豊富な森の贈り物。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪵</span>倒木あさり](/ja/action/scavenge-fallen-tree) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv3 | 5 | 56% | 1.4 | 252 |
| [<span class="wiki-icon">🍄</span>歩くキノコ](/ja/action/walking-mushroom) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv8 | 1 | 6.3% | 0.032 | 1.2 |
| [<span class="wiki-icon">🐗</span>ワイルドボア](/ja/action/wild-boar) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv11 | 1 | 4.43% | 0.022 | 4.7 |
| [<span class="wiki-icon">🪱</span>ミミズ](/ja/action/earthworm) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv11 | 1 | 5.5% | 0.028 | 5 |

### 購入

4 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥦</span>ブロッコリーを作る](/ja/action/craft-broccoli) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv13 | 15 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv2以上

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `leaf-mold` |
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
		"id": "leaf-mold",
		"name": "腐葉土",
		"explanation": "栄養豊富な森の贈り物。",
		"icon": {
			"emoji": "🍂",
			"iconify": "",
			"image": ""
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
