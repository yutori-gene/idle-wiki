# 腐った肉

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">腐った肉</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍖</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>9 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ときどき脈打つ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐕</span>パブロフの犬](/ja/action/pavlovs-dog) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv6 | 1 | 0.53% | 0.003 | 0.732 |
| [<span class="wiki-icon">🧟</span>ゾンビ](/ja/action/zombie) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 1 | 1.54% | 0.008 | 0.888 |
| [<span class="wiki-icon">🐀</span>ドブネズミ](/ja/action/sewer-rat) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 1 | 0.96% | 0.005 | 0.886 |
| [<span class="wiki-icon">🗿</span>巨神兵](/ja/action/god-warrior) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 | 1 | 0.212% | 0.001 | 0.002 |
| [<span class="wiki-icon">🚪</span>ワイルドドア](/ja/action/wild-door) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 | 1 | 0.768% | 0.004 | 0.068 |
| [<span class="wiki-icon">🗿</span>ガーゴイル](/ja/action/gargoyle) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv42 | 1 | 0.768% | 0.004 | 0 |
| [<span class="wiki-icon">🧟</span>腐った暴君](/ja/action/rotten-tyrant) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 | 1 | 0.512% | 0.003 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍄</span>歩くキノコ](/ja/action/walking-mushroom) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv8 | 1 | 2.25% |  |
| [<span class="wiki-icon">🔴</span>賢者の石を作る](/ja/action/craft-philosophers-stone) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv17 | 15 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv2以上

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rotten-meat` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `9` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 2 |
| CSV `memo` | 人体実験 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rotten-meat",
		"name": "腐った肉",
		"explanation": "ときどき脈打つ。",
		"icon": {
			"emoji": "🍖",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 9,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "park",
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
