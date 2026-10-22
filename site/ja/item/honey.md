# 蜂蜜

<div class="wiki-infobox" style="--accent:#6fb07a"><div class="wiki-infobox-title">蜂蜜</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍯</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・イベント</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 熊も虜にする甘い誘惑。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍯</span>蜂蜜の採取](/ja/action/harvest-honey) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv5 | 2 | 100% | 2 | 4 |

### イベント

| イベント | タイミング | 個数 | 確率 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🍄</span>きのこ採り名人](/ja/event/mushroom-master) | 条件達成（タスク） | 2 | 100% |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">👹</span>オーク](/ja/action/orc) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv11 | 2 | 100% |  |
| [<span class="wiki-icon">🐱</span>五毛猫に頼みごとをする](/ja/action/ask-five-color-cat) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv18 | 1 | 100% |  |
| [<span class="wiki-icon">🌙</span>ルナを月に連れていく](/ja/action/take-luna-to-moon) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv18 | 1 | 100% |  |
| [<span class="wiki-icon">🍬</span>飴](/ja/action/cook-candy) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv1 | 1 | 100% |  |
| [<span class="wiki-icon">🍞</span>ポーション入りパン](/ja/action/cook-potion-bread) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv4 | 1 | 100% |  |
| [<span class="wiki-icon">🍡</span>苦い団子](/ja/action/cook-bitter-dango) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv20 | 2 | 100% |  |
| [<span class="wiki-icon">💊</span>キズ薬の調合](/ja/action/brew-wound-medicine) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv1 | 1 | 100% |  |
| [<span class="wiki-icon">💊</span>風邪薬の調合](/ja/action/brew-cold-medicine) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv1 | 3 | 100% |  |
| [<span class="wiki-icon">💊</span>滋養強壮剤の調合](/ja/action/brew-tonic) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv15 | 2 | 100% |  |
| [<span class="wiki-icon">🧪</span>エリクサーの調合](/ja/action/brew-elixir) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv20 | 3 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) Lv4以上

<div class="wiki-navbox" style="--accent:#6fb07a"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">70件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `honey` |
| `category` | `greenhouse` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "honey",
		"name": "蜂蜜",
		"explanation": "熊も虜にする甘い誘惑。",
		"icon": {
			"emoji": "🍯",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "greenhouse",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 18,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [
		{
			"type": "category",
			"id": "greenhouse",
			"count": 4,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
