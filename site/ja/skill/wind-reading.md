# 風読み

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">風読み</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/b0cf0ac5f40111f5.svg" alt=""></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>精度+7・回避+6</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 風を読める者は、避ける場所も読める。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 7 | 6 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2e8f0ddee3c24d6d.svg" alt="">グリフィン](/ja/action/griffin) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv1 |
| [<img class="wiki-icon" src="assets/icon/94a2922ab82673de.svg" alt="">宴の亡霊](/ja/action/banquet-ghost) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv50 |
| [<img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー](/ja/action/valkyrie) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv12 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/01438db31063866b.svg" alt="">投げキッス](/ja/item/blown-kiss) | [<img class="wiki-icon" src="assets/icon/b36df1ddeb26deea.svg" alt="">射出装置](/ja/group/launcher) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wind-reading` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wind-reading",
		"name": "風読み",
		"explanation": "風を読める者は、避ける場所も読める。",
		"icon": {
			"emoji": "🍃",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/b0cf0ac5f40111f5.svg）"
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 7,
		"evasion": 6,
		"restore": 0
	},
	"comment": true
}
```

</details>
