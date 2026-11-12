# ドワーフ

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">ドワーフ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/58090c8ec941246b.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv42</td></tr><tr><th>系統の必要Lv</th><td>Lv18</td></tr><tr><th>所要時間</th><td>2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.14</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/hell"><img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄</a> 80%、<a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 地の底で鉄を打つ小人。酒を出せば口が軽くなる。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) Lv42以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) が解放されている・Lv18以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/84951f4d056d7319.svg" alt="">酒](/ja/item/liquor) ×1（0.37%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/b02a8c712acef79e.svg" alt="">歯車](/ja/item/gear) ×1 | 成功時 | 2.07% | 0.01 | 0 |
| [<img class="wiki-icon" src="assets/icon/53d8b1bb827dfec2.svg" alt="">ドワーフの髭](/ja/item/dwarf-beard) ×1 | 成功時 | 0.853% | 0.004 | 0 |
| [<img class="wiki-icon" src="assets/icon/14022c8d4e06bb7a.svg" alt="">油](/ja/item/oil) ×1 | 成功時 | 0.853% | 0.004 | 0 |
| [<img class="wiki-icon" src="assets/icon/0de4136852c3eb9b.svg" alt="">空ビン](/ja/item/empty-bottle) ×1 | 成功時 | 0.356% | 0.002 | 0 |
| [<img class="wiki-icon" src="assets/icon/2e47494d5de1e0a1.svg" alt="">上腕二頭筋](/ja/item/biceps) ×1 | 成功時 | 0.356% | 0.002 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 318 | 238 | 15 | 13 | 21 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/fb717544586539c6.svg" alt="">大振り](/ja/skill/wild-swing)：毎ターン 4% で発動、攻撃+14・精度-9
- [<img class="wiki-icon" src="assets/icon/092fedf7c53622bb.svg" alt="">盤石](/ja/skill/solid-ground)：毎ターン 5% で発動、防御+8・回復+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv18） | 0.001% | 300% | 63.9% | 19.7% | 10.7% | 121,442.1 | 29,241,337.3% | 2日19時間 | 負ける見込みが高い |
| +10（Lv28） | 0.002% | 300% | 72.7% | 23.1% | 15.3% | 71,221.6 | 16,420,587.8% | 1日8時間 | 負ける見込みが高い |
| +20（Lv38） | 0.003% | 300% | 79.9% | 26.9% | 21.3% | 43,153.3 | 9,457,267.7% | 15時間58分 | 負ける見込みが高い |
| +30（Lv48） | 0.004% | 300% | 85.7% | 31.1% | 28.9% | 26,844.6 | 5,547,174.1% | 8時間7分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（地獄） | 経験値%/時（近接武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv18） | 2秒 | 50% | 1.14 | 0 | 0 | 0 |
| +10（Lv28） | 1.6秒 | 60% | 0.68 | 0 | 上限 | 0 |
| +20（Lv38） | 1.3秒 | 69.2% | 0.63 | 0.1 | 上限 | 0 |
| +30（Lv48） | 1.1秒 | 77.1% | 0.6 | 0.1 | 上限 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6e4c5b"><div class="wiki-navbox-title">地獄のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/sulfur-valley"><img class="wiki-icon" src="assets/icon/6ac9bc8ea194652e.svg" alt="">硫黄の谷</a> ・ <a href="#/ja/action/bone-gathering"><img class="wiki-icon" src="assets/icon/99681c3b8d9ffd3e.svg" alt="">骸骨拾い</a> ・ <a href="#/ja/action/vampire"><img class="wiki-icon" src="assets/icon/3bc4421543721689.svg" alt="">バンパイヤ</a> ・ <a href="#/ja/action/medusa"><img class="wiki-icon" src="assets/icon/8558fc8f4fdb9def.svg" alt="">メデューサ</a> ・ <a href="#/ja/action/ifrit"><img class="wiki-icon" src="assets/icon/28d9275128ba3d5b.svg" alt="">イフリート</a> ・ <a href="#/ja/action/bakeneko"><img class="wiki-icon" src="assets/icon/657885362fae1efc.svg" alt="">化け猫</a> ・ <a href="#/ja/action/lord-freeze"><img class="wiki-icon" src="assets/icon/a1198ac4d82115d0.svg" alt="">フリーズ様</a> ・ <a href="#/ja/action/demon"><img class="wiki-icon" src="assets/icon/a399a48719b8f036.svg" alt="">悪魔</a> ・ <a href="#/ja/action/man-eating-box"><img class="wiki-icon" src="assets/icon/2fe1c02a6322d541.svg" alt="">人食い箱</a> ・ <a href="#/ja/action/bat"><img class="wiki-icon" src="assets/icon/bc5719e3beef9c93.svg" alt="">コウモリ</a> ・ <a href="#/ja/action/basilisk"><img class="wiki-icon" src="assets/icon/9f2b3b58eb91f6ca.svg" alt="">バジリスク</a> ・ <a href="#/ja/action/mummy"><img class="wiki-icon" src="assets/icon/0218c089efa72a77.svg" alt="">ミイラ</a> ・ <a href="#/ja/action/behemoth"><img class="wiki-icon" src="assets/icon/1dd26ec4c50a4c5d.svg" alt="">ベヒモス</a> ・ <a href="#/ja/action/dwarf"><img class="wiki-icon" src="assets/icon/58090c8ec941246b.svg" alt="">ドワーフ</a> ・ <a href="#/ja/action/rotten-tyrant"><img class="wiki-icon" src="assets/icon/a6aa062ef47dc4a9.svg" alt="">腐った暴君</a> ・ <a href="#/ja/action/cerberus"><img class="wiki-icon" src="assets/icon/434f9ba7725923c7.svg" alt="">ケルベロス</a> ・ <a href="#/ja/action/enma-court"><img class="wiki-icon" src="assets/icon/2f292d9ebea19f1c.svg" alt="">閻魔の法廷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `dwarf` |
| `category` | `hell` |
| `discipline` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `42` |
| `disciplineLevel` | `18` |
| `experience` | `1.14` |
| `seconds` | `2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 9 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "dwarf",
		"name": "ドワーフ",
		"explanation": "地の底で鉄を打つ小人。酒を出せば口が軽くなる。",
		"icon": {
			"emoji": "🧔",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/58090c8ec941246b.svg）"
		},
		"color": ""
	},
	"category": "hell",
	"discipline": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 42,
	"disciplineLevel": 18,
	"experience": 1.14,
	"seconds": 2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "liquor",
			"count": 1,
			"chance": 0.0037,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "gear",
			"count": 1,
			"chance": 0.0207
		},
		{
			"type": "item",
			"id": "dwarf-beard",
			"count": 1,
			"chance": 0.00853
		},
		{
			"type": "item",
			"id": "oil",
			"count": 1,
			"chance": 0.00853
		},
		{
			"type": "item",
			"id": "empty-bottle",
			"count": 1,
			"chance": 0.00356
		},
		{
			"type": "item",
			"id": "biceps",
			"count": 1,
			"chance": 0.00356
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 318,
		"defence": 238,
		"accuracy": 15,
		"evasion": 13,
		"restore": 21
	},
	"skills": [
		"wild-swing",
		"solid-ground"
	]
}
```

</details>
