# 護りの構え

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">護りの構え</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/27a7a8183f2f17f8.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>防御+7・回避+4・回復+7</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 守るものがある者の背中は、なぜか厚い。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 7 |  | 4 | 7 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/1c69fa1f35cbd5b4.svg" alt="">黒曜石のガーゴイル](/ja/action/obsidian-gargoyle) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv44 |
| [<img class="wiki-icon" src="assets/icon/0f2bdf78d9abe485.svg" alt="">パラディン](/ja/action/paladin) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv45 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3d1e6025d4c76b14.svg" alt="">翡翠のかんざし](/ja/item/jade-hairpin) | [<img class="wiki-icon" src="assets/icon/6c462d8e036e535b.svg" alt="">頭部防具](/ja/group/head-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `guard-stance` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "guard-stance",
		"name": "護りの構え",
		"explanation": "守るものがある者の背中は、なぜか厚い。",
		"icon": {
			"emoji": "🛡️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/27a7a8183f2f17f8.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 7,
		"accuracy": 0,
		"evasion": 4,
		"restore": 7
	},
	"comment": true
}
```

</details>
