# 教祖

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">教祖</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/6b4bee93ce40e393.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/town"><img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv5</td></tr><tr><th>系統の必要Lv</th><td>Lv1</td></tr><tr><th>所要時間</th><td>3.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.83</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/town"><img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> カリスマに満ちた危険な指導者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv5以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/c31eccfb162aa5fc.svg" alt="">つけ髭](/ja/item/fake-beard) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/47721c74865bab5f.svg" alt="">紙](/ja/item/paper) ×1 | 成功時 | 17.8% | 0.089 | 3.4 |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×1 | 成功時 | 5.33% | 0.027 | 1 |
| [<img class="wiki-icon" src="assets/icon/8581856662802ce3.svg" alt="">裏帳簿](/ja/item/secret-ledger) ×1 | 成功時 | 0.005% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 57 | 33 | 11 | 7 | 6 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/7406f82be5ec43d3.svg" alt="">気品](/ja/skill/grace)：毎ターン 10% で発動、回避+5
- [<img class="wiki-icon" src="assets/icon/b37f7307eb97a29c.svg" alt="">威圧](/ja/skill/intimidation)：毎ターン 10% で発動、攻撃+5
- [<img class="wiki-icon" src="assets/icon/100f5a738f0a4b87.svg" alt="">祝福](/ja/skill/blessing)：毎ターン 8% で発動、回復+7
- [<img class="wiki-icon" src="assets/icon/439c68be5d817fbd.svg" alt="">統率](/ja/skill/command)：毎ターン 11% で発動、精度+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv1） | 5.25% | 9.53% | 69.3% | 21.1% | 18.1% | 28.9 | 217% | 1分36秒 | 負ける見込みが高い |
| +10（Lv11） | 7.87% | 7.78% | 77.2% | 24.6% | 24.9% | 16.8 | 98.7% | 46.6秒 | 連戦で少しずつ消耗する |
| +20（Lv21） | 11.8% | 6.35% | 83.6% | 28.6% | 33.2% | 10.8 | 48.9% | 25.1秒 | 連戦で少しずつ消耗する |
| +30（Lv31） | 17.7% | 5.19% | 88.4% | 32.9% | 42.7% | 6.8 | 23.6% | 13.6秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（街） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv1） | 3.2秒 | 50% | 1.83 | 37.7 | 18 | 7 |
| +10（Lv11） | 2.6秒 | 60% | 1 | 77.2 | 9 | 3 |
| +20（Lv21） | 2.1秒 | 69.2% | 0.54 | 143.4 | 4 | 1 |
| +30（Lv31） | 1.7秒 | 77.1% | 0.3 | 265.4 | 1 | 1 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 4 | 0 | 4 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#856654"><div class="wiki-navbox-title">街のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/alley-search"><img class="wiki-icon" src="assets/icon/27e1636641b63801.svg" alt="">路地裏の探し物</a> ・ <a href="#/ja/action/midnight-street"><img class="wiki-icon" src="assets/icon/7cd052438a680aa5.svg" alt="">深夜の路上</a> ・ <a href="#/ja/action/rummage-trash-can"><img class="wiki-icon" src="assets/icon/ba7eb340243f6cda.svg" alt="">ゴミ箱あさり</a> ・ <a href="#/ja/action/rampaging-vending-machine"><img class="wiki-icon" src="assets/icon/c1449d05731c58a5.svg" alt="">暴れ自販機</a> ・ <a href="#/ja/action/cult-leader"><img class="wiki-icon" src="assets/icon/6b4bee93ce40e393.svg" alt="">教祖</a> ・ <a href="#/ja/action/gremlin"><img class="wiki-icon" src="assets/icon/60c9754ad81bb635.svg" alt="">グレムリン</a> ・ <a href="#/ja/action/thief"><img class="wiki-icon" src="assets/icon/7d17b80929b706cc.svg" alt="">盗賊</a> ・ <a href="#/ja/action/bandit"><img class="wiki-icon" src="assets/icon/e0653ffa6617e0e6.svg" alt="">山賊</a> ・ <a href="#/ja/action/stray-dog-pack"><img class="wiki-icon" src="assets/icon/0db6569084ef29a0.svg" alt="">野良犬の群れ</a> ・ <a href="#/ja/action/zombie"><img class="wiki-icon" src="assets/icon/2de7e6dc75e72112.svg" alt="">ゾンビ</a> ・ <a href="#/ja/action/wizard"><img class="wiki-icon" src="assets/icon/9b59bed47660853c.svg" alt="">魔法使い</a> ・ <a href="#/ja/action/shaman"><img class="wiki-icon" src="assets/icon/2dab731f5693bdc8.svg" alt="">シャーマン</a> ・ <a href="#/ja/action/doppelganger"><img class="wiki-icon" src="assets/icon/8271839a5554488c.svg" alt="">ドッペルゲンガー</a> ・ <a href="#/ja/action/bounty-hunter"><img class="wiki-icon" src="assets/icon/e946f5cd0103012b.svg" alt="">賞金稼ぎ</a> ・ <a href="#/ja/action/sewer-rat"><img class="wiki-icon" src="assets/icon/a4e9edb1cd6bdef5.svg" alt="">ドブネズミ</a> ・ <a href="#/ja/action/condemned-building"><img class="wiki-icon" src="assets/icon/5b9a97ac9d611400.svg" alt="">取り壊し前の廃ビル</a> ・ <a href="#/ja/action/sewer-rumor"><img class="wiki-icon" src="assets/icon/b33ec2c043342ba0.svg" alt="">地下水路の噂</a> ・ <a href="#/ja/action/backstreet-informant"><img class="wiki-icon" src="assets/icon/0b0577fa2a9b9c91.svg" alt="">裏通りの情報屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cult-leader` |
| `category` | `town` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `5` |
| `disciplineLevel` | `1` |
| `experience` | `1.83` |
| `seconds` | `3.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 3 |
| CSV `memo` | ボス（硬い） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cult-leader",
		"name": "教祖",
		"explanation": "カリスマに満ちた危険な指導者。",
		"icon": {
			"emoji": "🙏",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/6b4bee93ce40e393.svg）"
		},
		"color": ""
	},
	"category": "town",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 5,
	"disciplineLevel": 1,
	"experience": 1.83,
	"seconds": 3.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "fake-beard",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "paper",
			"count": 1,
			"chance": 0.178
		},
		{
			"type": "item",
			"id": "coin",
			"count": 1,
			"chance": 0.0533
		},
		{
			"type": "item",
			"id": "secret-ledger",
			"count": 1,
			"chance": 0.0000532
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 57,
		"defence": 33,
		"accuracy": 11,
		"evasion": 7,
		"restore": 6
	},
	"skills": [
		"grace",
		"intimidation",
		"blessing",
		"command"
	]
}
```

</details>
