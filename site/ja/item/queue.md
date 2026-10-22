# 作業予定

<div class="wiki-infobox" style="--accent:#4a6572"><div class="wiki-infobox-title">作業予定</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📋</span></div><table><tr><th>種類</th><td>作業予定の枠（アクションの予約数）</td></tr><tr><th>初期の枠</th><td>1</td></tr><tr><th>購入</th><td><a href="#/ja/item/treasure-medal"><span class="wiki-icon">🏅</span>秘宝メダル</a>で購入（4回まで）</td></tr></table></div>

> 続けて実行するアクションの予約枠。秘宝メダルで4回まで増やせる

作業予定は、続けて実行するアクションの予約数（実行中のものを含む）。予約しておくと、いまのアクションが終わったあと自動で次へ進む。

[<span class="wiki-icon">🏅</span>秘宝メダル](/ja/item/treasure-medal) でしか買えない。


## 購入価格

n回目の価格 = 10 × 2^(n−1)（切り捨て）。

| 購入 | 購入後の枠 | 価格（秘宝メダル） | 累計 |
| --- | --- | --- | --- |
| 1回目 | 2 | 10 | 10 |
| 2回目 | 3 | 20 | 30 |
| 3回目 | 4 | 40 | 70 |
| 4回目 | 5 | 80 | 150 |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `queue` |
| `increasingRate` | `2` |
| `initialCost` | `10` |
| `initialCount` | `1` |
| `coinId` | `treasure-medal` |
| `buyingLimit` | `4` |

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "queue",
		"name": "作業予定",
		"explanation": "続けて実行するアクションの予約枠。秘宝メダルで4回まで増やせる",
		"icon": {
			"emoji": "📋",
			"iconify": "",
			"image": ""
		},
		"color": "#4a6572"
	},
	"increasingRate": 2,
	"initialCost": 10,
	"initialCount": 1,
	"coinId": "treasure-medal",
	"buyingLimit": 4
}
```

</details>
