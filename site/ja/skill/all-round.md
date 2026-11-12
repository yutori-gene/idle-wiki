# 万能

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">万能</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/65a2b02df837b7ee.svg" alt=""></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+6・防御+6・精度+6・回避+6・回復+6</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 器用貧乏と紙一重。ただし紙一重の側にいる。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 6 | 6 | 6 | 6 | 6 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/9ec762b2c27c2721.svg" alt="">ミュータント](/ja/action/mutant) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv39 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/44caa25ecd4b33aa.svg" alt="">時を止める砂時計](/ja/item/time-stopping-hourglass) | [<img class="wiki-icon" src="assets/icon/47ba4b0004eb0e60.svg" alt="">アクセサリー](/ja/group/accessory) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `all-round` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "all-round",
		"name": "万能",
		"explanation": "器用貧乏と紙一重。ただし紙一重の側にいる。",
		"icon": {
			"emoji": "🌈",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/65a2b02df837b7ee.svg）"
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 6,
		"defence": 6,
		"accuracy": 6,
		"evasion": 6,
		"restore": 6
	},
	"comment": true
}
```

</details>
