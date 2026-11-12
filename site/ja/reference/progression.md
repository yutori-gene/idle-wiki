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
  c_atelier["⚒️ 工房"]
  click c_atelier "#/ja/category/atelier"
  style c_atelier fill:#463476,color:#fff,stroke:#0003
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
  c_park -->|Lv35| c_forest
  i_legendary_ball(["⚽ 伝説のボール"])
  click i_legendary_ball "#/ja/item/legendary-ball"
  c_park -.-> i_legendary_ball
  i_legendary_ball --> c_forest
  c_forest -->|Lv35| c_town
  i_forest_spirit_stone(["🪨 森の精霊石"])
  click i_forest_spirit_stone "#/ja/item/forest-spirit-stone"
  c_forest -.-> i_forest_spirit_stone
  i_forest_spirit_stone --> c_town
  c_town -->|Lv35| c_sea
  i_urban_legend_key(["🗝️ 都市伝説の鍵"])
  click i_urban_legend_key "#/ja/item/urban-legend-key"
  c_town -.-> i_urban_legend_key
  i_urban_legend_key --> c_sea
  c_sea -->|Lv35| c_northland
  i_sea_god_trident(["🔱 海神のトライデント"])
  click i_sea_god_trident "#/ja/item/sea-god-trident"
  c_sea -.-> i_sea_god_trident
  i_sea_god_trident --> c_northland
  i_hidden_path_to_northland(["🧭 隠された北国への道"])
  click i_hidden_path_to_northland "#/ja/item/hidden-path-to-northland"
  c_study -.-> i_hidden_path_to_northland
  i_hidden_path_to_northland --> c_northland
  c_northland -->|Lv35| c_factory
  i_polar_night_crystal(["🌌 極夜の結晶"])
  click i_polar_night_crystal "#/ja/item/polar-night-crystal"
  c_northland -.-> i_polar_night_crystal
  i_polar_night_crystal --> c_factory
  c_factory -->|Lv35| c_volcano
  i_perpetual_motion_machine(["🔄 永久機関"])
  click i_perpetual_motion_machine "#/ja/item/perpetual-motion-machine"
  c_factory -.-> i_perpetual_motion_machine
  i_perpetual_motion_machine --> c_volcano
  c_volcano -->|Lv35| c_castle
  i_phoenix_feather(["🐦‍🔥 フェニックスの羽"])
  click i_phoenix_feather "#/ja/item/phoenix-feather"
  c_volcano -.-> i_phoenix_feather
  i_phoenix_feather --> c_castle
  c_castle -->|Lv35| c_hell
  i_royal_treasure(["💰 王家の秘宝"])
  click i_royal_treasure "#/ja/item/royal-treasure"
  c_castle -.-> i_royal_treasure
  i_royal_treasure --> c_hell
  c_hell -->|Lv35| c_sky_garden
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
  c_town -->|Lv9| c_atelier
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
| [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) | 最初から |  |
| [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv35以上、[<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ×1 | [<img class="wiki-icon" src="assets/icon/19da4c679f8870a7.svg" alt="">伝説のボール](/ja/item/legendary-ball) ← [<img class="wiki-icon" src="assets/icon/849075a43bb2d535.svg" alt="">夕暮れの散歩道](/ja/action/twilight-promenade) |
| [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv35以上、[<img class="wiki-icon" src="assets/icon/27332c1b1aefc710.svg" alt="">森の精霊石](/ja/item/forest-spirit-stone) ×1 | [<img class="wiki-icon" src="assets/icon/27332c1b1aefc710.svg" alt="">森の精霊石](/ja/item/forest-spirit-stone) ← [<img class="wiki-icon" src="assets/icon/f6b774fbdf6117d2.svg" alt="">倒木あさり](/ja/action/scavenge-fallen-tree) |
| [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv35以上、[<img class="wiki-icon" src="assets/icon/bd1f291b8c70bd6f.svg" alt="">都市伝説の鍵](/ja/item/urban-legend-key) ×1 | [<img class="wiki-icon" src="assets/icon/bd1f291b8c70bd6f.svg" alt="">都市伝説の鍵](/ja/item/urban-legend-key) ← [<img class="wiki-icon" src="assets/icon/7d17b80929b706cc.svg" alt="">盗賊](/ja/action/thief) |
| [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) Lv35以上、[<img class="wiki-icon" src="assets/icon/838a5b09cdb9713c.svg" alt="">海神のトライデント](/ja/item/sea-god-trident) ×1、[<img class="wiki-icon" src="assets/icon/07145ca4be58e6a7.svg" alt="">隠された北国への道](/ja/item/hidden-path-to-northland) ×1 | [<img class="wiki-icon" src="assets/icon/838a5b09cdb9713c.svg" alt="">海神のトライデント](/ja/item/sea-god-trident) ← [<img class="wiki-icon" src="assets/icon/eb3d79c11d7eaf0a.svg" alt="">沈没船探査](/ja/action/shipwreck-survey)、[<img class="wiki-icon" src="assets/icon/07145ca4be58e6a7.svg" alt="">隠された北国への道](/ja/item/hidden-path-to-northland) ← [<img class="wiki-icon" src="assets/icon/e66a3ab86a353533.svg" alt="">古びた地図](/ja/action/read-map) |
| [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) | [<img class="wiki-icon" src="assets/icon/1399509ce8664576.svg" alt="">北国](/ja/category/northland) Lv35以上、[<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ×1 | [<img class="wiki-icon" src="assets/icon/06f0bf5da902f207.svg" alt="">極夜の結晶](/ja/item/polar-night-crystal) ← [<img class="wiki-icon" src="assets/icon/7c6f087ad4dc298b.svg" alt="">凍った湖畔](/ja/action/frozen-lakeside) |
| [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) | [<img class="wiki-icon" src="assets/icon/5554092ef8d1930f.svg" alt="">工場](/ja/category/factory) Lv35以上、[<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ×1 | [<img class="wiki-icon" src="assets/icon/8c6edd4cc5cbec89.svg" alt="">永久機関](/ja/item/perpetual-motion-machine) ← [<img class="wiki-icon" src="assets/icon/6e8705b278892508.svg" alt="">マッドサイエンティスト](/ja/action/mad-scientist) |
| [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) | [<img class="wiki-icon" src="assets/icon/2b31181b31d3b350.svg" alt="">火山](/ja/category/volcano) Lv35以上、[<img class="wiki-icon" src="assets/icon/ae75eed1f905cd29.svg" alt="">フェニックスの羽](/ja/item/phoenix-feather) ×1 | [<img class="wiki-icon" src="assets/icon/ae75eed1f905cd29.svg" alt="">フェニックスの羽](/ja/item/phoenix-feather) ← [<img class="wiki-icon" src="assets/icon/5b0361a69d51d567.svg" alt="">火口の底](/ja/action/crater-floor) |
| [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) | [<img class="wiki-icon" src="assets/icon/b107830f33b2837d.svg" alt="">城](/ja/category/castle) Lv35以上、[<img class="wiki-icon" src="assets/icon/4565e017a1716396.svg" alt="">王家の秘宝](/ja/item/royal-treasure) ×1 | [<img class="wiki-icon" src="assets/icon/4565e017a1716396.svg" alt="">王家の秘宝](/ja/item/royal-treasure) ← [<img class="wiki-icon" src="assets/icon/b8dfc337e8669e69.svg" alt="">ネクロマンサー](/ja/action/necromancer) |
| [<img class="wiki-icon" src="assets/icon/2016e4d273ad72ae.svg" alt="">天空のお庭](/ja/category/sky-garden) | [<img class="wiki-icon" src="assets/icon/08753b7d5230d70e.svg" alt="">地獄](/ja/category/hell) Lv35以上、[<img class="wiki-icon" src="assets/icon/0ea3bd9940738f90.svg" alt="">奈落の宝珠](/ja/item/abyss-orb) ×1 | [<img class="wiki-icon" src="assets/icon/0ea3bd9940738f90.svg" alt="">奈落の宝珠](/ja/item/abyss-orb) ← [<img class="wiki-icon" src="assets/icon/99681c3b8d9ffd3e.svg" alt="">骸骨拾い](/ja/action/bone-gathering) |
| [<img class="wiki-icon" src="assets/icon/535e9c74f924afeb.svg" alt="">倉庫](/ja/category/warehouse) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv4以上 |  |
| [<img class="wiki-icon" src="assets/icon/77037a147349c888.svg" alt="">温室](/ja/category/greenhouse) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv8以上 |  |
| [<img class="wiki-icon" src="assets/icon/e37797c3a5669a6a.svg" alt="">庭](/ja/category/garden) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv3以上 |  |
| [<img class="wiki-icon" src="assets/icon/1d4da46ae884b8db.svg" alt="">台所](/ja/category/kitchen) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv5以上 |  |
| [<img class="wiki-icon" src="assets/icon/2e8e4cc8d396fd3f.svg" alt="">書斎](/ja/category/study) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv7以上 |  |
| [<img class="wiki-icon" src="assets/icon/9ddf45e3d3403688.svg" alt="">ロフト](/ja/category/loft) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv9以上 |  |
| [<img class="wiki-icon" src="assets/icon/0effb7dcd5d97f12.svg" alt="">地下室](/ja/category/basement) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv3以上 |  |
| [<img class="wiki-icon" src="assets/icon/f9473a06ea1839be.svg" alt="">工房](/ja/category/atelier) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv9以上 |  |
| [<img class="wiki-icon" src="assets/icon/9ee150e7fc91b0a4.svg" alt="">寝室](/ja/category/bedroom) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) Lv4以上 |  |
| [<img class="wiki-icon" src="assets/icon/225e4c1dd2ec9ff3.svg" alt="">作業部屋](/ja/category/workshop) | [<img class="wiki-icon" src="assets/icon/ad309e0070004258.svg" alt="">海](/ja/category/sea) Lv6以上 |  |
| [<img class="wiki-icon" src="assets/icon/cfd2b15788b3e594.svg" alt="">近接武器](/ja/category/melee-weapon) | [<img class="wiki-icon" src="assets/icon/af2614cb71872f2d.svg" alt="">公園](/ja/category/park) Lv6以上 |  |
| [<img class="wiki-icon" src="assets/icon/f64249c8966f492b.svg" alt="">投擲武器](/ja/category/throwing-weapon) | [<img class="wiki-icon" src="assets/icon/d341d1771a0aa474.svg" alt="">森](/ja/category/forest) Lv11以上 |  |
| [<img class="wiki-icon" src="assets/icon/4b6c89254dce0737.svg" alt="">防具](/ja/category/armor) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv5以上 |  |
| [<img class="wiki-icon" src="assets/icon/f78f0d1c14ad5a8d.svg" alt="">装飾](/ja/category/accessory) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv7以上 |  |
| [<img class="wiki-icon" src="assets/icon/354851e7b6da8b2e.svg" alt="">爆発武器](/ja/category/explosive-weapon) | [<img class="wiki-icon" src="assets/icon/e05d1c3316260e39.svg" alt="">街](/ja/category/town) Lv9以上 |  |

## ゲームクリア

すべての numeric カテゴリ（レベルのあるカテゴリ）が Lv50 に達すると [<img class="wiki-icon" src="assets/icon/795952cd4767e92b.svg" alt="">クリア](/ja/event/complete) が発生する。
