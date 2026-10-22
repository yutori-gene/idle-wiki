# イワシ

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">イワシ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐟</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>売値</th><td>12 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 群れで海を渡る小魚。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐍</span>サーペント](/ja/action/serpent) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 | 2 | 48% | 0.48 | 0.54 |
| [<span class="wiki-icon">🎩</span>ジョーンズ](/ja/action/jones) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv21 | 2 | 48% | 0.48 | 0.123 |
| [<span class="wiki-icon">🦇</span>コウモリ](/ja/action/bat) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv45 | 2 | 48% | 0.48 | 0.005 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐟</span>軍用イワシ](/ja/action/make-military-sardine) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv15 | 3 | 100% |  |
| [<span class="wiki-icon">🐟</span>イワシのコンフィ](/ja/action/cook-sardine-confit) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv6 | 2 | 100% |  |
| [<span class="wiki-icon">🐟</span>焼き魚](/ja/action/cook-grilled-fish) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv12 | 2 | 100% |  |
| [<span class="wiki-icon">🍣</span>寿司](/ja/action/cook-sushi) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv17 | 1 | 100% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🎣</span>漁師の手伝い](/ja/event/fisherman-help) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🐟</span>イワシ](/ja/item/sardine) ×2 |

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 食材</div><div class="wiki-navbox-body">70件。一覧は <a href="#/ja/group/ingredient"><span class="wiki-icon">🥕</span>食材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sardine` |
| `category` | `kitchen` |
| `group` | `ingredient` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `12` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 1 |
| CSV `memo` | 焼き魚 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sardine",
		"name": "イワシ",
		"explanation": "群れで海を渡る小魚。",
		"icon": {
			"emoji": "🐟",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "ingredient",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 12,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
