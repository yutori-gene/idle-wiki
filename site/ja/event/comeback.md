# おかえり

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">おかえり</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏠</span></div><table><tr><th>タイミング</th><td>おかえりなさい</td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> しばらくぶりだね。進行はちゃんと続いていたよ


## 発生条件

おかえりなさいのタイミングで発生する。

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `comeback` |
| `category` | （空） |
| `timing` | `comebacked` |
| `unlocked` | `hinted` |
| `requiringGroup` | `false` |
| `group` | （空） |
| `bucket` | `unique` |

**設計ドキュメント**: [plan.md › イベント・ストーリー](/ja/dev/doc/plan?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC) ／ [terms.md › イベントタイミング（EventTimingTypes）](/ja/dev/doc/terms?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%EF%BC%88eventtimingtypes%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "comeback",
		"name": "おかえり",
		"explanation": "しばらくぶりだね。進行はちゃんと続いていたよ",
		"icon": {
			"emoji": "🏠",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "",
	"timing": "comebacked",
	"unlocked": "hinted",
	"requirements": [],
	"requiringGroup": false,
	"acquisitions": [],
	"group": "",
	"bucket": "unique"
}
```

</details>
