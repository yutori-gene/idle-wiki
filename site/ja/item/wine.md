# ワイン

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">ワイン</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍷</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>24 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・イベント</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 年月を重ねるほど味わい深く。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">👻</span>宴の亡霊](/ja/action/banquet-ghost) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv42 | 1 | 0.816% | 0.004 | 0.034 |

### イベント

| イベント | タイミング | 個数 | 確率 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🍳</span>料理番の窮地](/ja/event/cook-in-trouble) | 条件達成（タスク） | 2 | 100% |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🏰</span>城](/ja/category/castle) Lv15以上

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">69件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wine` |
| `category` | `kitchen` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `24` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 8 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wine",
		"name": "ワイン",
		"explanation": "年月を重ねるほど味わい深く。",
		"icon": {
			"emoji": "🍷",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 24,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "castle",
			"count": 15,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
