# 踊る銅像

<div class="wiki-infobox" style="--accent:#9196ab"><div class="wiki-infobox-title">踊る銅像</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/295c886c43ff81d3.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/bedroom"><img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/floor"><img class="wiki-icon" src="assets/icon/1302287d6df4da87.svg" alt="">床</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 誰も見ていない夜に動き出す。床に飾ると、すべてのカテゴリの経験値が増える。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 経験値 |
| --- | --- |
| 全カテゴリ | +4 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/93c7b48f506d481f.svg" alt="">踊る銅像](/ja/action/craft-dancing-statue) | [<img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室](/ja/category/bedroom) | Lv37 | 1 | 100% | 1 | 0.143 |

<div class="wiki-navbox" style="--accent:#9196ab"><div class="wiki-navbox-title">グループ: 床</div><div class="wiki-navbox-body"><a href="#/ja/item/mimic"><img class="wiki-icon" src="assets/icon/f035c4566b81cf4b.svg" alt="">ミミック</a> ・ <a href="#/ja/item/dancing-statue"><img class="wiki-icon" src="assets/icon/295c886c43ff81d3.svg" alt="">踊る銅像</a> ・ <a href="#/ja/item/statue-of-david"><img class="wiki-icon" src="assets/icon/12c7fb07f3dfcbe1.svg" alt="">ダビデ像</a> ・ <a href="#/ja/item/grandfather-clock"><img class="wiki-icon" src="assets/icon/38074d36bf98c41d.svg" alt="">おじいさんの時計</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `dancing-statue` |
| `category` | `bedroom` |
| `group` | `floor` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 7 |
| CSV `rare` | 7 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "dancing-statue",
		"name": "踊る銅像",
		"explanation": "誰も見ていない夜に動き出す。床に飾ると、すべてのカテゴリの経験値が増える。",
		"icon": {
			"emoji": "🕺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/295c886c43ff81d3.svg）"
		},
		"color": ""
	},
	"category": "bedroom",
	"group": "floor",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 4
		}
	],
	"skill": ""
}
```

</details>
