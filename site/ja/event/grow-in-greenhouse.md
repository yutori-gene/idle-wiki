# 温室で育てよう

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">温室で育てよう</div><div class="wiki-infobox-icon"><span class="wiki-icon-large">🌱</span></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/tutorial"><span class="wiki-icon">🔰</span>チュートリアル</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 温室で植物を育てれば食材が手に入る。台所の素材にもなる


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv8以上

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">チュートリアル</div><div class="wiki-navbox-body"><a href="#/ja/event/first-step"><span class="wiki-icon">👣</span>はじめての一歩</a> ・ <a href="#/ja/event/try-shopping"><span class="wiki-icon">🛒</span>買い物をしてみよう</a> ・ <a href="#/ja/event/organize-warehouse"><span class="wiki-icon">📦</span>倉庫を整理しよう</a> ・ <a href="#/ja/event/try-equipment"><span class="wiki-icon">🗡️</span>装備を使ってみよう</a> ・ <a href="#/ja/event/try-melee-weapon"><span class="wiki-icon">⚔️</span>近接武器を試そう</a> ・ <a href="#/ja/event/grow-in-greenhouse"><span class="wiki-icon">🌱</span>温室で育てよう</a> ・ <a href="#/ja/event/expand-garden"><span class="wiki-icon">🐾</span>庭を広げよう</a> ・ <a href="#/ja/event/cook-in-kitchen"><span class="wiki-icon">🍳</span>台所で調理しよう</a> ・ <a href="#/ja/event/learn-in-study"><span class="wiki-icon">📚</span>書斎で学ぼう</a> ・ <a href="#/ja/event/use-loft"><span class="wiki-icon">🗃️</span>ロフトを使おう</a> ・ <a href="#/ja/event/ready-throwing-weapon"><span class="wiki-icon">🎯</span>投擲武器を構えよう</a> ・ <a href="#/ja/event/brew-in-basement"><span class="wiki-icon">⚗️</span>地下室で調合しよう</a> ・ <a href="#/ja/event/prepare-armor"><span class="wiki-icon">🛡️</span>防具を整えよう</a> ・ <a href="#/ja/event/reinforce-with-accessory"><span class="wiki-icon">💍</span>装飾で補強しよう</a> ・ <a href="#/ja/event/throw-explosive-weapon"><span class="wiki-icon">💣</span>爆発武器を放とう</a> ・ <a href="#/ja/event/collect-art-in-bedroom"><span class="wiki-icon">🖼️</span>寝室で美術品を集めよう</a> ・ <a href="#/ja/event/build-infrastructure-in-workshop"><span class="wiki-icon">🔧</span>作業部屋でインフラを作ろう</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `grow-in-greenhouse` |
| `category` | （空） |
| `timing` | `tasked` |
| `unlocked` | `hinted` |
| `requiringGroup` | `false` |
| `group` | `tutorial` |
| `bucket` | `tasks` |

**設計ドキュメント**: [plan.md › イベント・ストーリー](/ja/dev/doc/plan?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC) ／ [terms.md › イベントタイミング（EventTimingTypes）](/ja/dev/doc/terms?id=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%EF%BC%88eventtimingtypes%EF%BC%89)

<details><summary>ワールド定義（JSON）</summary>

```json
{
	"information": {
		"id": "grow-in-greenhouse",
		"name": "温室で育てよう",
		"explanation": "温室で植物を育てれば食材が手に入る。台所の素材にもなる",
		"icon": {
			"emoji": "🌱",
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
			"type": "category",
			"id": "park",
			"count": 8,
			"chance": 1,
			"equipment": false
		}
	],
	"requiringGroup": false,
	"acquisitions": [],
	"group": "tutorial",
	"bucket": "tasks"
}
```

</details>
