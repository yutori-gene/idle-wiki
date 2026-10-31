# 腹巻き

<div class="wiki-infobox" style="--accent:#3a4047"><div class="wiki-infobox-title">腹巻き</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🩹</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/body-armor"><span class="wiki-icon">👕</span>胴体装備</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>36 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ダサさと引き換えの幸福。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 防御 |
| --- | --- |
| 全カテゴリ | +19 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐚</span>浜辺の貝拾い](/ja/action/beach-shell-gathering) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv5 | 1 | 8.64% | 0.043 | 3.9 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🩹</span>腹巻き（分解）](/ja/action/disassemble-belly-warmer) | [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | Lv18 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#3a4047"><div class="wiki-navbox-title">グループ: 胴体装備</div><div class="wiki-navbox-body"><a href="#/ja/item/apron"><img class="wiki-icon" src="assets/icon/df8e4ded456e2261.svg" alt="">エプロン</a> ・ <a href="#/ja/item/tank-top"><img class="wiki-icon" src="assets/icon/62acb7af80d0fd63.svg" alt="">タンクトップ</a> ・ <a href="#/ja/item/farmer-work-clothes"><span class="wiki-icon">👨‍🌾</span>農夫の作業着</a> ・ <a href="#/ja/item/raincoat"><span class="wiki-icon">☂️</span>雨具</a> ・ <a href="#/ja/item/sailor-uniform"><span class="wiki-icon">⚓</span>セーラー服</a> ・ <a href="#/ja/item/gakuran"><span class="wiki-icon">🎓</span>学ラン</a> ・ <a href="#/ja/item/belly-warmer"><span class="wiki-icon">🩹</span>腹巻き</a> ・ <a href="#/ja/item/emperors-new-clothes"><span class="wiki-icon">👑</span>裸の王様の服</a> ・ <a href="#/ja/item/leather-breastplate"><span class="wiki-icon">🥋</span>革の胸当</a> ・ <a href="#/ja/item/silk-clothes"><span class="wiki-icon">👘</span>絹の服</a> ・ <a href="#/ja/item/chainmail"><img class="wiki-icon" src="assets/icon/f6a617104f8284b8.svg" alt="">チェインメイル</a> ・ <a href="#/ja/item/bulletproof-vest"><span class="wiki-icon">🦺</span>防弾チョッキ</a> ・ <a href="#/ja/item/bikini-armor"><span class="wiki-icon">👙</span>ビキニアーマー</a> ・ <a href="#/ja/item/iron-breastplate"><span class="wiki-icon">🥋</span>鉄の胸当</a> ・ <a href="#/ja/item/scale-mail"><span class="wiki-icon">🥋</span>スケイルメイル</a> ・ <a href="#/ja/item/priest-robe"><span class="wiki-icon">👘</span>僧侶の法衣</a> ・ <a href="#/ja/item/royal-formal-dress"><span class="wiki-icon">👑</span>王族の正装</a> ・ <a href="#/ja/item/god-robe"><span class="wiki-icon">👘</span>神衣</a> ・ <a href="#/ja/item/plug-suit"><span class="wiki-icon">🅿️</span>プラグスーツ</a> ・ <a href="#/ja/item/holy-cloth"><span class="wiki-icon">👘</span>聖衣</a> ・ <a href="#/ja/item/box-gundam"><span class="wiki-icon">🤖</span>箱ガンダム</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `belly-warmer` |
| `category` | `armor` |
| `group` | `body-armor` |
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
		"id": "belly-warmer",
		"name": "腹巻き",
		"explanation": "ダサさと引き換えの幸福。",
		"icon": {
			"emoji": "🩹",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"group": "body-armor",
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
			"category": "*",
			"attack": 0,
			"defence": 19,
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
