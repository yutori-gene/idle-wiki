# 先読み

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">先読み</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/58401ee48ed166a9.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>精度+6・回避+8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 当たる前に、当たらない場所へ動いている。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 6 | 8 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2dab731f5693bdc8.svg" alt="">シャーマン](/ja/action/shaman) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv19 |
| [<img class="wiki-icon" src="assets/icon/89c610e4308f7183.svg" alt="">監視カメラの群れ](/ja/action/camera-swarm) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv34 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f67c0db7729bfca4.svg" alt="">ニュータイプ](/ja/item/newtype) | [<img class="wiki-icon" src="assets/icon/7c7dbb617148ad3b.svg" alt="">能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `foresight` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "foresight",
		"name": "先読み",
		"explanation": "当たる前に、当たらない場所へ動いている。",
		"icon": {
			"emoji": "👁️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/58401ee48ed166a9.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 6,
		"evasion": 8,
		"restore": 0
	},
	"comment": true
}
```

</details>
