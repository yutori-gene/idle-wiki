# ワイバーン

<div class="wiki-infobox" style="--accent:#6b7a4a"><div class="wiki-infobox-title">ワイバーン</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐉</span></div><table><tr><th>場所</th><td><a href="#/ja/category/northland"><span class="wiki-icon">❄️</span>北国</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv24</td></tr><tr><th>所要時間</th><td>1.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.86</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 二足の竜。その尾の毒は致命的。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv24以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🍄</span>毒キノコ](/ja/item/poison-mushroom) ×3（0.5%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×1 | 成功時 | 5% | 0.025 | 0.725 |
| [<span class="wiki-icon">🦷</span>牙](/ja/item/fang) ×1 | 成功時 | 0.48% | 0.002 | 0.07 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.043% | 0 | 0.006 |
| [<span class="wiki-icon">🌙</span>月の紋章](/ja/item/moon-emblem) ×1 | 成功時 | 0.182% | 0.001 | 0.026 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 76 | 58 | 0 | 12 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🎯</span>狙い澄まし](/ja/skill/careful-aim)：毎ターン 9% で発動、精度+6
- [<span class="wiki-icon">💨</span>回避機動](/ja/skill/evasive-maneuver)：毎ターン 6% で発動、精度+4・回避+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv24） | 1.9% | 14% | 64.8% | 25% | 22% | 81.7 | 858.5% | 2分4秒 | 負ける見込みが高い |
| +10（Lv34） | 2.86% | 11.4% | 73.4% | 29% | 29.7% | 49 | 398% | 1分1秒 | 負ける見込みが高い |
| +20（Lv44） | 4.28% | 9.34% | 80.6% | 33.3% | 38.8% | 29.8 | 185.4% | 30.8秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv24） | 1.5秒 | 50% | 0.86 | 29 | 12 |
| +10（Lv34） | 1.2秒 | 60% | 0.57 | 58.8 | 20 |
| +20（Lv44） | 1秒 | 69.2% | 0.38 | 116.9 | 31 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 9 | 1 | 8 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#48a0b5"><div class="wiki-navbox-title">北国のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/snowfield-ruins"><span class="wiki-icon">🏛️</span>雪原の遺跡</a> ・ <a href="#/ja/action/frozen-lakeside"><span class="wiki-icon">🧊</span>凍った湖畔</a> ・ <a href="#/ja/action/griffin"><span class="wiki-icon">🦅</span>グリフィン</a> ・ <a href="#/ja/action/phoenix"><span class="wiki-icon">🐦‍🔥</span>フェニックス</a> ・ <a href="#/ja/action/frozen-warrior"><span class="wiki-icon">🧊</span>氷漬けの戦士</a> ・ <a href="#/ja/action/wyvern"><span class="wiki-icon">🐉</span>ワイバーン</a> ・ <a href="#/ja/action/mammoth"><span class="wiki-icon">🦣</span>マンモス</a> ・ <a href="#/ja/action/dragon-kid"><span class="wiki-icon">🐲</span>ドラゴンキッズ</a> ・ <a href="#/ja/action/tiger"><span class="wiki-icon">🐯</span>トラ</a> ・ <a href="#/ja/action/manticore"><span class="wiki-icon">🦁</span>マンティコア</a> ・ <a href="#/ja/action/drake"><span class="wiki-icon">🐉</span>ドレイク</a> ・ <a href="#/ja/action/ice"><span class="wiki-icon">🧊</span>氷</a> ・ <a href="#/ja/action/god-warrior"><span class="wiki-icon">🗿</span>巨神兵</a> ・ <a href="#/ja/action/wild-door"><span class="wiki-icon">🚪</span>ワイルドドア</a> ・ <a href="#/ja/action/bahamut"><span class="wiki-icon">🐉</span>バハムート</a> ・ <a href="#/ja/action/polar-bear"><span class="wiki-icon">🐻‍❄️</span>ホッキョクグマ</a> ・ <a href="#/ja/action/dragon-den"><span class="wiki-icon">🐉</span>竜の巣穴</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wyvern` |
| `category` | `northland` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `24` |
| `experience` | `0.857` |
| `seconds` | `1.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 5 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wyvern",
		"name": "ワイバーン",
		"explanation": "二足の竜。その尾の毒は致命的。",
		"icon": {
			"emoji": "🐉",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "northland",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 24,
	"experience": 0.857,
	"seconds": 1.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "poison-mushroom",
			"count": 3,
			"chance": 0.005,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.05
		},
		{
			"type": "item",
			"id": "fang",
			"count": 1,
			"chance": 0.0048
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.000432
		},
		{
			"type": "item",
			"id": "moon-emblem",
			"count": 1,
			"chance": 0.00182
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 76,
		"defence": 58,
		"accuracy": 0,
		"evasion": 12,
		"restore": 0
	},
	"skills": [
		"careful-aim",
		"evasive-maneuver"
	]
}
```

</details>
