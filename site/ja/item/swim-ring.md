# 浮き輪

<div class="wiki-infobox" style="--accent:#3a4047"><div class="wiki-infobox-title">浮き輪</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🏊</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/armor"><span class="wiki-icon">🛡️</span>防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/leg-armor"><span class="wiki-icon">👖</span>脚部装備</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>36 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 海で最も頼れる友。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 | 回避 |
| --- | --- | --- |
| [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | +10 | +6 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏖️</span>漂着物回収](/ja/action/flotsam-collecting) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv1 | 1 | 8.64% | 0.043 | 3.9 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏊</span>浮き輪（分解）](/ja/action/disassemble-swim-ring) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv22 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#3a4047"><div class="wiki-navbox-title">グループ: 脚部装備</div><div class="wiki-navbox-body"><a href="#/ja/item/smelly-socks"><span class="wiki-icon">🧦</span>臭う靴下</a> ・ <a href="#/ja/item/slippers"><span class="wiki-icon">🩴</span>スリッパ</a> ・ <a href="#/ja/item/wooden-clogs"><span class="wiki-icon">👞</span>木靴</a> ・ <a href="#/ja/item/leg-warmer"><span class="wiki-icon">🧦</span>レッグウォーマー</a> ・ <a href="#/ja/item/cowboy-boots"><span class="wiki-icon">🥾</span>カウボーイブーツ</a> ・ <a href="#/ja/item/safety-shoes"><span class="wiki-icon">👞</span>安全靴</a> ・ <a href="#/ja/item/swim-ring"><span class="wiki-icon">🏊</span>浮き輪</a> ・ <a href="#/ja/item/squeaky-shoes"><span class="wiki-icon">👟</span>音が鳴る靴</a> ・ <a href="#/ja/item/ice-skate"><span class="wiki-icon">⛸️</span>アイススケート</a> ・ <a href="#/ja/item/silk-leggings"><span class="wiki-icon">🧦</span>絹の足袷</a> ・ <a href="#/ja/item/leather-boots"><span class="wiki-icon">🥾</span>革のブーツ</a> ・ <a href="#/ja/item/iron-greaves"><span class="wiki-icon">🦵</span>鉄の脇当て</a> ・ <a href="#/ja/item/high-heels"><span class="wiki-icon">👠</span>ハイヒール</a> ・ <a href="#/ja/item/kick-boost-shoes"><span class="wiki-icon">👟</span>キック力増強シューズ</a> ・ <a href="#/ja/item/glass-slipper"><span class="wiki-icon">👠</span>ガラスの靴</a> ・ <a href="#/ja/item/rabbit-tail"><span class="wiki-icon">🐇</span>ウサギ尻尾</a> ・ <a href="#/ja/item/odm-boots"><span class="wiki-icon">🥾</span>立体機動ブーツ</a> ・ <a href="#/ja/item/winged-shoes"><span class="wiki-icon">👟</span>羽のついた靴</a> ・ <a href="#/ja/item/warp-star"><span class="wiki-icon">⭐</span>ワープスター</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `swim-ring` |
| `category` | `armor` |
| `group` | `leg-armor` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `36` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "swim-ring",
		"name": "浮き輪",
		"explanation": "海で最も頼れる友。",
		"icon": {
			"emoji": "🏊",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"group": "leg-armor",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 36,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "throwing-weapon",
			"attack": 0,
			"defence": 10,
			"accuracy": 0,
			"evasion": 6,
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
