# シャーマン

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">シャーマン</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧙</span></div><table><tr><th>場所</th><td><a href="#/ja/category/town"><span class="wiki-icon">🏙️</span>街</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv15</td></tr><tr><th>所要時間</th><td>2.1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.2</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 精霊と交わる仲介者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) Lv15以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×3（1.17%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🦴</span>大きな骨](/ja/item/big-bone) ×1 | 成功時 | 2.69% | 0.013 | 1.8 |
| [<span class="wiki-icon">📄</span>チラシ](/ja/item/flyer) ×1 | 成功時 | 3.27% | 0.016 | 2.2 |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×1 | 成功時 | 2.69% | 0.013 | 1.8 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 38 | 13 | 5 | 0 | 10 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/58401ee48ed166a9.svg" alt="">先読み](/ja/skill/foresight)：毎ターン 5% で発動、精度+6・回避+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv15） | 11.8% | 6.48% | 75% | 23.1% | 15.8% | 12 | 59.8% | 27.3秒 | 連戦で少しずつ消耗する |
| +10（Lv25） | 17.7% | 5.29% | 81.8% | 26.9% | 22% | 7.3 | 28.4% | 14.3秒 | 連戦で少しずつ消耗する |
| +20（Lv35） | 26.6% | 4.32% | 87.1% | 31.1% | 29.7% | 4.6 | 13.7% | 7.8秒 | 放置で連戦できる |
| +30（Lv45） | 39.8% | 3.53% | 91% | 35.6% | 38.8% | 3.3 | 7.49% | 4.9秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv15） | 2.1秒 | 50% | 1.2 | 131.9 | 79 |
| +10（Lv25） | 1.7秒 | 60% | 0.8 | 251.9 | 121 |
| +20（Lv35） | 1.4秒 | 69.2% | 0.53 | 459.8 | 170 |
| +30（Lv45） | 1.1秒 | 77.1% | 0.36 | 733 | 201 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 22 | 28 | -5 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#856654"><div class="wiki-navbox-title">街のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/alley-search"><span class="wiki-icon">🔦</span>路地裏の探し物</a> ・ <a href="#/ja/action/midnight-street"><span class="wiki-icon">🌃</span>深夜の路上</a> ・ <a href="#/ja/action/rummage-trash-can"><span class="wiki-icon">🗑️</span>ゴミ箱あさり</a> ・ <a href="#/ja/action/cult-leader"><span class="wiki-icon">🙏</span>教祖</a> ・ <a href="#/ja/action/bandit"><span class="wiki-icon">🗡️</span>山賊</a> ・ <a href="#/ja/action/stray-dog-pack"><span class="wiki-icon">🐕</span>野良犬の群れ</a> ・ <a href="#/ja/action/shaman"><span class="wiki-icon">🧙</span>シャーマン</a> ・ <a href="#/ja/action/doppelganger"><span class="wiki-icon">👥</span>ドッペルゲンガー</a> ・ <a href="#/ja/action/gremlin"><span class="wiki-icon">👺</span>グレムリン</a> ・ <a href="#/ja/action/zombie"><span class="wiki-icon">🧟</span>ゾンビ</a> ・ <a href="#/ja/action/wizard"><span class="wiki-icon">🧙</span>魔法使い</a> ・ <a href="#/ja/action/thief"><span class="wiki-icon">🥷</span>盗賊</a> ・ <a href="#/ja/action/bounty-hunter"><span class="wiki-icon">🤠</span>賞金稼ぎ</a> ・ <a href="#/ja/action/sewer-rat"><span class="wiki-icon">🐀</span>ドブネズミ</a> ・ <a href="#/ja/action/condemned-building"><span class="wiki-icon">🏚️</span>取り壊し前の廃ビル</a> ・ <a href="#/ja/action/sewer-rumor"><span class="wiki-icon">🕳️</span>地下水路の噂</a> ・ <a href="#/ja/action/backstreet-informant"><span class="wiki-icon">🕵️</span>裏通りの情報屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `shaman` |
| `category` | `town` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `15` |
| `experience` | `1.2` |
| `seconds` | `2.1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 3 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "shaman",
		"name": "シャーマン",
		"explanation": "精霊と交わる仲介者。",
		"icon": {
			"emoji": "🧙",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "town",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 15,
	"experience": 1.2,
	"seconds": 2.1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "feather",
			"count": 3,
			"chance": 0.0117,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "big-bone",
			"count": 1,
			"chance": 0.0269
		},
		{
			"type": "item",
			"id": "flyer",
			"count": 1,
			"chance": 0.0327
		},
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.0269
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 38,
		"defence": 13,
		"accuracy": 5,
		"evasion": 0,
		"restore": 10
	},
	"skills": [
		"foresight"
	]
}
```

</details>
