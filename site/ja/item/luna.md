# ルナ

<div class="wiki-infobox" style="--accent:#c26a8e"><div class="wiki-infobox-title">ルナ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌙</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/pet"><span class="wiki-icon">🐾</span>ペット</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 月のような瞳を持つ。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 成功率 |
| --- | --- |
| 全カテゴリ | +4 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💀</span>ネクロマンサー](/ja/action/necromancer) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | Lv39 | 1 | 0.717% | 0.004 | 0 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🌙</span>ルナを月に連れていく](/ja/action/take-luna-to-moon) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | [<span class="wiki-icon">🌙</span>ルナ](/ja/item/luna) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#c26a8e"><div class="wiki-navbox-title">グループ: ペット</div><div class="wiki-navbox-body"><a href="#/ja/item/chick"><span class="wiki-icon">🐥</span>ヒヨコ</a> ・ <a href="#/ja/item/killifish"><span class="wiki-icon">🐟</span>メダカ</a> ・ <a href="#/ja/item/hamster"><span class="wiki-icon">🐹</span>ハムスター</a> ・ <a href="#/ja/item/walking-cactus"><span class="wiki-icon">🌵</span>歩くサボテン</a> ・ <a href="#/ja/item/chicken"><span class="wiki-icon">🐔</span>ニワトリ</a> ・ <a href="#/ja/item/underdog"><span class="wiki-icon">🐕</span>負け犬</a> ・ <a href="#/ja/item/duck"><span class="wiki-icon">🦆</span>アヒル</a> ・ <a href="#/ja/item/jones"><span class="wiki-icon">🎩</span>ジョーンズ</a> ・ <a href="#/ja/item/turtle"><span class="wiki-icon">🐢</span>カメ</a> ・ <a href="#/ja/item/parroting-parrot"><span class="wiki-icon">🦜</span>オウム返しするオウム</a> ・ <a href="#/ja/item/pen-pen"><span class="wiki-icon">🐧</span>ペンペン</a> ・ <a href="#/ja/item/r2d2"><span class="wiki-icon">🤖</span>R2D2</a> ・ <a href="#/ja/item/flame-fox"><span class="wiki-icon">🦊</span>炎のキツネ</a> ・ <a href="#/ja/item/kero-chan"><span class="wiki-icon">🐸</span>ケロちゃん</a> ・ <a href="#/ja/item/five-color-cat"><span class="wiki-icon">🐱</span>五毛猫</a> ・ <a href="#/ja/item/luna"><span class="wiki-icon">🌙</span>ルナ</a> ・ <a href="#/ja/item/flying-goldfish"><span class="wiki-icon">🐠</span>空飛ぶ金魚</a> ・ <a href="#/ja/item/flying-pig"><span class="wiki-icon">🐷</span>空飛ぶブタ</a> ・ <a href="#/ja/item/nine-tailed-fox"><span class="wiki-icon">🦊</span>九尾の狐</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `luna` |
| `category` | `garden` |
| `group` | `pet` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `skill` | （空） |
| CSV `tier` | 8 |
| CSV `rare` | 7 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › ペット設計](/ja/dev/doc/plan?id=%E3%83%9A%E3%83%83%E3%83%88%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "luna",
		"name": "ルナ",
		"explanation": "月のような瞳を持つ。",
		"icon": {
			"emoji": "🌙",
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
			"chance": 4,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
