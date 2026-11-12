# 月桂冠

<div class="wiki-infobox" style="--accent:#3a4047"><div class="wiki-infobox-title">月桂冠</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/102757fdf794839e.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/synthesize"><img class="wiki-icon" src="assets/icon/c9bb2836ebd5ad26.svg" alt="">合成</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>所要時間</th><td>2時間30分</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> シェフハットに白樺の皮を足して月桂冠に仕立て直す。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/77067b5193052e7a.svg" alt="">白樺の皮](/ja/item/birch-bark) ×5（消費する）
- [<img class="wiki-icon" src="assets/icon/692ca06a76774f5b.svg" alt="">ほつれた布切れ](/ja/item/frayed-cloth) ×10（消費する）
- [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) ×90（消費する）
- [<img class="wiki-icon" src="assets/icon/ddd1b6c54fa5b6bc.svg" alt="">シェフハット](/ja/item/chef-hat) ×1（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/54e436ba42a8d60a.svg" alt="">月桂冠](/ja/item/laurel-crown) ×1 | 成功時 | 100% | 1 | 0.4 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時 |
| --- | --- | --- | --- | --- | --- |
| — | 2時間30分 | 100% | — | 0.4 | — |

カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 18 | 86 | -68 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#3a4047"><div class="wiki-navbox-title">防具のアクション</div><div class="wiki-navbox-body">90件。一覧は <a href="#/ja/category/armor"><img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `craft-laurel-crown` |
| `category` | `armor` |
| `discipline` | （空） |
| `group` | `synthesize` |
| `unlocked` | `hinted` |
| `level` | `25` |
| `disciplineLevel` | `0` |
| `experience` | `2572` |
| `seconds` | `9000` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 5 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "craft-laurel-crown",
		"name": "月桂冠",
		"explanation": "シェフハットに白樺の皮を足して月桂冠に仕立て直す。",
		"icon": {
			"emoji": "🏆",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/102757fdf794839e.svg）"
		},
		"color": ""
	},
	"category": "armor",
	"discipline": "",
	"group": "synthesize",
	"unlocked": "hinted",
	"level": 25,
	"disciplineLevel": 0,
	"experience": 2572,
	"seconds": 9000,
	"chance": 1,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "birch-bark",
			"count": 5,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "frayed-cloth",
			"count": 10,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "coin",
			"count": 90,
			"chance": 1,
			"equipment": false
		},
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
			"id": "laurel-crown",
			"count": 1,
			"chance": 1
		}
	],
	"progressType": "single",
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
