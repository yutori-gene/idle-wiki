// 全ページを組み立てる（書き出しはしない）。generate.ts が書き出し、check.ts がディスクとの一致を確かめる
import { languages, type Language } from "../../config/wiki.ts";
import { loadSource } from "./source.ts";
import { Model } from "./model.ts";
import { Notes } from "./notes.ts";
import { escapeMarkdown, join } from "./format.ts";
import { labels } from "./label.ts";
import type { Context, Page, SearchEntry } from "../page/common.ts";
import { categoryPages } from "../page/category.ts";
import { actionPages } from "../page/action.ts";
import { itemPages } from "../page/item.ts";
import { eventPages, groupPages, skillPages } from "../page/other.ts";
import { listPages } from "../page/list.ts";
import { referencePages } from "../page/reference.ts";
import { developerPages, handPages, homePage, navbar, sidebar, warningPage } from "../page/site.ts";

export interface Build {
	language: Language;
	pages: Page[];
	search: SearchEntry[];
	warnings: string[];
}

export interface BuildResult {
	languages: Build[];
	/** 言語の外に置く生成物（site/ からの相対パス → 中身） */
	rootFiles: { file: string; body: string }[];
}

function buildLanguage(language: Language): Build {
	const source = loadSource();
	const model = new Model(source, language);
	const notes = new Notes(model, language);
	const context: Context = { model, notes };

	const generated: Page[] = [
		homePage(context),
		sidebar(context),
		navbar(context),
		...categoryPages(context),
		...actionPages(context),
		...itemPages(context),
		...skillPages(context),
		...eventPages(context),
		...groupPages(context),
		...listPages(context),
		...referencePages(context),
		...developerPages(context),
	];
	const generatedPaths = new Set(generated.map((page) => page.path));
	const hand = handPages(context);
	for (const page of hand) if (generatedPaths.has(page.path)) model.warn(`手書きページが生成ページと同じパス: notes/${language}/pages/${page.path}.md`);

	const pages = [...generated, ...hand.filter((page) => !generatedPaths.has(page.path))];
	const orphans = notes.orphans();
	const warnings = [...model.warnings, ...orphans.map((orphan) => `差し込み先の無い追記: notes/${language}/${orphan}.md`)];
	pages.push(warningPage(context, model.warnings, orphans));

	return {
		language,
		pages,
		search: pages.flatMap((page) => (page.search ? [page.search] : [])),
		warnings,
	};
}

export function build(): BuildResult {
	const results = languages.map((language) => buildLanguage(language));
	const world = loadSource().world;
	// index.html が読む設定。ワールド名と配色はワールドに追従させたいので生成する
	const config = {
		name: labels[languages[0]].wikiName(world.basic.overview.information.name),
		languages,
		themeColor: world.basic.design.textColor || world.basic.overview.information.color,
	};
	const rootPages: Page[] = [
		{
			path: "README",
			body: join("# Language", languages.map((language) => `- [${escapeMarkdown(language)}](/${language}/)`).join("\n")),
		},
		{
			path: "_404",
			body: join("# ページが見つかりません", "ワールドの更新で名前や id が変わった可能性があります。左上の検索で探してください。", languages.map((language) => `- [${language}](/${language}/)`).join("\n")),
		},
	];
	return {
		languages: results,
		rootFiles: [
			...rootPages.map((page) => ({ file: `${page.path}.md`, body: page.body })),
			{ file: "assets/config.js", body: `// 生成物（npm run wiki-generate）。手で編集しない\nwindow.WIKI_CONFIG = ${JSON.stringify(config, null, "\t")};\n` },
		],
	};
}
