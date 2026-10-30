# 熾天使

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">熾天使</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">😇</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><span class="wiki-icon">☁️</span>天空のお庭</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv50</td></tr><tr><th>所要時間</th><td>2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.14</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 最高位の天使。その光は万物を焼く。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv50以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🗝️</span>天空の鍵](/ja/item/sky-key) ×1（0.333%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪨</span>浮遊石](/ja/item/floating-stone) ×1 | 成功時 | 0.768% | 0.004 | 0.002 |
| [<span class="wiki-icon">🦋</span>光る蝶](/ja/item/glowing-butterfly) ×1 | 成功時 | 0.768% | 0.004 | 0.002 |
| [<span class="wiki-icon">😇</span>天空神の羽衣](/ja/item/sky-god-robe) ×1 | 成功時 | 0.024% | 0 | 0 |
| [<span class="wiki-icon">📜</span>金色の石板](/ja/item/golden-tablet) ×1 | 成功時 | 0.333% | 0.002 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 396 | 153 | 5 | 16 | 6 |

**敵のスキル**

- [<span class="wiki-icon">💎</span>洗練](/ja/skill/refinement)：毎ターン 5% で発動、精度+8・回避+5・回復+3
- [<span class="wiki-icon">✨</span>祝福](/ja/skill/blessing)：毎ターン 8% で発動、回復+7
- [<span class="wiki-icon">😇</span>加護](/ja/skill/divine-protection)：毎ターン 11% で発動、回復+4
- [<span class="wiki-icon">⭐</span>星の導き](/ja/skill/star-guidance)：毎ターン 5% で発動、攻撃+6・精度+7・回復+4
- [<span class="wiki-icon">✨</span>天啓](/ja/skill/revelation)：毎ターン 7% で発動、精度+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv50） | 0.04% | 300% | 61.1% | 23.1% | 18.1% | 4,050.1 | 933,767.4% | 2時間15分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv50） | 2秒 | 50% | 1.14 | 0.4 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 0 | -0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9c95b5"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><span class="wiki-icon">✨</span>星屑集め</a> ・ <a href="#/ja/action/haze-grove"><span class="wiki-icon">🌫️</span>霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><span class="wiki-icon">☁️</span>雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><span class="wiki-icon">🙏</span>司祭</a> ・ <a href="#/ja/action/big-tanuki"><span class="wiki-icon">🦝</span>大きなタヌキ？</a> ・ <a href="#/ja/action/valkyrie"><span class="wiki-icon">👼</span>ヴァルキリー</a> ・ <a href="#/ja/action/spaghetti-monster"><span class="wiki-icon">🍝</span>スパゲッティモンスター</a> ・ <a href="#/ja/action/cat-limousine"><span class="wiki-icon">🚗</span>ねこリムジン</a> ・ <a href="#/ja/action/colonel"><span class="wiki-icon">🎖️</span>大佐</a> ・ <a href="#/ja/action/pegasus"><span class="wiki-icon">🦄</span>ペガサス</a> ・ <a href="#/ja/action/angel"><span class="wiki-icon">😇</span>天使</a> ・ <a href="#/ja/action/paladin"><span class="wiki-icon">🛡️</span>パラディン</a> ・ <a href="#/ja/action/seraph"><span class="wiki-icon">😇</span>熾天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><span class="wiki-icon">☁️</span>雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><span class="wiki-icon">📚</span>天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><span class="wiki-icon">🏛️</span>神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><span class="wiki-icon">🌳</span>世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `seraph` |
| `category` | `sky-garden` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `50` |
| `experience` | `1.14` |
| `seconds` | `2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 10 |
| CSV `memo` | ボス（避ける） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "seraph",
		"name": "熾天使",
		"explanation": "最高位の天使。その光は万物を焼く。",
		"icon": {
			"emoji": "😇",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sky-garden",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 50,
	"experience": 1.14,
	"seconds": 2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "sky-key",
			"count": 1,
			"chance": 0.00333,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "floating-stone",
			"count": 1,
			"chance": 0.00768
		},
		{
			"type": "item",
			"id": "glowing-butterfly",
			"count": 1,
			"chance": 0.00768
		},
		{
			"type": "item",
			"id": "sky-god-robe",
			"count": 1,
			"chance": 0.000239
		},
		{
			"type": "item",
			"id": "golden-tablet",
			"count": 1,
			"chance": 0.00333
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 396,
		"defence": 153,
		"accuracy": 5,
		"evasion": 16,
		"restore": 6
	},
	"skills": [
		"refinement",
		"blessing",
		"divine-protection",
		"star-guidance",
		"revelation"
	]
}
```

</details>
