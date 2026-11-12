# ミミック

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">ミミック</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/e18b4916860bbce0.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/bedroom"><img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>系統の必要Lv</th><td>Lv13</td></tr><tr><th>所要時間</th><td>2.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.26</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/bedroom"><img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室</a> （レベルが無いので入らない）、<a href="#/ja/category/melee-weapon"><img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 寝室の宝箱がひとつ多い。開けようとした手に噛みついてくる。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) が解放されている・Lv13以上（系統のカテゴリ）
- [<span class="wiki-icon">🏅</span>街の証](/ja/item/town-proof) ×1（消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f035c4566b81cf4b.svg" alt="">ミミック](/ja/item/mimic) ×1 | 成功時 | 0.1% | 0.001 | 0.009 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 58 | 60 | 12 | 11 | 16 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/e47064f085ba60af.svg" alt="">虚飾](/ja/skill/ostentation)：毎ターン 5% で発動、精度-8・回避+12
- [<img class="wiki-icon" src="assets/icon/34a9813c034756be.svg" alt="">捕手](/ja/skill/catcher)：毎ターン 6% で発動、防御+5・回復+5
- [<img class="wiki-icon" src="assets/icon/c9bd900be1ad9c06.svg" alt="">呪いの指輪](/ja/skill/cursed-ring)：毎ターン 5% で発動、攻撃+13・回復-9
- [<img class="wiki-icon" src="assets/icon/5f1675d49e0d0355.svg" alt="">見栄](/ja/skill/vanity)：毎ターン 6% で発動、攻撃+11・防御-7

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv13） | 1.76% | 9.72% | 65.8% | 20.7% | 12.8% | 86.7 | 668.1% | 3分13秒 | 負ける見込みが高い |
| +10（Lv23） | 2.63% | 7.94% | 74.2% | 24.2% | 18.1% | 51.2 | 307.8% | 1分34秒 | 負ける見込みが高い |
| +20（Lv33） | 3.95% | 6.48% | 81.2% | 28.2% | 24.9% | 32 | 149.1% | 48.4秒 | 負ける見込みが高い |
| +30（Lv43） | 5.93% | 5.29% | 86.6% | 32.4% | 33.2% | 19.6 | 70.2% | 24.7秒 | 連戦で少しずつ消耗する |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（近接武器） |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv13） | 2.2秒 | 50% | 0.25 | 18.7 | 1 |
| +10（Lv23） | 1.8秒 | 60% | 0.14 | 38.4 | 0 |
| +20（Lv33） | 1.5秒 | 69.2% | 0.07 | 74.3 | 0 |
| +30（Lv43） | 1.2秒 | 77.1% | 0.04 | 145.8 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

<div class="wiki-navbox" style="--accent:#9196ab"><div class="wiki-navbox-title">寝室のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/mimic"><img class="wiki-icon" src="assets/icon/e18b4916860bbce0.svg" alt="">ミミック</a> ・ <a href="#/ja/action/seal-message-in-a-bottle"><img class="wiki-icon" src="assets/icon/67854644bf13e7c9.svg" alt="">ボトルメール</a> ・ <a href="#/ja/action/craft-sand-castle"><img class="wiki-icon" src="assets/icon/e271b8239f402532.svg" alt="">砂の城</a> ・ <a href="#/ja/action/bundle-peacock-feather"><img class="wiki-icon" src="assets/icon/84692c4ba909a815.svg" alt="">孔雀の羽</a> ・ <a href="#/ja/action/connect-heart-piece"><img class="wiki-icon" src="assets/icon/a36f4b9f125819ad.svg" alt="">ハートのカケラ</a> ・ <a href="#/ja/action/craft-snow-globe"><img class="wiki-icon" src="assets/icon/672226342dc8e971.svg" alt="">スノードーム</a> ・ <a href="#/ja/action/weave-flying-carpet"><img class="wiki-icon" src="assets/icon/053add087b55189d.svg" alt="">空飛ぶ絨毯</a> ・ <a href="#/ja/action/craft-kaleidoscope"><img class="wiki-icon" src="assets/icon/8924e028e77e6849.svg" alt="">万華鏡</a> ・ <a href="#/ja/action/inherit-burning-passion"><img class="wiki-icon" src="assets/icon/b1fbaa1c62ddb5df.svg" alt="">熱い想い</a> ・ <a href="#/ja/action/craft-statue-of-david"><img class="wiki-icon" src="assets/icon/75635773a28b19b4.svg" alt="">ダビデ像</a> ・ <a href="#/ja/action/craft-dancing-statue"><img class="wiki-icon" src="assets/icon/93c7b48f506d481f.svg" alt="">踊る銅像</a> ・ <a href="#/ja/action/write-will-document"><img class="wiki-icon" src="assets/icon/3651add6bd46b346.svg" alt="">遺言書</a> ・ <a href="#/ja/action/copy-infinite-loop-videotape"><img class="wiki-icon" src="assets/icon/84455bcc84de54dd.svg" alt="">無限ループするビデオテープ</a> ・ <a href="#/ja/action/repair-grandfather-clock"><img class="wiki-icon" src="assets/icon/987de3fc02a4d1e9.svg" alt="">おじいさんの時計</a> ・ <a href="#/ja/action/assemble-millennium-puzzle"><img class="wiki-icon" src="assets/icon/be74a6e697bd7212.svg" alt="">千年パズル</a> ・ <a href="#/ja/action/polish-golden-orb"><img class="wiki-icon" src="assets/icon/9bc801c4d1013f57.svg" alt="">金の玉</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `mimic` |
| `category` | `bedroom` |
| `discipline` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hinted` |
| `level` | `1` |
| `disciplineLevel` | `13` |
| `experience` | `1.26` |
| `seconds` | `2.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 4 |
| CSV `memo` | ボス（殴る・粘る） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "mimic",
		"name": "ミミック",
		"explanation": "寝室の宝箱がひとつ多い。開けようとした手に噛みついてくる。",
		"icon": {
			"emoji": "🦷",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/e18b4916860bbce0.svg）"
		},
		"color": ""
	},
	"category": "bedroom",
	"discipline": "melee-weapon",
	"group": "hunt",
	"unlocked": "hinted",
	"level": 1,
	"disciplineLevel": 13,
	"experience": 1.26,
	"seconds": 2.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "town-proof",
			"count": 1,
			"chance": 0,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "mimic",
			"count": 1,
			"chance": 0.001
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 58,
		"defence": 60,
		"accuracy": 12,
		"evasion": 11,
		"restore": 16
	},
	"skills": [
		"ostentation",
		"catcher",
		"cursed-ring",
		"vanity"
	]
}
```

</details>
