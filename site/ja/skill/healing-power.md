# 治癒力

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">治癒力</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💚</span></div><table><tr><th>発動率</th><td>7%／ターン</td></tr><tr><th>効果</th><td>回復+8</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 寝れば治る。だいたいのことは。


## 効果

戦闘（スタミナ）の各ターンに 7% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐦‍🔥</span>フェニックス](/ja/action/phoenix) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv23 |
| [<span class="wiki-icon">🧙</span>エレメンタリスト](/ja/action/elementalist) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |
| [<span class="wiki-icon">😈</span>悪魔](/ja/action/demon) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 |
| [<span class="wiki-icon">🛡️</span>パラディン](/ja/action/paladin) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |
| [<span class="wiki-icon">🪱</span>ミミズ](/ja/action/earthworm) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv11 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⏰</span>麻酔時計](/ja/item/anesthetic-watch) | [<span class="wiki-icon">🧤</span>腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `healing-power` |
| `chance` | `0.07` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "healing-power",
		"name": "治癒力",
		"explanation": "寝れば治る。だいたいのことは。",
		"icon": {
			"emoji": "💚",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.07,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 8
	},
	"comment": false
}
```

</details>
