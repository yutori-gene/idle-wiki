# 地下水路の噂

<div class="wiki-infobox" style="--accent:#856654"><div class="wiki-infobox-title">地下水路の噂</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🕳️</span></div><table><tr><th>場所</th><td><a href="#/ja/category/town"><span class="wiki-icon">🏙️</span>街</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explore"><img class="wiki-icon" src="assets/icon/3d0b09faf74aea45.svg" alt="">探索</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv12</td></tr><tr><th>所要時間</th><td>1時間30分</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>1,543</td></tr><tr><th>最大回数</th><td>1回</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 街の地下に何かが潜んでいるらしい。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv12以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🗝️</span>下水道の鍵](/ja/item/sewer-key) ×2 | 成功時 | 100% | 2 | 1.3 |
| [<span class="wiki-icon">🎒</span>リュックサック](/ja/item/backpack) ×1 | 成功時 | 100% | 1 | 0.667 |
| [<span class="wiki-icon">🕳️</span>マンホール](/ja/item/manhole) ×1 | 成功時 | 100% | 1 | 0.667 |
| [<span class="wiki-icon">🪧</span>割れた看板](/ja/item/broken-signboard) ×6 | 成功時 | 100% | 6 | 4 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv12） | 1時間30分 | 100% | 1,543 | 0.7 | 1,029 |
| +10（Lv22） | 1時間13分 | 100% | 1,028.67 | 0.8 | 840 |
| +20（Lv32） | 1時間 | 100% | 685.78 | 1 | 686 |
| +30（Lv42） | 48分59秒 | 100% | 457.19 | 1.2 | 560 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 270 | 0 | 270 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#856654"><div class="wiki-navbox-title">街のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/alley-search"><span class="wiki-icon">🔦</span>路地裏の探し物</a> ・ <a href="#/ja/action/midnight-street"><span class="wiki-icon">🌃</span>深夜の路上</a> ・ <a href="#/ja/action/rummage-trash-can"><span class="wiki-icon">🗑️</span>ゴミ箱あさり</a> ・ <a href="#/ja/action/cult-leader"><span class="wiki-icon">🙏</span>教祖</a> ・ <a href="#/ja/action/bandit"><span class="wiki-icon">🗡️</span>山賊</a> ・ <a href="#/ja/action/stray-dog-pack"><span class="wiki-icon">🐕</span>野良犬の群れ</a> ・ <a href="#/ja/action/shaman"><span class="wiki-icon">🧙</span>シャーマン</a> ・ <a href="#/ja/action/doppelganger"><span class="wiki-icon">👥</span>ドッペルゲンガー</a> ・ <a href="#/ja/action/gremlin"><span class="wiki-icon">👺</span>グレムリン</a> ・ <a href="#/ja/action/zombie"><span class="wiki-icon">🧟</span>ゾンビ</a> ・ <a href="#/ja/action/wizard"><span class="wiki-icon">🧙</span>魔法使い</a> ・ <a href="#/ja/action/thief"><span class="wiki-icon">🥷</span>盗賊</a> ・ <a href="#/ja/action/bounty-hunter"><span class="wiki-icon">🤠</span>賞金稼ぎ</a> ・ <a href="#/ja/action/sewer-rat"><span class="wiki-icon">🐀</span>ドブネズミ</a> ・ <a href="#/ja/action/condemned-building"><span class="wiki-icon">🏚️</span>取り壊し前の廃ビル</a> ・ <a href="#/ja/action/sewer-rumor"><span class="wiki-icon">🕳️</span>地下水路の噂</a> ・ <a href="#/ja/action/backstreet-informant"><span class="wiki-icon">🕵️</span>裏通りの情報屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sewer-rumor` |
| `category` | `town` |
| `attribute` | （空） |
| `group` | `explore` |
| `unlocked` | `hidden` |
| `level` | `12` |
| `experience` | `1543` |
| `seconds` | `5400` |
| `chance` | `1` |
| `maximum` | `1` |
| `progressType` | `single` |
| CSV `tier` | 3 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sewer-rumor",
		"name": "地下水路の噂",
		"explanation": "街の地下に何かが潜んでいるらしい。",
		"icon": {
			"emoji": "🕳️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "town",
	"attribute": "",
	"group": "explore",
	"unlocked": "hidden",
	"level": 12,
	"experience": 1543,
	"seconds": 5400,
	"chance": 1,
	"maximum": 1,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "sewer-key",
			"count": 2,
			"chance": 1
		},
		{
			"type": "item",
			"id": "backpack",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "manhole",
			"count": 1,
			"chance": 1
		},
		{
			"type": "item",
			"id": "broken-signboard",
			"count": 6,
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
