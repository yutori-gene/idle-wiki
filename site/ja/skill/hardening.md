# 硬化

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">硬化</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/d21813beac521f02.svg" alt=""></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>防御+3</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 力を入れれば、そこは石になる。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 3 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f4a063e2ef801314.svg" alt="">巨大なクモ](/ja/action/giant-spider) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv1 |
| [<img class="wiki-icon" src="assets/icon/8a25194356ea6eb5.svg" alt="">タートル](/ja/action/sea-turtle) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv39 |
| [<img class="wiki-icon" src="assets/icon/60b7195e9620edc7.svg" alt="">氷](/ja/action/ice) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv35 |
| [<img class="wiki-icon" src="assets/icon/b46f66ee088a069f.svg" alt="">溶岩ゴーレム](/ja/action/lava-golem) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv1 |
| [<img class="wiki-icon" src="assets/icon/a1198ac4d82115d0.svg" alt="">フリーズ様](/ja/action/lord-freeze) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv20 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/92705e62cce0aba8.svg" alt="">軍手](/ja/item/work-gloves) | [<img class="wiki-icon" src="assets/icon/fb530857299597e8.svg" alt="">腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `hardening` |
| `chance` | `0.12` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "hardening",
		"name": "硬化",
		"explanation": "力を入れれば、そこは石になる。",
		"icon": {
			"emoji": "🛡️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/d21813beac521f02.svg）"
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 0,
		"defence": 3,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
