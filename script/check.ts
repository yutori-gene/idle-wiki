// 生成物の検査。実行: npm run wiki-check（tsc のあとに走る）
//   1. 生成物が最新か（build の結果と site/ の中身が一致するか。古い・手で触った生成物を検出する）
//   2. 生成時の警告が0件か（存在しない参照・見つからない見出し・宙に浮いた追記）
//   3. ページ内リンクの行き先がすべて存在するか
//   4. 計算値の式の出どころ（idle の player）が、式を写したときから変わっていないか
import * as FS from "fs";
import * as path from "path";
import { siteDirectory } from "./lib/path.ts";
import { build } from "./lib/build.ts";
import { loadSource } from "./lib/source.ts";
import { ENGINE_DIGESTS } from "./lib/calc.ts";
import { imageDirectory } from "./lib/image.ts";

const errors: string[] = [];

function listFiles(directory: string, prefix = ""): string[] {
	if (!FS.existsSync(directory)) return [];
	return FS.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
		return entry.isDirectory() ? listFiles(path.join(directory, entry.name), relative) : [relative];
	});
}

function main(): void {
	const result = build();
	for (const { language, pages, warnings } of result.languages) {
		// 1. 生成物が最新か
		const expected = new Map(pages.map((page) => [`${page.path}.md`, page.body]));
		const actual = listFiles(path.join(siteDirectory, language));
		for (const file of actual) {
			const body = expected.get(file);
			if (body === undefined) errors.push(`生成物に無いファイルが site/${language} にある: ${file}`);
			else if (FS.readFileSync(path.join(siteDirectory, language, file), "utf8") !== body) errors.push(`生成物が古い（または手で編集された）: site/${language}/${file}`);
		}
		for (const file of expected.keys()) if (!actual.includes(file)) errors.push(`生成物が無い: site/${language}/${file}`);

		// 2. 生成時の警告
		for (const warning of warnings) errors.push(`[${language}] ${warning}`);

		// 3. リンク切れ。Markdown の ](/xx/...) と HTML の href="#/xx/..." を拾う
		const existing = new Set(pages.map((page) => `/${language}/${page.path.replace(/(^|\/)README$/, "$1")}`));
		for (const page of pages) {
			const targets = [...page.body.matchAll(/\]\((\/[^)\s?]*)(?:\?[^)]*)?\)/g), ...page.body.matchAll(/href="#(\/[^"?]*)(?:\?[^"]*)?"/g)].map((match) => match[1]);
			for (const target of targets) {
				if (!target.startsWith(`/${language}/`) && target !== `/${language}`) continue;
				if (!existing.has(target)) errors.push(`リンク切れ: site/${language}/${page.path}.md → ${target}`);
			}
		}
	}

	for (const { file, body } of result.rootFiles) {
		const target = path.join(siteDirectory, file);
		if (!FS.existsSync(target) || FS.readFileSync(target, "utf8") !== body) errors.push(`生成物が古い（または手で編集された）: site/${file}`);
	}

	// 1. 生成物が最新か（data URI から書き出した画像）
	const images = new Map(result.images.map((image) => [image.file, image.data]));
	const actualImages = listFiles(path.join(siteDirectory, imageDirectory)).map((file) => `${imageDirectory}/${file}`);
	for (const file of actualImages) {
		const data = images.get(file);
		if (data === undefined) errors.push(`生成物に無いファイルが site/${imageDirectory} にある: ${file}`);
		else if (!FS.readFileSync(path.join(siteDirectory, file)).equals(data)) errors.push(`生成物が古い（または手で編集された）: site/${file}`);
	}
	for (const file of images.keys()) if (!actualImages.includes(file)) errors.push(`生成物が無い: site/${file}`);

	// 4. 計算式の出どころ
	const snapshot = loadSource().snapshot;
	for (const [file, digest] of Object.entries(ENGINE_DIGESTS)) {
		if (snapshot.digests[file] !== digest) {
			errors.push(`計算式の出どころが変わった: source/${file}。差分を読み、script/lib/calc.ts の式を合わせてから ENGINE_DIGESTS を更新する（新しい値: ${snapshot.digests[file] ?? "ファイルが無い"}）`);
		}
	}

	if (errors.length > 0) {
		for (const error of errors.slice(0, 200)) console.error(`✗ ${error}`);
		if (errors.length > 200) console.error(`…ほか ${errors.length - 200} 件`);
		console.error(`\n${errors.length} 件の問題`);
		process.exit(1);
	}
	console.log("✓ 生成物は最新・警告なし・リンク切れなし・計算式の出どころに変化なし");
}

main();
