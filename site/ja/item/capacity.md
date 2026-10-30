# 物置

<div class="wiki-infobox" style="--accent:#8a5a2b"><div class="wiki-infobox-title">物置</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">📦</span></div><table><tr><th>種類</th><td>所持枠（アイテムの種類数）</td></tr><tr><th>初期の枠</th><td>30</td></tr><tr><th>購入</th><td><a href="#/ja/item/coin"><span class="wiki-icon">🪙</span>コイン</a>で購入（上限なし）</td></tr></table></div>

> 同時に置いておけるアイテムの種類数。コインで枠を買えるほか、ダンジョンで容器を見つけると増える

物置は**アイテムの種類数**の上限。同じアイテムはいくつ持っても1枠。いっぱいになると、まだ持っていない種類のアイテムを受け取れない。

コインで買うと1枠ずつ増えるが、買うたびに高くなる。ダンジョンの探索で手に入る**容器**（容器グループ: [<span class="wiki-icon">🎒</span>容器](/ja/group/container)）を手に入れると、隠しイベントで一度に大きく増える。


## 購入価格

n回目の価格 = 100 × 1.3^(n−1)（切り捨て）。上限は無いので、ここでは20回目までを示す。

| 購入 | 購入後の枠 | 価格（コイン） | 累計 |
| --- | --- | --- | --- |
| 1回目 | 31 | 100 | 100 |
| 2回目 | 32 | 130 | 230 |
| 3回目 | 33 | 169 | 399 |
| 4回目 | 34 | 219 | 618 |
| 5回目 | 35 | 285 | 903 |
| 6回目 | 36 | 371 | 1,274 |
| 7回目 | 37 | 482 | 1,756 |
| 8回目 | 38 | 627 | 2,383 |
| 9回目 | 39 | 815 | 3,198 |
| 10回目 | 40 | 1,060 | 4,258 |
| 11回目 | 41 | 1,378 | 5,636 |
| 12回目 | 42 | 1,792 | 7,428 |
| 13回目 | 43 | 2,329 | 9,757 |
| 14回目 | 44 | 3,028 | 12,785 |
| 15回目 | 45 | 3,937 | 16,722 |
| 16回目 | 46 | 5,118 | 21,840 |
| 17回目 | 47 | 6,654 | 28,494 |
| 18回目 | 48 | 8,650 | 37,144 |
| 19回目 | 49 | 11,245 | 48,389 |
| 20回目 | 50 | 14,619 | 63,008 |

## 購入以外で増やす

イベントの報酬で増える（購入回数の上限とは別枠）。

### イベント

| イベント | タイミング | 個数 | 確率 |
| --- | --- | --- | --- |
| [<span class="wiki-icon">🛍️</span>エコバッグを手に入れた](/ja/event/storage-eco-bag) | 変化時（隠し） | 10 | 100% |
| [<span class="wiki-icon">🧺</span>ピクニックバスケットを手に入れた](/ja/event/storage-picnic-basket) | 変化時（隠し） | 10 | 100% |
| [<span class="wiki-icon">🏺</span>壺を手に入れた](/ja/event/storage-jar) | 変化時（隠し） | 10 | 100% |
| [<span class="wiki-icon">🎒</span>リュックサックを手に入れた](/ja/event/storage-backpack) | 変化時（隠し） | 15 | 100% |
| [<span class="wiki-icon">🦘</span>カンガルーの袋を手に入れた](/ja/event/storage-kangaroo-pouch) | 変化時（隠し） | 15 | 100% |
| [<span class="wiki-icon">💊</span>ホイポイカプセルを手に入れた](/ja/event/storage-hoi-poi-capsule) | 変化時（隠し） | 20 | 100% |
| [<span class="wiki-icon">📦</span>コンテナを手に入れた](/ja/event/storage-shipping-container) | 変化時（隠し） | 20 | 100% |
| [<span class="wiki-icon">⚰️</span>棺桶を手に入れた](/ja/event/storage-coffin) | 変化時（隠し） | 25 | 100% |
| [<span class="wiki-icon">🌀</span>3次元ポケットを手に入れた](/ja/event/storage-3d-pocket) | 変化時（隠し） | 30 | 100% |
| [<span class="wiki-icon">🔌</span>エントリープラグを手に入れた](/ja/event/storage-entry-plug) | 変化時（隠し） | 35 | 100% |

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `capacity` |
| `increasingRate` | `1.3` |
| `initialCost` | `100` |
| `initialCount` | `30` |
| `coinId` | （空） |
| `buyingLimit` | `0` |

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "capacity",
		"name": "物置",
		"explanation": "同時に置いておけるアイテムの種類数。コインで枠を買えるほか、ダンジョンで容器を見つけると増える",
		"icon": {
			"emoji": "📦",
			"iconify": "",
			"image": ""
		},
		"color": "#8a5a2b"
	},
	"increasingRate": 1.3,
	"initialCost": 100,
	"initialCount": 30,
	"coinId": "",
	"buyingLimit": 0
}
```

</details>
