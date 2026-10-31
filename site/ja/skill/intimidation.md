# 威圧

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">威圧</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/b37f7307eb97a29c.svg" alt=""></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>攻撃+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 強く見えることは、強いことの半分だ。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 5 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/21fd864bcbf55bb4.svg" alt="">パブロフの犬](/ja/action/pavlovs-dog) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv6 |
| [<span class="wiki-icon">🙏</span>教祖](/ja/action/cult-leader) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv14 |
| [<span class="wiki-icon">🐉</span>バハムート](/ja/action/bahamut) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv27 |
| [<span class="wiki-icon">🐘</span>ベヒモス](/ja/action/behemoth) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv46 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">💍</span>力の指輪](/ja/item/ring-of-power) | [<span class="wiki-icon">💍</span>指輪](/ja/group/ring) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `intimidation` |
| `chance` | `0.1` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "intimidation",
		"name": "威圧",
		"explanation": "強く見えることは、強いことの半分だ。",
		"icon": {
			"emoji": "😠",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/b37f7307eb97a29c.svg）"
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 5,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
