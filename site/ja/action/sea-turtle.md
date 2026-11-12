# タートル

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">タートル</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/8a25194356ea6eb5.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/sea"><img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv39</td></tr><tr><th>系統の必要Lv</th><td>Lv5</td></tr><tr><th>所要時間</th><td>3.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>2</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/sea"><img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 沼に住む巨大な亀。万年生きたという。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) Lv39以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている・Lv5以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/f48b5014d6b0d0be.svg" alt="">ブロッコリー](/ja/item/broccoli) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/25af4bafc91e56d6.svg" alt="">ダンボール](/ja/item/cardboard) ×1 | 成功時 | 10.2% | 0.051 | 0.362 |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×1 | 成功時 | 7.29% | 0.036 | 0.259 |
| [<img class="wiki-icon" src="assets/icon/facf4dde74b70ddb.svg" alt="">ガラス](/ja/item/glass) ×1 | 成功時 | 0.306% | 0.002 | 0.011 |
| [<img class="wiki-icon" src="assets/icon/33832997528c33da.svg" alt="">クッパ](/ja/item/turtle) ×1 | 成功時 | 0.022% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 37 | 74 | 9 | 6 | 0 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/d21813beac521f02.svg" alt="">硬化](/ja/skill/hardening)：毎ターン 12% で発動、防御+3
- [<img class="wiki-icon" src="assets/icon/b0f98444a91a9a52.svg" alt="">堅牢](/ja/skill/sturdy)：毎ターン 5% で発動、防御+9・回避+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 0.995% | 6.35% | 70.2% | 21.7% | 22% | 143.9 | 715.5% | 8分27秒 | 負ける見込みが高い |
| +10（Lv15） | 1.49% | 5.19% | 77.9% | 25.4% | 29.7% | 86 | 332.8% | 4分9秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（海） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 3.5秒 | 50% | 2 | 7.1 | 0 | 1 |
| +10（Lv15） | 2.9秒 | 60% | 1.09 | 14.5 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 4 | 0 | 4 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#4a637d"><div class="wiki-navbox-title">海のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/flotsam-collecting"><img class="wiki-icon" src="assets/icon/7174ce7efc49f9e9.svg" alt="">漂着物回収</a> ・ <a href="#/ja/action/tidal-flat-clamming"><img class="wiki-icon" src="assets/icon/0cb0250c411d7734.svg" alt="">磯の潮干狩り</a> ・ <a href="#/ja/action/beach-shell-gathering"><img class="wiki-icon" src="assets/icon/3a285c0be3547be2.svg" alt="">浜辺の貝拾い</a> ・ <a href="#/ja/action/serpent"><img class="wiki-icon" src="assets/icon/99401bbf87efddfd.svg" alt="">サーペント</a> ・ <a href="#/ja/action/mermaid"><img class="wiki-icon" src="assets/icon/bcb019bf5c706cb3.svg" alt="">マーメイド</a> ・ <a href="#/ja/action/cthulhu"><img class="wiki-icon" src="assets/icon/726cdf61e0805eb5.svg" alt="">クトゥルフ</a> ・ <a href="#/ja/action/sea-turtle"><img class="wiki-icon" src="assets/icon/8a25194356ea6eb5.svg" alt="">タートル</a> ・ <a href="#/ja/action/pirate"><img class="wiki-icon" src="assets/icon/5d2bd39c66257c15.svg" alt="">海賊</a> ・ <a href="#/ja/action/pirate-captain"><img class="wiki-icon" src="assets/icon/a71a25b5d0b12010.svg" alt="">海賊の頭</a> ・ <a href="#/ja/action/crocodile"><img class="wiki-icon" src="assets/icon/fed17d75923f9e8c.svg" alt="">クロコダイル</a> ・ <a href="#/ja/action/castaway"><img class="wiki-icon" src="assets/icon/50a2af91aef10938.svg" alt="">漂流者</a> ・ <a href="#/ja/action/turtle-demon-king"><img class="wiki-icon" src="assets/icon/f7396d0f10a22c13.svg" alt="">カメの大魔王</a> ・ <a href="#/ja/action/kraken"><img class="wiki-icon" src="assets/icon/94e82149543a0649.svg" alt="">クラーケン</a> ・ <a href="#/ja/action/desert-island-drift"><img class="wiki-icon" src="assets/icon/090dfa72ac79791c.svg" alt="">無人島漂流</a> ・ <a href="#/ja/action/shipwreck-survey"><img class="wiki-icon" src="assets/icon/eb3d79c11d7eaf0a.svg" alt="">沈没船探査</a> ・ <a href="#/ja/action/lighthouse-keeper-hut"><img class="wiki-icon" src="assets/icon/9e6ea89fa2931b2a.svg" alt="">灯台守の小屋</a> ・ <a href="#/ja/action/undersea-cave"><img class="wiki-icon" src="assets/icon/c245a227042ab9a9.svg" alt="">海底洞窟</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `sea-turtle` |
| `category` | `sea` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `39` |
| `disciplineLevel` | `5` |
| `experience` | `2` |
| `seconds` | `3.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 4 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "sea-turtle",
		"name": "タートル",
		"explanation": "沼に住む巨大な亀。万年生きたという。",
		"icon": {
			"emoji": "🐢",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/8a25194356ea6eb5.svg）"
		},
		"color": ""
	},
	"category": "sea",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 39,
	"disciplineLevel": 5,
	"experience": 2,
	"seconds": 3.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "broccoli",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "cardboard",
			"count": 1,
			"chance": 0.102
		},
		{
			"type": "item",
			"id": "coin",
			"count": 1,
			"chance": 0.0729
		},
		{
			"type": "item",
			"id": "glass",
			"count": 1,
			"chance": 0.00306
		},
		{
			"type": "item",
			"id": "turtle",
			"count": 1,
			"chance": 0.000217
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 37,
		"defence": 74,
		"accuracy": 9,
		"evasion": 6,
		"restore": 0
	},
	"skills": [
		"hardening",
		"sturdy"
	]
}
```

</details>
