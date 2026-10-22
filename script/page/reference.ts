// 参照表（reference/<名前>）。ワールド全体を横断して計算する表
import type * as Type from "../../source/type/worldType.ts";
import { calculateActionStats, experienceToNext } from "../lib/calc.ts";
import { join, link, number, section, table } from "../lib/format.ts";
import { actionEconomy, baseStats, requirementText, type Context, type Page } from "./common.ts";
import { levelGapsOf } from "./action.ts";

export const REFERENCE_PAGES: { path: string; title: string }[] = [
	{ path: "reference/progression", title: "進行チャート" },
	{ path: "reference/experience", title: "経験値表" },
	{ path: "reference/experience-rate", title: "経験値効率表" },
	{ path: "reference/money", title: "金策表" },
];

function page(context: Context, path: string, ...blocks: string[]): Page {
	const title = REFERENCE_PAGES.find((entry) => entry.path === path)!.title;
	return { path, body: join(`# ${title}`, context.notes.insert(path), ...blocks) };
}

export function referencePages(context: Context): Page[] {
	return [progressionPage(context), experiencePage(context), experienceRatePage(context), moneyPage(context)];
}

function experiencePage(context: Context): Page {
	const general = context.model.world.basic.general;
	const rows: string[][] = [];
	let total = 0;
	for (let level = 1; level < general.maxCategoryLevels; level++) {
		const next = experienceToNext(general, level);
		total += next;
		rows.push([`Lv${level} → ${level + 1}`, number(next, 0), number(total, 0)]);
	}
	return page(
		context,
		"reference/experience",
		`レベル L から L+1 に上がるのに要る経験値は **100 × ${number(general.levelCommonRatio)}^(L−1)**（levelCommonRatio = ${number(general.levelCommonRatio)}）。レベルの上限は ${number(general.maxCategoryLevels)}。`,
		"レベルがあるのは numeric のカテゴリだけ。アクションが成功すると、経験値の入り先カテゴリ（アクションの attribute、無ければ置かれたカテゴリ）に経験値が入る。",
		table(["レベル", "必要経験値", "累計"], rows),
	);
}

function moneyPage(context: Context): Page {
	const model = context.model;
	const main = model.world.basic.general.coins[0];
	const rows: { net: number; row: string[] }[] = [];
	for (const action of model.world.actions) {
		const stats = baseStats(context, action);
		if (stats.runsPerHour === undefined) continue;
		const economy = actionEconomy(context, action, stats);
		const income = (economy.income.get(main.id) ?? 0) * stats.runsPerHour;
		const cost = (economy.cost.get(main.id) ?? 0) * stats.runsPerHour;
		if (income <= 0) continue;
		rows.push({
			net: income - cost,
			row: [
				link(model, "action", action.information.id),
				link(model, "category", action.category),
				number(action.level),
				model.label.progress[action.progressType],
				number(income, 0),
				number(cost, 0),
				number(income - cost, 0),
			],
		});
	}
	rows.sort((a, b) => b.net - a.net);
	return page(
		context,
		"reference/money",
		`1時間あたりに${link(model, "item", main.id)}をどれだけ稼げるか（取得物をすべて売った額 − 消費した材料を売っていれば得られた額）。レベル差0・装備なしの期待値で、売れる取得物のあるアクションだけを並べる。`,
		"単発（宝箱の開封など）は100%になったあと手で開封する必要があるので、放置で回し続けられるのは連続と戦闘。",
		table(["アクション", "場所", "必要Lv", "進行", "収入/時", "材料費/時", "差引/時"], rows.map((entry) => entry.row), { filter: true }),
	);
}

function experienceRatePage(context: Context): Page {
	const model = context.model;
	const blocks: string[] = [];
	for (const category of model.world.categories) {
		if (!category.numeric) continue;
		const id = category.information.id;
		const actions = [...(model.categoryActions.get(id) ?? []), ...(model.attributedActions.get(id) ?? [])].filter(
			(action) => model.experienceCategory(action)?.information.id === id && action.experience > 0 && action.progressType !== "snap",
		);
		if (actions.length === 0) continue;
		const gaps = [0, 10, 20];
		const rows = [...actions]
			.sort((a, b) => a.level - b.level)
			.map((action) => {
				const available = levelGapsOf(context, action);
				return [
					link(model, "action", action.information.id),
					action.category !== id ? link(model, "category", action.category) : "",
					number(action.level),
					model.label.progress[action.progressType],
					...gaps.map((gap) => (available.includes(gap) ? number(calculateActionStats(model.world, action, true, gap).experiencePerHour ?? 0, 0) : "—")),
				];
			});
		blocks.push(section(`${category.information.icon.emoji} ${category.information.name}`, table(["アクション", "場所", "必要Lv", "進行", "±0", "+10", "+20"], rows), 2));
	}
	return page(
		context,
		"reference/experience-rate",
		"カテゴリごとに、経験値が入るアクションの「1時間あたりの経験値」をレベル差別に並べる（装備なし）。レベル差が大きいほど速く・成功しやすくなるが1回の経験値は減るので、効率の良いアクションはレベルとともに移る。",
		...blocks,
	);
}

