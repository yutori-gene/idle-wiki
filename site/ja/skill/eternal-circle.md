# 円環の理

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">円環の理</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/98964f82f522f4c2.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>防御+8・回避+4・回復+7</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 終わりは始まりに、傷は癒しに繋がっている。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 8 |  | 4 | 7 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/726cdf61e0805eb5.svg" alt="">クトゥルフ](/ja/action/cthulhu) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv12 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/56d8e0e4b6f4e0da.svg" alt="">ATフィールド](/ja/item/at-field) | [<img class="wiki-icon" src="assets/icon/90105f31f000c615.svg" alt="">ブローチ](/ja/group/brooch) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `eternal-circle` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "eternal-circle",
		"name": "円環の理",
		"explanation": "終わりは始まりに、傷は癒しに繋がっている。",
		"icon": {
			"emoji": "⭕",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/98964f82f522f4c2.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 0,
		"defence": 8,
		"accuracy": 0,
		"evasion": 4,
		"restore": 7
	},
	"comment": true
}
```

</details>
