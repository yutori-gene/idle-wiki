# 炎の花

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">炎の花</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌺</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>21 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 咲く場所は火口のみ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔮</span>火口付近の結晶拾い](/ja/action/crater-crystal-gathering) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv9 | 3 | 48% | 0.72 | 37 |
| [<span class="wiki-icon">🦎</span>サラマンダー](/ja/action/salamander) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 | 1 | 0.297% | 0.001 | 0.033 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐦‍🔥</span>火喰い鳥](/ja/action/fire-eating-bird) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv36 | 1 | 0.286% |  |
| [<span class="wiki-icon">🔥</span>熱い想いを受け継ぐ](/ja/action/inherit-burning-passion) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv35 | 5 | 100% |  |
| [<span class="wiki-icon">💋</span>投げキッスを作る](/ja/action/craft-blown-kiss) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv37 | 2 | 100% |  |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `flame-flower` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `21` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 7 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "flame-flower",
		"name": "炎の花",
		"explanation": "咲く場所は火口のみ。",
		"icon": {
			"emoji": "🌺",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 21,
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
