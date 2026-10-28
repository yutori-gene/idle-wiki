# 金色の石板

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">金色の石板</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📜</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>270 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 神の言葉が刻まれている。

?> **最後の進行素材**。[<span class="wiki-icon">⚔️</span>最終決戦](/ja/event/final-battle)・[<span class="wiki-icon">🌍</span>世界の変化](/ja/event/world-change)・[<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue) の条件になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">😇</span>熾天使](/ja/action/seraph) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv50 | 1 | 0.333% | 0.002 | 0.001 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">⚔️</span>最終決戦](/ja/event/final-battle) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">📜</span>金色の石板](/ja/item/golden-tablet) ×1 |
| [<span class="wiki-icon">🌍</span>世界の変化](/ja/event/world-change) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">📜</span>金色の石板](/ja/item/golden-tablet) ×1 |
| [<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">📜</span>金色の石板](/ja/item/golden-tablet) ×1 |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">45件。一覧は <a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `golden-tablet` |
| `category` | `warehouse` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `270` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 10 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "golden-tablet",
		"name": "金色の石板",
		"explanation": "神の言葉が刻まれている。",
		"icon": {
			"emoji": "📜",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 270,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
