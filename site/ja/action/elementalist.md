# エレメンタリスト

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">エレメンタリスト</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/3aad8de08b0fee46.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv6</td></tr><tr><th>系統の必要Lv</th><td>Lv7</td></tr><tr><th>所要時間</th><td>2.8秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.6</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/castle"><img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 四大元素を駆使する者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) Lv6以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている・Lv7以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/b4b45dec0ee96852.svg" alt="">ロウソク](/ja/item/candle) ×1（0.583%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/743ce36f680259c3.svg" alt="">王笏の宝玉](/ja/item/scepter-jewel) ×1 | 成功時 | 1.16% | 0.006 | 0 |
| [<img class="wiki-icon" src="assets/icon/1ce278234d73ea36.svg" alt="">ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.131% | 0.001 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 193 | 309 | 14 | 9 | 4 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/d9517812a50147d7.svg" alt="">装甲](/ja/skill/armor-plating)：毎ターン 6% で発動、防御+8・回復+4
- [<img class="wiki-icon" src="assets/icon/33c15442b76d44aa.svg" alt="">治癒力](/ja/skill/healing-power)：毎ターン 7% で発動、回復+8
- [<img class="wiki-icon" src="assets/icon/e269af0e827c880a.svg" alt="">軽装](/ja/skill/light-clothing)：毎ターン 11% で発動、回避+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv7） | 0% | 150.1% | 67.6% | 20.1% | 19.3% | 2,044,046.4 | 245,271,532.3% | 66日5時間 | 負ける見込みが高い |
| +10（Lv17） | 0% | 122.6% | 75.8% | 23.5% | 26.5% | 1,215,351.1 | 113,935,675.7% | 32日3時間 | 負ける見込みが高い |
| +20（Lv27） | 0% | 100.1% | 82.4% | 27.3% | 35% | 744,747.3 | 54,145,139.2% | 16日2時間 | 負ける見込みが高い |
| +30（Lv37） | 0% | 81.7% | 87.5% | 31.6% | 44.7% | 467,392.8 | 26,138,507.5% | 8日5時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（城） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv7） | 2.8秒 | 50% | 1.6 | 0 | 0 | 0 |
| +10（Lv17） | 2.3秒 | 60% | 0.87 | 0 | 0 | 0 |
| +20（Lv27） | 1.9秒 | 69.2% | 0.47 | 0 | 0 | 0 |
| +30（Lv37） | 1.5秒 | 77.1% | 0.26 | 0 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなしている。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#776a48"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><img class="wiki-icon" src="assets/icon/6800a285339cbe7c.svg" alt="">城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><img class="wiki-icon" src="assets/icon/ef96ea3c75b9fd31.svg" alt="">書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><img class="wiki-icon" src="assets/icon/6acb26a6fe78542c.svg" alt="">宝物庫の整理</a> ・ <a href="#/ja/action/elementalist"><img class="wiki-icon" src="assets/icon/3aad8de08b0fee46.svg" alt="">エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><img class="wiki-icon" src="assets/icon/b148d196aa5fc19f.svg" alt="">魔法の鏡</a> ・ <a href="#/ja/action/fairy"><img class="wiki-icon" src="assets/icon/88313a9dc8e4e6f5.svg" alt="">妖精</a> ・ <a href="#/ja/action/squirrel"><img class="wiki-icon" src="assets/icon/544de9bef8647904.svg" alt="">リス</a> ・ <a href="#/ja/action/gargoyle"><img class="wiki-icon" src="assets/icon/3bd66d6ecb71b73e.svg" alt="">ガーゴイル</a> ・ <a href="#/ja/action/necromancer"><img class="wiki-icon" src="assets/icon/b8dfc337e8669e69.svg" alt="">ネクロマンサー</a> ・ <a href="#/ja/action/banquet-ghost"><img class="wiki-icon" src="assets/icon/94a2922ab82673de.svg" alt="">宴の亡霊</a> ・ <a href="#/ja/action/golem"><img class="wiki-icon" src="assets/icon/ddc072b9213bf3de.svg" alt="">ゴーレム</a> ・ <a href="#/ja/action/knight"><img class="wiki-icon" src="assets/icon/4cf5aeed2a7e772b.svg" alt="">騎士</a> ・ <a href="#/ja/action/ghost-knight"><img class="wiki-icon" src="assets/icon/6c3069c276750054.svg" alt="">亡霊騎士</a> ・ <a href="#/ja/action/jailer"><img class="wiki-icon" src="assets/icon/0c0348d8c43a934d.svg" alt="">牢番</a> ・ <a href="#/ja/action/deep-dungeon-cell"><img class="wiki-icon" src="assets/icon/4e50f8830b6c51c0.svg" alt="">地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><img class="wiki-icon" src="assets/icon/2e3814868e6b6f25.svg" alt="">隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><img class="wiki-icon" src="assets/icon/3457029812b6df6f.svg" alt="">王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `elementalist` |
| `category` | `castle` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `6` |
| `disciplineLevel` | `7` |
| `experience` | `1.6` |
| `seconds` | `2.8` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 8 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "elementalist",
		"name": "エレメンタリスト",
		"explanation": "四大元素を駆使する者。",
		"icon": {
			"emoji": "🧙",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/3aad8de08b0fee46.svg）"
		},
		"color": ""
	},
	"category": "castle",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 6,
	"disciplineLevel": 7,
	"experience": 1.6,
	"seconds": 2.8,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "candle",
			"count": 1,
			"chance": 0.00583,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "scepter-jewel",
			"count": 1,
			"chance": 0.0116
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.00131
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 193,
		"defence": 309,
		"accuracy": 14,
		"evasion": 9,
		"restore": 4
	},
	"skills": [
		"armor-plating",
		"healing-power",
		"light-clothing"
	]
}
```

</details>
