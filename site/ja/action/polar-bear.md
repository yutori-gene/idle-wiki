# ホッキョクグマ

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">ホッキョクグマ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/a8cd83eedf6ac3f1.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/northland"><img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv50</td></tr><tr><th>系統の必要Lv</th><td>Lv14</td></tr><tr><th>所要時間</th><td>2.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.26</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/northland"><img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国</a> 80%、<a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 氷原の王者。白いのは雪のせいではなく、そういう生き物だからだ。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) Lv50以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) が解放されている・Lv14以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/536d0b271fc4c839.svg" alt="">タラ](/ja/item/cod) ×1（0.733%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/3cd585bfb97b87c1.svg" alt="">白い毛皮](/ja/item/white-fur) ×1 | 成功時 | 4.11% | 0.021 | 0.255 |
| [<img class="wiki-icon" src="assets/icon/f1a34095df88a36b.svg" alt="">ホッキョクグマの爪](/ja/item/polar-bear-claw) ×1 | 成功時 | 1.69% | 0.008 | 0.105 |
| [<img class="wiki-icon" src="assets/icon/8b8473145ed2088d.svg" alt="">大きな骨](/ja/item/big-bone) ×1 | 成功時 | 0.704% | 0.004 | 0.044 |
| [<img class="wiki-icon" src="assets/icon/eac88e55c7b895f1.svg" alt="">ペンペン](/ja/item/pen-pen) ×1 | 成功時 | 0.009% | 0 | 0.001 |
| [<img class="wiki-icon" src="assets/icon/d26ef7f7bfc4543c.svg" alt="">雪男の足跡](/ja/item/yeti-track) ×1 | 成功時 | 0.266% | 0.001 | 0.016 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 79 | 72 | 10 | 5 | 14 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/573ace9e8b8cae50.svg" alt="">厚着](/ja/skill/heavy-clothing)：毎ターン 11% で発動、防御+4
- [<img class="wiki-icon" src="assets/icon/092fedf7c53622bb.svg" alt="">盤石](/ja/skill/solid-ground)：毎ターン 5% で発動、防御+8・回復+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv14） | 1.08% | 14.9% | 71% | 21.4% | 13.8% | 131 | 1,532.1% | 4分50秒 | 負ける見込みが高い |
| +10（Lv24） | 1.62% | 12.2% | 78.6% | 25% | 19.3% | 78.9 | 718.8% | 2分23秒 | 負ける見込みが高い |
| +20（Lv34） | 2.43% | 9.92% | 84.6% | 29% | 26.5% | 49.6 | 349.6% | 1分14秒 | 負ける見込みが高い |
| +30（Lv44） | 3.64% | 8.1% | 89.2% | 33.3% | 35% | 31.4 | 169.5% | 38.8秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（北国） | 経験値%/時（近接武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv14） | 2.2秒 | 50% | 1.26 | 12.4 | 上限 | 0 |
| +10（Lv24） | 1.8秒 | 60% | 1.15 | 25.1 | 上限 | 0 |
| +20（Lv34） | 1.5秒 | 69.2% | 1.08 | 48.5 | 上限 | 0 |
| +30（Lv44） | 1.2秒 | 77.1% | 1.05 | 92.8 | 上限 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 5 | 1 | 4 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b8a92"><div class="wiki-navbox-title">北国のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/snowfield-ruins"><img class="wiki-icon" src="assets/icon/44c05d5f6d105bf5.svg" alt="">雪原の遺跡</a> ・ <a href="#/ja/action/frozen-lakeside"><img class="wiki-icon" src="assets/icon/7c6f087ad4dc298b.svg" alt="">凍った湖畔</a> ・ <a href="#/ja/action/griffin"><img class="wiki-icon" src="assets/icon/2e8f0ddee3c24d6d.svg" alt="">グリフィン</a> ・ <a href="#/ja/action/phoenix"><img class="wiki-icon" src="assets/icon/e1bd57a21d5fa216.svg" alt="">フェニックス</a> ・ <a href="#/ja/action/wyvern"><img class="wiki-icon" src="assets/icon/68dfa87f0523444a.svg" alt="">ワイバーン</a> ・ <a href="#/ja/action/ice"><img class="wiki-icon" src="assets/icon/60b7195e9620edc7.svg" alt="">氷</a> ・ <a href="#/ja/action/god-warrior"><img class="wiki-icon" src="assets/icon/a1510fdde9715652.svg" alt="">巨神兵</a> ・ <a href="#/ja/action/bahamut"><img class="wiki-icon" src="assets/icon/2306e5eaf3792660.svg" alt="">バハムート</a> ・ <a href="#/ja/action/frozen-warrior"><img class="wiki-icon" src="assets/icon/534edc2a28c044ce.svg" alt="">氷漬けの戦士</a> ・ <a href="#/ja/action/mammoth"><img class="wiki-icon" src="assets/icon/cc8c2cabf2063181.svg" alt="">マンモス</a> ・ <a href="#/ja/action/tiger"><img class="wiki-icon" src="assets/icon/bc9d0bdd94514ebd.svg" alt="">トラ</a> ・ <a href="#/ja/action/dragon-kid"><img class="wiki-icon" src="assets/icon/09ecaa0c1b48e7eb.svg" alt="">ドラゴンキッズ</a> ・ <a href="#/ja/action/wild-door"><img class="wiki-icon" src="assets/icon/a0d753414f493a1b.svg" alt="">ワイルドドア</a> ・ <a href="#/ja/action/manticore"><img class="wiki-icon" src="assets/icon/b93d28a3d64e0381.svg" alt="">マンティコア</a> ・ <a href="#/ja/action/drake"><img class="wiki-icon" src="assets/icon/9e3063d1b00c9f27.svg" alt="">ドレイク</a> ・ <a href="#/ja/action/polar-bear"><img class="wiki-icon" src="assets/icon/a8cd83eedf6ac3f1.svg" alt="">ホッキョクグマ</a> ・ <a href="#/ja/action/dragon-den"><img class="wiki-icon" src="assets/icon/215e93b79353c27b.svg" alt="">竜の巣穴</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `polar-bear` |
| `category` | `northland` |
| `discipline` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `50` |
| `disciplineLevel` | `14` |
| `experience` | `1.26` |
| `seconds` | `2.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 5 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "polar-bear",
		"name": "ホッキョクグマ",
		"explanation": "氷原の王者。白いのは雪のせいではなく、そういう生き物だからだ。",
		"icon": {
			"emoji": "🐻‍❄️",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/a8cd83eedf6ac3f1.svg）"
		},
		"color": ""
	},
	"category": "northland",
	"discipline": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 50,
	"disciplineLevel": 14,
	"experience": 1.26,
	"seconds": 2.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "cod",
			"count": 1,
			"chance": 0.00733,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "white-fur",
			"count": 1,
			"chance": 0.0411
		},
		{
			"type": "item",
			"id": "polar-bear-claw",
			"count": 1,
			"chance": 0.0169
		},
		{
			"type": "item",
			"id": "big-bone",
			"count": 1,
			"chance": 0.00704
		},
		{
			"type": "item",
			"id": "pen-pen",
			"count": 1,
			"chance": 0.0000873
		},
		{
			"type": "item",
			"id": "yeti-track",
			"count": 1,
			"chance": 0.00266
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 79,
		"defence": 72,
		"accuracy": 10,
		"evasion": 5,
		"restore": 14
	},
	"skills": [
		"heavy-clothing",
		"solid-ground"
	]
}
```

</details>
