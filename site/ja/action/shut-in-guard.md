# 自宅警備員

<div class="wiki-infobox" style="--accent:#606a74"><div class="wiki-infobox-title">自宅警備員</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏠</span></div><table><tr><th>場所</th><td><a href="#/ja/category/park"><span class="wiki-icon">🌳</span>公園</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv5</td></tr><tr><th>所要時間</th><td>2.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.26</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ホームガーディアン👮


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv5以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">📦</span>ダンボール](/ja/item/cardboard) ×1（3.67%で消費）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📦</span>ダンボール](/ja/item/cardboard) ×1 | 成功時 | 36.7% | 0.184 | 29.1 |
| [<span class="wiki-icon">🧹</span>ほうき](/ja/item/broom) ×1 | 成功時 | 0.076% | 0 | 0.06 |
| [<span class="wiki-icon">🔇</span>耳栓](/ja/item/earplug) ×1 | 成功時 | 0.317% | 0.002 | 0.251 |
| [<span class="wiki-icon">🧮</span>電卓](/ja/item/calculator) ×1 | 成功時 | 0.044% | 0 | 0.035 |
| [<span class="wiki-icon">🦴</span>小さな骨](/ja/item/small-bone) ×1 | 成功時 | 3.52% | 0.018 | 2.8 |
| [<span class="wiki-icon">🎽</span>タンクトップ](/ja/item/tank-top) ×1 | 成功時 | 3.52% | 0.018 | 2.8 |
| [<span class="wiki-icon">🥚</span>卵](/ja/item/egg) ×1 | 成功時 | 8.45% | 0.042 | 6.7 |
| [<span class="wiki-icon">🍩</span>食べられる指輪](/ja/item/edible-ring) ×1 | 成功時 | 8.45% | 0.042 | 6.7 |
| [<span class="wiki-icon">👛</span>財布](/ja/item/wallet) ×1 | 成功時 | 0.317% | 0.002 | 0.251 |
| [<span class="wiki-icon">🧄</span>ニンニク](/ja/item/garlic) ×1 | 成功時 | 3.67% | 0.018 | 2.9 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 20 | 5 | 5 | 0 | 13 |

**敵のスキル**

- [<span class="wiki-icon">😴</span>安眠](/ja/skill/sound-sleep)：毎ターン 12% で発動、回復+4
- [<span class="wiki-icon">💉</span>免疫](/ja/skill/immunity)：毎ターン 9% で発動、防御+6
- [<span class="wiki-icon">🧿</span>お守り](/ja/skill/charm)：毎ターン 12% で発動、防御+3
- [<span class="wiki-icon">😇</span>加護](/ja/skill/divine-protection)：毎ターン 11% で発動、回復+4

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 16.3% | 4.5% | 75% | 23.1% | 14.3% | 9.3 | 32.3% | 22.7秒 | 連戦で少しずつ消耗する |
| +10（Lv15） | 24.5% | 3.67% | 81.8% | 26.9% | 20% | 6.1 | 16.4% | 12.8秒 | 放置で連戦できる |
| +20（Lv25） | 36.7% | 3% | 87.1% | 31.1% | 27.3% | 3.4 | 7.12% | 6.5秒 | 放置で連戦できる |
| +30（Lv35） | 55.1% | 2.45% | 91% | 35.6% | 36% | 2.2 | 3.47% | 3.8秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv5） | 2.2秒 | 50% | 1.26 | 158.4 | 100 |
| +10（Lv15） | 1.8秒 | 60% | 0.84 | 281.8 | 142 |
| +20（Lv25） | 1.5秒 | 69.2% | 0.56 | 552.3 | 214 |
| +30（Lv35） | 1.2秒 | 77.1% | 0.37 | 940.2 | 271 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 341 | 52 | 289 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#697852"><div class="wiki-navbox-title">公園のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/gather-fallen-leaves"><span class="wiki-icon">🍂</span>落ち葉拾い</a> ・ <a href="#/ja/action/cleanup-activity"><span class="wiki-icon">🧹</span>清掃活動</a> ・ <a href="#/ja/action/dig-sandbox"><span class="wiki-icon">🏖️</span>砂場掘り</a> ・ <a href="#/ja/action/tend-flower-bed"><span class="wiki-icon">🌷</span>花壇の手入れ</a> ・ <a href="#/ja/action/pond-side"><span class="wiki-icon">🪷</span>池のほとり</a> ・ <a href="#/ja/action/giant-spider"><span class="wiki-icon">🕷️</span>巨大なクモ</a> ・ <a href="#/ja/action/shut-in-guard"><span class="wiki-icon">🏠</span>自宅警備員</a> ・ <a href="#/ja/action/pavlovs-dog"><span class="wiki-icon">🐕</span>パブロフの犬</a> ・ <a href="#/ja/action/beetle"><span class="wiki-icon">🪲</span>カブトムシ</a> ・ <a href="#/ja/action/snail"><span class="wiki-icon">🐌</span>カタツムリ</a> ・ <a href="#/ja/action/deep-in-the-bushes"><span class="wiki-icon">🌳</span>茂みの奥</a> ・ <a href="#/ja/action/twilight-promenade"><span class="wiki-icon">🌇</span>夕暮れの散歩道</a> ・ <a href="#/ja/action/boathouse"><span class="wiki-icon">🛶</span>ボート小屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `shut-in-guard` |
| `category` | `park` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `5` |
| `experience` | `1.26` |
| `seconds` | `2.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 1 |
| CSV `memo` | 殴る・粘る／ボス |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "shut-in-guard",
		"name": "自宅警備員",
		"explanation": "ホームガーディアン👮",
		"icon": {
			"emoji": "🏠",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "park",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 5,
	"experience": 1.26,
	"seconds": 2.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "cardboard",
			"count": 1,
			"chance": 0.0367,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "cardboard",
			"count": 1,
			"chance": 0.367
		},
		{
			"type": "item",
			"id": "broom",
			"count": 1,
			"chance": 0.000759
		},
		{
			"type": "item",
			"id": "earplug",
			"count": 1,
			"chance": 0.00317
		},
		{
			"type": "item",
			"id": "calculator",
			"count": 1,
			"chance": 0.000436
		},
		{
			"type": "item",
			"id": "small-bone",
			"count": 1,
			"chance": 0.0352
		},
		{
			"type": "item",
			"id": "tank-top",
			"count": 1,
			"chance": 0.0352
		},
		{
			"type": "item",
			"id": "egg",
			"count": 1,
			"chance": 0.0845
		},
		{
			"type": "item",
			"id": "edible-ring",
			"count": 1,
			"chance": 0.0845
		},
		{
			"type": "item",
			"id": "wallet",
			"count": 1,
			"chance": 0.00317
		},
		{
			"type": "item",
			"id": "garlic",
			"count": 1,
			"chance": 0.0367
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 20,
		"defence": 5,
		"accuracy": 5,
		"evasion": 0,
		"restore": 13
	},
	"skills": [
		"sound-sleep",
		"immunity",
		"charm",
		"divine-protection"
	]
}
```

</details>
