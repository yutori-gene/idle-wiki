# 暴走ロボット

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">暴走ロボット</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🤖</span></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><span class="wiki-icon">🏭</span>工場</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv32</td></tr><tr><th>所要時間</th><td>1.9秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.09</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 制御を失った機械兵。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv32以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔪</span>カッター](/ja/item/cutter) ×1 | 成功時 | 5.28% | 0.026 | 0.098 |
| [<span class="wiki-icon">🔋</span>乾電池](/ja/item/dry-cell) ×1 | 成功時 | 2.96% | 0.015 | 0.055 |
| [<span class="wiki-icon">⚙️</span>モーター](/ja/item/motor) ×1 | 成功時 | 0.608% | 0.003 | 0.011 |
| [<span class="wiki-icon">⚙️</span>精密部品](/ja/item/precision-part) ×1 | 成功時 | 0.119% | 0.001 | 0.002 |
| [<span class="wiki-icon">🤖</span>ロボットの心臓](/ja/item/robot-heart) ×1 | 成功時 | 0.055% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 78 | 107 | 5 | 0 | 11 |

**敵のスキル**

- [<span class="wiki-icon">💥</span>捨て身](/ja/skill/reckless)：毎ターン 5% で発動、攻撃+12・防御-7

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv32） | 0.261% | 14.6% | 75% | 23.1% | 15.3% | 510.7 | 5,723.6% | 16分12秒 | 負ける見込みが高い |
| +10（Lv42） | 0.392% | 11.9% | 81.8% | 26.9% | 21.3% | 312.9 | 2,721.8% | 8分7秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv32） | 1.9秒 | 50% | 1.09 | 3.7 | 2 |
| +10（Lv42） | 1.6秒 | 60% | 0.73 | 7.4 | 3 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 2 | 0 | 2 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b757c"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><span class="wiki-icon">🏭</span>ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><span class="wiki-icon">🧰</span>工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><span class="wiki-icon">🔩</span>廃材拾い</a> ・ <a href="#/ja/action/bomb"><span class="wiki-icon">💣</span>ボム</a> ・ <a href="#/ja/action/mad-scientist"><span class="wiki-icon">🧪</span>マッドサイエンティスト</a> ・ <a href="#/ja/action/old-work-robot"><span class="wiki-icon">🤖</span>旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><span class="wiki-icon">🏗️</span>巨大クレーン</a> ・ <a href="#/ja/action/unmanned-forklift"><span class="wiki-icon">🚜</span>無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><span class="wiki-icon">🛸</span>警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><span class="wiki-icon">📹</span>監視カメラの群れ</a> ・ <a href="#/ja/action/mutant"><span class="wiki-icon">🧟</span>ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><span class="wiki-icon">🤖</span>暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><span class="wiki-icon">⚙️</span>プレス機</a> ・ <a href="#/ja/action/central-control-room"><span class="wiki-icon">🖥️</span>中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><span class="wiki-icon">🏢</span>封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><span class="wiki-icon">☣️</span>汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><span class="wiki-icon">☣️</span>地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rampaging-robot` |
| `category` | `factory` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `32` |
| `experience` | `1.09` |
| `seconds` | `1.9` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 6 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rampaging-robot",
		"name": "暴走ロボット",
		"explanation": "制御を失った機械兵。",
		"icon": {
			"emoji": "🤖",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "factory",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 32,
	"experience": 1.09,
	"seconds": 1.9,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "cutter",
			"count": 1,
			"chance": 0.0528
		},
		{
			"type": "item",
			"id": "dry-cell",
			"count": 1,
			"chance": 0.0296
		},
		{
			"type": "item",
			"id": "motor",
			"count": 1,
			"chance": 0.00608
		},
		{
			"type": "item",
			"id": "precision-part",
			"count": 1,
			"chance": 0.00119
		},
		{
			"type": "item",
			"id": "robot-heart",
			"count": 1,
			"chance": 0.000549
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 78,
		"defence": 107,
		"accuracy": 5,
		"evasion": 0,
		"restore": 11
	},
	"skills": [
		"reckless"
	]
}
```

</details>
