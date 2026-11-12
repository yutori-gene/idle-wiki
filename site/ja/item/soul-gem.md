# ソウルジェム

<div class="wiki-infobox" style="--accent:#886b86"><div class="wiki-infobox-title">ソウルジェム</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/193d23de3dc6fc90.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/accessory"><img class="wiki-icon" src="assets/icon/f78f0d1c14ad5a8d.svg" alt="">装飾</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ring"><img class="wiki-icon" src="assets/icon/8af37373ea914d8b.svg" alt="">指輪</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>1,944 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 魂が濁れば形を変える。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 回避 | 回復 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) | +15 |  |
| [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) |  | -6 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/89ba6d971c364db8.svg" alt="">聖櫃](/ja/action/open-ark-of-covenant) | [<img class="wiki-icon" src="assets/icon/9ddf45e3d3403688.svg" alt="">ロフト](/ja/category/loft) | Lv36 | 1 | 6.79% | 0.051 | 0.068 |

<div class="wiki-navbox" style="--accent:#886b86"><div class="wiki-navbox-title">グループ: 指輪</div><div class="wiki-navbox-body"><a href="#/ja/item/edible-ring"><img class="wiki-icon" src="assets/icon/eea6ffe630b18ce9.svg" alt="">食べられる指輪</a> ・ <a href="#/ja/item/silver-ring"><img class="wiki-icon" src="assets/icon/aba9e6b62053c166.svg" alt="">銀の指輪</a> ・ <a href="#/ja/item/baumkuchen"><img class="wiki-icon" src="assets/icon/30340ccfc5e4ad33.svg" alt="">バウムクーヘン</a> ・ <a href="#/ja/item/wedding-ring"><img class="wiki-icon" src="assets/icon/4db18debda606a73.svg" alt="">結婚指輪</a> ・ <a href="#/ja/item/stuck-ring"><img class="wiki-icon" src="assets/icon/70d4fce7ae348de1.svg" alt="">取れない指輪</a> ・ <a href="#/ja/item/smart-ring"><img class="wiki-icon" src="assets/icon/a6e200b891427258.svg" alt="">スマートリング</a> ・ <a href="#/ja/item/diamond-ring"><img class="wiki-icon" src="assets/icon/5b9f2b2c1b05c4bf.svg" alt="">ダイヤモンドの指輪</a> ・ <a href="#/ja/item/glowing-ring"><img class="wiki-icon" src="assets/icon/bdba805fcc83c98f.svg" alt="">光る指輪</a> ・ <a href="#/ja/item/spinning-ring"><img class="wiki-icon" src="assets/icon/a7e7b3eae28ac045.svg" alt="">高速回転してる指輪</a> ・ <a href="#/ja/item/ring-of-power"><img class="wiki-icon" src="assets/icon/1edd9c423bacf047.svg" alt="">力の指輪</a> ・ <a href="#/ja/item/red-string-of-fate"><img class="wiki-icon" src="assets/icon/f533145983e4c4e0.svg" alt="">運命の赤い糸</a> ・ <a href="#/ja/item/dragon-ring"><img class="wiki-icon" src="assets/icon/db647daaa6ffafe3.svg" alt="">ドラゴンの指輪</a> ・ <a href="#/ja/item/soul-gem"><img class="wiki-icon" src="assets/icon/193d23de3dc6fc90.svg" alt="">ソウルジェム</a> ・ <a href="#/ja/item/kryptonite"><img class="wiki-icon" src="assets/icon/d64f56743c8ca73e.svg" alt="">クリプトナイト</a> ・ <a href="#/ja/item/one-ring"><img class="wiki-icon" src="assets/icon/7eb5038393af1927.svg" alt="">一つの指輪</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `soul-gem` |
| `category` | `accessory` |
| `group` | `ring` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1944` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 8 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "soul-gem",
		"name": "ソウルジェム",
		"explanation": "魂が濁れば形を変える。",
		"icon": {
			"emoji": "💠",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/193d23de3dc6fc90.svg）"
		},
		"color": ""
	},
	"category": "accessory",
	"group": "ring",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1944,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "throwing-weapon",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 15,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		},
		{
			"category": "melee-weapon",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": -6,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
