# 禁忌の宝玉

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">禁忌の宝玉</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🟣</span></div><table><tr><th>発動率</th><td>3%／ターン</td></tr><tr><th>効果</th><td>攻撃+15・防御+12・精度-9・回避-10</td></tr><tr><th>持つ敵</th><td>3体</td></tr><tr><th>持つ装備</th><td>1種</td></tr></table></div>

> 手にした者は強くなり、そして鈍くなる。


## 効果

戦闘（スタミナ）の各ターンに 3% で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 15 | 12 | -9 | -10 |  |

## このスキルを持つ敵

| 敵（アクション） | 場所 | 必要Lv |
| --- | --- | --- |
| [<span class="wiki-icon">🐙</span>クトゥルフ](/ja/action/cthulhu) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv19 |
| [<span class="wiki-icon">🐉</span>火山竜](/ja/action/volcano-dragon) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv35 |
| [<span class="wiki-icon">🐘</span>ベヒモス](/ja/action/behemoth) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 |

## このスキルを持つ装備

| 装備 | グループ | 装備 |
| --- | --- | --- |
| [<span class="wiki-icon">⚙️</span>S2機関](/ja/item/s2-engine) | [<span class="wiki-icon">🎖️</span>ブローチ](/ja/group/brooch) | 装備必須 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `forbidden-orb` |
| `chance` | `0.03` |
| `comment` | `true` |

**設計ドキュメント**: [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "forbidden-orb",
		"name": "禁忌の宝玉",
		"explanation": "手にした者は強くなり、そして鈍くなる。",
		"icon": {
			"emoji": "🟣",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"chance": 0.03,
	"property": {
		"attack": 15,
		"defence": 12,
		"accuracy": -9,
		"evasion": -10,
		"restore": 0
	},
	"comment": true
}
```

</details>
