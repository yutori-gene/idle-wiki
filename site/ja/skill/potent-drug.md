# 劇薬

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">劇薬</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/1255de93bdc4c106.svg" alt=""></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御-10・精度+10</td></tr><tr><th>持つ敵</th><td>0体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 効きすぎる薬は、たいてい毒でもある。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | -10 | 10 |  |  |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/321dc2a4f2dac680.svg" alt="">阿片](/ja/item/opium) | [<img class="wiki-icon" src="assets/icon/4815effeebbe3bb0.svg" alt="">ポーション](/ja/group/potion) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `potent-drug` |
| `chance` | `0.12` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "potent-drug",
		"name": "劇薬",
		"explanation": "効きすぎる薬は、たいてい毒でもある。",
		"icon": {
			"emoji": "☠️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/1255de93bdc4c106.svg）"
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 15,
		"defence": -10,
		"accuracy": 10,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
