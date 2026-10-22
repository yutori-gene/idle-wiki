# 二の太刀

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">二の太刀</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚔️</span></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>攻撃+4</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 一撃目は、二撃目のための布石。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 4 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🪲</span>カブトムシ](/ja/action/beetle) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv7 |
| [<span class="wiki-icon">🐍</span>ヘビ](/ja/action/snake) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv8 |
| [<span class="wiki-icon">🦁</span>マンティコア](/ja/action/manticore) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv26 |
| [<span class="wiki-icon">🦝</span>大きなタヌキ？](/ja/action/big-tanuki) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv49 |
| [<span class="wiki-icon">🐔</span>ニワトリ](/ja/action/chicken) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv5 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🐟</span>冷凍マグロ](/ja/item/frozen-tuna) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `second-strike` |
| `chance` | `0.12` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "second-strike",
		"name": "二の太刀",
		"explanation": "一撃目は、二撃目のための布石。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 4,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
