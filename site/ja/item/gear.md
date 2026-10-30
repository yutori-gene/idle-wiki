# 歯車

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">歯車</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚙️</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>6 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 噛み合えば世界が動く。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏭</span>ベルトコンベア漁り](/ja/action/conveyor-scavenging) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv1 | 7 | 91% | 3.2 | 191 |
| [<span class="wiki-icon">🧔</span>ドワーフ](/ja/action/dwarf) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv47 | 1 | 2.07% | 0.01 | 0 |
| [<span class="wiki-icon">🤖</span>R2D2](/ja/action/scout-with-r2d2) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv35 | 7 | 100% | 6.3 | 1 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🎁</span>中くらいの宝箱を開ける](/ja/action/open-medium-chest) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv24 | 1 | 100% |  |
| [<span class="wiki-icon">🕰️</span>おじいさんの時計を直す](/ja/action/repair-grandfather-clock) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv44 | 25 | 100% |  |
| [<span class="wiki-icon">🔩</span>芝刈り機の部品を組む](/ja/action/assemble-lawn-mower-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv16 | 2 | 100% |  |
| [<span class="wiki-icon">🔩</span>オーブンの部品を作る](/ja/action/craft-oven-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv20 | 6 | 100% |  |
| [<span class="wiki-icon">🔩</span>イヌ小屋の部品を作る](/ja/action/craft-dog-house-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv24 | 1 | 100% |  |
| [<span class="wiki-icon">🔩</span>発電機の部品を作る](/ja/action/craft-generator-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv39 | 6 | 100% |  |
| [<span class="wiki-icon">🔩</span>ハムスターの回車の部品を作る](/ja/action/craft-hamster-wheel-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv42 | 25 | 100% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🤖</span>壊れたロボ](/ja/event/broken-robot) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">⚙️</span>歯車](/ja/item/gear) ×5 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `gear` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `6` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 0 |
| CSV `memo` | ドワーフ |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "gear",
		"name": "歯車",
		"explanation": "噛み合えば世界が動く。",
		"icon": {
			"emoji": "⚙️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 6,
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
