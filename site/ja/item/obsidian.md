# 黒曜石

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">黒曜石</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⚫</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>63 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 古代の刃物の原料。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⛏️</span>埋もれた鉱夫町](/ja/action/buried-miner-town) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv5 | 2 | 25.9% | 0.259 | 13.3 |
| [<span class="wiki-icon">⛏️</span>鍾乳洞の鉱石掘り](/ja/action/limestone-cave-ore-digging) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv11 | 2 | 25.9% | 0.259 | 13.3 |
| [<span class="wiki-icon">🗿</span>黒曜石のガーゴイル](/ja/action/obsidian-gargoyle) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv37 | 1 | 0.878% | 0.004 | 0 |
| [<span class="wiki-icon">🪲</span>灼熱の甲虫](/ja/action/scorching-beetle) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv37 | 1 | 0.713% | 0.004 | 0 |
| [<span class="wiki-icon">🌋</span>古代の溶岩洞](/ja/action/ancient-lava-tube) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv8 | 2 | 41.8% | 0.836 | 0.239 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪓</span>トマホークを作る](/ja/action/craft-tomahawk) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv37 | 2 | 100% |  |
| [<span class="wiki-icon">🔮</span>闇のペンダントを作る](/ja/action/craft-dark-pendant) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv36 | 2 | 100% |  |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

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
			"image": ""
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
