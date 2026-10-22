# 身軽

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">身軽</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐦</span></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>防御-9・回避+12</td></tr><tr><th>持つ敵</th><td>5体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 何も背負わなければ、何にも当たらない。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | -9 |  | 12 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐍</span>サーペント](/ja/action/serpent) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 |
| [<span class="wiki-icon">🦎</span>サラマンダー](/ja/action/salamander) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 |
| [<span class="wiki-icon">🧚</span>妖精](/ja/action/fairy) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv40 |
| [<span class="wiki-icon">🧛</span>バンパイヤ](/ja/action/vampire) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv44 |
| [<span class="wiki-icon">🦄</span>ペガサス](/ja/action/pegasus) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🦇</span>バットラング](/ja/item/batarang) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 消費装備 |

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
			"image": ""
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
