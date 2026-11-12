# 見切り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">見切り</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/af21eb96325d1902.svg" alt=""></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>回避+4</td></tr><tr><th>持つ敵</th><td>6体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 飛んでくるものは、だいたい遅い。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  | 4 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5ae28253f47375a3.svg" alt="">ゴブリン](/ja/action/goblin) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv24 |
| [<img class="wiki-icon" src="assets/icon/7d17b80929b706cc.svg" alt="">盗賊](/ja/action/thief) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv20 |
| [<img class="wiki-icon" src="assets/icon/1b2297a6cd429b94.svg" alt="">火喰い鳥](/ja/action/fire-eating-bird) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv38 |
| [<img class="wiki-icon" src="assets/icon/544de9bef8647904.svg" alt="">リス](/ja/action/squirrel) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv40 |
| [<img class="wiki-icon" src="assets/icon/657885362fae1efc.svg" alt="">化け猫](/ja/action/bakeneko) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv16 |
| [<img class="wiki-icon" src="assets/icon/9f2b3b58eb91f6ca.svg" alt="">バジリスク](/ja/action/basilisk) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/47ec7d4b68d417f6.svg" alt="">雪玉](/ja/item/snowball) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `perception` |
| `chance` | `0.12` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "perception",
		"name": "見切り",
		"explanation": "飛んでくるものは、だいたい遅い。",
		"icon": {
			"emoji": "👁️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/af21eb96325d1902.svg）"
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 4,
		"restore": 0
	},
	"comment": false
}
```

</details>
