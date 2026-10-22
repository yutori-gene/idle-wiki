# 苦い団子

<div class="wiki-infobox" style="--accent:#d07c2c"><div class="wiki-infobox-title">苦い団子</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍡</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/cooking"><span class="wiki-icon">🍽️</span>料理</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>売値</th><td>270 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 意外な隠し味。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍡</span>苦い団子](/ja/action/cook-bitter-dango) | [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | Lv20 | 1 | 100% | 1 | 12 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) Lv11以上

<div class="wiki-navbox" style="--accent:#d07c2c"><div class="wiki-navbox-title">グループ: 料理</div><div class="wiki-navbox-body"><a href="#/ja/item/candy"><span class="wiki-icon">🍬</span>飴</a> ・ <a href="#/ja/item/french-toast"><span class="wiki-icon">🍞</span>フレンチトースト</a> ・ <a href="#/ja/item/potion-bread"><span class="wiki-icon">🍞</span>ポーション入りパン</a> ・ <a href="#/ja/item/yakitori"><span class="wiki-icon">🍗</span>焼き鳥</a> ・ <a href="#/ja/item/fried-egg"><span class="wiki-icon">🍳</span>目玉焼き</a> ・ <a href="#/ja/item/tomato-egg-drop"><span class="wiki-icon">🍅</span>トマトの卵とじ</a> ・ <a href="#/ja/item/potato-salad"><span class="wiki-icon">🥗</span>ポテトサラダ</a> ・ <a href="#/ja/item/meat-bun"><span class="wiki-icon">🥟</span>肉まん</a> ・ <a href="#/ja/item/escargot"><span class="wiki-icon">🐌</span>エスカルゴ</a> ・ <a href="#/ja/item/sardine-confit"><span class="wiki-icon">🐟</span>イワシのコンフィ〜芳醇ガーリック〜</a> ・ <a href="#/ja/item/stir-fried-vegetables"><span class="wiki-icon">🥘</span>野菜炒め</a> ・ <a href="#/ja/item/steak"><span class="wiki-icon">🥩</span>ステーキ</a> ・ <a href="#/ja/item/meat-bun-tomato-stew"><span class="wiki-icon">🥟</span>肉まんのトマト煮</a> ・ <a href="#/ja/item/grilled-fish"><span class="wiki-icon">🐟</span>焼き魚</a> ・ <a href="#/ja/item/beef-jerky"><span class="wiki-icon">🥩</span>ビーフジャーキー</a> ・ <a href="#/ja/item/pizza"><span class="wiki-icon">🍕</span>ピザ</a> ・ <a href="#/ja/item/burning-tofu"><span class="wiki-icon">🔥</span>燃える豆腐</a> ・ <a href="#/ja/item/rice-ball"><span class="wiki-icon">🍙</span>おにぎり</a> ・ <a href="#/ja/item/cooked-rice"><span class="wiki-icon">🍚</span>ごはん</a> ・ <a href="#/ja/item/steamed-vegetables"><span class="wiki-icon">🥗</span>蒸し野菜</a> ・ <a href="#/ja/item/omelette"><span class="wiki-icon">🍳</span>オムレツ</a> ・ <a href="#/ja/item/curry-rice"><span class="wiki-icon">🍛</span>カレーライス</a> ・ <a href="#/ja/item/sushi"><span class="wiki-icon">🍣</span>寿司</a> ・ <a href="#/ja/item/organic-salad"><span class="wiki-icon">🥗</span>オーガニックサラダ</a> ・ <a href="#/ja/item/bitter-dango"><span class="wiki-icon">🍡</span>苦い団子</a> ・ <a href="#/ja/item/senzu-bean"><span class="wiki-icon">🫘</span>仙豆</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bitter-dango` |
| `category` | `kitchen` |
| `group` | `cooking` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `270` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `skill` | （空） |
| CSV `tier` | 10 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 消耗チャネル＝料理とポーション（確定）](/ja/dev/doc/plan?id=%E6%B6%88%E8%80%97%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%EF%BC%9D%E6%96%99%E7%90%86%E3%81%A8%E3%83%9D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%88%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bitter-dango",
		"name": "苦い団子",
		"explanation": "意外な隠し味。",
		"icon": {
			"emoji": "🍡",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"group": "cooking",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 270,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"requirements": [
		{
			"type": "category",
			"id": "kitchen",
			"count": 11,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": ""
}
```

</details>
