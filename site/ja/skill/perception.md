# 見切り

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">見切り</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">👁️</span></div><table><tr><th>発動率</th><td>12%／ターン</td></tr><tr><th>効果</th><td>回避+4</td></tr><tr><th>持つ敵</th><td>6体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 飛んでくるものは、だいたい遅い。


## 効果

戦闘（スタミナ）の各ターンに 12% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  | 4 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">👺</span>ゴブリン](/ja/action/goblin) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | Lv11 |
| [<span class="wiki-icon">🥷</span>盗賊](/ja/action/thief) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 |
| [<span class="wiki-icon">🐦‍🔥</span>火喰い鳥](/ja/action/fire-eating-bird) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv36 |
| [<span class="wiki-icon">🐿️</span>リス](/ja/action/squirrel) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv41 |
| [<span class="wiki-icon">🐱</span>化け猫](/ja/action/bakeneko) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv45 |
| [<span class="wiki-icon">🐍</span>バジリスク](/ja/action/basilisk) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv47 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⛄</span>雪玉](/ja/item/snowball) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `perception` |
| `chance` | `0.12` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "perception",
		"name": "見切り",
		"explanation": "飛んでくるものは、だいたい遅い。",
		"icon": {
			"emoji": "👁️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.12,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 4,
		"restore": 0
	},
	"comment": false
}
```

</details>
