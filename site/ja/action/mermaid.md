# マーメイド

<div class="wiki-infobox" style="--accent:#6b7a4a"><div class="wiki-infobox-title">マーメイド</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧜</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sea"><span class="wiki-icon">🌊</span>海</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv22</td></tr><tr><th>所要時間</th><td>1.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.86</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 海の美女。その歌声は人を惑わす。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv22以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌊</span>ワカメ](/ja/item/wakame) ×1 | 成功時 | 1.44% | 0.007 | 1.3 |
| [<span class="wiki-icon">🪸</span>サンゴ](/ja/item/coral) ×1 | 成功時 | 0.72% | 0.004 | 0.648 |
| [<span class="wiki-icon">🤲</span>救いの手](/ja/item/helping-hand) ×1 | 成功時 | 0.117% | 0.001 | 0.105 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.086% | 0 | 0.078 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 48 | 9 | 0 | 12 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🌬️</span>息継ぎ](/ja/skill/breather)：毎ターン 8% で発動、回復+6
- [<span class="wiki-icon">🤹</span>曲芸](/ja/skill/stunt)：毎ターン 5% で発動、精度+5・回避+9・回復+3

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv22） | 13.9% | 7.94% | 64.8% | 25% | 22% | 12.3 | 73.5% | 20秒 | 連戦で少しずつ消耗する |
| +10（Lv32） | 20.8% | 6.48% | 73.4% | 29% | 29.7% | 6.8 | 31.3% | 9.6秒 | 連戦で少しずつ消耗する |
| +20（Lv42） | 31.2% | 5.29% | 80.6% | 33.3% | 38.8% | 5 | 17.5% | 6秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv22） | 1.5秒 | 50% | 0.86 | 179.9 | 77 |
| +10（Lv32） | 1.2秒 | 60% | 0.57 | 376.5 | 129 |
| +20（Lv42） | 1秒 | 69.2% | 0.38 | 603.6 | 159 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 49 | 0 | 49 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#1c62ab"><div class="wiki-navbox-title">海のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/flotsam-collecting"><span class="wiki-icon">🏖️</span>漂着物回収</a> ・ <a href="#/ja/action/tidal-flat-clamming"><span class="wiki-icon">🐚</span>磯の潮干狩り</a> ・ <a href="#/ja/action/beach-shell-gathering"><span class="wiki-icon">🐚</span>浜辺の貝拾い</a> ・ <a href="#/ja/action/pirate"><span class="wiki-icon">🏴‍☠️</span>海賊</a> ・ <a href="#/ja/action/pirate-captain"><span class="wiki-icon">🏴‍☠️</span>海賊の頭</a> ・ <a href="#/ja/action/cthulhu"><span class="wiki-icon">🐙</span>クトゥルフ</a> ・ <a href="#/ja/action/crocodile"><span class="wiki-icon">🐊</span>クロコダイル</a> ・ <a href="#/ja/action/serpent"><span class="wiki-icon">🐍</span>サーペント</a> ・ <a href="#/ja/action/turtle-demon-king"><span class="wiki-icon">🐢</span>カメの大魔王</a> ・ <a href="#/ja/action/kraken"><span class="wiki-icon">🦑</span>クラーケン</a> ・ <a href="#/ja/action/sea-turtle"><span class="wiki-icon">🐢</span>タートル</a> ・ <a href="#/ja/action/jones"><span class="wiki-icon">🎩</span>ジョーンズ</a> ・ <a href="#/ja/action/mermaid"><span class="wiki-icon">🧜</span>マーメイド</a> ・ <a href="#/ja/action/desert-island-drift"><span class="wiki-icon">🏝️</span>無人島漂流</a> ・ <a href="#/ja/action/shipwreck-survey"><span class="wiki-icon">🚢</span>沈没船探査</a> ・ <a href="#/ja/action/lighthouse-keeper-hut"><span class="wiki-icon">🗼</span>灯台守の小屋</a> ・ <a href="#/ja/action/undersea-cave"><span class="wiki-icon">🐚</span>海底洞窟</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `mermaid` |
| `category` | `sea` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `22` |
| `experience` | `0.857` |
| `seconds` | `1.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 4 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "mermaid",
		"name": "マーメイド",
		"explanation": "海の美女。その歌声は人を惑わす。",
		"icon": {
			"emoji": "🧜",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sea",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 22,
	"experience": 0.857,
	"seconds": 1.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "wakame",
			"count": 1,
			"chance": 0.0144
		},
		{
			"type": "item",
			"id": "coral",
			"count": 1,
			"chance": 0.0072
		},
		{
			"type": "item",
			"id": "helping-hand",
			"count": 1,
			"chance": 0.00117
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.000863
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 48,
		"defence": 9,
		"accuracy": 0,
		"evasion": 12,
		"restore": 0
	},
	"skills": [
		"breather",
		"stunt"
	]
}
```

</details>
