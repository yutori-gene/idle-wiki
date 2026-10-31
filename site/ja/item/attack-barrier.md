# 攻性防壁

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">攻性防壁</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🛡️</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><span class="wiki-icon">📚</span>書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ability"><span class="wiki-icon">✨</span>能力</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/counter-mechanism"><span class="wiki-icon">🛡️</span>反撃機構</a></td></tr><tr><th>入手経路</th><td>なし</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 侵入者を逆に攻撃する防御。


## 性能

**スキル**: [<span class="wiki-icon">🛡️</span>反撃機構](/ja/skill/counter-mechanism)（装備中、戦闘の各ターンに 4% で発動）

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 能力</div><div class="wiki-navbox-body"><a href="#/ja/item/elitism"><span class="wiki-icon">🎩</span>エリート志向</a> ・ <a href="#/ja/item/youth-memory"><span class="wiki-icon">💞</span>青春の思い出</a> ・ <a href="#/ja/item/dark-past"><span class="wiki-icon">🫣</span>黒歴史</a> ・ <a href="#/ja/item/clean-vote"><span class="wiki-icon">🗳️</span>清き一票</a> ・ <a href="#/ja/item/antibody"><span class="wiki-icon">🛡️</span>抗体</a> ・ <a href="#/ja/item/misfortune"><span class="wiki-icon">🌧️</span>不幸</a> ・ <a href="#/ja/item/triforce"><span class="wiki-icon">🔺</span>トライフォース</a> ・ <a href="#/ja/item/attack-barrier"><span class="wiki-icon">🛡️</span>攻性防壁</a> ・ <a href="#/ja/item/devil-worship"><span class="wiki-icon">😈</span>悪魔信仰</a> ・ <a href="#/ja/item/newtype"><span class="wiki-icon">👁️</span>ニュータイプ</a> ・ <a href="#/ja/item/force"><span class="wiki-icon">✨</span>フォース</a> ・ <a href="#/ja/item/rye"><span class="wiki-icon">🌾</span>ライ麦</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `attack-barrier` |
| `category` | `study` |
| `group` | `ability` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | `counter-mechanism` |
| CSV `tier` | 8 |
| CSV `rare` | 7 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 能力10種＝スキルの器](/ja/dev/doc/plan?id=%E8%83%BD%E5%8A%9B10%E7%A8%AE%EF%BC%9D%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E5%99%A8)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "attack-barrier",
		"name": "攻性防壁",
		"explanation": "侵入者を逆に攻撃する防御。",
		"icon": {
			"emoji": "🛡️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "study",
	"group": "ability",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": "counter-mechanism"
}
```

</details>
