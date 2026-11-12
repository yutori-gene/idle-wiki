# ワイバーン

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">ワイバーン</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/68dfa87f0523444a.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/northland"><img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv12</td></tr><tr><th>系統の必要Lv</th><td>Lv4</td></tr><tr><th>所要時間</th><td>1.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.86</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/northland"><img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 二足の竜。その尾の毒は致命的。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) Lv12以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv4以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/a74e99a548faeee2.svg" alt="">毒キノコ](/ja/item/poison-mushroom) ×3（0.5%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2364d7fb0796e1b8.svg" alt="">羽根](/ja/item/feather) ×1 | 成功時 | 5% | 0.025 | 0.23 |
| [<img class="wiki-icon" src="assets/icon/b50f3310d210d4d5.svg" alt="">牙](/ja/item/fang) ×1 | 成功時 | 0.48% | 0.002 | 0.022 |
| [<img class="wiki-icon" src="assets/icon/1ce278234d73ea36.svg" alt="">ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.043% | 0 | 0.002 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 67 | 84 | 2 | 19 | 2 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/97cd5e7dacd21025.svg" alt="">狙い澄まし](/ja/skill/careful-aim)：毎ターン 9% で発動、精度+6
- [<img class="wiki-icon" src="assets/icon/3c3abf104ff30226.svg" alt="">回避機動](/ja/skill/evasive-maneuver)：毎ターン 6% で発動、精度+4・回避+8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv4） | 0.664% | 11.7% | 58.1% | 24.2% | 20.6% | 259.7 | 2,296% | 6分31秒 | 負ける見込みが高い |
| +10（Lv14） | 0.995% | 9.53% | 67.6% | 28.2% | 28.1% | 149.5 | 1,023.2% | 3分4秒 | 負ける見込みが高い |
| +20（Lv24） | 1.49% | 7.78% | 75.8% | 32.4% | 36.9% | 88.4 | 464.9% | 1分29秒 | 負ける見込みが高い |
| +30（Lv34） | 2.24% | 6.35% | 82.4% | 37% | 46.7% | 54.6 | 218.4% | 45.4秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（北国） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv4） | 1.5秒 | 50% | 0.86 | 9.2 | 1 | 1 |
| +10（Lv14） | 1.2秒 | 60% | 0.47 | 19.5 | 0 | 0 |
| +20（Lv24） | 1秒 | 69.2% | 0.25 | 40.2 | 0 | 0 |
| +30（Lv34） | 0.8秒 | 77.1% | 0.14 | 79.3 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 2 | 0 | 1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b8a92"><div class="wiki-navbox-title">北国のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/snowfield-ruins"><img class="wiki-icon" src="assets/icon/44c05d5f6d105bf5.svg" alt="">雪原の遺跡</a> ・ <a href="#/ja/action/frozen-lakeside"><img class="wiki-icon" src="assets/icon/7c6f087ad4dc298b.svg" alt="">凍った湖畔</a> ・ <a href="#/ja/action/griffin"><img class="wiki-icon" src="assets/icon/2e8f0ddee3c24d6d.svg" alt="">グリフィン</a> ・ <a href="#/ja/action/phoenix"><img class="wiki-icon" src="assets/icon/e1bd57a21d5fa216.svg" alt="">フェニックス</a> ・ <a href="#/ja/action/wyvern"><img class="wiki-icon" src="assets/icon/68dfa87f0523444a.svg" alt="">ワイバーン</a> ・ <a href="#/ja/action/ice"><img class="wiki-icon" src="assets/icon/60b7195e9620edc7.svg" alt="">氷</a> ・ <a href="#/ja/action/god-warrior"><img class="wiki-icon" src="assets/icon/a1510fdde9715652.svg" alt="">巨神兵</a> ・ <a href="#/ja/action/bahamut"><img class="wiki-icon" src="assets/icon/2306e5eaf3792660.svg" alt="">バハムート</a> ・ <a href="#/ja/action/frozen-warrior"><img class="wiki-icon" src="assets/icon/534edc2a28c044ce.svg" alt="">氷漬けの戦士</a> ・ <a href="#/ja/action/mammoth"><img class="wiki-icon" src="assets/icon/cc8c2cabf2063181.svg" alt="">マンモス</a> ・ <a href="#/ja/action/tiger"><img class="wiki-icon" src="assets/icon/bc9d0bdd94514ebd.svg" alt="">トラ</a> ・ <a href="#/ja/action/dragon-kid"><img class="wiki-icon" src="assets/icon/09ecaa0c1b48e7eb.svg" alt="">ドラゴンキッズ</a> ・ <a href="#/ja/action/wild-door"><img class="wiki-icon" src="assets/icon/a0d753414f493a1b.svg" alt="">ワイルドドア</a> ・ <a href="#/ja/action/manticore"><img class="wiki-icon" src="assets/icon/b93d28a3d64e0381.svg" alt="">マンティコア</a> ・ <a href="#/ja/action/drake"><img class="wiki-icon" src="assets/icon/9e3063d1b00c9f27.svg" alt="">ドレイク</a> ・ <a href="#/ja/action/polar-bear"><img class="wiki-icon" src="assets/icon/a8cd83eedf6ac3f1.svg" alt="">ホッキョクグマ</a> ・ <a href="#/ja/action/dragon-den"><img class="wiki-icon" src="assets/icon/215e93b79353c27b.svg" alt="">竜の巣穴</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `wyvern` |
| `category` | `northland` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `12` |
| `disciplineLevel` | `4` |
| `experience` | `0.857` |
| `seconds` | `1.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 5 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "wyvern",
		"name": "ワイバーン",
		"explanation": "二足の竜。その尾の毒は致命的。",
		"icon": {
			"emoji": "🐉",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/68dfa87f0523444a.svg）"
		},
		"color": ""
	},
	"category": "northland",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 12,
	"disciplineLevel": 4,
	"experience": 0.857,
	"seconds": 1.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "poison-mushroom",
			"count": 3,
			"chance": 0.005,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "feather",
			"count": 1,
			"chance": 0.05
		},
		{
			"type": "item",
			"id": "fang",
			"count": 1,
			"chance": 0.0048
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.000432
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 67,
		"defence": 84,
		"accuracy": 2,
		"evasion": 19,
		"restore": 2
	},
	"skills": [
		"careful-aim",
		"evasive-maneuver"
	]
}
```

</details>
