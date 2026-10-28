# 翡翠のかんざし

<div class="wiki-infobox" style="--accent:#2f3f52"><div class="wiki-infobox-title">翡翠のかんざし</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">💚</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/armor"><span class="wiki-icon">🛡️</span>防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/head-armor"><span class="wiki-icon">🪖</span>頭部防具</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>2,187 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/guard-stance"><span class="wiki-icon">🛡️</span>護りの構え</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 結った髪に涼やかな緑。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 |
| --- | --- |
| [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | +87 |


**スキル**: [<span class="wiki-icon">🛡️</span>護りの構え](/ja/skill/guard-stance)（装備中、戦闘の各ターンに 5% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💚</span>翡翠のかんざしを作る](/ja/action/craft-jade-hairpin) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv43 | 1 | 100% | 1 | 0.222 |

<div class="wiki-navbox" style="--accent:#2f3f52"><div class="wiki-navbox-title">グループ: 頭部防具</div><div class="wiki-navbox-body"><a href="#/ja/item/fake-beard"><span class="wiki-icon">🧔</span>つけ髭</a> ・ <a href="#/ja/item/pot-helmet"><span class="wiki-icon">🍲</span>鍋かぶと</a> ・ <a href="#/ja/item/red-hood"><span class="wiki-icon">🧕</span>赤ずきん</a> ・ <a href="#/ja/item/bunny-ears"><span class="wiki-icon">🐰</span>ウサミミ</a> ・ <a href="#/ja/item/chef-hat"><span class="wiki-icon">👨‍🍳</span>シェフハット</a> ・ <a href="#/ja/item/mask"><span class="wiki-icon">😷</span>マスク</a> ・ <a href="#/ja/item/glasses"><span class="wiki-icon">👓</span>メガネ</a> ・ <a href="#/ja/item/eyepatch"><span class="wiki-icon">🩹</span>アイパッチ</a> ・ <a href="#/ja/item/laurel-crown"><span class="wiki-icon">🏆</span>月桂冠</a> ・ <a href="#/ja/item/dentures"><span class="wiki-icon">🦷</span>入れ歯</a> ・ <a href="#/ja/item/scouter"><span class="wiki-icon">🥽</span>スカウター</a> ・ <a href="#/ja/item/iron-helmet"><span class="wiki-icon">⛑️</span>鉄の兜</a> ・ <a href="#/ja/item/daruma"><span class="wiki-icon">🎎</span>だるま</a> ・ <a href="#/ja/item/pumpkin-head"><span class="wiki-icon">🎃</span>パンプキンヘッド</a> ・ <a href="#/ja/item/wedding-veil"><span class="wiki-icon">👰</span>ウエディングベール</a> ・ <a href="#/ja/item/silk-hat"><span class="wiki-icon">🎩</span>絹の帽子</a> ・ <a href="#/ja/item/crown"><span class="wiki-icon">👑</span>王冠</a> ・ <a href="#/ja/item/jade-hairpin"><span class="wiki-icon">💚</span>翡翠のかんざし</a> ・ <a href="#/ja/item/void-ring"><span class="wiki-icon">⚫</span>虚無のリング</a> ・ <a href="#/ja/item/six-eyes"><span class="wiki-icon">👁️</span>六眼の瞳</a> ・ <a href="#/ja/item/crystal-skull"><span class="wiki-icon">💀</span>クリスタルスカル</a> ・ <a href="#/ja/item/sharingan"><span class="wiki-icon">👁️</span>写輪眼</a> ・ <a href="#/ja/item/halo"><span class="wiki-icon">😇</span>天使の輪</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `jade-hairpin` |
| `category` | `armor` |
| `group` | `head-armor` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `2187` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | `guard-stance` |
| CSV `tier` | 9 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "jade-hairpin",
		"name": "翡翠のかんざし",
		"explanation": "結った髪に涼やかな緑。",
		"icon": {
			"emoji": "💚",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"group": "head-armor",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 2187,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "throwing-weapon",
			"attack": 0,
			"defence": 87,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "guard-stance"
}
```

</details>
