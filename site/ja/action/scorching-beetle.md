# 灼熱の甲虫

<div class="wiki-infobox" style="--accent:#cf9a1f"><div class="wiki-infobox-title">灼熱の甲虫</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪲</span></div><table><tr><th>場所</th><td><a href="#/ja/category/volcano"><span class="wiki-icon">🌋</span>火山</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv37</td></tr><tr><th>所要時間</th><td>7分／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>240</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 殻の下でまだ火が燃えている。潰すと燃え広がる。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv37以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔥</span>燃え殻](/ja/item/cinder) ×7 | 成功時 | 80% | 2.8 | 0.001 |
| [<span class="wiki-icon">🌋</span>マグマの欠片](/ja/item/magma-fragment) ×3 | 成功時 | 76.8% | 1.2 | 0.001 |
| [<span class="wiki-icon">⚫</span>黒曜石](/ja/item/obsidian) ×2 | 成功時 | 57.6% | 0.576 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 123 | 193 | 5 | 0 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🧱</span>堅牢](/ja/skill/sturdy)：毎ターン 5% で発動、防御+9・回避+5
- [<span class="wiki-icon">💣</span>誘爆](/ja/skill/induced-explosion)：毎ターン 5% で発動、攻撃+8・回避+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv37） | 0.008% | 36.3% | 75% | 23.1% | 22% | 16,690.7 | 465,813.3% | 81日3時間 | 負ける見込みが高い |
| +10（Lv47） | 0.012% | 29.7% | 81.8% | 26.9% | 29.7% | 10,200.7 | 220,950.8% | 40日11時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv37） | 7分 | 50% | 240 | 0 | 0 |
| +10（Lv47） | 5分43秒 | 60% | 160 | 0 | 0 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 0 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#c23b26"><div class="wiki-navbox-title">火山のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/hot-sand-slope"><span class="wiki-icon">🏜️</span>熱砂の斜面</a> ・ <a href="#/ja/action/hot-spring-sediment-scooping"><span class="wiki-icon">♨️</span>温泉の沈殿物すくい</a> ・ <a href="#/ja/action/buried-miner-town"><span class="wiki-icon">⛏️</span>埋もれた鉱夫町</a> ・ <a href="#/ja/action/lava-edge-mining"><span class="wiki-icon">⛏️</span>溶岩の縁の採掘</a> ・ <a href="#/ja/action/crater-crystal-gathering"><span class="wiki-icon">🔮</span>火口付近の結晶拾い</a> ・ <a href="#/ja/action/limestone-cave-ore-digging"><span class="wiki-icon">⛏️</span>鍾乳洞の鉱石掘り</a> ・ <a href="#/ja/action/lava-golem"><span class="wiki-icon">🗿</span>溶岩ゴーレム</a> ・ <a href="#/ja/action/furnace-keeper"><span class="wiki-icon">🔥</span>炉の番人</a> ・ <a href="#/ja/action/salamander"><span class="wiki-icon">🦎</span>サラマンダー</a> ・ <a href="#/ja/action/magma-worm"><span class="wiki-icon">🪱</span>マグマワーム</a> ・ <a href="#/ja/action/volcano-dragon"><span class="wiki-icon">🐉</span>火山竜</a> ・ <a href="#/ja/action/fire-drake"><span class="wiki-icon">🐉</span>ファイアドレイク</a> ・ <a href="#/ja/action/fire-eating-bird"><span class="wiki-icon">🐦‍🔥</span>火喰い鳥</a> ・ <a href="#/ja/action/obsidian-gargoyle"><span class="wiki-icon">🗿</span>黒曜石のガーゴイル</a> ・ <a href="#/ja/action/scorching-beetle"><span class="wiki-icon">🪲</span>灼熱の甲虫</a> ・ <a href="#/ja/action/ancient-lava-tube"><span class="wiki-icon">🌋</span>古代の溶岩洞</a> ・ <a href="#/ja/action/crater-floor"><span class="wiki-icon">🌋</span>火口の底</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `scorching-beetle` |
| `category` | `volcano` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `37` |
| `experience` | `240` |
| `seconds` | `420` |
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
		"id": "scorching-beetle",
		"name": "灼熱の甲虫",
		"explanation": "殻の下でまだ火が燃えている。潰すと燃え広がる。",
		"icon": {
			"emoji": "🪲",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "volcano",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 37,
	"experience": 240,
	"seconds": 420,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "cinder",
			"count": 7,
			"chance": 0.8
		},
		{
			"type": "item",
			"id": "magma-fragment",
			"count": 3,
			"chance": 0.768
		},
		{
			"type": "item",
			"id": "obsidian",
			"count": 2,
			"chance": 0.576
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 123,
		"defence": 193,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"skills": [
		"sturdy",
		"induced-explosion"
	]
}
```

</details>
