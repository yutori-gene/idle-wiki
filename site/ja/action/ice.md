# 氷

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">氷</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧊</span></div><table><tr><th>場所</th><td><a href="#/ja/category/northland"><span class="wiki-icon">❄️</span>北国</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv27</td></tr><tr><th>所要時間</th><td>3.3秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.89</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 凍てつく力そのもの。熱がすべてを解く。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv27以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧊</span>氷](/ja/item/ice) ×1 | 成功時 | 6.16% | 0.031 | 0.047 |
| [<span class="wiki-icon">❄️</span>霜](/ja/item/frost) ×1 | 成功時 | 2.11% | 0.011 | 0.016 |
| [<span class="wiki-icon">❄️</span>氷の結晶](/ja/item/ice-crystal) ×1 | 成功時 | 0.114% | 0.001 | 0.001 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.152% | 0.001 | 0.001 |
| [<span class="wiki-icon">💫</span>高速回転してる指輪](/ja/item/spinning-ring) ×1 | 成功時 | 0.399% | 0.002 | 0.003 |
| [<span class="wiki-icon">✨</span>閃光弾](/ja/item/flashbang) ×1 | 成功時 | 0.247% | 0.001 | 0.002 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 61 | 115 | 5 | 0 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🛡️</span>装甲](/ja/skill/armor-plating)：毎ターン 6% で発動、防御+8・回復+4
- [<span class="wiki-icon">🛡️</span>硬化](/ja/skill/hardening)：毎ターン 12% で発動、防御+3

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv27） | 0.189% | 10.3% | 75% | 23.1% | 22% | 706.7 | 5,611.4% | 38分55秒 | 負ける見込みが高い |
| +10（Lv37） | 0.283% | 8.44% | 81.8% | 26.9% | 29.7% | 432.7 | 2,666.5% | 19分28秒 | 負ける見込みが高い |
| +20（Lv47） | 0.425% | 6.89% | 87.1% | 31.1% | 38.8% | 271 | 1,285.6% | 9分58秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv27） | 3.3秒 | 50% | 1.89 | 1.5 | 1 |
| +10（Lv37） | 2.7秒 | 60% | 1.26 | 3.1 | 2 |
| +20（Lv47） | 2.2秒 | 69.2% | 0.84 | 6 | 3 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 1 | 0 | 1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b8a92"><div class="wiki-navbox-title">北国のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/snowfield-ruins"><span class="wiki-icon">🏛️</span>雪原の遺跡</a> ・ <a href="#/ja/action/frozen-lakeside"><span class="wiki-icon">🧊</span>凍った湖畔</a> ・ <a href="#/ja/action/griffin"><span class="wiki-icon">🦅</span>グリフィン</a> ・ <a href="#/ja/action/phoenix"><span class="wiki-icon">🐦‍🔥</span>フェニックス</a> ・ <a href="#/ja/action/frozen-warrior"><span class="wiki-icon">🧊</span>氷漬けの戦士</a> ・ <a href="#/ja/action/wyvern"><span class="wiki-icon">🐉</span>ワイバーン</a> ・ <a href="#/ja/action/mammoth"><span class="wiki-icon">🦣</span>マンモス</a> ・ <a href="#/ja/action/dragon-kid"><span class="wiki-icon">🐲</span>ドラゴンキッズ</a> ・ <a href="#/ja/action/tiger"><span class="wiki-icon">🐯</span>トラ</a> ・ <a href="#/ja/action/manticore"><span class="wiki-icon">🦁</span>マンティコア</a> ・ <a href="#/ja/action/drake"><span class="wiki-icon">🐉</span>ドレイク</a> ・ <a href="#/ja/action/ice"><span class="wiki-icon">🧊</span>氷</a> ・ <a href="#/ja/action/god-warrior"><span class="wiki-icon">🗿</span>巨神兵</a> ・ <a href="#/ja/action/wild-door"><span class="wiki-icon">🚪</span>ワイルドドア</a> ・ <a href="#/ja/action/bahamut"><span class="wiki-icon">🐉</span>バハムート</a> ・ <a href="#/ja/action/polar-bear"><span class="wiki-icon">🐻‍❄️</span>ホッキョクグマ</a> ・ <a href="#/ja/action/dragon-den"><span class="wiki-icon">🐉</span>竜の巣穴</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `ice` |
| `category` | `northland` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `27` |
| `experience` | `1.89` |
| `seconds` | `3.3` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 5 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "ice",
		"name": "氷",
		"explanation": "凍てつく力そのもの。熱がすべてを解く。",
		"icon": {
			"emoji": "🧊",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "northland",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 27,
	"experience": 1.89,
	"seconds": 3.3,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "ice",
			"count": 1,
			"chance": 0.0616
		},
		{
			"type": "item",
			"id": "frost",
			"count": 1,
			"chance": 0.0211
		},
		{
			"type": "item",
			"id": "ice-crystal",
			"count": 1,
			"chance": 0.00114
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.00152
		},
		{
			"type": "item",
			"id": "spinning-ring",
			"count": 1,
			"chance": 0.00399
		},
		{
			"type": "item",
			"id": "flashbang",
			"count": 1,
			"chance": 0.00247
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 61,
		"defence": 115,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"skills": [
		"armor-plating",
		"hardening"
	]
}
```

</details>
