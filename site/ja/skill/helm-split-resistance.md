# 兜割り耐性

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">兜割り耐性</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⛑️</span></div><table><tr><th>発動率</th><td>9%／ターン</td></tr><tr><th>効果</th><td>防御+6</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 頭さえ守れば、たいてい生きている。


## 効果

戦闘（スタミナ）の各ターンに 9% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 6 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐲</span>ドラゴンキッズ](/ja/action/dragon-kid) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv25 |
| [<span class="wiki-icon">🗿</span>黒曜石のガーゴイル](/ja/action/obsidian-gargoyle) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv37 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⛑️</span>鉄の兜](/ja/item/iron-helmet) | [<span class="wiki-icon">🪖</span>頭部防具](/ja/group/head-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `helm-split-resistance` |
| `chance` | `0.09` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "helm-split-resistance",
		"name": "兜割り耐性",
		"explanation": "頭さえ守れば、たいてい生きている。",
		"icon": {
			"emoji": "⛑️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.09,
	"property": {
		"attack": 0,
		"defence": 6,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
