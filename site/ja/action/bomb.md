# ボム

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">ボム</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/0f1ebb270ccc2726.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv1</td></tr><tr><th>系統の必要Lv</th><td>Lv6</td></tr><tr><th>所要時間</th><td>1.8秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.03</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/factory"><img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場</a> 80%、<a href="#/ja/category/throwing-weapon"><img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 自らを爆発させる危険な物体。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) が解放されている・Lv6以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/d96be5b775f17319.svg" alt="">廃油](/ja/item/waste-oil) ×3（0.5%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/132a63700bb9e5f6.svg" alt="">ネジ](/ja/item/screw) ×1 | 成功時 | 2.8% | 0.014 | 0.078 |
| [<img class="wiki-icon" src="assets/icon/8e486e4f25fa6ade.svg" alt="">ボルト](/ja/item/bolt) ×1 | 成功時 | 0.96% | 0.005 | 0.027 |
| [<img class="wiki-icon" src="assets/icon/21401b2583dc23cf.svg" alt="">ゴム](/ja/item/rubber) ×1 | 成功時 | 0.4% | 0.002 | 0.011 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 89 | 91 | 3 | 21 | 2 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/6b9a0388bd36bcc7.svg" alt="">自爆覚悟](/ja/skill/self-destruct-resolve)：毎ターン 5% で発動、攻撃+14・防御-9
- [<img class="wiki-icon" src="assets/icon/8bf5fb0d4d17087f.svg" alt="">導火線](/ja/skill/fuse)：毎ターン 11% で発動、攻撃+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv6） | 0.5% | 18.2% | 56.1% | 23.9% | 20.6% | 358 | 4,967.2% | 10分46秒 | 負ける見込みが高い |
| +10（Lv16） | 0.749% | 14.9% | 65.8% | 27.8% | 28.1% | 203.8 | 2,191% | 5分1秒 | 負ける見込みが高い |
| +20（Lv26） | 1.12% | 12.2% | 74.2% | 32% | 36.9% | 119.9 | 990.8% | 2分25秒 | 負ける見込みが高い |
| +30（Lv36） | 1.69% | 9.92% | 81.2% | 36.6% | 46.7% | 73.9 | 465.1% | 1分13秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（工場） | 経験値%/時（投擲武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv6） | 1.8秒 | 50% | 1.03 | 5.6 | 2 | 0 |
| +10（Lv16） | 1.5秒 | 60% | 0.56 | 12 | 1 | 0 |
| +20（Lv26） | 1.2秒 | 69.2% | 0.31 | 24.8 | 1 | 0 |
| +30（Lv36） | 1秒 | 77.1% | 0.17 | 49.1 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 1 | 1 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#717476"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><img class="wiki-icon" src="assets/icon/6c40c4939eb20707.svg" alt="">ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><img class="wiki-icon" src="assets/icon/3554c0b2b3d69b0c.svg" alt="">工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><img class="wiki-icon" src="assets/icon/26f5c3c6efc8d1a3.svg" alt="">廃材拾い</a> ・ <a href="#/ja/action/mad-scientist"><img class="wiki-icon" src="assets/icon/6e8705b278892508.svg" alt="">マッドサイエンティスト</a> ・ <a href="#/ja/action/bomb"><img class="wiki-icon" src="assets/icon/0f1ebb270ccc2726.svg" alt="">ボム</a> ・ <a href="#/ja/action/unmanned-forklift"><img class="wiki-icon" src="assets/icon/b9649d31a41a0cd9.svg" alt="">無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><img class="wiki-icon" src="assets/icon/d14738bbe2aee0a1.svg" alt="">警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><img class="wiki-icon" src="assets/icon/89c610e4308f7183.svg" alt="">監視カメラの群れ</a> ・ <a href="#/ja/action/old-work-robot"><img class="wiki-icon" src="assets/icon/76acb221c339059c.svg" alt="">旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><img class="wiki-icon" src="assets/icon/85fb750f8b81f006.svg" alt="">巨大クレーン</a> ・ <a href="#/ja/action/mutant"><img class="wiki-icon" src="assets/icon/9ec762b2c27c2721.svg" alt="">ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><img class="wiki-icon" src="assets/icon/cf13bcbb21d1a79d.svg" alt="">暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><img class="wiki-icon" src="assets/icon/fe99be048a5764e4.svg" alt="">プレス機</a> ・ <a href="#/ja/action/central-control-room"><img class="wiki-icon" src="assets/icon/80eb7b221e8b9886.svg" alt="">中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><img class="wiki-icon" src="assets/icon/ad756d0998230e7a.svg" alt="">封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><img class="wiki-icon" src="assets/icon/3e59793710a254dd.svg" alt="">汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><img class="wiki-icon" src="assets/icon/0c093308110a9536.svg" alt="">地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `bomb` |
| `category` | `factory` |
| `discipline` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `1` |
| `disciplineLevel` | `6` |
| `experience` | `1.03` |
| `seconds` | `1.8` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 6 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "bomb",
		"name": "ボム",
		"explanation": "自らを爆発させる危険な物体。",
		"icon": {
			"emoji": "💣",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/0f1ebb270ccc2726.svg）"
		},
		"color": ""
	},
	"category": "factory",
	"discipline": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 1,
	"disciplineLevel": 6,
	"experience": 1.03,
	"seconds": 1.8,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "waste-oil",
			"count": 3,
			"chance": 0.005,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "screw",
			"count": 1,
			"chance": 0.028
		},
		{
			"type": "item",
			"id": "bolt",
			"count": 1,
			"chance": 0.0096
		},
		{
			"type": "item",
			"id": "rubber",
			"count": 1,
			"chance": 0.004
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 89,
		"defence": 91,
		"accuracy": 3,
		"evasion": 21,
		"restore": 2
	},
	"skills": [
		"self-destruct-resolve",
		"fuse"
	]
}
```

</details>
