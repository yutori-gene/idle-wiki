// ワールドを wiki 用に引き直した索引。id → 実体と、逆引き（どこから入手できるか・どこで使われるか）を持つ
import type * as Type from "../../source/type/worldType.ts";
import type * as Condition from "../../source/type/conditionType.ts";
import type { Language } from "../../config/wiki.ts";
import type { CsvRow, Source } from "./source.ts";
import { labels, type Labels, type PageType } from "./label.ts";

/**
 * アイテム枠に並ぶもの。player と同じく、通貨（coins）と枠（capacity・queue）もアイテムとして扱う
 * （取得物・要求の id にそのまま現れるため。ページも item/<id> に置く）
 */
export interface ItemEntry {
	kind: Condition.ItemTypes;
	id: string;
	information: Type.Information;
	/** kind=normal のときだけある */
	world?: Type.Item;
	/** kind=capacity・queue のときだけある */
	slot?: Type.General["capacity"];
}

export interface EventEntry {
	world: Type.Event;
	/** World.events のどこに置かれているか */
	bucket: "tasks" | "changed" | "unique";
}

export interface GroupEntry {
	information: Type.Information;
	/** group.csv の type 列（このグループを使う種別）。CSV に無ければ空 */
	types: string[];
}

/** ある対象（カテゴリ・アクション・アイテム・グループ）を参照している箇所 */
export type Reference =
	| { kind: "action-acquisition"; action: Type.Action; acquisition: Type.Acquisition }
	| { kind: "event-acquisition"; event: Type.Event; acquisition: Type.Acquisition }
	| { kind: "action-requirement"; action: Type.Action; requirement: Type.Requirement }
	| { kind: "event-requirement"; event: Type.Event; requirement: Type.Requirement }
	| { kind: "category-requirement"; category: Type.Category; requirement: Type.Requirement }
	| { kind: "item-requirement"; item: Type.Item; requirement: Type.Requirement };

/** あるカテゴリへ効くアイテムのプロパティ */
export interface PropertyEffect {
	item: Type.Item;
	property: Type.Property;
	/** プロパティの宛先が "*"（全カテゴリ）か */
	everywhere: boolean;
}

export interface GroupMembers {
	categories: Type.Category[];
	actions: Type.Action[];
	items: Type.Item[];
	events: Type.Event[];
}

const key = (type: string, id: string): string => `${type}:${id}`;

export class Model {
	readonly world: Type.World;
	readonly source: Source;
	readonly language: Language;
	readonly label: Labels;

	readonly categories = new Map<string, Type.Category>();
	readonly actions = new Map<string, Type.Action>();
	readonly items = new Map<string, ItemEntry>();
	readonly skills = new Map<string, Type.Skill>();
	readonly events = new Map<string, EventEntry>();
	readonly groups = new Map<string, GroupEntry>();

	/** カテゴリ id → そのカテゴリに置かれたアクション（ワールドの並び順） */
	readonly categoryActions = new Map<string, Type.Action[]>();
	/** カテゴリ id → attribute でそのカテゴリへ経験値を入れる、よそのカテゴリのアクション */
	readonly attributedActions = new Map<string, Type.Action[]>();
	/** カテゴリ id → そのカテゴリが管理するアイテム */
	readonly categoryItems = new Map<string, Type.Item[]>();
	/** カテゴリ id → そこへ効くプロパティ（"*" は全カテゴリに入る） */
	readonly propertyEffects = new Map<string, PropertyEffect[]>();
	/** スキル id → そのスキルを持つ敵（stamina アクション）／装備 */
	readonly skillEnemies = new Map<string, Type.Action[]>();
	readonly skillHolders = new Map<string, Type.Item[]>();
	readonly groupMembers = new Map<string, GroupMembers>();
	/** "type:id" → 参照している箇所 */
	readonly references = new Map<string, Reference[]>();

	/** 生成中に見つけた不整合（存在しない id への参照など）。wiki-check が拾う */
	readonly warnings: string[] = [];

