# 助走

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">助走</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/e7ecc536bbae6449.svg" alt=""></div><table><tr><th>発動率</th><td>11%／ターン</td></tr><tr><th>効果</th><td>攻撃+4</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 三歩下がって、遠くへ投げる。


## 効果

戦闘（スタミナ）の各ターンに 11% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 4 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/43113159f0664f4b.svg" alt="">ケンタウロス](/ja/action/centaur) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv42 |
| [<img class="wiki-icon" src="assets/icon/1b2297a6cd429b94.svg" alt="">火喰い鳥](/ja/action/fire-eating-bird) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv38 |
| [<img class="wiki-icon" src="assets/icon/9635026f25519f71.svg" alt="">ペガサス](/ja/action/pegasus) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv34 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6f5d148c590b4f9f.svg" alt="">DVD](/ja/item/dvd) | [<img class="wiki-icon" src="assets/icon/acf6e9aa1dd681ef.svg" alt="">投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `run-up` |
| `chance` | `0.11` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "run-up",
		"name": "助走",
		"explanation": "三歩下がって、遠くへ投げる。",
		"icon": {
			"emoji": "🏃",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/e7ecc536bbae6449.svg）"
		},
		"color": ""
	},
	"chance": 0.11,
	"property": {
		"attack": 4,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
