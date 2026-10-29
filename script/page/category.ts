// カテゴリページ（category/<id>）
import type * as Type from "../../source/type/worldType.ts";
import { categoryPatterns, designReferences } from "../../config/wiki.ts";
import { experienceToNext } from "../lib/calc.ts";
import { extractSection } from "../lib/document.ts";
import { details, duration, escapeMarkdown, infobox, join, link, linkHtml, navbox, number, percent, section, signed, table, type InfoboxRow } from "../lib/format.ts";
import {
	acquisitionText,
	baseStats,
	developerSection,
	htmlValue,
	lead,
	referencedBySection,
	referenceOwner,
	referencesFor,
	requirementList,
	searchEntry,
	SHORT_NOTE,
	shortAcquisitions,
	shortConsumptions,
	type Context,
	type Page,
} from "./common.ts";

export function categoryPages(context: Context): Page[] {
	return context.model.world.categories.map((category) => categoryPage(context, category));
}

function categoryPage(context: Context, category: Type.Category): Page {
	const model = context.model;
	const label = model.label;
	const id = category.information.id;
	const path = `category/${id}`;
	const actions = model.categoryActions.get(id) ?? [];
	const items = model.categoryItems.get(id) ?? [];
	const max = model.world.basic.general.maxCategoryLevels;

	const rows: InfoboxRow[] = [
		{ label: "グループ", value: category.group ? linkHtml(model, "group", category.group) : "" },
		{ label: "レベル", value: category.numeric ? `Lv1〜${number(max)}` : "なし" },
		{ label: "同時進行", value: category.standaloneProgress ? "他と並行して進む" : "共通の作業予定で順番に進む" },
		{ label: "アクション", value: `${number(actions.length)}本` },
		{ label: "管理アイテム", value: `${number(items.length)}種` },
		{ label: "初期状態", value: htmlValue(label.locked[category.unlocked]) },
	];

	return {
		path,
		search: searchEntry(context, "category", category.information),
		body: join(
			lead(context, path, category.information, infobox(category.information, model.color("category", id), rows)),
			unlockSection(context, category),
			actionSection(context, "アクション", actions, false),
			actionSection(context, "よそのカテゴリから経験値が入るアクション", model.attributedActions.get(id) ?? [], true),
			itemSection(context, items),
			propertySection(context, id),
			category.numeric ? levelSection(context, category) : referencedBySection(context, model.referencesOf("category", id).filter((reference) => reference.kind !== "action-requirement")),
			levelRewardSection(context, id),
			groupNavbox(context, category),
			developerSection(context, "category", id, category, referencesFor("category"), patternExcerpt(context, category)),
		),
	};
}

function unlockSection(context: Context, category: Type.Category): string {
	if (category.unlocked === "released") return section("解放条件", "最初から解放されている。");
	if (category.requirements.length === 0) return "";
	return section("解放条件", `次をすべて満たすと解放される。\n\n${requirementList(context, category.requirements)}`);
}

/** アクションの表。アクショングループごとに並べる */
function actionSection(context: Context, heading: string, actions: Type.Action[], showPlace: boolean): string {
	if (actions.length === 0) return "";
	const model = context.model;
	const units = model.label.time;
	const sorted = [...actions].sort((a, b) => a.level - b.level);
	const rows = sorted.map((action) => {
		const stats = baseStats(context, action);
		return [
			link(model, "action", action.information.id),
			...(showPlace ? [link(model, "category", action.category)] : []),
			action.group ? link(model, "group", action.group) : "",
			model.label.progress[action.progressType],
			`Lv${number(action.level)}`,
			action.progressType === "snap" ? "即時" : duration(action.seconds, units),
			percent(action.chance),
			stats.experiencePerHour !== undefined && stats.experience > 0 ? number(stats.experiencePerHour, 0) : model.label.none,
			shortConsumptions(context, action),
			shortAcquisitions(context, action),
		];
	});
	return section(
		heading,
		join(
			table(["アクション", ...(showPlace ? ["場所"] : []), "グループ", "進行", "必要Lv", "時間", "成功率", "経験値/時", "消費物", "取得物"], rows, { filter: rows.length > 15 }),
			heading === "アクション" ? `経験値/時はレベル差0・装備なしの目安（戦闘は1戦の見込み時間で割った値）。${SHORT_NOTE}` : "",
		),
	);
}

function itemSection(context: Context, items: Type.Item[]): string {
	if (items.length === 0) return "";
	const model = context.model;
	const rows = items.map((item) => [
		link(model, "item", item.information.id),
		item.group ? link(model, "group", item.group) : "",
		model.label.equipment[item.equipmentType],
		item.sellingValue > 0 ? number(item.sellingValue) : "—",
		item.buyingValue > 0 ? number(item.buyingValue) : "—",
	]);
	return section("管理するアイテム", join("アイテムの「管理カテゴリ」は入手場所ではなく、置き場所（装備を付け替える場所）を表す。", table(["アイテム", "グループ", "装備", "売値", "買値"], rows, { filter: rows.length > 15 })));
}

