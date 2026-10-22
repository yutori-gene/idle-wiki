// スキル（skill/<id>）・イベント（event/<id>）・グループ（group/<id>）のページ
import type * as Type from "../../source/type/worldType.ts";
import { escapeHtml, infobox, join, link, linkHtml, navbox, number, percent, section, table, type InfoboxRow } from "../lib/format.ts";
import {
	acquisitionText,
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

export function skillPages(context: Context): Page[] {
	const model = context.model;
	return model.world.skills.map((skill) => {
		const id = skill.information.id;
		const path = `skill/${id}`;
		const enemies = model.skillEnemies.get(id) ?? [];
		const holders = model.skillHolders.get(id) ?? [];
		const rows: InfoboxRow[] = [
			{ label: "発動率", value: `${htmlValue(percent(skill.chance))}／ターン` },
			{ label: "効果", value: htmlValue(skillEffect(context, skill)) },
			{ label: "持つ敵", value: `${number(enemies.length)}体` },
			{ label: "持つ装備", value: `${number(holders.length)}種` },
		];
		const effect = table(
			(Object.keys(skill.property) as (keyof Type.Combat)[]).map((key) => model.label.property[key]),
			[(Object.keys(skill.property) as (keyof Type.Combat)[]).map((key) => (skill.property[key] !== 0 ? number(skill.property[key]) : ""))],
		);
		const enemyRows = enemies.map((action) => [link(model, "action", action.information.id), link(model, "category", action.category), `Lv${number(action.level)}`]);
		const holderRows = holders.map((item) => [link(model, "item", item.information.id), link(model, "group", item.group), model.label.equipment[item.equipmentType]]);
		return {
			path,
			search: searchEntry(context, "skill", skill.information),
			body: join(
				lead(context, path, skill.information, infobox(skill.information, model.color("skill", id), rows)),
				section(
					"効果",
					join(
						`戦闘（スタミナ）の各ターンに ${percent(skill.chance)} で発動し、そのターンだけ持ち主の戦闘値に次の値を足す（回復は決着後の回復ターンにまとめて効く）。敵が持つときは敵側に効く。`,
						effect,
					),
				),
				section("このスキルを持つ敵", table(["敵（アクション）", "場所", "必要Lv"], enemyRows)),
				section("このスキルを持つ装備", table(["装備", "グループ", "装備"], holderRows)),
				developerSection(context, "skill", id, skill, referencesFor("skill")),
			),
		};
	});
}

export function eventPages(context: Context): Page[] {
	const model = context.model;
	return [...model.events.values()].map(({ world: event, bucket }) => {
		const id = event.information.id;
		const path = `event/${id}`;
		const label = model.label;
		const rows: InfoboxRow[] = [
			{ label: "タイミング", value: htmlValue(label.timing[event.timing]) },
			{ label: "グループ", value: event.group ? linkHtml(model, "group", event.group) : "" },
			{ label: "カテゴリ", value: event.category ? linkHtml(model, "category", event.category) : "" },
			{ label: "条件の数え方", value: event.requiringGroup ? "グループの合計" : "" },
			{ label: "初期状態", value: htmlValue(label.locked[event.unlocked]) },
		];
		const condition =
			event.timing === "changed"
				? "数量が変化したとき、**その1回で増えた量**が次の値以上なら発動する（何度でも繰り返す）。画面には表示されない。"
				: event.timing === "tasked"
					? "次をすべて満たすと達成になり、報酬を受け取れる。条件のアイテムは消費しない。一度達成したら、あとで条件を失っても達成のまま。"
					: `${label.timing[event.timing]}のタイミングで発生する。`;
		const conditionList = requirementList(context, event.requirements, event.requiringGroup);
		const rewards = event.acquisitions.map((acquisition) => `- ${acquisitionText(context, acquisition)}${Math.abs(acquisition.chance) < 1 ? `（${percent(Math.abs(acquisition.chance))}）` : ""}`);
		const siblings = event.group ? (model.groupMembers.get(event.group)?.events ?? []) : [];
		return {
			path,
			search: searchEntry(context, "event", event.information),
			body: join(
				lead(context, path, event.information, infobox(event.information, model.color("event", id), rows)),
				section("発生条件", join(condition, conditionList)),
				section("報酬", rewards.join("\n")),
				event.group && siblings.length > 1
					? navbox(model.groups.get(event.group)?.information.name ?? event.group, siblings.map((sibling) => linkHtml(model, "event", sibling.information.id)), model.color("event", id), `一覧は ${linkHtml(model, "group", event.group)} を参照`)
					: "",
				developerSection(context, "event", id, { ...event, bucket }, referencesFor("event", { timing: event.timing })),
			),
		};
	});
}

export function groupPages(context: Context): Page[] {
	const model = context.model;
	return [...model.groups.values()].map(({ information, types }) => {
		const id = information.id;
		const path = `group/${id}`;
		const members = model.groupMembers.get(id)!;
		const count = (list: unknown[], unit: string): string => (list.length ? `${number(list.length)}${unit}` : "");
		const rows: InfoboxRow[] = [
			{ label: "使う種別", value: escapeHtml(types.map((type) => model.label.types[type as keyof typeof model.label.types] ?? type).join("・")) },
			{ label: "カテゴリ", value: count(members.categories, "") },
			{ label: "アクション", value: count(members.actions, "本") },
			{ label: "アイテム", value: count(members.items, "種") },
			{ label: "イベント", value: count(members.events, "件") },
		];
		const categoryRows = members.categories.map((category) => [link(model, "category", category.information.id), category.numeric ? "あり" : "なし"]);
		const actionRows = members.actions.map((action) => [link(model, "action", action.information.id), link(model, "category", action.category), `Lv${number(action.level)}`, model.label.progress[action.progressType]]);
		const itemRows = members.items.map((item) => [link(model, "item", item.information.id), link(model, "category", item.category), model.label.equipment[item.equipmentType], item.sellingValue > 0 ? number(item.sellingValue) : "—"]);
		const eventRows = members.events.map((event) => [link(model, "event", event.information.id), model.label.timing[event.timing]]);
		return {
			path,
			search: searchEntry(context, "group", information),
			body: join(
				lead(context, path, information, infobox(information, model.color("group", id), rows)),
				section("カテゴリ", table(["カテゴリ", "レベル"], categoryRows)),
				section("アクション", table(["アクション", "場所", "必要Lv", "進行"], actionRows, { filter: actionRows.length > 15 })),
				section("アイテム", table(["アイテム", "管理カテゴリ", "装備", "売値"], itemRows, { filter: itemRows.length > 15 })),
				section("イベント", table(["イベント", "タイミング"], eventRows)),
				referencedBySection(context, model.referencesOf("group", id), "このグループの合計を条件にしているもの"),
				developerSection(context, "group", id, information, referencesFor("group")),
			),
		};
	});
}
