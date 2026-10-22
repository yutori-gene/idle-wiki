# 苔

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">苔</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌿</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>2 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>4 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 静かに広がる緑の絨毯。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌰</span>木の実採り](/ja/action/gather-nuts) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv1 | 5 | 56% | 1.4 | 252 |

### 購入

4 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔩</span>鉄の棒を作る](/ja/action/craft-iron-rod) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv16 | 15 | 100% |  |
| [<span class="wiki-icon">🔨</span>ハンマーを作る](/ja/action/craft-hammer) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv16 | 15 | 100% |  |
| [<span class="wiki-icon">🐟</span>冷凍マグロを作る](/ja/action/craft-frozen-tuna) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv17 | 15 | 100% |  |
| [<span class="wiki-icon">🧱</span>レンガを作る](/ja/action/craft-brick) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv13 | 15 | 100% |  |
| [<span class="wiki-icon">⛄</span>雪玉を作る](/ja/action/craft-snowball) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv14 | 15 | 100% |  |
| [<span class="wiki-icon">🐾</span>ネコの手を作る](/ja/action/craft-cat-paw) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv15 | 15 | 100% |  |
| [<span class="wiki-icon">👞</span>安全靴を作る](/ja/action/craft-safety-shoes) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv16 | 15 | 100% |  |
| [<span class="wiki-icon">😷</span>マスクを作る](/ja/action/craft-mask) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv17 | 15 | 100% |  |
| [<span class="wiki-icon">🥦</span>ブロッコリーを作る](/ja/action/craft-broccoli) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv13 | 3 | 100% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🧭</span>迷い道](/ja/event/lost-path) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🌿</span>苔](/ja/item/moss) ×10 |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv10以上

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `moss` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `4` |
| `sellingValue` | `2` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "moss",
		"name": "苔",
		"explanation": "静かに広がる緑の絨毯。",
		"icon": {
			"emoji": "🌿",
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
	"requirements": [
		{
			"type": "category",
			"id": "melee-weapon",
			"count": 10,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
