# 大麻

<div class="wiki-infobox" style="--accent:#6fb07a"><div class="wiki-infobox-title">大麻</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌿</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/herb"><span class="wiki-icon">🌿</span>薬草</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ポーションの原料。芳香剤としてもセレブの間で人気。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌿</span>大麻の栽培](/ja/action/grow-hemp) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv5 | 2 | 100% | 2 | 4 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💊</span>阿片の調合](/ja/action/brew-opium) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv1 | 1 | 100% |  |
| [<span class="wiki-icon">💊</span>滋養強壮剤の調合](/ja/action/brew-tonic) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv15 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#6fb07a"><div class="wiki-navbox-title">グループ: 薬草</div><div class="wiki-navbox-body"><a href="#/ja/item/hemp"><span class="wiki-icon">🌿</span>大麻</a> ・ <a href="#/ja/item/herb"><span class="wiki-icon">🌿</span>薬草</a> ・ <a href="#/ja/item/chili"><span class="wiki-icon">🌶️</span>とうがらし</a> ・ <a href="#/ja/item/poison-herb"><span class="wiki-icon">☠️</span>毒草</a> ・ <a href="#/ja/item/aromatic-herb"><span class="wiki-icon">🌿</span>香草</a> ・ <a href="#/ja/item/world-tree-leaf"><span class="wiki-icon">🍃</span>世界樹の葉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `hemp` |
| `category` | `greenhouse` |
| `group` | `herb` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "hemp",
		"name": "大麻",
		"explanation": "ポーションの原料。芳香剤としてもセレブの間で人気。",
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
	"sellingValue": 18,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
