# 回避機動

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">回避機動</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/3c3abf104ff30226.svg" alt=""></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>精度+4・回避+8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 避けながら間合いを詰めるのが、いちばん速い。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 4 | 8 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/68dfa87f0523444a.svg" alt="">ワイバーン](/ja/action/wyvern) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/52aeba6fbc728c0d.svg" alt="">ねこリムジン](/ja/action/cat-limousine) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv23 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/82050a7f9f2e7ff6.svg" alt="">キック力増強シューズ](/ja/item/kick-boost-shoes) | [<img class="wiki-icon" src="assets/icon/b520170afa4d40a8.svg" alt="">脚部装備](/ja/group/leg-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `evasive-maneuver` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "evasive-maneuver",
		"name": "回避機動",
		"explanation": "避けながら間合いを詰めるのが、いちばん速い。",
		"icon": {
			"emoji": "💨",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/3c3abf104ff30226.svg）"
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 4,
		"evasion": 8,
		"restore": 0
	},
	"comment": true
}
```

</details>
