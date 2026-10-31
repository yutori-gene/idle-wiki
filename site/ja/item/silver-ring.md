# 銀の指輪

<div class="wiki-infobox" style="--accent:#886b86"><div class="wiki-infobox-title">銀の指輪</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/aba9e6b62053c166.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/accessory"><span class="wiki-icon">💍</span>装飾</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ring"><span class="wiki-icon">💍</span>指輪</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>9 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 月光を受けて輝く定番。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 |
| --- | --- |
| [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) | +4 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/849075a43bb2d535.svg" alt="">夕暮れの散歩道](/ja/action/twilight-promenade) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | Lv12 | 2 | 25.9% | 0.518 | 1 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/10fec2e0d61a355b.svg" alt="">銀の指輪（分解）](/ja/action/disassemble-silver-ring) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv7 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#886b86"><div class="wiki-navbox-title">グループ: 指輪</div><div class="wiki-navbox-body"><a href="#/ja/item/edible-ring"><img class="wiki-icon" src="assets/icon/eea6ffe630b18ce9.svg" alt="">食べられる指輪</a> ・ <a href="#/ja/item/silver-ring"><img class="wiki-icon" src="assets/icon/aba9e6b62053c166.svg" alt="">銀の指輪</a> ・ <a href="#/ja/item/baumkuchen"><span class="wiki-icon">🍩</span>バウムクーヘン</a> ・ <a href="#/ja/item/wedding-ring"><span class="wiki-icon">💍</span>結婚指輪</a> ・ <a href="#/ja/item/stuck-ring"><span class="wiki-icon">💍</span>取れない指輪</a> ・ <a href="#/ja/item/smart-ring"><span class="wiki-icon">⌚</span>スマートリング</a> ・ <a href="#/ja/item/diamond-ring"><span class="wiki-icon">💍</span>ダイヤモンドの指輪</a> ・ <a href="#/ja/item/glowing-ring"><span class="wiki-icon">💍</span>光る指輪</a> ・ <a href="#/ja/item/spinning-ring"><span class="wiki-icon">💫</span>高速回転してる指輪</a> ・ <a href="#/ja/item/ring-of-power"><span class="wiki-icon">💍</span>力の指輪</a> ・ <a href="#/ja/item/red-string-of-fate"><span class="wiki-icon">🧵</span>運命の赤い糸</a> ・ <a href="#/ja/item/dragon-ring"><span class="wiki-icon">💍</span>ドラゴンの指輪</a> ・ <a href="#/ja/item/soul-gem"><span class="wiki-icon">💠</span>ソウルジェム</a> ・ <a href="#/ja/item/kryptonite"><span class="wiki-icon">🟢</span>クリプトナイト</a> ・ <a href="#/ja/item/one-ring"><span class="wiki-icon">💍</span>一つの指輪</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `silver-ring` |
| `category` | `accessory` |
| `group` | `ring` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `9` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "silver-ring",
		"name": "銀の指輪",
		"explanation": "月光を受けて輝く定番。",
		"icon": {
			"emoji": "💍",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/aba9e6b62053c166.svg）"
		},
		"color": ""
	},
	"category": "accessory",
	"group": "ring",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 9,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "melee-weapon",
			"attack": 4,
			"defence": 0,
			"accuracy": 0,
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
