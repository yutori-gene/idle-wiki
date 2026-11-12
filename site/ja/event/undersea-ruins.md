# 海底の遺跡

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">海底の遺跡</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/399196758d8173ae.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 海底に沈む遺跡で青いかけらを拾い上げる


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) Lv35以上
- [<img class="wiki-icon" src="assets/icon/838a5b09cdb9713c.svg" alt="">海神のトライデント](/ja/item/sea-god-trident) ×1
- [<img class="wiki-icon" src="assets/icon/07145ca4be58e6a7.svg" alt="">隠された北国への道](/ja/item/hidden-path-to-northland) ×1

## 報酬

- [<img class="wiki-icon" src="assets/icon/4b9344893f887a47.svg" alt="">ハンターライセンス](/ja/item/hunter-license) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `undersea-ruins` |
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
		"id": "undersea-ruins",
		"name": "海底の遺跡",
		"explanation": "海底に沈む遺跡で青いかけらを拾い上げる",
		"icon": {
			"emoji": "🏛️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/399196758d8173ae.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "category",
			"id": "sea",
			"count": 35,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "sea-god-trident",
			"count": 1,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "hidden-path-to-northland",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "hunter-license",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
