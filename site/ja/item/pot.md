# 鍋

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">鍋</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍲</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/stewing"><span class="wiki-icon">🍲</span>煮込み</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> かぶれば即席ヘルメット。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍲</span>鍋を買う](/ja/action/buy-pot) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv1 | 1 | 100% | 1 | 36,000 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🧀</span>チーズを作る](/ja/action/craft-cheese) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍬</span>飴](/ja/action/cook-candy) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🥟</span>肉まんのトマト煮](/ja/action/cook-meat-bun-tomato-stew) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🔥</span>燃える豆腐](/ja/action/cook-burning-tofu) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍚</span>ごはん](/ja/action/cook-cooked-rice) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍛</span>カレー](/ja/action/cook-curry-rice) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🍲</span>鍋](/ja/item/pot) ×1（装備が必要・消費しない） |

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 煮込み</div><div class="wiki-navbox-body"><a href="#/ja/item/pot"><span class="wiki-icon">🍲</span>鍋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `pot` |
| `category` | `kitchen` |
| `group` | `stewing` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "pot",
		"name": "鍋",
		"explanation": "かぶれば即席ヘルメット。",
		"icon": {
			"emoji": "🍲",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "stewing",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
