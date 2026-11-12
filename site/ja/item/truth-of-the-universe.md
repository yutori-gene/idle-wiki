# 宇宙の真理

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">宇宙の真理</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/0f215a6233178fcf.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/knowledge"><img class="wiki-icon" src="assets/icon/ae86d6f81fb656b1.svg" alt="">知識</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> この世の全てを見通す叡智。


## 性能

持っているだけで効く。所持数に比例して効果が増える。値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/ja/system/combat) を参照）。

| 効き先 | 経験値 |
| --- | --- |
| 全カテゴリ | +3 |

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/09985507b4a28453.svg" alt="">死海文書](/ja/action/cosmic-truth-studies) | [<img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎](/ja/category/study) | Lv1 | 1 | 100% | 1 | 0.021 |

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 知識</div><div class="wiki-navbox-body"><a href="#/ja/item/cruel-heart"><img class="wiki-icon" src="assets/icon/e20f2410162f3de5.svg" alt="">残忍な心</a> ・ <a href="#/ja/item/conspiracy-theory"><img class="wiki-icon" src="assets/icon/e224efa05b611b51.svg" alt="">陰謀論</a> ・ <a href="#/ja/item/cut-out-threat-letter"><img class="wiki-icon" src="assets/icon/d271323e17549bbd.svg" alt="">切り抜き文字の脅迫文</a> ・ <a href="#/ja/item/nerve"><img class="wiki-icon" src="assets/icon/c2bd8733067be588.svg" alt="">度胸</a> ・ <a href="#/ja/item/rubbernecking"><img class="wiki-icon" src="assets/icon/73b3b41bf68f80cd.svg" alt="">野次馬心</a> ・ <a href="#/ja/item/suspicion"><img class="wiki-icon" src="assets/icon/268404846b9fc365.svg" alt="">猜疑心</a> ・ <a href="#/ja/item/bravado"><img class="wiki-icon" src="assets/icon/54729b4869174f6b.svg" alt="">虚勢</a> ・ <a href="#/ja/item/erudition"><img class="wiki-icon" src="assets/icon/a7adf370c3bc609a.svg" alt="">博識</a> ・ <a href="#/ja/item/aesthetic-eye"><img class="wiki-icon" src="assets/icon/f842f4822ef639e6.svg" alt="">審美眼</a> ・ <a href="#/ja/item/cunning"><img class="wiki-icon" src="assets/icon/ddf1b495bfcceaa1.svg" alt="">悪知恵</a> ・ <a href="#/ja/item/cooking-knowledge"><img class="wiki-icon" src="assets/icon/e8dbedd65beac075.svg" alt="">料理知識</a> ・ <a href="#/ja/item/hidden-path-to-northland"><img class="wiki-icon" src="assets/icon/07145ca4be58e6a7.svg" alt="">隠された北国への道</a> ・ <a href="#/ja/item/history-knowledge"><img class="wiki-icon" src="assets/icon/dfd065435a728eaf.svg" alt="">歴史知識</a> ・ <a href="#/ja/item/necromancy"><img class="wiki-icon" src="assets/icon/e9fce296a96d8fdd.svg" alt="">ネクロマンス</a> ・ <a href="#/ja/item/truth-of-the-universe"><img class="wiki-icon" src="assets/icon/0f215a6233178fcf.svg" alt="">宇宙の真理</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `truth-of-the-universe` |
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
| CSV `tier` | 9 |
| CSV `rare` | 9 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 知識型の雛形（Step 1-3 確定・書斎）](/ja/dev/doc/plan?id=%E7%9F%A5%E8%AD%98%E5%9E%8B%E3%81%AE%E9%9B%9B%E5%BD%A2%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E6%9B%B8%E6%96%8E%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "truth-of-the-universe",
		"name": "宇宙の真理",
		"explanation": "この世の全てを見通す叡智。",
		"icon": {
			"emoji": "🌌",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/0f215a6233178fcf.svg）"
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
			"category": "*",
			"attack": 0,
			"defence": 0,
			"accuracy": 0,
			"evasion": 0,
			"restore": 0,
			"speed": 0,
			"chance": 0,
			"experience": 3
		}
	],
	"skill": ""
}
```

</details>
