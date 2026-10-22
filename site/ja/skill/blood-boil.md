# 血の滾り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">血の滾り</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🩸</span></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御-10・回復+10</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 痛みが快感に変わる頃には、もう止まれない。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | -10 |  |  | 10 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🎩</span>ジョーンズ](/ja/action/jones) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv21 |
| [<span class="wiki-icon">🧟</span>腐った暴君](/ja/action/rotten-tyrant) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🗡️</span>ムラマサ](/ja/item/muramasa) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `blood-boil` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "blood-boil",
		"name": "血の滾り",
		"explanation": "痛みが快感に変わる頃には、もう止まれない。",
		"icon": {
			"emoji": "🩸",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": -10,
		"accuracy": 0,
		"evasion": 0,
		"restore": 10
	},
	"comment": true
}
```

</details>
