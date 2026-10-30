# 香草

<div class="wiki-infobox" style="--accent:#849b88"><div class="wiki-infobox-title">香草</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌿</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/herb"><span class="wiki-icon">🌿</span>薬草</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>24 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 料理の香りを決める葉。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌿</span>香草](/ja/action/grow-aromatic-herb) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv47 | 576 | 100% | 288 | 6 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) Lv40以上

<div class="wiki-navbox" style="--accent:#849b88"><div class="wiki-navbox-title">グループ: 薬草</div><div class="wiki-navbox-body"><a href="#/ja/item/hemp"><span class="wiki-icon">🌿</span>大麻</a> ・ <a href="#/ja/item/herb"><span class="wiki-icon">🌿</span>薬草</a> ・ <a href="#/ja/item/chili"><span class="wiki-icon">🌶️</span>とうがらし</a> ・ <a href="#/ja/item/poison-herb"><span class="wiki-icon">☠️</span>毒草</a> ・ <a href="#/ja/item/aromatic-herb"><span class="wiki-icon">🌿</span>香草</a> ・ <a href="#/ja/item/world-tree-leaf"><span class="wiki-icon">🍃</span>世界樹の葉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `aromatic-herb` |
| `category` | `greenhouse` |
| `group` | `herb` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `24` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 8 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "aromatic-herb",
		"name": "香草",
		"explanation": "料理の香りを決める葉。",
		"icon": {
			"emoji": "🌿",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "greenhouse",
	"group": "herb",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 24,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "greenhouse",
			"count": 40,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
