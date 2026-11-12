# ゴーレム

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">ゴーレム</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/ddc072b9213bf3de.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/castle"><img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv1</td></tr><tr><th>系統の必要Lv</th><td>Lv16</td></tr><tr><th>所要時間</th><td>2.5秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.43</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/castle"><img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城</a> 80%、<a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 魔法で動く土の巨人。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) が解放されている・Lv16以上（系統のカテゴリ）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/eee3becf8c1b5c9f.svg" alt="">土埃](/ja/item/dust) ×1 | 成功時 | 2.92% | 0.015 | 0.001 |
| [<img class="wiki-icon" src="assets/icon/2de63c4e6b2ac4f8.svg" alt="">石壁の破片](/ja/item/stone-wall-shard) ×1 | 成功時 | 1% | 0.005 | 0 |
| [<img class="wiki-icon" src="assets/icon/743ce36f680259c3.svg" alt="">王笏の宝玉](/ja/item/scepter-jewel) ×1 | 成功時 | 0.065% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 250 | 208 | 14 | 11 | 16 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/092fedf7c53622bb.svg" alt="">盤石](/ja/skill/solid-ground)：毎ターン 5% で発動、防御+8・回復+5
- [<img class="wiki-icon" src="assets/icon/5bfc7d0e67159a30.svg" alt="">念動](/ja/skill/telekinesis)：毎ターン 8% で発動、回避+7

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv16） | 0.004% | 300% | 65.8% | 20.1% | 12.8% | 34,971.3 | 8,386,632.1% | 1日 | 負ける見込みが高い |
| +10（Lv26） | 0.007% | 300% | 74.2% | 23.5% | 18.1% | 20,654.1 | 4,739,474.5% | 11時間42分 | 負ける見込みが高い |
| +20（Lv36） | 0.01% | 300% | 81.2% | 27.3% | 24.9% | 12,586.3 | 2,743,215.5% | 5時間49分 | 負ける見込みが高い |
| +30（Lv46） | 0.015% | 259.5% | 86.6% | 31.6% | 33.2% | 7,865.3 | 1,396,920.1% | 2時間58分 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（城） | 経験値%/時（近接武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv16） | 2.5秒 | 50% | 1.43 | 0 | 0 | 0 |
| +10（Lv26） | 2秒 | 60% | 0.78 | 0.1 | 0 | 0 |
| +20（Lv36） | 1.7秒 | 69.2% | 0.42 | 0.2 | 0 | 0 |
| +30（Lv46） | 1.4秒 | 77.1% | 0.23 | 0.3 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#776a48"><div class="wiki-navbox-title">城のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/rampart-patrol"><img class="wiki-icon" src="assets/icon/6800a285339cbe7c.svg" alt="">城壁の見回り</a> ・ <a href="#/ja/action/archive-research"><img class="wiki-icon" src="assets/icon/ef96ea3c75b9fd31.svg" alt="">書庫の調べ物</a> ・ <a href="#/ja/action/treasury-sorting"><img class="wiki-icon" src="assets/icon/6acb26a6fe78542c.svg" alt="">宝物庫の整理</a> ・ <a href="#/ja/action/elementalist"><img class="wiki-icon" src="assets/icon/3aad8de08b0fee46.svg" alt="">エレメンタリスト</a> ・ <a href="#/ja/action/magic-mirror"><img class="wiki-icon" src="assets/icon/b148d196aa5fc19f.svg" alt="">魔法の鏡</a> ・ <a href="#/ja/action/fairy"><img class="wiki-icon" src="assets/icon/88313a9dc8e4e6f5.svg" alt="">妖精</a> ・ <a href="#/ja/action/squirrel"><img class="wiki-icon" src="assets/icon/544de9bef8647904.svg" alt="">リス</a> ・ <a href="#/ja/action/gargoyle"><img class="wiki-icon" src="assets/icon/3bd66d6ecb71b73e.svg" alt="">ガーゴイル</a> ・ <a href="#/ja/action/necromancer"><img class="wiki-icon" src="assets/icon/b8dfc337e8669e69.svg" alt="">ネクロマンサー</a> ・ <a href="#/ja/action/banquet-ghost"><img class="wiki-icon" src="assets/icon/94a2922ab82673de.svg" alt="">宴の亡霊</a> ・ <a href="#/ja/action/golem"><img class="wiki-icon" src="assets/icon/ddc072b9213bf3de.svg" alt="">ゴーレム</a> ・ <a href="#/ja/action/knight"><img class="wiki-icon" src="assets/icon/4cf5aeed2a7e772b.svg" alt="">騎士</a> ・ <a href="#/ja/action/ghost-knight"><img class="wiki-icon" src="assets/icon/6c3069c276750054.svg" alt="">亡霊騎士</a> ・ <a href="#/ja/action/jailer"><img class="wiki-icon" src="assets/icon/0c0348d8c43a934d.svg" alt="">牢番</a> ・ <a href="#/ja/action/deep-dungeon-cell"><img class="wiki-icon" src="assets/icon/4e50f8830b6c51c0.svg" alt="">地下牢の奥</a> ・ <a href="#/ja/action/hidden-passage-survey"><img class="wiki-icon" src="assets/icon/2e3814868e6b6f25.svg" alt="">隠し通路の調査</a> ・ <a href="#/ja/action/throne-room-secret"><img class="wiki-icon" src="assets/icon/3457029812b6df6f.svg" alt="">王の間の秘密</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `golem` |
| `category` | `castle` |
| `discipline` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `1` |
| `disciplineLevel` | `16` |
| `experience` | `1.43` |
| `seconds` | `2.5` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 8 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "golem",
		"name": "ゴーレム",
		"explanation": "魔法で動く土の巨人。",
		"icon": {
			"emoji": "🗿",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/ddc072b9213bf3de.svg）"
		},
		"color": ""
	},
	"category": "castle",
	"discipline": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 1,
	"disciplineLevel": 16,
	"experience": 1.43,
	"seconds": 2.5,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "dust",
			"count": 1,
			"chance": 0.0292
		},
		{
			"type": "item",
			"id": "stone-wall-shard",
			"count": 1,
			"chance": 0.01
		},
		{
			"type": "item",
			"id": "scepter-jewel",
			"count": 1,
			"chance": 0.000646
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 250,
		"defence": 208,
		"accuracy": 14,
		"evasion": 11,
		"restore": 16
	},
	"skills": [
		"solid-ground",
		"telekinesis"
	]
}
```

</details>
