// リポジトリ内の置き場所。ディレクトリの役割は README.md の「構成」が正本
import * as path from "path";
import { fileURLToPath } from "url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
/** idle から取り込んだスナップショット（wiki-sync の生成物） */
export const sourceDirectory = path.join(root, "source");
/** 手書きの追記・手書きページ（源泉） */
export const notesDirectory = path.join(root, "notes");
/** docsify のルート。Pages で公開する */
export const siteDirectory = path.join(root, "site");
