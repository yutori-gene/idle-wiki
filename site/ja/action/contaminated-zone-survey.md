# 汚染区画の調査

<div class="wiki-infobox" style="--accent:#6b757c"><div class="wiki-infobox-title">汚染区画の調査</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">☣️</span></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><span class="wiki-icon">🏭</span>工場</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explore"><span class="wiki-icon">🔦</span>探索</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv30</td></tr><tr><th>所要時間</th><td>3時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>3,086</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 防護服なしでは入れない区画。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) Lv30以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💾</span>壊れた基板](/ja/item/broken-circuit-board) ×3 | 成功時 | 63.6% | 1.9 | 0.636 |
| [<span class="wiki-icon">⛽</span>ガソリン](/ja/item/gasoline) ×3 | 成功時 | 63.6% | 1.9 | 0.636 |
| [<span class="wiki-icon">🎁</span>中くらいの宝箱](/ja/item/medium-chest) ×1 | 成功時 | 41.8% | 0.418 | 0.139 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv30） | 3時間 | 100% | 3,086 | 0.3 | 1,029 |
| +10（Lv40） | 2時間26分 | 100% | 2,057.33 | 0.4 | 840 |
| +20（Lv50） | 2時間 | 100% | 1,371.56 | 0.5 | 686 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 23 | 0 | 23 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b757c"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><span class="wiki-icon">🏭</span>ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><span class="wiki-icon">🧰</span>工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><span class="wiki-icon">🔩</span>廃材拾い</a> ・ <a href="#/ja/action/bomb"><span class="wiki-icon">💣</span>ボム</a> ・ <a href="#/ja/action/mad-scientist"><span class="wiki-icon">🧪</span>マッドサイエンティスト</a> ・ <a href="#/ja/action/old-work-robot"><span class="wiki-icon">🤖</span>旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><span class="wiki-icon">🏗️</span>巨大クレーン</a> ・ <a href="#/ja/action/unmanned-forklift"><span class="wiki-icon">🚜</span>無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><span class="wiki-icon">🛸</span>警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><span class="wiki-icon">📹</span>監視カメラの群れ</a> ・ <a href="#/ja/action/mutant"><span class="wiki-icon">🧟</span>ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><span class="wiki-icon">🤖</span>暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><span class="wiki-icon">⚙️</span>プレス機</a> ・ <a href="#/ja/action/central-control-room"><span class="wiki-icon">🖥️</span>中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><span class="wiki-icon">🏢</span>封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><span class="wiki-icon">☣️</span>汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><span class="wiki-icon">☣️</span>地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `contaminated-zone-survey` |
| `category` | `factory` |
| `attribute` | （空） |
| `group` | `explore` |
| `unlocked` | `hidden` |
| `level` | `30` |
| `experience` | `3086` |
| `seconds` | `10800` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 6 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "contaminated-zone-survey",
		"name": "汚染区画の調査",
		"explanation": "防護服なしでは入れない区画。",
		"icon": {
			"emoji": "☣️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "factory",
	"attribute": "",
	"group": "explore",
	"unlocked": "hidden",
	"level": 30,
	"experience": 3086,
	"seconds": 10800,
	"chance": 1,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "broken-circuit-board",
			"count": 3,
			"chance": 0.636
		},
		{
			"type": "item",
			"id": "gasoline",
			"count": 3,
			"chance": 0.636
		},
		{
			"type": "item",
			"id": "medium-chest",
			"count": 1,
			"chance": 0.418
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
