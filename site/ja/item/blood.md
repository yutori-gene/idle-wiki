# 血液

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">血液</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🩸</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>24 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 命の源。赤くて生臭い。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⛓️</span>地下牢の奥](/ja/action/deep-dungeon-cell) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv8 | 3 | 63.6% | 1.9 | 0.477 |
| [<span class="wiki-icon">🦇</span>コウモリ](/ja/action/bat) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv45 | 1 | 0.427% | 0.002 | 0.013 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💉</span>ワクチンの調合](/ja/action/brew-vaccine) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv30 | 3 | 100% |  |
| [<span class="wiki-icon">🧪</span>LCLの調合](/ja/action/brew-lcl) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv38 | 2 | 100% |  |
| [<span class="wiki-icon">📼</span>無限ループするビデオテープを複製する](/ja/action/copy-infinite-loop-videotape) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv42 | 4 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `blood` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `24` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 8 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "blood",
		"name": "血液",
		"explanation": "命の源。赤くて生臭い。",
		"icon": {
			"emoji": "🩸",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 24,
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
