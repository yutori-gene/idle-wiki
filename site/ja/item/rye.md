# ライ麦

<div class="wiki-infobox" style="--accent:#64594c"><div class="wiki-infobox-title">ライ麦</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/78d3ddb750b44362.svg" alt=""></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/study"><img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/ability"><img class="wiki-icon" src="assets/icon/7c7dbb617148ad3b.svg" alt="">能力</a></td></tr><tr><th>装備</th><td>装備不要</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>所持枠</th><td>数えない（手放せない持ち物）</td></tr><tr><th>スキル</th><td><a href="#/ja/skill/catcher"><img class="wiki-icon" src="assets/icon/34a9813c034756be.svg" alt="">捕手</a></td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> ライ麦畑で、落ちる子どもをつかまえた手に残っていた穂。


## 性能

**スキル**: [<img class="wiki-icon" src="assets/icon/34a9813c034756be.svg" alt="">捕手](/ja/skill/catcher)（装備中、戦闘の各ターンに 6% で発動）

## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8d959d1d64d1e2a2.svg" alt="">ライ麦畑でつかまえて](/ja/action/read-catcher-in-the-rye) | [<img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎](/ja/category/study) | Lv1 | 1 | 100% | 1 | 0.036 |

<div class="wiki-navbox" style="--accent:#64594c"><div class="wiki-navbox-title">グループ: 能力</div><div class="wiki-navbox-body"><a href="#/ja/item/elitism"><img class="wiki-icon" src="assets/icon/c5ee2a497eda97c8.svg" alt="">エリート志向</a> ・ <a href="#/ja/item/youth-memory"><img class="wiki-icon" src="assets/icon/3577727f837dae02.svg" alt="">青春の思い出</a> ・ <a href="#/ja/item/dark-past"><img class="wiki-icon" src="assets/icon/199d37908aae3fcc.svg" alt="">黒歴史</a> ・ <a href="#/ja/item/clean-vote"><img class="wiki-icon" src="assets/icon/de5f9818990501e4.svg" alt="">清き一票</a> ・ <a href="#/ja/item/antibody"><img class="wiki-icon" src="assets/icon/369e6a3d6aefa7c0.svg" alt="">抗体</a> ・ <a href="#/ja/item/misfortune"><img class="wiki-icon" src="assets/icon/df14fcc4928d1eb1.svg" alt="">不幸</a> ・ <a href="#/ja/item/triforce"><img class="wiki-icon" src="assets/icon/3a481dfec01e1c82.svg" alt="">トライフォース</a> ・ <a href="#/ja/item/attack-barrier"><img class="wiki-icon" src="assets/icon/bd8bba80ceedd894.svg" alt="">攻性防壁</a> ・ <a href="#/ja/item/devil-worship"><img class="wiki-icon" src="assets/icon/28e21aebbaaf7a0a.svg" alt="">悪魔信仰</a> ・ <a href="#/ja/item/newtype"><img class="wiki-icon" src="assets/icon/f67c0db7729bfca4.svg" alt="">ニュータイプ</a> ・ <a href="#/ja/item/force"><img class="wiki-icon" src="assets/icon/220f28203410df27.svg" alt="">フォース</a> ・ <a href="#/ja/item/rye"><img class="wiki-icon" src="assets/icon/78d3ddb750b44362.svg" alt="">ライ麦</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `rye` |
| `category` | `study` |
| `group` | `ability` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `unnecessary` |
| `consumeChance` | `1` |
| `skill` | `catcher` |
| CSV `tier` | 10 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89) ／ [plan.md › 能力10種＝スキルの器](/ja/dev/doc/plan?id=%E8%83%BD%E5%8A%9B10%E7%A8%AE%EF%BC%9D%E3%82%B9%E3%82%AD%E3%83%AB%E3%81%AE%E5%99%A8)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "rye",
		"name": "ライ麦",
		"explanation": "ライ麦畑で、落ちる子どもをつかまえた手に残っていた穂。",
		"icon": {
			"emoji": "🌾",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/78d3ddb750b44362.svg）"
		},
		"color": ""
	},
	"category": "study",
	"group": "ability",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "unnecessary",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": "catcher"
}
```

</details>
