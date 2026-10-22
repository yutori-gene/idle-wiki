// サイト全体のページ: トップ（README）・サイドバー・ナビバー・開発者向けページ・手書きページ
import * as FS from "fs";
import * as path from "path";
import { languages, publishedDocuments, sidebarPages } from "../../config/wiki.ts";
import { rewriteLinks } from "../lib/document.ts";
import { escapeMarkdown, join, link, number, section, table } from "../lib/format.ts";
import { root } from "../lib/path.ts";
import { documentPath, type Context, type Page } from "./common.ts";
import { LIST_PAGES } from "./list.ts";
import { REFERENCE_PAGES } from "./reference.ts";

/** 手書きページの見出し（先頭の # 行）。無ければパス */
function headingOf(markdown: string, fallback: string): string {
	return /^#\s+(.+)$/m.exec(markdown)?.[1].trim() ?? fallback;
}

export function homePage(context: Context): Page {
	const model = context.model;
	const world = model.world;
	const overview = world.basic.overview;
	const language = model.language;
	const groups = [...new Set(world.categories.map((category) => category.group))];
	const categoryBlocks = groups.map((groupId) => {
		const group = model.groups.get(groupId);
		const links = world.categories.filter((category) => category.group === groupId).map((category) => link(model, "category", category.information.id));
		return `**${group ? escapeMarkdown(group.information.name) : groupId}**: ${links.join(" ・ ")}`;
	});
	const counts = table(
		["カテゴリ", "アクション", "アイテム", "スキル", "イベント"],
		[[world.categories.length, world.actions.length, world.items.length, world.skills.length, model.events.size].map((count) => number(count))],
	);
	return {
		path: "README",
		body: join(
			`# ${escapeMarkdown(model.label.wikiName(overview.information.name))}`,
			overview.information.explanation ? `> ${escapeMarkdown(overview.information.explanation)}` : "",
			context.notes.insert("README"),
			section("カテゴリ", categoryBlocks.join("\n\n")),
			section(
				"はじめに",
				[
					...sidebarPages.guide.map((page) => `- [${escapeMarkdown(headingOf(context.notes.pages.get(page) ?? "", page))}](/${language}/${page})`),
					...REFERENCE_PAGES.map((page) => `- [${page.title}](/${language}/${page.path})`),
				].join("\n"),
			),
			section("一覧", LIST_PAGES.map((page) => `- [${page.title}](/${language}/${page.path})`).join("\n")),
			section("収録数", counts),
			snapshotLine(context),
		),
	};
}

/** どの時点のワールドから作ったか（トップと開発者ページの末尾） */
function snapshotLine(context: Context): string {
	const snapshot = context.model.source.snapshot;
	return `<div class="wiki-snapshot">ワールド ${escapeMarkdown(snapshot.worldId)} v${escapeMarkdown(snapshot.worldVersion)} ／ idle ${escapeMarkdown(snapshot.idleCommit.slice(0, 7))}（${escapeMarkdown(snapshot.idleCommitDate.slice(0, 10))}）から生成</div>`;
}

export function sidebar(context: Context): Page {
	const model = context.model;
	const language = model.language;
	const world = model.world;
	const lines: string[] = [`- [ホーム](/${language}/)`];
	const handPage = (page: string): string => `  - [${escapeMarkdown(headingOf(context.notes.pages.get(page) ?? "", page))}](/${language}/${page})`;

	lines.push("- ガイド", ...sidebarPages.guide.map(handPage), ...REFERENCE_PAGES.filter((page) => page.path === "reference/progression").map((page) => `  - [${page.title}](/${language}/${page.path})`));
	lines.push("- ゲームのしくみ", ...sidebarPages.system.map(handPage));
	for (const groupId of [...new Set(world.categories.map((category) => category.group))]) {
		lines.push(`- ${escapeMarkdown(model.groups.get(groupId)?.information.name ?? groupId)}`);
		for (const category of world.categories.filter((category) => category.group === groupId)) lines.push(`  - ${link(model, "category", category.information.id)}`);
	}
	lines.push("- 一覧", ...LIST_PAGES.map((page) => `  - [${page.title}](/${language}/${page.path})`));
	lines.push("- 参照表", ...REFERENCE_PAGES.filter((page) => page.path !== "reference/progression").map((page) => `  - [${page.title}](/${language}/${page.path})`));
	lines.push("- 開発者向け", `  - [開発者向けトップ](/${language}/dev/)`, `  - [ページ生成の統一ルール](/${language}/dev/rules)`, `  - [基本設定](/${language}/dev/basic)`);
	for (const [file, name] of Object.entries(publishedDocuments)) if (model.source.documents.has(file)) lines.push(`  - [${escapeMarkdown(name)}](${documentPath(context, file)})`);
	lines.push(`  - [生成時の警告](/${language}/dev/warnings)`);
	return { path: "_sidebar", body: lines.join("\n") + "\n" };
}

export function navbar(context: Context): Page {
	const language = context.model.language;
	const switcher = languages.map((code) => `  - [${code}](/${code}/)`);
	return { path: "_navbar", body: [`- [ホーム](/${language}/)`, `- [開発者向け](/${language}/dev/)`, "- 言語", ...switcher].join("\n") + "\n" };
}

