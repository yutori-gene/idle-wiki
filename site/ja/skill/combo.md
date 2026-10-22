# 連撃

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">連撃</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚔️</span></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>攻撃+7・精度+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 止まらない手は、読まれても止められない。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 7 |  | 5 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐕</span>野良犬の群れ](/ja/action/stray-dog-pack) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv14 |
| [<span class="wiki-icon">🦑</span>クラーケン](/ja/action/kraken) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 |
| [<span class="wiki-icon">🔥</span>炉の番人](/ja/action/furnace-keeper) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv34 |
| [<span class="wiki-icon">🐺</span>ケルベロス](/ja/action/cerberus) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv47 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🗡️</span>グラディウス](/ja/item/gladius) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `combo` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "combo",
		"name": "連撃",
		"explanation": "止まらない手は、読まれても止められない。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 7,
		"defence": 0,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
