# 極夜の結晶

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">極夜の結晶</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/06f0bf5da902f207.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1,215 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 太陽が昇らぬ夜の結晶。

?> **進行素材**。[<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) のレベルとあわせて、次のダンジョン [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) を開く条件になる。繰り返し手に入るので、売ってしまっても取り直せる。物置がいっぱいのときに売らないよう注意。エピローグ（[<img class="wiki-icon" src="assets/icon/877c82c4015cfc92.svg" alt="">エピローグ](/ja/event/epilogue)）では10種すべてが条件になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/7c6f087ad4dc298b.svg" alt="">凍った湖畔](/ja/action/frozen-lakeside) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | Lv3 | 1 | 100% | 0.5 | 36 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | カテゴリの解放条件 | [<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ×1 |
| [<img class="wiki-icon" src="assets/icon/0ab0223d32cdc6d1.svg" alt="">北国の女王](/ja/event/northland-queen) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ×1 |
| [<img class="wiki-icon" src="assets/icon/4d9a546f3265cc49.svg" alt="">廃工場侵入](/ja/event/infiltrate-abandoned-factory) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ×1 |
| [<img class="wiki-icon" src="assets/icon/877c82c4015cfc92.svg" alt="">エピローグ](/ja/event/epilogue) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ×1 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">52件。一覧は <a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `polar-night-crystal` |
| `category` | `warehouse` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1215` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 5 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "polar-night-crystal",
		"name": "極夜の結晶",
		"explanation": "太陽が昇らぬ夜の結晶。",
		"icon": {
			"emoji": "🌌",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/06f0bf5da902f207.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1215,
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
