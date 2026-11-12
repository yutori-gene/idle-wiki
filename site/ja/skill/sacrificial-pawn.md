# 捨て駒

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">捨て駒</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/688c526fa9f4b239.svg" alt=""></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>精度+15・回復-9</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 自分の身体も、投げるものの一つ。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 15 |  | -9 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/85fb750f8b81f006.svg" alt="">巨大クレーン](/ja/action/giant-crane) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv17 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/58b2a016832ea29b.svg" alt="">マグロケット](/ja/item/tuna-rocket) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sacrificial-pawn` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sacrificial-pawn",
		"name": "捨て駒",
		"explanation": "自分の身体も、投げるものの一つ。",
		"icon": {
			"emoji": "♟️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/688c526fa9f4b239.svg）"
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 15,
		"evasion": 0,
		"restore": -9
	},
	"comment": true
}
```

</details>
