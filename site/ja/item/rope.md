# ロープ

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">ロープ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/5824a7cabeddd7b5.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 結べば絆、緩めば危機。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/21fd864bcbf55bb4.svg" alt="">パブロフの犬](/ja/action/pavlovs-dog) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv6 | 1 | 15.9% | 0.08 | 22 |
| [<span class="wiki-icon">🗡️</span>山賊](/ja/action/bandit) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv14 | 1 | 5.91% | 0.03 | 4.3 |
| [<span class="wiki-icon">🏴‍☠️</span>海賊の頭](/ja/action/pirate-captain) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv19 | 1 | 4.9% | 0.025 | 0.72 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥷</span>盗賊](/ja/action/thief) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 3 | 0.556% |  |
| [<span class="wiki-icon">🦑</span>クラーケン](/ja/action/kraken) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv20 | 1 | 1% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🛡️</span>騎士の修練](/ja/event/knight-training) | イベントの条件（条件達成（タスク）） | [<img class="wiki-icon" src="assets/icon/5824a7cabeddd7b5.svg" alt="">ロープ](/ja/item/rope) ×5 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><img class="wiki-icon" src="assets/icon/ba67e1a6d072329f.svg" alt="">ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rope` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rope",
		"name": "ロープ",
		"explanation": "結べば絆、緩めば危機。",
		"icon": {
			"emoji": "🪢",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/5824a7cabeddd7b5.svg）"
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
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
