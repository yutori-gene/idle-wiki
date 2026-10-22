// source/ と notes/ から site/ の Markdown を作る。
// 実行: npm run wiki-generate
//
// site/<lang>/ と site/search/、site/README.md・_404.md・assets/config.js はこのスクリプトの生成物（言語ディレクトリは作り直すたびに消してから書く）。
// 手で直したいときは notes/ に書く（RULES.md「手書きの追記」）
import * as FS from "fs";
import * as path from "path";
import { siteDirectory } from "./lib/path.ts";
import { build } from "./lib/build.ts";

function write(file: string, body: string): void {
	FS.mkdirSync(path.dirname(file), { recursive: true });
	FS.writeFileSync(file, body);
}

function main(): void {
	const result = build();
	for (const { language, pages, search, warnings } of result.languages) {
		const directory = path.join(siteDirectory, language);
		FS.rmSync(directory, { recursive: true, force: true });
		for (const page of pages) write(path.join(directory, `${page.path}.md`), page.body);
		write(path.join(siteDirectory, "search", `${language}.json`), JSON.stringify(search));
		console.log(`${language}: ${pages.length} ページ`);
		for (const warning of warnings) console.warn(`  ⚠️ ${warning}`);
	}
	for (const { file, body } of result.rootFiles) write(path.join(siteDirectory, file), body);
}

main();
