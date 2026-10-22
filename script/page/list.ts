// 一覧ページ（list/<種別>）。種別ごとの全件表。どれも絞り込み欄付き
import type * as Type from "../../source/type/worldType.ts";
import { duration, join, link, number, percent, percentValue, section, signed, table } from "../lib/format.ts";
import { acquisitionText, baseStats, requirementText, skillEffect, type Context, type Page } from "./common.ts";
import { VERDICT } from "./action.ts";

/** 一覧ページの見出し（サイドバーと共通） */
export const LIST_PAGES: { path: string; title: string }[] = [
	{ path: "list/categories", title: "カテゴリ一覧" },
	{ path: "list/actions", title: "アクション一覧" },
	{ path: "list/enemies", title: "敵一覧" },
	{ path: "list/items", title: "アイテム一覧" },
	{ path: "list/equipment", title: "装備一覧" },
	{ path: "list/skills", title: "スキル一覧" },
	{ path: "list/events", title: "イベント一覧" },
	{ path: "list/groups", title: "グループ一覧" },
];

function page(context: Context, path: string, ...blocks: string[]): Page {
	const title = LIST_PAGES.find((entry) => entry.path === path)!.title;
	return { path, body: join(`# ${title}`, context.notes.insert(path), ...blocks) };
}

const filterNote = "表の上の欄に入力すると行を絞り込める。見出しをクリックすると並べ替えられる。";

