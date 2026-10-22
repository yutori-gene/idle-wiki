# 軽量化

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">軽量化</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪶</span></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>防御-9・回避+13</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 守りを削って得た速さは、守りより頼りになる。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | -9 |  | 13 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🚗</span>ねこリムジン](/ja/action/cat-limousine) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">👟</span>羽のついた靴](/ja/item/winged-shoes) | [<span class="wiki-icon">👖</span>脚部装備](/ja/group/leg-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `lightening` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "lightening",
		"name": "軽量化",
		"explanation": "守りを削って得た速さは、守りより頼りになる。",
		"icon": {
			"emoji": "🪶",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": -9,
		"accuracy": 0,
		"evasion": 13,
		"restore": 0
	},
	"comment": true
}
```

</details>
