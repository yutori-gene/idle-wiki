# 空ビン

<div class="wiki-infobox" style="--accent:#85837e"><div class="wiki-infobox-title">空ビン</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🍾</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>12 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 液体だけでなく、虫や妖精など何でも入る容器。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🏖️</span>漂着物回収](/ja/action/flotsam-collecting) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | Lv1 | 1 | 21.6% | 0.108 | 9.7 |
| [<span class="wiki-icon">🧔</span>ドワーフ](/ja/action/dwarf) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv47 | 1 | 0.356% | 0.002 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">✨</span>発光する薬の調合](/ja/action/brew-glowing-medicine) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv11 | 2 | 100% |  |
| [<span class="wiki-icon">🧪</span>エーテルの調合](/ja/action/brew-ether) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv13 | 1 | 100% |  |
| [<span class="wiki-icon">👁️</span>目薬の調合](/ja/action/brew-eye-drops) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv17 | 1 | 100% |  |
| [<span class="wiki-icon">🧊</span>保冷剤の調合](/ja/action/brew-cold-pack) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv19 | 2 | 100% |  |
| [<span class="wiki-icon">🧪</span>毒瓶の調合](/ja/action/brew-poison-vial) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv36 | 5 | 100% |  |
| [<span class="wiki-icon">🧞</span>精霊の入ったビンの調合](/ja/action/brew-bottled-spirit) | [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | Lv42 | 2 | 100% |  |
| [<span class="wiki-icon">✉️</span>ボトルメールを封じる](/ja/action/seal-message-in-a-bottle) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv18 | 10 | 100% |  |
| [<span class="wiki-icon">❄️</span>スノードームを作る](/ja/action/craft-snow-globe) | [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | Lv25 | 10 | 100% |  |

<div class="wiki-navbox" style="--accent:#85837e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">231件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `empty-bottle` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `12` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 4 |
| CSV `rare` | 1 |
| CSV `memo` | 精霊をビンに押し込む |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "empty-bottle",
		"name": "空ビン",
		"explanation": "液体だけでなく、虫や妖精など何でも入る容器。",
		"icon": {
			"emoji": "🍾",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 12,
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
