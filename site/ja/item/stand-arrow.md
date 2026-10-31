# スタンドの矢

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">スタンドの矢</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏹</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>50%</td></tr><tr><th>売値</th><td>7,290 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/full-volley"><span class="wiki-icon">🚀</span>全弾発射</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 人間の隠れた力を解放する矢。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。使うたびに 50% の確率で消費する。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 | 精度 |
| --- | --- | --- |
| [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | +95 | +10 |


**スキル**: [<span class="wiki-icon">🚀</span>全弾発射](/ja/skill/full-volley)（装備中、戦闘の各ターンに 4% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏹</span>スタンドの矢](/ja/action/craft-stand-arrow) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv50 | 133 | 100% | 133 | 26.6 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv48以上

<div class="wiki-navbox" style="--accent:#656a5a"><div class="wiki-navbox-title">グループ: 投擲武器</div><div class="wiki-navbox-body"><a href="#/ja/item/acorn-shot"><img class="wiki-icon" src="assets/icon/0d8c280279f44520.svg" alt="">どんぐりショット</a> ・ <a href="#/ja/item/bee"><img class="wiki-icon" src="assets/icon/77a6a1e5850f8a19.svg" alt="">ハチ</a> ・ <a href="#/ja/item/blowgun"><span class="wiki-icon">🎯</span>吹き矢</a> ・ <a href="#/ja/item/dart"><span class="wiki-icon">🎯</span>ダーツ</a> ・ <a href="#/ja/item/snowball"><span class="wiki-icon">⛄</span>雪玉</a> ・ <a href="#/ja/item/brick"><span class="wiki-icon">🧱</span>レンガ</a> ・ <a href="#/ja/item/slingshot"><img class="wiki-icon" src="assets/icon/ecb72fbdd535a34d.svg" alt="">スリングショット</a> ・ <a href="#/ja/item/fishing-rod"><span class="wiki-icon">🎣</span>釣竿</a> ・ <a href="#/ja/item/turtle-shell"><span class="wiki-icon">🐢</span>カメの甲羅</a> ・ <a href="#/ja/item/sea-urchin"><span class="wiki-icon">🦔</span>ウニ</a> ・ <a href="#/ja/item/dvd"><span class="wiki-icon">💿</span>DVD</a> ・ <a href="#/ja/item/rocket-punch"><span class="wiki-icon">👊</span>ロケットパンチ</a> ・ <a href="#/ja/item/whip-of-love"><span class="wiki-icon">🪢</span>愛の鞭</a> ・ <a href="#/ja/item/tomahawk"><span class="wiki-icon">🪓</span>トマホーク</a> ・ <a href="#/ja/item/blown-kiss"><span class="wiki-icon">💋</span>投げキッス</a> ・ <a href="#/ja/item/soccer-ball"><span class="wiki-icon">⚽</span>サッカーボール</a> ・ <a href="#/ja/item/carrot-and-stick"><span class="wiki-icon">🍬</span>飴と鞭</a> ・ <a href="#/ja/item/batarang"><span class="wiki-icon">🦇</span>バットラング</a> ・ <a href="#/ja/item/monster-ball"><span class="wiki-icon">🔴</span>モンスターボール</a> ・ <a href="#/ja/item/recorder-of-time"><span class="wiki-icon">🎼</span>時のリコーダー</a> ・ <a href="#/ja/item/russian-roulette"><span class="wiki-icon">🔫</span>ロシアンルーレット</a> ・ <a href="#/ja/item/spear-of-longinus"><span class="wiki-icon">🔱</span>ロンギヌスの槍</a> ・ <a href="#/ja/item/stand-arrow"><span class="wiki-icon">🏹</span>スタンドの矢</a> ・ <a href="#/ja/item/tuna-rocket"><span class="wiki-icon">🚀</span>マグロケット</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `stand-arrow` |
| `category` | `throwing-weapon` |
| `group` | `throwing-weapon` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `7290` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `0.5` |
| `skill` | `full-volley` |
| CSV `tier` | 10 |
| CSV `rare` | 6 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "stand-arrow",
		"name": "スタンドの矢",
		"explanation": "人間の隠れた力を解放する矢。",
		"icon": {
			"emoji": "🏹",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "throwing-weapon",
	"group": "throwing-weapon",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 7290,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 0.5,
	"requirements": [
		{
			"type": "category",
			"id": "throwing-weapon",
			"count": 48,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [
		{
			"category": "",
			"attack": 95,
			"defence": 0,
			"accuracy": 10,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "full-volley"
}
```

</details>
