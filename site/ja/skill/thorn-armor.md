# 棘の鎧

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">棘の鎧</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦔</span></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+10・防御+8・回復-8</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 触れた者が痛む鎧は、自分にも刺さる。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 10 | 8 |  |  | -8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🌱</span>食人植物](/ja/action/man-eating-plant) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv9 |
| [<span class="wiki-icon">🚪</span>ワイルドドア](/ja/action/wild-door) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 |
| [<span class="wiki-icon">🪞</span>魔法の鏡](/ja/action/magic-mirror) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 |
| [<img class="wiki-icon" src="assets/icon/e18b4916860bbce0.svg" alt="">ミミック](/ja/action/mimic) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv45 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🧤</span>無限の手袋](/ja/item/infinity-gauntlet) | [<span class="wiki-icon">🧤</span>腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `thorn-armor` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "thorn-armor",
		"name": "棘の鎧",
		"explanation": "触れた者が痛む鎧は、自分にも刺さる。",
		"icon": {
			"emoji": "🦔",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 10,
		"defence": 8,
		"accuracy": 0,
		"evasion": 0,
		"restore": -8
	},
	"comment": true
}
```

</details>
