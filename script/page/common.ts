// 全ページ共通の部品。ページの骨格（RULES.md「全ページ共通の骨格」）はここで決まる
import type * as Type from "../../source/type/worldType.ts";
import { designReferences, publishedDocuments } from "../../config/wiki.ts";
import type { Model, Reference } from "../lib/model.ts";
import type { Notes } from "../lib/notes.ts";
import type { PageType } from "../lib/label.ts";
import { details, escapeHtml, escapeMarkdown, join, link, number, percent, section, table } from "../lib/format.ts";
import { findHeading } from "../lib/document.ts";
import { calculateActionStats, expectedAcquisition, expectedConsumption, type ActionStats } from "../lib/calc.ts";

export interface Context {
	model: Model;
	notes: Notes;
}

/** 検索用の索引1件（site/search/<lang>.json） */
export interface SearchEntry {
	/** 種別の表示名 */
	t: string;
	/** 名前 */
	n: string;
	/** id */
	i: string;
	/** 説明 */
	x: string;
	/** アイコン（emoji） */
	e: string;
	/** パス */
	p: string;
}

export interface Page {
	/** 言語を除いた相対パス（拡張子なし）。例: item/lemon */
	path: string;
	body: string;
	search?: SearchEntry;
}

/** 要素ページの検索索引 */
export function searchEntry(context: Context, type: PageType, information: Type.Information): SearchEntry {
	return {
		t: context.model.label.types[type],
		n: information.name,
		i: information.id,
		x: information.explanation,
		e: information.icon.emoji,
		p: context.model.path(type, information.id),
	};
}

/** ページ冒頭の見出し（アイコン＋名前）と説明文の引用、手書きの追記 */
export function lead(context: Context, pagePath: string, information: Type.Information, infobox: string): string {
	const explanation = information.explanation ? `> ${escapeMarkdown(information.explanation)}` : "";
	return join(`# ${escapeMarkdown(information.name)}`, infobox, explanation, context.notes.insert(pagePath));
}

/** 要求1件を文章にする（「公園 Lv20以上」「レモン ×3（消費）」など） */
export function requirementText(context: Context, requirement: Type.Requirement, requiringGroup = false, consuming = false): string {
	const model = context.model;
	const target = model.targetOf(requirement, requiringGroup);
	const name = link(model, target.type, target.id);
	if (requiringGroup) {
		const unit = requirement.type === "category" ? "カテゴリLvの合計" : requirement.type === "action" ? "アクション実行回数の合計" : "アイテム所持数の合計";
		return `${name} の${unit} ${number(requirement.count)}以上`;
	}
	switch (requirement.type) {
		case "category":
			return `${name} Lv${number(requirement.count)}以上`;
		case "action":
			return `${name} を${number(requirement.count)}回実行`;
		case "item": {
			const notes: string[] = [];
			if (requirement.equipment) notes.push("装備が必要");
			if (consuming) notes.push(requirement.chance >= 1 ? "消費する" : requirement.chance <= 0 ? "消費しない" : `${percent(requirement.chance)}で消費`);
			return `${name} ×${number(requirement.count)}${notes.length ? `（${notes.join("・")}）` : ""}`;
		}
	}
}

/** 要求の一覧（箇条書き）。consuming はアクションの要求（実行のたびに消費する）か */
export function requirementList(context: Context, requirements: Type.Requirement[], requiringGroup = false, consuming = false): string {
	return requirements.map((requirement) => `- ${requirementText(context, requirement, requiringGroup, consuming)}`).join("\n");
}

/** 取得物1件を文章にする（「レモン ×3」「公園 Lv+1」など） */
export function acquisitionText(context: Context, acquisition: Type.Acquisition): string {
	const name = link(context.model, acquisition.type, acquisition.id);
	switch (acquisition.type) {
		case "category":
			return `${name} Lv+${number(acquisition.count)}`;
		case "action":
			return `${name} の実行回数 +${number(acquisition.count)}`;
		case "item":
			return `${name} ×${number(acquisition.count)}`;
	}
}

/** 表向けの短い個数・確率の表記（「×3 (30%)」。×1 と 100% は省く） */
function shortSuffix(count: number, chance: number): string {
	return `${count !== 1 ? `×${number(count)}` : ""}${chance < 1 ? ` (${percent(chance)})` : ""}`;
}

