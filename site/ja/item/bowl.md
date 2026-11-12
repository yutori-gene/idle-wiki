# ボウル

<div class="wiki-infobox" style="--accent:#9b7d61"><div class="wiki-infobox-title">ボウル</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/789542d89d8bcb47.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 混ぜる、盛る、顔を洗う。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/c40039abc16140a0.svg" alt="">ボウル](/ja/action/buy-bowl) | [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | Lv5 | 1 | 100% | 1 | 36,000 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8a3107ca2e65c0d4.svg" alt="">パン生地](/ja/action/knead-bread-dough) | [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | [<img class="wiki-icon" src="assets/icon/789542d89d8bcb47.svg" alt="">ボウル](/ja/item/bowl) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/bb0690fba55e4b09.svg" alt="">ポーション入りパン](/ja/action/cook-potion-bread) | [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | [<img class="wiki-icon" src="assets/icon/789542d89d8bcb47.svg" alt="">ボウル](/ja/item/bowl) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/1a1e2d297dfb9467.svg" alt="">パイ](/ja/action/cook-pie) | [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | [<img class="wiki-icon" src="assets/icon/789542d89d8bcb47.svg" alt="">ボウル](/ja/item/bowl) ×1（消費しない） |
| [<img class="wiki-icon" src="assets/icon/f74c0058f665269e.svg" alt="">苦い団子](/ja/action/cook-bitter-dango) | [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | [<img class="wiki-icon" src="assets/icon/789542d89d8bcb47.svg" alt="">ボウル](/ja/item/bowl) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#9b7d61"><div class="wiki-navbox-title">グループ: 道具</div><div class="wiki-navbox-body">52件。一覧は <a href="#/ja/group/tool"><img class="wiki-icon" src="assets/icon/74b40467c7128029.svg" alt="">道具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bowl` |
| `category` | `kitchen` |
| `group` | `tool` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 2 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bowl",
		"name": "ボウル",
		"explanation": "混ぜる、盛る、顔を洗う。",
		"icon": {
			"emoji": "🥣",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/789542d89d8bcb47.svg）"
		},
		"color": ""
	},
	"category": "kitchen",
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
