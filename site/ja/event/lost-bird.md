# 迷子の小鳥

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">迷子の小鳥</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🐦</span></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/request"><span class="wiki-icon">📋</span>依頼</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<span class="wiki-icon">🐦</span>スズメ](/ja/item/sparrow) ×1
- [<span class="wiki-icon">🕊️</span>ハト](/ja/item/pigeon) ×1

## 報酬

- [<span class="wiki-icon">🌼</span>タンポポ](/ja/item/dandelion) ×5
- [<span class="wiki-icon">🍋</span>レモン](/ja/item/lemon) ×3

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">依頼</div><div class="wiki-navbox-body"><a href="#/ja/event/acorn-pile"><span class="wiki-icon">🌰</span>どんぐりの小山</a> ・ <a href="#/ja/event/lost-bird"><span class="wiki-icon">🐦</span>迷子の小鳥</a> ・ <a href="#/ja/event/alley-merchant"><span class="wiki-icon">🧙</span>路地裏の商人</a> ・ <a href="#/ja/event/mushroom-master"><span class="wiki-icon">🍄</span>きのこ採り名人</a> ・ <a href="#/ja/event/lost-path"><span class="wiki-icon">🧭</span>迷い道</a> ・ <a href="#/ja/event/mysterious-flyer"><span class="wiki-icon">📄</span>謎のチラシ</a> ・ <a href="#/ja/event/knight-training"><span class="wiki-icon">🛡️</span>騎士の修練</a> ・ <a href="#/ja/event/drifted-bottle"><span class="wiki-icon">🍾</span>漂着ボトル</a> ・ <a href="#/ja/event/fisherman-help"><span class="wiki-icon">🎣</span>漁師の手伝い</a> ・ <a href="#/ja/event/snowman-making"><span class="wiki-icon">⛄</span>雪だるま作り</a> ・ <a href="#/ja/event/herb-gift"><span class="wiki-icon">🌿</span>薬草の贈り物</a> ・ <a href="#/ja/event/screw-pickup"><span class="wiki-icon">🔩</span>ネジ拾い</a> ・ <a href="#/ja/event/broken-robot"><span class="wiki-icon">🤖</span>壊れたロボ</a> ・ <a href="#/ja/event/miner-feast"><span class="wiki-icon">⛏️</span>鉱夫の酒盛り</a> ・ <a href="#/ja/event/lost-fire-dragon"><span class="wiki-icon">🐉</span>迷子の火竜</a> ・ <a href="#/ja/event/cook-in-trouble"><span class="wiki-icon">🍳</span>料理番の窮地</a> ・ <a href="#/ja/event/undead-plea"><span class="wiki-icon">👻</span>亡者の嘆願</a> ・ <a href="#/ja/event/flame-trial"><span class="wiki-icon">🔥</span>火焔の試練</a> ・ <a href="#/ja/event/angel-song"><span class="wiki-icon">😇</span>天使の歌</a> ・ <a href="#/ja/event/priest-blessing"><span class="wiki-icon">🙏</span>神官の祝福</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `lost-bird` |
| `category` | （空） |
| `timing` | `tasked` |
| `unlocked` | `hinted` |
| `requiringGroup` | `false` |
| `group` | `request` |
| `bucket` | `tasks` |

**設計ドキュメント**: [plan.md › イベント・ストーリー](/ja/dev/doc/plan?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC) ／ [terms.md › イベントタイミング（EventTimingTypes）](/ja/dev/doc/terms?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%EF%BC%88eventtimingtypes%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "lost-bird",
		"name": "迷子の小鳥",
		"explanation": "",
		"icon": {
			"emoji": "🐦",
			"iconify": "",
			"image": ""
		},
		"color": ""
	},
	"category": "",
	"timing": "tasked",
	"unlocked": "hinted",
	"requirements": [
		{
			"type": "item",
			"id": "sparrow",
			"count": 1,
			"chance": 1,
			"equipment": false
		},
		{
			"type": "item",
			"id": "pigeon",
			"count": 1,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [
		{
			"type": "item",
			"id": "dandelion",
			"count": 5,
			"chance": 1
		},
		{
			"type": "item",
			"id": "lemon",
			"count": 3,
			"chance": 1
		}
	],
	"group": "request",
	"bucket": "tasks"
}
```

</details>
