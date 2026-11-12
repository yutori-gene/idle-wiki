# 連撃

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">連撃</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/64c601c4adaf88e2.svg" alt=""></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>攻撃+7・精度+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 止まらない手は、読まれても止められない。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 7 |  | 5 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/0db6569084ef29a0.svg" alt="">野良犬の群れ](/ja/action/stray-dog-pack) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv14 |
| [<img class="wiki-icon" src="assets/icon/94e82149543a0649.svg" alt="">クラーケン](/ja/action/kraken) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv34 |
| [<img class="wiki-icon" src="assets/icon/164e5a20757e6728.svg" alt="">炉の番人](/ja/action/furnace-keeper) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv7 |
| [<img class="wiki-icon" src="assets/icon/434f9ba7725923c7.svg" alt="">ケルベロス](/ja/action/cerberus) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv46 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/91f538cc8d339b5b.svg" alt="">グラディウス](/ja/item/gladius) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `combo` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "combo",
		"name": "連撃",
		"explanation": "止まらない手は、読まれても止められない。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/64c601c4adaf88e2.svg）"
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 7,
		"defence": 0,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
