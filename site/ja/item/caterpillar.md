# 毛虫

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">毛虫</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐛</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>3 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ニョッキ


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌷</span>花壇の手入れ](/ja/action/tend-flower-bed) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv7 | 1 | 21.6% | 0.108 | 38.9 |
| [<span class="wiki-icon">🕷️</span>巨大なクモ](/ja/action/giant-spider) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv5 | 1 | 6.91% | 0.035 | 9 |
| [<span class="wiki-icon">🪲</span>カブトムシ](/ja/action/beetle) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv7 | 1 | 6.91% | 0.035 | 9 |
| [<span class="wiki-icon">🐲</span>ドラゴンキッズ](/ja/action/dragon-kid) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv25 | 1 | 0.512% | 0.003 | 0.056 |
| [<span class="wiki-icon">🧟</span>腐った暴君](/ja/action/rotten-tyrant) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 | 1 | 0.427% | 0.002 | 0 |
| [<span class="wiki-icon">🪱</span>ミミズ](/ja/action/earthworm) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv11 | 1 | 3.67% | 0.018 | 3.3 |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `caterpillar` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `3` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 1 |
| CSV `memo` | 腐った暴君 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "caterpillar",
		"name": "毛虫",
		"explanation": "ニョッキ",
		"icon": {
			"emoji": "🐛",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 3,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
