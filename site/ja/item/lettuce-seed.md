# サラダ菜の種

<div class="wiki-infobox" style="--accent:#6fb07a"><div class="wiki-infobox-title">サラダ菜の種</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🥬</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><span class="wiki-icon">🌱</span>温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/seedling"><span class="wiki-icon">🌰</span>種苗</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>3 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>6 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 葉物野菜の始まり。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥬</span>サラダ菜の栽培](/ja/action/grow-lettuce) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv1 | 1 | 36% | 0.36 | 0.72 |

### 購入

6 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥬</span>サラダ菜の栽培](/ja/action/grow-lettuce) | [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | Lv1 | 1 | 80% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) Lv1以上

<div class="wiki-navbox" style="--accent:#6fb07a"><div class="wiki-navbox-title">グループ: 種苗</div><div class="wiki-navbox-body"><a href="#/ja/item/carrot-seed"><span class="wiki-icon">🥕</span>ニンジンの種</a> ・ <a href="#/ja/item/pumpkin-seed"><span class="wiki-icon">🎃</span>カボチャの種</a> ・ <a href="#/ja/item/wheat-seed"><span class="wiki-icon">🌾</span>小麦の種</a> ・ <a href="#/ja/item/garlic-bulb"><span class="wiki-icon">🧄</span>ニンニクの種球</a> ・ <a href="#/ja/item/lettuce-seed"><span class="wiki-icon">🥬</span>サラダ菜の種</a> ・ <a href="#/ja/item/banana-seedling"><span class="wiki-icon">🌱</span>バナナの苗</a> ・ <a href="#/ja/item/apple-seedling"><span class="wiki-icon">🌱</span>リンゴの苗</a> ・ <a href="#/ja/item/herb-seed"><span class="wiki-icon">🌿</span>薬草の種</a> ・ <a href="#/ja/item/honey-hive"><span class="wiki-icon">🍯</span>蜂蜜の巣箱</a> ・ <a href="#/ja/item/axolotl-egg"><span class="wiki-icon">🥚</span>ウーパールーパーの卵</a> ・ <a href="#/ja/item/hemp-seed"><span class="wiki-icon">🌿</span>大麻の種</a> ・ <a href="#/ja/item/potato-seed-tuber"><span class="wiki-icon">🥔</span>ジャガイモの種芋</a> ・ <a href="#/ja/item/truffle-bed"><span class="wiki-icon">🍄</span>トリュフの菌床</a> ・ <a href="#/ja/item/chili-seed"><span class="wiki-icon">🌶️</span>とうがらしの種</a> ・ <a href="#/ja/item/poison-herb-seed"><span class="wiki-icon">☠️</span>毒草の種</a> ・ <a href="#/ja/item/aromatic-herb-seed"><span class="wiki-icon">🌿</span>香草の種</a> ・ <a href="#/ja/item/world-tree-seed"><span class="wiki-icon">🌳</span>世界樹の種</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `lettuce-seed` |
| `category` | `greenhouse` |
| `group` | `seedling` |
| `unlocked` | `hidden` |
| `buyingValue` | `6` |
| `sellingValue` | `3` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "lettuce-seed",
		"name": "サラダ菜の種",
		"explanation": "葉物野菜の始まり。",
		"icon": {
			"emoji": "🥬",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "greenhouse",
	"group": "seedling",
	"unlocked": "hidden",
	"buyingValue": 6,
	"sellingValue": 3,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [
		{
			"type": "category",
			"id": "greenhouse",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
