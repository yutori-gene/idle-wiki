# 弾幕

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">弾幕</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💥</span></div><table><tr><th>発動率</th><td>5%／ターン</td></tr><tr><th>効果</th><td>攻撃+11・精度-8</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 狙わない。埋めるのだ。


## 効果

戦闘（スタミナ）の各ターンに 5% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 11 |  | -8 |  |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🛸</span>警備ドローン](/ja/action/security-drone) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv31 |
| [<span class="wiki-icon">🦇</span>コウモリ](/ja/action/bat) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv45 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🔫</span>ロシアンルーレット](/ja/item/russian-roulette) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `barrage` |
| `chance` | `0.05` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "barrage",
		"name": "弾幕",
		"explanation": "狙わない。埋めるのだ。",
		"icon": {
			"emoji": "💥",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.05,
	"property": {
		"attack": 11,
		"defence": 0,
		"accuracy": -8,
		"evasion": 0,
		"restore": 0
	},
	"comment": true
}
```

</details>
