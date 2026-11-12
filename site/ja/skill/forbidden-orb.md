# 禁忌の宝玉

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">禁忌の宝玉</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/8546a2f67c718930.svg" alt=""></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御+12・精度-9・回避-10</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 手にした者は強くなり、そして鈍くなる。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | 12 | -9 | -10 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/726cdf61e0805eb5.svg" alt="">クトゥルフ](/ja/action/cthulhu) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/b6232dc1b5865e01.svg" alt="">火山竜](/ja/action/volcano-dragon) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv26 |
| [<img class="wiki-icon" src="assets/icon/1dd26ec4c50a4c5d.svg" alt="">ベヒモス](/ja/action/behemoth) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv31 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/deccc98f2928c80e.svg" alt="">S2機関](/ja/item/s2-engine) | [<img class="wiki-icon" src="assets/icon/90105f31f000c615.svg" alt="">ブローチ](/ja/group/brooch) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `forbidden-orb` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "forbidden-orb",
		"name": "禁忌の宝玉",
		"explanation": "手にした者は強くなり、そして鈍くなる。",
		"icon": {
			"emoji": "🟣",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/8546a2f67c718930.svg）"
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": 12,
		"accuracy": -9,
		"evasion": -10,
		"restore": 0
	},
	"comment": true
}
```

</details>
