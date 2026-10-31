# シェフハット（分解）

<div class="wiki-infobox" style="--accent:#3a4047"><div class="wiki-infobox-title">シェフハット（分解）</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">👨‍🍳</span></div><table><tr><th>場所</th><td><a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/disassemble"><span class="wiki-icon">♻️</span>分解</a></td></tr><tr><th>進行</th><td>連続</td></tr><tr><th>所要時間</th><td>15分</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> シェフハットをほどいて布に戻す。


**連続**: 時間で進み、止めるまで繰り返す。オフライン中も進む。

## 必要なもの

- [<span class="wiki-icon">👨‍🍳</span>シェフハット](/ja/item/chef-hat) ×1（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🧵</span>ほつれた布切れ](/ja/item/frayed-cloth) ×1 | 成功時 | 100% | 1 | 4 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| — | 15分 | 100% | — | 4 | — |

経験値の入り先カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 36 | 36 | 0 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#3a4047"><div class="wiki-navbox-title">防具のアクション</div><div class="wiki-navbox-body">95件。一覧は <a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `disassemble-chef-hat` |
| `category` | `armor` |
| `attribute` | （空） |
| `group` | `disassemble` |
| `unlocked` | `hidden` |
| `level` | `13` |
| `experience` | `258` |
| `seconds` | `900` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `persistent` |
| CSV `tier` | 3 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "disassemble-chef-hat",
		"name": "シェフハット（分解）",
		"explanation": "シェフハットをほどいて布に戻す。",
		"icon": {
			"emoji": "👨‍🍳",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "armor",
	"attribute": "",
	"group": "disassemble",
	"unlocked": "hidden",
	"level": 13,
	"experience": 258,
	"seconds": 900,
	"chance": 1,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "chef-hat",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "frayed-cloth",
			"count": 1,
			"chance": 1
		}
	],
	"progressType": "persistent",
	"property": {
		"attack": 0,
		"defence": 0,
		"accuracy": 0,
		"evasion": 0,
		"restore": 0
	},
	"skills": []
}
```

</details>
