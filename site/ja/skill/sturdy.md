# 堅牢

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">堅牢</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/b0f98444a91a9a52.svg" alt=""></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>防御+9・回避+5</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 硬くて、しかも動く。理不尽の形。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  | 9 |  | 5 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8a25194356ea6eb5.svg" alt="">タートル](/ja/action/sea-turtle) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv39 |
| [<img class="wiki-icon" src="assets/icon/a00ac0267c6ec1f0.svg" alt="">灼熱の甲虫](/ja/action/scorching-beetle) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv50 |
| [<img class="wiki-icon" src="assets/icon/28d9275128ba3d5b.svg" alt="">イフリート](/ja/action/ifrit) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv9 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f3dc5cc462bdada5.svg" alt="">立体機動ブーツ](/ja/item/odm-boots) | [<img class="wiki-icon" src="assets/icon/b520170afa4d40a8.svg" alt="">脚部装備](/ja/group/leg-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sturdy` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sturdy",
		"name": "堅牢",
		"explanation": "硬くて、しかも動く。理不尽の形。",
		"icon": {
			"emoji": "🧱",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/b0f98444a91a9a52.svg）"
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 0,
		"defence": 9,
		"accuracy": 0,
		"evasion": 5,
		"restore": 0
	},
	"comment": true
}
```

</details>
