# 身軽

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">身軽</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/94a89c0cea67ba6b.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>防御-9・回避+12</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 何も背負わなければ、何にも当たらない。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | -9 |  | 12 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/99401bbf87efddfd.svg" alt="">サーペント](/ja/action/serpent) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv23 |
| [<img class="wiki-icon" src="assets/icon/f9fd0a0c8a75a1c9.svg" alt="">サラマンダー](/ja/action/salamander) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv13 |
| [<img class="wiki-icon" src="assets/icon/88313a9dc8e4e6f5.svg" alt="">妖精](/ja/action/fairy) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv30 |
| [<img class="wiki-icon" src="assets/icon/3bc4421543721689.svg" alt="">バンパイヤ](/ja/action/vampire) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/9635026f25519f71.svg" alt="">ペガサス](/ja/action/pegasus) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv34 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3e0a845491a96b79.svg" alt="">バットラング](/ja/item/batarang) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `light-footed` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "light-footed",
		"name": "身軽",
		"explanation": "何も背負わなければ、何にも当たらない。",
		"icon": {
			"emoji": "🐦",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/94a89c0cea67ba6b.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 0,
		"defence": -9,
		"accuracy": 0,
		"evasion": 12,
		"restore": 0
	},
	"comment": true
}
```

</details>
