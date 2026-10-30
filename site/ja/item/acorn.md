# ドングリ

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ドングリ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌰</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 人間にとってはゴミだが、リスの間では通貨として利用されている。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍂</span>落ち葉拾い](/ja/action/gather-fallen-leaves) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv1 | 5 | 56% | 1.4 | 504 |
| [<span class="wiki-icon">🪷</span>池のほとり](/ja/action/pond-side) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv14 | 3 | 91% | 1.4 | 491 |
| [<span class="wiki-icon">🌱</span>食人植物](/ja/action/man-eating-plant) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv9 | 1 | 10.7% | 0.054 | 9.3 |
| [<span class="wiki-icon">🐿️</span>リス](/ja/action/squirrel) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv41 | 1 | 1.17% | 0.006 | 0.082 |
| [<span class="wiki-icon">🦝</span>大きなタヌキ？](/ja/action/big-tanuki) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv49 | 1 | 2.05% | 0.01 | 0 |
| [<span class="wiki-icon">🐢</span>クッパ](/ja/action/walk-turtle) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv25 | 6 | 100% | 4.5 | 1.5 |
| [<span class="wiki-icon">🐈</span>パンシー](/ja/action/pansy) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv13 | 6 | 100% | 4.5 | 1.5 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪲</span>カブトムシ](/ja/action/beetle) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv7 | 5 | 3% |  |
| [<span class="wiki-icon">🐿️</span>リス](/ja/action/squirrel) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv41 | 1 | 0.208% |  |
| [<span class="wiki-icon">🦝</span>大きなタヌキ？](/ja/action/big-tanuki) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv49 | 1 | 0.367% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🌰</span>どんぐりの小山](/ja/event/acorn-pile) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🌰</span>ドングリ](/ja/item/acorn) ×10 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `acorn` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |
| CSV `memo` | 大きなタヌキ？ |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "acorn",
		"name": "ドングリ",
		"explanation": "人間にとってはゴミだが、リスの間では通貨として利用されている。",
		"icon": {
			"emoji": "🌰",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
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
