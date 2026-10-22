# 大根

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">大根</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🥕</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>売値</th><td>15 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・イベント</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> おろせば万能調味料。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏛️</span>雪原の遺跡](/ja/action/snowfield-ruins) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv1 | 3 | 48% | 0.72 | 51.8 |

### イベント

| イベント | タイミング | 個数 | 確率 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🌿</span>薬草の贈り物](/ja/event/herb-gift) | 条件達成（タスク） | 2 | 100% |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥩</span>ステーキ](/ja/action/cook-steak) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv9 | 1 | 100% |  |
| [<span class="wiki-icon">🐟</span>焼き魚](/ja/action/cook-grilled-fish) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv12 | 1 | 100% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🐟</span>イワシのコンフィ〜芳醇ガーリック〜](/ja/item/sardine-confit) | アイテムの解放条件 | [<span class="wiki-icon">🥕</span>大根](/ja/item/daikon) ×2 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) Lv8以上

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">70件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `daikon` |
| `category` | `kitchen` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `15` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `skill` | （空） |
| CSV `tier` | 5 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "daikon",
		"name": "大根",
		"explanation": "おろせば万能調味料。",
		"icon": {
			"emoji": "🥕",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 15,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"requirements": [
		{
			"type": "category",
			"id": "northland",
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
