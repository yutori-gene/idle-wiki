import * as Condition from "./conditionType.ts";

export interface World {
	basic: Basic;
	categories: Category[];
	actions: Action[];
	items: Item[];
	skills: Skill[];
	groups: Information[];
	events: Events;
	presets: Information[];
}
export interface Basic {
	overview: Overview;
	general: General;
	design: Design;
	development: Development;
}

export interface Events {
	// timing=tasked固定のイベント。ミッション・タスクに表示される
	tasks: Event[];
	// timing=changed固定のイベント。tasksと同じ構造。requirementsは絶対値ではなく直近の変化量として判定される
	changed: Event[];
	// tasked・changed以外のイベント。タイミングごとに1つずつ固定で用意され、追加も削除もできない
	unique: { [timing in Condition.FixedEventTimingTypes]: Event };
}

export interface Overview {
	information: Information;
	version: number;
	author: string;
	homepage: string;
	url: string;
	estimatedPlayingTime: {
		value: number;
		unit: Condition.TimeTypes;
	};
}

export interface General {
	language: Condition.LanguageCodeTypes;
	translations: boolean;
	offlineMaxHours: number;
	maxCategoryLevels: number;
	coins: Information[];
	capacity: {
		information: Information;
		increasingRate: number;
		initialCost: number;
		initialCount: number;
		// 容量購入に使う通貨ID。空文字または未対応IDのときはメイン通貨（coins[0]）にフォールバック
		coinId: string;
		// 購入回数の上限。0は無制限、-1は購入不可。報酬による枠増加は制限しない
		buyingLimit: number;
	};
	// アクションの連続実行キューの枠数（実行中を含み、先頭が実行中になる）。capacityと同様の唯一のシステムアイテム
	queue: {
		information: Information;
		increasingRate: number;
		initialCost: number;
		initialCount: number;
		// 枠購入に使う通貨ID。空文字または未対応IDのときはメイン通貨（coins[0]）にフォールバック
		coinId: string;
		// 購入回数の上限。0は無制限、-1は購入不可。報酬による枠増加は制限しない
		buyingLimit: number;
	};
	levelCommonRatio: number;
	actionLevelLimit: boolean;
	// レベル差10ごとにプロパティが何倍になるかの倍率。1でレベル差の影響なし
	propertyRatio: number;
	defaultCombat: Combat;
}

export interface Design {
	barColor: string;
	textColor: string;
	shadowColor: string;
	background: string;
}

export interface Development {
	version: string;
	memo: string[];
	errors: string[];
	timestamp: {
		created: string;
		saved: string;
		published: string;
	};
	autosaveing: boolean;
}

export interface Category {
	information: Information;
	group: string;
	unlocked: Condition.LockedTypes;
	requirements: Requirement[];
	numeric: boolean;
	standaloneProgress: boolean;
	background: string;
}

export interface Action {
	information: Information;
	category: string;
	attribute: string;
	group: string;
	unlocked: Condition.LockedTypes;
	level: number;
	experience: number;
	seconds: number;
	chance: number;
	maximum: number;
	requirements: Requirement[];
	acquisitions: Acquisition[];
	progressType: Condition.ActionProgressTypes;
	property: Combat;
	// 相手側のスキルID一覧。実体はワールド直下のskillsで定義する
	skills: string[];
}

export interface Item {
	information: Information;
	category: string;
	group: string;
	unlocked: Condition.LockedTypes;
	buyingValue: number;
	sellingValue: number;
	// 売買に使う通貨ID（購入・売却で共通）。空文字または未対応IDのときはメイン通貨（coins[0]）にフォールバック
	coinId: string;
	maximum: number;
	equipmentType: Condition.EquipmentTypes;
	// consumable のときに1回の実行で消費される確率（0〜1）。それ以外の装備タイプでは使わない
	consumeChance: number;
	requirements: Requirement[];
	properties: Property[];
	// 味方側のスキルID。実体はワールド直下のskillsで定義する
	skill: string;
}

export interface Event {
	information: Information;
	category: string;
	timing: Condition.EventTimingTypes;
	unlocked: Condition.LockedTypes;
	requirements: Requirement[];
	// true: requirementsの各idをグループIDとして扱い、そのグループに属するカテゴリのレベル・アクションの実行回数・アイテムの所持数の合計を条件にする（ロック中のものは集計対象外、アイテムの消費確率は無視して消費しない）
	requiringGroup: boolean;
	acquisitions: Acquisition[];
	group: string;
}

export interface Skill {
	information: Information;
	chance: number;
	property: Combat;
	comment: boolean;
}

export interface Icon {
	emoji: string;
	iconify: string;
	image: string;
}

export interface Information {
	id: string;
	name: string;
	explanation: string;
	icon: Icon;
	color: string;
}

export interface Requirement {
	type: Condition.BasicTypes;
	id: string;
	count: number;
	chance: number;
	equipment: boolean;
}

export interface Acquisition {
	type: Condition.BasicTypes;
	id: string;
	count: number;
	// 正の値: アクション成功時のみ評価（絶対値で抽選）。負の値: アクション失敗時のみ評価（絶対値で抽選）
	chance: number;
}

export interface Combat {
	attack: number;
	defence: number;
	accuracy: number;
	evasion: number;
	restore: number;
}

export interface Property {
	category: string;
	// combat
	attack: number;
	defence: number;
	accuracy: number;
	evasion: number;
	restore: number;
	// common
	speed: number;
	chance: number;
	experience: number;
}

/*
export interface Version {
	number: number;
	date: string;
	log: string;
}
*/

export interface Translation {
	name: string;
	explanation: string;
}
