# 万華鏡を作る

<div class="wiki-infobox" style="--accent:#9196ab"><div class="wiki-infobox-title">万華鏡を作る</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🔮</span></div><table><tr><th>場所</th><td><a href="#/ja/category/bedroom"><span class="wiki-icon">🛏️</span>寝室</a></td></tr><tr><th>グループ</th><td><a href="#/ja/group/shelf"><span class="wiki-icon">📚</span>棚</a></td></tr><tr><th>進行</th><td>単発</td></tr><tr><th>所要時間</th><td>7時間</td></tr><tr><th>成功率</th><td>100%</td></tr><tr><th>最大回数</th><td>無制限</td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 宝石を刻んで筒に詰め、覗くたびに違う景色を。


**単発**: 1回ずつ進む。100%になったら開封して報酬を受け取る。

## 必要なもの

- [<span class="wiki-icon">🪟</span>ガラス](/ja/item/glass) ×3（消費する）
- [<span class="wiki-icon">❤️</span>ルビー](/ja/item/ruby) ×2（消費する）
- [<span class="wiki-icon">💚</span>エメラルド](/ja/item/emerald) ×4（消費する）

材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。

## 取得物

| 取得物 | 条件 | 確率 | 1回あたり | 1時間あたり |
| --- | --- | --- | --- | --- |
| [<span class="wiki-icon">🔮</span>万華鏡](/ja/item/kaleidoscope) ×1 | 成功時 | 100% | 1 | 0.143 |

取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 100%（レベル差0・装備なし）で按分した値。

## 計算値

| レベル差 | 所要時間 | 成功率 | 経験値/成功 | 実行回数/時 | 経験値/時 |
| --- | --- | --- | --- | --- | --- |
| — | 7時間 | 100% | — | 0.1 | — |

経験値の入り先カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。

## 収支（1時間あたり）

| 通貨 | 収入 | 材料費 | 差引 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🪙</span>コイン](/ja/item/coin) | 0 | 67 | -67 |

取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。

<div class="wiki-navbox" style="--accent:#9196ab"><div class="wiki-navbox-title">寝室のアクション</div><div class="wiki-navbox-body"><a href="#/ja/action/craft-sand-castle"><span class="wiki-icon">🏖️</span>砂の城を作る</a> ・ <a href="#/ja/action/weave-flying-carpet"><span class="wiki-icon">🧞</span>空飛ぶ絨毯を織る</a> ・ <a href="#/ja/action/craft-dancing-statue"><span class="wiki-icon">🕺</span>踊る銅像を作る</a> ・ <a href="#/ja/action/repair-grandfather-clock"><span class="wiki-icon">🕰️</span>おじいさんの時計を直す</a> ・ <a href="#/ja/action/bundle-peacock-feather"><span class="wiki-icon">🪶</span>孔雀の羽を束ねる</a> ・ <a href="#/ja/action/connect-heart-piece"><span class="wiki-icon">💔</span>ハートのカケラを繋ぐ</a> ・ <a href="#/ja/action/inherit-burning-passion"><span class="wiki-icon">🔥</span>熱い想いを受け継ぐ</a> ・ <a href="#/ja/action/write-will-document"><span class="wiki-icon">📜</span>遺言書を書く</a> ・ <a href="#/ja/action/assemble-millennium-puzzle"><span class="wiki-icon">🧩</span>千年パズルを組む</a> ・ <a href="#/ja/action/seal-message-in-a-bottle"><span class="wiki-icon">✉️</span>ボトルメールを封じる</a> ・ <a href="#/ja/action/craft-snow-globe"><span class="wiki-icon">❄️</span>スノードームを作る</a> ・ <a href="#/ja/action/craft-kaleidoscope"><span class="wiki-icon">🔮</span>万華鏡を作る</a> ・ <a href="#/ja/action/copy-infinite-loop-videotape"><span class="wiki-icon">📼</span>無限ループするビデオテープを複製する</a> ・ <a href="#/ja/action/polish-golden-orb"><span class="wiki-icon">🟡</span>金の玉を磨く</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `craft-kaleidoscope` |
| `category` | `bedroom` |
| `attribute` | （空） |
| `group` | `shelf` |
| `unlocked` | `hinted` |
| `level` | `35` |
| `experience` | `7200` |
| `seconds` | `25200` |
| `chance` | `1` |
| `maximum` | `0` |
| `progressType` | `single` |
| CSV `tier` | 7 |

**設計ドキュメント**: [plan.md › アクションパターン（Step 1-3 確定・装備分）](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%EF%BC%88step-1-3-%E7%A2%BA%E5%AE%9A%E3%83%BB%E8%A3%85%E5%82%99%E5%88%86%EF%BC%89) ／ [plan.md › Action 列補完ルール（tier / maximum / level / rare）](/ja/dev/doc/plan?id=action-%E5%88%97%E8%A3%9C%E5%AE%8C%E3%83%AB%E3%83%BC%E3%83%AB%EF%BC%88tier-maximum-level-rare%EF%BC%89) ／ [plan.md › アクション基準秒数](/ja/dev/doc/plan?id=%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9F%BA%E6%BA%96%E7%A7%92%E6%95%B0)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "craft-kaleidoscope",
		"name": "万華鏡を作る",
		"explanation": "宝石を刻んで筒に詰め、覗くたびに違う景色を。",
		"icon": {
			"emoji": "🔮",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "bedroom",
	"attribute": "",
	"group": "shelf",
	"unlocked": "hinted",
	"level": 35,
	"experience": 7200,
	"seconds": 25200,
	"chance": 1,
	"maximum": 0,
	"requirements": [
		{
			"type": "item",
			"id": "glass",
			"count": 3,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "ruby",
			"count": 2,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "emerald",
			"count": 4,
			"chance": 1,
			"equipment": false
		}
	],
	"acquisitions": [
		{
			"type": "item",
			"id": "kaleidoscope",
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
