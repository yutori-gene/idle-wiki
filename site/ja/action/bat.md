# コウモリ

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">コウモリ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/bc5719e3beef9c93.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv24</td></tr><tr><th>系統の必要Lv</th><td>Lv11</td></tr><tr><th>所要時間</th><td>1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.57</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 暗闇の住人。その超音波は厄介な武器。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) Lv24以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv11以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/1d09a9af7858e91a.svg" alt="">松明](/ja/item/torch) ×1（0.185%で消費）
- [<img class="wiki-icon" src="assets/icon/263d98048a36520b.svg" alt="">耳栓](/ja/item/earplug) ×1（0.185%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2364d7fb0796e1b8.svg" alt="">羽根](/ja/item/feather) ×1 | 成功時 | 0.427% | 0.002 | 0 |
| [<img class="wiki-icon" src="assets/icon/fb648a09ca7fdf14.svg" alt="">血液](/ja/item/blood) ×1 | 成功時 | 0.427% | 0.002 | 0 |
| [<img class="wiki-icon" src="assets/icon/fee4914c20d3b8d1.svg" alt="">イワシ](/ja/item/sardine) ×1 | 成功時 | 0.178% | 0.001 | 0 |
| [<img class="wiki-icon" src="assets/icon/bbd5a2ec5cbddac4.svg" alt="">小さな骨](/ja/item/small-bone) ×1 | 成功時 | 0.178% | 0.001 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 270 | 205 | 7 | 27 | 9 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/7cc8a3f86ac9edac.svg" alt="">全弾発射](/ja/skill/full-volley)：毎ターン 4% で発動、攻撃+13・防御-10・精度+8
- [<img class="wiki-icon" src="assets/icon/178348f87da1be37.svg" alt="">弾幕](/ja/skill/barrage)：毎ターン 5% で発動、攻撃+11・精度-8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 0.005% | 300% | 50.1% | 22.4% | 16.4% | 40,647.6 | 9,458,564.1% | 11時間17分 | 負ける見込みが高い |
| +10（Lv21） | 0.007% | 300% | 60.1% | 26.2% | 22.7% | 22,591.8 | 5,004,703.8% | 5時間7分 | 負ける見込みが高い |
| +20（Lv31） | 0.011% | 300% | 69.3% | 30.3% | 30.6% | 13,058.2 | 2,732,126.2% | 2時間25分 | 負ける見込みが高い |
| +30（Lv41） | 0.017% | 300% | 77.2% | 34.7% | 39.8% | 7,815 | 1,530,992.6% | 1時間10分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（地獄） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv11） | 1秒 | 50% | 0.57 | 0.1 | 0 | 0 |
| +10（Lv21） | 0.8秒 | 60% | 0.31 | 0.2 | 0 | 0 |
| +20（Lv31） | 0.7秒 | 69.2% | 0.17 | 0.4 | 0 | 0 |
| +30（Lv41） | 0.5秒 | 77.1% | 0.11 | 0.8 | 上限 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | -0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6e4c5b"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><img class="wiki-icon" src="assets/icon/6ac9bc8ea194652e.svg" alt="">硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><img class="wiki-icon" src="assets/icon/99681c3b8d9ffd3e.svg" alt="">骸骨拾い</a> ・ <a href="#/ja/action/vampire"><img class="wiki-icon" src="assets/icon/3bc4421543721689.svg" alt="">バンパイヤ</a> ・ <a href="#/ja/action/medusa"><img class="wiki-icon" src="assets/icon/8558fc8f4fdb9def.svg" alt="">メデューサ</a> ・ <a href="#/ja/action/ifrit"><img class="wiki-icon" src="assets/icon/28d9275128ba3d5b.svg" alt="">イフリート</a> ・ <a href="#/ja/action/bakeneko"><img class="wiki-icon" src="assets/icon/657885362fae1efc.svg" alt="">化け猫</a> ・ <a href="#/ja/action/lord-freeze"><img class="wiki-icon" src="assets/icon/a1198ac4d82115d0.svg" alt="">フリーズ様</a> ・ <a href="#/ja/action/demon"><img class="wiki-icon" src="assets/icon/a399a48719b8f036.svg" alt="">悪魔</a> ・ <a href="#/ja/action/man-eating-box"><img class="wiki-icon" src="assets/icon/2fe1c02a6322d541.svg" alt="">人食い箱</a> ・ <a href="#/ja/action/bat"><img class="wiki-icon" src="assets/icon/bc5719e3beef9c93.svg" alt="">コウモリ</a> ・ <a href="#/ja/action/basilisk"><img class="wiki-icon" src="assets/icon/9f2b3b58eb91f6ca.svg" alt="">バジリスク</a> ・ <a href="#/ja/action/mummy"><img class="wiki-icon" src="assets/icon/0218c089efa72a77.svg" alt="">ミイラ</a> ・ <a href="#/ja/action/behemoth"><img class="wiki-icon" src="assets/icon/1dd26ec4c50a4c5d.svg" alt="">ベヒモス</a> ・ <a href="#/ja/action/dwarf"><img class="wiki-icon" src="assets/icon/58090c8ec941246b.svg" alt="">ドワーフ</a> ・ <a href="#/ja/action/rotten-tyrant"><img class="wiki-icon" src="assets/icon/a6aa062ef47dc4a9.svg" alt="">腐った暴君</a> ・ <a href="#/ja/action/cerberus"><img class="wiki-icon" src="assets/icon/434f9ba7725923c7.svg" alt="">ケルベロス</a> ・ <a href="#/ja/action/enma-court"><img class="wiki-icon" src="assets/icon/2f292d9ebea19f1c.svg" alt="">閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bat` |
| `category` | `hell` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `24` |
| `disciplineLevel` | `11` |
| `experience` | `0.571` |
| `seconds` | `1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 9 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bat",
		"name": "コウモリ",
		"explanation": "暗闇の住人。その超音波は厄介な武器。",
		"icon": {
			"emoji": "🦇",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/bc5719e3beef9c93.svg）"
		},
		"color": ""
	},
	"category": "hell",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 24,
	"disciplineLevel": 11,
	"experience": 0.571,
	"seconds": 1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "torch",
			"count": 1,
			"chance": 0.00185,
			"equipment": false
		},
		{
			"type": "item",
			"id": "earplug",
			"count": 1,
			"chance": 0.00185,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.00427
		},
		{
			"type": "item",
			"id": "blood",
			"count": 1,
			"chance": 0.00427
		},
		{
			"type": "item",
			"id": "sardine",
			"count": 1,
			"chance": 0.00178
		},
		{
			"type": "item",
			"id": "small-bone",
			"count": 1,
			"chance": 0.00178
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 270,
		"defence": 205,
		"accuracy": 7,
		"evasion": 27,
		"restore": 9
	},
	"skills": [
		"full-volley",
		"barrage"
	]
}
```

</details>
