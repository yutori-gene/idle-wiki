# ミュータント

<div class="wiki-infobox" style="--accent:#4e6a86"><div class="wiki-infobox-title">ミュータント</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧟</span></div><table><tr><th>場所</th><td><a href="#/ja/category/factory"><span class="wiki-icon">🏭</span>工場</a></td></tr><tr><th>経験値の入り先</th><td><a href="#/ja/category/melee-weapon"><span class="wiki-icon">⚔️</span>近接武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/hunt"><span class="wiki-icon">⚔️</span>討伐</a></td></tr><tr><th>進行</th><td>スタミナ（戦闘）</td></tr><tr><th>必要Lv</th><td>Lv32</td></tr><tr><th>所要時間</th><td>6分／ターン</td></tr><tr><th>成功率</th><td>50%</td></tr><tr><th>経験値</th><td>206</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 科学の失敗作。何に変異するか予測不可。


**スタミナ（戦闘）**: ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる。

## 必要なもの

- [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) Lv32以上（経験値の入り先カテゴリのレベル）
- [<span class="wiki-icon">🧬</span>Gウイルス](/ja/item/g-virus) ×1（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🥩</span>培養肉](/ja/item/cultured-meat) ×3 | 成功時 | 92.2% | 1.4 | 0.027 |
| [<span class="wiki-icon">🥩</span>ソイミート](/ja/item/soy-meat) ×2 | 成功時 | 57.6% | 0.576 | 0.011 |
| [<span class="wiki-icon">🛢️</span>廃油](/ja/item/waste-oil) ×2 | 成功時 | 40% | 0.4 | 0.008 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 50%（レベル差0・装備なし）で按分した値。

## 戦闘

敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。

| 敵の攻撃 | 敵の防御 | 敵の精度 | 敵の回避 | 敵の回復 |
| --- | --- | --- | --- | --- |
| 78 | 107 | 5 | 0 | 11 |

**敵のスキル**

- [<span class="wiki-icon">🌈</span>万能](/ja/skill/all-round)：毎ターン 3% で発動、攻撃+6・防御+6・精度+6・回避+6・回復+6

### 戦闘の見込み（装備・スキルなし）

| レベル差 | 攻撃（1ヒット） | 被ダメ（1ヒット） | 精度 | 回避 | 回復（1戦ごと） | 撃破ターン | 1戦の被ダメ | 1戦の時間 | 判定 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ±0（Lv32） | 0.261% | 14.6% | 75% | 23.1% | 15.3% | 510.7 | 5,723.6% | 2日3時間 | 負ける見込みが高い |
| +10（Lv42） | 0.392% | 11.9% | 81.8% | 26.9% | 21.3% | 312.9 | 2,721.8% | 1日1時間 | 負ける見込みが高い |

撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv32） | 6分 | 50% | 206 | 0 | 2 |
| +10（Lv42） | 4分54秒 | 60% | 137.33 | 0 | 3 |

レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 2 | 3 | -1 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#6b757c"><div class="wiki-navbox-title">工場のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/conveyor-scavenging"><span class="wiki-icon">🏭</span>ベルトコンベア漁り</a> ・ <a href="#/ja/action/tool-room-inventory"><span class="wiki-icon">🧰</span>工具室の棚卸し</a> ・ <a href="#/ja/action/scrap-gathering"><span class="wiki-icon">🔩</span>廃材拾い</a> ・ <a href="#/ja/action/bomb"><span class="wiki-icon">💣</span>ボム</a> ・ <a href="#/ja/action/mad-scientist"><span class="wiki-icon">🧪</span>マッドサイエンティスト</a> ・ <a href="#/ja/action/old-work-robot"><span class="wiki-icon">🤖</span>旧型作業ロボ</a> ・ <a href="#/ja/action/giant-crane"><span class="wiki-icon">🏗️</span>巨大クレーン</a> ・ <a href="#/ja/action/unmanned-forklift"><span class="wiki-icon">🚜</span>無人フォークリフト</a> ・ <a href="#/ja/action/security-drone"><span class="wiki-icon">🛸</span>警備ドローン</a> ・ <a href="#/ja/action/camera-swarm"><span class="wiki-icon">📹</span>監視カメラの群れ</a> ・ <a href="#/ja/action/mutant"><span class="wiki-icon">🧟</span>ミュータント</a> ・ <a href="#/ja/action/rampaging-robot"><span class="wiki-icon">🤖</span>暴走ロボット</a> ・ <a href="#/ja/action/press-machine"><span class="wiki-icon">⚙️</span>プレス機</a> ・ <a href="#/ja/action/central-control-room"><span class="wiki-icon">🖥️</span>中央制御室</a> ・ <a href="#/ja/action/sealed-research-wing"><span class="wiki-icon">🏢</span>封鎖された研究棟</a> ・ <a href="#/ja/action/contaminated-zone-survey"><span class="wiki-icon">☣️</span>汚染区画の調査</a> ・ <a href="#/ja/action/underground-disposal-plant"><span class="wiki-icon">☣️</span>地下廃棄プラント</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `mutant` |
| `category` | `factory` |
| `attribute` | `melee-weapon` |
| `group` | `hunt` |
| `unlocked` | `hidden` |
| `level` | `32` |
| `experience` | `206` |
| `seconds` | `360` |
| `chance` | `0.5` |
| `maximum` | `0` |
| `progressType` | `stamina` |
| CSV `tier` | 6 |
| CSV `memo` | 殴る・粘る |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0) ／ [plan.md › モンスター設定](/ja/dev/doc/plan?id=%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E8%A8%AD%E5%AE%9A) ／ [plan.md › スキルの雛形（Step 1-4 確定）](/ja/dev/doc/plan?id=%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-4-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "mutant",
		"name": "ミュータント",
		"explanation": "科学の失敗作。何に変異するか予測不可。",
		"icon": {
			"emoji": "🧟",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "factory",
	"attribute": "melee-weapon",
	"group": "hunt",
	"unlocked": "hidden",
	"level": 32,
	"experience": 206,
	"seconds": 360,
	"chance": 0.5,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "g-virus",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "cultured-meat",
			"count": 3,
			"chance": 0.922
		},
		{
			"type": "item",
			"id": "soy-meat",
			"count": 2,
			"chance": 0.576
		},
		{
			"type": "item",
			"id": "waste-oil",
			"count": 2,
			"chance": 0.4
		}
	],
	"progressType": "stamina",
	"property": {
		"attack": 78,
		"defence": 107,
		"accuracy": 5,
		"evasion": 0,
		"restore": 11
	},
	"skills": [
		"all-round"
	]
}
```

</details>
