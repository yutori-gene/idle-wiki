# 捨て身

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">捨て身</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/6c5da84df3d8fce0.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>攻撃+12・防御-7</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 守りを捨てた分だけ、刃が伸びる。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 12 | -7 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e0653ffa6617e0e6.svg" alt="">山賊](/ja/action/bandit) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv10 |
| [<img class="wiki-icon" src="assets/icon/cf13bcbb21d1a79d.svg" alt="">暴走ロボット](/ja/action/rampaging-robot) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv45 |
| [<img class="wiki-icon" src="assets/icon/a6aa062ef47dc4a9.svg" alt="">腐った暴君](/ja/action/rotten-tyrant) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv35 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/92d262f973bd96fe.svg" alt="">諸刃の剣](/ja/item/double-edged-sword) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `reckless` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "reckless",
		"name": "捨て身",
		"explanation": "守りを捨てた分だけ、刃が伸びる。",
		"icon": {
			"emoji": "💥",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/6c5da84df3d8fce0.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 12,
		"defence": -7,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
