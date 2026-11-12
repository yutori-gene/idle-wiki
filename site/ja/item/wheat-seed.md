# 小麦の種

<div class="wiki-infobox" style="--accent:#849b88"><div class="wiki-infobox-title">小麦の種</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/27aeb08a23aabf5c.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/greenhouse"><img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/seedling"><img class="wiki-icon" src="assets/icon/02ea98da97943878.svg" alt="">種苗</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>2 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション・購入</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 蒔けば黄金の穂に。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/fc3d592702db5cdd.svg" alt="">小麦](/ja/action/grow-wheat) | [<img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室](/ja/category/greenhouse) | Lv10 | 1 | 30% | 0.18 | 0.045 |

### 購入

2 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a> で購入できる（下記の解放条件を満たしてから）。

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/fc3d592702db5cdd.svg" alt="">小麦](/ja/action/grow-wheat) | [<img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室](/ja/category/greenhouse) | Lv10 | 1 | 80% |  |

## 解放条件

次をすべて満たすと一覧に現れる（購入もできるようになる）。

- [<img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室](/ja/category/greenhouse) Lv10以上

<div class="wiki-navbox" style="--accent:#849b88"><div class="wiki-navbox-title">グループ: 種苗</div><div class="wiki-navbox-body"><a href="#/ja/item/wheat-seed"><img class="wiki-icon" src="assets/icon/27aeb08a23aabf5c.svg" alt="">小麦の種</a> ・ <a href="#/ja/item/tomato-seedling"><img class="wiki-icon" src="assets/icon/51b1389921be7aa9.svg" alt="">トマトの苗</a> ・ <a href="#/ja/item/lettuce-seed"><img class="wiki-icon" src="assets/icon/36a07a1c35dc48b5.svg" alt="">サラダ菜の種</a> ・ <a href="#/ja/item/banana-seedling"><img class="wiki-icon" src="assets/icon/304a37a6ef000a6e.svg" alt="">バナナの苗</a> ・ <a href="#/ja/item/apple-seedling"><img class="wiki-icon" src="assets/icon/37cbb430c4f7dec6.svg" alt="">リンゴの苗</a> ・ <a href="#/ja/item/herb-seed"><img class="wiki-icon" src="assets/icon/27e66d289e016059.svg" alt="">薬草の種</a> ・ <a href="#/ja/item/honey-hive"><img class="wiki-icon" src="assets/icon/6d99fc447cef41e4.svg" alt="">蜂蜜の巣箱</a> ・ <a href="#/ja/item/axolotl-egg"><img class="wiki-icon" src="assets/icon/8b30bd6daf6fc71d.svg" alt="">ウーパールーパーの卵</a> ・ <a href="#/ja/item/hemp-seed"><img class="wiki-icon" src="assets/icon/fe1057caf419568c.svg" alt="">大麻の種</a> ・ <a href="#/ja/item/truffle-bed"><img class="wiki-icon" src="assets/icon/ea4b4f3c067561e9.svg" alt="">トリュフの菌床</a> ・ <a href="#/ja/item/chili-seed"><img class="wiki-icon" src="assets/icon/27c1e91476f7c477.svg" alt="">とうがらしの種</a> ・ <a href="#/ja/item/poison-herb-seed"><img class="wiki-icon" src="assets/icon/de0c89b454839b69.svg" alt="">毒草の種</a> ・ <a href="#/ja/item/aromatic-herb-seed"><img class="wiki-icon" src="assets/icon/431cdd575b9abcda.svg" alt="">香草の種</a> ・ <a href="#/ja/item/world-tree-seed"><img class="wiki-icon" src="assets/icon/501f1c1552247009.svg" alt="">世界樹の種</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wheat-seed` |
| `category` | `greenhouse` |
| `group` | `seedling` |
| `unlocked` | `hidden` |
| `buyingValue` | `2` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wheat-seed",
		"name": "小麦の種",
		"explanation": "蒔けば黄金の穂に。",
		"icon": {
			"emoji": "🌾",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/27aeb08a23aabf5c.svg）"
		},
		"color": ""
	},
	"category": "greenhouse",
	"group": "seedling",
	"unlocked": "hidden",
	"buyingValue": 2,
	"sellingValue": 1,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "greenhouse",
			"count": 10,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
