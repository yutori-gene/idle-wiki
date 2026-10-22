// アイテムページ（item/<id>）。通貨・枠（容量・キュー）も player と同じくアイテムとして扱う
import type * as Type from "../../source/type/worldType.ts";
import type { ItemEntry } from "../lib/model.ts";
import { expectedAcquisition, slotPrice } from "../lib/calc.ts";
import { amount, details, escapeHtml, infobox, join, link, linkHtml, navbox, number, percent, section, signed, table, type InfoboxRow } from "../lib/format.ts";
import {
	baseStats,
	developerSection,
	htmlValue,
	lead,
	referencedBySection,
	referencesFor,
	requirementList,
	requirementText,
	searchEntry,
	type Context,
	type Page,
} from "./common.ts";

const PROPERTY_KEYS = ["attack", "defence", "accuracy", "evasion", "restore", "speed", "chance", "experience"] as const;

export function itemPages(context: Context): Page[] {
	return [...context.model.items.values()].map((entry) => itemPage(context, entry));
}

function itemPage(context: Context, entry: ItemEntry): Page {
	const path = `item/${entry.id}`;
	const body = entry.kind === "normal" ? normalItem(context, path, entry.world!) : entry.kind === "coin" ? coinItem(context, path, entry) : slotItem(context, path, entry);
	return { path, body, search: searchEntry(context, "item", entry.information) };
}

/** 値と通貨（「12 🪙コイン」） */
function price(context: Context, value: number, coinId: string): string {
	const coin = context.model.coinOf(coinId);
	return `${number(value)} ${linkHtml(context.model, "item", coin.id)}`;
}

