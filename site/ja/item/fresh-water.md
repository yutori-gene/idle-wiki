# 真水

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">真水</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💧</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>売値</th><td>4 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 命を繋ぐ清らかな水。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐚</span>磯の潮干狩り](/ja/action/tidal-flat-clamming) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv3 | 5 | 56% | 1.4 | 126 |
| [<span class="wiki-icon">🐸</span>ケロちゃんを水浴びさせる](/ja/action/bathe-kero-chan) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv15 | 2 | 100% | 2 | 0.571 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌵</span>歩くサボテンの棘を抜く](/ja/action/pluck-walking-cactus-thorn) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv3 | 1 | 100% |  |
| [<span class="wiki-icon">🍞</span>パン生地をこねる](/ja/action/knead-bread-dough) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv6 | 1 | 100% |  |
| [<span class="wiki-icon">🍚</span>ごはん](/ja/action/cook-cooked-rice) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv17 | 2 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🌊</span>海](/ja/category/sea) Lv8以上

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">70件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `fresh-water` |
| `category` | `kitchen` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `4` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "fresh-water",
		"name": "真水",
		"explanation": "命を繋ぐ清らかな水。",
		"icon": {
			"emoji": "💧",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 4,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"requirements": [
		{
			"type": "category",
			"id": "sea",
			"count": 8,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
