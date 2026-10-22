// アクションページ（action/<id>）
import type * as Type from "../../source/type/worldType.ts";
import { calculateActionStats, expectedAcquisition, LEVEL_GAPS, type ActionStats, type CombatEstimate } from "../lib/calc.ts";
import { amount, duration, infobox, join, link, linkHtml, navbox, number, percent, percentValue, section, table, type InfoboxRow } from "../lib/format.ts";
import {
	actionEconomy,
	acquisitionText,
	baseStats,
	developerSection,
	htmlValue,
	lead,
	referencedBySection,
	referencesFor,
	requirementList,
	searchEntry,
	skillEffect,
	type Context,
	type Page,
} from "./common.ts";

export const VERDICT: Record<CombatEstimate["verdict"], string> = {
	sustainable: "放置で連戦できる",
	draining: "連戦で少しずつ消耗する",
	deadly: "負ける見込みが高い",
	unwinnable: "勝てない",
};

export function actionPages(context: Context): Page[] {
	return context.model.world.actions.map((action) => actionPage(context, action));
}

/** そのアクションで並べるレベル差（カテゴリの最大レベルを超えない差だけ）。numeric=false なら差0のみ */
export function levelGapsOf(context: Context, action: Type.Action): number[] {
	const numeric = context.model.experienceCategory(action)?.numeric ?? false;
	if (!numeric) return [0];
	const max = context.model.world.basic.general.maxCategoryLevels;
	return LEVEL_GAPS.filter((gap) => gap === 0 || action.level + gap <= max);
}

function actionPage(context: Context, action: Type.Action): Page {
	const model = context.model;
	const label = model.label;
	const id = action.information.id;
	const path = `action/${id}`;
	const stats = baseStats(context, action);
	const experienceCategory = model.experienceCategory(action);
	const units = label.time;

	const rows: InfoboxRow[] = [
		{ label: "場所", value: linkHtml(model, "category", action.category) },
		{ label: "経験値の入り先", value: action.attribute && action.attribute !== action.category ? linkHtml(model, "category", action.attribute) : "" },
		{ label: "グループ", value: action.group ? linkHtml(model, "group", action.group) : "" },
		{ label: "進行", value: htmlValue(label.progress[action.progressType]) },
		{ label: "必要Lv", value: experienceCategory?.numeric ? `Lv${number(action.level)}` : "" },
		{ label: "所要時間", value: action.progressType === "snap" ? "即時" : htmlValue(duration(action.seconds, units) + (action.progressType === "stamina" ? "／ターン" : "")) },
		{ label: "成功率", value: htmlValue(percent(action.chance)) },
		{ label: "経験値", value: experienceCategory?.numeric ? htmlValue(number(action.experience)) : "" },
		{ label: "最大回数", value: action.maximum > 0 ? `${number(action.maximum)}回` : label.unlimited },
		{ label: "初期状態", value: htmlValue(label.locked[action.unlocked]) },
	];

	return {
		path,
		search: searchEntry(context, "action", action.information),
		body: join(
			lead(context, path, action.information, infobox(action.information, model.color("action", id), rows)),
			`**${label.progress[action.progressType]}**: ${label.progressExplanation[action.progressType]}。`,
			requirementSection(context, action),
			acquisitionSection(context, action, stats),
			combatSection(context, action),
			statsSection(context, action),
			economySection(context, action, stats),
			referencedSection(context, action),
			categoryNavbox(context, action),
			developerSection(context, "action", id, action, referencesFor("action", { progressType: action.progressType })),
		),
	};
}

function requirementSection(context: Context, action: Type.Action): string {
	const model = context.model;
	const category = model.experienceCategory(action);
	const level =
		model.world.basic.general.actionLevelLimit && category?.numeric && action.level > 1
			? `- ${link(model, "category", category.information.id)} Lv${number(action.level)}以上（経験値の入り先カテゴリのレベル）`
			: "";
	const items = requirementList(context, action.requirements, false, true);
	const hasConsuming = action.requirements.some((requirement) => requirement.type === "item" && requirement.chance > 0);
	return section(
		"必要なもの",
		join([level, items].filter(Boolean).join("\n"), hasConsuming ? "材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。" : ""),
	);
}

function acquisitionSection(context: Context, action: Type.Action, stats: ActionStats): string {
	const model = context.model;
	const rows = action.acquisitions.map((acquisition) => {
		const expected = expectedAcquisition(acquisition, stats.chance);
		return [
			acquisitionText(context, acquisition),
			acquisition.chance >= 0 ? "成功時" : "失敗時",
			percent(Math.abs(acquisition.chance)),
			amount(expected),
			stats.runsPerHour !== undefined ? amount(expected * stats.runsPerHour) : model.label.none,
		];
	});
	const note = `取得物は1件ずつ独立に抽選する（複数同時・何も出ないこともある）。期待値は成功率 ${percent(stats.chance)}（レベル差0・装備なし）で按分した値。`;
	return section("取得物", rows.length ? join(table(["取得物", "条件", "確率", "1回あたり", "1時間あたり"], rows), note) : "");
}

