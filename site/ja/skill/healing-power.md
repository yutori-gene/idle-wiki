# 治癒力

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">治癒力</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/33c15442b76d44aa.svg" alt=""></div><table><tr><th>発動率</th><td>7%／ターン</td></tr><tr><th>効果</th><td>回復+8</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 寝れば治る。だいたいのことは。


## 効果

戦闘（スタミナ）の各ターンに 7% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e1bd57a21d5fa216.svg" alt="">フェニックス](/ja/action/phoenix) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv5 |
| [<img class="wiki-icon" src="assets/icon/3aad8de08b0fee46.svg" alt="">エレメンタリスト](/ja/action/elementalist) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv6 |
| [<img class="wiki-icon" src="assets/icon/a399a48719b8f036.svg" alt="">悪魔](/ja/action/demon) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv39 |
| [<img class="wiki-icon" src="assets/icon/0f2bdf78d9abe485.svg" alt="">パラディン](/ja/action/paladin) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv45 |
| [<img class="wiki-icon" src="assets/icon/c7d3ecb34b9e3294.svg" alt="">ミミズ](/ja/action/earthworm) | [<img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭](/ja/category/garden) | Lv16 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e85744d6ecaf4853.svg" alt="">麻酔時計](/ja/item/anesthetic-watch) | [<img class="wiki-icon" src="assets/icon/fb530857299597e8.svg" alt="">腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `healing-power` |
| `chance` | `0.07` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "healing-power",
		"name": "治癒力",
		"explanation": "寝れば治る。だいたいのことは。",
		"icon": {
			"emoji": "💚",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/33c15442b76d44aa.svg）"
		},
		"color": ""
	},
	"chance": 0.07,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 8
	},
	"comment": false
}
```

</details>
