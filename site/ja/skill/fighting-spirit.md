# 気迫

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">気迫</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/410a83f70809ca10.svg" alt=""></div><table><tr><th>発動率</th><td>6%／ターン</td></tr><tr><th>効果</th><td>攻撃+7・防御+5</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 前に出る覚悟は、鎧よりも身を守る。


## 効果

戦闘（スタミナ）の各ターンに 6% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 7 | 5 |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/ea5fece55cd26243.svg" alt="">コカトリス](/ja/action/cockatrice) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv16 |
| [<img class="wiki-icon" src="assets/icon/bc9d0bdd94514ebd.svg" alt="">トラ](/ja/action/tiger) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv24 |
| [<img class="wiki-icon" src="assets/icon/1dd26ec4c50a4c5d.svg" alt="">ベヒモス](/ja/action/behemoth) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv31 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3e6cef4c2105b9d2.svg" alt="">ジムバッジ](/ja/item/gym-badge) | [<img class="wiki-icon" src="assets/icon/90105f31f000c615.svg" alt="">ブローチ](/ja/group/brooch) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `fighting-spirit` |
| `chance` | `0.06` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "fighting-spirit",
		"name": "気迫",
		"explanation": "前に出る覚悟は、鎧よりも身を守る。",
		"icon": {
			"emoji": "🔥",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/410a83f70809ca10.svg）"
		},
		"color": ""
	},
	"chance": 0.06,
	"property": {
		"attack": 7,
		"defence": 5,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
