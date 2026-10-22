# 導火線を短く

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">導火線を短く</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⏱️</span></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>攻撃+10・回避-6</td></tr><tr><th>持つ敵</th><td>0体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 早く咲く花は、近くで散る。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 10 |  |  | -6 |  |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">💣</span>手榴弾](/ja/item/grenade) | [<span class="wiki-icon">💣</span>爆発武器](/ja/group/explosive-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `short-fuse` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "short-fuse",
		"name": "導火線を短く",
		"explanation": "早く咲く花は、近くで散る。",
		"icon": {
			"emoji": "⏱️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 10,
		"defence": 0,
		"accuracy": 0,
		"evasion": -6,
		"restore": 0
	},
	"comment": true
}
```

</details>
