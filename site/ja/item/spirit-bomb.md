# 元気玉

<div class="wiki-infobox" style="--accent:#cf9a1f"><div class="wiki-infobox-title">元気玉</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌕</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/explosive-weapon"><span class="wiki-icon">💣</span>爆発武器</a></td></tr><tr><th>装備</th><td>消費装備</td></tr><tr><th>消費率</th><td>100%</td></tr><tr><th>売値</th><td>7,290 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/all-or-nothing"><span class="wiki-icon">🎲</span>一擲乾坤</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 世界中から力を集める。


## 性能

装備しているあいだ効く（同じグループで装備できるのは1つ）。使うたびに消費する。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 |
| --- | --- |
| [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) | +166 |


**スキル**: [<span class="wiki-icon">🎲</span>一擲乾坤](/ja/skill/all-or-nothing)（装備中、戦闘の各ターンに 4% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🌕</span>元気玉を作る](/ja/action/craft-spirit-bomb) | [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) | Lv50 | 133 | 100% | 133 | 26.6 |

## 解放条件

次をすべて満たすと一覧に現れる。

- [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) Lv50以上

<div class="wiki-navbox" style="--accent:#cf9a1f"><div class="wiki-navbox-title">グループ: 爆発武器</div><div class="wiki-navbox-body"><a href="#/ja/item/water-balloon"><span class="wiki-icon">🎈</span>水風船</a> ・ <a href="#/ja/item/egg"><span class="wiki-icon">🥚</span>卵</a> ・ <a href="#/ja/item/pie"><span class="wiki-icon">🥧</span>パイ</a> ・ <a href="#/ja/item/tomato"><span class="wiki-icon">🍅</span>トマト</a> ・ <a href="#/ja/item/party-popper"><span class="wiki-icon">🎉</span>パーティークラッカー</a> ・ <a href="#/ja/item/mentos-soda"><span class="wiki-icon">🥤</span>メントス入りソーダ</a> ・ <a href="#/ja/item/mandragora"><span class="wiki-icon">🌱</span>マンドラゴラ</a> ・ <a href="#/ja/item/fire-flower"><span class="wiki-icon">🌼</span>ファイアフラワー</a> ・ <a href="#/ja/item/molotov"><span class="wiki-icon">🍾</span>火炎ビン</a> ・ <a href="#/ja/item/flashbang"><span class="wiki-icon">✨</span>閃光弾</a> ・ <a href="#/ja/item/lithium-battery"><span class="wiki-icon">🔋</span>リチウムバッテリー</a> ・ <a href="#/ja/item/faucet-handle"><span class="wiki-icon">🚰</span>蛇口のハンドル</a> ・ <a href="#/ja/item/grenade"><span class="wiki-icon">💣</span>手榴弾</a> ・ <a href="#/ja/item/dynamite"><span class="wiki-icon">🧨</span>ダイナマイト</a> ・ <a href="#/ja/item/duel-disk"><span class="wiki-icon">💿</span>デュエルディスク</a> ・ <a href="#/ja/item/clow-card"><span class="wiki-icon">🃏</span>クロウカード</a> ・ <a href="#/ja/item/clockwork-apple"><span class="wiki-icon">🍎</span>時計仕掛けのリンゴ</a> ・ <a href="#/ja/item/star-rod"><span class="wiki-icon">🪄</span>スターロッド</a> ・ <a href="#/ja/item/ghost-ward"><span class="wiki-icon">🏷️</span>幽霊退治の札</a> ・ <a href="#/ja/item/military-dolphin"><span class="wiki-icon">🐬</span>軍用イルカ</a> ・ <a href="#/ja/item/trojan-horse"><span class="wiki-icon">🐴</span>トロイの木馬</a> ・ <a href="#/ja/item/nuclear-bomb"><span class="wiki-icon">☢️</span>核爆弾</a> ・ <a href="#/ja/item/spirit-bomb"><span class="wiki-icon">🌕</span>元気玉</a> ・ <a href="#/ja/item/n2-mine"><span class="wiki-icon">💣</span>N2爆雷</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `spirit-bomb` |
| `category` | `explosive-weapon` |
| `group` | `explosive-weapon` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `7290` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `consumable` |
| `consumeChance` | `1` |
| `skill` | `all-or-nothing` |
| CSV `tier` | 10 |
| CSV `rare` | 6 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 装備設計](/ja/dev/doc/plan?id=%E8%A3%85%E5%82%99%E8%A8%AD%E8%A8%88)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "spirit-bomb",
		"name": "元気玉",
		"explanation": "世界中から力を集める。",
		"icon": {
			"emoji": "🌕",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "explosive-weapon",
	"group": "explosive-weapon",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 7290,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "consumable",
	"consumeChance": 1,
	"requirements": [
		{
			"type": "category",
			"id": "explosive-weapon",
			"count": 50,
			"chance": 1,
			"equipment": false
		}
	],
	"properties": [
		{
			"category": "",
			"attack": 166,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 0
		}
	],
	"skill": "all-or-nothing"
}
```

</details>
