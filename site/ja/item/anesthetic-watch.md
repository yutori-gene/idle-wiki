# 麻酔時計

<div class="wiki-infobox" style="--accent:#3a4047"><div class="wiki-infobox-title">麻酔時計</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⏰</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/arm-armor"><span class="wiki-icon">🧤</span>腕部装備</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>567 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/healing-power"><span class="wiki-icon">💚</span>治癒力</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 見つめると眠気が襲う。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 | 精度 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) | +31 | +6 |


**スキル**: [<span class="wiki-icon">💚</span>治癒力](/ja/skill/healing-power)（装備中、戦闘の各ターンに 7% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⏰</span>麻酔時計](/ja/action/craft-anesthetic-watch) | [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | Lv34 | 1 | 100% | 1 | 0.286 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⏰</span>麻酔時計（分解）](/ja/action/disassemble-anesthetic-watch) | [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | Lv34 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#3a4047"><div class="wiki-navbox-title">グループ: 腕部装備</div><div class="wiki-navbox-body"><a href="#/ja/item/mitten"><img class="wiki-icon" src="assets/icon/57b5c51acdb68045.svg" alt="">ミトン</a> ・ <a href="#/ja/item/cloth-gloves"><img class="wiki-icon" src="assets/icon/16359e1fba4a9c16.svg" alt="">布の手袋</a> ・ <a href="#/ja/item/rubber-gloves"><span class="wiki-icon">🧤</span>ゴム手袋</a> ・ <a href="#/ja/item/back-scratcher"><span class="wiki-icon">🩱</span>孫の手</a> ・ <a href="#/ja/item/work-gloves"><span class="wiki-icon">🧤</span>軍手</a> ・ <a href="#/ja/item/cat-paw"><span class="wiki-icon">🐾</span>ネコの手</a> ・ <a href="#/ja/item/lantern"><span class="wiki-icon">🏮</span>ランタン</a> ・ <a href="#/ja/item/helping-hand"><span class="wiki-icon">🤲</span>救いの手</a> ・ <a href="#/ja/item/torch"><span class="wiki-icon">🔥</span>松明</a> ・ <a href="#/ja/item/six-finger-glove"><span class="wiki-icon">🧤</span>6本指の手袋</a> ・ <a href="#/ja/item/leather-gloves"><span class="wiki-icon">🧤</span>革の手袋</a> ・ <a href="#/ja/item/crab-claw"><span class="wiki-icon">🦀</span>カニのハサミ</a> ・ <a href="#/ja/item/iron-gauntlet"><span class="wiki-icon">🧤</span>鉄の籠手</a> ・ <a href="#/ja/item/anesthetic-watch"><span class="wiki-icon">⏰</span>麻酔時計</a> ・ <a href="#/ja/item/command-spell"><span class="wiki-icon">🔺</span>令呪</a> ・ <a href="#/ja/item/aegis"><span class="wiki-icon">🛡️</span>ゼウスの盾</a> ・ <a href="#/ja/item/contradiction"><span class="wiki-icon">🛡️</span>矛盾</a> ・ <a href="#/ja/item/infinity-gauntlet"><span class="wiki-icon">🧤</span>無限の手袋</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `anesthetic-watch` |
| `category` | `armor` |
| `group` | `arm-armor` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `567` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | `healing-power` |
| CSV `tier` | 7 |
| CSV `rare` | 4 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "anesthetic-watch",
		"name": "麻酔時計",
		"explanation": "見つめると眠気が襲う。",
		"icon": {
			"emoji": "⏰",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"group": "arm-armor",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 567,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "melee-weapon",
			"attack": 0,
			"defence": 31,
			"accuracy": 6,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "healing-power"
}
```

</details>
