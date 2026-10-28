# 霧吹き

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">霧吹き</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💦</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/special"><span class="wiki-icon">💎</span>特別品</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>5 <a href="#/ja/item/treasure-medal"><span class="wiki-icon">🏅</span>秘宝メダル</a></td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>購入</td></tr><tr><th>初期状態</th><td>解放済み</td></tr></table></div>

> 猫に向けると逃げる。


## 入手方法

### 購入

5 <a href="#/ja/item/treasure-medal"><span class="wiki-icon">🏅</span>秘宝メダル</a> で購入できる。

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 特別品</div><div class="wiki-navbox-body"><a href="#/ja/item/paper-plane"><span class="wiki-icon">✈️</span>紙飛行機</a> ・ <a href="#/ja/item/spray-bottle"><span class="wiki-icon">💦</span>霧吹き</a> ・ <a href="#/ja/item/apology-stone"><span class="wiki-icon">🙏</span>詫び石</a> ・ <a href="#/ja/item/beehive"><span class="wiki-icon">🐝</span>ハチの巣</a> ・ <a href="#/ja/item/youth"><span class="wiki-icon">🌸</span>青春</a> ・ <a href="#/ja/item/roach-trap"><span class="wiki-icon">🪳</span>ゴキブリホイホイ</a> ・ <a href="#/ja/item/correction-fluid"><span class="wiki-icon">🖊️</span>修正液</a> ・ <a href="#/ja/item/forbidden-button"><span class="wiki-icon">🔴</span>絶対に押しては行けないボタン</a> ・ <a href="#/ja/item/synthetic-diamond-tiara"><span class="wiki-icon">👑</span>人工ダイアモンドのティアラ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `spray-bottle` |
| `category` | `warehouse` |
| `group` | `special` |
| `unlocked` | `released` |
| `buyingValue` | `5` |
| `sellingValue` | `0` |
| `coinId` | `treasure-medal` |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "spray-bottle",
		"name": "霧吹き",
		"explanation": "猫に向けると逃げる。",
		"icon": {
			"emoji": "💦",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "special",
	"unlocked": "released",
	"buyingValue": 5,
	"sellingValue": 0,
	"coinId": "treasure-medal",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
