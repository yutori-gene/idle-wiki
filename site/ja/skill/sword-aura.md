# 剣気

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">剣気</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/526a10fb5971033c.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>攻撃+6・防御+6・精度+4</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 刃より先に、殺気が届く。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 6 | 6 | 4 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/e946f5cd0103012b.svg" alt="">賞金稼ぎ](/ja/action/bounty-hunter) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv46 |
| [<img class="wiki-icon" src="assets/icon/5d2bd39c66257c15.svg" alt="">海賊](/ja/action/pirate) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv1 |
| [<img class="wiki-icon" src="assets/icon/c1042b00a01b59d1.svg" alt="">大佐](/ja/action/colonel) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv28 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2e60f425eca28339.svg" alt="">🔑ブレード](/ja/item/key-blade) | [<img class="wiki-icon" src="assets/icon/8c20036e34b28104.svg" alt="">近接武器](/ja/group/melee-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sword-aura` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sword-aura",
		"name": "剣気",
		"explanation": "刃より先に、殺気が届く。",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/526a10fb5971033c.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 6,
		"defence": 6,
		"accuracy": 4,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
