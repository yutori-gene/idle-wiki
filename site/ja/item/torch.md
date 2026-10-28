# 松明

<div class="wiki-infobox" style="--accent:#2f3f52"><div class="wiki-infobox-title">松明</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔥</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/armor"><span class="wiki-icon">🛡️</span>防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/arm-armor"><span class="wiki-icon">🧤</span>腕部装備</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>45 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 暗闇を照らす古代の光。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。使うたびに消費する。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 | 精度 |
| --- | --- | --- |
| [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | +12 | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐦‍🔥</span>フェニックス](/ja/action/phoenix) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv23 | 1 | 0.087% | 0 | 0.014 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🦣</span>マンモス](/ja/action/mammoth) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | Lv25 | 1 | 0.833% |  |
| [<span class="wiki-icon">🦇</span>コウモリ](/ja/action/bat) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv45 | 1 | 0.185% |  |
| [<span class="wiki-icon">🔥</span>松明を分解する](/ja/action/disassemble-torch) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv27 | 1 | 100% |  |

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">🎃</span>かぼちゃの馬車を開ける](/ja/action/open-pumpkin-carriage) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | [<span class="wiki-icon">🔥</span>松明](/ja/item/torch) ×1（装備が必要・消費しない） |

<div class="wiki-navbox" style="--accent:#2f3f52"><div class="wiki-navbox-title">グループ: 腕部装備</div><div class="wiki-navbox-body"><a href="#/ja/item/mitten"><span class="wiki-icon">🧤</span>ミトン</a> ・ <a href="#/ja/item/cloth-gloves"><span class="wiki-icon">🧤</span>布の手袋</a> ・ <a href="#/ja/item/rubber-gloves"><span class="wiki-icon">🧤</span>ゴム手袋</a> ・ <a href="#/ja/item/back-scratcher"><span class="wiki-icon">🩱</span>孫の手</a> ・ <a href="#/ja/item/work-gloves"><span class="wiki-icon">🧤</span>軍手</a> ・ <a href="#/ja/item/cat-paw"><span class="wiki-icon">🐾</span>ネコの手</a> ・ <a href="#/ja/item/lantern"><span class="wiki-icon">🏮</span>ランタン</a> ・ <a href="#/ja/item/helping-hand"><span class="wiki-icon">🤲</span>救いの手</a> ・ <a href="#/ja/item/torch"><span class="wiki-icon">🔥</span>松明</a> ・ <a href="#/ja/item/six-finger-glove"><span class="wiki-icon">🧤</span>6本指の手袋</a> ・ <a href="#/ja/item/leather-gloves"><span class="wiki-icon">🧤</span>革の手袋</a> ・ <a href="#/ja/item/crab-claw"><span class="wiki-icon">🦀</span>カニのハサミ</a> ・ <a href="#/ja/item/iron-gauntlet"><span class="wiki-icon">🧤</span>鉄の籠手</a> ・ <a href="#/ja/item/anesthetic-watch"><span class="wiki-icon">⏰</span>麻酔時計</a> ・ <a href="#/ja/item/command-spell"><span class="wiki-icon">🔺</span>令呪</a> ・ <a href="#/ja/item/aegis"><span class="wiki-icon">🛡️</span>ゼウスの盾</a> ・ <a href="#/ja/item/contradiction"><span class="wiki-icon">🛡️</span>矛盾</a> ・ <a href="#/ja/item/infinity-gauntlet"><span class="wiki-icon">🧤</span>無限の手袋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `torch` |
| `category` | `armor` |
| `group` | `arm-armor` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `45` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 5 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "torch",
		"name": "松明",
		"explanation": "暗闇を照らす古代の光。",
		"icon": {
			"emoji": "🔥",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"group": "arm-armor",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 45,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "melee-weapon",
			"attack": 0,
			"defence": 12,
			"accuracy": 3,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
