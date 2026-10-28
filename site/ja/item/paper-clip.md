# クリップ

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">クリップ</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📎</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>3 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 必要な時に手元になくて、必要のない時に手元にある。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🗑️</span>ゴミ箱あさり](/ja/action/rummage-trash-can) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv5 | 7 | 91% | 3.2 | 382 |
| [<span class="wiki-icon">👺</span>グレムリン](/ja/action/gremlin) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv16 | 1 | 6.11% | 0.031 | 8.3 |
| [<span class="wiki-icon">🥷</span>盗賊](/ja/action/thief) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | Lv17 | 1 | 3.11% | 0.016 | 4.6 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🗳️</span>募金箱を開ける](/ja/action/open-donation-box) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv4 | 2 | 100% |  |
| [<span class="wiki-icon">🎁</span>極小の宝箱を開ける](/ja/action/open-tiny-chest) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv27 | 2 | 100% |  |
| [<span class="wiki-icon">🪪</span>認証バッジを作る](/ja/action/craft-verified-badge) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv14 | 15 | 100% |  |
| [<span class="wiki-icon">🎖️</span>ジムバッジを作る](/ja/action/craft-gym-badge) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv15 | 15 | 100% |  |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `paper-clip` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `3` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `consumeChance` | `1` |
| `skill` | （空） |
| CSV `tier` | 3 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "paper-clip",
		"name": "クリップ",
		"explanation": "必要な時に手元になくて、必要のない時に手元にある。",
		"icon": {
			"emoji": "📎",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 3,
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
