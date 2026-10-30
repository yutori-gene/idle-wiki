# 時を止める砂時計

<div class="wiki-infobox" style="--accent:#886b86"><div class="wiki-infobox-title">時を止める砂時計</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">⏳</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/accessory"><span class="wiki-icon">💍</span>装飾</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/accessory"><span class="wiki-icon">📿</span>アクセサリー</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>21,870 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/all-round"><span class="wiki-icon">🌈</span>万能</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 止まった時間の中で、砂時計だけが永遠を生きる。


## 性能

値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 | 防御 | 精度 | 回避 | 回復 |
| --- | --- | --- | --- | --- | --- |
| 全カテゴリ | +44 | +28 | +6 | +5 | +15 |


**スキル**: [<span class="wiki-icon">🌈</span>万能](/ja/skill/all-round)（装備中、戦闘の各ターンに 3% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⏳</span>時を止める砂時計を作る](/ja/action/craft-time-stopping-hourglass) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv50 | 1 | 100% | 1 | 0.2 |

<div class="wiki-navbox" style="--accent:#886b86"><div class="wiki-navbox-title">グループ: アクセサリー</div><div class="wiki-navbox-body"><a href="#/ja/item/cowbell"><span class="wiki-icon">🔔</span>カウベル</a> ・ <a href="#/ja/item/one-leaf-clover"><span class="wiki-icon">🍀</span>1葉のクローバー</a> ・ <a href="#/ja/item/dog-collar"><span class="wiki-icon">🐕</span>犬の首輪</a> ・ <a href="#/ja/item/shark-tooth-necklace"><span class="wiki-icon">🦈</span>サメ歯ネックレス</a> ・ <a href="#/ja/item/broccoli"><span class="wiki-icon">🥦</span>ブロッコリー</a> ・ <a href="#/ja/item/philosophers-stone"><span class="wiki-icon">🔴</span>賢者の石</a> ・ <a href="#/ja/item/secret-stone"><span class="wiki-icon">💎</span>秘石</a> ・ <a href="#/ja/item/crystal-pendant"><span class="wiki-icon">🔮</span>水晶のペンダント</a> ・ <a href="#/ja/item/minus-four-leaf-clover"><span class="wiki-icon">🍀</span>-4葉のクローバー</a> ・ <a href="#/ja/item/hexagram-charm"><span class="wiki-icon">🔯</span>六芒星のお守り</a> ・ <a href="#/ja/item/dark-pendant"><span class="wiki-icon">🔮</span>闇のペンダント</a> ・ <a href="#/ja/item/diamond-tiara"><span class="wiki-icon">👑</span>ダイヤモンドのティアラ</a> ・ <a href="#/ja/item/holy-grail"><span class="wiki-icon">🏆</span>聖杯</a> ・ <a href="#/ja/item/ninety-nine-leaf-clover"><span class="wiki-icon">🍀</span>99葉のクローバー</a> ・ <a href="#/ja/item/time-stopping-hourglass"><span class="wiki-icon">⏳</span>時を止める砂時計</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `time-stopping-hourglass` |
| `category` | `accessory` |
| `group` | `accessory` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `21870` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | `all-round` |
| CSV `tier` | 10 |
| CSV `rare` | 7 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "time-stopping-hourglass",
		"name": "時を止める砂時計",
		"explanation": "止まった時間の中で、砂時計だけが永遠を生きる。",
		"icon": {
			"emoji": "⏳",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "accessory",
	"group": "accessory",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 21870,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [
		{
			"category": "*",
			"attack": 44,
			"defence": 28,
			"accuracy": 6,
			"evasion": 5,
			"restore": 15,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "all-round"
}
```

</details>
