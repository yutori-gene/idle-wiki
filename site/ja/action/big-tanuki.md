# 大きなタヌキ？

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">大きなタヌキ？</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦝</span></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><span class="wiki-icon">☁️</span>天空のお庭</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv49</td></tr><tr><th>所要時間</th><td>2.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.26</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ミミズクとタヌキのキメラだろうか？


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv49以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🌰</span>ドングリ](/ja/item/acorn) ×1（0.367%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌰</span>ドングリ](/ja/item/acorn) ×1 | 成功時 | 2.05% | 0.01 | 0 |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×1 | 成功時 | 0.845% | 0.004 | 0 |
| [<span class="wiki-icon">✨</span>光苔](/ja/item/glow-moss) ×1 | 成功時 | 0.352% | 0.002 | 0 |
| [<span class="wiki-icon">🦊</span>九尾の狐](/ja/item/nine-tailed-fox) ×1 | 成功時 | 0.003% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 431 | 380 | 10 | 0 | 13 |

**敵のスキル**

- [<span class="wiki-icon">🔮</span>念動](/ja/skill/telekinesis)：毎ターン 8% で発動、回避+7
- [<span class="wiki-icon">⚔️</span>二の太刀](/ja/skill/second-strike)：毎ターン 12% で発動、攻撃+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv49） | 0% | 300% | 75% | 21.4% | 14.3% | 32,762,466.7 | 7,725,991,462.3% | 834日5時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv49） | 2.2秒 | 50% | 1.26 | 0 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#8a76d4"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><span class="wiki-icon">✨</span>星屑集め</a> ・ <a href="#/ja/action/haze-grove"><span class="wiki-icon">🌫️</span>霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><span class="wiki-icon">☁️</span>雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><span class="wiki-icon">🙏</span>司祭</a> ・ <a href="#/ja/action/big-tanuki"><span class="wiki-icon">🦝</span>大きなタヌキ？</a> ・ <a href="#/ja/action/valkyrie"><span class="wiki-icon">👼</span>ヴァルキリー</a> ・ <a href="#/ja/action/spaghetti-monster"><span class="wiki-icon">🍝</span>スパゲッティモンスター</a> ・ <a href="#/ja/action/cat-limousine"><span class="wiki-icon">🚗</span>ねこリムジン</a> ・ <a href="#/ja/action/colonel"><span class="wiki-icon">🎖️</span>大佐</a> ・ <a href="#/ja/action/pegasus"><span class="wiki-icon">🦄</span>ペガサス</a> ・ <a href="#/ja/action/angel"><span class="wiki-icon">😇</span>天使</a> ・ <a href="#/ja/action/paladin"><span class="wiki-icon">🛡️</span>パラディン</a> ・ <a href="#/ja/action/seraph"><span class="wiki-icon">😇</span>熾天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><span class="wiki-icon">☁️</span>雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><span class="wiki-icon">📚</span>天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><span class="wiki-icon">🏛️</span>神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><span class="wiki-icon">🌳</span>世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `big-tanuki` |
| `category` | `sky-garden` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `49` |
| `experience` | `1.26` |
| `seconds` | `2.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 10 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "big-tanuki",
		"name": "大きなタヌキ？",
		"explanation": "ミミズクとタヌキのキメラだろうか？",
		"icon": {
			"emoji": "🦝",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "sky-garden",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 49,
	"experience": 1.26,
	"seconds": 2.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "acorn",
			"count": 1,
			"chance": 0.00367,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "acorn",
			"count": 1,
			"chance": 0.0205
		},
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.00845
		},
		{
			"type": "item",
			"id": "glow-moss",
			"count": 1,
			"chance": 0.00352
		},
		{
			"type": "item",
			"id": "nine-tailed-fox",
			"count": 1,
			"chance": 0.0000315
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 431,
		"defence": 380,
		"accuracy": 10,
		"evasion": 0,
		"restore": 13
	},
	"skills": [
		"telekinesis",
		"second-strike"
	]
}
```

</details>