/** アクションの消費物（消費率>0 のアイテム要求）を表向けに短く */
export function shortConsumptions(context: Context, action: Type.Action): string {
	return action.requirements
		.filter((requirement) => requirement.type === "item" && requirement.chance > 0)
		.map((requirement) => link(context.model, "item", requirement.id) + shortSuffix(requirement.count, requirement.chance))
		.join("<br>");
}

/** アクションの取得物を表向けに短く。失敗時のものは頭に「失敗:」 */
export function shortAcquisitions(context: Context, action: Type.Action): string {
	return action.acquisitions
		.map((acquisition) => {
			if (acquisition.type !== "item") return acquisitionText(context, acquisition);
			const failure = acquisition.chance < 0 ? "失敗:" : "";
			return failure + link(context.model, "item", acquisition.id) + shortSuffix(acquisition.count, Math.abs(acquisition.chance));
		})
		.join("<br>");
}

/** 消費物・取得物の短い表記の注記 */
export const SHORT_NOTE = "消費物・取得物の「×個数 (確率)」は、×1 と 100% を省いた表記。取得物の確率は成功時（「失敗:」は失敗時）の抽選確率で、期待値は各アクションのページを見る。";

/** 参照元の要素（アクション・イベント・カテゴリ・アイテム）へのリンク */
export function referenceOwner(context: Context, reference: Reference): string {
	const model = context.model;
	switch (reference.kind) {
		case "action-acquisition":
		case "action-requirement":
			return link(model, "action", reference.action.information.id);
		case "event-acquisition":
		case "event-requirement":
			return link(model, "event", reference.event.information.id);
		case "category-requirement":
			return link(model, "category", reference.category.information.id);
		case "item-requirement":
			return link(model, "item", reference.item.information.id);
	}
}

/** 「この要素を条件にしているもの」の節。アクションの消費・装備は呼び出し側で別の節に出すので、ここでは解放条件・イベント条件を扱う */
export function referencedBySection(context: Context, references: Reference[], heading = "これを条件にしているもの"): string {
	const rows: string[][] = [];
	for (const reference of references) {
		const owner = referenceOwner(context, reference);
		switch (reference.kind) {
			case "category-requirement":
				rows.push([owner, "カテゴリの解放条件", requirementText(context, reference.requirement)]);
				break;
			case "item-requirement":
				rows.push([owner, "アイテムの解放条件", requirementText(context, reference.requirement)]);
				break;
			case "event-requirement":
				rows.push([owner, `イベントの条件（${context.model.label.timing[reference.event.timing]}）`, requirementText(context, reference.requirement, reference.event.requiringGroup)]);
				break;
			case "action-requirement":
				rows.push([owner, "アクションの実行条件", requirementText(context, reference.requirement, false, true)]);
				break;
			default:
				break;
		}
	}
	return section(heading, table(["対象", "種類", "条件"], rows));
}

/** CSV にしか無い列（world.json には乗らない） */
const CSV_ONLY_COLUMNS = ["tier", "rare", "memo"];

/**
 * 開発者向け情報の節。id と内部値、CSV だけにある列、設計ドキュメントへの参照、生の JSON を出す
 * @param raw ワールド定義の生のオブジェクト
 * @param references 「ファイル名#見出しの先頭」の一覧
 */
export function developerSection(context: Context, csvName: "category" | "action" | "item" | "event" | "skill" | "group" | undefined, id: string, raw: object, references: string[], extra = ""): string {
	const model = context.model;
	const row = csvName ? model.csvRow(csvName, id) : undefined;
	const rows: string[][] = [["id", `\`${id}\``]];
	for (const [key, value] of Object.entries(raw)) {
		if (typeof value === "object") continue;
		rows.push([`\`${key}\``, value === "" ? "（空）" : `\`${escapeMarkdown(String(value))}\``]);
	}
	if (row) for (const column of CSV_ONLY_COLUMNS) if (row[column]) rows.push([`CSV \`${column}\``, escapeMarkdown(row[column])]);

	const referenceLinks = designReferenceLinks(context, references);
	const json = "```json\n" + JSON.stringify(raw, null, "\t") + "\n```";
	return section(
		"開発者向け情報",
		join(
			table(["項目", "値"], rows),
			referenceLinks ? `**設計ドキュメント**: ${referenceLinks}` : "",
			extra,
			details("ワールド定義（JSON）", json),
		),
	);
}

