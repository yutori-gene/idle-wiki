# 港町へ

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">港町へ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/38b8d465e0ca3660.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 海のそばの港町に辿り着いた。船出の準備を始めよう


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/bd1f291b8c70bd6f.svg" alt="">都市伝説の鍵](/ja/item/urban-legend-key) ×1

## 報酬

- [<img class="wiki-icon" src="assets/icon/eea6ffe630b18ce9.svg" alt="">食べられる指輪](/ja/item/edible-ring) ×1
- [<img class="wiki-icon" src="assets/icon/88bd6232400bdea7.svg" alt="">ハートブローチ](/ja/item/heart-brooch) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `to-port-town` |
| `category` | （空） |
| `timing` | `tasked` |
| `unlocked` | `hinted` |
| `requiringGroup` | `false` |
| `group` | `story` |
| `bucket` | `tasks` |

**設計ドキュメント**: [plan.md › イベント・ストーリー](/ja/dev/doc/plan?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC) ／ [terms.md › イベントタイミング（EventTimingTypes）](/ja/dev/doc/terms?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%EF%BC%88eventtimingtypes%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "to-port-town",
		"name": "港町へ",
		"explanation": "海のそばの港町に辿り着いた。船出の準備を始めよう",
		"icon": {
			"emoji": "⚓",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/38b8d465e0ca3660.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "item",
			"id": "urban-legend-key",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "edible-ring",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "heart-brooch",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
