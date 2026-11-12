# るつぼ

<div class="wiki-infobox" style="--accent:#736883"><div class="wiki-infobox-title">るつぼ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/f333ccfe63965377.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/basement"><img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 高温処理が必要な調合に使う。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/079b0c36aa0e32fb.svg" alt="">るつぼ](/ja/action/buy-crucible) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | Lv15 | 1 | 100% | 1 | 36,000 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/4687a628a4156fbe.svg" alt="">カイロ](/ja/action/brew-heat-pack) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/255a7bf74ab07615.svg" alt="">フェニックスの尾](/ja/action/brew-phoenix-tail) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/b6e4a80aa75245d1.svg" alt="">ワクチン](/ja/action/brew-vaccine) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/0f59f9c567987876.svg" alt="">LCL](/ja/action/brew-lcl) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/a6e1559582444f43.svg" alt="">げんきのかけら](/ja/action/brew-revive-piece) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/0156d3b4685e61c6.svg" alt="">エリクサー](/ja/action/brew-elixir) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/b395012fc80a4b1a.svg" alt="">フェリックスフェリシス](/ja/action/brew-felix-felicis) | [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/f333ccfe63965377.svg" alt="">るつぼ](/ja/item/crucible) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#736883"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">52件。一覧は <a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `crucible` |
| `category` | `basement` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 3 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "crucible",
		"name": "るつぼ",
		"explanation": "高温処理が必要な調合に使う。",
		"icon": {
			"emoji": "⚗️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/f333ccfe63965377.svg）"
		},
		"color": ""
	},
	"category": "basement",
	"group": "tool",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
