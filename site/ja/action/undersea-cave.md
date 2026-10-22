# 海底洞窟

<div class="wiki-infobox" style="--accent:#1c62ab"><div class="wiki-infobox-title">海底洞窟</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐚</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sea"><span class="wiki-icon">🌊</span>海</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explore"><span class="wiki-icon">🔦</span>探索</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv40</td></tr><tr><th>所要時間</th><td>2時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>2,058</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 潮が引いた時だけ入れる洞窟。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">🌊</span>海](/ja/category/sea) Lv40以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧜</span>人魚の鱗](/ja/item/mermaid-scale) ×2 | 成功時 | 5.18% | 0.104 | 0.052 |
| [<span class="wiki-icon">🪙</span>呪いのコイン](/ja/item/cursed-coin) ×1 | 成功時 | 10.4% | 0.104 | 0.052 |
| [<span class="wiki-icon">🏮</span>ランタン](/ja/item/lantern) ×1 | 成功時 | 25.9% | 0.259 | 0.13 |
| [<span class="wiki-icon">🌼</span>ファイアフラワー](/ja/item/fire-flower) ×1 | 成功時 | 10.4% | 0.104 | 0.052 |
| [<span class="wiki-icon">🔮</span>水晶のペンダント](/ja/item/crystal-pendant) ×1 | 成功時 | 10.4% | 0.104 | 0.052 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv40） | 2時間 | 100% | 2,058 | 0.5 | 1,029 |
| +10（Lv50） | 1時間37分 | 100% | 1,372 | 0.6 | 840 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 27 | 0 | 27 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#1c62ab"><div class="wiki-navbox-title">海のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/flotsam-collecting"><span class="wiki-icon">🏖️</span>漂着物回収</a> ・ <a href="#/ja/action/tidal-flat-clamming"><span class="wiki-icon">🐚</span>磯の潮干狩り</a> ・ <a href="#/ja/action/beach-shell-gathering"><span class="wiki-icon">🐚</span>浜辺の貝拾い</a> ・ <a href="#/ja/action/pirate"><span class="wiki-icon">🏴‍☠️</span>海賊</a> ・ <a href="#/ja/action/pirate-captain"><span class="wiki-icon">🏴‍☠️</span>海賊の頭</a> ・ <a href="#/ja/action/cthulhu"><span class="wiki-icon">🐙</span>クトゥルフ</a> ・ <a href="#/ja/action/crocodile"><span class="wiki-icon">🐊</span>クロコダイル</a> ・ <a href="#/ja/action/serpent"><span class="wiki-icon">🐍</span>サーペント</a> ・ <a href="#/ja/action/turtle-demon-king"><span class="wiki-icon">🐢</span>カメの大魔王</a> ・ <a href="#/ja/action/kraken"><span class="wiki-icon">🦑</span>クラーケン</a> ・ <a href="#/ja/action/sea-turtle"><span class="wiki-icon">🐢</span>タートル</a> ・ <a href="#/ja/action/jones"><span class="wiki-icon">🎩</span>ジョーンズ</a> ・ <a href="#/ja/action/mermaid"><span class="wiki-icon">🧜</span>マーメイド</a> ・ <a href="#/ja/action/desert-island-drift"><span class="wiki-icon">🏝️</span>無人島漂流</a> ・ <a href="#/ja/action/shipwreck-survey"><span class="wiki-icon">🚢</span>沈没船探査</a> ・ <a href="#/ja/action/lighthouse-keeper-hut"><span class="wiki-icon">🗼</span>灯台守の小屋</a> ・ <a href="#/ja/action/undersea-cave"><span class="wiki-icon">🐚</span>海底洞窟</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `undersea-cave` |
| `category` | `sea` |
| `attribute` | （空） |
| `group` | `explore` |
| `unlocked` | `hidden` |
| `level` | `40` |
| `experience` | `2058` |
| `seconds` | `7200` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 4 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "undersea-cave",
		"name": "海底洞窟",
		"explanation": "潮が引いた時だけ入れる洞窟。",
		"icon": {
			"emoji": "🐚",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sea",
	"attribute": "",
	"group": "explore",
	"unlocked": "hidden",
	"level": 40,
	"experience": 2058,
	"seconds": 7200,
	"chance": 1,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "mermaid-scale",
			"count": 2,
			"chance": 0.0518
		},
		{
			"type": "item",
			"id": "cursed-coin",
			"count": 1,
			"chance": 0.104
		},
		{
			"type": "item",
			"id": "lantern",
			"count": 1,
			"chance": 0.259
		},
		{
			"type": "item",
			"id": "fire-flower",
			"count": 1,
			"chance": 0.104
		},
		{
			"type": "item",
			"id": "crystal-pendant",
			"count": 1,
			"chance": 0.104
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
