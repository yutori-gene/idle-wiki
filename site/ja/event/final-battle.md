# 最終決戦

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">最終決戦</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/e313ea56c6553b88.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 天空の主と最終決戦。虹のかけらが未来を照らす


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) Lv20以上
- [<img class="wiki-icon" src="assets/icon/2255981f3dd32a49.svg" alt="">金色の石板](/ja/item/golden-tablet) ×1

## 報酬

- [<img class="wiki-icon" src="assets/icon/44caa25ecd4b33aa.svg" alt="">時を止める砂時計](/ja/item/time-stopping-hourglass) ×1

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">ストーリー</div><div class="wiki-navbox-body">54件。一覧は <a href="#/ja/group/story"><img class="wiki-icon" src="assets/icon/89e64834e9ec4a6f.svg" alt="">ストーリー</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `final-battle` |
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
		"id": "final-battle",
		"name": "最終決戦",
		"explanation": "天空の主と最終決戦。虹のかけらが未来を照らす",
		"icon": {
			"emoji": "⚔️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/e313ea56c6553b88.svg）"
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "category",
			"id": "sky-garden",
			"count": 20,
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
	"acquisitions": [
		{
			"type": "item",
			"id": "time-stopping-hourglass",
			"count": 1,
			"chance": 1
		}
	],
	"group": "story",
	"bucket": "tasks"
}
```

</details>
