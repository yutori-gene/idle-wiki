# 手当て

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">手当て</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🩹</span></div><table><tr><th>発動率</th><td>7%／ターン</td></tr><tr><th>効果</th><td>回復+7</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 戦いながら傷を縫う。慣れの問題。


## 効果

戦闘（スタミナ）の各ターンに 7% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 7 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🏴‍☠️</span>海賊の頭](/ja/action/pirate-captain) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv19 |
| [<span class="wiki-icon">🧟</span>ミイラ](/ja/action/mummy) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv43 |
| [<span class="wiki-icon">😇</span>天使](/ja/action/angel) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🪄</span>封印の杖](/ja/item/sealing-staff) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `first-aid` |
| `chance` | `0.07` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "first-aid",
		"name": "手当て",
		"explanation": "戦いながら傷を縫う。慣れの問題。",
		"icon": {
			"emoji": "🩹",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.07,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 7
	},
	"comment": false
}
```

</details>
