// 計算値の式。idle の player の式を写したもの（wiki は player を動かせないので、表示に要る式だけを持つ）。
//
// 出どころ（source/engine/ に取り込んでいる）:
//   calculateRatio / calculateProperty / propertyWeights・経験値の配分（calculateExperienceShares） … player/control/game/property.ts
//   レベルアップ（levelCommonRatio）・成功判定・戦闘ターン   … player/control/game/update.ts
//   取得物の抽選（正の chance=成功時 / 負=失敗時）・要求の消費・所持枠に数えるアイテム … player/control/economy/trade.ts
//   最短の所要時間 minimumActionSecond                       … player/data/constant.ts
//
// ENGINE_DIGESTS は「この式を写したときの出どころのダイジェスト」。npm run wiki-check が source/snapshot.json と突き合わせ、
// 違っていたら式が変わった可能性として警告する。中身を見直して式を合わせたら、ここのダイジェストを更新する
import type * as Type from "../../source/type/worldType.ts";
import type * as Condition from "../../source/type/conditionType.ts";

export const ENGINE_DIGESTS: { [file: string]: string } = {
	"engine/property.ts": "aeccfbcc2071d1ea10bfb0265e22a8e3bb3b5da426869eec04bcd5173acab67a",
	"engine/update.ts": "fe794e96c504d0a45e6451279a645afee0ba13286478fe730d4c27d86d6792b9",
	"engine/trade.ts": "8f525aff0d247e92191cec9b4271826ceab041b2d2f26f1e52404459e4055c64",
	"engine/constant.ts": "4a2f3ff7aeabb1561a88ec3f013fccf8f40fef4d11c5bdb579f848dc1342b473",
};

const minimumActionSecond = 0.1;
const minimumRatio = 0.01;
const defaultPropertyRatio = 2;
const propertyWeights: Record<Condition.PropertyTypes, number> = {
	attack: 1,
	defence: 0.5,
	accuracy: 1,
	evasion: 0.5,
	restore: 1,
	speed: 0.5,
	chance: 1,
	experience: 1.5,
};

/** レベル差の表で並べる差。系統のカテゴリのレベル − 系統の必要レベル（系統が無ければ所属カテゴリと必要Lv） */
export const LEVEL_GAPS = [0, 10, 20, 30];

function getPropertyRatio(general: Type.General): number {
	return general.propertyRatio >= 1 ? general.propertyRatio : defaultPropertyRatio;
}

/** レベル差 x に対する倍率。レベル差10ごとに propertyRatio 倍（プロパティごとの重み付き） */
export function calculateRatio(general: Type.General, x: number, property: Condition.PropertyTypes): number {
	return Math.exp(((Math.log(getPropertyRatio(general)) * propertyWeights[property]) / 10) * x);
}

function applyOddsRatio(value: number, ratio: number): number {
	const clamped = Math.min(Math.max(value, 0), 1);
	const odds = clamped * ratio;
	const total = 1 - clamped + odds;
	return total > 0 ? odds / total : clamped;
}

/** 基本値（%単位。speed は秒）とレベル差から最終値を出す。player の calculateProperty と同じ */
export function calculateProperty(general: Type.General, base: number, levelGap: number, property: Condition.PropertyTypes): number {
	const ratio = calculateRatio(general, Math.floor(levelGap), property);
	let value = base / 100;
	switch (property) {
		case "attack":
		case "experience":
			value *= ratio;
			break;
		case "defence":
		case "speed":
			value /= Math.max(minimumRatio, ratio);
			break;
		case "accuracy":
		case "evasion":
		case "chance":
		case "restore":
			value = applyOddsRatio(value, ratio);
			break;
	}
	return value * 100;
}

/** レベル level から次のレベルへ上がるのに要る経験値。成功1回で level += 経験値 / 100 / levelCommonRatio^(level-1) */
export function experienceToNext(general: Type.General, level: number): number {
	return 100 * Math.pow(general.levelCommonRatio, Math.max(0, level - 1));
}

