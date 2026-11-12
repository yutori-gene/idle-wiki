# 不撓不屈

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">不撓不屈</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/a46ea7d680460845.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>防御+7・回避+3・回復+9</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 折れないのではない。折れても立つのだ。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 7 |  | 3 | 9 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2de7e6dc75e72112.svg" alt="">ゾンビ](/ja/action/zombie) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv32 |
| [<img class="wiki-icon" src="assets/icon/76acb221c339059c.svg" alt="">旧型作業ロボ](/ja/action/old-work-robot) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/6c3069c276750054.svg" alt="">亡霊騎士](/ja/action/ghost-knight) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv21 |
| [<img class="wiki-icon" src="assets/icon/0218c089efa72a77.svg" alt="">ミイラ](/ja/action/mummy) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv1 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6359e3756965c87e.svg" alt="">エクスカリバー](/ja/item/excalibur) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `indomitable` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "indomitable",
		"name": "不撓不屈",
		"explanation": "折れないのではない。折れても立つのだ。",
		"icon": {
			"emoji": "💪",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/a46ea7d680460845.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 0,
		"defence": 7,
		"accuracy": 0,
		"evasion": 3,
		"restore": 9
	},
	"comment": true
}
```

</details>
