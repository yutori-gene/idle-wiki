# 軽業

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">軽業</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/1d690111bf208639.svg" alt=""></div><table><tr><th>発動率</th><td>8%／ターン</td></tr><tr><th>効果</th><td>回避+7</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 地面に足をつけている時間が短い。


## 効果

戦闘（スタミナ）の各ターンに 8% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  | 7 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/ca6d048476ae39f9.svg" alt="">ラビットガール](/ja/action/rabbit-girl) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv1 |
| [<img class="wiki-icon" src="assets/icon/f9fd0a0c8a75a1c9.svg" alt="">サラマンダー](/ja/action/salamander) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv13 |
| [<img class="wiki-icon" src="assets/icon/544de9bef8647904.svg" alt="">リス](/ja/action/squirrel) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv40 |
| [<img class="wiki-icon" src="assets/icon/657885362fae1efc.svg" alt="">化け猫](/ja/action/bakeneko) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv16 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e0b08cdaab5d2f53.svg" alt="">トマホーク](/ja/item/tomahawk) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `acrobatics` |
| `chance` | `0.08` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "acrobatics",
		"name": "軽業",
		"explanation": "地面に足をつけている時間が短い。",
		"icon": {
			"emoji": "🤸",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/1d690111bf208639.svg）"
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