/** このカテゴリへ効くアイテムのプロパティ。全カテゴリ宛のものは折りたたむ */
function propertySection(context: Context, categoryId: string): string {
	const model = context.model;
	const effects = model.propertyEffects.get(categoryId) ?? [];
	if (effects.length === 0) return "";
	const keys = ["attack", "defence", "accuracy", "evasion", "restore", "speed", "chance", "experience"] as const;
	const build = (list: typeof effects): string => {
		const used = keys.filter((key) => list.some((effect) => effect.property[key] !== 0));
		return table(
			["アイテム", "装備", ...used.map((key) => model.label.property[key])],
			list.map((effect) => [link(model, "item", effect.item.information.id), model.label.equipment[effect.item.equipmentType], ...used.map((key) => (effect.property[key] !== 0 ? signed(effect.property[key]) : ""))]),
			{ filter: list.length > 15 },
		);
	};
	const specific = effects.filter((effect) => !effect.everywhere);
	const everywhere = effects.filter((effect) => effect.everywhere);
	return section(
		"効果を与えるアイテム",
		join(
			"装備（装備不要のものは所持）すると、このカテゴリのアクションに効く。値はレベル差に加算される。",
			build(specific),
			details(`全カテゴリに効くアイテム（${everywhere.length}種）`, build(everywhere)),
		),
	);
}

/** レベルごとに開くもの（アクションの必要Lv・このカテゴリのレベルを条件にしている要素） */
function levelSection(context: Context, category: Type.Category): string {
	const model = context.model;
	const general = model.world.basic.general;
	const id = category.information.id;
	const byLevel = new Map<number, string[]>();
	const add = (level: number, text: string): void => {
		const list = byLevel.get(level);
		if (list) list.push(text);
		else byLevel.set(level, [text]);
	};
	for (const action of [...(model.categoryActions.get(id) ?? []), ...(model.attributedActions.get(id) ?? [])]) {
		if (model.experienceCategory(action)?.information.id === id) add(Math.floor(action.level), `${link(model, "action", action.information.id)}（実行）`);
	}
	for (const reference of model.referencesOf("category", id)) {
		if (reference.kind === "action-acquisition" || reference.kind === "event-acquisition") continue;
		const requirement = "requirement" in reference ? reference.requirement : undefined;
		if (!requirement) continue;
		const kind = { "category-requirement": "解放", "item-requirement": "解放", "event-requirement": "達成条件", "action-requirement": "実行条件" }[reference.kind];
		add(Math.floor(requirement.count), `${referenceOwner(context, reference)}（${kind}）`);
	}
	let total = 0;
	const rows: string[][] = [];
	for (let level = 1; level <= general.maxCategoryLevels; level++) {
		const unlocks = byLevel.get(level);
		if (unlocks) rows.push([`Lv${level}`, number(total, 0), unlocks.join("<br>")]);
		total += experienceToNext(general, level);
	}
	return section("レベルで開くもの", join(table(["レベル", "累計経験値", "開くもの"], rows), `必要経験値の一覧は [経験値表](/${model.language}/reference/experience) を参照。`));
}

/** このカテゴリのレベルを報酬で上げるもの */
function levelRewardSection(context: Context, categoryId: string): string {
	const model = context.model;
	const rows = model
		.referencesOf("category", categoryId)
		.filter((reference) => reference.kind === "action-acquisition" || reference.kind === "event-acquisition")
		.map((reference) => [referenceOwner(context, reference), "acquisition" in reference ? acquisitionText(context, reference.acquisition) : ""]);
	return section("レベルを上げる報酬", table(["もらえる場所", "報酬"], rows));
}

function groupNavbox(context: Context, category: Type.Category): string {
	const model = context.model;
	const group = model.groups.get(category.group);
	if (!group) return "";
	const members = model.groupMembers.get(category.group)?.categories ?? [];
	return navbox(group.information.name, members.map((member) => linkHtml(model, "category", member.information.id)), model.color("category", category.information.id));
}

/** 開発者向け: カテゴリの型の雛形（plan.md）と overview.md の手書き欄を抜粋する */
function patternExcerpt(context: Context, category: Type.Category): string {
	const model = context.model;
	const pattern = categoryPatterns[category.information.id];
	const blocks: string[] = [];
	if (pattern) {
		blocks.push(`**カテゴリの型**: ${escapeMarkdown(pattern)}`);
		for (const reference of designReferences.patterns[pattern] ?? []) {
			const [file, heading] = reference.split("#");
			const excerpt = extractSection(model.source.documents.get(file) ?? "", heading, 4);
			if (excerpt === undefined) model.warn(`設計ドキュメントの見出しが見つからない: ${reference}`);
			else blocks.push(details(`抜粋: ${file} › ${heading}`, excerpt));
		}
	} else model.warn(`config/wiki.ts の categoryPatterns に無いカテゴリ: ${category.information.id}`);
	const fill = model.source.overviewFills.get(category.information.name);
	if (fill) blocks.push(details("抜粋: overview.md › 入手経路パターン", fill));
	return join(...blocks);
}

