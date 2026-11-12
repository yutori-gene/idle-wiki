# 鬼血

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">鬼血</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/e38385339052a6b5.svg" alt=""></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・回避-10・回復+8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 力は血から湧く。血は身体から減る。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 |  |  | -10 | 8 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/50a2af91aef10938.svg" alt="">漂流者](/ja/action/castaway) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv45 |
| [<img class="wiki-icon" src="assets/icon/b8dfc337e8669e69.svg" alt="">ネクロマンサー](/ja/action/necromancer) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv20 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/28e21aebbaaf7a0a.svg" alt="">悪魔信仰](/ja/item/devil-worship) | [<img class="wiki-icon" src="assets/icon/7c7dbb617148ad3b.svg" alt="">能力](/ja/group/ability) | 装備不要 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `demon-blood` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "demon-blood",
		"name": "鬼血",
		"explanation": "力は血から湧く。血は身体から減る。",
		"icon": {
			"emoji": "🩸",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/e38385339052a6b5.svg）"
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": 0,
		"accuracy": 0,
		"evasion": -10,
		"restore": 8
	},
	"comment": true
}
```

</details>