export function developerPages(context: Context): Page[] {
	const model = context.model;
	const language = model.language;
	const world = model.world;
	const snapshot = model.source.snapshot;
	const pages: Page[] = [];

	pages.push({
		path: "dev/README",
		body: join(
			"# 開発者向け",
			context.notes.insert("dev/README"),
			"各ページの末尾にある「開発者向け情報」には、id・内部値・CSV にだけある列（tier・rare・memo）・設計ドキュメントへの参照・ワールド定義の JSON をまとめている。",
			section(
				"取り込んだワールド",
				table(
					["項目", "値"],
					[
						["ワールド", `${escapeMarkdown(world.basic.overview.information.name)}（\`${escapeMarkdown(snapshot.worldId)}\`）`],
						["ワールドのバージョン", `\`${escapeMarkdown(snapshot.worldVersion)}\``],
						["idle のコミット", `\`${escapeMarkdown(snapshot.idleCommit)}\`（${escapeMarkdown(snapshot.idleBranch)}）`],
						["コミット日時", escapeMarkdown(snapshot.idleCommitDate)],
						["取り込み日時", escapeMarkdown(snapshot.syncedAt)],
					],
				),
			),
			section(
				"ページ",
				[`- [ページ生成の統一ルール](/${language}/dev/rules)`, `- [基本設定](/${language}/dev/basic)`, ...Object.entries(publishedDocuments).filter(([file]) => model.source.documents.has(file)).map(([file, name]) => `- [${escapeMarkdown(name)}](${documentPath(context, file)})`), `- [生成時の警告](/${language}/dev/warnings)`].join("\n"),
			),
		),
	});

	// 統一ルールはリポジトリ直下の RULES.md が正本。そのまま載せる
	const rules = FS.readFileSync(path.join(root, "RULES.md"), "utf8");
	pages.push({ path: "dev/rules", body: rules });

	const general = world.basic.general;
	const generalRows = Object.entries(general)
		.filter(([, value]) => typeof value !== "object")
		.map(([key, value]) => [`\`${key}\``, `\`${escapeMarkdown(String(value))}\``]);
	const combat = general.defaultCombat;
	pages.push({
		path: "dev/basic",
		body: join(
			"# 基本設定",
			context.notes.insert("dev/basic"),
			section("概要（overview）", table(["項目", "値"], Object.entries(world.basic.overview).filter(([, value]) => typeof value !== "object").map(([key, value]) => [`\`${key}\``, escapeMarkdown(String(value))]))),
			section("一般（general）", table(["項目", "値"], generalRows)),
			section("戦闘の基本値（defaultCombat）", table(Object.keys(combat).map((key) => model.label.property[key as keyof typeof combat]), [Object.values(combat).map((value) => number(value))])),
			section("通貨・枠", [...general.coins.map((coin) => coin.id), general.capacity.information.id, general.queue.information.id].map((id) => `- ${link(model, "item", id)}`).join("\n")),
			section("配色（design）", table(["項目", "値"], Object.entries(world.basic.design).map(([key, value]) => [`\`${key}\``, value ? `<span class="wiki-swatch" style="background:${value}"></span> \`${value}\`` : "（空）"]))),
			"```json\n" + JSON.stringify({ overview: world.basic.overview, general: world.basic.general, design: world.basic.design }, null, "\t") + "\n```",
		),
	});

	const published = Object.keys(publishedDocuments);
	for (const [file] of Object.entries(publishedDocuments)) {
		const markdown = model.source.documents.get(file);
		if (markdown === undefined) {
			model.warn(`config/wiki.ts の publishedDocuments にあるが source に無い: ${file}`);
			continue;
		}
		const header = `> idle リポジトリ \`world/doc/${file}\` の写し（${escapeMarkdown(snapshot.idleCommit.slice(0, 7))} 時点）。編集は idle 側で行い、\`npm run wiki-update\` で取り込む。`;
		const body = rewriteLinks(markdown, published, (name) => documentPath(context, name), file);
		// 文書自身の見出しを先頭に保つため、注記は最初の見出しの直後に入れる
		const withHeader = /^#\s/m.test(body) ? body.replace(/^(#\s.*)$/m, `$1\n\n${header}`) : `${header}\n\n${body}`;
		pages.push({ path: `dev/doc/${file.replace(/\.md$/, "")}`, body: withHeader });
	}
	return pages;
}

/** 生成時の警告ページ。中身は全ページを作り終えてから埋める */
export function warningPage(context: Context, warnings: string[], orphans: string[]): Page {
	return {
		path: "dev/warnings",
		body: join(
			"# 生成時の警告",
			"`npm run wiki-generate` が見つけた不整合。`npm run wiki-check` はここが空でないと失敗する。",
			section("参照・設定の不整合", warnings.map((warning) => `- ${escapeMarkdown(warning)}`).join("\n") || "なし"),
			section("差し込み先の無い追記（notes）", orphans.map((orphan) => `- \`notes/${context.model.language}/${orphan}.md\``).join("\n") || "なし"),
		),
	};
}

/** 手書きページ（notes/<lang>/pages）。[[type:id]] を展開してそのまま置く */
export function handPages(context: Context): Page[] {
	return [...context.notes.pages.entries()].map(([pagePath, markdown]) => ({
		path: pagePath,
		body: context.notes.expand(markdown),
		search: { t: "ページ", n: headingOf(markdown, pagePath), i: pagePath, x: "", e: "📄", p: `/${context.model.language}/${pagePath}` },
	}));
}

