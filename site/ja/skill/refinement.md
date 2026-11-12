# 洗練

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">洗練</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/cbd28659b3924ffe.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>精度+8・回避+5・回復+3</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 無駄がないだけで、これほど変わる。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 8 | 5 | 3 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/9f360fa4f10b66fb.svg" alt="">熾天使](/ja/action/seraph) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv50 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/deb9bea6748c9a50.svg" alt="">認証バッジ](/ja/item/verified-badge) | [<img class="wiki-icon" src="assets/icon/90105f31f000c615.svg" alt="">ブローチ](/ja/group/brooch) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `refinement` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "refinement",
		"name": "洗練",
		"explanation": "無駄がないだけで、これほど変わる。",
		"icon": {
			"emoji": "💎",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/cbd28659b3924ffe.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 8,
		"evasion": 5,
		"restore": 3
	},
	"comment": true
}
```

</details>
