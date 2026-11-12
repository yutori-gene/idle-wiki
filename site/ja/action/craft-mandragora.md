# マンドラゴラ

<div class="wiki-infobox" style="--accent:#463476"><div class="wiki-infobox-title">マンドラゴラ</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/67426b1da0cfdf01.svg" alt=""></div><table><tr><th>場所</th><td><a href="#/ja/category/atelier"><img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/synthesize"><img class="wiki-icon" src="assets/icon/c9bb2836ebd5ad26.svg" alt="">合成</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>必要Lv</th><td>Lv22</td></tr><tr><th>所要時間</th><td>2時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>経験値</th><td>2,058</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>非表示</td></tr></table></div>

> 腐葉土に海泡を混ぜて根を眠らせる。引き抜くのは投げる瞬間だけ。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房](/ja/category/atelier) Lv22以上（所属カテゴリのレベル）
- [<img class="wiki-icon" src="assets/icon/c188baa033147b65.svg" alt="">腐葉土](/ja/item/leaf-mold) ×4（消費する）
- [<img class="wiki-icon" src="assets/icon/e23d3200e5000716.svg" alt="">海泡](/ja/item/sea-foam) ×3（消費する）
- [<span class="wiki-icon">🏅</span>街の証](/ja/item/town-proof) ×1（消費しない）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/5b63f3953ab3bbc0.svg" alt="">マンドラゴラ](/ja/item/mandragora) ×53 | 成功時 | 100% | 53 | 26.5 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値%/時 |
| --- | --- | --- | --- | --- | --- |
| ±0（Lv22） | 2時間 | 100% | 2,058 | 0.5 | 115 |
| +10（Lv32） | 1時間37分 | 100% | 1,120.23 | 0.6 | 27 |
| +20（Lv42） | 1時間20分 | 100% | 609.78 | 0.8 | 6 |

レベル差＝所属カテゴリのレベル − 必要Lv。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<img class="wiki-icon" src="assets/icon/8255d311d6ac85ae.svg" alt="">コイン](/ja/item/coin) | 954 | 10 | 944 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#463476"><div class="wiki-navbox-title">工房のアクション</div><div class="wiki-navbox-body">64件。一覧は <a href="#/ja/category/atelier"><img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房</a> を参照</div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `craft-mandragora` |
| `category` | `atelier` |
| `discipline` | （空） |
| `group` | `synthesize` |
| `unlocked` | `hidden` |
| `level` | `22` |
| `disciplineLevel` | `0` |
| `experience` | `2058` |
| `seconds` | `7200` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 4 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "craft-mandragora",
		"name": "マンドラゴラ",
		"explanation": "腐葉土に海泡を混ぜて根を眠らせる。引き抜くのは投げる瞬間だけ。",
		"icon": {
			"emoji": "🌱",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/67426b1da0cfdf01.svg）"
		},
		"color": ""
	},
	"category": "atelier",
	"discipline": "",
	"group": "synthesize",
	"unlocked": "hidden",
	"level": 22,
	"disciplineLevel": 0,
	"experience": 2058,
	"seconds": 7200,
	"chance": 1,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "leaf-mold",
			"count": 4,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "sea-foam",
			"count": 3,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "town-proof",
			"count": 1,
			"chance": 0,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "mandragora",
			"count": 53,
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
