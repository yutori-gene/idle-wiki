# 基本設定

## 概要（overview）

| 項目 | 値 |
| --- | --- |
| `version` | 1 |
| `author` | Yutori |
| `homepage` | https://yu-to-ri.net |
| `url` |  |

## 一般（general）

| 項目 | 値 |
| --- | --- |
| `language` | `ja` |
| `translations` | `false` |
| `offlineMaxHours` | `24` |
| `maxCategoryLevels` | `50` |
| `levelCommonRatio` | `1.11` |
| `actionLevelLimit` | `true` |
| `propertyRatio` | `1.5` |

## 戦闘の基本値（defaultCombat）

| 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- |
| 20 | 3 | 75 | 25 | 22 |

## 通貨・枠

- [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin)
- [<span class="wiki-icon">🏅</span>秘宝メダル](/ja/item/treasure-medal)
- [<span class="wiki-icon">📦</span>物置](/ja/item/capacity)
- [<span class="wiki-icon">📋</span>作業予定](/ja/item/queue)

## 配色（design）

| 項目 | 値 |
| --- | --- |
| `barColor` | <span class="wiki-swatch" style="background:#f4ecd8"></span> `#f4ecd8` |
| `textColor` | <span class="wiki-swatch" style="background:#22305e"></span> `#22305e` |
| `shadowColor` | <span class="wiki-swatch" style="background:#121a38"></span> `#121a38` |
| `background` | （空） |

```json
{
	"overview": {
		"information": {
			"id": "sunlit-to-sky",
			"name": "ひだまりから天空へ",
			"explanation": "公園でどんぐりを拾うところから、天空のお庭の最終決戦まで。10のダンジョンと14の拠点を行き来しながら、集める・作る・戦う・育てるを積み上げていく放置RPG。",
			"icon": {
				"emoji": "🌤",
				"iconify": "",
				"image": ""
			},
			"color": "#b8862b"
		},
		"version": 1,
		"author": "Yutori",
		"homepage": "https://yu-to-ri.net",
		"url": "",
		"estimatedPlayingTime": {
			"value": 100,
			"unit": "days"
		}
	},
	"general": {
		"language": "ja",
		"translations": false,
		"offlineMaxHours": 24,
		"maxCategoryLevels": 50,
		"coins": [
			{
				"id": "coin",
				"name": "コイン",
				"explanation": "このゲームの通貨",
				"icon": {
					"emoji": "🪙",
					"iconify": "",
					"image": ""
				},
				"color": ""
			},
			{
				"id": "treasure-medal",
				"name": "秘宝メダル",
				"explanation": "秘宝を鑑定して得られる、特別な品とだけ交換できるメダル",
				"icon": {
					"emoji": "🏅",
					"iconify": "",
					"image": ""
				},
				"color": ""
			}
		],
		"capacity": {
			"information": {
				"id": "capacity",
				"name": "物置",
				"explanation": "同時に置いておけるアイテムの種類数。コインで枠を買えるほか、ダンジョンで容器を見つけると増える",
				"icon": {
					"emoji": "📦",
					"iconify": "",
					"image": ""
				},
				"color": "#8a5a2b"
			},
			"increasingRate": 1.3,
			"initialCost": 100,
			"initialCount": 30,
			"coinId": "",
			"buyingLimit": 0
		},
		"queue": {
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
		},
		"levelCommonRatio": 1.11,
		"actionLevelLimit": true,
		"propertyRatio": 1.5,
		"defaultCombat": {
			"attack": 20,
			"defence": 3,
			"accuracy": 75,
			"evasion": 25,
			"restore": 22
		}
	},
	"design": {
		"barColor": "#f4ecd8",
		"textColor": "#22305e",
		"shadowColor": "#121a38",
		"background": ""
	}
}
```
