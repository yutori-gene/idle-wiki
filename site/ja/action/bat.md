# コウモリ

<div class="wiki-infobox" style="--accent:#6b7a4a"><div class="wiki-infobox-title">コウモリ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦇</span></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><span class="wiki-icon">🔥</span>地獄</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv45</td></tr><tr><th>所要時間</th><td>1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.57</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 暗闇の住人。その超音波は厄介な武器。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv45以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🔥</span>松明](/ja/item/torch) ×1（0.185%で消費）
- [<span class="wiki-icon">🔇</span>耳栓](/ja/item/earplug) ×1（0.185%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×1 | 成功時 | 0.427% | 0.002 | 0.013 |
| [<span class="wiki-icon">🩸</span>血液](/ja/item/blood) ×1 | 成功時 | 0.427% | 0.002 | 0.013 |
| [<span class="wiki-icon">🐟</span>イワシ](/ja/item/sardine) ×1 | 成功時 | 0.178% | 0.001 | 0.005 |
| [<span class="wiki-icon">🦴</span>小さな骨](/ja/item/small-bone) ×1 | 成功時 | 0.178% | 0.001 | 0.005 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 247 | 107 | 2 | 13 | 1 |

**敵のスキル**

- [<span class="wiki-icon">🚀</span>全弾発射](/ja/skill/full-volley)：毎ターン 4% で発動、攻撃+13・防御-10・精度+8
- [<span class="wiki-icon">💥</span>弾幕](/ja/skill/barrage)：毎ターン 5% で発動、攻撃+11・精度-8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv45） | 0.261% | 300% | 63.9% | 24.2% | 21.3% | 599.3 | 136,188.6% | 10分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv45） | 1秒 | 50% | 0.57 | 6 | 2 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 1 | -0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#8e2c57"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><span class="wiki-icon">🟡</span>硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><span class="wiki-icon">💀</span>骸骨拾い</a> ・ <a href="#/ja/action/mummy"><span class="wiki-icon">🧟</span>ミイラ</a> ・ <a href="#/ja/action/medusa"><span class="wiki-icon">🐍</span>メデューサ</a> ・ <a href="#/ja/action/ifrit"><span class="wiki-icon">🔥</span>イフリート</a> ・ <a href="#/ja/action/vampire"><span class="wiki-icon">🧛</span>バンパイヤ</a> ・ <a href="#/ja/action/bakeneko"><span class="wiki-icon">🐱</span>化け猫</a> ・ <a href="#/ja/action/lord-freeze"><span class="wiki-icon">🥶</span>フリーズ様</a> ・ <a href="#/ja/action/bat"><span class="wiki-icon">🦇</span>コウモリ</a> ・ <a href="#/ja/action/mimic"><span class="wiki-icon">📦</span>ミミック</a> ・ <a href="#/ja/action/behemoth"><span class="wiki-icon">🐘</span>ベヒモス</a> ・ <a href="#/ja/action/rotten-tyrant"><span class="wiki-icon">🧟</span>腐った暴君</a> ・ <a href="#/ja/action/demon"><span class="wiki-icon">😈</span>悪魔</a> ・ <a href="#/ja/action/dwarf"><span class="wiki-icon">🧔</span>ドワーフ</a> ・ <a href="#/ja/action/cerberus"><span class="wiki-icon">🐺</span>ケルベロス</a> ・ <a href="#/ja/action/basilisk"><span class="wiki-icon">🐍</span>バジリスク</a> ・ <a href="#/ja/action/enma-court"><span class="wiki-icon">⚖️</span>閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bat` |
| `category` | `hell` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `45` |
| `experience` | `0.571` |
| `seconds` | `1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 9 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bat",
		"name": "コウモリ",
		"explanation": "暗闇の住人。その超音波は厄介な武器。",
		"icon": {
			"emoji": "🦇",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "hell",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 45,
	"experience": 0.571,
	"seconds": 1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "torch",
			"count": 1,
			"chance": 0.00185,
			"equipment": false
		},
		{
			"type": "item",
			"id": "earplug",
			"count": 1,
			"chance": 0.00185,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.00427
		},
		{
			"type": "item",
			"id": "blood",
			"count": 1,
			"chance": 0.00427
		},
		{
			"type": "item",
			"id": "sardine",
			"count": 1,
			"chance": 0.00178
		},
		{
			"type": "item",
			"id": "small-bone",
			"count": 1,
			"chance": 0.00178
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 247,
		"defence": 107,
		"accuracy": 2,
		"evasion": 13,
		"restore": 1
	},
	"skills": [
		"full-volley",
		"barrage"
	]
}
```

</details>
