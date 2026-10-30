# 苦い団子

<div class="wiki-infobox" style="--accent:#9b7d61"><div class="wiki-infobox-title">苦い団子</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍡</span></div><table><tr><th>場所</th><td><a href="#/ja/category/kitchen"><span class="wiki-icon">🍳</span>台所</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/cooking"><span class="wiki-icon">🍽️</span>料理</a></td></tr><tr><th>進行</th><td>連続</td></tr><tr><th>必要Lv</th><td>Lv46</td></tr><tr><th>所要時間</th><td>30分</td></tr><tr><th>成功率</th><td>95%</td></tr><tr><th>経験値</th><td>624</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ワライタケを練り込む。意外な隠し味、で済むかは食べた人次第。


**連続**: 時間で進み、止めるまで繰り返す。オフライン中も進む。

## 必要なもの

- [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) Lv46以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🥣</span>ボウル](/ja/item/bowl) ×1（消費しない）
- [<span class="wiki-icon">🍚</span>生米](/ja/item/raw-rice) ×12（消費する）
- [<span class="wiki-icon">🍄</span>ワライタケ](/ja/item/laughing-mushroom) ×6（消費する）
- [<span class="wiki-icon">🍯</span>蜂蜜](/ja/item/honey) ×12（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍡</span>苦い団子](/ja/item/bitter-dango) ×1,200 | 成功時 | 100% | 1,140 | 2,280 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 95%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv46） | 30分 | 95% | 624 | 2 | 1,186 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 615,600 | 984 | 614,616 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9b7d61"><div class="wiki-navbox-title">台所のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/buy-pot"><span class="wiki-icon">🍲</span>鍋を買う</a> ・ <a href="#/ja/action/buy-bowl"><span class="wiki-icon">🥣</span>ボウルを買う</a> ・ <a href="#/ja/action/buy-frying-pan"><span class="wiki-icon">🍳</span>フライパンを買う</a> ・ <a href="#/ja/action/buy-steamer"><span class="wiki-icon">🥟</span>蒸籠を買う</a> ・ <a href="#/ja/action/bake-bread"><span class="wiki-icon">🍞</span>パンを焼く</a> ・ <a href="#/ja/action/knead-bread-dough"><span class="wiki-icon">🍞</span>パン生地をこねる</a> ・ <a href="#/ja/action/cook-candy"><span class="wiki-icon">🍬</span>飴</a> ・ <a href="#/ja/action/cook-potion-bread"><span class="wiki-icon">🍞</span>ポーション入りパン</a> ・ <a href="#/ja/action/cook-yakitori"><span class="wiki-icon">🍗</span>焼き鳥</a> ・ <a href="#/ja/action/cook-escargot"><span class="wiki-icon">🐌</span>エスカルゴ</a> ・ <a href="#/ja/action/cook-meat-bun"><span class="wiki-icon">🥟</span>肉まん</a> ・ <a href="#/ja/action/cook-stir-fried-vegetables"><span class="wiki-icon">🥘</span>野菜炒め</a> ・ <a href="#/ja/action/cook-meat-bun-tomato-stew"><span class="wiki-icon">🥟</span>肉まんのトマト煮</a> ・ <a href="#/ja/action/cook-grilled-fish"><span class="wiki-icon">🐟</span>焼き魚</a> ・ <a href="#/ja/action/cook-burning-tofu"><span class="wiki-icon">🔥</span>燃える豆腐</a> ・ <a href="#/ja/action/cook-beef-jerky"><span class="wiki-icon">🥩</span>ビーフジャーキー</a> ・ <a href="#/ja/action/cook-bitter-dango"><span class="wiki-icon">🍡</span>苦い団子</a> ・ <a href="#/ja/action/cook-senzu-bean"><span class="wiki-icon">🫘</span>仙豆</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cook-bitter-dango` |
| `category` | `kitchen` |
| `attribute` | （空） |
| `group` | `cooking` |
| `unlocked` | `hidden` |
| `level` | `46` |
| `experience` | `624` |
| `seconds` | `1800` |
| `chance` | `0.95` |
| `maximum` | `0` |
| `progressType` | `persistent` |
| CSV `tier` | 10 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cook-bitter-dango",
		"name": "苦い団子",
		"explanation": "ワライタケを練り込む。意外な隠し味、で済むかは食べた人次第。",
		"icon": {
			"emoji": "🍡",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "kitchen",
	"attribute": "",
	"group": "cooking",
	"unlocked": "hidden",
	"level": 46,
	"experience": 624,
	"seconds": 1800,
	"chance": 0.95,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "bowl",
			"count": 1,
			"chance": 0,
			"equipment": false
		},
		{
			"type": "item",
			"id": "raw-rice",
			"count": 12,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "laughing-mushroom",
			"count": 6,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "honey",
			"count": 12,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "bitter-dango",
			"count": 1200,
			"chance": 1
		}
	],
	"progressType": "persistent",
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