/** 「plan.md#見出し」の一覧を、開発者ページ内の見出しへのリンクにする。見つからない見出しは警告 */
export function designReferenceLinks(context: Context, references: string[]): string {
	const links: string[] = [];
	for (const reference of [...new Set(references)]) {
		const [file, heading] = reference.split("#");
		const document = context.model.source.documents.get(file);
		if (!document || !(file in publishedDocuments)) {
			context.model.warn(`設計ドキュメントが無い: ${reference}`);
			continue;
		}
		const found = findHeading(document, heading);
		if (!found) {
			context.model.warn(`設計ドキュメントの見出しが見つからない: ${reference}`);
			continue;
		}
		links.push(`[${escapeMarkdown(`${file} › ${found.text}`)}](${documentPath(context, file)}?id=${encodeURIComponent(found.slug)})`);
	}
	return links.join(" ／ ");
}

/** 設計ドキュメントのページのパス */
export function documentPath(context: Context, file: string): string {
	return `/${context.model.language}/dev/doc/${file.replace(/\.md$/, "")}`;
}

/** 種別ごとの設計ドキュメント参照を集める */
export function referencesFor(type: PageType, options: { progressType?: string; group?: string; timing?: string } = {}): string[] {
	const references = designReferences;
	switch (type) {
		case "category":
			return references.category;
		case "action":
			return [...(references.action["*"] ?? []), ...(references.action[options.progressType ?? ""] ?? [])];
		case "item":
			return [...references.item, ...(references.itemGroups[options.group ?? ""] ?? [])];
		case "skill":
			return references.skill;
		case "event":
			return [...(references.event["*"] ?? []), ...(references.event[options.timing ?? ""] ?? [])];
		case "group":
			return references.group;
	}
}

/** HTML の値（インフォボックス用）。空なら空文字 */
export function htmlValue(text: string | number | undefined): string {
	return text === undefined || text === "" ? "" : escapeHtml(String(text));
}

const baseStatsCache = new WeakMap<Type.Action, ActionStats>();

/** レベル差0・装備なしのアクションの値（入手量・金策・経験値の表の基準） */
export function baseStats(context: Context, action: Type.Action): ActionStats {
	const cached = baseStatsCache.get(action);
	if (cached) return cached;
	const stats = calculateActionStats(context.model.world, action, context.model.experienceCategory(action)?.numeric ?? false, 0);
	baseStatsCache.set(action, stats);
	return stats;
}

/** アクション1回あたりの収支（通貨 id → 額）。収入は取得物の売値、支出は消費する材料の売値（売れば得られた額＝機会費用） */
export interface Economy {
	income: Map<string, number>;
	cost: Map<string, number>;
}

export function actionEconomy(context: Context, action: Type.Action, stats: ActionStats): Economy {
	const model = context.model;
	const income = new Map<string, number>();
	const cost = new Map<string, number>();
	const add = (map: Map<string, number>, coinId: string, value: number): void => {
		if (value > 0) map.set(coinId, (map.get(coinId) ?? 0) + value);
	};
	for (const acquisition of action.acquisitions) {
		if (acquisition.type !== "item") continue;
		const entry = model.items.get(acquisition.id);
		const expected = expectedAcquisition(acquisition, stats.chance);
		if (entry?.kind === "coin") add(income, entry.id, expected);
		else if (entry?.world && entry.world.sellingValue > 0) add(income, model.coinOf(entry.world.coinId).id, expected * entry.world.sellingValue);
	}
	for (const requirement of action.requirements) {
		const entry = model.items.get(requirement.id);
		const expected = expectedConsumption(requirement);
		if (requirement.type !== "item" || expected <= 0) continue;
		if (entry?.kind === "coin") add(cost, entry.id, expected);
		else if (entry?.world && entry.world.sellingValue > 0) add(cost, model.coinOf(entry.world.coinId).id, expected * entry.world.sellingValue);
	}
	return { income, cost };
}

/** スキルの効果（「攻撃+5・回復+4」）。0 の値は出さない */
export function skillEffect(context: Context, skill: Type.Skill): string {
	const label = context.model.label.property;
	return (Object.keys(skill.property) as (keyof Type.Combat)[])
		.filter((key) => skill.property[key] !== 0)
		.map((key) => `${label[key]}${skill.property[key] > 0 ? "+" : ""}${number(skill.property[key])}`)
		.join("・");
}
