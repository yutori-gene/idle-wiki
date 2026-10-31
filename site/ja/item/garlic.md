# ニンニク

<div class="wiki-infobox" style="--accent:#849b88"><div class="wiki-infobox-title">ニンニク</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧄</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/field-blessing"><span class="wiki-icon">🪱</span>畑の恵み</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 臭うけれど元気になる。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。使うたびに消費する。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2e30f354dd5c201b.svg" alt="">自宅警備員](/ja/action/shut-in-guard) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv5 | 1 | 3.67% | 0.018 | 2.9 |
| [<span class="wiki-icon">🧄</span>ニンニク](/ja/action/grow-garlic) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv7 | 13 | 100% | 9.8 | 9.8 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧛</span>バンパイヤ](/ja/action/vampire) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv44 | 1 | 0.296% |  |
| [<span class="wiki-icon">🧄</span>ニンニク](/ja/action/grow-garlic) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv7 | 1 | 100% |  |
| [<span class="wiki-icon">🐌</span>エスカルゴ](/ja/action/cook-escargot) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv16 | 5 | 100% |  |
| [<span class="wiki-icon">🥘</span>野菜炒め](/ja/action/cook-stir-fried-vegetables) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv27 | 4 | 100% |  |
| [<span class="wiki-icon">🥟</span>肉まんのトマト煮](/ja/action/cook-meat-bun-tomato-stew) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv31 | 5 | 100% |  |
| [<span class="wiki-icon">⚰️</span>吸血鬼の棺](/ja/action/open-vampire-coffin) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv38 | 2 | 100% |  |

<div class="wiki-navbox" style="--accent:#849b88"><div class="wiki-navbox-title">グループ: 畑の恵み</div><div class="wiki-navbox-body"><a href="#/ja/item/garlic"><span class="wiki-icon">🧄</span>ニンニク</a> ・ <a href="#/ja/item/earthworm"><span class="wiki-icon">🪱</span>ミミズ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `garlic` |
| `category` | `greenhouse` |
| `group` | `field-blessing` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
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
	"group": "field-blessing",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 3,
			"defence": 0,
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