	constructor(source: Source, language: Language) {
		this.source = source;
		this.world = source.world;
		this.language = language;
		this.label = labels[language];
		const world = this.world;

		for (const category of world.categories) this.categories.set(category.information.id, category);
		for (const action of world.actions) this.actions.set(action.information.id, action);
		for (const item of world.items) this.items.set(item.information.id, { kind: "normal", id: item.information.id, information: item.information, world: item });
		for (const coin of world.basic.general.coins) this.items.set(coin.id, { kind: "coin", id: coin.id, information: coin });
		for (const slot of ["capacity", "queue"] as const) {
			const setting = world.basic.general[slot];
			this.items.set(setting.information.id, { kind: slot, id: setting.information.id, information: setting.information, slot: setting });
		}
		for (const skill of world.skills) this.skills.set(skill.information.id, skill);
		for (const event of world.events.tasks) this.events.set(event.information.id, { world: event, bucket: "tasks" });
		for (const event of world.events.changed) this.events.set(event.information.id, { world: event, bucket: "changed" });
		for (const event of Object.values(world.events.unique)) this.events.set(event.information.id, { world: event, bucket: "unique" });
		for (const group of world.groups) {
			const types = (this.csvRow("group", group.id)?.type ?? "").split(",").map((type) => type.trim()).filter(Boolean);
			this.groups.set(group.id, { information: group, types });
			this.groupMembers.set(group.id, { categories: [], actions: [], items: [], events: [] });
		}

		const push = <T>(map: Map<string, T[]>, id: string, value: T): void => {
			const list = map.get(id);
			if (list) list.push(value);
			else map.set(id, [value]);
		};
		const member = (groupId: string): GroupMembers | undefined => (groupId ? this.groupMembers.get(groupId) : undefined);

		for (const category of world.categories) {
			member(category.group)?.categories.push(category);
			for (const requirement of category.requirements) this.addReference(requirement, false, { kind: "category-requirement", category, requirement });
		}
		for (const action of world.actions) {
			push(this.categoryActions, action.category, action);
			if (action.attribute && action.attribute !== action.category) push(this.attributedActions, action.attribute, action);
			member(action.group)?.actions.push(action);
			for (const requirement of action.requirements) this.addReference(requirement, false, { kind: "action-requirement", action, requirement });
			for (const acquisition of action.acquisitions) this.addReference(acquisition, false, { kind: "action-acquisition", action, acquisition });
			for (const skillId of action.skills) push(this.skillEnemies, skillId, action);
		}
		for (const item of world.items) {
			push(this.categoryItems, item.category, item);
			member(item.group)?.items.push(item);
			for (const requirement of item.requirements) this.addReference(requirement, false, { kind: "item-requirement", item, requirement });
			if (item.skill) push(this.skillHolders, item.skill, item);
			for (const property of item.properties) {
				const target = property.category || item.category;
				if (target === "*") for (const category of world.categories) push(this.propertyEffects, category.information.id, { item, property, everywhere: true });
				else push(this.propertyEffects, target, { item, property, everywhere: false });
			}
		}
		for (const { world: event } of this.events.values()) {
			member(event.group)?.events.push(event);
			for (const requirement of event.requirements) this.addReference(requirement, event.requiringGroup, { kind: "event-requirement", event, requirement });
			for (const acquisition of event.acquisitions) this.addReference(acquisition, false, { kind: "event-acquisition", event, acquisition });
		}
	}

	private addReference(target: Type.Requirement | Type.Acquisition, requiringGroup: boolean, reference: Reference): void {
		const type = requiringGroup ? "group" : target.type;
		const id = key(type, target.id);
		const list = this.references.get(id);
		if (list) list.push(reference);
		else this.references.set(id, [reference]);
	}

	/** その対象を参照している箇所 */
	referencesOf(type: PageType, id: string): Reference[] {
		return this.references.get(key(type, id)) ?? [];
	}

	/** CSV の行（tier・rare・memo を拾う）。CSV に無ければ undefined */
	csvRow(name: "category" | "action" | "item" | "event" | "skill" | "group", id: string): CsvRow | undefined {
		return this.source.csv[name]?.get(id);
	}

	/** ページのパス（docsify のルート。先頭の / から始まり拡張子なし） */
	path(type: PageType, id: string): string {
		return `/${this.language}/${type}/${id}`;
	}

	/** id の実体が存在するか */
	exists(type: PageType, id: string): boolean {
		return this.information(type, id) !== undefined;
	}

	information(type: PageType, id: string): Type.Information | undefined {
		switch (type) {
			case "category":
				return this.categories.get(id)?.information;
			case "action":
				return this.actions.get(id)?.information;
			case "item":
				return this.items.get(id)?.information;
			case "skill":
				return this.skills.get(id)?.information;
			case "event":
				return this.events.get(id)?.world.information;
			case "group":
				return this.groups.get(id)?.information;
		}
	}

	/** 要求・取得物の参照先。requiringGroup のイベントだけ id がグループ id になる */
	targetOf(target: Type.Requirement | Type.Acquisition, requiringGroup = false): { type: PageType; id: string } {
		return { type: requiringGroup ? "group" : target.type, id: target.id };
	}

	/**
	 * 表示色。player と同じく、色を持つのはカテゴリだけで、アクション・アイテム・イベントは所属カテゴリから継承する
	 * （attribute を持つアクションは attribute 側のカテゴリ色）。どれも無ければワールドの色
	 */
	color(type: PageType, id: string): string {
		const own = this.information(type, id)?.color;
		if (own) return own;
		const categoryColor = (categoryId: string): string => this.categories.get(categoryId)?.information.color ?? "";
		let inherited = "";
		if (type === "action") {
			const action = this.actions.get(id);
			if (action) inherited = categoryColor(action.attribute || action.category);
		} else if (type === "item") {
			const item = this.items.get(id)?.world;
			if (item) inherited = categoryColor(item.category);
		} else if (type === "event") {
			const event = this.events.get(id)?.world;
			if (event) inherited = categoryColor(event.category);
		}
		return inherited || this.world.basic.overview.information.color || "#888888";
	}

	/** 経験値の入り先カテゴリ（attribute があればそちら） */
	experienceCategory(action: Type.Action): Type.Category | undefined {
		return this.categories.get(action.attribute || action.category);
	}

	/** 売買の通貨。空・未知の id はメイン通貨（coins[0]）にフォールバックする（player と同じ） */
	coinOf(coinId: string): Type.Information {
		const coins = this.world.basic.general.coins;
		return coins.find((coin) => coin.id === coinId) ?? coins[0];
	}

	warn(message: string): void {
		if (!this.warnings.includes(message)) this.warnings.push(message);
	}
}
