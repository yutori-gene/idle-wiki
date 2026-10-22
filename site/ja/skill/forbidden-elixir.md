# 禁断の霊薬

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">禁断の霊薬</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧪</span></div><table><tr><th>発動率</th><td>10%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御-10・回避-10・回復+15</td></tr><tr><th>持つ敵</th><td>0体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 飲んだ者は最強になり、そのあと動けなくなる。


## 効果

戦闘（スタミナ）の各ターンに 10% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | -10 |  | -10 | 15 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🍀</span>フェリックスフェリシス](/ja/item/felix-felicis) | [<span class="wiki-icon">🧪</span>ポーション](/ja/group/potion) | 消費装備 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `forbidden-elixir` |
| `chance` | `0.1` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "forbidden-elixir",
		"name": "禁断の霊薬",
		"explanation": "飲んだ者は最強になり、そのあと動けなくなる。",
		"icon": {
			"emoji": "🧪",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.1,
	"property": {
		"attack": 15,
		"defence": -10,
		"accuracy": 0,
		"evasion": -10,
		"restore": 15
	},
	"comment": true
}
```

</details>
