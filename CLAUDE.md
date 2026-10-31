# CLAUDE.md

idle リポジトリのワールド定義データから、docsify の攻略 wiki を機械的に作るリポジトリ。

**常に日本語で会話する。**

## 鉄則

- **ページの作り方は [RULES.md](RULES.md) が正本。** 生成の実装（`script/page/*.ts`）を変えたら RULES.md も同じ変更で直す
- **生成物を手で編集しない。** `source/` と `site/<言語>/`・`site/search/`・`site/README.md`・`site/_404.md`・`site/assets/config.js`・`site/assets/icon/` は次の生成で上書きされる。直すなら源泉（`script/`・`config/`・`notes/`）
- **個別の説明は `notes/` に書く。** 要素へのリンクは `[[種別:id]]`、数値は書かない（RULES.md「手書きの追記」）
- **ワールドの中身は idle 側で直す。** wiki 側で値を補正しない。おかしな値を見つけたら報告する
- `npm run wiki-check` が通らない状態でコミットしない

## 作業の入口

| やりたいこと | スキル |
|---|---|
| idle のワールド更新を wiki に反映する | `.claude/skills/wiki-update/SKILL.md` |
| 個別ページに説明を足す・手書きページを書く | `.claude/skills/wiki-note/SKILL.md` |

## コーディング規約

idle と同じ。`any` を使わない、関数の引数・戻り値に型を書く、既存の部品（`script/lib/format.ts`・`script/page/common.ts`）に従う、コメントは日本語。

## git

- 指示がない限りコミットしない
- コミットメッセージは日本語・簡潔（例: `ワールドの更新を反映`・`生成ルールを更新`・`notes を追記`）
- `main` への取り込みは fast-forward が基本。push で Pages が公開される