/** 戦闘1回ぶんの見込み（装備・スキルなし） */
export interface CombatEstimate {
	/** 自分の1ヒットで敵HPを何%削るか */
	attack: number;
	/** 敵の1ヒットで自分のHPを何%失うか */
	defence: number;
	/** 自分の攻撃が当たる確率（%） */
	accuracy: number;
	/** 敵の攻撃を避ける確率（%） */
	evasion: number;
	/** 戦闘の最初のターンに回復するHP（%） */
	restore: number;
	/** 敵を倒すまでの攻撃ターン数の期待値（回復ターンを除く） */
	turns: number;
	/** 1戦で受けるダメージの期待値（%） */
	damage: number;
	/** 1戦の所要秒数の期待値（回復ターン＋攻撃ターン） */
	seconds: number;
	verdict: "unwinnable" | "deadly" | "draining" | "sustainable";
}

/** あるレベル差でのアクションの値（装備・スキルなし） */
export interface ActionStats {
	gap: number;
	/** 1回（戦闘は1ターン）の所要秒数 */
	seconds: number;
	/** 成功率（0〜1） */
	chance: number;
	/** 成功1回の経験値（入り先すべての合計）。入り先がどれも numeric=false なら 0 */
	experience: number;
	/** 入り先カテゴリごとの経験値（所属 → 系統の順。numeric=false の入り先は含まない） */
	shares: ExperienceShareStats[];
	/** 1回の完了にかかる秒数（戦闘は1戦ぶん）。即時は 0 */
	cycleSeconds: number;
	/** 1時間あたりの完了回数。即時は undefined */
	runsPerHour?: number;
	experiencePerHour?: number;
	combat?: CombatEstimate;
}

/**
 * 経験値の入り先1つ。系統が無いアクションは所属カテゴリだけ（rate=1）、
 * 系統があるアクションは所属カテゴリ（experienceReturnRate）と系統のカテゴリ（1 − experienceReturnRate）
 */
export interface ExperienceTarget {
	categoryId: string;
	/** そのカテゴリの必要レベル（所属は level、系統は disciplineLevel） */
	level: number;
	/** そのカテゴリへ入る割合（0〜1） */
	rate: number;
}

/** アクションのレベル差の基準。レベル差は系統のカテゴリで測る */
export interface ActionBasis {
	/** 系統のカテゴリが numeric か（false ならレベル差は効かない） */
	numeric: boolean;
	/** 系統の必要レベル（系統が無ければ必要Lv） */
	level: number;
	/** 経験値の入り先（numeric=true のカテゴリだけ） */
	targets: ExperienceTarget[];
}

/** あるレベル差での、入り先カテゴリ1つぶんの経験値 */
export interface ExperienceShareStats {
	categoryId: string;
	/** 成功1回でこのカテゴリへ入る経験値 */
	experience: number;
	/** このカテゴリが最大レベルに届いている（経験値はもう入らない） */
	capped: boolean;
	experiencePerHour?: number;
	/** 1時間あたりの経験値を、このカテゴリのレベル（必要Lv＋レベル差）での「レベル1つ分＝100%」に換算した値。即時は undefined */
	levelPercentPerHour?: number;
}

/** 系統を持つアクションの経験値のうち、所属カテゴリへ分ける割合。player の getExperienceReturnRate と同じく 0〜1 に収める */
export function experienceReturnRate(general: Type.General): number {
	const rate = general.experienceReturnRate;
	return Math.min(Math.max(Number.isFinite(rate) ? rate : 0, 0), 1);
}

/**
 * アクションのレベル差 gap での値を出す。player の calculatePropertties・calculateExperienceShares を装備補正・スキル補正なしで写したもの。
 * 所属カテゴリのレベル差は系統と同じ gap とみなす（所属・系統それぞれの必要Lvから同じだけ上にいる）。
 * ただし入り先カテゴリのレベルは最大レベルで止める（そこで止まったカテゴリは capped。player は最大レベルを超えたぶんを切り捨てる）
 * @param basis 系統のカテゴリと経験値の入り先（model.actionBasis）
 */
