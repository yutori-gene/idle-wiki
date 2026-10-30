# おじいさんの時計

<div class="wiki-infobox" style="--accent:#9196ab"><div class="wiki-infobox-title">おじいさんの時計</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🕰️</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/bedroom"><span class="wiki-icon">🛏️</span>寝室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/floor"><span class="wiki-icon">🟫</span>床</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 百年を刻んで止まる。床に飾ると、すべてのカテゴリの経験値が増える。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 経験値 |
| --- | --- |
| 全カテゴリ | +9 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🕰️</span>おじいさんの時計を直す](/ja/action/repair-grandfather-clock) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv44 | 1 | 100% | 1 | 0.111 |

<div class="wiki-navbox" style="--accent:#9196ab"><div class="wiki-navbox-title">グループ: 床</div><div class="wiki-navbox-body"><a href="#/ja/item/sand-castle"><span class="wiki-icon">🏖️</span>砂の城</a> ・ <a href="#/ja/item/dancing-statue"><span class="wiki-icon">🕺</span>踊る銅像</a> ・ <a href="#/ja/item/flying-carpet"><span class="wiki-icon">🧞</span>空飛ぶ絨毯</a> ・ <a href="#/ja/item/grandfather-clock"><span class="wiki-icon">🕰️</span>おじいさんの時計</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `grandfather-clock` |
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
| CSV `tier` | 9 |
| CSV `rare` | 9 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "grandfather-clock",
		"name": "おじいさんの時計",
		"explanation": "百年を刻んで止まる。床に飾ると、すべてのカテゴリの経験値が増える。",
		"icon": {
			"emoji": "🕰️",
			"iconify": "",
			"image": ""
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
			"experience": 9
		}
	],
	"skill": ""
}
```

</details>
