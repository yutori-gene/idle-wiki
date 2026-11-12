# 曲芸

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">曲芸</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/68e47acdab7f330c.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>精度+5・回避+9・回復+3</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 当てるついでに、避けておく。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 5 | 9 | 3 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/bcb019bf5c706cb3.svg" alt="">マーメイド](/ja/action/mermaid) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv50 |
| [<img class="wiki-icon" src="assets/icon/88313a9dc8e4e6f5.svg" alt="">妖精](/ja/action/fairy) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv30 |
| [<img class="wiki-icon" src="assets/icon/3bc4421543721689.svg" alt="">バンパイヤ](/ja/action/vampire) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/8558fc8f4fdb9def.svg" alt="">メデューサ](/ja/action/medusa) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv5 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/19258e860c7a0422.svg" alt="">時のリコーダー](/ja/item/recorder-of-time) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `stunt` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "stunt",
		"name": "曲芸",
		"explanation": "当てるついでに、避けておく。",
		"icon": {
			"emoji": "🤹",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/68e47acdab7f330c.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 5,
		"evasion": 9,
		"restore": 3
	},
	"comment": true
}
```

</details>
