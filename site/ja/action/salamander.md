# サラマンダー

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">サラマンダー</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦎</span></div><table><tr><th>場所</th><td><a href="#/ja/category/volcano"><span class="wiki-icon">🌋</span>火山</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv35</td></tr><tr><th>所要時間</th><td>1.3秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>0.74</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 火の妖精。その体は常に燃えている。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv35以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🪨</span>火打石](/ja/item/flint) ×1（0.31%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧞</span>精霊](/ja/item/spirit) ×1 | 成功時 | 0.713% | 0.004 | 0.08 |
| [<span class="wiki-icon">🌺</span>炎の花](/ja/item/flame-flower) ×1 | 成功時 | 0.297% | 0.001 | 0.033 |
| [<span class="wiki-icon">💎</span>ダイヤモンド](/ja/item/diamond) ×1 | 成功時 | 0.027% | 0 | 0.003 |
| [<span class="wiki-icon">🦊</span>炎のキツネ](/ja/item/flame-fox) ×1 | 成功時 | 0.002% | 0 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 148 | 68 | 0 | 12 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🐦</span>身軽](/ja/skill/light-footed)：毎ターン 4% で発動、防御-9・回避+12
- [<span class="wiki-icon">🤸</span>軽業](/ja/skill/acrobatics)：毎ターン 8% で発動、回避+7

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv35） | 1.27% | 60.3% | 64.8% | 25% | 22% | 121.8 | 5,508.5% | 2分40秒 | 負ける見込みが高い |
| +10（Lv45） | 1.9% | 49.2% | 73.4% | 29% | 29.7% | 72.2 | 2,522.1% | 1分18秒 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv35） | 1.3秒 | 50% | 0.74 | 22.5 | 8 |
| +10（Lv45） | 1.1秒 | 60% | 0.5 | 46.4 | 14 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 1 | 0 | 1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#8f6059"><div class="wiki-navbox-title">火山のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/hot-sand-slope"><span class="wiki-icon">🏜️</span>熱砂の斜面</a> ・ <a href="#/ja/action/hot-spring-sediment-scooping"><span class="wiki-icon">♨️</span>温泉の沈殿物すくい</a> ・ <a href="#/ja/action/buried-miner-town"><span class="wiki-icon">⛏️</span>埋もれた鉱夫町</a> ・ <a href="#/ja/action/lava-edge-mining"><span class="wiki-icon">⛏️</span>溶岩の縁の採掘</a> ・ <a href="#/ja/action/crater-crystal-gathering"><span class="wiki-icon">🔮</span>火口付近の結晶拾い</a> ・ <a href="#/ja/action/limestone-cave-ore-digging"><span class="wiki-icon">⛏️</span>鍾乳洞の鉱石掘り</a> ・ <a href="#/ja/action/lava-golem"><span class="wiki-icon">🗿</span>溶岩ゴーレム</a> ・ <a href="#/ja/action/furnace-keeper"><span class="wiki-icon">🔥</span>炉の番人</a> ・ <a href="#/ja/action/salamander"><span class="wiki-icon">🦎</span>サラマンダー</a> ・ <a href="#/ja/action/magma-worm"><span class="wiki-icon">🪱</span>マグマワーム</a> ・ <a href="#/ja/action/volcano-dragon"><span class="wiki-icon">🐉</span>火山竜</a> ・ <a href="#/ja/action/fire-drake"><span class="wiki-icon">🐉</span>ファイアドレイク</a> ・ <a href="#/ja/action/fire-eating-bird"><span class="wiki-icon">🐦‍🔥</span>火喰い鳥</a> ・ <a href="#/ja/action/obsidian-gargoyle"><span class="wiki-icon">🗿</span>黒曜石のガーゴイル</a> ・ <a href="#/ja/action/scorching-beetle"><span class="wiki-icon">🪲</span>灼熱の甲虫</a> ・ <a href="#/ja/action/ancient-lava-tube"><span class="wiki-icon">🌋</span>古代の溶岩洞</a> ・ <a href="#/ja/action/crater-floor"><span class="wiki-icon">🌋</span>火口の底</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `salamander` |
| `category` | `volcano` |
| `attribute` | `throwing-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `35` |
| `experience` | `0.743` |
| `seconds` | `1.3` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 7 |
| CSV `memo` | 避ける |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "salamander",
		"name": "サラマンダー",
		"explanation": "火の妖精。その体は常に燃えている。",
		"icon": {
			"emoji": "🦎",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "volcano",
	"attribute": "throwing-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 35,
	"experience": 0.743,
	"seconds": 1.3,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "flint",
			"count": 1,
			"chance": 0.0031,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "spirit",
			"count": 1,
			"chance": 0.00713
		},
		{
			"type": "item",
			"id": "flame-flower",
			"count": 1,
			"chance": 0.00297
		},
		{
			"type": "item",
			"id": "diamond",
			"count": 1,
			"chance": 0.000267
		},
		{
			"type": "item",
			"id": "flame-fox",
			"count": 1,
			"chance": 0.0000185
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 148,
		"defence": 68,
		"accuracy": 0,
		"evasion": 12,
		"restore": 0
	},
	"skills": [
		"light-footed",
		"acrobatics"
	]
}
```

</details>
