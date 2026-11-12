# 裏路地の噂

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">裏路地の噂</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/06cf05129beaa0be.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 裏路地で不穏な噂を聞いた。真相を確かめよう


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv10以上

## 報酬

- [<img class="wiki-icon" src="assets/icon/deb9bea6748c9a50.svg" alt="">認証バッジ](/ja/item/verified-badge) ×1
- [<img class="wiki-icon" src="assets/icon/c4f9d12979bdfc90.svg" alt="">ホタル](/ja/item/firefly) ×1
- [<img class="wiki-icon" src="assets/icon/57382b8c9d69e156.svg" alt="">犬の首輪](/ja/item/dog-collar) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `back-alley-rumor` |
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
		"id": "back-alley-rumor",
		"name": "裏路地の噂",
		"explanation": "裏路地で不穏な噂を聞いた。真相を確かめよう",
		"icon": {
			"emoji": "🕵️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/06cf05129beaa0be.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "category",
			"id": "town",
			"count": 10,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "verified-badge",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "firefly",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "dog-collar",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
