# ピクニックバスケット

<div class="wiki-infobox" style="--accent:#a58793"><div class="wiki-infobox-title">ピクニックバスケット</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/6d83bc87fd0524a2.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/garden"><img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/container"><img class="wiki-icon" src="assets/icon/3589d353f01045a6.svg" alt="">容器</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 大家族向けの特大のかご。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/1aee9dfc0a917e5f.svg" alt="">ボート小屋](/ja/action/boathouse) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv16 | 1 | 100% | 1 | 2 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/cb9cdd821d080835.svg" alt="">ピクニックバスケットを手に入れた](/ja/event/storage-picnic-basket) | イベントの条件（変化時（隠し）） | [<img class="wiki-icon" src="assets/icon/6d83bc87fd0524a2.svg" alt="">ピクニックバスケット](/ja/item/picnic-basket) ×1 |

<div class="wiki-navbox" style="--accent:#a58793"><div class="wiki-navbox-title">グループ: 容器</div><div class="wiki-navbox-body"><a href="#/ja/item/eco-bag"><img class="wiki-icon" src="assets/icon/1573065dab7cb0f0.svg" alt="">エコバッグ</a> ・ <a href="#/ja/item/picnic-basket"><img class="wiki-icon" src="assets/icon/6d83bc87fd0524a2.svg" alt="">ピクニックバスケット</a> ・ <a href="#/ja/item/jar"><img class="wiki-icon" src="assets/icon/374bb9e9f7c6cb70.svg" alt="">壺</a> ・ <a href="#/ja/item/backpack"><img class="wiki-icon" src="assets/icon/2f6b3bbe6a33cb6e.svg" alt="">リュックサック</a> ・ <a href="#/ja/item/kangaroo-pouch"><img class="wiki-icon" src="assets/icon/0da404830dc52c88.svg" alt="">カンガルーの袋</a> ・ <a href="#/ja/item/hoi-poi-capsule"><img class="wiki-icon" src="assets/icon/f192138a6d599a20.svg" alt="">ホイポイカプセル</a> ・ <a href="#/ja/item/shipping-container"><img class="wiki-icon" src="assets/icon/4711814cd0a89edb.svg" alt="">コンテナ</a> ・ <a href="#/ja/item/coffin"><img class="wiki-icon" src="assets/icon/b44324362771c99f.svg" alt="">棺桶</a> ・ <a href="#/ja/item/3d-pocket"><img class="wiki-icon" src="assets/icon/8cac76ebe545ff88.svg" alt="">3次元ポケット</a> ・ <a href="#/ja/item/entry-plug"><img class="wiki-icon" src="assets/icon/a3e864c0b48b6a99.svg" alt="">エントリープラグ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `picnic-basket` |
| `category` | `garden` |
| `group` | `container` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 容器9種は changed イベントで容量を配る（確定）](/ja/dev/doc/plan?id=%E5%AE%B9%E5%99%A89%E7%A8%AE%E3%81%AF-changed-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%A7%E5%AE%B9%E9%87%8F%E3%82%92%E9%85%8D%E3%82%8B%EF%BC%88%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "picnic-basket",
		"name": "ピクニックバスケット",
		"explanation": "大家族向けの特大のかご。",
		"icon": {
			"emoji": "🧺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/6d83bc87fd0524a2.svg）"
		},
		"color": ""
	},
	"category": "garden",
	"group": "container",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
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
