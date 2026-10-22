# 無人フォークリフト

<div class="wiki-infobox" style="--accent:#cf9a1f"><div class="wiki-infobox-title">無人フォークリフト</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🚜</span></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><span class="wiki-icon">🏭</span>工場</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv30</td></tr><tr><th>所要時間</th><td>6分／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>206</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 荷物は積んでいない。それでも同じ速度で近づいてくる。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv30以上（経験値の入り先カテゴリのレベル）

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔩</span>ボルト](/ja/item/bolt) ×7 | 成功時 | 80% | 2.8 | 0.018 |
| [<span class="wiki-icon">⚙️</span>動力炉の残骸](/ja/item/reactor-debris) ×2 | 成功時 | 69.1% | 0.691 | 0.004 |
| [<span class="wiki-icon">🤖</span>自動化装置](/ja/item/automation-device) ×1 | 成功時 | 10.4% | 0.052 | 0 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 77 | 135 | 5 | 0 | 0 |

**敵のスキル**

- [<span class="wiki-icon">🪖</span>耐衝撃](/ja/skill/shock-resistance)：毎ターン 10% で発動、防御+5

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv30） | 0.084% | 14.3% | 75% | 23.1% | 22% | 1,589.3 | 17,455.9% | 6日15時間 | 負ける見込みが高い |
| +10（Lv40） | 0.126% | 11.7% | 81.8% | 26.9% | 29.7% | 971.7 | 8,282.7% | 3日7時間 | 負ける見込みが高い |
| +20（Lv50） | 0.189% | 9.53% | 87.1% | 31.1% | 38.8% | 608.5 | 3,993.4% | 1日16時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv30） | 6分 | 50% | 206 | 0 | 1 |
| +10（Lv40） | 4分54秒 | 60% | 137.33 | 0 | 1 |
| +20（Lv50） | 4分 | 69.2% | 91.56 | 0 | 2 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 1 | 0 | 1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b757c"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><span class="wiki-icon">🏭</span>ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><span class="wiki-icon">🧰</span>工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><span class="wiki-icon">🔩</span>廃材拾い</a> ・ <a href="#/ja/action/bomb"><span class="wiki-icon">💣</span>ボム</a> ・ <a href="#/ja/action/mad-scientist"><span class="wiki-icon">🧪</span>マッドサイエンティスト</a> ・ <a href="#/ja/action/old-work-robot"><span class="wiki-icon">🤖</span>旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><span class="wiki-icon">🏗️</span>巨大クレーン</a> ・ <a href="#/ja/action/unmanned-forklift"><span class="wiki-icon">🚜</span>無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><span class="wiki-icon">🛸</span>警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><span class="wiki-icon">📹</span>監視カメラの群れ</a> ・ <a href="#/ja/action/mutant"><span class="wiki-icon">🧟</span>ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><span class="wiki-icon">🤖</span>暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><span class="wiki-icon">⚙️</span>プレス機</a> ・ <a href="#/ja/action/central-control-room"><span class="wiki-icon">🖥️</span>中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><span class="wiki-icon">🏢</span>封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><span class="wiki-icon">☣️</span>汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><span class="wiki-icon">☣️</span>地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `unmanned-forklift` |
| `category` | `factory` |
| `attribute` | `explosive-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `30` |
| `experience` | `206` |
| `seconds` | `360` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 6 |
| CSV `memo` | 硬い |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "unmanned-forklift",
		"name": "無人フォークリフト",
		"explanation": "荷物は積んでいない。それでも同じ速度で近づいてくる。",
		"icon": {
			"emoji": "🚜",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "factory",
	"attribute": "explosive-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 30,
	"experience": 206,
	"seconds": 360,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [],
	"acquisitions": [
		{
			"type": "item",
			"id": "bolt",
			"count": 7,
			"chance": 0.8
		},
		{
			"type": "item",
			"id": "reactor-debris",
			"count": 2,
			"chance": 0.691
		},
		{
			"type": "item",
			"id": "automation-device",
			"count": 1,
			"chance": 0.104
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 77,
		"defence": 135,
		"accuracy": 5,
		"evasion": 0,
		"restore": 0
	},
	"skills": [
		"shock-resistance"
	]
}
```

</details>
