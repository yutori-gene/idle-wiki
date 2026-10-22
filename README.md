# idle-wiki

[idle](https://github.com/yutori-gene/idle)（private）のワールド定義データから機械的に作る、[Melvor Idle Wiki](https://wiki.melvoridle.com/w/Main_Page) 風の攻略 wiki。表示は [docsify](https://github.com/docsifyjs/docsify/)、公開は GitHub Pages。

- 公開先: https://yutori-gene.github.io/idle-wiki/
- ページの作り方のルール: [RULES.md](RULES.md)

## 構成

| パス | 役割 | 種類 |
|---|---|---|
| `source/` | idle から取り込んだスナップショット（world.json・CSV・設計ドキュメント・型・計算式の出どころ） | 生成物（`wiki-sync`） |
| `config/wiki.ts` | 言語・カテゴリの型・設計ドキュメントの参照先・サイドバーの手書きページ | 源泉 |
| `notes/<言語>/` | 個別ページへの手書きの追記、手書きページ（`pages/`） | 源泉 |
| `script/` | 取り込み・生成・検査・ローカル確認のスクリプト | 源泉 |
| `site/` | docsify のルート（Pages で公開する）。`index.html`・`assets/wiki.{css,js}` は手書き、それ以外は生成物 | 混在 |
| `RULES.md` | ページ生成の統一ルール（wiki の開発者ページにも載る） | 源泉 |

## 更新のしかた

idle の `world/` が変わったら、idle-wiki と idle を隣に置いて（`../idle`）次を実行する。

```bash
npm ci
npm run wiki-update        # = wiki-sync → wiki-generate → wiki-check
git diff --stat            # 何が変わったかを見る
```

| コマンド | 内容 |
|---|---|
| `npm run wiki-sync [-- <idle のパス>]` | idle から `source/` へ取り込む（既定は `../idle`） |
| `npm run wiki-generate` | `source/`・`notes/` から `site/` の Markdown を作る |
| `npm run wiki-check` | 型チェック＋生成物が最新か・警告0件か・リンク切れなしか・計算式の出どころが変わっていないか |
| `npm run wiki-serve [-- <ポート>]` | `site/` をローカルで配信する（既定 3000） |

`main` へ push すると `.github/workflows/pages.yml` が `wiki-check` を通してから `site/` を公開する。

## 初回だけ必要な設定

リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする。
