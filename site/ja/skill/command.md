# 統率

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">統率</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🎖️</span></div><table><tr><th>発動率</th><td>11%／ターン</td></tr><tr><th>効果</th><td>精度+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 声ひとつで、迷いが消える。


## 効果

戦闘（スタミナ）の各ターンに 11% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 5 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🙏</span>教祖](/ja/action/cult-leader) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv14 |
| [<span class="wiki-icon">🏴‍☠️</span>海賊の頭](/ja/action/pirate-captain) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv19 |
| [<span class="wiki-icon">🛡️</span>騎士](/ja/action/knight) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |
| [<span class="wiki-icon">🎖️</span>大佐](/ja/action/colonel) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🎖️</span>リーダーシップ](/ja/item/leadership) | [<span class="wiki-icon">✨</span>能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `command` |
| `chance` | `0.11` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "command",
		"name": "統率",
		"explanation": "声ひとつで、迷いが消える。",
		"icon": {
			"emoji": "🎖️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.11,
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
