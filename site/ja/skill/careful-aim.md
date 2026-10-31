# 狙い澄まし

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">狙い澄まし</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🎯</span></div><table><tr><th>発動率</th><td>9%／ターン</td></tr><tr><th>効果</th><td>精度+6</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 息を止める一瞬だけ、風が凪ぐ。


## 効果

戦闘（スタミナ）の各ターンに 9% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 6 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐉</span>ワイバーン](/ja/action/wyvern) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv24 |
| [<span class="wiki-icon">🐍</span>バジリスク](/ja/action/basilisk) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv47 |
| [<img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー](/ja/action/valkyrie) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv49 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">👊</span>ロケットパンチ](/ja/item/rocket-punch) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `careful-aim` |
| `chance` | `0.09` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "careful-aim",
		"name": "狙い澄まし",
		"explanation": "息を止める一瞬だけ、風が凪ぐ。",
		"icon": {
			"emoji": "🎯",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.09,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 6,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
