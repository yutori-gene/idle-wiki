# 踏み込み

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">踏み込み</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏃</span></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>精度+5</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 半歩で、届く距離が変わる。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 5 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐺</span>ウルフ](/ja/action/wolf) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv12 |
| [<span class="wiki-icon">🔒</span>牢番](/ja/action/jailer) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv40 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🪵</span>木の棒](/ja/item/wooden-stick) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `step-in` |
| `chance` | `0.1` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "step-in",
		"name": "踏み込み",
		"explanation": "半歩で、届く距離が変わる。",
		"icon": {
			"emoji": "🏃",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
