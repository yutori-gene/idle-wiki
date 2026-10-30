# 教祖

<div class="wiki-infobox" style="--accent:#968358"><div class="wiki-infobox-title">教祖</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🙏</span></div><table><tr><th>場所</th><td><a href="#/ja/category/town"><span class="wiki-icon">🏙️</span>街</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv14</td></tr><tr><th>所要時間</th><td>3.2秒／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>1.83</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> カリスマに満ちた危険な指導者。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv14以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🧔</span>つけ髭](/ja/item/fake-beard) ×1（装備が必要・消費しない）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📄</span>紙](/ja/item/paper) ×1 | 成功時 | 17.8% | 0.089 | 2.3 |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) ×1 | 成功時 | 5.33% | 0.027 | 0.68 |
| [<span class="wiki-icon">📒</span>裏帳簿](/ja/item/secret-ledger) ×1 | 成功時 | 0.005% | 0 | 0.001 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 48 | 45 | 8 | 1 | 3 |

**敵のスキル**

- [<span class="wiki-icon">💐</span>気品](/ja/skill/grace)：毎ターン 10% で発動、回避+5
- [<span class="wiki-icon">😠</span>威圧](/ja/skill/intimidation)：毎ターン 10% で発動、攻撃+5
- [<span class="wiki-icon">✨</span>祝福](/ja/skill/blessing)：毎ターン 8% で発動、回復+7
- [<span class="wiki-icon">🎖️</span>統率](/ja/skill/command)：毎ターン 11% で発動、精度+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv14） | 3.23% | 7.94% | 74.2% | 22.1% | 20% | 43.1 | 266.6% | 2分21秒 | 負ける見込みが高い |
| +10（Lv24） | 4.84% | 6.48% | 81.2% | 25.8% | 27.3% | 25.9 | 124.4% | 1分10秒 | 負ける見込みが高い |
| +20（Lv34） | 7.26% | 5.29% | 86.6% | 29.8% | 36% | 16.2 | 60% | 36.6秒 | 連戦で少しずつ消耗する |
| +30（Lv44） | 10.9% | 4.32% | 90.7% | 34.2% | 45.7% | 11 | 31.3% | 21秒 | 放置で連戦できる |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv14） | 3.2秒 | 50% | 1.83 | 25.5 | 23 |
| +10（Lv24） | 2.6秒 | 60% | 1.22 | 51.3 | 38 |
| +20（Lv34） | 2.1秒 | 69.2% | 0.81 | 98.3 | 55 |
| +30（Lv44） | 1.7秒 | 77.1% | 0.54 | 171.8 | 72 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 3 | 0 | 3 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#856654"><div class="wiki-navbox-title">街のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/alley-search"><span class="wiki-icon">🔦</span>路地裏の探し物</a> ・ <a href="#/ja/action/midnight-street"><span class="wiki-icon">🌃</span>深夜の路上</a> ・ <a href="#/ja/action/rummage-trash-can"><span class="wiki-icon">🗑️</span>ゴミ箱あさり</a> ・ <a href="#/ja/action/cult-leader"><span class="wiki-icon">🙏</span>教祖</a> ・ <a href="#/ja/action/bandit"><span class="wiki-icon">🗡️</span>山賊</a> ・ <a href="#/ja/action/stray-dog-pack"><span class="wiki-icon">🐕</span>野良犬の群れ</a> ・ <a href="#/ja/action/shaman"><span class="wiki-icon">🧙</span>シャーマン</a> ・ <a href="#/ja/action/doppelganger"><span class="wiki-icon">👥</span>ドッペルゲンガー</a> ・ <a href="#/ja/action/gremlin"><span class="wiki-icon">👺</span>グレムリン</a> ・ <a href="#/ja/action/zombie"><span class="wiki-icon">🧟</span>ゾンビ</a> ・ <a href="#/ja/action/wizard"><span class="wiki-icon">🧙</span>魔法使い</a> ・ <a href="#/ja/action/thief"><span class="wiki-icon">🥷</span>盗賊</a> ・ <a href="#/ja/action/bounty-hunter"><span class="wiki-icon">🤠</span>賞金稼ぎ</a> ・ <a href="#/ja/action/sewer-rat"><span class="wiki-icon">🐀</span>ドブネズミ</a> ・ <a href="#/ja/action/condemned-building"><span class="wiki-icon">🏚️</span>取り壊し前の廃ビル</a> ・ <a href="#/ja/action/sewer-rumor"><span class="wiki-icon">🕳️</span>地下水路の噂</a> ・ <a href="#/ja/action/backstreet-informant"><span class="wiki-icon">🕵️</span>裏通りの情報屋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cult-leader` |
| `category` | `town` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `14` |
| `experience` | `1.83` |
| `seconds` | `3.2` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 3 |
| CSV `memo` | ボス（硬い） |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cult-leader",
		"name": "教祖",
		"explanation": "カリスマに満ちた危険な指導者。",
		"icon": {
			"emoji": "🙏",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "town",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 14,
	"experience": 1.83,
	"seconds": 3.2,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "fake-beard",
			"count": 1,
			"chance": 0,
			"equipment": true
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "paper",
			"count": 1,
			"chance": 0.178
		},
		{
			"type": "item",
			"id": "coin",
			"count": 1,
			"chance": 0.0533
		},
		{
			"type": "item",
			"id": "secret-ledger",
			"count": 1,
			"chance": 0.0000532
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 48,
		"defence": 45,
		"accuracy": 8,
		"evasion": 1,
		"restore": 3
	},
	"skills": [
		"grace",
		"intimidation",
		"blessing",
		"command"
	]
}
```

</details>
