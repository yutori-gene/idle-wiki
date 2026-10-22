# 狐火

<div class="wiki-infobox" style="--accent:#c26a8e"><div class="wiki-infobox-title">狐火</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🦊</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/garden"><span class="wiki-icon">🐾</span>庭</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>7 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 青白く燃える怪しい炎。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🦊</span>炎のキツネと遊ぶ](/ja/action/play-with-flame-fox) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv15 | 1 | 100% | 1 | 0.286 |
| [<span class="wiki-icon">🦊</span>九尾の狐と契約する](/ja/action/contract-nine-tailed-fox) | [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | Lv20 | 2 | 100% | 2 | 0.4 |

<div class="wiki-navbox" style="--accent:#c26a8e"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `foxfire` |
| `category` | `garden` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `7` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 7 |
| CSV `rare` | 0 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "foxfire",
		"name": "狐火",
		"explanation": "青白く燃える怪しい炎。",
		"icon": {
			"emoji": "🦊",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "garden",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 7,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
