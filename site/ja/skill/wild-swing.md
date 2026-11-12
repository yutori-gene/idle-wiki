# 大振り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">大振り</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/fb717544586539c6.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+14・精度-9</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 当たれば終わる。当たれば。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 14 |  | -9 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/caf79c699a6ed796.svg" alt="">オーク](/ja/action/orc) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv35 |
| [<img class="wiki-icon" src="assets/icon/fe99be048a5764e4.svg" alt="">プレス機](/ja/action/press-machine) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv50 |
| [<img class="wiki-icon" src="assets/icon/0c0348d8c43a934d.svg" alt="">牢番](/ja/action/jailer) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv35 |
| [<img class="wiki-icon" src="assets/icon/58090c8ec941246b.svg" alt="">ドワーフ](/ja/action/dwarf) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv42 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/331c8c28a213bc53.svg" alt="">如意棒](/ja/item/ruyi-staff) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wild-swing` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wild-swing",
		"name": "大振り",
		"explanation": "当たれば終わる。当たれば。",
		"icon": {
			"emoji": "🪓",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/fb717544586539c6.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 14,
		"defence": 0,
		"accuracy": -9,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
