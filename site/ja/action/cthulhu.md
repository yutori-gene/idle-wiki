# クトゥルフ

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">クトゥルフ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐙</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sea"><span class="wiki-icon">🌊</span>海</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv19</td></tr><tr><th>所要時間</th><td>3.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>2</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 深海より蘇りし旧神。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv19以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">📜</span>歴史書](/ja/item/history-book) ×1（消費しない）
- [<span class="wiki-icon">🧂</span>塩](/ja/item/salt) ×1（1.46%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🫧</span>海泡](/ja/item/sea-foam) ×1 | 成功時 | 8.17% | 0.041 | 0.096 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.126% | 0.001 | 0.001 |
| [<span class="wiki-icon">🕸️</span>クモの糸](/ja/item/spider-thread) ×1 | 成功時 | 0.03% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 47 | 103 | 7 | 0 | 3 |

**敵のスキル**

- [<span class="wiki-icon">🟣</span>禁忌の宝玉](/ja/skill/forbidden-orb)：毎ターン 3% で発動、攻撃+15・防御+12・精度-9・回避-10
- [<span class="wiki-icon">⭕</span>円環の理](/ja/skill/eternal-circle)：毎ターン 4% で発動、防御+8・回避+4・回復+7
- [<span class="wiki-icon">📜</span>血の契約](/ja/skill/blood-pact)：毎ターン 4% で発動、攻撃+14・精度+9・回復-10
- [<span class="wiki-icon">🔺</span>聖悪の相剋](/ja/skill/holy-evil-clash)：毎ターン 4% で発動、攻撃+13・防御-8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv19） | 0.307% | 7.78% | 75% | 22.4% | 20% | 434.7 | 2,622.8% | 25分25秒 | 負ける見込みが高い |
| +10（Lv29） | 0.461% | 6.35% | 81.8% | 26.2% | 27.3% | 266.4 | 1,249.7% | 12分44秒 | 負ける見込みが高い |
| +20（Lv39） | 0.691% | 5.19% | 87.1% | 30.3% | 36% | 166.5 | 602.2% | 6分31秒 | 負ける見込みが高い |
| +30（Lv49） | 1.04% | 4.23% | 91% | 34.7% | 45.7% | 106.6 | 294.7% | 3分25秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv19） | 3.5秒 | 50% | 2 | 2.4 | 2 |
| +10（Lv29） | 2.9秒 | 60% | 1.33 | 4.7 | 4 |
| +20（Lv39） | 2.3秒 | 69.2% | 0.89 | 9.2 | 6 |
| +30（Lv49） | 1.9秒 | 77.1% | 0.59 | 17.6 | 8 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 1 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#4a637d"><div class="wiki-navbox-title">海のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/flotsam-collecting"><span class="wiki-icon">🏖️</span>漂着物回収</a> ・ <a href="#/ja/action/tidal-flat-clamming"><span class="wiki-icon">🐚</span>磯の潮干狩り</a> ・ <a href="#/ja/action/beach-shell-gathering"><span class="wiki-icon">🐚</span>浜辺の貝拾い</a> ・ <a href="#/ja/action/pirate"><span class="wiki-icon">🏴‍☠️</span>海賊</a> ・ <a href="#/ja/action/pirate-captain"><span class="wiki-icon">🏴‍☠️</span>海賊の頭</a> ・ <a href="#/ja/action/cthulhu"><span class="wiki-icon">🐙</span>クトゥルフ</a> ・ <a href="#/ja/action/crocodile"><span class="wiki-icon">🐊</span>クロコダイル</a> ・ <a href="#/ja/action/serpent"><span class="wiki-icon">🐍</span>サーペント</a> ・ <a href="#/ja/action/turtle-demon-king"><span class="wiki-icon">🐢</span>カメの大魔王</a> ・ <a href="#/ja/action/kraken"><span class="wiki-icon">🦑</span>クラーケン</a> ・ <a href="#/ja/action/sea-turtle"><span class="wiki-icon">🐢</span>タートル</a> ・ <a href="#/ja/action/castaway"><span class="wiki-icon">🎩</span>漂流者</a> ・ <a href="#/ja/action/mermaid"><span class="wiki-icon">🧜</span>マーメイド</a> ・ <a href="#/ja/action/desert-island-drift"><span class="wiki-icon">🏝️</span>無人島漂流</a> ・ <a href="#/ja/action/shipwreck-survey"><span class="wiki-icon">🚢</span>沈没船探査</a> ・ <a href="#/ja/action/lighthouse-keeper-hut"><span class="wiki-icon">🗼</span>灯台守の小屋</a> ・ <a href="#/ja/action/undersea-cave"><span class="wiki-icon">🐚</span>海底洞窟</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cthulhu` |
| `category` | `sea` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `19` |
| `experience` | `2` |
| `seconds` | `3.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 4 |
| CSV `memo` | ボス（硬い） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cthulhu",
		"name": "クトゥルフ",
		"explanation": "深海より蘇りし旧神。",
		"icon": {
			"emoji": "🐙",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sea",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 19,
	"experience": 2,
	"seconds": 3.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "history-book",
			"count": 1,
			"chance": 0,
			"equipment": false
		},
		{
			"type": "item",
			"id": "salt",
			"count": 1,
			"chance": 0.0146,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "sea-foam",
			"count": 1,
			"chance": 0.0817
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.00126
		},
		{
			"type": "item",
			"id": "spider-thread",
			"count": 1,
			"chance": 0.000302
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 47,
		"defence": 103,
		"accuracy": 7,
		"evasion": 0,
		"restore": 3
	},
	"skills": [
		"forbidden-orb",
		"eternal-circle",
		"blood-pact",
		"holy-evil-clash"
	]
}
```

</details>
