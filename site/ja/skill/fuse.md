# 導火線

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">導火線</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧨</span></div><table><tr><th>発動率</th><td>11%／ターン</td></tr><tr><th>効果</th><td>攻撃+5</td></tr><tr><th>持つ敵</th><td>1体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 待つ時間が、いちばん楽しい。


## 効果

戦闘（スタミナ）の各ターンに 11% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 5 |  |  |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">💣</span>ボム](/ja/action/bomb) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv28 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/bca7ebdb757a7fc6.svg" alt="">水風船](/ja/item/water-balloon) | [<span class="wiki-icon">💣</span>爆発武器](/ja/group/explosive-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `fuse` |
| `chance` | `0.11` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "fuse",
		"name": "導火線",
		"explanation": "待つ時間が、いちばん楽しい。",
		"icon": {
			"emoji": "🧨",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.11,
	"property": {
		"attack": 5,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"comment": false
}
```

</details>
