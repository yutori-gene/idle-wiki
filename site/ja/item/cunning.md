# 悪知恵

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">悪知恵</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦊</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><span class="wiki-icon">📚</span>書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/knowledge"><span class="wiki-icon">🧠</span>知識</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ずる賢く立ち回る知恵。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 攻撃 |
| --- | --- |
| [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | +1 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📒</span>裏帳簿](/ja/action/fraud-clinical-studies) | [<span class="wiki-icon">📚</span>書斎](/ja/category/study) | Lv1 | 1 | 100% | 1 | 0.1 |

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 知識</div><div class="wiki-navbox-body"><a href="#/ja/item/cruel-heart"><span class="wiki-icon">🔪</span>残忍な心</a> ・ <a href="#/ja/item/conspiracy-theory"><span class="wiki-icon">🛸</span>陰謀論</a> ・ <a href="#/ja/item/cut-out-threat-letter"><span class="wiki-icon">✂️</span>切り抜き文字の脅迫文</a> ・ <a href="#/ja/item/nerve"><span class="wiki-icon">🦁</span>度胸</a> ・ <a href="#/ja/item/rubbernecking"><span class="wiki-icon">👀</span>野次馬心</a> ・ <a href="#/ja/item/suspicion"><span class="wiki-icon">🤨</span>猜疑心</a> ・ <a href="#/ja/item/bravado"><span class="wiki-icon">🦚</span>虚勢</a> ・ <a href="#/ja/item/erudition"><span class="wiki-icon">🧠</span>博識</a> ・ <a href="#/ja/item/aesthetic-eye"><span class="wiki-icon">🎨</span>審美眼</a> ・ <a href="#/ja/item/cunning"><span class="wiki-icon">🦊</span>悪知恵</a> ・ <a href="#/ja/item/cooking-knowledge"><span class="wiki-icon">🍳</span>料理知識</a> ・ <a href="#/ja/item/hidden-path-to-northland"><span class="wiki-icon">🧭</span>隠された北国への道</a> ・ <a href="#/ja/item/history-knowledge"><span class="wiki-icon">📜</span>歴史知識</a> ・ <a href="#/ja/item/necromancy"><span class="wiki-icon">💀</span>ネクロマンス</a> ・ <a href="#/ja/item/truth-of-the-universe"><span class="wiki-icon">🌌</span>宇宙の真理</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `cunning` |
| `category` | `study` |
| `group` | `knowledge` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 3 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 知識型の雛形（Step 1-3 確定・書斎）](/ja/dev/doc/plan?id=%E7%9F%A5%E8%AD%98%E5%9E%8B%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E6%9B%B8%E6%96%8E%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "cunning",
		"name": "悪知恵",
		"explanation": "ずる賢く立ち回る知恵。",
		"icon": {
			"emoji": "🦊",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "study",
	"group": "knowledge",
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
			"category": "hell",
			"attack": 1,
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
