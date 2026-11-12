# 世界の変化

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">世界の変化</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/524f5d6abff0cb2a.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 世界が静かに変わり始めた。終わりが近い


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/0ea3bd9940738f90.svg" alt="">奈落の宝珠](/ja/item/abyss-orb) ×1
- [<img class="wiki-icon" src="assets/icon/2255981f3dd32a49.svg" alt="">金色の石板](/ja/item/golden-tablet) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `world-change` |
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
		"id": "world-change",
		"name": "世界の変化",
		"explanation": "世界が静かに変わり始めた。終わりが近い",
		"icon": {
			"emoji": "🌍",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/524f5d6abff0cb2a.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "item",
			"id": "abyss-orb",
			"count": 1,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "golden-tablet",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
