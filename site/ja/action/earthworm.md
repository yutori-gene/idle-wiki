# ミミズ

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">ミミズ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪱</span></div><table><tr><th>場所</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv11</td></tr><tr><th>所要時間</th><td>2.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.26</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 土を耕してくれるが、増えすぎると根まで食う。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv11以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥩</span>生肉](/ja/item/raw-meat) ×1 | 成功時 | 5.5% | 0.028 | 5 |
| [<span class="wiki-icon">🐛</span>毛虫](/ja/item/caterpillar) ×1 | 成功時 | 3.67% | 0.018 | 3.3 |
| [<span class="wiki-icon">🍂</span>腐葉土](/ja/item/leaf-mold) ×1 | 成功時 | 5.5% | 0.028 | 5 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 15 | 4 | 2 | 0 | 8 |

**敵のスキル**

- [<span class="wiki-icon">💚</span>治癒力](/ja/skill/healing-power)：毎ターン 7% で発動、回復+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 17% | 4.07% | 75% | 24.2% | 16.9% | 8 | 24.6% | 19.8秒 | 連戦で少しずつ消耗する |
| +10（Lv21） | 25.5% | 3.32% | 81.8% | 28.2% | 23.4% | 4.9 | 11.7% | 10.6秒 | 放置で連戦できる |
| +20（Lv31） | 38.3% | 2.71% | 87.1% | 32.4% | 31.5% | 3.4 | 6.31% | 6.5秒 | 放置で連戦できる |
| +30（Lv41） | 57.4% | 2.21% | 91% | 37% | 40.8% | 2.2 | 3.06% | 3.8秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 2.2秒 | 50% | 1.26 | 181.8 | 115 |
| +10（Lv21） | 1.8秒 | 60% | 0.84 | 340.3 | 172 |
| +20（Lv31） | 1.5秒 | 69.2% | 0.56 | 552.3 | 214 |
| +30（Lv41） | 1.2秒 | 77.1% | 0.37 | 940.2 | 271 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 50 | 0 | 50 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#c26a8e"><div class="wiki-navbox-title">庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/play-with-chick"><span class="wiki-icon">🐥</span>ヒヨコを遊ばせる</a> ・ <a href="#/ja/action/feed-killifish"><span class="wiki-icon">🐟</span>メダカに餌をやる</a> ・ <a href="#/ja/action/run-hamster"><span class="wiki-icon">🐹</span>ハムスターを走らせる</a> ・ <a href="#/ja/action/pluck-walking-cactus-thorn"><span class="wiki-icon">🌵</span>歩くサボテンの棘を抜く</a> ・ <a href="#/ja/action/care-for-chicken"><span class="wiki-icon">🐔</span>ニワトリを世話する</a> ・ <a href="#/ja/action/bathe-duck"><span class="wiki-icon">🦆</span>アヒルをお風呂に入れる</a> ・ <a href="#/ja/action/cheer-up-underdog"><span class="wiki-icon">🐕</span>負け犬を励ます</a> ・ <a href="#/ja/action/walk-turtle"><span class="wiki-icon">🐢</span>カメを散歩させる</a> ・ <a href="#/ja/action/talk-with-parroting-parrot"><span class="wiki-icon">🦜</span>オウム返しするオウムと話す</a> ・ <a href="#/ja/action/take-out-jones"><span class="wiki-icon">🎩</span>ジョーンズを連れ出す</a> ・ <a href="#/ja/action/pen-pen-fishing"><span class="wiki-icon">🐧</span>ペンペンに魚を獲らせる</a> ・ <a href="#/ja/action/scout-with-r2d2"><span class="wiki-icon">🤖</span>R2D2に偵察させる</a> ・ <a href="#/ja/action/bathe-kero-chan"><span class="wiki-icon">🐸</span>ケロちゃんを水浴びさせる</a> ・ <a href="#/ja/action/play-with-flame-fox"><span class="wiki-icon">🦊</span>炎のキツネと遊ぶ</a> ・ <a href="#/ja/action/ask-five-color-cat"><span class="wiki-icon">🐱</span>五毛猫に頼みごとをする</a> ・ <a href="#/ja/action/take-luna-to-moon"><span class="wiki-icon">🌙</span>ルナを月に連れていく</a> ・ <a href="#/ja/action/feed-flying-goldfish"><span class="wiki-icon">🐠</span>空飛ぶ金魚にエサをやる</a> ・ <a href="#/ja/action/ride-flying-pig"><span class="wiki-icon">🐷</span>空飛ぶブタを乗りこなす</a> ・ <a href="#/ja/action/contract-nine-tailed-fox"><span class="wiki-icon">🦊</span>九尾の狐と契約する</a> ・ <a href="#/ja/action/chicken"><span class="wiki-icon">🐔</span>ニワトリ</a> ・ <a href="#/ja/action/pansy"><span class="wiki-icon">🐈</span>パンシー</a> ・ <a href="#/ja/action/earthworm"><span class="wiki-icon">🪱</span>ミミズ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `earthworm` |
| `category` | `garden` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `11` |
| `experience` | `1.26` |
| `seconds` | `2.2` |
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
		"id": "earthworm",
		"name": "ミミズ",
		"explanation": "土を耕してくれるが、増えすぎると根まで食う。",
		"icon": {
			"emoji": "🪱",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "garden",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 11,
	"experience": 1.26,
	"seconds": 2.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "raw-meat",
			"count": 1,
			"chance": 0.055
		},
		{
			"type": "item",
			"id": "caterpillar",
			"count": 1,
			"chance": 0.0367
		},
		{
			"type": "item",
			"id": "leaf-mold",
			"count": 1,
			"chance": 0.055
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
		"healing-power"
	]
}
```

</details>
