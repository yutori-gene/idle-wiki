# 棘の鎧

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">棘の鎧</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/c8fa1bc61efa88ab.svg" alt=""></div><table><tr><th>発動率</th><td>4%／ターン</td></tr><tr><th>効果</th><td>攻撃+10・防御+8・回復-8</td></tr><tr><th>持つ敵</th><td>4体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 触れた者が痛む鎧は、自分にも刺さる。


## 効果

戦闘（スタミナ）の各ターンに 4% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 10 | 8 |  |  | -8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/201d7af6f34effd1.svg" alt="">食人植物](/ja/action/man-eating-plant) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv12 |
| [<img class="wiki-icon" src="assets/icon/a0d753414f493a1b.svg" alt="">ワイルドドア](/ja/action/wild-door) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv42 |
| [<img class="wiki-icon" src="assets/icon/b148d196aa5fc19f.svg" alt="">魔法の鏡](/ja/action/magic-mirror) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv11 |
| [<img class="wiki-icon" src="assets/icon/2fe1c02a6322d541.svg" alt="">人食い箱](/ja/action/man-eating-box) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv27 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/bd717c714d3098a7.svg" alt="">無限の手袋](/ja/item/infinity-gauntlet) | [<img class="wiki-icon" src="assets/icon/fb530857299597e8.svg" alt="">腕部装備](/ja/group/arm-armor) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `thorn-armor` |
| `chance` | `0.04` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "thorn-armor",
		"name": "棘の鎧",
		"explanation": "触れた者が痛む鎧は、自分にも刺さる。",
		"icon": {
			"emoji": "🦔",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/c8fa1bc61efa88ab.svg）"
		},
		"color": ""
	},
	"chance": 0.04,
	"property": {
		"attack": 10,
		"defence": 8,
		"accuracy": 0,
		"evasion": 0,
		"restore": -8
	},
	"comment": true
}
```

</details>
