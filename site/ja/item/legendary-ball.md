# 伝説のボール

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">伝説のボール</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/19da4c679f8870a7.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>243 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 蹴れば世界が始まる。

?> **進行素材**。[<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) のレベルとあわせて、次のダンジョン [<span class="wiki-icon">🌲</span>森](/ja/category/forest) を開く条件になる。繰り返し手に入るので、売ってしまっても取り直せる。物置がいっぱいのときに売らないよう注意。エピローグ（[<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue)）では10種すべてが条件になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/849075a43bb2d535.svg" alt="">夕暮れの散歩道](/ja/action/twilight-promenade) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv12 | 1 | 100% | 1 | 2 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | カテゴリの解放条件 | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 |
| [<span class="wiki-icon">🌳</span>公園の主](/ja/event/park-lord) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 |
| [<span class="wiki-icon">🌲</span>森へ踏み込む](/ja/event/enter-forest) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 |
| [<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 |
| [<span class="wiki-icon">🌳</span>公園の秘密](/ja/event/park-secret) | イベントの条件（変化時（隠し）） | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">49件。一覧は <a href="#/ja/group/tool"><span class="wiki-icon">🧰</span>道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `legendary-ball` |
| `category` | `warehouse` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `243` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "legendary-ball",
		"name": "伝説のボール",
		"explanation": "蹴れば世界が始まる。",
		"icon": {
			"emoji": "⚽",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/19da4c679f8870a7.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 243,
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
