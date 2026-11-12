# 弾幕

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">弾幕</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/178348f87da1be37.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>攻撃+11・精度-8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 狙わない。埋めるのだ。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 11 |  | -8 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/d14738bbe2aee0a1.svg" alt="">警備ドローン](/ja/action/security-drone) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv28 |
| [<img class="wiki-icon" src="assets/icon/bc5719e3beef9c93.svg" alt="">コウモリ](/ja/action/bat) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv24 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/c9c6b1f5798054cc.svg" alt="">ロシアンルーレット](/ja/item/russian-roulette) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `barrage` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "barrage",
		"name": "弾幕",
		"explanation": "狙わない。埋めるのだ。",
		"icon": {
			"emoji": "💥",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/178348f87da1be37.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 11,
		"defence": 0,
		"accuracy": -8,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
