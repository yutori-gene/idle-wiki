# ニンニク

<div class="wiki-infobox" style="--accent:#6fb07a"><div class="wiki-infobox-title">ニンニク</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧄</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 臭うけれど元気になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧄</span>ニンニクの栽培](/ja/action/grow-garlic) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv1 | 5 | 100% | 5 | 10 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧛</span>バンパイヤ](/ja/action/vampire) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv44 | 1 | 100% |  |
| [<span class="wiki-icon">🐟</span>イワシのコンフィ](/ja/action/cook-sardine-confit) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv6 | 2 | 100% |  |
| [<span class="wiki-icon">🐌</span>エスカルゴ](/ja/action/cook-escargot) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv6 | 5 | 100% |  |
| [<span class="wiki-icon">🥘</span>野菜炒め](/ja/action/cook-stir-fried-vegetables) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv9 | 3 | 100% |  |
| [<span class="wiki-icon">🥩</span>ステーキ](/ja/action/cook-steak) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv9 | 1 | 100% |  |
| [<span class="wiki-icon">🥟</span>肉まんのトマト煮](/ja/action/cook-meat-bun-tomato-stew) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv9 | 3 | 100% |  |
| [<span class="wiki-icon">🍛</span>カレー](/ja/action/cook-curry-rice) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv17 | 2 | 100% |  |
| [<span class="wiki-icon">⚰️</span>吸血鬼の棺を開ける](/ja/action/open-vampire-coffin) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv18 | 1 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) Lv2以上

<div class="wiki-navbox" style="--accent:#6fb07a"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">70件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `garlic` |
| `category` | `greenhouse` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |
| CSV `memo` | イワシのコンフィ〜芳醇ガーリック〜 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "garlic",
		"name": "ニンニク",
		"explanation": "臭うけれど元気になる。",
		"icon": {
			"emoji": "🧄",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "greenhouse",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [
		{
			"type": "category",
			"id": "greenhouse",
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
