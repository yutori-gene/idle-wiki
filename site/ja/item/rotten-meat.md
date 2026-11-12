# 腐った肉

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">腐った肉</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/4396836ca6fee37c.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>9 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ときどき脈打つ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/21fd864bcbf55bb4.svg" alt="">パブロフの犬](/ja/action/pavlovs-dog) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv26 | 1 | 0.53% | 0.003 | 0.732 |
| [<img class="wiki-icon" src="assets/icon/2de7e6dc75e72112.svg" alt="">ゾンビ](/ja/action/zombie) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv32 | 1 | 1.54% | 0.008 | 0.757 |
| [<img class="wiki-icon" src="assets/icon/a4e9edb1cd6bdef5.svg" alt="">ドブネズミ](/ja/action/sewer-rat) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | Lv50 | 1 | 0.96% | 0.005 | 0.755 |
| [<img class="wiki-icon" src="assets/icon/a1510fdde9715652.svg" alt="">巨神兵](/ja/action/god-warrior) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv39 | 1 | 0.212% | 0.001 | 0.005 |
| [<img class="wiki-icon" src="assets/icon/a0d753414f493a1b.svg" alt="">ワイルドドア](/ja/action/wild-door) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv42 | 1 | 0.768% | 0.004 | 0.052 |
| [<img class="wiki-icon" src="assets/icon/3bd66d6ecb71b73e.svg" alt="">ガーゴイル](/ja/action/gargoyle) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | Lv45 | 1 | 0.768% | 0.004 | 0 |
| [<img class="wiki-icon" src="assets/icon/a6aa062ef47dc4a9.svg" alt="">腐った暴君](/ja/action/rotten-tyrant) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv35 | 1 | 0.512% | 0.003 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5b9eec78a0de50a1.svg" alt="">歩くキノコ](/ja/action/walking-mushroom) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | Lv9 | 1 | 2.25% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv2以上

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rotten-meat` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `9` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 2 |
| CSV `memo` | 人体実験 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rotten-meat",
		"name": "腐った肉",
		"explanation": "ときどき脈打つ。",
		"icon": {
			"emoji": "🍖",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/4396836ca6fee37c.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 9,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "park",
			"count": 2,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
