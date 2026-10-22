# 鬼血

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">鬼血</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🩸</span></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・回避-10・回復+8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 力は血から湧く。血は身体から減る。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 |  |  | -10 | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🎩</span>ジョーンズ](/ja/action/jones) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv21 |
| [<span class="wiki-icon">💀</span>ネクロマンサー](/ja/action/necromancer) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🩸</span>血鬼術](/ja/item/blood-demon-art) | [<span class="wiki-icon">✨</span>能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `demon-blood` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "demon-blood",
		"name": "鬼血",
		"explanation": "力は血から湧く。血は身体から減る。",
		"icon": {
			"emoji": "🩸",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": 0,
		"accuracy": 0,
		"evasion": -10,
		"restore": 8
	},
	"comment": true
}
```

</details>
