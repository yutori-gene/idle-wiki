# パンドラの箱

<div class="wiki-infobox" style="--accent:#a85c47"><div class="wiki-infobox-title">パンドラの箱</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📦</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/loft"><span class="wiki-icon">🗃️</span>ロフト</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/treasure-chest"><span class="wiki-icon">🎁</span>宝箱</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>売却不可</td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>1</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> あらゆる災いが詰められた箱。ただし希望も箱の底にある。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">☁️</span>雲上の遺跡](/ja/action/ruins-above-clouds) | [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | Lv8 | 2 | 41.8% | 0.836 | 0.167 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">📦</span>パンドラの箱を開ける](/ja/action/open-pandoras-box) | [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | Lv20 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#a85c47"><div class="wiki-navbox-title">グループ: 宝箱</div><div class="wiki-navbox-body"><a href="#/ja/item/donation-box"><span class="wiki-icon">🗳️</span>募金箱</a> ・ <a href="#/ja/item/wallet"><span class="wiki-icon">👛</span>財布</a> ・ <a href="#/ja/item/wooden-chest"><span class="wiki-icon">🪵</span>木の宝箱</a> ・ <a href="#/ja/item/time-capsule"><span class="wiki-icon">📦</span>タイムカプセル</a> ・ <a href="#/ja/item/vaulting-box"><span class="wiki-icon">📦</span>跳び箱</a> ・ <a href="#/ja/item/iron-chest"><span class="wiki-icon">🔩</span>鉄の宝箱</a> ・ <a href="#/ja/item/great-treasure"><span class="wiki-icon">💰</span>大秘宝</a> ・ <a href="#/ja/item/cold-chest"><span class="wiki-icon">🧊</span>冷たい宝箱</a> ・ <a href="#/ja/item/medium-chest"><span class="wiki-icon">🎁</span>中くらいの宝箱</a> ・ <a href="#/ja/item/tiny-chest"><span class="wiki-icon">🎁</span>極小の宝箱</a> ・ <a href="#/ja/item/giant-chest"><span class="wiki-icon">🎁</span>巨大な宝箱</a> ・ <a href="#/ja/item/pumpkin-carriage"><span class="wiki-icon">🎃</span>かぼちゃの馬車</a> ・ <a href="#/ja/item/ark-of-covenant"><span class="wiki-icon">🕍</span>聖櫃</a> ・ <a href="#/ja/item/vampire-coffin"><span class="wiki-icon">⚰️</span>吸血鬼の棺</a> ・ <a href="#/ja/item/sith-box"><span class="wiki-icon">⚫</span>シスの箱</a> ・ <a href="#/ja/item/pandoras-box"><span class="wiki-icon">📦</span>パンドラの箱</a> ・ <a href="#/ja/item/rainbow-chest"><span class="wiki-icon">🌈</span>虹色の宝箱</a> ・ <a href="#/ja/item/schrodingers-box"><span class="wiki-icon">📦</span>シュレーディンガーの箱</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `pandoras-box` |
| `category` | `loft` |
| `group` | `treasure-chest` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `0` |
| `coinId` | （空） |
| `maximum` | `1` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 10 |
| CSV `rare` | 2 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "pandoras-box",
		"name": "パンドラの箱",
		"explanation": "あらゆる災いが詰められた箱。ただし希望も箱の底にある。",
		"icon": {
			"emoji": "📦",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "loft",
	"group": "treasure-chest",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 0,
	"coinId": "",
	"maximum": 1,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
