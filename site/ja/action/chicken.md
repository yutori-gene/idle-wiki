# ニワトリ

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">ニワトリ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐔</span></div><table><tr><th>場所</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv5</td></tr><tr><th>所要時間</th><td>1分／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>35</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 畑を荒らす鶏を追い払う。ついでに卵をいただく。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv5以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🌾</span>小麦](/ja/item/wheat) ×1（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥚</span>卵](/ja/item/egg) ×3 | 成功時 | 100% | 1.5 | 10 |
| [<span class="wiki-icon">🪶</span>羽根](/ja/item/feather) ×7 | 成功時 | 100% | 3.5 | 23.3 |
| [<span class="wiki-icon">🥩</span>生肉](/ja/item/raw-meat) ×2 | 成功時 | 100% | 1 | 6.7 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 15 | 4 | 2 | 0 | 8 |

**敵のスキル**

- [<span class="wiki-icon">⚔️</span>二の太刀](/ja/skill/second-strike)：毎ターン 12% で発動、攻撃+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 17% | 4.07% | 75% | 24.2% | 16.9% | 8 | 24.6% | 9分 | 連戦で少しずつ消耗する |
| +10（Lv15） | 25.5% | 3.32% | 81.8% | 28.2% | 23.4% | 4.9 | 11.7% | 4分48秒 | 放置で連戦できる |
| +20（Lv25） | 38.3% | 2.71% | 87.1% | 32.4% | 31.5% | 3.4 | 6.31% | 2分58秒 | 放置で連戦できる |
| +30（Lv35） | 57.4% | 2.21% | 91% | 37% | 40.8% | 2.2 | 3.06% | 1分44秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 1分 | 50% | 35 | 6.7 | 117 |
| +10（Lv15） | 49秒 | 60% | 23.33 | 12.5 | 175 |
| +20（Lv25） | 40秒 | 69.2% | 15.56 | 20.3 | 218 |
| +30（Lv35） | 32.7秒 | 77.1% | 10.37 | 34.5 | 276 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 210 | 20 | 190 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#c26a8e"><div class="wiki-navbox-title">庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/play-with-chick"><span class="wiki-icon">🐥</span>ヒヨコを遊ばせる</a> ・ <a href="#/ja/action/feed-killifish"><span class="wiki-icon">🐟</span>メダカに餌をやる</a> ・ <a href="#/ja/action/run-hamster"><span class="wiki-icon">🐹</span>ハムスターを走らせる</a> ・ <a href="#/ja/action/pluck-walking-cactus-thorn"><span class="wiki-icon">🌵</span>歩くサボテンの棘を抜く</a> ・ <a href="#/ja/action/care-for-chicken"><span class="wiki-icon">🐔</span>ニワトリを世話する</a> ・ <a href="#/ja/action/bathe-duck"><span class="wiki-icon">🦆</span>アヒルをお風呂に入れる</a> ・ <a href="#/ja/action/cheer-up-underdog"><span class="wiki-icon">🐕</span>負け犬を励ます</a> ・ <a href="#/ja/action/walk-turtle"><span class="wiki-icon">🐢</span>カメを散歩させる</a> ・ <a href="#/ja/action/talk-with-parroting-parrot"><span class="wiki-icon">🦜</span>オウム返しするオウムと話す</a> ・ <a href="#/ja/action/take-out-jones"><span class="wiki-icon">🎩</span>ジョーンズを連れ出す</a> ・ <a href="#/ja/action/pen-pen-fishing"><span class="wiki-icon">🐧</span>ペンペンに魚を獲らせる</a> ・ <a href="#/ja/action/scout-with-r2d2"><span class="wiki-icon">🤖</span>R2D2に偵察させる</a> ・ <a href="#/ja/action/bathe-kero-chan"><span class="wiki-icon">🐸</span>ケロちゃんを水浴びさせる</a> ・ <a href="#/ja/action/play-with-flame-fox"><span class="wiki-icon">🦊</span>炎のキツネと遊ぶ</a> ・ <a href="#/ja/action/ask-five-color-cat"><span class="wiki-icon">🐱</span>五毛猫に頼みごとをする</a> ・ <a href="#/ja/action/take-luna-to-moon"><span class="wiki-icon">🌙</span>ルナを月に連れていく</a> ・ <a href="#/ja/action/feed-flying-goldfish"><span class="wiki-icon">🐠</span>空飛ぶ金魚にエサをやる</a> ・ <a href="#/ja/action/ride-flying-pig"><span class="wiki-icon">🐷</span>空飛ぶブタを乗りこなす</a> ・ <a href="#/ja/action/contract-nine-tailed-fox"><span class="wiki-icon">🦊</span>九尾の狐と契約する</a> ・ <a href="#/ja/action/chicken"><span class="wiki-icon">🐔</span>ニワトリ</a> ・ <a href="#/ja/action/pansy"><span class="wiki-icon">🐈</span>パンシー</a> ・ <a href="#/ja/action/earthworm"><span class="wiki-icon">🪱</span>ミミズ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `chicken` |
| `category` | `garden` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `5` |
| `experience` | `35` |
| `seconds` | `60` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 1 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "chicken",
		"name": "ニワトリ",
		"explanation": "畑を荒らす鶏を追い払う。ついでに卵をいただく。",
		"icon": {
			"emoji": "🐔",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "garden",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 5,
	"experience": 35,
	"seconds": 60,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "wheat",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "egg",
			"count": 3,
			"chance": 1
		},
		{
			"type": "item",
			"id": "feather",
			"count": 7,
			"chance": 1
		},
		{
			"type": "item",
			"id": "raw-meat",
			"count": 2,
			"chance": 1
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
		"second-strike"
	]
}
```

</details>
