# ジョーンズ

<div class="wiki-infobox" style="--accent:#a58793"><div class="wiki-infobox-title">ジョーンズ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/5f31ecad836b1229.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/garden"><img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/pet"><img class="wiki-icon" src="assets/icon/df475084f2ad9ee8.svg" alt="">ペット</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 頼れる相棒。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 成功率 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/50a2af91aef10938.svg" alt="">漂流者](/ja/action/castaway) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | Lv45 | 1 | 0.006% | 0 | 0.001 |

## 用途

### 道具として必要（消費しない）

| アクション | 場所 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5d2614f177a8901a.svg" alt="">ジョーンズ](/ja/action/take-out-jones) | [<img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭](/ja/category/garden) | [<img class="wiki-icon" src="assets/icon/5f31ecad836b1229.svg" alt="">ジョーンズ](/ja/item/jones) ×1（消費しない） |

<div class="wiki-navbox" style="--accent:#a58793"><div class="wiki-navbox-title">グループ: ペット</div><div class="wiki-navbox-body"><a href="#/ja/item/chick"><img class="wiki-icon" src="assets/icon/72b9b13ec0747c5c.svg" alt="">ピヨちゃん（ジュニア）</a> ・ <a href="#/ja/item/killifish"><img class="wiki-icon" src="assets/icon/c8e6d6901baabb54.svg" alt="">メダカ</a> ・ <a href="#/ja/item/hamster"><img class="wiki-icon" src="assets/icon/da8e99eae29b4b0a.svg" alt="">ハム右衛門</a> ・ <a href="#/ja/item/walking-cactus"><img class="wiki-icon" src="assets/icon/232cd1758b741c1e.svg" alt="">歩くサボテン</a> ・ <a href="#/ja/item/chicken"><img class="wiki-icon" src="assets/icon/a3c1b5f50f712b2e.svg" alt="">ピヨちゃん</a> ・ <a href="#/ja/item/underdog"><img class="wiki-icon" src="assets/icon/2b3099558cb2acfb.svg" alt="">パブロフ</a> ・ <a href="#/ja/item/duck"><img class="wiki-icon" src="assets/icon/0e4878961f2aca4e.svg" alt="">醜いアヒル</a> ・ <a href="#/ja/item/jones"><img class="wiki-icon" src="assets/icon/5f31ecad836b1229.svg" alt="">ジョーンズ</a> ・ <a href="#/ja/item/turtle"><img class="wiki-icon" src="assets/icon/33832997528c33da.svg" alt="">クッパ</a> ・ <a href="#/ja/item/parroting-parrot"><img class="wiki-icon" src="assets/icon/158cf7a62b6e0a79.svg" alt="">オウム返しするオウム</a> ・ <a href="#/ja/item/pen-pen"><img class="wiki-icon" src="assets/icon/eac88e55c7b895f1.svg" alt="">ペンペン</a> ・ <a href="#/ja/item/r2d2"><img class="wiki-icon" src="assets/icon/b746d2efc907e6c3.svg" alt="">R2D2</a> ・ <a href="#/ja/item/flame-fox"><img class="wiki-icon" src="assets/icon/e2c1386dd27fa4be.svg" alt="">炎のキツネ</a> ・ <a href="#/ja/item/kero-chan"><img class="wiki-icon" src="assets/icon/3596c359f68e3e34.svg" alt="">ケロちゃん</a> ・ <a href="#/ja/item/fire-bird"><img class="wiki-icon" src="assets/icon/b49d48a060b23777.svg" alt="">炎の鳥</a> ・ <a href="#/ja/item/five-color-cat"><img class="wiki-icon" src="assets/icon/68e7cd446093a614.svg" alt="">シュレーディンガー</a> ・ <a href="#/ja/item/flying-goldfish"><img class="wiki-icon" src="assets/icon/e445784986275e6e.svg" alt="">空飛ぶ金魚</a> ・ <a href="#/ja/item/flying-pig"><img class="wiki-icon" src="assets/icon/fc53380c72c2bec5.svg" alt="">空飛ぶブタ</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `jones` |
| `category` | `garden` |
| `group` | `pet` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 6 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › ペット設計](/ja/dev/doc/plan?id=%E3%83%9A%E3%83%83%E3%83%88%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "jones",
		"name": "ジョーンズ",
		"explanation": "頼れる相棒。",
		"icon": {
			"emoji": "🎩",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/5f31ecad836b1229.svg）"
		},
		"color": ""
	},
	"category": "garden",
	"group": "pet",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 3,
			"experience": 0
		}
	],
	"skill": ""
}
```

</details>
