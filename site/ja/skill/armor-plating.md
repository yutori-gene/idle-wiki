# 装甲

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">装甲</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/d9517812a50147d7.svg" alt=""></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>防御+8・回復+4</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 硬さは、時間を稼ぐという意味だ。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 8 |  |  | 4 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e3daf5030f26dcd0.svg" alt="">空飛ぶ象](/ja/action/flying-elephant) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv39 |
| [<img class="wiki-icon" src="assets/icon/60b7195e9620edc7.svg" alt="">氷](/ja/action/ice) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv35 |
| [<img class="wiki-icon" src="assets/icon/3aad8de08b0fee46.svg" alt="">エレメンタリスト](/ja/action/elementalist) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv6 |
| [<img class="wiki-icon" src="assets/icon/a1198ac4d82115d0.svg" alt="">フリーズ様](/ja/action/lord-freeze) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv20 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/fb77d9c7fa10a1ce.svg" alt="">鉄の胸当](/ja/item/iron-breastplate) | [<img class="wiki-icon" src="assets/icon/0f29202c4827bbc2.svg" alt="">胴体装備](/ja/group/body-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `armor-plating` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "armor-plating",
		"name": "装甲",
		"explanation": "硬さは、時間を稼ぐという意味だ。",
		"icon": {
			"emoji": "🛡️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/d9517812a50147d7.svg）"
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 0,
		"defence": 8,
		"accuracy": 0,
		"evasion": 0,
		"restore": 4
	},
	"comment": true
}
```

</details>
