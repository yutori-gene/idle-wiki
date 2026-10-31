# 空飛ぶブタ

<div class="wiki-infobox" style="--accent:#a58793"><div class="wiki-infobox-title">空飛ぶブタ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐷</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/pet"><span class="wiki-icon">🐾</span>ペット</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ありえないことの象徴。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 成功率 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🦄</span>ペガサス](/ja/action/pegasus) | [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | Lv50 | 1 | 0.002% | 0 | 0 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🐷</span>空飛ぶブタ](/ja/action/ride-flying-pig) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | [<span class="wiki-icon">🐷</span>空飛ぶブタ](/ja/item/flying-pig) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#a58793"><div class="wiki-navbox-title">グループ: ペット</div><div class="wiki-navbox-body"><a href="#/ja/item/chick"><img class="wiki-icon" src="assets/icon/72b9b13ec0747c5c.svg" alt="">ピヨちゃん（ジュニア）</a> ・ <a href="#/ja/item/killifish"><img class="wiki-icon" src="assets/icon/c8e6d6901baabb54.svg" alt="">メダカ</a> ・ <a href="#/ja/item/hamster"><span class="wiki-icon">🐹</span>ハム右衛門</a> ・ <a href="#/ja/item/walking-cactus"><span class="wiki-icon">🌵</span>歩くサボテン</a> ・ <a href="#/ja/item/chicken"><img class="wiki-icon" src="assets/icon/a3c1b5f50f712b2e.svg" alt="">ピヨちゃん</a> ・ <a href="#/ja/item/underdog"><span class="wiki-icon">🐕</span>パブロフ</a> ・ <a href="#/ja/item/duck"><span class="wiki-icon">🦆</span>醜いアヒル</a> ・ <a href="#/ja/item/jones"><span class="wiki-icon">🎩</span>ジョーンズ</a> ・ <a href="#/ja/item/turtle"><span class="wiki-icon">🐢</span>クッパ</a> ・ <a href="#/ja/item/parroting-parrot"><span class="wiki-icon">🦜</span>オウム返しするオウム</a> ・ <a href="#/ja/item/pen-pen"><span class="wiki-icon">🐧</span>ペンペン</a> ・ <a href="#/ja/item/r2d2"><span class="wiki-icon">🤖</span>R2D2</a> ・ <a href="#/ja/item/flame-fox"><span class="wiki-icon">🦊</span>炎のキツネ</a> ・ <a href="#/ja/item/kero-chan"><span class="wiki-icon">🐸</span>ケロちゃん</a> ・ <a href="#/ja/item/fire-bird"><span class="wiki-icon">🐦‍🔥</span>炎の鳥</a> ・ <a href="#/ja/item/five-color-cat"><span class="wiki-icon">🐱</span>シュレーディンガー</a> ・ <a href="#/ja/item/flying-goldfish"><span class="wiki-icon">🐠</span>空飛ぶ金魚</a> ・ <a href="#/ja/item/flying-pig"><span class="wiki-icon">🐷</span>空飛ぶブタ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `flying-pig` |
| `category` | `garden` |
| `group` | `pet` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 10 |
| CSV `rare` | 7 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › ペット設計](/ja/dev/doc/plan?id=%E3%83%9A%E3%83%83%E3%83%88%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "flying-pig",
		"name": "空飛ぶブタ",
		"explanation": "ありえないことの象徴。",
		"icon": {
			"emoji": "🐷",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "garden",
	"group": "pet",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 3,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
