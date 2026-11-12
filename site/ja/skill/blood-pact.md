# 血の契約

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">血の契約</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/bf247ad234ae0a81.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+14・精度+9・回復-10</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 支払うものがある者は、強い。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 14 |  | 9 |  | -10 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/726cdf61e0805eb5.svg" alt="">クトゥルフ](/ja/action/cthulhu) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/b8dfc337e8669e69.svg" alt="">ネクロマンサー](/ja/action/necromancer) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv20 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/7eb5038393af1927.svg" alt="">一つの指輪](/ja/item/one-ring) | [<img class="wiki-icon" src="assets/icon/8af37373ea914d8b.svg" alt="">指輪](/ja/group/ring) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `blood-pact` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "blood-pact",
		"name": "血の契約",
		"explanation": "支払うものがある者は、強い。",
		"icon": {
			"emoji": "📜",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/bf247ad234ae0a81.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 14,
		"defence": 0,
		"accuracy": 9,
		"evasion": 0,
		"restore": -10
	},
	"comment": true
}
```

</details>