function combatSection(context: Context, action: Type.Action): string {
	if (action.progressType !== "stamina") return "";
	const model = context.model;
	const label = model.label.property;
	const property = action.property;
	const enemy = table(
		["攻撃", "防御", "精度", "回避", "回復"].map((name) => `敵の${name}`),
		[[property.attack, property.defence, property.accuracy, property.evasion, property.restore].map((value) => number(value))],
	);
	const skills = action.skills.map((skillId) => {
		const skill = model.skills.get(skillId);
		return `- ${link(model, "skill", skillId)}${skill ? `：毎ターン ${percent(skill.chance)} で発動、${skillEffect(context, skill)}` : ""}`;
	});
	const estimates = levelGapsOf(context, action).map((gap) => {
		const combat = calculateActionStats(model.world, action, model.experienceCategory(action)?.numeric ?? false, gap).combat!;
		return [
			gapLabel(action, gap),
			percentValue(combat.attack),
			percentValue(combat.defence),
			percentValue(combat.accuracy),
			percentValue(combat.evasion),
			percentValue(combat.restore),
			number(combat.turns, 1),
			percentValue(combat.damage),
			duration(combat.seconds, model.label.time),
			VERDICT[combat.verdict],
		];
	});
	return section(
		"戦闘",
		join(
			"敵の値は自分の値のレベル差から引かれる（例: 敵の防御が高いほど自分の攻撃が通りにくい）。",
			enemy,
			skills.length ? `**敵のスキル**\n\n${skills.join("\n")}` : "",
			section(
				"戦闘の見込み（装備・スキルなし）",
				join(
					table(
						["レベル差", `${label.attack}（1ヒット）`, `被ダメ（1ヒット）`, label.accuracy, label.evasion, `${label.restore}（1戦ごと）`, "撃破ターン", "1戦の被ダメ", "1戦の時間", "判定"],
						estimates,
					),
					"撃破ターン＝敵HP100%を削り切るヒット数÷精度。1戦の時間は回復ターン1回を含む。被ダメが回復を上回ると連戦でHPが減っていく。装備・スキル・乱数の偏りは含まない目安。",
				),
				3,
			),
		),
	);
}

function gapLabel(action: Type.Action, gap: number): string {
	return gap === 0 ? `±0（Lv${number(action.level)}）` : `+${gap}（Lv${number(action.level + gap)}）`;
}

function statsSection(context: Context, action: Type.Action): string {
	const model = context.model;
	const numeric = model.experienceCategory(action)?.numeric ?? false;
	const units = model.label.time;
	const rows = levelGapsOf(context, action).map((gap) => {
		const stats = calculateActionStats(model.world, action, numeric, gap);
		return [
			numeric ? gapLabel(action, gap) : "—",
			action.progressType === "snap" ? "即時" : duration(stats.seconds, units),
			percent(stats.chance),
			numeric ? number(stats.experience, 2) : model.label.none,
			stats.runsPerHour !== undefined ? number(stats.runsPerHour, 1) : model.label.none,
			stats.experiencePerHour !== undefined && numeric ? number(stats.experiencePerHour, 0) : model.label.none,
		];
	});
	const note = numeric
		? "レベル差＝経験値の入り先カテゴリのレベル − 必要Lv。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減る。装備による補正は含まない。"
		: "経験値の入り先カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。";
	return section("計算値", join(table(["レベル差", "所要時間", "成功率", "経験値/成功", "実行回数/時", "経験値/時"], rows), note));
}

function economySection(context: Context, action: Type.Action, stats: ActionStats): string {
	if (stats.runsPerHour === undefined) return "";
	const model = context.model;
	const economy = actionEconomy(context, action, stats);
	const coins = [...new Set([...economy.income.keys(), ...economy.cost.keys()])];
	if (coins.length === 0) return "";
	const rows = coins.map((coinId) => {
		const income = (economy.income.get(coinId) ?? 0) * stats.runsPerHour!;
		const cost = (economy.cost.get(coinId) ?? 0) * stats.runsPerHour!;
		return [link(model, "item", coinId), number(income, 0), number(cost, 0), number(income - cost, 0)];
	});
	return section(
		"収支（1時間あたり）",
		join(table(["通貨", "収入", "材料費", "差引"], rows), "取得物をすべて売った額と、消費した材料を売っていれば得られた額の差。レベル差0・装備なしの目安。"),
	);
}

function referencedSection(context: Context, action: Type.Action): string {
	const model = context.model;
	const references = model.referencesOf("action", action.information.id);
	const giving = references
		.filter((reference) => reference.kind === "action-acquisition" || reference.kind === "event-acquisition")
		.map((reference) => `- ${reference.kind === "action-acquisition" ? link(model, "action", reference.action.information.id) : link(model, "event", reference.event.information.id)}`);
	return join(referencedBySection(context, references), section("実行回数を増やすもの", giving.join("\n")));
}

function categoryNavbox(context: Context, action: Type.Action): string {
	const model = context.model;
	const category = model.categories.get(action.category);
	if (!category) return "";
	const actions = model.categoryActions.get(action.category) ?? [];
	return navbox(`${category.information.name}のアクション`, actions.map((other) => linkHtml(model, "action", other.information.id)), model.color("category", action.category), `一覧は ${linkHtml(model, "category", action.category)} を参照`);
}

