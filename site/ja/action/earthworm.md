# ミミズ

<div class="wiki-infobox" style="--accent:#a58793"><div class="wiki-infobox-title">ミミズ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/c7d3ecb34b9e3294.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/garden"><img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/discipline"><img class="wiki-icon" src="assets/icon/14ec568616182b43.svg" alt="">しつけ</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv16</td></tr><tr><th>所要時間</th><td>31分17秒／ターン</td></tr><tr><th>成功率</th><td>75%</td></tr><tr><th>経験値</th><td>486</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 土を耕してくれるが、増えすぎると根まで食う。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭](/ja/category/garden) Lv16以上（所属カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/72048d4de20fb29f.svg" alt="">生肉](/ja/item/raw-meat) ×9 | 成功時 | 100% | 6.8 | 1.7 |
| [<img class="wiki-icon" src="assets/icon/b9c2295c04c97dd4.svg" alt="">毛虫](/ja/item/caterpillar) ×6 | 成功時 | 100% | 4.5 | 1.1 |
| [<img class="wiki-icon" src="assets/icon/c188baa033147b65.svg" alt="">腐葉土](/ja/item/leaf-mold) ×9 | 成功時 | 100% | 6.8 | 1.7 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 75%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/33c15442b76d44aa.svg" alt="">治癒力](/ja/skill/healing-power)：毎ターン 7% で発動、回復+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv16） | 20% | 3% | 75% | 25% | 22% | 6.7 | 15% | 3時間59分 | 放置で連戦できる |
| +10（Lv26） | 30% | 2.45% | 81.8% | 29% | 29.7% | 4.9 | 8.5% | 2時間30分 | 放置で連戦できる |
| +20（Lv36） | 45% | 2% | 87.1% | 33.3% | 38.8% | 3.4 | 4.59% | 1時間32分 | 放置で連戦できる |
| +30（Lv46） | 67.5% | 1.63% | 91% | 38% | 48.8% | 2.2 | 2.23% | 54分27秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv16） | 31分17秒 | 75% | 486 | 0.3 | 19 |
| +10（Lv26） | 25分33秒 | 81.8% | 264.54 | 0.4 | 6 |
| +20（Lv36） | 20分51秒 | 87.1% | 144 | 0.6 | 2 |
| +30（Lv46） | 17分2秒 | 91% | 78.38 | 1.1 | 1 |

レベル差＝所属カテゴリのレベル − 必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 17 | 0 | 17 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#a58793"><div class="wiki-navbox-title">庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/play-with-chick"><img class="wiki-icon" src="assets/icon/b6f0ef88ffc25bab.svg" alt="">ピヨちゃん（ジュニア）</a> ・ <a href="#/ja/action/feed-killifish"><img class="wiki-icon" src="assets/icon/826f925b2f88bac8.svg" alt="">メダカ</a> ・ <a href="#/ja/action/run-hamster"><img class="wiki-icon" src="assets/icon/5e4aa0f5e0469129.svg" alt="">ハム右衛門</a> ・ <a href="#/ja/action/pluck-walking-cactus-thorn"><img class="wiki-icon" src="assets/icon/6ee75866a4cd9bfe.svg" alt="">歩くサボテン</a> ・ <a href="#/ja/action/care-for-chicken"><img class="wiki-icon" src="assets/icon/722720b253eb31b6.svg" alt="">ピヨちゃん</a> ・ <a href="#/ja/action/bathe-duck"><img class="wiki-icon" src="assets/icon/3a4af8dd6d19c04d.svg" alt="">醜いアヒル</a> ・ <a href="#/ja/action/cheer-up-underdog"><img class="wiki-icon" src="assets/icon/056df9b2abd17a5a.svg" alt="">パブロフ</a> ・ <a href="#/ja/action/walk-turtle"><img class="wiki-icon" src="assets/icon/73da99684cb1b3ac.svg" alt="">クッパ</a> ・ <a href="#/ja/action/talk-with-parroting-parrot"><img class="wiki-icon" src="assets/icon/ada1a971c2bc3f51.svg" alt="">オウム返しするオウム</a> ・ <a href="#/ja/action/take-out-jones"><img class="wiki-icon" src="assets/icon/5d2614f177a8901a.svg" alt="">ジョーンズ</a> ・ <a href="#/ja/action/pen-pen-fishing"><img class="wiki-icon" src="assets/icon/1ea177292f004030.svg" alt="">ペンペン</a> ・ <a href="#/ja/action/scout-with-r2d2"><img class="wiki-icon" src="assets/icon/a2083bedd68b34b6.svg" alt="">R2D2</a> ・ <a href="#/ja/action/bathe-kero-chan"><img class="wiki-icon" src="assets/icon/d9e248bf9fab6bf0.svg" alt="">ケロちゃん</a> ・ <a href="#/ja/action/play-with-flame-fox"><img class="wiki-icon" src="assets/icon/b8b458fce0e261b9.svg" alt="">炎のキツネ</a> ・ <a href="#/ja/action/play-with-fire-bird"><img class="wiki-icon" src="assets/icon/b83b74ee1f05fa49.svg" alt="">炎の鳥</a> ・ <a href="#/ja/action/ask-five-color-cat"><img class="wiki-icon" src="assets/icon/534f5c61426efa3a.svg" alt="">シュレーディンガー</a> ・ <a href="#/ja/action/feed-flying-goldfish"><img class="wiki-icon" src="assets/icon/1b1cbe8b6897b3e6.svg" alt="">空飛ぶ金魚</a> ・ <a href="#/ja/action/ride-flying-pig"><img class="wiki-icon" src="assets/icon/8bd14d8bf4299206.svg" alt="">空飛ぶブタ</a> ・ <a href="#/ja/action/chicken"><img class="wiki-icon" src="assets/icon/cd2af1c05dce2911.svg" alt="">ニワトリ</a> ・ <a href="#/ja/action/pansy"><img class="wiki-icon" src="assets/icon/c86edc0f27aaa3ab.svg" alt="">パンシー</a> ・ <a href="#/ja/action/earthworm"><img class="wiki-icon" src="assets/icon/c7d3ecb34b9e3294.svg" alt="">ミミズ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `earthworm` |
| `category` | `garden` |
| `discipline` | （空） |
| `group` | `discipline` |
| `unlocked` | `hidden` |
| `level` | `16` |
| `disciplineLevel` | `0` |
| `experience` | `486` |
| `seconds` | `1877` |
| `chance` | `0.75` |
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
			"image": "（data URI の画像。site/assets/icon/c7d3ecb34b9e3294.svg）"
		},
		"color": ""
	},
	"category": "garden",
	"discipline": "",
	"group": "discipline",
	"unlocked": "hidden",
	"level": 16,
	"disciplineLevel": 0,
	"experience": 486,
	"seconds": 1877,
	"chance": 0.75,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "raw-meat",
			"count": 9,
			"chance": 1
		},
		{
			"type": "item",
			"id": "caterpillar",
			"count": 6,
			"chance": 1
		},
		{
			"type": "item",
			"id": "leaf-mold",
			"count": 9,
			"chance": 1
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"skills": [
		"healing-power"
	]
}
```

</details>
