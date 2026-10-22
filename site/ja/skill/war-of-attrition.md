# 削り合い

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">削り合い</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚔️</span></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+10・回避-8・回復+8</td></tr><tr><th>持つ敵</th><td>6体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 先に倒れなければ、それが勝ちだ。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 10 |  |  | -8 | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐀</span>ドブネズミ](/ja/action/sewer-rat) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 |
| [<span class="wiki-icon">🐊</span>クロコダイル](/ja/action/crocodile) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 |
| [<span class="wiki-icon">🪱</span>マグマワーム](/ja/action/magma-worm) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 |
| [<span class="wiki-icon">👻</span>亡霊騎士](/ja/action/ghost-knight) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |
| [<span class="wiki-icon">🐺</span>ケルベロス](/ja/action/cerberus) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv47 |
| [<span class="wiki-icon">🍝</span>スパゲッティモンスター](/ja/action/spaghetti-monster) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⚔️</span>マスターソード](/ja/item/master-sword) | [<span class="wiki-icon">🗡️</span>近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `war-of-attrition` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "war-of-attrition",
		"name": "削り合い",
		"explanation": "先に倒れなければ、それが勝ちだ。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 10,
		"defence": 0,
		"accuracy": 0,
		"evasion": -8,
		"restore": 8
	},
	"comment": true
}
```

</details>
