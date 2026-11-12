# 聖悪の相剋

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">聖悪の相剋</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/f7a1361e7007fc43.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+13・防御-8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 矛と盾を同時に握れば、盾のほうが先に折れる。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 13 | -8 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/726cdf61e0805eb5.svg" alt="">クトゥルフ](/ja/action/cthulhu) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/1dd26ec4c50a4c5d.svg" alt="">ベヒモス](/ja/action/behemoth) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv31 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3a481dfec01e1c82.svg" alt="">トライフォース](/ja/item/triforce) | [<img class="wiki-icon" src="assets/icon/7c7dbb617148ad3b.svg" alt="">能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `holy-evil-clash` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "holy-evil-clash",
		"name": "聖悪の相剋",
		"explanation": "矛と盾を同時に握れば、盾のほうが先に折れる。",
		"icon": {
			"emoji": "🔺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/f7a1361e7007fc43.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 13,
		"defence": -8,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
