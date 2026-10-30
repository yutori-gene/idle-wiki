# 棺桶を手に入れた

<div class="wiki-infobox" style="--accent:#a58793"><div class="wiki-infobox-title">棺桶を手に入れた</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚰️</span></div><table><tr><th>タイミング</th><td>変化時（隠し）</td></tr><tr><th>カテゴリ</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 最後に入る箱を、とりあえず物入れにした。


## 発生条件

数量が変化したとき、**その1回で増えた量**が次の値以上なら発動する（何度でも繰り返す）。画面には表示されない。

- [<span class="wiki-icon">⚰️</span>棺桶](/ja/item/coffin) ×1

## 報酬

- [<span class="wiki-icon">📦</span>物置](/ja/item/capacity) ×25

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `storage-coffin` |
| `category` | `garden` |
| `timing` | `changed` |
| `unlocked` | `hinted` |
| `requiringGroup` | `false` |
| `group` | （空） |
| `bucket` | `changed` |
| CSV `memo` | 容器（fix.md B-9）。火山の探索で1個だけ入手する |

**設計ドキュメント**: [plan.md › イベント・ストーリー](/ja/dev/doc/plan?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC) ／ [terms.md › イベントタイミング（EventTimingTypes）](/ja/dev/doc/terms?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%EF%BC%88eventtimingtypes%EF%BC%89) ／ [plan.md › changed（小イベント＋隠しイベント）](/ja/dev/doc/plan?id=changed%EF%BC%88%E5%B0%8F%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%EF%BC%8B%E9%9A%A0%E3%81%97%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "storage-coffin",
		"name": "棺桶を手に入れた",
		"explanation": "最後に入る箱を、とりあえず物入れにした。",
		"icon": {
			"emoji": "⚰️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "garden",
	"timing": "changed",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "item",
			"id": "coffin",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "capacity",
			"count": 25,
			"chance": 1
		}
	],
	"group": "",
	"bucket": "changed"
}
```

</details>
