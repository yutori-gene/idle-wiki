# グレムリン

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">グレムリン</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/60c9754ad81bb635.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/town"><img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv28</td></tr><tr><th>系統の必要Lv</th><td>Lv2</td></tr><tr><th>所要時間</th><td>1.1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.63</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/town"><img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 機械を壊す悪戯好きな小悪魔。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv28以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv2以上（系統のカテゴリ）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f55f7a599c6367a4.svg" alt="">クリップ](/ja/item/paper-clip) ×1 | 成功時 | 6.11% | 0.031 | 6 |
| [<img class="wiki-icon" src="assets/icon/47721c74865bab5f.svg" alt="">紙](/ja/item/paper) ×1 | 成功時 | 3.42% | 0.017 | 3.3 |
| [<img class="wiki-icon" src="assets/icon/b17d79b469604526.svg" alt="">都市伝説の欠片](/ja/item/urban-legend-fragment) ×1 | 成功時 | 0.002% | 0 | 0.002 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 29 | 13 | 0 | 20 | 1 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/44472e3e0e1e652f.svg" alt="">手数](/ja/skill/many-blows)：毎ターン 12% で発動、精度+3

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv2） | 11.8% | 5.4% | 57.1% | 25% | 21.3% | 15.7 | 63.8% | 18.4秒 | 連戦で少しずつ消耗する |
| +10（Lv12） | 17.7% | 4.41% | 66.7% | 29% | 28.9% | 9 | 28.2% | 9秒 | 放置で連戦できる |
| +20（Lv22） | 26.6% | 3.6% | 75% | 33.3% | 37.9% | 5.3 | 12.8% | 4.6秒 | 放置で連戦できる |
| +30（Lv32） | 39.8% | 2.94% | 81.8% | 38% | 47.8% | 3.7 | 6.69% | 2.8秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（街） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv2） | 1.1秒 | 50% | 0.63 | 195.4 | 3 | 11 |
| +10（Lv12） | 0.9秒 | 60% | 0.34 | 400.8 | 1 | 5 |
| +20（Lv22） | 0.7秒 | 69.2% | 0.19 | 775.1 | 1 | 2 |
| +30（Lv32） | 0.6秒 | 77.1% | 0.15 | 1,288.4 | 上限 | 1 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 21 | 0 | 21 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#856654"><div class="wiki-navbox-title">街のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/alley-search"><img class="wiki-icon" src="assets/icon/27e1636641b63801.svg" alt="">路地裏の探し物</a> ・ <a href="#/ja/action/midnight-street"><img class="wiki-icon" src="assets/icon/7cd052438a680aa5.svg" alt="">深夜の路上</a> ・ <a href="#/ja/action/rummage-trash-can"><img class="wiki-icon" src="assets/icon/ba7eb340243f6cda.svg" alt="">ゴミ箱あさり</a> ・ <a href="#/ja/action/rampaging-vending-machine"><img class="wiki-icon" src="assets/icon/c1449d05731c58a5.svg" alt="">暴れ自販機</a> ・ <a href="#/ja/action/cult-leader"><img class="wiki-icon" src="assets/icon/6b4bee93ce40e393.svg" alt="">教祖</a> ・ <a href="#/ja/action/gremlin"><img class="wiki-icon" src="assets/icon/60c9754ad81bb635.svg" alt="">グレムリン</a> ・ <a href="#/ja/action/thief"><img class="wiki-icon" src="assets/icon/7d17b80929b706cc.svg" alt="">盗賊</a> ・ <a href="#/ja/action/bandit"><img class="wiki-icon" src="assets/icon/e0653ffa6617e0e6.svg" alt="">山賊</a> ・ <a href="#/ja/action/stray-dog-pack"><img class="wiki-icon" src="assets/icon/0db6569084ef29a0.svg" alt="">野良犬の群れ</a> ・ <a href="#/ja/action/zombie"><img class="wiki-icon" src="assets/icon/2de7e6dc75e72112.svg" alt="">ゾンビ</a> ・ <a href="#/ja/action/wizard"><img class="wiki-icon" src="assets/icon/9b59bed47660853c.svg" alt="">魔法使い</a> ・ <a href="#/ja/action/shaman"><img class="wiki-icon" src="assets/icon/2dab731f5693bdc8.svg" alt="">シャーマン</a> ・ <a href="#/ja/action/doppelganger"><img class="wiki-icon" src="assets/icon/8271839a5554488c.svg" alt="">ドッペルゲンガー</a> ・ <a href="#/ja/action/bounty-hunter"><img class="wiki-icon" src="assets/icon/e946f5cd0103012b.svg" alt="">賞金稼ぎ</a> ・ <a href="#/ja/action/sewer-rat"><img class="wiki-icon" src="assets/icon/a4e9edb1cd6bdef5.svg" alt="">ドブネズミ</a> ・ <a href="#/ja/action/condemned-building"><img class="wiki-icon" src="assets/icon/5b9a97ac9d611400.svg" alt="">取り壊し前の廃ビル</a> ・ <a href="#/ja/action/sewer-rumor"><img class="wiki-icon" src="assets/icon/b33ec2c043342ba0.svg" alt="">地下水路の噂</a> ・ <a href="#/ja/action/backstreet-informant"><img class="wiki-icon" src="assets/icon/0b0577fa2a9b9c91.svg" alt="">裏通りの情報屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `gremlin` |
| `category` | `town` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `28` |
| `disciplineLevel` | `2` |
| `experience` | `0.629` |
| `seconds` | `1.1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 3 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "gremlin",
		"name": "グレムリン",
		"explanation": "機械を壊す悪戯好きな小悪魔。",
		"icon": {
			"emoji": "👺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/60c9754ad81bb635.svg）"
		},
		"color": ""
	},
	"category": "town",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 28,
	"disciplineLevel": 2,
	"experience": 0.629,
	"seconds": 1.1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "paper-clip",
			"count": 1,
			"chance": 0.0611
		},
		{
			"type": "item",
			"id": "paper",
			"count": 1,
			"chance": 0.0342
		},
		{
			"type": "item",
			"id": "urban-legend-fragment",
			"count": 1,
			"chance": 0.0000158
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 29,
		"defence": 13,
		"accuracy": 0,
		"evasion": 20,
		"restore": 1
	},
	"skills": [
		"many-blows"
	]
}
```

</details>
