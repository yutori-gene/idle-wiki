# 見栄

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">見栄</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🎭</span></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>攻撃+11・防御-7</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 強く見せた分だけ、隙が生まれる。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 11 | -7 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐘</span>ベヒモス](/ja/action/behemoth) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv46 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⌚</span>スマートリング](/ja/item/smart-ring) | [<span class="wiki-icon">💍</span>指輪](/ja/group/ring) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `vanity` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "vanity",
		"name": "見栄",
		"explanation": "強く見せた分だけ、隙が生まれる。",
		"icon": {
			"emoji": "🎭",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 11,
		"defence": -7,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
