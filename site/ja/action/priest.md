# 司祭

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">司祭</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/300032c34ac7363c.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/sky-garden"><img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><img class="wiki-icon" src="assets/icon/808e242506a56d5f.svg" alt="">討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv48</td></tr><tr><th>所要時間</th><td>2.9秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.66</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 神の教えを説く者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv48以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">📿</span>十字架のロザリオ](/ja/item/cross-rosary) ×1（0.483%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">😇</span>天使の落とし物](/ja/item/angels-lost-item) ×1 | 成功時 | 0.928% | 0.005 | 0 |
| [<span class="wiki-icon">💎</span>天空の宝玉](/ja/item/sky-orb) ×1 | 成功時 | 0.146% | 0.001 | 0 |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×1 | 成功時 | 1.45% | 0.007 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 331 | 580 | 10 | 0 | 1 |

**敵のスキル**

- [<span class="wiki-icon">🏰</span>鉄壁](/ja/skill/iron-wall)：毎ターン 4% で発動、防御+10・精度+3・回避+6・回復+5
- [<span class="wiki-icon">💊</span>傷薬](/ja/skill/salve)：毎ターン 10% で発動、回復+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv48） | 0% | 300% | 75% | 21.4% | 21.3% | 108,943,611,013.3 | 25,690,904,690,438.9% | 3656672日3時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv48） | 2.9秒 | 50% | 1.66 | 0 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 0 | 0 | -0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9c95b5"><div class="wiki-navbox-title">天空のお庭のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/stardust-gathering"><span class="wiki-icon">✨</span>星屑集め</a> ・ <a href="#/ja/action/haze-grove"><span class="wiki-icon">🌫️</span>霞の林</a> ・ <a href="#/ja/action/tend-cloud-field"><span class="wiki-icon">☁️</span>雲の畑の手入れ</a> ・ <a href="#/ja/action/priest"><img class="wiki-icon" src="assets/icon/300032c34ac7363c.svg" alt="">司祭</a> ・ <a href="#/ja/action/big-tanuki"><span class="wiki-icon">🦝</span>大きなタヌキ？</a> ・ <a href="#/ja/action/valkyrie"><img class="wiki-icon" src="assets/icon/ae58041401b3054b.svg" alt="">ヴァルキリー</a> ・ <a href="#/ja/action/spaghetti-monster"><span class="wiki-icon">🍝</span>スパゲッティモンスター</a> ・ <a href="#/ja/action/cat-limousine"><span class="wiki-icon">🚗</span>ねこリムジン</a> ・ <a href="#/ja/action/colonel"><span class="wiki-icon">🎖️</span>大佐</a> ・ <a href="#/ja/action/pegasus"><span class="wiki-icon">🦄</span>ペガサス</a> ・ <a href="#/ja/action/angel"><span class="wiki-icon">😇</span>天使</a> ・ <a href="#/ja/action/paladin"><span class="wiki-icon">🛡️</span>パラディン</a> ・ <a href="#/ja/action/seraph"><span class="wiki-icon">😇</span>熾天使</a> ・ <a href="#/ja/action/ruins-above-clouds"><span class="wiki-icon">☁️</span>雲上の遺跡</a> ・ <a href="#/ja/action/sky-library"><span class="wiki-icon">📚</span>天空の図書館</a> ・ <a href="#/ja/action/temple-innermost"><span class="wiki-icon">🏛️</span>神殿の最奥</a> ・ <a href="#/ja/action/world-tree-root"><span class="wiki-icon">🌳</span>世界樹の根元</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `priest` |
| `category` | `sky-garden` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `48` |
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
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 48,
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
		"attack": 331,
		"defence": 580,
		"accuracy": 10,
		"evasion": 0,
		"restore": 1
	},
	"skills": [
		"iron-wall",
		"salve"
	]
}
```

</details>
