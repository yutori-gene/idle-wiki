# 過剰装薬

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">過剰装薬</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/bdc72488c194c66d.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>攻撃+12・精度-8</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 入るだけ詰めた。狙いは知らない。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 12 |  | -8 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6e8705b278892508.svg" alt="">マッドサイエンティスト](/ja/action/mad-scientist) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv6 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/b1e5fb60e1ab8e43.svg" alt="">トロイの木馬](/ja/item/trojan-horse) | [<img class="wiki-icon" src="assets/icon/5c805af870858afc.svg" alt="">爆発武器](/ja/group/explosive-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `overcharge` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "overcharge",
		"name": "過剰装薬",
		"explanation": "入るだけ詰めた。狙いは知らない。",
		"icon": {
			"emoji": "🔥",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/bdc72488c194c66d.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 12,
		"defence": 0,
		"accuracy": -8,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
