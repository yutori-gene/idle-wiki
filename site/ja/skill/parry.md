# 受け流し

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">受け流し</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/81ebbbf085f9279e.svg" alt=""></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>防御+3</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 力を殺さず、向きだけ変える。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 3 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/cd1dda47c898102f.svg" alt="">カタツムリ](/ja/action/snail) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv7 |
| [<span class="wiki-icon">👥</span>ドッペルゲンガー](/ja/action/doppelganger) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv15 |
| [<span class="wiki-icon">🛡️</span>騎士](/ja/action/knight) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🔩</span>鉄の棒](/ja/item/iron-rod) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `parry` |
| `chance` | `0.12` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "parry",
		"name": "受け流し",
		"explanation": "力を殺さず、向きだけ変える。",
		"icon": {
			"emoji": "🤺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/81ebbbf085f9279e.svg）"
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 0,
		"defence": 3,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
