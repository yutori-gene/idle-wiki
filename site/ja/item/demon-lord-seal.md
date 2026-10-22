# 魔王の印璽

<div class="wiki-infobox" style="--accent:#8c8577"><div class="wiki-infobox-title">魔王の印璽</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🖋️</span></div><table><tr><th>管理カテゴリ</th><td><a href="#/ja/category/warehouse"><span class="wiki-icon">📦</span>倉庫</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a></td></tr><tr><th>装備</th><td>装備不可</td></tr><tr><th>売値</th><td>2,187 <a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a></td></tr><tr><th>買値</th><td>購入不可</td></tr><tr><th>所持上限</th><td>無制限</td></tr><tr><th>入手経路</th><td>アクション</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 押された者は魔に落ちる。


## 入手方法

### アクション

| アクション | 場所 | 必要Lv | 個数 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🐘</span>ベヒモス](/ja/action/behemoth) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | Lv46 | 1 | 4.98% | 0.025 | 0 |

## 用途

### 材料として消費

| アクション | 場所 | 必要Lv | 個数 | 消費率 | 備考 |
| --- | --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🗡️</span>ムラマサを作る](/ja/action/craft-muramasa) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv44 | 1 | 100% |  |
| [<span class="wiki-icon">⚔️</span>ビームサーベルを作る](/ja/action/craft-beam-saber) | [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | Lv47 | 1 | 100% |  |
| [<span class="wiki-icon">👘</span>神衣を作る](/ja/action/craft-god-robe) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv43 | 1 | 100% |  |
| [<span class="wiki-icon">🥾</span>立体機動ブーツを作る](/ja/action/craft-odm-boots) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv43 | 1 | 100% |  |
| [<span class="wiki-icon">💚</span>翡翠のかんざしを作る](/ja/action/craft-jade-hairpin) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv43 | 1 | 100% |  |
| [<span class="wiki-icon">🛡️</span>矛盾を作る](/ja/action/craft-contradiction) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv44 | 1 | 100% |  |
| [<span class="wiki-icon">⚫</span>虚無のリングを作る](/ja/action/craft-void-ring) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv46 | 1 | 100% |  |
| [<span class="wiki-icon">🅿️</span>プラグスーツを作る](/ja/action/craft-plug-suit) | [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | Lv47 | 1 | 100% |  |
| [<span class="wiki-icon">💍</span>一つの指輪を作る](/ja/action/craft-one-ring) | [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | Lv43 | 1 | 100% |  |
| [<span class="wiki-icon">🪄</span>スターロッドを作る](/ja/action/craft-star-rod) | [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) | Lv46 | 1 | 100% |  |

<div class="wiki-navbox" style="--accent:#8c8577"><div class="wiki-navbox-title">グループ: 素材</div><div class="wiki-navbox-body">222件。一覧は <a href="#/ja/group/material"><span class="wiki-icon">🪵</span>素材</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `demon-lord-seal` |
| `category` | `warehouse` |
| `group` | `material` |
| `unlocked` | `hidden` |
| `buyingValue` | `0` |
| `sellingValue` | `2187` |
| `coinId` | （空） |
| `maximum` | `0` |
| `equipmentType` | `impossible` |
| `skill` | （空） |
| CSV `tier` | 9 |
| CSV `rare` | 5 |

**設計ドキュメント**: [plan.md › Item値段](/ja/dev/doc/plan?id=item%E5%80%A4%E6%AE%B5) ／ [plan.md › アイテム要件（Item.requirements）方針](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%EF%BC%88itemrequirements%EF%BC%89%E6%96%B9%E9%87%9D) ／ [plan.md › 入手経路パターン（Step 1-1 確定）](/ja/dev/doc/plan?id=%E5%85%A5%E6%89%8B%E7%B5%8C%E8%B7%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-1-%E7%A2%BA%E5%AE%9A%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "demon-lord-seal",
		"name": "魔王の印璽",
		"explanation": "押された者は魔に落ちる。",
		"icon": {
			"emoji": "🖋️",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "warehouse",
	"group": "material",
	"unlocked": "hidden",
	"buyingValue": 0,
	"sellingValue": 2187,
	"coinId": "",
	"maximum": 0,
	"equipmentType": "impossible",
	"requirements": [],
	"properties": [],
	"skill": ""
}
```

</details>
