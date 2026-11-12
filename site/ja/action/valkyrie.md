# ヴァルキリー

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">ヴァルキリー</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/ae58041401b3054b.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv12</td></tr><tr><th>系統の必要Lv</th><td>Lv11</td></tr><tr><th>所要時間</th><td>1.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.86</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 戦場の乙女。勇敢な者を選ぶ。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) Lv12以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv11以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/54e436ba42a8d60a.svg" alt="">月桂冠](/ja/item/laurel-crown) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2364d7fb0796e1b8.svg" alt="">羽根](/ja/item/feather) ×1 | 成功時 | 1.68% | 0.008 | 0 |
| [<img class="wiki-icon" src="assets/icon/3f41a87c1f42b366.svg" alt="">星の欠片](/ja/item/star-fragment) ×1 | 成功時 | 0.288% | 0.001 | 0 |
| [<img class="wiki-icon" src="assets/icon/1ce278234d73ea36.svg" alt="">ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.056% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 405 | 276 | 8 | 28 | 9 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/97cd5e7dacd21025.svg" alt="">狙い澄まし](/ja/skill/careful-aim)：毎ターン 9% で発動、精度+6
- [<img class="wiki-icon" src="assets/icon/b0cf0ac5f40111f5.svg" alt="">風読み](/ja/skill/wind-reading)：毎ターン 6% で発動、精度+7・回避+6

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 0% | 300% | 49.1% | 22.1% | 16.4% | 738,176.3 | 172,548,017.3% | 12日19時間 | 負ける見込みが高い |
| +10（Lv21） | 0% | 300% | 59.1% | 25.8% | 22.7% | 408,592.9 | 90,992,098.8% | 5日19時間 | 負ける見込みが高い |
| +20（Lv31） | 0.001% | 300% | 68.4% | 29.8% | 30.6% | 235,273.5 | 49,526,349.2% | 2日17時間 | 負ける見込みが高い |
| +30（Lv41） | 0.001% | 300% | 76.5% | 34.2% | 39.8% | 140,351.3 | 27,688,352.5% | 1日7時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（天空のお庭） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 1.5秒 | 50% | 0.86 | 0 | 0 | 0 |
| +10（Lv21） | 1.2秒 | 60% | 0.47 | 0 | 0 | 0 |
| +20（Lv31） | 1秒 | 69.2% | 0.25 | 0 | 0 | 0 |
| +30（Lv41） | 0.8秒 | 77.1% | 0.14 | 0 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9c95b5"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><img class="wiki-icon" src="assets/icon/e8f5c81d046cfb80.svg" alt="">星屑集め</a> ・ <a href="#/ja/action/haze-grove"><img class="wiki-icon" src="assets/icon/1f5e709acf8c7dbb.svg" alt="">霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><img class="wiki-icon" src="assets/icon/49fc2f62b2003f67.svg" alt="">雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><img class="wiki-icon" src="assets/icon/300032c34ac7363c.svg" alt="">司祭</a> ・ <a href="#/ja/action/cat-limousine"><img class="wiki-icon" src="assets/icon/52aeba6fbc728c0d.svg" alt="">ねこリムジン</a> ・ <a href="#/ja/action/valkyrie"><img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー</a> ・ <a href="#/ja/action/paladin"><img class="wiki-icon" src="assets/icon/0f2bdf78d9abe485.svg" alt="">パラディン</a> ・ <a href="#/ja/action/pegasus"><img class="wiki-icon" src="assets/icon/9635026f25519f71.svg" alt="">ペガサス</a> ・ <a href="#/ja/action/seraph"><img class="wiki-icon" src="assets/icon/9f360fa4f10b66fb.svg" alt="">熾天使</a> ・ <a href="#/ja/action/spaghetti-monster"><img class="wiki-icon" src="assets/icon/394a604ae0c49dba.svg" alt="">スパゲッティモンスター</a> ・ <a href="#/ja/action/big-tanuki"><img class="wiki-icon" src="assets/icon/7fbc1f845aef614f.svg" alt="">大きなタヌキ？</a> ・ <a href="#/ja/action/colonel"><img class="wiki-icon" src="assets/icon/c1042b00a01b59d1.svg" alt="">大佐</a> ・ <a href="#/ja/action/angel"><img class="wiki-icon" src="assets/icon/cb264fde782cfa00.svg" alt="">天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><img class="wiki-icon" src="assets/icon/c9ceb66ca4ebf9e5.svg" alt="">雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><img class="wiki-icon" src="assets/icon/b6a2c1b24b809e3a.svg" alt="">天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><img class="wiki-icon" src="assets/icon/eb58fa75c41f87ab.svg" alt="">神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><img class="wiki-icon" src="assets/icon/6ddaf80260c8fae5.svg" alt="">世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `valkyrie` |
| `category` | `sky-garden` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `12` |
| `disciplineLevel` | `11` |
| `experience` | `0.857` |
| `seconds` | `1.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 10 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "valkyrie",
		"name": "ヴァルキリー",
		"explanation": "戦場の乙女。勇敢な者を選ぶ。",
		"icon": {
			"emoji": "👼",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/ae58041401b3054b.svg）"
		},
		"color": ""
	},
	"category": "sky-garden",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 12,
	"disciplineLevel": 11,
	"experience": 0.857,
	"seconds": 1.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "laurel-crown",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.0168
		},
		{
			"type": "item",
			"id": "star-fragment",
			"count": 1,
			"chance": 0.00288
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.000563
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 405,
		"defence": 276,
		"accuracy": 8,
		"evasion": 28,
		"restore": 9
	},
	"skills": [
		"careful-aim",
		"wind-reading"
	]
}
```

</details>
