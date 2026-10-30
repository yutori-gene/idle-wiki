# Gウイルス

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">Gウイルス</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🧬</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/processed-goods"><span class="wiki-icon">⚙️</span>加工品</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>162 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 強烈な肉体増強と再生能力を持つ生物兵器。様々な国が狙っている。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧪</span>マッドサイエンティスト](/ja/action/mad-scientist) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv28 | 1 | 0.194% | 0.001 | 0.001 |
| [<span class="wiki-icon">🏢</span>封鎖された研究棟](/ja/action/sealed-research-wing) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv12 | 1 | 10.4% | 0.104 | 0.035 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧟</span>ミュータント](/ja/action/mutant) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | Lv32 | 1 | 0.556% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 加工品</div><div class="wiki-navbox-body"><a href="#/ja/item/weight-scale"><span class="wiki-icon">⚖️</span>体重計</a> ・ <a href="#/ja/item/cash-card"><span class="wiki-icon">💳</span>キャッシュカード</a> ・ <a href="#/ja/item/atm"><span class="wiki-icon">🏧</span>ATM</a> ・ <a href="#/ja/item/cultured-meat"><span class="wiki-icon">🥩</span>培養肉</a> ・ <a href="#/ja/item/soy-meat"><span class="wiki-icon">🥩</span>ソイミート</a> ・ <a href="#/ja/item/g-virus"><span class="wiki-icon">🧬</span>Gウイルス</a> ・ <a href="#/ja/item/arc-reactor"><span class="wiki-icon">🔵</span>アークリアクター</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `g-virus` |
| `category` | `warehouse` |
| `group` | `processed-goods` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `162` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 6 |
| CSV `rare` | 3 |
| CSV `memo` | 回復と力が多いがそれ以外がマイナス |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "g-virus",
		"name": "Gウイルス",
		"explanation": "強烈な肉体増強と再生能力を持つ生物兵器。様々な国が狙っている。",
		"icon": {
			"emoji": "🧬",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "processed-goods",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 162,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"consumeChance": 1,
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
