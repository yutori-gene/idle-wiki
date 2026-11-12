# 迷子の小鳥

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">迷子の小鳥</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/b9d09caf0d4d2df0.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/request"><img class="wiki-icon" src="assets/icon/09c85630a7f583a2.svg" alt="">依頼</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/e4431f2a3a0df5d2.svg" alt="">スズメ](/ja/item/sparrow) ×1
- [<img class="wiki-icon" src="assets/icon/a6c87b93b31c1653.svg" alt="">ハト](/ja/item/pigeon) ×1

## 報酬

- [<img class="wiki-icon" src="assets/icon/a124f32c43131da0.svg" alt="">タンポポ](/ja/item/dandelion) ×5
- [<img class="wiki-icon" src="assets/icon/5f7df036cb7939a5.svg" alt="">レモン](/ja/item/lemon) ×3

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">依頼</div><div class="wiki-navbox-body"><a href="#/ja/event/acorn-pile"><img class="wiki-icon" src="assets/icon/fc4167cd3086e392.svg" alt="">どんぐりの小山</a> ・ <a href="#/ja/event/lost-bird"><img class="wiki-icon" src="assets/icon/b9d09caf0d4d2df0.svg" alt="">迷子の小鳥</a> ・ <a href="#/ja/event/alley-merchant"><img class="wiki-icon" src="assets/icon/a66d648222854cb8.svg" alt="">路地裏の商人</a> ・ <a href="#/ja/event/mushroom-master"><img class="wiki-icon" src="assets/icon/cdf61d35ef60ef37.svg" alt="">きのこ採り名人</a> ・ <a href="#/ja/event/lost-path"><img class="wiki-icon" src="assets/icon/1b3dd0e8517f55c6.svg" alt="">迷い道</a> ・ <a href="#/ja/event/mysterious-flyer"><img class="wiki-icon" src="assets/icon/c134e17a5e1a7ab3.svg" alt="">謎のチラシ</a> ・ <a href="#/ja/event/knight-training"><img class="wiki-icon" src="assets/icon/810244f1b2027851.svg" alt="">騎士の修練</a> ・ <a href="#/ja/event/drifted-bottle"><img class="wiki-icon" src="assets/icon/7bd000fdbc80d20f.svg" alt="">漂着ボトル</a> ・ <a href="#/ja/event/fisherman-help"><img class="wiki-icon" src="assets/icon/2f072622be6d1927.svg" alt="">漁師の手伝い</a> ・ <a href="#/ja/event/snowman-making"><img class="wiki-icon" src="assets/icon/ecdc71e4b0d16771.svg" alt="">雪だるま作り</a> ・ <a href="#/ja/event/herb-gift"><img class="wiki-icon" src="assets/icon/0031996b49f69cc8.svg" alt="">薬草の贈り物</a> ・ <a href="#/ja/event/screw-pickup"><img class="wiki-icon" src="assets/icon/23e527da1aaaf52f.svg" alt="">ネジ拾い</a> ・ <a href="#/ja/event/broken-robot"><img class="wiki-icon" src="assets/icon/b5fe4abd5e9acbbb.svg" alt="">壊れたロボ</a> ・ <a href="#/ja/event/miner-feast"><img class="wiki-icon" src="assets/icon/664e91fb2b2f39f1.svg" alt="">鉱夫の酒盛り</a> ・ <a href="#/ja/event/lost-fire-dragon"><img class="wiki-icon" src="assets/icon/9037a275bf3995c6.svg" alt="">迷子の火竜</a> ・ <a href="#/ja/event/cook-in-trouble"><img class="wiki-icon" src="assets/icon/412b321b3a9d7855.svg" alt="">料理番の窮地</a> ・ <a href="#/ja/event/undead-plea"><img class="wiki-icon" src="assets/icon/2faa65b6f0700b4e.svg" alt="">亡者の嘆願</a> ・ <a href="#/ja/event/flame-trial"><img class="wiki-icon" src="assets/icon/4e8408d31f1b9b3d.svg" alt="">火焔の試練</a> ・ <a href="#/ja/event/angel-song"><img class="wiki-icon" src="assets/icon/d785aef787873585.svg" alt="">天使の歌</a> ・ <a href="#/ja/event/priest-blessing"><img class="wiki-icon" src="assets/icon/008b32cd84c8025f.svg" alt="">神官の祝福</a></div></div>

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
			"image": "（data URI の画像。site/assets/icon/b9d09caf0d4d2df0.svg）"
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