function mermaidId(prefix: string, id: string): string {
	return `${prefix}_${id.replace(/[^A-Za-z0-9]/g, "_")}`;
}

function mermaidLabel(information: Type.Information): string {
	return `${information.icon.emoji} ${information.name}`.replace(/"/g, "#quot;");
}

/** カテゴリの解放条件を依存の順に並べる（条件のカテゴリが先） */
function sortByDependency(categories: Type.Category[]): Type.Category[] {
	const sorted: Type.Category[] = [];
	const visited = new Set<string>();
	const byId = new Map(categories.map((category) => [category.information.id, category]));
	const visit = (category: Type.Category, stack: Set<string>): void => {
		const id = category.information.id;
		if (visited.has(id) || stack.has(id)) return;
		stack.add(id);
		for (const requirement of category.requirements) {
			const required = requirement.type === "category" ? byId.get(requirement.id) : undefined;
			if (required) visit(required, stack);
		}
		visited.add(id);
		sorted.push(category);
	};
	for (const category of categories) visit(category, new Set());
	return sorted;
}

function progressionPage(context: Context): Page {
	const model = context.model;
	const language = model.language;
	const lines = ["flowchart TD"];
	const itemNodes = new Set<string>();
	const sourceEdges = new Set<string>();
	for (const category of model.world.categories) {
		const node = mermaidId("c", category.information.id);
		lines.push(`  ${node}["${mermaidLabel(category.information)}"]`);
		lines.push(`  click ${node} "#/${language}/category/${category.information.id}"`);
		lines.push(`  style ${node} fill:${category.information.color || "#888"},color:#fff,stroke:#0003`);
	}
	for (const category of model.world.categories) {
		const target = mermaidId("c", category.information.id);
		for (const requirement of category.requirements) {
			if (requirement.type === "category") lines.push(`  ${mermaidId("c", requirement.id)} -->|Lv${requirement.count}| ${target}`);
			else if (requirement.type === "item") {
				const entry = model.items.get(requirement.id);
				if (!entry) continue;
				const node = mermaidId("i", requirement.id);
				if (!itemNodes.has(node)) {
					itemNodes.add(node);
					lines.push(`  ${node}(["${mermaidLabel(entry.information)}"])`);
					lines.push(`  click ${node} "#/${language}/item/${requirement.id}"`);
					// 条件アイテムを落とすアクションの場所から点線でつなぐ
					for (const reference of model.referencesOf("item", requirement.id)) {
						if (reference.kind !== "action-acquisition") continue;
						const edge = `  ${mermaidId("c", reference.action.category)} -.-> ${node}`;
						if (!sourceEdges.has(edge)) {
							sourceEdges.add(edge);
							lines.push(edge);
						}
					}
				}
				lines.push(`  ${node} --> ${target}`);
			}
		}
	}

	const rows = sortByDependency(model.world.categories).map((category) => {
		const itemSources = category.requirements
			.filter((requirement) => requirement.type === "item")
			.map((requirement) => {
				const places = [
					...new Set(
						model
							.referencesOf("item", requirement.id)
							.filter((reference) => reference.kind === "action-acquisition")
							.map((reference) => (reference.kind === "action-acquisition" ? link(model, "action", reference.action.information.id) : "")),
					),
				];
				return `${link(model, "item", requirement.id)} ← ${places.join("・") || "—"}`;
			});
		return [
			link(model, "category", category.information.id),
			category.unlocked === "released" ? "最初から" : category.requirements.map((requirement) => requirementText(context, requirement)).join("<br>"),
			itemSources.join("<br>"),
		];
	});
	return page(
		context,
		"reference/progression",
		`カテゴリの解放条件をつないだ図。実線はカテゴリのレベル・条件アイテム、点線は条件アイテムが手に入る場所。ノードをクリックするとそのページへ移る。想定プレイ時間は ${number(model.world.basic.overview.estimatedPlayingTime.value)}${model.label.timeUnit[model.world.basic.overview.estimatedPlayingTime.unit]}。`,
		"```mermaid\n" + lines.join("\n") + "\n```",
		section("解放の順番", table(["カテゴリ", "解放条件", "条件アイテムの入手先"], rows)),
		section("ゲームクリア", `すべての numeric カテゴリ（レベルのあるカテゴリ）が Lv${model.world.basic.general.maxCategoryLevels} に達すると ${link(model, "event", model.world.events.unique.completed.information.id)} が発生する。`),
	);
}

