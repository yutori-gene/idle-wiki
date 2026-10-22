---
name: wiki-update
description: idle リポジトリのワールド（world/ の world.json・CSV・md）が更新されたとき、その内容を wiki へ反映するときに使う。「wiki を更新して」「ワールドの変更を wiki に反映」「/wiki-update」で発火。取り込み → 生成 → 検査 → 差分の確認 → 必要なら notes・config・計算式の追従まで行う。
---

# wiki の更新

## 前提

- idle のクローンが隣（`../idle`）にあること。コンテナでは `/home/user/idle`。無ければ `npm run wiki-sync -- <パス>` で指定する
- 取り込むのは idle の**いまチェックアウトしているコミット**。公開用は原則 `main`（`git -C ../idle fetch origin main && git -C ../idle checkout origin/main` などで合わせる）

## 手順

1. `npm ci`（初回のみ）
2. `npm run wiki-update`（= `wiki-sync` → `wiki-generate` → `wiki-check`）
3. `git diff --stat` と `git diff source/snapshot.json` で何が変わったかを見る
4. `wiki-check` が失敗したら、下の表で直してから 2 をやり直す
5. 変わった要素のページを数件開いて目で確かめる（`npm run wiki-serve` → `http://localhost:3000/#/ja/...`）
6. 報告: 取り込んだ idle のコミット・ワールドのバージョン、増減したページ数、直したもの

## wiki-check の失敗と直し方

| 失敗 | 原因 | 直し方 |
|---|---|---|
| 存在しない参照 | world.json の要求・取得物が無い id を指している | **idle 側の不具合。** 直さず報告する |
| 差し込み先の無い追記 | id の変更・削除で `notes/<言語>/<種別>/<id>.md` が宙に浮いた | 新しい id へ移す（`git mv`）か、要らなければ消す |
| notes のリンク記法が不正・存在しない参照（notes） | `[[種別:id]]` の id が消えた | 新しい id に書き換える |
| 設計ドキュメントの見出しが見つからない | plan.md などの見出しが変わった | `config/wiki.ts` の `designReferences` を新しい見出し（先頭一致）に直す |
| config/wiki.ts の categoryPatterns に無いカテゴリ | カテゴリが増えた | `categoryPatterns` に型を足す |
| 計算式の出どころが変わった | idle の player の式（property.ts・update.ts・trade.ts・constant.ts）が変わった | `git diff --no-index` で旧版（`git show HEAD:source/engine/<file>`）と比べ、`script/lib/calc.ts` の式を合わせてから `ENGINE_DIGESTS` を新しい値に更新する |
| 型エラー（tsc） | `worldType.ts` が変わった | `script/` の型の使い方を新しい型に合わせる。新しいフィールドは RULES.md のどの節に載せるかを決めてから実装する |
| 生成物が古い | 生成を忘れた／手で編集した | `npm run wiki-generate` |

## ワールドに新しい種類のデータが増えたとき

型（`source/type/worldType.ts`）に新しいフィールドや種別が増えたら、**載せ方を RULES.md に先に書いて**から `script/page/*.ts` を直す。迷う場合はユーザーに確認する。

## コミット

指示があればコミットする。メッセージは `ワールドの更新を反映（world <バージョン>）`。`main` に入れると Pages が公開される。
