# 漂流者

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">漂流者</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🎩</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sea"><span class="wiki-icon">🌊</span>海</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv21</td></tr><tr><th>所要時間</th><td>2.3秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.31</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 沈んだ船と一緒に上がってくる。足だけが先に流れ着く。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) Lv21以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🏄</span>サーフボード](/ja/item/surfboard) ×1（消費しない）
- [<span class="wiki-icon">🥩</span>生肉](/ja/item/raw-meat) ×1（0.958%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🦶</span>誰かの足](/ja/item/someones-leg) ×1 | 成功時 | 5.37% | 0.027 | 0.72 |
| [<span class="wiki-icon">🐟</span>イワシ](/ja/item/sardine) ×1 | 成功時 | 0.92% | 0.005 | 0.123 |
| [<span class="wiki-icon">🦷</span>サメの歯](/ja/item/shark-tooth) ×1 | 成功時 | 0.216% | 0.001 | 0.029 |
| [<span class="wiki-icon">👓</span>メガネ](/ja/item/glasses) ×1 | 成功時 | 0.179% | 0.001 | 0.024 |
| [<span class="wiki-icon">🎩</span>ジョーンズ](/ja/item/jones) ×1 | 成功時 | 0.006% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 48 | 53 | 4 | 0 | 10 |

**敵のスキル**

- [<span class="wiki-icon">🩸</span>血の滾り](/ja/skill/blood-boil)：毎ターン 3% で発動、攻撃+15・防御-10・回復+10
- [<span class="wiki-icon">🩸</span>鬼血](/ja/skill/demon-blood)：毎ターン 3% で発動、攻撃+15・回避-10・回復+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv21） | 2.33% | 7.94% | 75% | 23.5% | 15.8% | 57.3 | 348.1% | 2分14秒 | 負ける見込みが高い |
| +10（Lv31） | 3.5% | 6.48% | 81.8% | 27.3% | 22% | 35.4 | 166.9% | 1分8秒 | 負ける見込みが高い |
| +20（Lv41） | 5.25% | 5.29% | 87.1% | 31.6% | 29.7% | 23 | 83.2% | 36.7秒 | 連戦で少しずつ消耗する |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv21） | 2.3秒 | 50% | 1.31 | 26.8 | 18 |
| +10（Lv31） | 1.9秒 | 60% | 0.87 | 52.6 | 28 |
| +20（Lv41） | 1.5秒 | 69.2% | 0.58 | 98 | 39 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 8 | 2 | 7 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#4a637d"><div class="wiki-navbox-title">海のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/flotsam-collecting"><span class="wiki-icon">🏖️</span>漂着物回収</a> ・ <a href="#/ja/action/tidal-flat-clamming"><span class="wiki-icon">🐚</span>磯の潮干狩り</a> ・ <a href="#/ja/action/beach-shell-gathering"><span class="wiki-icon">🐚</span>浜辺の貝拾い</a> ・ <a href="#/ja/action/pirate"><img class="wiki-icon" src="assets/icon/5d2bd39c66257c15.svg" alt="">海賊</a> ・ <a href="#/ja/action/pirate-captain"><span class="wiki-icon">🏴‍☠️</span>海賊の頭</a> ・ <a href="#/ja/action/cthulhu"><span class="wiki-icon">🐙</span>クトゥルフ</a> ・ <a href="#/ja/action/crocodile"><span class="wiki-icon">🐊</span>クロコダイル</a> ・ <a href="#/ja/action/serpent"><span class="wiki-icon">🐍</span>サーペント</a> ・ <a href="#/ja/action/turtle-demon-king"><span class="wiki-icon">🐢</span>カメの大魔王</a> ・ <a href="#/ja/action/kraken"><span class="wiki-icon">🦑</span>クラーケン</a> ・ <a href="#/ja/action/sea-turtle"><span class="wiki-icon">🐢</span>タートル</a> ・ <a href="#/ja/action/castaway"><span class="wiki-icon">🎩</span>漂流者</a> ・ <a href="#/ja/action/mermaid"><span class="wiki-icon">🧜</span>マーメイド</a> ・ <a href="#/ja/action/desert-island-drift"><span class="wiki-icon">🏝️</span>無人島漂流</a> ・ <a href="#/ja/action/shipwreck-survey"><img class="wiki-icon" src="assets/icon/eb3d79c11d7eaf0a.svg" alt="">沈没船探査</a> ・ <a href="#/ja/action/lighthouse-keeper-hut"><span class="wiki-icon">🗼</span>灯台守の小屋</a> ・ <a href="#/ja/action/undersea-cave"><span class="wiki-icon">🐚</span>海底洞窟</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `castaway` |
| `category` | `sea` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `21` |
| `experience` | `1.31` |
| `seconds` | `2.3` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 4 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "castaway",
		"name": "漂流者",
		"explanation": "沈んだ船と一緒に上がってくる。足だけが先に流れ着く。",
		"icon": {
			"emoji": "🎩",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sea",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 21,
	"experience": 1.31,
	"seconds": 2.3,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "surfboard",
			"count": 1,
			"chance": 0,
			"equipment": false
		},
		{
			"type": "item",
			"id": "raw-meat",
			"count": 1,
			"chance": 0.00958,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "someones-leg",
			"count": 1,
			"chance": 0.0537
		},
		{
			"type": "item",
			"id": "sardine",
			"count": 1,
			"chance": 0.0092
		},
		{
			"type": "item",
			"id": "shark-tooth",
			"count": 1,
			"chance": 0.00216
		},
		{
			"type": "item",
			"id": "glasses",
			"count": 1,
			"chance": 0.00179
		},
		{
			"type": "item",
			"id": "jones",
			"count": 1,
			"chance": 0.0000572
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 48,
		"defence": 53,
		"accuracy": 4,
		"evasion": 0,
		"restore": 10
	},
	"skills": [
		"blood-boil",
		"demon-blood"
	]
}
```

</details>
