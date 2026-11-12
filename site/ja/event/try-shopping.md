# 買い物をしてみよう

<div class="wiki-infobox" style="--accent:#b8862b"><div class="wiki-infobox-title">買い物をしてみよう</div><div class="wiki-infobox-icon"><img class="wiki-icon-large" src="assets/icon/d3b8b3cd002b2e6f.svg" alt=""></div><table><tr><th>タイミング</th><td>条件達成（タスク）</td></tr><tr><th>グループ</th><td><a href="#/ja/group/tutorial"><img class="wiki-icon" src="assets/icon/da259a8fc66841ad.svg" alt="">チュートリアル</a></td></tr><tr><th>初期状態</th><td>ヒント表示</td></tr></table></div>

> 買えるアイテムはそれぞれのページからコインで買える。余ったアイテムはインベントリのまとめ売りで売れる


## 発生条件

次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。

- [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv3以上

<div class="wiki-navbox" style="--accent:#b8862b"><div class="wiki-navbox-title">チュートリアル</div><div class="wiki-navbox-body"><a href="#/ja/event/first-step"><img class="wiki-icon" src="assets/icon/3f7a20ac40372e39.svg" alt="">はじめての一歩</a> ・ <a href="#/ja/event/try-shopping"><img class="wiki-icon" src="assets/icon/d3b8b3cd002b2e6f.svg" alt="">買い物をしてみよう</a> ・ <a href="#/ja/event/organize-warehouse"><img class="wiki-icon" src="assets/icon/5c4f54fff2070da3.svg" alt="">倉庫を整理しよう</a> ・ <a href="#/ja/event/try-equipment"><img class="wiki-icon" src="assets/icon/06597a90848ec80b.svg" alt="">装備を使ってみよう</a> ・ <a href="#/ja/event/try-melee-weapon"><img class="wiki-icon" src="assets/icon/878521164d539aea.svg" alt="">近接武器を試そう</a> ・ <a href="#/ja/event/grow-in-greenhouse"><img class="wiki-icon" src="assets/icon/d48e7765d75eec3d.svg" alt="">温室で育てよう</a> ・ <a href="#/ja/event/expand-garden"><img class="wiki-icon" src="assets/icon/9df84155d411d74b.svg" alt="">庭を広げよう</a> ・ <a href="#/ja/event/cook-in-kitchen"><img class="wiki-icon" src="assets/icon/dba824c1439c7e62.svg" alt="">台所で調理しよう</a> ・ <a href="#/ja/event/learn-in-study"><img class="wiki-icon" src="assets/icon/b41c7bbea6afdee3.svg" alt="">書斎で学ぼう</a> ・ <a href="#/ja/event/use-loft"><img class="wiki-icon" src="assets/icon/5ebdc19e7315291b.svg" alt="">ロフトを使おう</a> ・ <a href="#/ja/event/ready-throwing-weapon"><img class="wiki-icon" src="assets/icon/57d6ada96799bdb3.svg" alt="">投擲武器を構えよう</a> ・ <a href="#/ja/event/brew-in-basement"><img class="wiki-icon" src="assets/icon/58522e434677f2fa.svg" alt="">地下室で調合しよう</a> ・ <a href="#/ja/event/prepare-armor"><img class="wiki-icon" src="assets/icon/600bbc1b7012859f.svg" alt="">防具を整えよう</a> ・ <a href="#/ja/event/reinforce-with-accessory"><img class="wiki-icon" src="assets/icon/5e67531b83f70fd9.svg" alt="">装飾で補強しよう</a> ・ <a href="#/ja/event/throw-explosive-weapon"><img class="wiki-icon" src="assets/icon/0258e7e0beef6c4d.svg" alt="">爆発武器を放とう</a> ・ <a href="#/ja/event/collect-art-in-bedroom"><img class="wiki-icon" src="assets/icon/f639695c9d680ba8.svg" alt="">寝室で美術品を集めよう</a> ・ <a href="#/ja/event/build-infrastructure-in-workshop"><img class="wiki-icon" src="assets/icon/db3138b29886aacd.svg" alt="">作業部屋でインフラを作ろう</a></div></div>

## 開発者向け情報

| 項目 | 値 |
| --- | --- |
| id | `try-shopping` |
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
		"id": "try-shopping",
		"name": "買い物をしてみよう",
		"explanation": "買えるアイテムはそれぞれのページからコインで買える。余ったアイテムはインベントリのまとめ売りで売れる",
		"icon": {
			"emoji": "🛒",
			"iconify": "",
			"image": "（data URI の画像。site/assets/icon/d3b8b3cd002b2e6f.svg）"
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
			"count": 3,
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
