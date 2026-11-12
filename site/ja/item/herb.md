# 薬草

<div class="wiki-infobox" style="--accent:#849b88"><div class="wiki-infobox-title">薬草</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/e755ac0db8874321.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/herb"><img class="wiki-icon" src="assets/icon/5ee26ae375c27672.svg" alt="">薬草</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 煎じれば傷に効く。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2290f162e85f7351.svg" alt="">薬草](/ja/action/grow-herb) | [<img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室](/ja/category/greenhouse) | Lv28 | 123 | 100% | 80 | 4 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/b16612e9084bb0c3.svg" alt="">キズ薬](/ja/action/brew-wound-medicine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv3 | 1 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/bd63a5e926528fce.svg" alt="">風邪薬](/ja/action/brew-cold-medicine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv5 | 2 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/2d32f6dba0c06950.svg" alt="">泡立つ薬](/ja/action/brew-bubbling-medicine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv7 | 4 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/8f3c0eb34779d5a4.svg" alt="">目薬](/ja/action/brew-eye-drops) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv17 | 2 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/d9856d270c9bf353.svg" alt="">鎮痛剤](/ja/action/brew-painkiller) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv21 | 2 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/b6e4a80aa75245d1.svg" alt="">ワクチン](/ja/action/brew-vaccine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv30 | 2 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/1683c3363eface44.svg" alt="">万能薬](/ja/action/brew-panacea) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv44 | 6 | 100% |  |

<div class="wiki-navbox" style="--accent:#849b88"><div class="wiki-navbox-title">グループ: 薬草</div><div class="wiki-navbox-body"><a href="#/ja/item/hemp"><img class="wiki-icon" src="assets/icon/d170080c7cf36f0b.svg" alt="">大麻</a> ・ <a href="#/ja/item/herb"><img class="wiki-icon" src="assets/icon/e755ac0db8874321.svg" alt="">薬草</a> ・ <a href="#/ja/item/chili"><img class="wiki-icon" src="assets/icon/3091f067d2e95db7.svg" alt="">とうがらし</a> ・ <a href="#/ja/item/poison-herb"><img class="wiki-icon" src="assets/icon/b8be92acdd3abd67.svg" alt="">毒草</a> ・ <a href="#/ja/item/aromatic-herb"><img class="wiki-icon" src="assets/icon/53c7ad769ec28ebe.svg" alt="">香草</a> ・ <a href="#/ja/item/world-tree-leaf"><img class="wiki-icon" src="assets/icon/ea1c03441f5696c2.svg" alt="">世界樹の葉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `herb` |
| `category` | `greenhouse` |
| `group` | `herb` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "herb",
		"name": "薬草",
		"explanation": "煎じれば傷に効く。",
		"icon": {
			"emoji": "🌿",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/e755ac0db8874321.svg）"
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
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
