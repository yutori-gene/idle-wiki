# 加護

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">加護</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">😇</span></div><table><tr><th>発動率</th><td>11%／ターン</td></tr><tr><th>効果</th><td>回復+4</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 誰かが見てくれている、という思い込み。


## 効果

戦闘（スタミナ）の各ターンに 11% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 4 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🏠</span>自宅警備員](/ja/action/shut-in-guard) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv5 |
| [<span class="wiki-icon">🐉</span>ヒュドラ](/ja/action/hydra) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv12 |
| [<span class="wiki-icon">😇</span>熾天使](/ja/action/seraph) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">💍</span>ドラゴンの指輪](/ja/item/dragon-ring) | [<span class="wiki-icon">💍</span>指輪](/ja/group/ring) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `divine-protection` |
| `chance` | `0.11` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "divine-protection",
		"name": "加護",
		"explanation": "誰かが見てくれている、という思い込み。",
		"icon": {
			"emoji": "😇",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.11,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 4
	},
	"comment": false
}
```

</details>
