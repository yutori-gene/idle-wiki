# ニュートラルチップ

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ニュートラルチップ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/94338ed8b5c294ad.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>54 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 特性のない基盤部品。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/89c610e4308f7183.svg" alt="">監視カメラの群れ](/ja/action/camera-swarm) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv34 | 1 | 0.416% | 0.002 | 0.016 |
| [<img class="wiki-icon" src="assets/icon/80eb7b221e8b9886.svg" alt="">中央制御室](/ja/action/central-control-room) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv8 | 2 | 41.8% | 0.836 | 0.279 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/957ae06f3cd80af7.svg" alt="">イヌ小屋の部品](/ja/action/craft-dog-house-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv24 | 3 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/906d33c5da4359d9.svg" alt="">百葉箱の部品](/ja/action/craft-weather-box-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv27 | 11 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/8f2c721187701b2f.svg" alt="">ソーラーパネルの部品](/ja/action/craft-solar-panel-parts) | [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | Lv35 | 17 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">215件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `neutral-chip` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `54` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "neutral-chip",
		"name": "ニュートラルチップ",
		"explanation": "特性のない基盤部品。",
		"icon": {
			"emoji": "💾",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/94338ed8b5c294ad.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 54,
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
