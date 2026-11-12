# 黒曜石のガーゴイル

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">黒曜石のガーゴイル</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/1c69fa1f35cbd5b4.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/volcano"><img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv44</td></tr><tr><th>系統の必要Lv</th><td>Lv7</td></tr><tr><th>所要時間</th><td>3.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.83</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/volcano"><img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 坑道の入口に据えられた番人。近づくと、目だけが動く。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) Lv44以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている・Lv7以上（系統のカテゴリ）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2cb09afa28c12ccb.svg" alt="">黒曜石のかけら](/ja/item/obsidian-piece) ×1 | 成功時 | 4.27% | 0.021 | 0.006 |
| [<img class="wiki-icon" src="assets/icon/b0cea3a51256d193.svg" alt="">黒曜石](/ja/item/obsidian) ×1 | 成功時 | 0.878% | 0.004 | 0.001 |
| [<img class="wiki-icon" src="assets/icon/677db93f4474488d.svg" alt="">燃える宝玉](/ja/item/burning-orb) ×1 | 成功時 | 0.23% | 0.001 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 140 | 155 | 13 | 12 | 3 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/27a7a8183f2f17f8.svg" alt="">護りの構え](/ja/skill/guard-stance)：毎ターン 5% で発動、防御+7・回避+4・回復+7
- [<img class="wiki-icon" src="assets/icon/319dd132d20efe18.svg" alt="">兜割り耐性](/ja/skill/helm-split-resistance)：毎ターン 9% で発動、防御+6

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv7） | 0.037% | 51.3% | 64.8% | 20.4% | 20% | 4,136.3 | 168,788.7% | 3時間40分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（火山） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv7） | 3.2秒 | 50% | 1.83 | 0.3 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#8f6059"><div class="wiki-navbox-title">火山のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/hot-sand-slope"><img class="wiki-icon" src="assets/icon/9f06dca9991fd2b5.svg" alt="">熱砂の斜面</a> ・ <a href="#/ja/action/hot-spring-sediment-scooping"><img class="wiki-icon" src="assets/icon/b5b65ed321d1e32b.svg" alt="">温泉の沈殿物すくい</a> ・ <a href="#/ja/action/buried-miner-town"><img class="wiki-icon" src="assets/icon/552075f2479bf84e.svg" alt="">埋もれた鉱夫町</a> ・ <a href="#/ja/action/lava-edge-mining"><img class="wiki-icon" src="assets/icon/92a6cf9b35bb30b6.svg" alt="">溶岩の縁の採掘</a> ・ <a href="#/ja/action/crater-crystal-gathering"><img class="wiki-icon" src="assets/icon/b0f573fd58b54765.svg" alt="">火口付近の結晶拾い</a> ・ <a href="#/ja/action/limestone-cave-ore-digging"><img class="wiki-icon" src="assets/icon/b3cd4e996733160e.svg" alt="">鍾乳洞の鉱石掘り</a> ・ <a href="#/ja/action/obsidian-gargoyle"><img class="wiki-icon" src="assets/icon/1c69fa1f35cbd5b4.svg" alt="">黒曜石のガーゴイル</a> ・ <a href="#/ja/action/scorching-beetle"><img class="wiki-icon" src="assets/icon/a00ac0267c6ec1f0.svg" alt="">灼熱の甲虫</a> ・ <a href="#/ja/action/salamander"><img class="wiki-icon" src="assets/icon/f9fd0a0c8a75a1c9.svg" alt="">サラマンダー</a> ・ <a href="#/ja/action/fire-drake"><img class="wiki-icon" src="assets/icon/c52037117c465fd7.svg" alt="">ファイアドレイク</a> ・ <a href="#/ja/action/fire-eating-bird"><img class="wiki-icon" src="assets/icon/1b2297a6cd429b94.svg" alt="">火喰い鳥</a> ・ <a href="#/ja/action/lava-golem"><img class="wiki-icon" src="assets/icon/b46f66ee088a069f.svg" alt="">溶岩ゴーレム</a> ・ <a href="#/ja/action/furnace-keeper"><img class="wiki-icon" src="assets/icon/164e5a20757e6728.svg" alt="">炉の番人</a> ・ <a href="#/ja/action/magma-worm"><img class="wiki-icon" src="assets/icon/5eb0d3e7e1467725.svg" alt="">マグマワーム</a> ・ <a href="#/ja/action/volcano-dragon"><img class="wiki-icon" src="assets/icon/b6232dc1b5865e01.svg" alt="">火山竜</a> ・ <a href="#/ja/action/ancient-lava-tube"><img class="wiki-icon" src="assets/icon/8bfc01db8e3d1f1a.svg" alt="">古代の溶岩洞</a> ・ <a href="#/ja/action/crater-floor"><img class="wiki-icon" src="assets/icon/5b0361a69d51d567.svg" alt="">火口の底</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `obsidian-gargoyle` |
| `category` | `volcano` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `44` |
| `disciplineLevel` | `7` |
| `experience` | `1.83` |
| `seconds` | `3.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 7 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "obsidian-gargoyle",
		"name": "黒曜石のガーゴイル",
		"explanation": "坑道の入口に据えられた番人。近づくと、目だけが動く。",
		"icon": {
			"emoji": "🗿",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/1c69fa1f35cbd5b4.svg）"
		},
		"color": ""
	},
	"category": "volcano",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 44,
	"disciplineLevel": 7,
	"experience": 1.83,
	"seconds": 3.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "obsidian-piece",
			"count": 1,
			"chance": 0.0427
		},
		{
			"type": "item",
			"id": "obsidian",
			"count": 1,
			"chance": 0.00878
		},
		{
			"type": "item",
			"id": "burning-orb",
			"count": 1,
			"chance": 0.0023
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 140,
		"defence": 155,
		"accuracy": 13,
		"evasion": 12,
		"restore": 3
	},
	"skills": [
		"guard-stance",
		"helm-split-resistance"
	]
}
```

</details>
