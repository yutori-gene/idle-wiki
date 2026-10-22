# 玉砕

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">玉砕</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💥</span></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御-10・精度+10・回避-8</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 散り際だけは、誰よりも美しく。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | -10 | 10 | -8 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🔥</span>イフリート](/ja/action/ifrit) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv43 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">💣</span>N2爆雷](/ja/item/n2-mine) | [<span class="wiki-icon">💣</span>爆発武器](/ja/group/explosive-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `glorious-death` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "glorious-death",
		"name": "玉砕",
		"explanation": "散り際だけは、誰よりも美しく。",
		"icon": {
			"emoji": "💥",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": -10,
		"accuracy": 10,
		"evasion": -8,
		"restore": 0
	},
	"comment": true
}
```

</details>
