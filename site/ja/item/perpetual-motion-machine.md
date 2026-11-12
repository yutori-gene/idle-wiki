# 永久機関

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">永久機関</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/8c6edd4cc5cbec89.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1,458 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 実現すれば物理法則が泣く。

?> **進行素材**。[<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) のレベルとあわせて、次のダンジョン [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) を開く条件になる。繰り返し手に入るので、売ってしまっても取り直せる。物置がいっぱいのときに売らないよう注意。エピローグ（[<img class="wiki-icon" src="assets/icon/877c82c4015cfc92.svg" alt="">エピローグ](/ja/event/epilogue)）では10種すべてが条件になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/6e8705b278892508.svg" alt="">マッドサイエンティスト](/ja/action/mad-scientist) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | Lv6 | 1 | 0.861% | 0.004 | 0.01 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | カテゴリの解放条件 | [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 |
| [<img class="wiki-icon" src="assets/icon/e7b9e59204c728bd.svg" alt="">工場の主機](/ja/event/factory-main-engine) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 |
| [<img class="wiki-icon" src="assets/icon/a27c87cf94e83150.svg" alt="">火山の麓](/ja/event/volcano-foot) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 |
| [<img class="wiki-icon" src="assets/icon/877c82c4015cfc92.svg" alt="">エピローグ](/ja/event/epilogue) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">52件。一覧は <a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `perpetual-motion-machine` |
| `category` | `warehouse` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1458` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "perpetual-motion-machine",
		"name": "永久機関",
		"explanation": "実現すれば物理法則が泣く。",
		"icon": {
			"emoji": "🔄",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/8c6edd4cc5cbec89.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1458,
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
