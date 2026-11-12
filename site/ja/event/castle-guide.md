# 城の案内図

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">城の案内図</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🗺️</span></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 城の案内図を手に入れた。持っていると城で得る経験値が増える


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) Lv35以上

## 報酬

- [<span class="wiki-icon">🗺️</span>城の案内図](/ja/item/castle-guide-map) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `castle-guide` |
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
		"id": "castle-guide",
		"name": "城の案内図",
		"explanation": "城の案内図を手に入れた。持っていると城で得る経験値が増える",
		"icon": {
			"emoji": "🗺️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "category",
			"id": "volcano",
			"count": 35,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "castle-guide-map",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
