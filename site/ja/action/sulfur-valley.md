# 硫黄の谷

<div class="wiki-infobox" style="--accent:#6e4c5b"><div class="wiki-infobox-title">硫黄の谷</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🟡</span></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/gather"><img class="wiki-icon" src="assets/icon/1526f5fadd3c55ca.svg" alt="">収集</a></td></tr><tr><th>進行</th><td>連続</td></tr><tr><th>必要Lv</th><td>Lv1</td></tr><tr><th>所要時間</th><td>1分30秒</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>52</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 地の底から硫黄が噴き出す谷。息を止めても喉が焼ける。


**連続**: 時間で進み、止めるまで繰り返す。オフライン中も進む。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🟡</span>硫黄石](/ja/item/sulfur-stone) ×7 | 成功時 | 91% | 3.2 | 127 |
| [<span class="wiki-icon">🔥</span>焦げ土](/ja/item/scorched-soil) ×5 | 成功時 | 56% | 1.4 | 56 |
| [<span class="wiki-icon">⚫</span>煤](/ja/item/soot) ×5 | 成功時 | 56% | 1.4 | 56 |
| [<span class="wiki-icon">⚫</span>黒い砂](/ja/item/black-sand) ×5 | 成功時 | 56% | 1.4 | 56 |
| [<span class="wiki-icon">⛓️</span>鎖](/ja/item/chain) ×3 | 成功時 | 48% | 0.72 | 28.8 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv1） | 1分30秒 | 50% | 52 | 40 | 1,040 |
| +10（Lv11） | 1分13秒 | 60% | 34.67 | 49 | 1,019 |
| +20（Lv21） | 1分 | 69.2% | 23.11 | 60 | 960 |
| +30（Lv31） | 49秒 | 77.1% | 15.41 | 73.5 | 873 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 3,436 | 0 | 3,436 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6e4c5b"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><span class="wiki-icon">🟡</span>硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><span class="wiki-icon">💀</span>骸骨拾い</a> ・ <a href="#/ja/action/mummy"><span class="wiki-icon">🧟</span>ミイラ</a> ・ <a href="#/ja/action/medusa"><span class="wiki-icon">🐍</span>メデューサ</a> ・ <a href="#/ja/action/ifrit"><span class="wiki-icon">🔥</span>イフリート</a> ・ <a href="#/ja/action/vampire"><span class="wiki-icon">🧛</span>バンパイヤ</a> ・ <a href="#/ja/action/bakeneko"><span class="wiki-icon">🐱</span>化け猫</a> ・ <a href="#/ja/action/lord-freeze"><span class="wiki-icon">🥶</span>フリーズ様</a> ・ <a href="#/ja/action/bat"><span class="wiki-icon">🦇</span>コウモリ</a> ・ <a href="#/ja/action/mimic"><img class="wiki-icon" src="assets/icon/e18b4916860bbce0.svg" alt="">ミミック</a> ・ <a href="#/ja/action/behemoth"><span class="wiki-icon">🐘</span>ベヒモス</a> ・ <a href="#/ja/action/rotten-tyrant"><span class="wiki-icon">🧟</span>腐った暴君</a> ・ <a href="#/ja/action/demon"><span class="wiki-icon">😈</span>悪魔</a> ・ <a href="#/ja/action/dwarf"><span class="wiki-icon">🧔</span>ドワーフ</a> ・ <a href="#/ja/action/cerberus"><span class="wiki-icon">🐺</span>ケルベロス</a> ・ <a href="#/ja/action/basilisk"><span class="wiki-icon">🐍</span>バジリスク</a> ・ <a href="#/ja/action/enma-court"><span class="wiki-icon">⚖️</span>閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sulfur-valley` |
| `category` | `hell` |
| `attribute` | （空） |
| `group` | `gather` |
| `unlocked` | `hidden` |
| `level` | `1` |
| `experience` | `52` |
| `seconds` | `90` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `persistent` |
| CSV `tier` | 9 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sulfur-valley",
		"name": "硫黄の谷",
		"explanation": "地の底から硫黄が噴き出す谷。息を止めても喉が焼ける。",
		"icon": {
			"emoji": "🟡",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "hell",
	"attribute": "",
	"group": "gather",
	"unlocked": "hidden",
	"level": 1,
	"experience": 52,
	"seconds": 90,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "sulfur-stone",
			"count": 7,
			"chance": 0.91
		},
		{
			"type": "item",
			"id": "scorched-soil",
			"count": 5,
			"chance": 0.56
		},
		{
			"type": "item",
			"id": "soot",
			"count": 5,
			"chance": 0.56
		},
		{
			"type": "item",
			"id": "black-sand",
			"count": 5,
			"chance": 0.56
		},
		{
			"type": "item",
			"id": "chain",
			"count": 3,
			"chance": 0.48
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
