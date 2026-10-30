# 進行チャート

カテゴリの解放条件をつないだ図。実線はカテゴリのレベル・条件アイテム、点線は条件アイテムが手に入る場所。ノードをクリックするとそのページへ移る。想定プレイ時間は 100日。

```mermaid
flowchart TD
  c_park["🌳 公園"]
  click c_park "#/ja/category/park"
  style c_park fill:#697852,color:#fff,stroke:#0003
  c_forest["🌲 森"]
  click c_forest "#/ja/category/forest"
  style c_forest fill:#426251,color:#fff,stroke:#0003
  c_town["🏙️ 街"]
  click c_town "#/ja/category/town"
  style c_town fill:#856654,color:#fff,stroke:#0003
  c_sea["🌊 海"]
  click c_sea "#/ja/category/sea"
  style c_sea fill:#4a637d,color:#fff,stroke:#0003
  c_northland["❄️ 北国"]
  click c_northland "#/ja/category/northland"
  style c_northland fill:#6b8a92,color:#fff,stroke:#0003
  c_factory["🏭 工場"]
  click c_factory "#/ja/category/factory"
  style c_factory fill:#717476,color:#fff,stroke:#0003
  c_volcano["🌋 火山"]
  click c_volcano "#/ja/category/volcano"
  style c_volcano fill:#8f6059,color:#fff,stroke:#0003
  c_castle["🏰 城"]
  click c_castle "#/ja/category/castle"
  style c_castle fill:#776a48,color:#fff,stroke:#0003
  c_hell["🔥 地獄"]
  click c_hell "#/ja/category/hell"
  style c_hell fill:#6e4c5b,color:#fff,stroke:#0003
  c_sky_garden["☁️ 天空のお庭"]
  click c_sky_garden "#/ja/category/sky-garden"
  style c_sky_garden fill:#9c95b5,color:#fff,stroke:#0003
  c_warehouse["📦 倉庫"]
  click c_warehouse "#/ja/category/warehouse"
  style c_warehouse fill:#85837e,color:#fff,stroke:#0003
  c_greenhouse["🌱 温室"]
  click c_greenhouse "#/ja/category/greenhouse"
  style c_greenhouse fill:#849b88,color:#fff,stroke:#0003
  c_garden["🐾 庭"]
  click c_garden "#/ja/category/garden"
  style c_garden fill:#a58793,color:#fff,stroke:#0003
  c_kitchen["🍳 台所"]
  click c_kitchen "#/ja/category/kitchen"
  style c_kitchen fill:#9b7d61,color:#fff,stroke:#0003
  c_study["📚 書斎"]
  click c_study "#/ja/category/study"
  style c_study fill:#64594c,color:#fff,stroke:#0003
  c_loft["🗃️ ロフト"]
  click c_loft "#/ja/category/loft"
  style c_loft fill:#886e67,color:#fff,stroke:#0003
  c_basement["⚗️ 地下室"]
  click c_basement "#/ja/category/basement"
  style c_basement fill:#736883,color:#fff,stroke:#0003
  c_bedroom["🛏️ 寝室"]
  click c_bedroom "#/ja/category/bedroom"
  style c_bedroom fill:#9196ab,color:#fff,stroke:#0003
  c_workshop["🔧 作業部屋"]
  click c_workshop "#/ja/category/workshop"
  style c_workshop fill:#627777,color:#fff,stroke:#0003
  c_melee_weapon["⚔️ 近接武器"]
  click c_melee_weapon "#/ja/category/melee-weapon"
  style c_melee_weapon fill:#606a74,color:#fff,stroke:#0003
  c_throwing_weapon["🎯 投擲武器"]
  click c_throwing_weapon "#/ja/category/throwing-weapon"
  style c_throwing_weapon fill:#656a5a,color:#fff,stroke:#0003
  c_armor["🛡️ 防具"]
  click c_armor "#/ja/category/armor"
  style c_armor fill:#3a4047,color:#fff,stroke:#0003
  c_accessory["💍 装飾"]
  click c_accessory "#/ja/category/accessory"
  style c_accessory fill:#886b86,color:#fff,stroke:#0003
  c_explosive_weapon["💣 爆発武器"]
  click c_explosive_weapon "#/ja/category/explosive-weapon"
  style c_explosive_weapon fill:#968358,color:#fff,stroke:#0003
  c_park -->|Lv20| c_forest
  i_legendary_ball(["⚽ 伝説のボール"])
  click i_legendary_ball "#/ja/item/legendary-ball"
  c_park -.-> i_legendary_ball
  i_legendary_ball --> c_forest
  c_forest -->|Lv20| c_town
  i_forest_spirit_stone(["🪨 森の精霊石"])
  click i_forest_spirit_stone "#/ja/item/forest-spirit-stone"
  c_forest -.-> i_forest_spirit_stone
  i_forest_spirit_stone --> c_town
  c_town -->|Lv20| c_sea
  i_urban_legend_key(["🗝️ 都市伝説の鍵"])
  click i_urban_legend_key "#/ja/item/urban-legend-key"
  c_town -.-> i_urban_legend_key
  i_urban_legend_key --> c_sea
  c_sea -->|Lv20| c_northland
  i_sea_god_trident(["🔱 海神のトライデント"])
  click i_sea_god_trident "#/ja/item/sea-god-trident"
  c_sea -.-> i_sea_god_trident
  i_sea_god_trident --> c_northland
  c_northland -->|Lv20| c_factory
  i_polar_night_crystal(["🌌 極夜の結晶"])
  click i_polar_night_crystal "#/ja/item/polar-night-crystal"
  c_northland -.-> i_polar_night_crystal
  i_polar_night_crystal --> c_factory
  c_factory -->|Lv20| c_volcano
  i_perpetual_motion_machine(["🔄 永久機関"])
  click i_perpetual_motion_machine "#/ja/item/perpetual-motion-machine"
  c_factory -.-> i_perpetual_motion_machine
  i_perpetual_motion_machine --> c_volcano
  c_volcano -->|Lv20| c_castle
  i_phoenix_feather(["🐦‍🔥 フェニックスの羽"])
  click i_phoenix_feather "#/ja/item/phoenix-feather"
  c_volcano -.-> i_phoenix_feather
  i_phoenix_feather --> c_castle
  c_castle -->|Lv20| c_hell
  i_royal_treasure(["💰 王家の秘宝"])
  click i_royal_treasure "#/ja/item/royal-treasure"
  c_castle -.-> i_royal_treasure
  i_royal_treasure --> c_hell
  c_hell -->|Lv20| c_sky_garden
  i_abyss_orb(["🔮 奈落の宝珠"])
  click i_abyss_orb "#/ja/item/abyss-orb"
  c_hell -.-> i_abyss_orb
  i_abyss_orb --> c_sky_garden
  c_park -->|Lv4| c_warehouse
  c_park -->|Lv8| c_greenhouse
  c_forest -->|Lv3| c_garden
  c_forest -->|Lv5| c_kitchen
  c_forest -->|Lv7| c_study
  c_forest -->|Lv9| c_loft
  c_town -->|Lv3| c_basement
  c_sea -->|Lv4| c_bedroom
  c_sea -->|Lv6| c_workshop
  c_park -->|Lv6| c_melee_weapon
  c_forest -->|Lv11| c_throwing_weapon
  c_town -->|Lv5| c_armor
  c_town -->|Lv7| c_accessory
  c_town -->|Lv9| c_explosive_weapon
```