export function listPages(context: Context): Page[] {
	const model = context.model;
	const world = model.world;
	const units = model.label.time;

	const categories = page(
		context,
		"list/categories",
		table(
			["カテゴリ", "グループ", "レベル", "解放条件", "アクション", "アイテム"],
			world.categories.map((category) => [
				link(model, "category", category.information.id),
				category.group ? link(model, "group", category.group) : "",
				category.numeric ? "あり" : "なし",
				category.unlocked === "released" ? "最初から" : category.requirements.map((requirement) => requirementText(context, requirement)).join("<br>"),
				number(model.categoryActions.get(category.information.id)?.length ?? 0),
				number(model.categoryItems.get(category.information.id)?.length ?? 0),
			]),
			{ filter: true },
		),
	);

	const actions = page(
		context,
		"list/actions",
		filterNote,
		table(
			["アクション", "場所", "グループ", "進行", "必要Lv", "時間", "成功率", "経験値/時"],
			world.actions.map((action) => {
				const stats = baseStats(context, action);
				return [
					link(model, "action", action.information.id),
					link(model, "category", action.category),
					action.group ? link(model, "group", action.group) : "",
					model.label.progress[action.progressType],
					number(action.level),
					action.progressType === "snap" ? "即時" : duration(action.seconds, units),
					percent(action.chance),
					stats.experiencePerHour !== undefined && stats.experience > 0 ? number(stats.experiencePerHour, 0) : "—",
				];
			}),
			{ filter: true },
		),
	);

	const enemies = page(
		context,
		"list/enemies",
		"スタミナ（戦闘）のアクションの一覧。見込みはレベル差0・装備なし。",
		filterNote,
		table(
			["敵", "場所", "経験値の入り先", "必要Lv", "攻撃", "防御", "精度", "回避", "回復", "スキル", "1戦の被ダメ", "見込み"],
			world.actions
				.filter((action) => action.progressType === "stamina")
				.map((action) => {
					const combat = baseStats(context, action).combat!;
					return [
						link(model, "action", action.information.id),
						link(model, "category", action.category),
						link(model, "category", action.attribute || action.category),
						number(action.level),
						number(action.property.attack),
						number(action.property.defence),
						number(action.property.accuracy),
						number(action.property.evasion),
						number(action.property.restore),
						action.skills.map((skillId) => link(model, "skill", skillId)).join("<br>"),
						percentValue(combat.damage),
						VERDICT[combat.verdict],
					];
				}),
			{ filter: true },
		),
	);

	const items = page(
		context,
		"list/items",
		filterNote,
		table(
			["アイテム", "管理カテゴリ", "グループ", "装備", "売値", "買値", "入手元"],
			world.items.map((item) => {
				const sources = model.referencesOf("item", item.information.id).filter((reference) => reference.kind === "action-acquisition" || reference.kind === "event-acquisition").length + (item.buyingValue > 0 ? 1 : 0);
				return [
					link(model, "item", item.information.id),
					link(model, "category", item.category),
					item.group ? link(model, "group", item.group) : "",
					model.label.equipment[item.equipmentType],
					item.sellingValue > 0 ? number(item.sellingValue) : "—",
					item.buyingValue > 0 ? number(item.buyingValue) : "—",
					number(sources),
				];
			}),
			{ filter: true },
		),
	);

	const keys = ["attack", "defence", "accuracy", "evasion", "restore", "speed", "chance", "experience"] as const;
	const equipmentRows: string[][] = [];
	for (const item of world.items) {
		for (const property of item.properties) {
			const target = property.category || item.category;
			equipmentRows.push([
				link(model, "item", item.information.id),
				item.group ? link(model, "group", item.group) : "",
				model.label.equipment[item.equipmentType],
				target === "*" ? "全カテゴリ" : link(model, "category", target),
				...keys.map((key) => (property[key] !== 0 ? signed(property[key]) : "")),
				item.skill ? link(model, "skill", item.skill) : "",
			]);
		}
	}
	const equipment = page(
		context,
		"list/equipment",
		"プロパティを持つアイテムの一覧。効き先ごとに1行。値はレベル差に加算される。",
		filterNote,
		table(["アイテム", "グループ", "装備", "効き先", ...keys.map((key) => model.label.property[key]), "スキル"], equipmentRows, { filter: true }),
	);

	const skills = page(
		context,
		"list/skills",
		filterNote,
		table(
			["スキル", "発動率", "効果", "持つ敵", "持つ装備"],
			world.skills.map((skill) => [
				link(model, "skill", skill.information.id),
				percent(skill.chance),
				skillEffect(context, skill),
				number(model.skillEnemies.get(skill.information.id)?.length ?? 0),
				(model.skillHolders.get(skill.information.id) ?? []).map((item) => link(model, "item", item.information.id)).join("<br>"),
			]),
			{ filter: true },
		),
	);

	const eventTable = (events: Type.Event[]): string =>
		table(
			["イベント", "タイミング", "グループ", "条件", "報酬"],
			events.map((event) => [
				link(model, "event", event.information.id),
				model.label.timing[event.timing],
				event.group ? link(model, "group", event.group) : "",
				event.requirements.map((requirement) => requirementText(context, requirement, event.requiringGroup)).join("<br>"),
				event.acquisitions.map((acquisition) => acquisitionText(context, acquisition)).join("<br>"),
			]),
			{ filter: events.length > 15 },
		);
	const events = page(
		context,
		"list/events",
		section("タスク", eventTable(world.events.tasks)),
		section("変化時（隠しイベント）", join("画面には出ないイベント。数量が一度に条件以上増えたときに発動する。", eventTable(world.events.changed))),
		section("固定のイベント", eventTable(Object.values(world.events.unique))),
	);

	const groups = page(
		context,
		"list/groups",
		table(
			["グループ", "使う種別", "カテゴリ", "アクション", "アイテム", "イベント"],
			[...model.groups.values()].map(({ information, types }) => {
				const members = model.groupMembers.get(information.id)!;
				return [
					link(model, "group", information.id),
					types.map((type) => model.label.types[type as keyof typeof model.label.types] ?? type).join("・"),
					number(members.categories.length),
					number(members.actions.length),
					number(members.items.length),
					number(members.events.length),
				];
			}),
			{ filter: true },
		),
	);

	return [categories, actions, enemies, items, equipment, skills, events, groups];
}
