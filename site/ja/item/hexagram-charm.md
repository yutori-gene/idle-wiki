# 六芒星のお守り

<div class="wiki-infobox" style="--accent:#886b86"><div class="wiki-infobox-title">六芒星のお守り</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/9bb0ac6e7bc5e941.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/accessory"><img class="wiki-icon" src="assets/icon/f78f0d1c14ad5a8d.svg" alt="">装飾</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/accessory"><img class="wiki-icon" src="assets/icon/47ba4b0004eb0e60.svg" alt="">アクセサリー</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>162 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/charm"><img class="wiki-icon" src="assets/icon/5ae75d891552a1d4.svg" alt="">お守り</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 邪気を払う古代の紋章。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 速度 | 経験値 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) |  | +6 |
| [<img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎](/ja/category/study) | +3 |  |


**スキル**: [<img class="wiki-icon" src="assets/icon/5ae75d891552a1d4.svg" alt="">お守り](/ja/skill/charm)（装備中、戦闘の各ターンに 12% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/b6932513f07c909a.svg" alt="">ネズミの宝箱](/ja/action/open-rat-treasure) | [<img class="wiki-icon" src="assets/icon/9ddf45e3d3403688.svg" alt="">ロフト](/ja/category/loft) | Lv27 | 1 | 26% | 0.221 | 0.147 |

<div class="wiki-navbox" style="--accent:#886b86"><div class="wiki-navbox-title">グループ: アクセサリー</div><div class="wiki-navbox-body"><a href="#/ja/item/cowbell"><img class="wiki-icon" src="assets/icon/f7bf170d11af7fc6.svg" alt="">カウベル</a> ・ <a href="#/ja/item/one-leaf-clover"><img class="wiki-icon" src="assets/icon/7bb40479a17528a9.svg" alt="">1葉のクローバー</a> ・ <a href="#/ja/item/dog-collar"><img class="wiki-icon" src="assets/icon/57382b8c9d69e156.svg" alt="">犬の首輪</a> ・ <a href="#/ja/item/shark-tooth-necklace"><img class="wiki-icon" src="assets/icon/7ee65e9d2fcf90cd.svg" alt="">サメ歯ネックレス</a> ・ <a href="#/ja/item/broccoli"><img class="wiki-icon" src="assets/icon/f48b5014d6b0d0be.svg" alt="">ブロッコリー</a> ・ <a href="#/ja/item/philosophers-stone"><img class="wiki-icon" src="assets/icon/f8e9aa004b3b3c4e.svg" alt="">賢者の石</a> ・ <a href="#/ja/item/secret-stone"><img class="wiki-icon" src="assets/icon/fda1973778b48b57.svg" alt="">秘石</a> ・ <a href="#/ja/item/crystal-pendant"><img class="wiki-icon" src="assets/icon/f20ccc9a563b3957.svg" alt="">水晶のペンダント</a> ・ <a href="#/ja/item/minus-four-leaf-clover"><img class="wiki-icon" src="assets/icon/d32da695f0cada2b.svg" alt="">-4葉のクローバー</a> ・ <a href="#/ja/item/hexagram-charm"><img class="wiki-icon" src="assets/icon/9bb0ac6e7bc5e941.svg" alt="">六芒星のお守り</a> ・ <a href="#/ja/item/dark-pendant"><img class="wiki-icon" src="assets/icon/c577e7c14198d595.svg" alt="">闇のペンダント</a> ・ <a href="#/ja/item/diamond-tiara"><img class="wiki-icon" src="assets/icon/b5394860ab633999.svg" alt="">ダイヤモンドのティアラ</a> ・ <a href="#/ja/item/holy-grail"><img class="wiki-icon" src="assets/icon/bd1ca80d8e7b7f25.svg" alt="">聖杯</a> ・ <a href="#/ja/item/ninety-nine-leaf-clover"><img class="wiki-icon" src="assets/icon/5c0ddadfb207a03c.svg" alt="">99葉のクローバー</a> ・ <a href="#/ja/item/time-stopping-hourglass"><img class="wiki-icon" src="assets/icon/44caa25ecd4b33aa.svg" alt="">時を止める砂時計</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `hexagram-charm` |
| `category` | `accessory` |
| `group` | `accessory` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `162` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | `charm` |
| CSV `tier` | 6 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "hexagram-charm",
		"name": "六芒星のお守り",
		"explanation": "邪気を払う古代の紋章。",
		"icon": {
			"emoji": "🔯",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/9bb0ac6e7bc5e941.svg）"
		},
		"color": ""
	},
	"category": "accessory",
	"group": "accessory",
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
			"category": "basement",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 6
		},
		{
			"category": "study",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 3,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "charm"
}
```

</details>
