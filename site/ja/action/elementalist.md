# エレメンタリスト

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">エレメンタリスト</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧙</span></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><span class="wiki-icon">🏰</span>城</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv39</td></tr><tr><th>所要時間</th><td>2.8秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.6</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 四大元素を駆使する者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv39以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🕯️</span>ロウソク](/ja/item/candle) ×1（0.583%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💎</span>王笏の宝玉](/ja/item/scepter-jewel) ×1 | 成功時 | 1.16% | 0.006 | 0 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.131% | 0.001 | 0 |
| [<span class="wiki-icon">🔺</span>令呪](/ja/item/command-spell) ×1 | 成功時 | 0.158% | 0.001 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 163 | 370 | 7 | 0 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🛡️</span>装甲](/ja/skill/armor-plating)：毎ターン 6% で発動、防御+8・回復+4
- [<span class="wiki-icon">💚</span>治癒力](/ja/skill/healing-power)：毎ターン 7% で発動、回復+8
- [<span class="wiki-icon">👕</span>軽装](/ja/skill/light-clothing)：毎ターン 11% で発動、回避+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv39） | 0% | 81.7% | 75% | 22.4% | 22% | 21,841,645.3 | 1,384,264,833.6% | 707日19時間 | 負ける見込みが高い |
| +10（Lv49） | 0% | 66.7% | 81.8% | 26.2% | 29.7% | 13,347,672.6 | 657,552,819.4% | 353日4時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv39） | 2.8秒 | 50% | 1.6 | 0 | 0 |
| +10（Lv49） | 2.3秒 | 60% | 1.07 | 0 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#776a48"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><span class="wiki-icon">🏰</span>城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><span class="wiki-icon">📚</span>書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><span class="wiki-icon">💰</span>宝物庫の整理</a> ・ <a href="#/ja/action/golem"><span class="wiki-icon">🗿</span>ゴーレム</a> ・ <a href="#/ja/action/elementalist"><span class="wiki-icon">🧙</span>エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><span class="wiki-icon">🪞</span>魔法の鏡</a> ・ <a href="#/ja/action/knight"><span class="wiki-icon">🛡️</span>騎士</a> ・ <a href="#/ja/action/ghost-knight"><span class="wiki-icon">👻</span>亡霊騎士</a> ・ <a href="#/ja/action/necromancer"><span class="wiki-icon">💀</span>ネクロマンサー</a> ・ <a href="#/ja/action/fairy"><span class="wiki-icon">🧚</span>妖精</a> ・ <a href="#/ja/action/jailer"><span class="wiki-icon">🔒</span>牢番</a> ・ <a href="#/ja/action/squirrel"><span class="wiki-icon">🐿️</span>リス</a> ・ <a href="#/ja/action/gargoyle"><span class="wiki-icon">🗿</span>ガーゴイル</a> ・ <a href="#/ja/action/banquet-ghost"><span class="wiki-icon">👻</span>宴の亡霊</a> ・ <a href="#/ja/action/deep-dungeon-cell"><span class="wiki-icon">⛓️</span>地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><span class="wiki-icon">🚪</span>隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><span class="wiki-icon">👑</span>王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `elementalist` |
| `category` | `castle` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `39` |
| `experience` | `1.6` |
| `seconds` | `2.8` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 8 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "elementalist",
		"name": "エレメンタリスト",
		"explanation": "四大元素を駆使する者。",
		"icon": {
			"emoji": "🧙",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "castle",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 39,
	"experience": 1.6,
	"seconds": 2.8,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "candle",
			"count": 1,
			"chance": 0.00583,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "scepter-jewel",
			"count": 1,
			"chance": 0.0116
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.00131
		},
		{
			"type": "item",
			"id": "command-spell",
			"count": 1,
			"chance": 0.00158
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 163,
		"defence": 370,
		"accuracy": 7,
		"evasion": 0,
		"restore": 0
	},
	"skills": [
		"armor-plating",
		"healing-power",
		"light-clothing"
	]
}
```

</details>
