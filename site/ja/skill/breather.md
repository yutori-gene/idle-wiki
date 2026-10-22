# 息継ぎ

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">息継ぎ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌬️</span></div><table><tr><th>発動率</th><td>8%／ターン</td></tr><tr><th>効果</th><td>回復+6</td></tr><tr><th>持つ敵</th><td>2体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 投げ続けるコツは、休み方にある。


## 効果

戦闘（スタミナ）の各ターンに 8% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
|  |  |  |  | 6 |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🧜</span>マーメイド](/ja/action/mermaid) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv22 |
| [<span class="wiki-icon">🐉</span>ファイアドレイク](/ja/action/fire-drake) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv36 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">🪢</span>愛の鞭](/ja/item/whip-of-love) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/group/throwing-weapon) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `breather` |
| `chance` | `0.08` |
| `comment` | `false` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "breather",
		"name": "息継ぎ",
		"explanation": "投げ続けるコツは、休み方にある。",
		"icon": {
			"emoji": "🌬️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.08,
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 6
	},
	"comment": false
}
```

</details>
