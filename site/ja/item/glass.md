# ガラス

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ガラス</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/facf4dde74b70ddb.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 不思議な透明物質。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/dc1ff4797b8cfa39.svg" alt="">清掃活動](/ja/action/cleanup-activity) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv3 | 1 | 6% | 0.03 | 10.8 |
| [<img class="wiki-icon" src="assets/icon/8037b426178499e5.svg" alt="">池のほとり](/ja/action/pond-side) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv14 | 1 | 18% | 0.09 | 32.4 |
| [<img class="wiki-icon" src="assets/icon/2de7e6dc75e72112.svg" alt="">ゾンビ](/ja/action/zombie) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv32 | 1 | 2.56% | 0.013 | 1.3 |
| [<img class="wiki-icon" src="assets/icon/8a25194356ea6eb5.svg" alt="">タートル](/ja/action/sea-turtle) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv39 | 1 | 0.306% | 0.002 | 0.011 |
| [<img class="wiki-icon" src="assets/icon/b148d196aa5fc19f.svg" alt="">魔法の鏡](/ja/action/magic-mirror) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv11 | 1 | 3.5% | 0.018 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8271839a5554488c.svg" alt="">ドッペルゲンガー](/ja/action/doppelganger) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv23 | 1 | 1.11% |  |
| [<img class="wiki-icon" src="assets/icon/8924e028e77e6849.svg" alt="">万華鏡](/ja/action/craft-kaleidoscope) | [<img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室](/ja/category/bedroom) | Lv35 | 3 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/ccffff42654510e0.svg" alt="">軍手](/ja/action/craft-work-gloves) | [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | Lv15 | 3 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/8e23404af16ae71f.svg" alt="">ネコの手](/ja/action/craft-cat-paw) | [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | Lv15 | 3 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `glass` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |
| CSV `memo` | 空賊 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "glass",
		"name": "ガラス",
		"explanation": "不思議な透明物質。",
		"icon": {
			"emoji": "🪟",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/facf4dde74b70ddb.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
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
