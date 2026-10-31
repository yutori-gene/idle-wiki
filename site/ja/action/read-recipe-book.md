# 今夜のおかず🎶レシピ集

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">今夜のおかず🎶レシピ集</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📗</span></div><table><tr><th>場所</th><td><a href="#/ja/category/study"><span class="wiki-icon">📚</span>書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/reading"><span class="wiki-icon">📖</span>読書</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>所要時間</th><td>14時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>最大回数</th><td>1回</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 作らないまま何度も読む。腹だけが減っていく。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">📗</span>今夜のおかず🎶レシピ集](/ja/item/recipe-book) ×1（消費する）
- [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) Lv11以上

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍳</span>料理知識](/ja/item/cooking-knowledge) ×1 | 成功時 | 100% | 1 | 0.071 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| — | 14時間 | 100% | — | 0.1 | — |

経験値の入り先カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 2 | -2 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">書斎のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/read-fairy-tale"><span class="wiki-icon">📙</span>グリム童話</a> ・ <a href="#/ja/action/read-picture-book"><img class="wiki-icon" src="assets/icon/00c8d9e334dcf056.svg" alt="">飛び出す絵本</a> ・ <a href="#/ja/action/read-manga"><span class="wiki-icon">📚</span>不健全図書</a> ・ <a href="#/ja/action/read-newspaper"><span class="wiki-icon">📰</span>新聞</a> ・ <a href="#/ja/action/reread-diploma"><span class="wiki-icon">🎓</span>卒業証書</a> ・ <a href="#/ja/action/read-novel"><span class="wiki-icon">📗</span>探偵小説</a> ・ <a href="#/ja/action/read-self-help-book"><span class="wiki-icon">📘</span>自己啓発本</a> ・ <a href="#/ja/action/read-love-letter"><span class="wiki-icon">💌</span>ラブレター</a> ・ <a href="#/ja/action/read-gossip-magazine"><span class="wiki-icon">🗞️</span>ゴシップ誌</a> ・ <a href="#/ja/action/read-art-book"><img class="wiki-icon" src="assets/icon/ee7e33f0999701d6.svg" alt="">美術書</a> ・ <a href="#/ja/action/read-encyclopedia"><span class="wiki-icon">📚</span>百科事典</a> ・ <a href="#/ja/action/fraud-clinical-studies"><span class="wiki-icon">📒</span>裏帳簿</a> ・ <a href="#/ja/action/read-ballot"><span class="wiki-icon">🗳️</span>投票用紙</a> ・ <a href="#/ja/action/read-recipe-book"><span class="wiki-icon">📗</span>今夜のおかず🎶レシピ集</a> ・ <a href="#/ja/action/read-chain-letter"><span class="wiki-icon">✉️</span>不幸の手紙</a> ・ <a href="#/ja/action/read-map"><span class="wiki-icon">🗺️</span>古びた地図</a> ・ <a href="#/ja/action/read-history-book"><span class="wiki-icon">📜</span>歴史書</a> ・ <a href="#/ja/action/read-bible"><span class="wiki-icon">📖</span>聖書</a> ・ <a href="#/ja/action/read-anatomy-book"><span class="wiki-icon">📕</span>解剖学書</a> ・ <a href="#/ja/action/read-forbidden-book"><span class="wiki-icon">📕</span>禁書</a> ・ <a href="#/ja/action/read-death-note"><span class="wiki-icon">📓</span>デスノート</a> ・ <a href="#/ja/action/cosmic-truth-studies"><span class="wiki-icon">📜</span>死海文書</a> ・ <a href="#/ja/action/read-catcher-in-the-rye"><span class="wiki-icon">📗</span>ライ麦畑でつかまえて</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `read-recipe-book` |
| `category` | `study` |
| `attribute` | （空） |
| `group` | `reading` |
| `unlocked` | `hidden` |
| `level` | `1` |
| `experience` | `0` |
| `seconds` | `50400` |
| `chance` | `1` |
| `maximum` | `1` |
| `progressType` | `single` |
| CSV `tier` | 3 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "read-recipe-book",
		"name": "今夜のおかず🎶レシピ集",
		"explanation": "作らないまま何度も読む。腹だけが減っていく。",
		"icon": {
			"emoji": "📗",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "study",
	"attribute": "",
	"group": "reading",
	"unlocked": "hidden",
	"level": 1,
	"experience": 0,
	"seconds": 50400,
	"chance": 1,
	"maximum": 1,
	"requirements": [
		{
			"type": "item",
			"id": "recipe-book",
			"count": 1,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "category",
			"id": "kitchen",
			"count": 11,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "cooking-knowledge",
			"count": 1,
			"chance": 1
		}
	],
	"progressType": "single",
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"skills": []
}
```

</details>
