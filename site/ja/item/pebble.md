# 小石

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">小石</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🪨</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>1 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 何気ないが蹴れば飛ぶ。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🍂</span>落ち葉拾い](/ja/action/gather-fallen-leaves) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv1 | 7 | 91% | 3.2 | 1,147 |
| [<span class="wiki-icon">🏖️</span>砂場掘り](/ja/action/dig-sandbox) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv5 | 7 | 91% | 3.2 | 1,147 |
| [<span class="wiki-icon">🪷</span>池のほとり](/ja/action/pond-side) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | Lv14 | 3 | 56% | 0.84 | 302 |

## 用途

### 条件にしているもの

| 対象 | 種類 | 条件 |
| --- | --- | --- |
| [<span class="wiki-icon">⛏️</span>鉱夫の酒盛り](/ja/event/miner-feast) | イベントの条件（条件達成（タスク）） | [<span class="wiki-icon">🪨</span>小石](/ja/item/pebble) ×15 |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: ごみ</div><div class="wiki-navbox-body">63件。一覧は <a href="#/ja/group/junk"><span class="wiki-icon">🗑️</span>ごみ</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `pebble` |
| `category` | `warehouse` |
| `group` | `junk` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `1` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 1 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "pebble",
		"name": "小石",
		"explanation": "何気ないが蹴れば飛ぶ。",
		"icon": {
			"emoji": "🪨",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "junk",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 1,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
