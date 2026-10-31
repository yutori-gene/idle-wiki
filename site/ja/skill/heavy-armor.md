# 重装甲

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">重装甲</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🛡️</span></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>防御+12・回避-8</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 動けないほど硬いなら、動かなければいい。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 12 |  | -8 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🦣</span>マンモス](/ja/action/mammoth) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv25 |
| [<span class="wiki-icon">🗿</span>ガーゴイル](/ja/action/gargoyle) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv42 |
| [<span class="wiki-icon">🛡️</span>パラディン](/ja/action/paladin) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🅿️</span>プラグスーツ](/ja/item/plug-suit) | [<span class="wiki-icon">👕</span>胴体装備](/ja/group/body-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `heavy-armor` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "heavy-armor",
		"name": "重装甲",
		"explanation": "動けないほど硬いなら、動かなければいい。",
		"icon": {
			"emoji": "🛡️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 12,
		"accuracy": 0,
		"evasion": -8,
		"restore": 0
	},
	"comment": true
}
```

</details>