function normalItem(context: Context, path: string, item: Type.Item): string {
	const model = context.model;
	const label = model.label;
	const id = item.information.id;
	const references = model.referencesOf("item", id);
	const sources = references.filter((reference) => reference.kind === "action-acquisition" || reference.kind === "event-acquisition");
	const consumers = references.filter((reference) => reference.kind === "action-requirement");

	const sourceSummary = [
		sources.some((reference) => reference.kind === "action-acquisition") ? "アクション" : "",
		sources.some((reference) => reference.kind === "event-acquisition") ? "イベント" : "",
		item.buyingValue > 0 ? "購入" : "",
	].filter(Boolean);
	const rows: InfoboxRow[] = [
		{ label: "管理カテゴリ", value: linkHtml(model, "category", item.category) },
		{ label: "グループ", value: item.group ? linkHtml(model, "group", item.group) : "" },
		{ label: "装備", value: htmlValue(label.equipment[item.equipmentType]) },
		{ label: "売値", value: item.sellingValue > 0 ? price(context, item.sellingValue, item.coinId) : "売却不可" },
		{ label: "買値", value: item.buyingValue > 0 ? price(context, item.buyingValue, item.coinId) : "購入不可" },
		{ label: "所持上限", value: item.maximum > 0 ? number(item.maximum) : label.unlimited },
		{ label: "スキル", value: item.skill ? linkHtml(model, "skill", item.skill) : "" },
		{ label: "入手経路", value: sourceSummary.length ? escapeHtml(sourceSummary.join("・")) : "なし" },
		{ label: "初期状態", value: htmlValue(label.locked[item.unlocked]) },
	];

	return join(
		lead(context, path, item.information, infobox(item.information, model.color("item", id), rows)),
		performanceSection(context, item),
		section("入手方法", join(actionSources(context, id), eventSources(context, id), purchaseSource(context, item))),
		section("用途", join(consumerTable(context, consumers), toolTable(context, consumers), referencedBySection(context, references.filter((reference) => reference.kind !== "action-requirement"), "条件にしているもの").replace(/^## /, "### "))),
		section("解放条件", item.requirements.length ? `次をすべて満たすと一覧に現れる${item.buyingValue > 0 ? "（購入もできるようになる）" : ""}。\n\n${requirementList(context, item.requirements)}` : ""),
		groupNavbox(context, item),
		developerSection(context, "item", id, item, referencesFor("item", { group: item.group })),
	);
}

/** 性能（装備・所持で効くプロパティ）とスキル */
function performanceSection(context: Context, item: Type.Item): string {
	const model = context.model;
	const label = model.label;
	const used = PROPERTY_KEYS.filter((key) => item.properties.some((property) => property[key] !== 0));
	const rows = item.properties.map((property) => {
		const target = property.category || item.category;
		const where = target === "*" ? "全カテゴリ" : link(model, "category", target);
		return [where, ...used.map((key) => (property[key] !== 0 ? signed(property[key]) : ""))];
	});
	const how =
		item.equipmentType === "unnecessary"
			? "持っているだけで効く。所持数に比例して効果が増える。"
			: item.equipmentType === "necessary" || item.equipmentType === "consumable"
				? `装備しているあいだ効く（同じグループで装備できるのは1つ）。${item.equipmentType === "consumable" ? "使うたびに消費する。" : ""}`
				: "";
	const propertyTable = rows.length
		? join(how + "値はレベル差に加算される（レベル差10ごとに効果が propertyRatio 倍。[戦闘のしくみ](/" + model.language + "/system/combat) を参照）。", table(["効き先", ...used.map((key) => label.property[key])], rows))
		: "";

	let skill = "";
	if (item.skill) {
		const owned = model.skills.get(item.skill);
		skill = owned
			? `**スキル**: ${link(model, "skill", item.skill)}（装備中、戦闘の各ターンに ${percent(owned.chance)} で発動）`
			: `**スキル**: ${link(model, "skill", item.skill)}`;
	}
	return section("性能", join(propertyTable, skill));
}

function actionSources(context: Context, id: string): string {
	const model = context.model;
	const rows: string[][] = [];
	for (const reference of model.referencesOf("item", id)) {
		if (reference.kind !== "action-acquisition") continue;
		const { action, acquisition } = reference;
		const stats = baseStats(context, action);
		const expected = expectedAcquisition(acquisition, stats.chance);
		rows.push([
			link(model, "action", action.information.id),
			link(model, "category", action.category),
			`Lv${number(action.level)}`,
			number(acquisition.count),
			acquisition.chance >= 0 ? percent(acquisition.chance) : `失敗時 ${percent(-acquisition.chance)}`,
			amount(expected),
			stats.runsPerHour !== undefined ? amount(expected * stats.runsPerHour) : model.label.none,
		]);
	}
	return section("アクション", table(["アクション", "場所", "必要Lv", "個数", "確率", "1回あたり", "1時間あたり"], rows), 3);
}

function eventSources(context: Context, id: string): string {
	const model = context.model;
	const rows: string[][] = [];
	for (const reference of model.referencesOf("item", id)) {
		if (reference.kind !== "event-acquisition") continue;
		rows.push([link(model, "event", reference.event.information.id), model.label.timing[reference.event.timing], number(reference.acquisition.count), percent(Math.abs(reference.acquisition.chance))]);
	}
	return section("イベント", table(["イベント", "タイミング", "個数", "確率"], rows), 3);
}

function purchaseSource(context: Context, item: Type.Item): string {
	if (item.buyingValue <= 0) return "";
	const condition = item.requirements.length ? "（下記の解放条件を満たしてから）" : "";
	return section("購入", `${price(context, item.buyingValue, item.coinId)} で購入できる${condition}。`, 3);
}

/** 材料として消費するアクション */
function consumerTable(context: Context, references: ReturnType<Context["model"]["referencesOf"]>): string {
	const model = context.model;
	const rows: string[][] = [];
	for (const reference of references) {
		if (reference.kind !== "action-requirement" || reference.requirement.chance <= 0) continue;
		const { action, requirement } = reference;
		rows.push([
			link(model, "action", action.information.id),
			link(model, "category", action.category),
			`Lv${number(action.level)}`,
			number(requirement.count),
			percent(requirement.chance),
			requirement.equipment ? "要装備" : "",
		]);
	}
	return section("材料として消費", table(["アクション", "場所", "必要Lv", "個数", "消費率", "備考"], rows), 3);
}

/** 消費せず、持っている・装備していることが条件のアクション（道具） */
function toolTable(context: Context, references: ReturnType<Context["model"]["referencesOf"]>): string {
	const model = context.model;
	const rows: string[][] = [];
	for (const reference of references) {
		if (reference.kind !== "action-requirement" || reference.requirement.chance > 0) continue;
		rows.push([link(model, "action", reference.action.information.id), link(model, "category", reference.action.category), requirementText(context, reference.requirement, false, true)]);
	}
	return section("道具として必要（消費しない）", table(["アクション", "場所", "条件"], rows), 3);
}

function groupNavbox(context: Context, item: Type.Item): string {
	const model = context.model;
	const group = model.groups.get(item.group);
	if (!group) return "";
	const members = model.groupMembers.get(item.group)?.items ?? [];
	return navbox(`グループ: ${group.information.name}`, members.map((member) => linkHtml(model, "item", member.information.id)), model.color("item", item.information.id), `一覧は ${linkHtml(model, "group", item.group)} を参照`);
}

/** 通貨のページ */
function coinItem(context: Context, path: string, entry: ItemEntry): string {
	const model = context.model;
	const main = model.world.basic.general.coins[0]?.id === entry.id;
	const rows: InfoboxRow[] = [{ label: "種類", value: main ? "通貨（メイン）" : "通貨" }];

	// 売ってこの通貨が手に入るアイテム・この通貨で買えるもの
	const items = [...model.items.values()].filter((other) => other.world && model.coinOf(other.world.coinId).id === entry.id).map((other) => other.world!);
	const buyable = items.filter((item) => item.buyingValue > 0).sort((a, b) => a.buyingValue - b.buyingValue);
	const sellable = items.filter((item) => item.sellingValue > 0).sort((a, b) => b.sellingValue - a.sellingValue);
	const slots = (["capacity", "queue"] as const).filter((slot) => model.coinOf(model.world.basic.general[slot].coinId).id === entry.id);

	const buyTable = table(
		["アイテム", "価格", "解放条件"],
		buyable.map((item) => [link(model, "item", item.information.id), number(item.buyingValue), item.requirements.map((requirement) => requirementText(context, requirement)).join("<br>")]),
		{ filter: buyable.length > 20 },
	);
	const sellTable = table(
		["アイテム", "売値"],
		sellable.map((item) => [link(model, "item", item.information.id), number(item.sellingValue)]),
		{ filter: true },
	);
	return join(
		lead(context, path, entry.information, infobox(entry.information, model.color("item", entry.id), rows)),
		section("入手方法", join(actionSources(context, entry.id), eventSources(context, entry.id), sellable.length ? `アイテムを売ると手に入る（${number(sellable.length)}種）。効率は [金策表](/${model.language}/reference/money) を参照。` : "")),
		section("この通貨で買えるもの", join(slots.map((slot) => `- ${link(model, "item", model.world.basic.general[slot].information.id)}（枠の購入）`).join("\n"), buyTable)),
		details(`この通貨で売れるアイテム（${sellable.length}種）`, sellTable),
		developerSection(context, undefined, entry.id, entry.information, []),
	);
}

/** 枠（容量・キュー）のページ */
function slotItem(context: Context, path: string, entry: ItemEntry): string {
	const model = context.model;
	const slot = entry.slot!;
	const coin = model.coinOf(slot.coinId);
	const limit = slot.buyingLimit;
	const rows: InfoboxRow[] = [
		{ label: "種類", value: entry.kind === "capacity" ? "所持枠（アイテムの種類数）" : "作業予定の枠（アクションの予約数）" },
		{ label: "初期の枠", value: number(slot.initialCount) },
		{ label: "購入", value: limit < 0 ? "購入不可" : `${linkHtml(model, "item", coin.id)}で購入${limit > 0 ? `（${number(limit)}回まで）` : "（上限なし）"}` },
	];
	const events = eventSources(context, entry.id);
	const count = limit > 0 ? limit : 20;
	let total = 0;
	const priceRows: string[][] = [];
	for (let index = 1; index <= count && limit >= 0; index++) {
		const value = slotPrice(slot, index);
		total += value;
		priceRows.push([`${index}回目`, number(slot.initialCount + index), number(value), number(total)]);
	}
	return join(
		lead(context, path, entry.information, infobox(entry.information, model.color("item", entry.id), rows)),
		section(
			"購入価格",
			join(
				`n回目の価格 = ${number(slot.initialCost)} × ${number(slot.increasingRate)}^(n−1)（切り捨て）。${limit > 0 ? "" : "上限は無いので、ここでは20回目までを示す。"}`,
				table(["購入", "購入後の枠", `価格（${escapeHtml(coin.name)}）`, "累計"], priceRows),
			),
		),
		section("購入以外で増やす", events ? join("イベントの報酬で増える（購入回数の上限とは別枠）。", events) : ""),
		developerSection(context, undefined, entry.id, slot, []),
	);
}

