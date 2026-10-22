# 踏ん張り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">踏ん張り</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦵</span></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>防御+5</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 押されても、足の裏だけは動かさない。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 5 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🦣</span>マンモス](/ja/action/mammoth) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv25 |
| [<span class="wiki-icon">🗿</span>溶岩ゴーレム](/ja/action/lava-golem) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv33 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🥾</span>革のブーツ](/ja/item/leather-boots) | [<span class="wiki-icon">👖</span>脚部装備](/ja/group/leg-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `foothold` |
| `chance` | `0.1` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "foothold",
		"name": "踏ん張り",
		"explanation": "押されても、足の裏だけは動かさない。",
		"icon": {
			"emoji": "🦵",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 0,
		"defence": 5,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