## 解放の順番

| カテゴリ | 解放条件 | 条件アイテムの入手先 |
| --- | --- | --- |
| [<span class="wiki-icon">🌳</span>公園](/ja/category/park) | 最初から |  |
| [<span class="wiki-icon">🌲</span>森](/ja/category/forest) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv20以上<br>[<span class="wiki-icon">⚽</span>伝説のボール](/ja/item/legendary-ball) ×1 | [<span class="wiki-icon">⚽</span>伝説のボール](/ja/item/legendary-ball) ← [<span class="wiki-icon">🌇</span>夕暮れの散歩道](/ja/action/twilight-promenade) |
| [<span class="wiki-icon">🏙️</span>街](/ja/category/town) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv20以上<br>[<span class="wiki-icon">🪨</span>森の精霊石](/ja/item/forest-spirit-stone) ×1 | [<span class="wiki-icon">🪨</span>森の精霊石](/ja/item/forest-spirit-stone) ← [<span class="wiki-icon">🪵</span>倒木あさり](/ja/action/scavenge-fallen-tree) |
| [<span class="wiki-icon">🌊</span>海](/ja/category/sea) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv20以上<br>[<span class="wiki-icon">🗝️</span>都市伝説の鍵](/ja/item/urban-legend-key) ×1 | [<span class="wiki-icon">🗝️</span>都市伝説の鍵](/ja/item/urban-legend-key) ← [<span class="wiki-icon">🥷</span>盗賊](/ja/action/thief) |
| [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) Lv20以上<br>[<span class="wiki-icon">🔱</span>海神のトライデント](/ja/item/sea-god-trident) ×1 | [<span class="wiki-icon">🔱</span>海神のトライデント](/ja/item/sea-god-trident) ← [<span class="wiki-icon">🚢</span>沈没船探査](/ja/action/shipwreck-survey) |
| [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) | [<span class="wiki-icon">❄️</span>北国](/ja/category/northland) Lv20以上<br>[<span class="wiki-icon">🌌</span>極夜の結晶](/ja/item/polar-night-crystal) ×1 | [<span class="wiki-icon">🌌</span>極夜の結晶](/ja/item/polar-night-crystal) ← [<span class="wiki-icon">🧊</span>凍った湖畔](/ja/action/frozen-lakeside) |
| [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) | [<span class="wiki-icon">🏭</span>工場](/ja/category/factory) Lv20以上<br>[<span class="wiki-icon">🔄</span>永久機関](/ja/item/perpetual-motion-machine) ×1 | [<span class="wiki-icon">🔄</span>永久機関](/ja/item/perpetual-motion-machine) ← [<span class="wiki-icon">🧪</span>マッドサイエンティスト](/ja/action/mad-scientist) |
| [<span class="wiki-icon">🏰</span>城](/ja/category/castle) | [<span class="wiki-icon">🌋</span>火山](/ja/category/volcano) Lv20以上<br>[<span class="wiki-icon">🐦‍🔥</span>フェニックスの羽](/ja/item/phoenix-feather) ×1 | [<span class="wiki-icon">🐦‍🔥</span>フェニックスの羽](/ja/item/phoenix-feather) ← [<span class="wiki-icon">🌋</span>火口の底](/ja/action/crater-floor) |
| [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) | [<span class="wiki-icon">🏰</span>城](/ja/category/castle) Lv20以上<br>[<span class="wiki-icon">💰</span>王家の秘宝](/ja/item/royal-treasure) ×1 | [<span class="wiki-icon">💰</span>王家の秘宝](/ja/item/royal-treasure) ← [<span class="wiki-icon">💀</span>ネクロマンサー](/ja/action/necromancer) |
| [<span class="wiki-icon">☁️</span>天空のお庭](/ja/category/sky-garden) | [<span class="wiki-icon">🔥</span>地獄](/ja/category/hell) Lv20以上<br>[<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ×1 | [<span class="wiki-icon">🔮</span>奈落の宝珠](/ja/item/abyss-orb) ← [<span class="wiki-icon">💀</span>骸骨拾い](/ja/action/bone-gathering) |
| [<span class="wiki-icon">📦</span>倉庫](/ja/category/warehouse) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv4以上 |  |
| [<span class="wiki-icon">🌱</span>温室](/ja/category/greenhouse) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv8以上 |  |
| [<span class="wiki-icon">🐾</span>庭](/ja/category/garden) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv3以上 |  |
| [<span class="wiki-icon">🍳</span>台所](/ja/category/kitchen) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv5以上 |  |
| [<span class="wiki-icon">📚</span>書斎](/ja/category/study) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv7以上 |  |
| [<span class="wiki-icon">🗃️</span>ロフト](/ja/category/loft) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv9以上 |  |
| [<span class="wiki-icon">⚗️</span>地下室](/ja/category/basement) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv3以上 |  |
| [<span class="wiki-icon">🛏️</span>寝室](/ja/category/bedroom) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) Lv4以上 |  |
| [<span class="wiki-icon">🔧</span>作業部屋](/ja/category/workshop) | [<span class="wiki-icon">🌊</span>海](/ja/category/sea) Lv6以上 |  |
| [<span class="wiki-icon">⚔️</span>近接武器](/ja/category/melee-weapon) | [<span class="wiki-icon">🌳</span>公園](/ja/category/park) Lv6以上 |  |
| [<span class="wiki-icon">🎯</span>投擲武器](/ja/category/throwing-weapon) | [<span class="wiki-icon">🌲</span>森](/ja/category/forest) Lv11以上 |  |
| [<span class="wiki-icon">🛡️</span>防具](/ja/category/armor) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv5以上 |  |
| [<span class="wiki-icon">💍</span>装飾](/ja/category/accessory) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv7以上 |  |
| [<span class="wiki-icon">💣</span>爆発武器](/ja/category/explosive-weapon) | [<span class="wiki-icon">🏙️</span>街](/ja/category/town) Lv9以上 |  |

## ゲームクリア

すべての numeric カテゴリ（レベルのあるカテゴリ）が Lv50 に達すると [<span class="wiki-icon">🎉</span>クリア](/ja/event/complete) が発生する。
