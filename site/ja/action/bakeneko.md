# 化け猫

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">化け猫</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐱</span></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv45</td></tr><tr><th>所要時間</th><td>1.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.69</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ダンボールに「拾ってください」と書かれている。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv45以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥄</span>曲がったスプーン](/ja/item/bent-spoon) ×1 | 成功時 | 1.24% | 0.006 | 0.031 |
| [<span class="wiki-icon">🖤</span>怨念の結晶](/ja/item/grudge-crystal) ×1 | 成功時 | 0.512% | 0.003 | 0.013 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 247 | 107 | 2 | 13 | 1 |

**敵のスキル**

- [<span class="wiki-icon">🤸</span>軽業](/ja/skill/acrobatics)：毎ターン 8% で発動、回避+7
- [<span class="wiki-icon">👁️</span>見切り](/ja/skill/perception)：毎ターン 12% で発動、回避+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv45） | 0.261% | 300% | 63.9% | 24.2% | 21.3% | 599.3 | 136,188.6% | 12分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv45） | 1.2秒 | 50% | 0.69 | 5 | 2 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 1 | 0 | 1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6e4c5b"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><span class="wiki-icon">🟡</span>硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><span class="wiki-icon">💀</span>骸骨拾い</a> ・ <a href="#/ja/action/mummy"><span class="wiki-icon">🧟</span>ミイラ</a> ・ <a href="#/ja/action/medusa"><span class="wiki-icon">🐍</span>メデューサ</a> ・ <a href="#/ja/action/ifrit"><span class="wiki-icon">🔥</span>イフリート</a> ・ <a href="#/ja/action/vampire"><span class="wiki-icon">🧛</span>バンパイヤ</a> ・ <a href="#/ja/action/bakeneko"><span class="wiki-icon">🐱</span>化け猫</a> ・ <a href="#/ja/action/lord-freeze"><span class="wiki-icon">🥶</span>フリーズ様</a> ・ <a href="#/ja/action/bat"><span class="wiki-icon">🦇</span>コウモリ</a> ・ <a href="#/ja/action/mimic"><img class="wiki-icon" src="assets/icon/e18b4916860bbce0.svg" alt="">ミミック</a> ・ <a href="#/ja/action/behemoth"><span class="wiki-icon">🐘</span>ベヒモス</a> ・ <a href="#/ja/action/rotten-tyrant"><span class="wiki-icon">🧟</span>腐った暴君</a> ・ <a href="#/ja/action/demon"><span class="wiki-icon">😈</span>悪魔</a> ・ <a href="#/ja/action/dwarf"><span class="wiki-icon">🧔</span>ドワーフ</a> ・ <a href="#/ja/action/cerberus"><span class="wiki-icon">🐺</span>ケルベロス</a> ・ <a href="#/ja/action/basilisk"><span class="wiki-icon">🐍</span>バジリスク</a> ・ <a href="#/ja/action/enma-court"><span class="wiki-icon">⚖️</span>閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bakeneko` |
| `category` | `hell` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `45` |
| `experience` | `0.686` |
| `seconds` | `1.2` |
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
		"id": "bakeneko",
		"name": "化け猫",
		"explanation": "ダンボールに「拾ってください」と書かれている。",
		"icon": {
			"emoji": "🐱",
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
	"experience": 0.686,
	"seconds": 1.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "bent-spoon",
			"count": 1,
			"chance": 0.0124
		},
		{
			"type": "item",
			"id": "grudge-crystal",
			"count": 1,
			"chance": 0.00512
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
		"acrobatics",
		"perception"
	]
}
```

</details>
