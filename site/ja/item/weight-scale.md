# 体重計

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">体重計</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/65fcd715e4a0c21d.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/processed-goods"><img class="wiki-icon" src="assets/icon/6d6032deee23fa82.svg" alt="">加工品</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>9 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 数字は嘘をつかない。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5b9a97ac9d611400.svg" alt="">取り壊し前の廃ビル](/ja/action/condemned-building) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv8 | 1 | 21.6% | 0.216 | 0.144 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3cc410e2b204a272.svg" alt="">体重計（分解）](/ja/action/disassemble-weight-scale) | [<img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房](/ja/category/atelier) | Lv14 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 加工品</div><div class="wiki-navbox-body"><a href="#/ja/item/weight-scale"><img class="wiki-icon" src="assets/icon/65fcd715e4a0c21d.svg" alt="">体重計</a> ・ <a href="#/ja/item/cash-card"><img class="wiki-icon" src="assets/icon/fe34e67ebf4ee5ca.svg" alt="">キャッシュカード</a> ・ <a href="#/ja/item/atm"><img class="wiki-icon" src="assets/icon/a8df5b2291a0b3c8.svg" alt="">ATM</a> ・ <a href="#/ja/item/cultured-meat"><img class="wiki-icon" src="assets/icon/4a4a0bb204e363d8.svg" alt="">培養肉</a> ・ <a href="#/ja/item/soy-meat"><img class="wiki-icon" src="assets/icon/2157f1f6ec64792d.svg" alt="">ソイミート</a> ・ <a href="#/ja/item/g-virus"><img class="wiki-icon" src="assets/icon/def0936f480dd038.svg" alt="">Gウイルス</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `weight-scale` |
| `category` | `warehouse` |
| `group` | `processed-goods` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `9` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 3 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "weight-scale",
		"name": "体重計",
		"explanation": "数字は嘘をつかない。",
		"icon": {
			"emoji": "⚖️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/65fcd715e4a0c21d.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "processed-goods",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 9,
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
