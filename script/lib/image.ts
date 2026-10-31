// ワールドに埋め込まれた data URI の画像（icon.image・カテゴリの background など）を、site/assets/icon/ のファイルに書き出す。
// 同じ画像をリンクのたびにページへ埋め込むと一覧ページが数MBになるので、ファイルにしてブラウザのキャッシュに載せる
import { createHash } from "crypto";

/** 書き出し先（site/ からの相対パス）。このディレクトリはまるごと生成物 */
export const imageDirectory = "assets/icon";

/** 書き出せる画像の形式（MIME → 拡張子）。これ以外の data URI はページへそのまま埋め込む */
const extensions: { [mime: string]: string } = {
	"image/svg+xml": "svg",
	"image/png": "png",
	"image/jpeg": "jpg",
	"image/webp": "webp",
	"image/gif": "gif",
};

export interface ImageFile {
	/** site/ からの相対パス */
	file: string;
	data: Buffer;
}

/**
 * data URI を書き出し先のファイルに読み替える
 * @param uri `data:<mime>[;base64],<本文>`（それ以外の文字列も渡してよい）
 * @returns ファイル名は中身のハッシュ（同じ画像は同じファイル）。data URI でないもの・形式が書き出せないものは undefined
 */
export function imageFile(uri: string): ImageFile | undefined {
	if (!uri.startsWith("data:")) return undefined;
	// リンクのたびに呼ばれるので、デコードとハッシュは1画像1回に抑える
	if (cache.has(uri)) return cache.get(uri);
	const file = decode(uri);
	cache.set(uri, file);
	return file;
}

const cache = new Map<string, ImageFile | undefined>();

function decode(uri: string): ImageFile | undefined {
	const match = /^data:([^;,]+)((?:;[^;,]*)*),(.*)$/s.exec(uri);
	if (!match) return undefined;
	const extension = extensions[match[1].toLowerCase()];
	if (!extension) return undefined;
	const data = match[2].split(";").includes("base64") ? Buffer.from(match[3], "base64") : Buffer.from(decodeURIComponent(match[3]), "utf8");
	const hash = createHash("sha256").update(data).digest("hex").slice(0, 16);
	return { file: `${imageDirectory}/${hash}.${extension}`, data };
}

/** ワールドのどこかにある data URI の画像をすべて集め、書き出すファイルの一覧にする（ファイル名順・重複なし） */
export function imageFiles(world: unknown): ImageFile[] {
	const files = new Map<string, ImageFile>();
	const walk = (value: unknown): void => {
		if (typeof value === "string") {
			const file = imageFile(value);
			if (file) files.set(file.file, file);
		} else if (typeof value === "object" && value !== null) Object.values(value).forEach(walk);
	};
	walk(world);
	return [...files.values()].sort((a, b) => a.file.localeCompare(b.file));
}
