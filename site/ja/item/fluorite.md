# 蛍石

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">蛍石</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💠</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>54 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>108 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 暗闇で優しく光る。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐉</span>ヒュドラ](/ja/action/hydra) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv12 | 1 | 0.173% | 0.001 | 0.111 |
| [<span class="wiki-icon">⛩️</span>古い祠の調査](/ja/action/investigate-old-shrine) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv8 | 1 | 17.3% | 0.173 | 0.173 |

### 購入

108 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧙</span>魔法使い](/ja/action/wizard) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 2 | 1.17% |  |
| [<span class="wiki-icon">✨</span>発光する薬](/ja/action/brew-glowing-medicine) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv11 | 3 | 100% |  |
| [<span class="wiki-icon">🧪</span>エーテル](/ja/action/brew-ether) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv13 | 2 | 100% |  |
| [<span class="wiki-icon">🪶</span>孔雀の羽を束ねる](/ja/action/bundle-peacock-feather) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv21 | 2 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv10以上

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `fluorite` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `108` |
| `sellingValue` | `54` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "fluorite",
		"name": "蛍石",
		"explanation": "暗闇で優しく光る。",
		"icon": {
			"emoji": "💠",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 108,
	"sellingValue": 54,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
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
