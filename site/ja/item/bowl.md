# ボウル

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">ボウル</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🥣</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/mixing"><span class="wiki-icon">🥣</span>混ぜ</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 混ぜる、盛る、顔を洗う。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥣</span>ボウルを買う](/ja/action/buy-bowl) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv4 | 1 | 100% | 1 | 36,000 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🍞</span>パン生地をこねる](/ja/action/knead-bread-dough) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🥫</span>マヨネーズを作る](/ja/action/craft-mayonnaise) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍞</span>ポーション入りパン](/ja/action/cook-potion-bread) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🥗</span>ポテトサラダ](/ja/action/cook-potato-salad) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍣</span>寿司](/ja/action/cook-sushi) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍙</span>おにぎり](/ja/action/cook-rice-ball) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🥗</span>オーガニックサラダ](/ja/action/cook-organic-salad) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🍡</span>苦い団子](/ja/action/cook-bitter-dango) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（装備が必要・消費しない） |

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 混ぜ</div><div class="wiki-navbox-body"><a href="#/ja/item/bowl"><span class="wiki-icon">🥣</span>ボウル</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bowl` |
| `category` | `kitchen` |
| `group` | `mixing` |
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
		"id": "bowl",
		"name": "ボウル",
		"explanation": "混ぜる、盛る、顔を洗う。",
		"icon": {
			"emoji": "🥣",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "mixing",
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
