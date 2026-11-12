# ゴブリン

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">ゴブリン</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/5ae28253f47375a3.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/forest"><img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv24</td></tr><tr><th>系統の必要Lv</th><td>Lv2</td></tr><tr><th>所要時間</th><td>1.3秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.74</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/forest"><img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv24以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv2以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×5（1.08%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×1 | 成功時 | 8.67% | 0.043 | 11.4 |
| [<img class="wiki-icon" src="assets/icon/c356c4e824765c87.svg" alt="">乾電池](/ja/item/dry-cell) ×1 | 成功時 | 6.07% | 0.03 | 8 |
| [<img class="wiki-icon" src="assets/icon/d369c8ae7552f02e.svg" alt="">フランスパン](/ja/item/baguette) ×1 | 成功時 | 1.04% | 0.005 | 1.4 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 3 | 4 | 0 | 14 | 0 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/af21eb96325d1902.svg" alt="">見切り](/ja/skill/perception)：毎ターン 12% で発動、回避+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv2） | 17% | 3.19% | 63% | 25% | 22% | 9.5 | 22.8% | 13.7秒 | 連戦で少しずつ消耗する |
| +10（Lv12） | 25.5% | 2.6% | 71.8% | 29% | 29.7% | 5.6 | 10.3% | 7秒 | 放置で連戦できる |
| +20（Lv22） | 38.3% | 2.13% | 79.3% | 33.3% | 38.8% | 3.8 | 5.36% | 4.1秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（森） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv2） | 1.3秒 | 50% | 0.74 | 263 | 7 | 18 |
| +10（Lv12） | 1.1秒 | 60% | 0.4 | 516.4 | 3 | 8 |
| +20（Lv22） | 0.9秒 | 69.2% | 0.22 | 868.3 | 1 | 3 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 36 | 14 | 21 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#426251"><div class="wiki-navbox-title">森のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/gather-nuts"><img class="wiki-icon" src="assets/icon/2081317ebebd178d.svg" alt="">木の実採り</a> ・ <a href="#/ja/action/scavenge-fallen-tree"><img class="wiki-icon" src="assets/icon/f6b774fbdf6117d2.svg" alt="">倒木あさり</a> ・ <a href="#/ja/action/rabbit-girl"><img class="wiki-icon" src="assets/icon/ca6d048476ae39f9.svg" alt="">ラビットガール</a> ・ <a href="#/ja/action/goblin"><img class="wiki-icon" src="assets/icon/5ae28253f47375a3.svg" alt="">ゴブリン</a> ・ <a href="#/ja/action/walking-mushroom"><img class="wiki-icon" src="assets/icon/5b9eec78a0de50a1.svg" alt="">歩くキノコ</a> ・ <a href="#/ja/action/snake"><img class="wiki-icon" src="assets/icon/4a396b8649ead6c1.svg" alt="">ヘビ</a> ・ <a href="#/ja/action/man-eating-plant"><img class="wiki-icon" src="assets/icon/201d7af6f34effd1.svg" alt="">食人植物</a> ・ <a href="#/ja/action/cockatrice"><img class="wiki-icon" src="assets/icon/ea5fece55cd26243.svg" alt="">コカトリス</a> ・ <a href="#/ja/action/wild-boar"><img class="wiki-icon" src="assets/icon/6d5271227ed21518.svg" alt="">ワイルドボア</a> ・ <a href="#/ja/action/flying-elephant"><img class="wiki-icon" src="assets/icon/e3daf5030f26dcd0.svg" alt="">空飛ぶ象</a> ・ <a href="#/ja/action/centaur"><img class="wiki-icon" src="assets/icon/43113159f0664f4b.svg" alt="">ケンタウロス</a> ・ <a href="#/ja/action/druid"><img class="wiki-icon" src="assets/icon/f31490361b7ac246.svg" alt="">ドルイド</a> ・ <a href="#/ja/action/bear"><img class="wiki-icon" src="assets/icon/f3cda161292208a6.svg" alt="">クマ</a> ・ <a href="#/ja/action/wolf"><img class="wiki-icon" src="assets/icon/15c5deccdd555c48.svg" alt="">ウルフ</a> ・ <a href="#/ja/action/orc"><img class="wiki-icon" src="assets/icon/caf79c699a6ed796.svg" alt="">オーク</a> ・ <a href="#/ja/action/hydra"><img class="wiki-icon" src="assets/icon/dd15cd9ebcbaacd1.svg" alt="">ヒュドラ</a> ・ <a href="#/ja/action/investigate-old-shrine"><img class="wiki-icon" src="assets/icon/2674008c6dd247bc.svg" alt="">古い祠の調査</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `goblin` |
| `category` | `forest` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `24` |
| `disciplineLevel` | `2` |
| `experience` | `0.743` |
| `seconds` | `1.3` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 2 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "goblin",
		"name": "ゴブリン",
		"explanation": "",
		"icon": {
			"emoji": "👺",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/5ae28253f47375a3.svg）"
		},
		"color": ""
	},
	"category": "forest",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 24,
	"disciplineLevel": 2,
	"experience": 0.743,
	"seconds": 1.3,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "coin",
			"count": 5,
			"chance": 0.0108,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "coin",
			"count": 1,
			"chance": 0.0867
		},
		{
			"type": "item",
			"id": "dry-cell",
			"count": 1,
			"chance": 0.0607
		},
		{
			"type": "item",
			"id": "baguette",
			"count": 1,
			"chance": 0.0104
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 3,
		"defence": 4,
		"accuracy": 0,
		"evasion": 14,
		"restore": 0
	},
	"skills": [
		"perception"
	]
}
```

</details>
