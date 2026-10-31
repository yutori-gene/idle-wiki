# 奈落の宝珠

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">奈落の宝珠</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔮</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>729 <a href="#/ja/item/coin"><img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 底なしの深淵を閉じ込めた。

?> **進行素材**。[<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) のレベルとあわせて、次のダンジョン [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) を開く条件になる。繰り返し手に入るので、売ってしまっても取り直せる。物置がいっぱいのときに売らないよう注意。エピローグ（[<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue)）では10種すべてが条件になる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">💀</span>骸骨拾い](/ja/action/bone-gathering) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | Lv3 | 1 | 100% | 0.5 | 20 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔴</span>モンスターボール](/ja/action/craft-monster-ball) | [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | Lv44 | 1 | 100% |  |
| [<span class="wiki-icon">🍀</span>99葉のクローバー](/ja/action/craft-ninety-nine-leaf-clover) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv47 | 1 | 100% |  |

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | カテゴリの解放条件 | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 |
| [<img class="wiki-icon" src="assets/icon/e662065d77e683cb.svg" alt="">魔王](/ja/event/demon-lord) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 |
| [<span class="wiki-icon">🪜</span>天への梯子](/ja/event/ladder-to-heaven) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 |
| [<span class="wiki-icon">🌍</span>世界の変化](/ja/event/world-change) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 |
| [<span class="wiki-icon">📖</span>エピローグ](/ja/event/epilogue) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><img class="wiki-icon" src="assets/icon/fd1bdd12170273cb.svg" alt="">素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `abyss-orb` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `729` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 9 |
| CSV `rare` | 4 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "abyss-orb",
		"name": "奈落の宝珠",
		"explanation": "底なしの深淵を閉じ込めた。",
		"icon": {
			"emoji": "🔮",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 729,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
