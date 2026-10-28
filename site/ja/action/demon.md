# 悪魔

<div class="wiki-infobox" style="--accent:#cf9a1f"><div class="wiki-infobox-title">悪魔</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">😈</span></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><span class="wiki-icon">🔥</span>地獄</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv46</td></tr><tr><th>所要時間</th><td>2.8秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.6</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 地獄からの訪問者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv46以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🧿</span>呪符](/ja/item/talisman) ×1（0.519%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">😈</span>悪魔の角](/ja/item/devil-horn) ×1 | 成功時 | 1.19% | 0.006 | 0 |
| [<span class="wiki-icon">🖤</span>堕天使の羽](/ja/item/fallen-angel-wing) ×1 | 成功時 | 1.19% | 0.006 | 0 |
| [<span class="wiki-icon">⚫</span>石炭](/ja/item/coal) ×1 | 成功時 | 0.498% | 0.002 | 0 |
| [<span class="wiki-icon">📕</span>呪詛の書](/ja/item/curse-book) ×1 | 成功時 | 0.597% | 0.003 | 0 |
| [<span class="wiki-icon">🍷</span>冥王の盃](/ja/item/hades-chalice) ×1 | 成功時 | 0.117% | 0.001 | 0 |
| [<span class="wiki-icon">😈</span>悪魔の実](/ja/item/devil-fruit) ×1 | 成功時 | 0.031% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 209 | 450 | 10 | 0 | 1 |

**敵のスキル**

- [<span class="wiki-icon">💚</span>治癒力](/ja/skill/healing-power)：毎ターン 7% で発動、回復+8
- [<span class="wiki-icon">🛡️</span>捨て身の守り](/ja/skill/desperate-defence)：毎ターン 4% で発動、攻撃-9・防御+14

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv46） | 0% | 207.6% | 75% | 21.4% | 21.3% | 559,777,449.3 | 91,358,021,951.5% | 18140日22時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv46） | 2.8秒 | 50% | 1.6 | 0 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#8e2c57"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><span class="wiki-icon">🟡</span>硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><span class="wiki-icon">💀</span>骸骨拾い</a> ・ <a href="#/ja/action/mummy"><span class="wiki-icon">🧟</span>ミイラ</a> ・ <a href="#/ja/action/medusa"><span class="wiki-icon">🐍</span>メデューサ</a> ・ <a href="#/ja/action/ifrit"><span class="wiki-icon">🔥</span>イフリート</a> ・ <a href="#/ja/action/vampire"><span class="wiki-icon">🧛</span>バンパイヤ</a> ・ <a href="#/ja/action/bakeneko"><span class="wiki-icon">🐱</span>化け猫</a> ・ <a href="#/ja/action/lord-freeze"><span class="wiki-icon">🥶</span>フリーズ様</a> ・ <a href="#/ja/action/bat"><span class="wiki-icon">🦇</span>コウモリ</a> ・ <a href="#/ja/action/mimic"><span class="wiki-icon">📦</span>ミミック</a> ・ <a href="#/ja/action/behemoth"><span class="wiki-icon">🐘</span>ベヒモス</a> ・ <a href="#/ja/action/rotten-tyrant"><span class="wiki-icon">🧟</span>腐った暴君</a> ・ <a href="#/ja/action/demon"><span class="wiki-icon">😈</span>悪魔</a> ・ <a href="#/ja/action/dwarf"><span class="wiki-icon">🧔</span>ドワーフ</a> ・ <a href="#/ja/action/cerberus"><span class="wiki-icon">🐺</span>ケルベロス</a> ・ <a href="#/ja/action/basilisk"><span class="wiki-icon">🐍</span>バジリスク</a> ・ <a href="#/ja/action/enma-court"><span class="wiki-icon">⚖️</span>閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `demon` |
| `category` | `hell` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `46` |
| `experience` | `1.6` |
| `seconds` | `2.8` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 9 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "demon",
		"name": "悪魔",
		"explanation": "地獄からの訪問者。",
		"icon": {
			"emoji": "😈",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "hell",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 46,
	"experience": 1.6,
	"seconds": 2.8,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "talisman",
			"count": 1,
			"chance": 0.00519,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "devil-horn",
			"count": 1,
			"chance": 0.0119
		},
		{
			"type": "item",
			"id": "fallen-angel-wing",
			"count": 1,
			"chance": 0.0119
		},
		{
			"type": "item",
			"id": "coal",
			"count": 1,
			"chance": 0.00498
		},
		{
			"type": "item",
			"id": "curse-book",
			"count": 1,
			"chance": 0.00597
		},
		{
			"type": "item",
			"id": "hades-chalice",
			"count": 1,
			"chance": 0.00117
		},
		{
			"type": "item",
			"id": "devil-fruit",
			"count": 1,
			"chance": 0.00031
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 209,
		"defence": 450,
		"accuracy": 10,
		"evasion": 0,
		"restore": 1
	},
	"skills": [
		"healing-power",
		"desperate-defence"
	]
}
```

</details>
