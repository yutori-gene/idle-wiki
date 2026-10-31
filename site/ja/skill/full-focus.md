# 全集中

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">全集中</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌬️</span></div><table><tr><th>発動率</th><td>8%／ターン</td></tr><tr><th>効果</th><td>攻撃+7</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 呼吸を整えるだけで、世界が遅くなる。


## 効果

戦闘（スタミナ）の各ターンに 8% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 7 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐢</span>カメの大魔王](/ja/action/turtle-demon-king) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 |
| [<span class="wiki-icon">🐉</span>火山竜](/ja/action/volcano-dragon) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🎩</span>エリート志向](/ja/item/elitism) | [<span class="wiki-icon">✨</span>能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `full-focus` |
| `chance` | `0.08` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "full-focus",
		"name": "全集中",
		"explanation": "呼吸を整えるだけで、世界が遅くなる。",
		"icon": {
			"emoji": "🌬️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.08,
	"property": {
		"attack": 7,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
