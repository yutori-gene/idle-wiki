// アクションページ（action/<id>）
import type * as Type from "../../source/type/worldType.ts";
import { calculateActionStats, expectedAcquisition, experienceReturnRate, LEVEL_GAPS, type ActionStats, type CombatEstimate } from "../lib/calc.ts";
import { amount, duration, escapeHtml, escapeMarkdown, infobox, join, link, linkHtml, navbox, number, percent, percentValue, section, table, type InfoboxRow } from "../lib/format.ts";
import {
	actionEconomy,
	acquisitionText,
	baseStats,
	developerSection,
	htmlValue,
	lead,
	levelPercentCell,
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

/**
 * そのアクションで並べるレベル差（系統のカテゴリが最大レベルを超えない差だけ）。系統のカテゴリが numeric=false なら差0のみ。
 * 所属カテゴリが先に最大レベルへ届く分は、計算で最大レベルに止める（calculateActionStats）
 */
export function levelGapsOf(context: Context, action: Type.Action): number[] {
	const basis = context.model.actionBasis(action);
	if (!basis.numeric) return [0];
	const max = context.model.world.basic.general.maxCategoryLevels;
	return LEVEL_GAPS.filter((gap) => gap === 0 || basis.level + gap <= max);
}

function actionPage(context: Context, action: Type.Action): Page {
	const model = context.model;
	const label = model.label;
	const id = action.information.id;
	const path = `action/${id}`;
	const stats = baseStats(context, action);
	const basis = model.actionBasis(action);
	const hasDiscipline = model.hasDiscipline(action);
	const ownNumeric = model.categories.get(action.category)?.numeric ?? false;
	const units = label.time;

	const rows: InfoboxRow[] = [
		{ label: "場所", value: linkHtml(model, "category", action.category) },
		{ label: "系統", value: hasDiscipline ? linkHtml(model, "category", action.discipline) : "" },
		{ label: "グループ", value: action.group ? linkHtml(model, "group", action.group) : "" },
		{ label: "進行", value: htmlValue(label.progress[action.progressType]) },
		{ label: "必要Lv", value: ownNumeric ? `Lv${number(action.level)}` : "" },
		{ label: "系統の必要Lv", value: hasDiscipline && basis.numeric ? `Lv${number(basis.level)}` : "" },
		{ label: "所要時間", value: action.progressType === "snap" ? "即時" : htmlValue(duration(action.seconds, units) + (action.progressType === "stamina" ? "／ターン" : "")) },
		{ label: "成功率", value: htmlValue(percent(action.chance)) },
		{ label: "経験値", value: basis.targets.length ? htmlValue(number(action.experience)) : "" },
		{ label: "経験値の配分", value: hasDiscipline ? experienceSplit(context, action) : "" },
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

/** 経験値の配分（インフォボックス用）。numeric=false の入り先は「入らない」 */
function experienceSplit(context: Context, action: Type.Action): string {
	const model = context.model;
	const rate = experienceReturnRate(model.world.basic.general);
	const part = (categoryId: string, value: number): string =>
		`${linkHtml(model, "category", categoryId)} ${model.categories.get(categoryId)?.numeric ? escapeHtml(percent(value)) : "（レベルが無いので入らない）"}`;
	return `${part(action.category, rate)}、${part(action.discipline, 1 - rate)}`;
}

function requirementSection(context: Context, action: Type.Action): string {
	const model = context.model;
	const levelLimit = model.world.basic.general.actionLevelLimit;
	const own = model.categories.get(action.category);
	const lines: string[] = [];
	if (levelLimit && own?.numeric && action.level > 1) lines.push(`- ${link(model, "category", action.category)} Lv${number(action.level)}以上（所属カテゴリのレベル）`);
	if (model.hasDiscipline(action)) {
		// player は系統のカテゴリが解放されるまでアクションをロックする（check.ts）
		const level = model.disciplineLevel(action);
		const leveled = levelLimit && model.disciplineCategory(action)?.numeric && level > 1;
		lines.push(`- ${link(model, "category", action.discipline)} が解放されている${leveled ? `・Lv${number(level)}以上` : ""}（系統のカテゴリ）`);
	}
	const items = requirementList(context, action.requirements, false, true);
	const hasConsuming = action.requirements.some((requirement) => requirement.type === "item" && requirement.chance > 0);
	return section(
		"必要なもの",
		join([...lines, items].filter(Boolean).join("\n"), hasConsuming ? "材料は成功・失敗にかかわらず、1回ごとに消費率で抽選して消費する。" : ""),
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
		const combat = calculateActionStats(model.world, action, model.actionBasis(action), gap).combat!;
		return [
			gapLabel(model.disciplineLevel(action), gap),
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

/** レベル差の見出し。level は系統の必要レベル（系統が無ければ必要Lv） */
function gapLabel(level: number, gap: number): string {
	return gap === 0 ? `±0（Lv${number(level)}）` : `+${gap}（Lv${number(level + gap)}）`;
}

function statsSection(context: Context, action: Type.Action): string {
	const model = context.model;
	const basis = model.actionBasis(action);
	const hasDiscipline = model.hasDiscipline(action);
	const units = model.label.time;
	// 系統を持つアクションは経験値%/時を入り先カテゴリごとの列に分ける
	const targetHeader = (categoryId: string): string => (hasDiscipline ? `経験値%/時（${escapeMarkdown(model.categories.get(categoryId)?.information.name ?? categoryId)}）` : "経験値%/時");
	const rows = levelGapsOf(context, action).map((gap) => {
		const stats = calculateActionStats(model.world, action, basis, gap);
		return [
			basis.numeric ? gapLabel(basis.level, gap) : "—",
			action.progressType === "snap" ? "即時" : duration(stats.seconds, units),
			percent(stats.chance),
			basis.targets.length ? number(stats.experience, 2) : model.label.none,
			stats.runsPerHour !== undefined ? number(stats.runsPerHour, 1) : model.label.none,
			...(basis.targets.length ? basis.targets.map((target) => levelPercentCell(context, stats, target.categoryId)) : [model.label.none]),
		];
	});
	const headers = ["レベル差", "所要時間", "成功率", "経験値/成功", "実行回数/時", ...(basis.targets.length ? basis.targets.map((target) => targetHeader(target.categoryId)) : ["経験値%/時"])];
	const notes = [
		basis.numeric
			? `レベル差＝${hasDiscipline ? "系統のカテゴリのレベル − 系統の必要Lv" : "所属カテゴリのレベル − 必要Lv"}。経験値%/時は、入り先カテゴリのそのレベルでのレベル1つ分を100%として1時間に上がる量。レベルが上がるほど速く・成功しやすくなるが、1回の経験値は減り、次のレベルまでの必要量も増える。装備による補正は含まない。`
			: `${hasDiscipline ? "系統の" : ""}カテゴリにレベルが無い（numeric=false）ので、レベル差の影響は受けない。`,
		hasDiscipline
			? "所要時間・成功率・戦闘は系統のカテゴリのレベル差で決まる。経験値は所属カテゴリと系統のカテゴリに配分し（インフォボックスの「経験値の配分」）、それぞれのカテゴリのレベル差で増減する。この表では所属カテゴリも同じレベル差とみなし、最大レベルを超える分は最大レベルで止める（最大レベルのカテゴリには経験値が入らないので「上限」）。"
			: "",
	];
	return section("計算値", join(table(headers, rows), notes.filter(Boolean).join("")));
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

