# コカトリス

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">コカトリス</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐔</span></div><table><tr><th>場所</th><td><a href="#/ja/category/forest"><span class="wiki-icon">🌲</span>森</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv10</td></tr><tr><th>所要時間</th><td>1.9秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.09</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 鶏と蛇の禍々しい合成。その視線は致命的。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv10以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🥚</span>卵](/ja/item/egg) ×1（1.58%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×1 | 成功時 | 10.6% | 0.053 | 11.2 |
| [<span class="wiki-icon">🧵</span>布](/ja/item/cloth) ×1 | 成功時 | 3.65% | 0.018 | 3.8 |
| [<span class="wiki-icon">🪨</span>火打石](/ja/item/flint) ×1 | 成功時 | 1.52% | 0.008 | 1.6 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 15 | 4 | 2 | 0 | 8 |

**敵のスキル**

- [<span class="wiki-icon">🔥</span>気迫](/ja/skill/fighting-spirit)：毎ターン 6% で発動、攻撃+7・防御+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv10） | 17% | 4.07% | 75% | 24.2% | 16.9% | 8 | 24.6% | 17.1秒 | 連戦で少しずつ消耗する |
| +10（Lv20） | 25.5% | 3.32% | 81.8% | 28.2% | 23.4% | 4.9 | 11.7% | 9.1秒 | 放置で連戦できる |
| +20（Lv30） | 38.3% | 2.71% | 87.1% | 32.4% | 31.5% | 3.4 | 6.31% | 5.6秒 | 放置で連戦できる |
| +30（Lv40） | 57.4% | 2.21% | 91% | 37% | 40.8% | 2.2 | 3.06% | 3.3秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv10） | 1.9秒 | 50% | 1.09 | 210.5 | 115 |
| +10（Lv20） | 1.6秒 | 60% | 0.73 | 394.1 | 172 |
| +20（Lv30） | 1.3秒 | 69.2% | 0.48 | 639.5 | 214 |
| +30（Lv40） | 1秒 | 77.1% | 0.32 | 1,088.6 | 271 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 100 | 10 | 90 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#24804f"><div class="wiki-navbox-title">森のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/gather-nuts"><span class="wiki-icon">🌰</span>木の実採り</a> ・ <a href="#/ja/action/scavenge-fallen-tree"><span class="wiki-icon">🪵</span>倒木あさり</a> ・ <a href="#/ja/action/snake"><span class="wiki-icon">🐍</span>ヘビ</a> ・ <a href="#/ja/action/walking-mushroom"><span class="wiki-icon">🍄</span>歩くキノコ</a> ・ <a href="#/ja/action/man-eating-plant"><span class="wiki-icon">🌱</span>食人植物</a> ・ <a href="#/ja/action/rabbit-girl"><span class="wiki-icon">🐰</span>ラビットガール</a> ・ <a href="#/ja/action/cockatrice"><span class="wiki-icon">🐔</span>コカトリス</a> ・ <a href="#/ja/action/wild-boar"><span class="wiki-icon">🐗</span>ワイルドボア</a> ・ <a href="#/ja/action/goblin"><span class="wiki-icon">👺</span>ゴブリン</a> ・ <a href="#/ja/action/druid"><span class="wiki-icon">🧙</span>ドルイド</a> ・ <a href="#/ja/action/bear"><span class="wiki-icon">🐻</span>クマ</a> ・ <a href="#/ja/action/orc"><span class="wiki-icon">👹</span>オーク</a> ・ <a href="#/ja/action/flying-elephant"><span class="wiki-icon">🐘</span>空飛ぶ象</a> ・ <a href="#/ja/action/centaur"><span class="wiki-icon">🐎</span>ケンタウロス</a> ・ <a href="#/ja/action/wolf"><span class="wiki-icon">🐺</span>ウルフ</a> ・ <a href="#/ja/action/hydra"><span class="wiki-icon">🐉</span>ヒュドラ</a> ・ <a href="#/ja/action/investigate-old-shrine"><span class="wiki-icon">⛩️</span>古い祠の調査</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cockatrice` |
| `category` | `forest` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `10` |
| `experience` | `1.09` |
| `seconds` | `1.9` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 2 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cockatrice",
		"name": "コカトリス",
		"explanation": "鶏と蛇の禍々しい合成。その視線は致命的。",
		"icon": {
			"emoji": "🐔",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "forest",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 10,
	"experience": 1.09,
	"seconds": 1.9,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "egg",
			"count": 1,
			"chance": 0.0158,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.106
		},
		{
			"type": "item",
			"id": "cloth",
			"count": 1,
			"chance": 0.0365
		},
		{
			"type": "item",
			"id": "flint",
			"count": 1,
			"chance": 0.0152
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 15,
		"defence": 4,
		"accuracy": 2,
		"evasion": 0,
		"restore": 8
	},
	"skills": [
		"fighting-spirit"
	]
}
```

</details>
