# 念動

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">念動</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔮</span></div><table><tr><th>発動率</th><td>8%／ターン</td></tr><tr><th>効果</th><td>回避+7</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 触れずに動かす。触れれば、もっと動く。


## 効果

戦闘（スタミナ）の各ターンに 8% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  | 7 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🧙</span>魔法使い](/ja/action/wizard) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 |
| [<span class="wiki-icon">🗿</span>ゴーレム](/ja/action/golem) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv38 |
| [<span class="wiki-icon">🦝</span>大きなタヌキ？](/ja/action/big-tanuki) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv49 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🔮</span>サイコキネシス](/ja/item/psychokinesis) | [<span class="wiki-icon">✨</span>能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `telekinesis` |
| `chance` | `0.08` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "telekinesis",
		"name": "念動",
		"explanation": "触れずに動かす。触れれば、もっと動く。",
		"icon": {
			"emoji": "🔮",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.08,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 7,
		"restore": 0
	},
	"comment": false
}
```

</details>