export function calculateActionStats(world: Type.World, action: Type.Action, basis: ActionBasis, gap: number): ActionStats {
	const general = world.basic.general;
	const levelGap = basis.numeric ? gap : 0;
	const seconds = Math.max(calculateProperty(general, action.seconds, levelGap, "speed"), minimumActionSecond);
	const chance = calculateProperty(general, action.chance * 100, levelGap, "chance") / 100;
	// 入り先ごとに、そのカテゴリのレベル差（経験値なので逆向き）で計算して割合を掛ける。レベル差は最大レベルまでに収める
	const max = general.maxCategoryLevels;
	const shareExperiences = basis.targets.map((target) => {
		const targetGap = Math.min(gap, Math.max(0, max - target.level));
		return { target, level: Math.floor(target.level + targetGap), experience: calculateProperty(general, action.experience, -targetGap, "experience") * target.rate };
	});
	const experience = shareExperiences.reduce((total, share) => total + share.experience, 0);

	let cycleSeconds = action.progressType === "snap" ? 0 : seconds;
	let combat: CombatEstimate | undefined;
	if (action.progressType === "stamina") {
		combat = estimateCombat(world, action, levelGap, seconds);
		cycleSeconds = combat.seconds;
	}
	const runsPerHour = cycleSeconds > 0 && Number.isFinite(cycleSeconds) ? 3600 / cycleSeconds : undefined;
	const perHour = (value: number): number | undefined => (runsPerHour !== undefined ? runsPerHour * chance * value : undefined);
	const shares = shareExperiences.map(({ target, level, experience: value }): ExperienceShareStats => {
		const experiencePerHour = perHour(value);
		const capped = level >= max;
		// player は 経験値 / 100 / levelCommonRatio^(入る先のいまのレベル − 1) だけレベルを進める（update.ts）
		return {
			categoryId: target.categoryId,
			experience: value,
			capped,
			experiencePerHour,
			levelPercentPerHour: experiencePerHour !== undefined && !capped ? (experiencePerHour * 100) / experienceToNext(general, level) : undefined,
		};
	});
	return { gap, seconds, chance, experience, shares, cycleSeconds, runsPerHour, experiencePerHour: perHour(experience), combat };
}

function estimateCombat(world: Type.World, action: Type.Action, levelGap: number, turnSeconds: number): CombatEstimate {
	const general = world.basic.general;
	const base = general.defaultCombat;
	const enemy = action.property;
	// 自分の各値は「自分の基本値」に「レベル差 − 敵の対になる値」を効かせたもの
	const attack = calculateProperty(general, base.attack, levelGap - enemy.defence, "attack");
	const defence = calculateProperty(general, base.defence, levelGap - enemy.attack, "defence");
	const accuracy = calculateProperty(general, base.accuracy, levelGap - enemy.evasion, "accuracy");
	const evasion = calculateProperty(general, base.evasion, levelGap - enemy.accuracy, "evasion");
	const restore = calculateProperty(general, base.restore, levelGap - enemy.restore, "restore");

	// 敵HP100%を削り切るヒット数を、命中率で割って攻撃ターン数の期待値にする
	const hits = attack > 0 ? Math.ceil(100 / attack) : Infinity;
	const turns = accuracy > 0 ? hits / (accuracy / 100) : Infinity;
	const damage = turns * (1 - evasion / 100) * defence;
	const verdict: CombatEstimate["verdict"] = !Number.isFinite(turns) ? "unwinnable" : damage >= 100 ? "deadly" : damage > restore ? "draining" : "sustainable";
	return { attack, defence, accuracy, evasion, restore, turns, damage, seconds: (1 + turns) * turnSeconds, verdict };
}

/** 取得物1件の、アクション1回あたりの期待個数（成功時のみ／失敗時のみの抽選を成功率で按分する） */
export function expectedAcquisition(acquisition: Type.Acquisition, chance: number): number {
	const probability = acquisition.chance >= 0 ? chance * acquisition.chance : (1 - chance) * Math.abs(acquisition.chance);
	return acquisition.count * probability;
}

/** 要求アイテム1件の、アクション1回あたりの期待消費数（成功・失敗にかかわらず chance で抽選して消費する） */
export function expectedConsumption(requirement: Type.Requirement): number {
	return requirement.type === "item" ? requirement.count * requirement.chance : 0;
}

/**
 * 所持枠（容量）の種類数に数えるアイテムか。player の countsTowardCapacity と同じ。
 * 売れず・買えず・1個しか持てないもの（手放せない持ち物）は数えない
 */
export function countsTowardCapacity(item: Type.Item): boolean {
	return !(item.sellingValue <= 0 && item.buyingValue <= 0 && item.maximum == 1);
}

/** 枠（容量・キュー）の n 回目（1始まり）の購入価格。player の getSlotBuyingPrice と同じ */
export function slotPrice(slot: Type.General["capacity"], count: number): number {
	return Math.floor(slot.initialCost * Math.pow(slot.increasingRate, count - 1));
}
