# 破片

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">破片</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/2eebda31f109ea34.svg" alt=""></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>攻撃+6</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 本体より、飛び散るほうが痛い。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 6 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/09ecaa0c1b48e7eb.svg" alt="">ドラゴンキッズ](/ja/action/dragon-kid) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv20 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/a1d0c7130fab74d0.svg" alt="">メントス入りソーダ](/ja/item/mentos-soda) | [<img class="wiki-icon" src="assets/icon/5c805af870858afc.svg" alt="">爆発武器](/ja/group/explosive-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `shrapnel` |
| `chance` | `0.1` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "shrapnel",
		"name": "破片",
		"explanation": "本体より、飛び散るほうが痛い。",
		"icon": {
			"emoji": "💥",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/2eebda31f109ea34.svg）"
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 6,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
