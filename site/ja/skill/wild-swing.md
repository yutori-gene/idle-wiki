# 大振り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">大振り</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪓</span></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+14・精度-9</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 当たれば終わる。当たれば。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 14 |  | -9 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">👹</span>オーク](/ja/action/orc) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv11 |
| [<span class="wiki-icon">⚙️</span>プレス機](/ja/action/press-machine) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv32 |
| [<span class="wiki-icon">🔒</span>牢番](/ja/action/jailer) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv40 |
| [<span class="wiki-icon">🧔</span>ドワーフ](/ja/action/dwarf) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv47 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🪄</span>如意棒](/ja/item/ruyi-staff) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wild-swing` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wild-swing",
		"name": "大振り",
		"explanation": "当たれば終わる。当たれば。",
		"icon": {
			"emoji": "🪓",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 14,
		"defence": 0,
		"accuracy": -9,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
