# 世界樹の根元

<div class="wiki-infobox" style="--accent:#9c95b5"><div class="wiki-infobox-title">世界樹の根元</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌳</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explore"><img class="wiki-icon" src="assets/icon/3d0b09faf74aea45.svg" alt="">探索</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv40</td></tr><tr><th>所要時間</th><td>5時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>5,143</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 世界の始まりに触れる。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) Lv40以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍇</span>星の果実](/ja/item/star-fruit) ×3 | 成功時 | 63.6% | 1.9 | 0.382 |
| [<span class="wiki-icon">🔮</span>進化の石](/ja/item/evolution-stone) ×2 | 成功時 | 41.8% | 0.836 | 0.167 |
| [<span class="wiki-icon">🌳</span>世界樹の実](/ja/item/world-tree-fruit) ×1 | 成功時 | 4.98% | 0.05 | 0.01 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv40） | 5時間 | 100% | 5,143 | 0.2 | 1,029 |
| +10（Lv50） | 4時間4分 | 100% | 3,428.67 | 0.2 | 840 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 51 | 0 | 51 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9c95b5"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><span class="wiki-icon">✨</span>星屑集め</a> ・ <a href="#/ja/action/haze-grove"><span class="wiki-icon">🌫️</span>霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><span class="wiki-icon">☁️</span>雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><img class="wiki-icon" src="assets/icon/300032c34ac7363c.svg" alt="">司祭</a> ・ <a href="#/ja/action/big-tanuki"><span class="wiki-icon">🦝</span>大きなタヌキ？</a> ・ <a href="#/ja/action/valkyrie"><img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー</a> ・ <a href="#/ja/action/spaghetti-monster"><span class="wiki-icon">🍝</span>スパゲッティモンスター</a> ・ <a href="#/ja/action/cat-limousine"><span class="wiki-icon">🚗</span>ねこリムジン</a> ・ <a href="#/ja/action/colonel"><span class="wiki-icon">🎖️</span>大佐</a> ・ <a href="#/ja/action/pegasus"><span class="wiki-icon">🦄</span>ペガサス</a> ・ <a href="#/ja/action/angel"><span class="wiki-icon">😇</span>天使</a> ・ <a href="#/ja/action/paladin"><span class="wiki-icon">🛡️</span>パラディン</a> ・ <a href="#/ja/action/seraph"><span class="wiki-icon">😇</span>熾天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><span class="wiki-icon">☁️</span>雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><span class="wiki-icon">📚</span>天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><span class="wiki-icon">🏛️</span>神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><span class="wiki-icon">🌳</span>世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `world-tree-root` |
| `category` | `sky-garden` |
| `attribute` | （空） |
| `group` | `explore` |
| `unlocked` | `hidden` |
| `level` | `40` |
| `experience` | `5143` |
| `seconds` | `18000` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 10 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "world-tree-root",
		"name": "世界樹の根元",
		"explanation": "世界の始まりに触れる。",
		"icon": {
			"emoji": "🌳",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sky-garden",
	"attribute": "",
	"group": "explore",
	"unlocked": "hidden",
	"level": 40,
	"experience": 5143,
	"seconds": 18000,
	"chance": 1,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "star-fruit",
			"count": 3,
			"chance": 0.636
		},
		{
			"type": "item",
			"id": "evolution-stone",
			"count": 2,
			"chance": 0.418
		},
		{
			"type": "item",
			"id": "world-tree-fruit",
			"count": 1,
			"chance": 0.0498
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
