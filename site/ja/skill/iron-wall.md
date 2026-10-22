# 鉄壁

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">鉄壁</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏰</span></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>防御+10・精度+3・回避+6・回復+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 抜けないと分かった相手は、勝手に諦める。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 10 | 3 | 6 | 5 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐉</span>バハムート](/ja/action/bahamut) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 |
| [<span class="wiki-icon">🗿</span>ガーゴイル](/ja/action/gargoyle) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv42 |
| [<span class="wiki-icon">📦</span>ミミック](/ja/action/mimic) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv45 |
| [<span class="wiki-icon">🙏</span>司祭](/ja/action/priest) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv48 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🛡️</span>矛盾](/ja/item/contradiction) | [<span class="wiki-icon">🧤</span>腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `iron-wall` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "iron-wall",
		"name": "鉄壁",
		"explanation": "抜けないと分かった相手は、勝手に諦める。",
		"icon": {
			"emoji": "🏰",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 0,
		"defence": 10,
		"accuracy": 3,
		"evasion": 6,
		"restore": 5
	},
	"comment": true
}
```

</details>
