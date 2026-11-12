# 傷薬

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">傷薬</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/c52eb9a11ae26a6e.svg" alt=""></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>回復+5</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 効くかどうかより、塗ったという安心。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 5 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/300032c34ac7363c.svg" alt="">司祭](/ja/action/priest) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv1 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6006b6e463663102.svg" alt="">革の手袋](/ja/item/leather-gloves) | [<img class="wiki-icon" src="assets/icon/fb530857299597e8.svg" alt="">腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `salve` |
| `chance` | `0.1` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "salve",
		"name": "傷薬",
		"explanation": "効くかどうかより、塗ったという安心。",
		"icon": {
			"emoji": "💊",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/c52eb9a11ae26a6e.svg）"
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 5
	},
	"comment": false
}
```

</details>
