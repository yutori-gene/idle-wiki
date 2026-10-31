# 盤石

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">盤石</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪨</span></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>防御+8・回復+5</td></tr><tr><th>持つ敵</th><td>6体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 一歩も引かない者は、一歩も削られない。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 8 |  |  | 5 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐻</span>クマ](/ja/action/bear) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv11 |
| [<span class="wiki-icon">🐻‍❄️</span>ホッキョクグマ](/ja/action/polar-bear) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 |
| [<span class="wiki-icon">🔥</span>炉の番人](/ja/action/furnace-keeper) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv34 |
| [<span class="wiki-icon">🗿</span>ゴーレム](/ja/action/golem) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv38 |
| [<span class="wiki-icon">🧔</span>ドワーフ](/ja/action/dwarf) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv47 |
| [<span class="wiki-icon">🍝</span>スパゲッティモンスター](/ja/action/spaghetti-monster) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⚔️</span>ビームサーベル](/ja/item/beam-saber) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `solid-ground` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "solid-ground",
		"name": "盤石",
		"explanation": "一歩も引かない者は、一歩も削られない。",
		"icon": {
			"emoji": "🪨",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 8,
		"accuracy": 0,
		"evasion": 0,
		"restore": 5
	},
	"comment": true
}
```

</details>
