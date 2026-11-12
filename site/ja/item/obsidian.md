# 黒曜石

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">黒曜石</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/b0cea3a51256d193.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>63 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 古代の刃物の原料。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/552075f2479bf84e.svg" alt="">埋もれた鉱夫町](/ja/action/buried-miner-town) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv5 | 2 | 25.9% | 0.259 | 13.3 |
| [<img class="wiki-icon" src="assets/icon/b3cd4e996733160e.svg" alt="">鍾乳洞の鉱石掘り](/ja/action/limestone-cave-ore-digging) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv11 | 2 | 25.9% | 0.259 | 13.3 |
| [<img class="wiki-icon" src="assets/icon/1c69fa1f35cbd5b4.svg" alt="">黒曜石のガーゴイル](/ja/action/obsidian-gargoyle) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv44 | 1 | 0.878% | 0.004 | 0.001 |
| [<img class="wiki-icon" src="assets/icon/a00ac0267c6ec1f0.svg" alt="">灼熱の甲虫](/ja/action/scorching-beetle) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv50 | 1 | 0.713% | 0.004 | 0.001 |
| [<img class="wiki-icon" src="assets/icon/8bfc01db8e3d1f1a.svg" alt="">古代の溶岩洞](/ja/action/ancient-lava-tube) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | Lv8 | 2 | 41.8% | 0.836 | 0.239 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/466f81441ebb85d9.svg" alt="">トマホーク](/ja/action/craft-tomahawk) | [<img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房](/ja/category/atelier) | Lv37 | 2 | 100% |  |
| [<img class="wiki-icon" src="assets/icon/75635773a28b19b4.svg" alt="">ダビデ像](/ja/action/craft-statue-of-david) | [<img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室](/ja/category/bedroom) | Lv36 | 4 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">215件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `obsidian` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `63` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 7 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "obsidian",
		"name": "黒曜石",
		"explanation": "古代の刃物の原料。",
		"icon": {
			"emoji": "⚫",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/b0cea3a51256d193.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 63,
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
