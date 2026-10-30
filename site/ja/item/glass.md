# ガラス

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ガラス</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪟</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 不思議な透明物質。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧹</span>清掃活動](/ja/action/cleanup-activity) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv3 | 1 | 6% | 0.03 | 10.8 |
| [<span class="wiki-icon">🪷</span>池のほとり](/ja/action/pond-side) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv14 | 1 | 18% | 0.09 | 32.4 |
| [<span class="wiki-icon">🧟</span>ゾンビ](/ja/action/zombie) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 1 | 2.56% | 0.013 | 1.5 |
| [<span class="wiki-icon">🐢</span>タートル](/ja/action/sea-turtle) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv21 | 1 | 0.306% | 0.002 | 0.004 |
| [<span class="wiki-icon">🪞</span>魔法の鏡](/ja/action/magic-mirror) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 | 1 | 3.5% | 0.018 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">👥</span>ドッペルゲンガー](/ja/action/doppelganger) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv15 | 1 | 1.11% |  |
| [<span class="wiki-icon">🔮</span>万華鏡を作る](/ja/action/craft-kaleidoscope) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv35 | 3 | 100% |  |
| [<span class="wiki-icon">🔨</span>ハンマーを作る](/ja/action/craft-hammer) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv16 | 3 | 100% |  |
| [<span class="wiki-icon">🧤</span>軍手を作る](/ja/action/craft-work-gloves) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv15 | 3 | 100% |  |
| [<span class="wiki-icon">🐾</span>ネコの手を作る](/ja/action/craft-cat-paw) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv15 | 3 | 100% |  |
| [<span class="wiki-icon">👞</span>安全靴を作る](/ja/action/craft-safety-shoes) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv16 | 3 | 100% |  |
| [<span class="wiki-icon">👨‍🍳</span>シェフハットを作る](/ja/action/craft-chef-hat) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv16 | 3 | 100% |  |
| [<span class="wiki-icon">😷</span>マスクを作る](/ja/action/craft-mask) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv17 | 3 | 100% |  |
| [<span class="wiki-icon">🔴</span>賢者の石を作る](/ja/action/craft-philosophers-stone) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv17 | 3 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `glass` |
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
| CSV `memo` | 空賊 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "glass",
		"name": "ガラス",
		"explanation": "不思議な透明物質。",
		"icon": {
			"emoji": "🪟",
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
