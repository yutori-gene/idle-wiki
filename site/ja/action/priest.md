# 司祭

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">司祭</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/300032c34ac7363c.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a></td></tr><tr><th>系統</th><td><a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv1</td></tr><tr><th>系統の必要Lv</th><td>Lv10</td></tr><tr><th>所要時間</th><td>2.9秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.66</td></tr><tr><th>経験値の配分</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a> 80%、<a href="#/ja/category/explosive-weapon"><img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器</a> 20%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 神の教えを説く者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) が解放されている・Lv10以上（系統のカテゴリ）
- [<img class="wiki-icon" src="assets/icon/31a987b1c411eb70.svg" alt="">十字架のロザリオ](/ja/item/cross-rosary) ×1（0.483%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/977fa61ebec6296e.svg" alt="">天使の落とし物](/ja/item/angels-lost-item) ×1 | 成功時 | 0.928% | 0.005 | 0 |
| [<img class="wiki-icon" src="assets/icon/96734a21b38d6169.svg" alt="">天空の宝玉](/ja/item/sky-orb) ×1 | 成功時 | 0.146% | 0.001 | 0 |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×1 | 成功時 | 1.45% | 0.007 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 365 | 430 | 16 | 12 | 9 |

**敵のスキル**

- [<img class="wiki-icon" src="assets/icon/3ab1e4c1b0921009.svg" alt="">鉄壁](/ja/skill/iron-wall)：毎ターン 4% で発動、防御+10・精度+3・回避+6・回復+5
- [<img class="wiki-icon" src="assets/icon/c52eb9a11ae26a6e.svg" alt="">傷薬](/ja/skill/salve)：毎ターン 10% で発動、回復+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv10） | 0% | 300% | 64.8% | 19.4% | 16.4% | 287,769,623.3 | 69,565,933,417.8% | 9658日22時間 | 負ける見込みが高い |
| +10（Lv20） | 0% | 300% | 73.4% | 22.8% | 22.7% | 169,362,607 | 39,229,860,133.4% | 4641日11時間 | 負ける見込みが高い |
| +20（Lv30） | 0% | 300% | 80.6% | 26.6% | 30.6% | 102,915,601.1 | 22,677,116,201.9% | 2302日21時間 | 負ける見込みが高い |
| +30（Lv40） | 0% | 300% | 86.2% | 30.7% | 39.8% | 64,169,154.5 | 13,343,242,569.7% | 1172日9時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時（天空のお庭） | 経験値%/時（爆発武器） |
| --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv10） | 2.9秒 | 50% | 1.66 | 0 | 0 | 0 |
| +10（Lv20） | 2.4秒 | 60% | 0.9 | 0 | 0 | 0 |
| +20（Lv30） | 1.9秒 | 69.2% | 0.49 | 0 | 0 | 0 |
| +30（Lv40） | 1.6秒 | 77.1% | 0.27 | 0 | 0 | 0 |

レベル差＝系統のカテゴリのレベル − 系統の必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | -0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9c95b5"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><img class="wiki-icon" src="assets/icon/e8f5c81d046cfb80.svg" alt="">星屑集め</a> ・ <a href="#/ja/action/haze-grove"><img class="wiki-icon" src="assets/icon/1f5e709acf8c7dbb.svg" alt="">霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><img class="wiki-icon" src="assets/icon/49fc2f62b2003f67.svg" alt="">雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><img class="wiki-icon" src="assets/icon/300032c34ac7363c.svg" alt="">司祭</a> ・ <a href="#/ja/action/cat-limousine"><img class="wiki-icon" src="assets/icon/52aeba6fbc728c0d.svg" alt="">ねこリムジン</a> ・ <a href="#/ja/action/valkyrie"><img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー</a> ・ <a href="#/ja/action/paladin"><img class="wiki-icon" src="assets/icon/0f2bdf78d9abe485.svg" alt="">パラディン</a> ・ <a href="#/ja/action/pegasus"><img class="wiki-icon" src="assets/icon/9635026f25519f71.svg" alt="">ペガサス</a> ・ <a href="#/ja/action/seraph"><img class="wiki-icon" src="assets/icon/9f360fa4f10b66fb.svg" alt="">熾天使</a> ・ <a href="#/ja/action/spaghetti-monster"><img class="wiki-icon" src="assets/icon/394a604ae0c49dba.svg" alt="">スパゲッティモンスター</a> ・ <a href="#/ja/action/big-tanuki"><img class="wiki-icon" src="assets/icon/7fbc1f845aef614f.svg" alt="">大きなタヌキ？</a> ・ <a href="#/ja/action/colonel"><img class="wiki-icon" src="assets/icon/c1042b00a01b59d1.svg" alt="">大佐</a> ・ <a href="#/ja/action/angel"><img class="wiki-icon" src="assets/icon/cb264fde782cfa00.svg" alt="">天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><img class="wiki-icon" src="assets/icon/c9ceb66ca4ebf9e5.svg" alt="">雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><img class="wiki-icon" src="assets/icon/b6a2c1b24b809e3a.svg" alt="">天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><img class="wiki-icon" src="assets/icon/eb58fa75c41f87ab.svg" alt="">神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><img class="wiki-icon" src="assets/icon/6ddaf80260c8fae5.svg" alt="">世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `priest` |
| `category` | `sky-garden` |
| `discipline` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `1` |
| `disciplineLevel` | `10` |
| `experience` | `1.66` |
| `seconds` | `2.9` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 10 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "priest",
		"name": "司祭",
		"explanation": "神の教えを説く者。",
		"icon": {
			"emoji": "🙏",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/300032c34ac7363c.svg）"
		},
		"color": ""
	},
	"category": "sky-garden",
	"discipline": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 1,
	"disciplineLevel": 10,
	"experience": 1.66,
	"seconds": 2.9,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "cross-rosary",
			"count": 1,
			"chance": 0.00483,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "angels-lost-item",
			"count": 1,
			"chance": 0.00928
		},
		{
			"type": "item",
			"id": "sky-orb",
			"count": 1,
			"chance": 0.00146
		},
		{
			"type": "item",
			"id": "coin",
			"count": 1,
			"chance": 0.0145
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 365,
		"defence": 430,
		"accuracy": 16,
		"evasion": 12,
		"restore": 9
	},
	"skills": [
		"iron-wall",
		"salve"
	]
}
```

</details>
