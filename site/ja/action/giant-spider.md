# 巨大なクモ

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">巨大なクモ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/f4a063e2ef801314.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/park"><img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv5</td></tr><tr><th>所要時間</th><td>1.8秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.03</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> キモい🕷️


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) Lv5以上（経験値の入り先カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/ff320060939d76ce.svg" alt="">虫取り網](/ja/item/bug-net) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/b9c2295c04c97dd4.svg" alt="">毛虫](/ja/item/caterpillar) ×1 | 成功時 | 6.91% | 0.035 | 9 |
| [<img class="wiki-icon" src="assets/icon/bbd5a2ec5cbddac4.svg" alt="">小さな骨](/ja/item/small-bone) ×1 | 成功時 | 2.88% | 0.014 | 3.8 |
| [<img class="wiki-icon" src="assets/icon/5917c2eb05add9f6.svg" alt="">クモの糸](/ja/item/spider-thread) ×1 | 成功時 | 0.062% | 0 | 0.081 |
| [<img class="wiki-icon" src="assets/icon/d42662b01d8887cc.svg" alt="">枝](/ja/item/branch) ×1 | 成功時 | 2.88% | 0.014 | 3.8 |
| [<img class="wiki-icon" src="assets/icon/7827b4614a197e69.svg" alt="">鳥の羽根](/ja/item/bird-feather) ×1 | 成功時 | 3.46% | 0.017 | 4.5 |
| [<img class="wiki-icon" src="assets/icon/72b9b13ec0747c5c.svg" alt="">ピヨちゃん（ジュニア）](/ja/item/chick) ×1 | 成功時 | 0.036% | 0 | 0.047 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 15 | 0 | 2 | 0 | 8 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/d21813beac521f02.svg" alt="">硬化](/ja/skill/hardening)：毎ターン 12% で発動、防御+3

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 20% | 4.07% | 75% | 24.2% | 16.9% | 6.7 | 20.5% | 13.8秒 | 連戦で少しずつ消耗する |
| +10（Lv15） | 30% | 3.32% | 81.8% | 28.2% | 23.4% | 4.9 | 11.7% | 8.7秒 | 放置で連戦できる |
| +20（Lv25） | 45% | 2.71% | 87.1% | 32.4% | 31.5% | 3.4 | 6.31% | 5.3秒 | 放置で連戦できる |
| +30（Lv35） | 67.5% | 2.21% | 91% | 37% | 40.8% | 2.2 | 3.06% | 3.1秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 1.8秒 | 50% | 1.03 | 260.9 | 134 |
| +10（Lv15） | 1.5秒 | 60% | 0.69 | 416 | 171 |
| +20（Lv25） | 1.2秒 | 69.2% | 0.46 | 675 | 214 |
| +30（Lv35） | 1秒 | 77.1% | 0.31 | 1,149.1 | 271 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 97 | 0 | 97 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#697852"><div class="wiki-navbox-title">公園のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/gather-fallen-leaves"><img class="wiki-icon" src="assets/icon/732665ba6a1aee85.svg" alt="">落ち葉拾い</a> ・ <a href="#/ja/action/cleanup-activity"><img class="wiki-icon" src="assets/icon/dc1ff4797b8cfa39.svg" alt="">清掃活動</a> ・ <a href="#/ja/action/dig-sandbox"><img class="wiki-icon" src="assets/icon/eee8a2d4f6796b24.svg" alt="">砂場掘り</a> ・ <a href="#/ja/action/tend-flower-bed"><img class="wiki-icon" src="assets/icon/b9f2fd9a42b74ce8.svg" alt="">花壇の手入れ</a> ・ <a href="#/ja/action/pond-side"><img class="wiki-icon" src="assets/icon/8037b426178499e5.svg" alt="">池のほとり</a> ・ <a href="#/ja/action/giant-spider"><img class="wiki-icon" src="assets/icon/f4a063e2ef801314.svg" alt="">巨大なクモ</a> ・ <a href="#/ja/action/shut-in-guard"><img class="wiki-icon" src="assets/icon/2e30f354dd5c201b.svg" alt="">自宅警備員</a> ・ <a href="#/ja/action/pavlovs-dog"><img class="wiki-icon" src="assets/icon/21fd864bcbf55bb4.svg" alt="">パブロフの犬</a> ・ <a href="#/ja/action/beetle"><img class="wiki-icon" src="assets/icon/870c7be655bbcb40.svg" alt="">カブトムシ</a> ・ <a href="#/ja/action/snail"><img class="wiki-icon" src="assets/icon/cd1dda47c898102f.svg" alt="">カタツムリ</a> ・ <a href="#/ja/action/deep-in-the-bushes"><img class="wiki-icon" src="assets/icon/ffc8dfbf2e954eb8.svg" alt="">茂みの奥</a> ・ <a href="#/ja/action/twilight-promenade"><img class="wiki-icon" src="assets/icon/849075a43bb2d535.svg" alt="">夕暮れの散歩道</a> ・ <a href="#/ja/action/boathouse"><img class="wiki-icon" src="assets/icon/1aee9dfc0a917e5f.svg" alt="">ボート小屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `giant-spider` |
| `category` | `park` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `5` |
| `experience` | `1.03` |
| `seconds` | `1.8` |
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
		"id": "giant-spider",
		"name": "巨大なクモ",
		"explanation": "キモい🕷️",
		"icon": {
			"emoji": "🕷️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/f4a063e2ef801314.svg）"
		},
		"color": ""
	},
	"category": "park",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 5,
	"experience": 1.03,
	"seconds": 1.8,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "bug-net",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "caterpillar",
			"count": 1,
			"chance": 0.0691
		},
		{
			"type": "item",
			"id": "small-bone",
			"count": 1,
			"chance": 0.0288
		},
		{
			"type": "item",
			"id": "spider-thread",
			"count": 1,
			"chance": 0.000621
		},
		{
			"type": "item",
			"id": "branch",
			"count": 1,
			"chance": 0.0288
		},
		{
			"type": "item",
			"id": "bird-feather",
			"count": 1,
			"chance": 0.0346
		},
		{
			"type": "item",
			"id": "chick",
			"count": 1,
			"chance": 0.000357
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 15,
		"defence": 0,
		"accuracy": 2,
		"evasion": 0,
		"restore": 8
	},
	"skills": [
		"hardening"
	]
}
```

</details>
