# 変装ブローチ

<div class="wiki-infobox" style="--accent:#886b86"><div class="wiki-infobox-title">変装ブローチ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🥸</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/accessory"><span class="wiki-icon">💍</span>装飾</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/brooch"><span class="wiki-icon">🎖️</span>ブローチ</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>162 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/ostentation"><span class="wiki-icon">💄</span>虚飾</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 月の力を集めた結晶体で、戦士のコスプレに変装できる。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 速度 |
| --- | --- |
| [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | +14 |
| [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | -7 |


**スキル**: [<span class="wiki-icon">💄</span>虚飾](/ja/skill/ostentation)（装備中、戦闘の各ターンに 5% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐀</span>ネズミの宝箱](/ja/action/open-rat-treasure) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv27 | 1 | 26% | 0.221 | 0.147 |

<div class="wiki-navbox" style="--accent:#886b86"><div class="wiki-navbox-title">グループ: ブローチ</div><div class="wiki-navbox-body"><a href="#/ja/item/firefly"><img class="wiki-icon" src="assets/icon/c4f9d12979bdfc90.svg" alt="">ホタル</a> ・ <a href="#/ja/item/pin-badge"><img class="wiki-icon" src="assets/icon/5f67ad53a251b7d6.svg" alt="">ピンバッジ</a> ・ <a href="#/ja/item/heart-brooch"><span class="wiki-icon">💗</span>ハートブローチ</a> ・ <a href="#/ja/item/employee-badge"><span class="wiki-icon">🪪</span>社員証</a> ・ <a href="#/ja/item/gym-badge"><span class="wiki-icon">🎖️</span>ジムバッジ</a> ・ <a href="#/ja/item/verified-badge"><span class="wiki-icon">🪪</span>認証バッジ</a> ・ <a href="#/ja/item/police-badge"><span class="wiki-icon">👮</span>警察バッジ</a> ・ <a href="#/ja/item/hunter-license"><span class="wiki-icon">🪪</span>ハンターライセンス</a> ・ <a href="#/ja/item/cross-rosary"><span class="wiki-icon">📿</span>十字架のロザリオ</a> ・ <a href="#/ja/item/moon-emblem"><span class="wiki-icon">🌙</span>月の紋章</a> ・ <a href="#/ja/item/bowtie-voice-changer"><span class="wiki-icon">🎙️</span>蝶ネクタイ型変声機</a> ・ <a href="#/ja/item/disguise-brooch"><span class="wiki-icon">🥸</span>変装ブローチ</a> ・ <a href="#/ja/item/medal"><span class="wiki-icon">🎖️</span>勲章</a> ・ <a href="#/ja/item/family-crest-brooch"><span class="wiki-icon">🎖️</span>家紋のブローチ</a> ・ <a href="#/ja/item/sos-brigade-badge"><span class="wiki-icon">🎖️</span>SOS団のバッジ</a> ・ <a href="#/ja/item/survey-corps-badge"><span class="wiki-icon">🎖️</span>調査兵団のバッジ</a> ・ <a href="#/ja/item/golden-spin"><span class="wiki-icon">🌀</span>黄金の回転</a> ・ <a href="#/ja/item/dark-matter"><span class="wiki-icon">🌑</span>暗黒物質</a> ・ <a href="#/ja/item/beast-rose"><span class="wiki-icon">🌹</span>獣の薔薧</a> ・ <a href="#/ja/item/at-field"><span class="wiki-icon">🔺</span>ATフィールド</a> ・ <a href="#/ja/item/s2-engine"><span class="wiki-icon">⚙️</span>S2機関</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `disguise-brooch` |
| `category` | `accessory` |
| `group` | `brooch` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `162` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | `ostentation` |
| CSV `tier` | 6 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "disguise-brooch",
		"name": "変装ブローチ",
		"explanation": "月の力を集めた結晶体で、戦士のコスプレに変装できる。",
		"icon": {
			"emoji": "🥸",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "accessory",
	"group": "brooch",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 162,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "factory",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 14,
			"chance": 0,
			"experience": 0
		},
		{
			"category": "castle",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": -7,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "ostentation"
}
```

</details>
