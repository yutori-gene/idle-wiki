# 統率

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">統率</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/439c68be5d817fbd.svg" alt=""></div><table><tr><th>発動率</th><td>11%／ターン</td></tr><tr><th>効果</th><td>精度+5</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 声ひとつで、迷いが消える。


## 効果

戦闘（スタミナ）の各ターンに 11% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  | 5 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6b4bee93ce40e393.svg" alt="">教祖](/ja/action/cult-leader) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv5 |
| [<img class="wiki-icon" src="assets/icon/a71a25b5d0b12010.svg" alt="">海賊の頭](/ja/action/pirate-captain) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv6 |
| [<img class="wiki-icon" src="assets/icon/4cf5aeed2a7e772b.svg" alt="">騎士](/ja/action/knight) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv16 |
| [<img class="wiki-icon" src="assets/icon/c1042b00a01b59d1.svg" alt="">大佐](/ja/action/colonel) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv28 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/de5f9818990501e4.svg" alt="">清き一票](/ja/item/clean-vote) | [<img class="wiki-icon" src="assets/icon/7c7dbb617148ad3b.svg" alt="">能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `command` |
| `chance` | `0.11` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "command",
		"name": "統率",
		"explanation": "声ひとつで、迷いが消える。",
		"icon": {
			"emoji": "🎖️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/439c68be5d817fbd.svg）"
		},
		"color": ""
	},
	"chance": 0.11,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
