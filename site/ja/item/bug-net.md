# 虫取り網

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">虫取り網</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🥅</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>81 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>162 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 夏の思い出


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧹</span>清掃活動](/ja/action/cleanup-activity) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv3 | 1 | 10.4% | 0.052 | 18.7 |
| [<span class="wiki-icon">🪷</span>池のほとり](/ja/action/pond-side) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv14 | 1 | 10.4% | 0.052 | 18.7 |
| [<span class="wiki-icon">🛶</span>ボート小屋](/ja/action/boathouse) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv16 | 1 | 100% | 1 | 2 |

### 購入

162 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🕷️</span>巨大なクモ](/ja/action/giant-spider) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | [<span class="wiki-icon">🥅</span>虫取り網](/ja/item/bug-net) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🪲</span>カブトムシ](/ja/action/beetle) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | [<span class="wiki-icon">🥅</span>虫取り網](/ja/item/bug-net) ×1（装備が必要・消費しない） |
| [<span class="wiki-icon">🐌</span>カタツムリ](/ja/action/snail) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | [<span class="wiki-icon">🥅</span>虫取り網](/ja/item/bug-net) ×1（装備が必要・消費しない） |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv3以上

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">49件。一覧は <a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bug-net` |
| `category` | `warehouse` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `162` |
| `sellingValue` | `81` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 4 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bug-net",
		"name": "虫取り網",
		"explanation": "夏の思い出",
		"icon": {
			"emoji": "🥅",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 162,
	"sellingValue": 81,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "park",
			"count": 3,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [
		{
			"category": "*",
			"attack": 0,
			"defence": 3,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
