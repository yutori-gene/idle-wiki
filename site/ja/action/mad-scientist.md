# マッドサイエンティスト

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">マッドサイエンティスト</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/6e8705b278892508.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv6</td></tr><tr><th>系統の必要Lv</th><td>Lv5</td></tr><tr><th>所要時間</th><td>3.1秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.77</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/factory"><img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 倫理を捨てた天才。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) Lv6以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている・Lv5以上（系統のカテゴリ）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 | 成功時 | 0.861% | 0.004 | 0.01 |
| [<img class="wiki-icon" src="assets/icon/def0936f480dd038.svg" alt="">Gウイルス](/ja/item/g-virus) ×1 | 成功時 | 0.194% | 0.001 | 0.002 |
| [<img class="wiki-icon" src="assets/icon/cb40693718b523fa.svg" alt="">実験記録](/ja/item/experiment-log) ×1 | 成功時 | 1.19% | 0.006 | 0.014 |
| [<img class="wiki-icon" src="assets/icon/1473e2d4f0984bb3.svg" alt="">プラズマコア](/ja/item/plasma-core) ×1 | 成功時 | 0.09% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 90 | 103 | 14 | 8 | 7 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/fb63353f9797d95d.svg" alt="">天啓](/ja/skill/revelation)：毎ターン 7% で発動、精度+8
- [<img class="wiki-icon" src="assets/icon/808113e416028f4c.svg" alt="">生贄](/ja/skill/sacrifice)：毎ターン 4% で発動、攻撃-10・回復+15
- [<img class="wiki-icon" src="assets/icon/eac0fcf20bae7d1f.svg" alt="">連鎖爆発](/ja/skill/chain-explosion)：毎ターン 6% で発動、攻撃+9・精度+4
- [<img class="wiki-icon" src="assets/icon/bdc72488c194c66d.svg" alt="">過剰装薬](/ja/skill/overcharge)：毎ターン 5% で発動、攻撃+12・精度-8

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 0.307% | 18.6% | 68.4% | 20.1% | 17.5% | 476.3 | 7,082.2% | 24分40秒 | 負ける見込みが高い |
| +10（Lv15） | 0.461% | 15.2% | 76.5% | 23.5% | 24.2% | 285 | 3,310.9% | 12分4秒 | 負ける見込みが高い |
| +20（Lv25） | 0.691% | 12.4% | 83% | 27.3% | 32.3% | 174.7 | 1,574% | 6分3秒 | 負ける見込みが高い |
| +30（Lv35） | 1.04% | 10.1% | 88% | 31.6% | 41.7% | 110.3 | 764% | 3分8秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（工場） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 3.1秒 | 50% | 1.77 | 2.4 | 1 | 0 |
| +10（Lv15） | 2.5秒 | 60% | 0.96 | 5 | 0 | 0 |
| +20（Lv25） | 2.1秒 | 69.2% | 0.52 | 9.9 | 0 | 0 |
| +30（Lv35） | 1.7秒 | 77.1% | 0.29 | 19.2 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 18 | 0 | 18 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#717476"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><img class="wiki-icon" src="assets/icon/6c40c4939eb20707.svg" alt="">ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><img class="wiki-icon" src="assets/icon/3554c0b2b3d69b0c.svg" alt="">工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><img class="wiki-icon" src="assets/icon/26f5c3c6efc8d1a3.svg" alt="">廃材拾い</a> ・ <a href="#/ja/action/mad-scientist"><img class="wiki-icon" src="assets/icon/6e8705b278892508.svg" alt="">マッドサイエンティスト</a> ・ <a href="#/ja/action/bomb"><img class="wiki-icon" src="assets/icon/0f1ebb270ccc2726.svg" alt="">ボム</a> ・ <a href="#/ja/action/unmanned-forklift"><img class="wiki-icon" src="assets/icon/b9649d31a41a0cd9.svg" alt="">無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><img class="wiki-icon" src="assets/icon/d14738bbe2aee0a1.svg" alt="">警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><img class="wiki-icon" src="assets/icon/89c610e4308f7183.svg" alt="">監視カメラの群れ</a> ・ <a href="#/ja/action/old-work-robot"><img class="wiki-icon" src="assets/icon/76acb221c339059c.svg" alt="">旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><img class="wiki-icon" src="assets/icon/85fb750f8b81f006.svg" alt="">巨大クレーン</a> ・ <a href="#/ja/action/mutant"><img class="wiki-icon" src="assets/icon/9ec762b2c27c2721.svg" alt="">ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><img class="wiki-icon" src="assets/icon/cf13bcbb21d1a79d.svg" alt="">暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><img class="wiki-icon" src="assets/icon/fe99be048a5764e4.svg" alt="">プレス機</a> ・ <a href="#/ja/action/central-control-room"><img class="wiki-icon" src="assets/icon/80eb7b221e8b9886.svg" alt="">中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><img class="wiki-icon" src="assets/icon/ad756d0998230e7a.svg" alt="">封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><img class="wiki-icon" src="assets/icon/3e59793710a254dd.svg" alt="">汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><img class="wiki-icon" src="assets/icon/0c093308110a9536.svg" alt="">地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `mad-scientist` |
| `category` | `factory` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `6` |
| `disciplineLevel` | `5` |
| `experience` | `1.77` |
| `seconds` | `3.1` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 6 |
| CSV `memo` | ボス（硬い） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "mad-scientist",
		"name": "マッドサイエンティスト",
		"explanation": "倫理を捨てた天才。",
		"icon": {
			"emoji": "🧪",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/6e8705b278892508.svg）"
		},
		"color": ""
	},
	"category": "factory",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 6,
	"disciplineLevel": 5,
	"experience": 1.77,
	"seconds": 3.1,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "perpetual-motion-machine",
			"count": 1,
			"chance": 0.00861
		},
		{
			"type": "item",
			"id": "g-virus",
			"count": 1,
			"chance": 0.00194
		},
		{
			"type": "item",
			"id": "experiment-log",
			"count": 1,
			"chance": 0.0119
		},
		{
			"type": "item",
			"id": "plasma-core",
			"count": 1,
			"chance": 0.000896
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 90,
		"defence": 103,
		"accuracy": 14,
		"evasion": 8,
		"restore": 7
	},
	"skills": [
		"revelation",
		"sacrifice",
		"chain-explosion",
		"overcharge"
	]
}
```

</details>
