# モーター

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">モーター</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚙️</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>54 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・イベント</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 電気を回転に変える心臓。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🤖</span>暴走ロボット](/ja/action/rampaging-robot) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv32 | 2 | 57.6% | 0.576 | 0.011 |

### イベント

| イベント | タイミング | 個数 | 確率 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🔩</span>ネジ拾い](/ja/event/screw-pickup) | 条件達成（タスク） | 1 | 100% |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">👊</span>ロケットパンチを作る](/ja/action/craft-rocket-punch) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv28 | 3 | 100% |  |
| [<span class="wiki-icon">💍</span>力の指輪を作る](/ja/action/craft-ring-of-power) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv29 | 3 | 100% |  |
| [<span class="wiki-icon">🎙️</span>蝶ネクタイ型変声機を作る](/ja/action/craft-bowtie-voice-changer) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv30 | 2 | 100% |  |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `motor` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `54` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "motor",
		"name": "モーター",
		"explanation": "電気を回転に変える心臓。",
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
	"sellingValue": 54,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
