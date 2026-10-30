# 歴史書

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">歴史書</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📜</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><span class="wiki-icon">📚</span>書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/book"><span class="wiki-icon">📕</span>本</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>324 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 過去から未来を学ぶ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🗼</span>灯台守の小屋](/ja/action/lighthouse-keeper-hut) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv30 | 1 | 100% | 1 | 0.5 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📜</span>歴史書を読む](/ja/action/read-history-book) | [<span class="wiki-icon">📚</span>書斎](/ja/category/study) | Lv34 | 1 | 100% |  |

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🐙</span>クトゥルフ](/ja/action/cthulhu) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | [<span class="wiki-icon">📜</span>歴史書](/ja/item/history-book) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 本</div><div class="wiki-navbox-body"><a href="#/ja/item/art-book"><span class="wiki-icon">🎨</span>美術書</a> ・ <a href="#/ja/item/fairy-tale"><span class="wiki-icon">📙</span>童話</a> ・ <a href="#/ja/item/picture-book"><span class="wiki-icon">📖</span>絵本</a> ・ <a href="#/ja/item/diploma"><span class="wiki-icon">🎓</span>卒業証書</a> ・ <a href="#/ja/item/license"><span class="wiki-icon">🪪</span>免許証</a> ・ <a href="#/ja/item/self-help-book"><span class="wiki-icon">📘</span>自己啓発本</a> ・ <a href="#/ja/item/novel"><span class="wiki-icon">📗</span>小説</a> ・ <a href="#/ja/item/manga"><span class="wiki-icon">📚</span>漫画</a> ・ <a href="#/ja/item/newspaper"><span class="wiki-icon">📰</span>新聞</a> ・ <a href="#/ja/item/love-letter"><span class="wiki-icon">💌</span>ラブレター</a> ・ <a href="#/ja/item/encyclopedia"><span class="wiki-icon">📚</span>百科事典</a> ・ <a href="#/ja/item/ballot"><span class="wiki-icon">🗳️</span>投票用紙</a> ・ <a href="#/ja/item/residence-certificate"><span class="wiki-icon">📄</span>住民票</a> ・ <a href="#/ja/item/beginner-thief-book"><span class="wiki-icon">📕</span>はじめての泥棒</a> ・ <a href="#/ja/item/recipe-book"><span class="wiki-icon">📗</span>レシピ本</a> ・ <a href="#/ja/item/chain-letter"><span class="wiki-icon">✉️</span>不幸の手紙</a> ・ <a href="#/ja/item/map"><span class="wiki-icon">🗺️</span>地図</a> ・ <a href="#/ja/item/history-book"><span class="wiki-icon">📜</span>歴史書</a> ・ <a href="#/ja/item/bible"><span class="wiki-icon">📖</span>聖書</a> ・ <a href="#/ja/item/math-book"><span class="wiki-icon">📐</span>数学書</a> ・ <a href="#/ja/item/anatomy-book"><span class="wiki-icon">📕</span>医学書「解体新書」</a> ・ <a href="#/ja/item/forbidden-book"><span class="wiki-icon">📕</span>禁書</a> ・ <a href="#/ja/item/death-note"><span class="wiki-icon">📓</span>デスノート</a> ・ <a href="#/ja/item/dead-sea-scrolls"><span class="wiki-icon">📜</span>死海文書</a> ・ <a href="#/ja/item/necronomicon"><span class="wiki-icon">📕</span>ネクロノミコン</a> ・ <a href="#/ja/item/catcher-in-the-rye"><span class="wiki-icon">📗</span>ライ麦畑でつかまえて</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `history-book` |
| `category` | `study` |
| `group` | `book` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `324` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 4 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 知識型の雛形（Step 1-3 確定・書斎）](/ja/dev/doc/plan?id=%E7%9F%A5%E8%AD%98%E5%9E%8B%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E6%9B%B8%E6%96%8E%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "history-book",
		"name": "歴史書",
		"explanation": "過去から未来を学ぶ。",
		"icon": {
			"emoji": "📜",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "study",
	"group": "book",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 324,
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
