# リチウム

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">リチウム</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔋</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>18 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 軽くて力持ちな金属。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🛸</span>警備ドローン](/ja/action/security-drone) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv31 | 1 | 0.32% | 0.002 | 0.047 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🤖</span>R2D2](/ja/action/scout-with-r2d2) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv35 | 2 | 100% |  |
| [<span class="wiki-icon">🔩</span>百葉箱の部品](/ja/action/craft-weather-box-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv27 | 34 | 100% |  |
| [<span class="wiki-icon">🔩</span>冷蔵庫の部品](/ja/action/craft-refrigerator-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv31 | 8 | 100% |  |
| [<span class="wiki-icon">🔩</span>ソーラーパネルの部品](/ja/action/craft-solar-panel-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv35 | 40 | 100% |  |
| [<span class="wiki-icon">🔩</span>ハムスターの回車の部品](/ja/action/craft-hamster-wheel-parts) | [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | Lv42 | 50 | 100% |  |
| [<span class="wiki-icon">🔋</span>リチウムバッテリー](/ja/action/craft-lithium-battery) | [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) | Lv31 | 3 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `lithium` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `18` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 1 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "lithium",
		"name": "リチウム",
		"explanation": "軽くて力持ちな金属。",
		"icon": {
			"emoji": "🔋",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
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
