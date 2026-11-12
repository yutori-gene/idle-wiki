# 城の王

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">城の王</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/ae4b0990c568f432.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 玉座の王と決着をつけ、黄金のかけらを掴む


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) Lv35以上
- [<img class="wiki-icon" src="assets/icon/4565e017a1716396.svg" alt="">王家の秘宝](/ja/item/royal-treasure) ×1

## 報酬

- [<img class="wiki-icon" src="assets/icon/bd1ca80d8e7b7f25.svg" alt="">聖杯](/ja/item/holy-grail) ×1
- [<img class="wiki-icon" src="assets/icon/b5394860ab633999.svg" alt="">ダイヤモンドのティアラ](/ja/item/diamond-tiara) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `castle-king` |
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
		"id": "castle-king",
		"name": "城の王",
		"explanation": "玉座の王と決着をつけ、黄金のかけらを掴む",
		"icon": {
			"emoji": "👑",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/ae4b0990c568f432.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "category",
			"id": "castle",
			"count": 35,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "royal-treasure",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "holy-grail",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "diamond-tiara",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
