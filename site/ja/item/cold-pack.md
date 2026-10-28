# 保冷剤

<div class="wiki-infobox" style="--accent:#6d4f9c"><div class="wiki-infobox-title">保冷剤</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧊</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/basement"><span class="wiki-icon">⚗️</span>地下室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/potion"><span class="wiki-icon">🧪</span>ポーション</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>20%</td></tr><tr><th>売値</th><td>5 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/harden-drug"><span class="wiki-icon">🥤</span>硬化薬</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 溶けるスピードは3倍速。時間との勝負。


## 性能

**スキル**: [<span class="wiki-icon">🥤</span>硬化薬](/ja/skill/harden-drug)（装備中、戦闘の各ターンに 15% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧊</span>保冷剤の調合](/ja/action/brew-cold-pack) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv19 | 91 | 100% | 45.5 | 455 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) Lv8以上

<div class="wiki-navbox" style="--accent:#6d4f9c"><div class="wiki-navbox-title">グループ: ポーション</div><div class="wiki-navbox-body"><a href="#/ja/item/wound-medicine"><span class="wiki-icon">💊</span>キズ薬</a> ・ <a href="#/ja/item/bandage"><span class="wiki-icon">🩹</span>絆創膏</a> ・ <a href="#/ja/item/cold-medicine"><span class="wiki-icon">💊</span>風邪薬</a> ・ <a href="#/ja/item/bubbling-medicine"><span class="wiki-icon">🧪</span>泡立つ薬</a> ・ <a href="#/ja/item/opium"><span class="wiki-icon">💊</span>阿片</a> ・ <a href="#/ja/item/heat-pack"><span class="wiki-icon">🔥</span>カイロ</a> ・ <a href="#/ja/item/eye-drops"><span class="wiki-icon">👁️</span>目薬</a> ・ <a href="#/ja/item/glowing-medicine"><span class="wiki-icon">✨</span>発光する薬</a> ・ <a href="#/ja/item/ether"><span class="wiki-icon">🧪</span>エーテル</a> ・ <a href="#/ja/item/cold-pack"><span class="wiki-icon">🧊</span>保冷剤</a> ・ <a href="#/ja/item/insect-repellent"><span class="wiki-icon">🦟</span>むしよけスプレー</a> ・ <a href="#/ja/item/painkiller"><span class="wiki-icon">💊</span>鎮痛剤</a> ・ <a href="#/ja/item/anti-drowsiness"><span class="wiki-icon">☕</span>眠気覚まし</a> ・ <a href="#/ja/item/phoenix-tail"><span class="wiki-icon">🐦‍🔥</span>フェニックスの尾</a> ・ <a href="#/ja/item/laxative"><span class="wiki-icon">💊</span>下剤</a> ・ <a href="#/ja/item/poison-vial"><span class="wiki-icon">🧪</span>毒瓶</a> ・ <a href="#/ja/item/laxative-for-gorilla"><span class="wiki-icon">💊</span>下剤（ゴリラ用）</a> ・ <a href="#/ja/item/tonic"><span class="wiki-icon">💊</span>滋養強壮剤</a> ・ <a href="#/ja/item/vaccine"><span class="wiki-icon">💉</span>ワクチン</a> ・ <a href="#/ja/item/lcl"><span class="wiki-icon">🧪</span>LCL</a> ・ <a href="#/ja/item/holy-water"><span class="wiki-icon">💧</span>聖水</a> ・ <a href="#/ja/item/revive-piece"><span class="wiki-icon">💊</span>げんきのかけら</a> ・ <a href="#/ja/item/panacea"><span class="wiki-icon">💊</span>万能薬</a> ・ <a href="#/ja/item/bottled-spirit"><span class="wiki-icon">🧞</span>精霊の入ったビン</a> ・ <a href="#/ja/item/elixir"><span class="wiki-icon">🧪</span>エリクサー</a> ・ <a href="#/ja/item/felix-felicis"><span class="wiki-icon">🍀</span>フェリックスフェリシス</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cold-pack` |
| `category` | `basement` |
| `group` | `potion` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `5` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `0.2` |
| `skill` | `harden-drug` |
| CSV `tier` | 5 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 消耗チャネル＝料理とポーション（確定）](/ja/dev/doc/plan?id=%E6%B6%88%E8%80%97%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%EF%BC%9D%E6%96%99%E7%90%86%E3%81%A8%E3%83%9D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%88%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cold-pack",
		"name": "保冷剤",
		"explanation": "溶けるスピードは3倍速。時間との勝負。",
		"icon": {
			"emoji": "🧊",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "basement",
	"group": "potion",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 5,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 0.2,
	"requirements": [
		{
			"type": "category",
			"id": "northland",
			"count": 8,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [],
	"skill": "harden-drug"
}
```

</details>
