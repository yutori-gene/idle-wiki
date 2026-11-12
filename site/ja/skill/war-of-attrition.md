# 削り合い

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">削り合い</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/2aa914fca537798a.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+10・回避-8・回復+8</td></tr><tr><th>持つ敵</th><td>6体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 先に倒れなければ、それが勝ちだ。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 10 |  |  | -8 | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/a4e9edb1cd6bdef5.svg" alt="">ドブネズミ](/ja/action/sewer-rat) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv50 |
| [<img class="wiki-icon" src="assets/icon/fed17d75923f9e8c.svg" alt="">クロコダイル](/ja/action/crocodile) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv17 |
| [<img class="wiki-icon" src="assets/icon/5eb0d3e7e1467725.svg" alt="">マグマワーム](/ja/action/magma-worm) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv19 |
| [<img class="wiki-icon" src="assets/icon/6c3069c276750054.svg" alt="">亡霊騎士](/ja/action/ghost-knight) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv21 |
| [<img class="wiki-icon" src="assets/icon/434f9ba7725923c7.svg" alt="">ケルベロス](/ja/action/cerberus) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv46 |
| [<img class="wiki-icon" src="assets/icon/394a604ae0c49dba.svg" alt="">スパゲッティモンスター](/ja/action/spaghetti-monster) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv17 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/585013cc1a3555f7.svg" alt="">マスターソード](/ja/item/master-sword) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `war-of-attrition` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "war-of-attrition",
		"name": "削り合い",
		"explanation": "先に倒れなければ、それが勝ちだ。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/2aa914fca537798a.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 10,
		"defence": 0,
		"accuracy": 0,
		"evasion": -8,
		"restore": 8
	},
	"comment": true
}
```

</details>
