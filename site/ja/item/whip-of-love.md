# 愛の鞭

<div class="wiki-infobox" style="--accent:#656a5a"><div class="wiki-infobox-title">愛の鞭</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪢</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/launcher"><span class="wiki-icon">🏹</span>射出装置</a></td></tr><tr><th>装備</th><td>装備必須</td></tr><tr><th>売値</th><td>189 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/breather"><span class="wiki-icon">🌬️</span>息継ぎ</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 叩くほど絆が深まる。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 | 精度 | 速度 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | +31 | +6 | +4 |


**スキル**: [<span class="wiki-icon">🌬️</span>息継ぎ](/ja/skill/breather)（装備中、戦闘の各ターンに 8% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">⛏️</span>埋もれた鉱夫町](/ja/action/buried-miner-town) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | Lv5 | 1 | 7.74% | 0.039 | 2 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🪢</span>愛の鞭（分解）](/ja/action/disassemble-whip-of-love) | [<span class="wiki-icon">⚒️</span>工房](/ja/category/atelier) | Lv33 | 1 | 100% |  |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) Lv36以上

<div class="wiki-navbox" style="--accent:#656a5a"><div class="wiki-navbox-title">グループ: 射出装置</div><div class="wiki-navbox-body"><a href="#/ja/item/acorn-shot"><img class="wiki-icon" src="assets/icon/0d8c280279f44520.svg" alt="">どんぐりショット</a> ・ <a href="#/ja/item/slingshot"><img class="wiki-icon" src="assets/icon/ecb72fbdd535a34d.svg" alt="">スリングショット</a> ・ <a href="#/ja/item/fishing-rod"><span class="wiki-icon">🎣</span>釣竿</a> ・ <a href="#/ja/item/whip-of-love"><span class="wiki-icon">🪢</span>愛の鞭</a> ・ <a href="#/ja/item/blown-kiss"><span class="wiki-icon">💋</span>投げキッス</a> ・ <a href="#/ja/item/soccer-ball"><span class="wiki-icon">⚽</span>サッカーボール</a> ・ <a href="#/ja/item/carrot-and-stick"><span class="wiki-icon">🍬</span>飴と鞭</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `whip-of-love` |
| `category` | `throwing-weapon` |
| `group` | `launcher` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `189` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `necessary` |
| `consumeChance` | `1` |
| `skill` | `breather` |
| CSV `tier` | 7 |
| CSV `rare` | 3 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "whip-of-love",
		"name": "愛の鞭",
		"explanation": "叩くほど絆が深まる。",
		"icon": {
			"emoji": "🪢",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "throwing-weapon",
	"group": "launcher",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 189,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "necessary",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "throwing-weapon",
			"count": 36,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [
		{
			"category": "",
			"attack": 31,
			"defence": 0,
			"accuracy": 6,
			"evasion": 0,
			"restore": 0,
			"speed": 4,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "breather"
}
```

</details>
