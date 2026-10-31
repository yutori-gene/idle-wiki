# 軽業

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">軽業</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🤸</span></div><table><tr><th>発動率</th><td>8%／ターン</td></tr><tr><th>効果</th><td>回避+7</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 地面に足をつけている時間が短い。


## 効果

戦闘（スタミナ）の各ターンに 8% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  | 7 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐰</span>ラビットガール](/ja/action/rabbit-girl) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv9 |
| [<span class="wiki-icon">🦎</span>サラマンダー](/ja/action/salamander) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 |
| [<span class="wiki-icon">🐿️</span>リス](/ja/action/squirrel) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv41 |
| [<span class="wiki-icon">🐱</span>化け猫](/ja/action/bakeneko) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv45 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🪓</span>トマホーク](/ja/item/tomahawk) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `acrobatics` |
| `chance` | `0.08` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "acrobatics",
		"name": "軽業",
		"explanation": "地面に足をつけている時間が短い。",
		"icon": {
			"emoji": "🤸",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.08,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 7,
		"restore": 0
	},
	"comment": false
}
```

</details>
