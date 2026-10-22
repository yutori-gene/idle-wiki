import * as Type from "~p/type";
import * as Data from "~p/data";
import * as Control from "~p/control";

// すべてのカテゴリのプロパティを再計算する
export function refreshPropertyAll() {
	for (const category of Data.dictionary.getList(true).categories) refreshProperty(category.id);
}

// いま効果を出しているアイテムと、その効果倍率
export interface EffectiveItem {
	item: Type.dictionary.Item;
	multiplier: number;
}

/**
 * いま効果を出しているアイテムを倍率つきで集める。
 * 全カテゴリのアイテムを見るのは、他カテゴリのアイテムも対象カテゴリに影響を与えることがあるため
 */
export function getEffectiveItems(): EffectiveItem[] {
	const effectives: EffectiveItem[] = [];
	for (const category of Data.dictionary.getList(true).categories) {
		// 装備不要のアイテム: 所持しているだけで効果発動。所持数に比例して効果が増える
		for (const item of category.items) {
			if (item.world.equipmentType != "unnecessary") continue;

			// 所持数が0のアイテムはスキップ
			if (item.user.countNow == 0) continue;

			effectives.push({ item, multiplier: item.user.countNow });
		}

		// 装備が必要なアイテム: 各装備グループで装備中の1つだけが効果を発揮する
		for (const equipmentId of category.user.equipments) {
			const item = category.items.find((item) => item.id == equipmentId);
			if (!item) continue;

			// 装備可能なタイプ以外は効果なし（装備不要は上のループで集計済み、装備不可は対象外）
			if (item.world.equipmentType != "necessary" && item.world.equipmentType != "consumable") continue;

			// 所持数が0のアイテムはスキップ
			if (item.user.countNow == 0) continue;

			effectives.push({ item, multiplier: 1 });
		}
	}
	return effectives;
}

// 指定されたカテゴリに対する装備アイテムのプロパティ効果を集計する
export function refreshProperty(categoryId: string): Map<Type.condition.PropertyTypes, Type.dictionary.Property> {
	const properties: Map<Type.condition.PropertyTypes, Type.dictionary.Property> = new Map();

	for (const effective of getEffectiveItems()) addProperties(properties, categoryId, effective.item, effective.multiplier);

	// 集計結果をカテゴリに保存
	const category = Data.dictionary.getCategory(categoryId);
	category.summerizedProperties = properties;
	return properties;
}

// アイテムのプロパティを倍率つきで集計結果に加算する
function addProperties(properties: Map<Type.condition.PropertyTypes, Type.dictionary.Property>, categoryId: string, item: Type.dictionary.Item, multiplier: number): void {
	for (const property of item.properties) {
		// 対象カテゴリ以外へのプロパティはスキップ
		if (property.categoryId != categoryId) continue;

		const value = property.value * multiplier;
		const resource: Type.dictionary.PropertyResource = { itemId: item.id, value };

		// 既存のプロパティに加算、または新規作成
		if (properties.has(property.id)) {
			const previous = properties.get(property.id);
			if (!previous) throw new Error(`Property [${property.id}] exists in map but value is undefined`);
			previous.value += value;
			previous.resources ||= [];
			previous.resources.push(resource);
		} else {
			properties.set(property.id, { id: property.id, categoryId: property.categoryId, value, resources: [resource] });
		}
	}
}

// アクションの各プロパティ値を計算する（レベル差、装備補正、そのターンのスキル補正を考慮）
// correction は stamina型の1ターンぶんだけ効くスキルの戦闘値。画面表示から呼ぶときは渡さない
export function calculatePropertties(actionId: string, correction?: Type.control.CombatCorrection): Type.control.Property[] {
	const action = Data.dictionary.getAction(actionId);

	// 相手の戦闘値はアクションの設定に相手スキルぶんを足したもの。味方スキルぶんは自分への補正として加算する
	const opposite = (key: keyof Type.world.Combat): number => action.world.property[key] + (correction?.opposite[key] ?? 0);
	const thisside = (key: keyof Type.world.Combat): number => correction?.thisside[key] ?? 0;

	// 経験値が入るカテゴリを決定（attributeが指定されていればそちらを使用）
	const experienceCategoryId = action.world.attribute || action.categoryId;
	const category = Data.dictionary.getCategory(experienceCategoryId);

	const userLevel = Math.floor(category.user.level);
	const actionLevel = Math.floor(action.world.level);
	const defaultCombat = Data.world.basic.general.defaultCombat;

	// 各プロパティタイプについて計算
	const properties: Type.control.Property[] = Type.condition.PropertyList.map((property) => {
		// 装備による補正値を取得
		const equipmentCorrection = category.summerizedProperties.get(property)?.value || 0;
		const isStamina = action.world.progressType == "stamina";

		let active = true;
		let base = 0;
		let unit = "";
		let combatProperty = 0;
		let skillCorrection = 0;
		let flipUserActionLevels = false;

		// プロパティタイプごとに基本値と単位を設定
		switch (property) {
			case "attack":
				// 攻撃力（与ダメージ）: 相手の防御力が高いほど通りにくい
				if (isStamina) {
					base = defaultCombat[property];
					combatProperty = -opposite("defence");
					skillCorrection = thisside("attack");
					unit = "%";
				} else active = false;
				break;

			case "defence":
				// 防御力（被ダメージ量）: 相手の攻撃力が高いほど被ダメージが増える
				if (isStamina) {
					base = defaultCombat[property];
					combatProperty = -opposite("attack");
					skillCorrection = thisside("defence");
					unit = "%";
				} else active = false;
				break;

			case "accuracy":
				// 命中率: 相手の回避力が高いほど当てにくい
				if (isStamina) {
					base = defaultCombat[property];
					combatProperty = -opposite("evasion");
					skillCorrection = thisside("accuracy");
					unit = "%";
				} else active = false;
				break;

			case "evasion":
				// 回避率: 相手の命中率が高いほど避けにくい
				if (isStamina) {
					base = defaultCombat[property];
					combatProperty = -opposite("accuracy");
					skillCorrection = thisside("evasion");
					unit = "%";
				} else active = false;
				break;

			case "restore":
				// 回復量: 相手のrestoreが高いほど回復しにくい（アクション定義のrestoreと相手スキルのrestoreの両方が効く）
				if (isStamina) {
					base = defaultCombat[property];
					combatProperty = -opposite("restore");
					// 戦闘中に発動した味方スキルのrestoreは、そのターンではなく決着後の回復ターンでまとめて効かせる
					skillCorrection = thisside("restore");
					unit = "%";
				} else active = false;
				break;

			case "speed":
				// 速度: アクションの所要時間。計算は秒で統一し、分・時間への繰り上げは表示側で行う
				base = action.world.seconds;
				unit = Data.dictionary.getPreset("seconds").information.name;
				break;

			case "experience":
				// 経験値: レベル差の計算を反転（高レベルアクションほど経験値が多い）
				base = action.world.experience;
				unit = "%";
				flipUserActionLevels = true;
				break;

			case "chance":
				// アクション成功確率
				base = action.world.chance * 100;
				unit = "%";
				break;
		}

		// レベル差を計算。カテゴリのレベル差はnumericカテゴリのみ有効だが、アクションのpropertyと装備補正は常に加算する
		// flipUserActionLevelsがtrueの場合はカテゴリのレベル差だけを反転（経験値用）
		// スキル補正はそのターンだけの一時的な値なので、装備補正（equipmentCorrection）とは別に足してレベル差へ含める
		const levelGap = (category.world.numeric ? (userLevel - actionLevel) * (flipUserActionLevels ? -1 : 1) : 0) + combatProperty + equipmentCorrection + skillCorrection;

		// 最終的なプロパティ値を計算
		const value = active ? calculateProperty(base, levelGap, property) : 0;

		return {
			active: active && value != 0,
			id: property,
			base,
			value,
			unit,
			property: combatProperty,
			levelGap,
			userLevel,
			actionLevel,
			equipmentCorrection,
			flipUserActionLevels,
		};
	});

	return properties;
}

// 除算側の倍率の下限。ここまで下がると効果は頭打ちになる（base÷minimumRatioで最大100倍）
const minimumRatio = 0.01;

// propertyRatioが未設定（旧バージョンのワールド）や不正値のときに使う既定の倍率
const defaultPropertyRatio = 2;

/**
 * プロパティごとのレベル差の効き方（指数の重み）。1が標準で、0.5ならレベル差20でようやく標準のレベル差10ぶんになる。
 *
 * defence・evasionを半分にしているのは、守りだけ倍率が二重に掛かるため。
 * 攻めは「命中率×攻撃力」だが命中率は100%で頭打ちになるので実質1乗しか伸びないのに対し、
 * 守りは「被弾率(1/倍率)×被ダメージ(1/倍率)」で2乗になり、攻めより速く伸びてしまう。
 *
 * speedを半分にしているのは、所要時間が「単位時間あたりの実行回数」として他のすべてのプロパティと
 * 掛け算になるため。経験値と揃って掛かるとレベルアップ速度が倍率の2乗で伸び、レベルが上がるほど
 * 加速する発散（propertyRatioがlevelCommonRatioの累乗を超える状態）を起こしやすい
 */
const propertyWeights: Record<Type.condition.PropertyTypes, number> = {
	attack: 1,
	defence: 0.5,
	accuracy: 1,
	evasion: 0.5,
	restore: 1,
	speed: 0.5,
	chance: 1,
	experience: 1,
};

/**
 * 0〜100%に収まるプロパティ（命中・回避・成功確率・回復量）へ倍率を適用する。
 * オッズ（成る:成らない の比）に倍率を掛けるため、0%と100%は動かず、途中の値は必ず0〜100%に収まる。
 *
 * 単純な乗算だと100%を超えたぶんが死に値になり、逆に「残り(100-値)を割る」形だと
 * 元の値が低いときに跳ね上がる（成功確率5%がレベル差10で52%になる）。オッズならどちらも起きず、
 * 低い値は乗算に近く・高い値は失敗率の除算に近く動くため、クランプも要らない
 */
function applyOddsRatio(value: number, ratio: number): number {
	const clamped = Math.min(Math.max(value, 0), 1);
	const odds = clamped * ratio;
	const total = 1 - clamped + odds;

	// 100%かつ倍率がアンダーフローで0に潰れたときだけ分母が0になる。極限は元の値なのでそのまま返す
	return total > 0 ? odds / total : clamped;
}

// 基本値とレベル差から最終的なプロパティ値を計算する
// base: 0-100の整数（パーセント）、戻り値も0-100の整数
export function calculateProperty(base: number, levelGap: number, property: Type.condition.PropertyTypes): number {
	const x = Math.floor(levelGap);

	// レベル差10ごとにpropertyRatio倍になる指数倍率。指数関数は常に正なので符号反転や0除算は起きないが、
	// レベル差が極端なマイナスだとアンダーフローで0に潰れて除算が発散するため、除算側だけ下限をクランプする
	const ratio = calculateRatio(x, property);
	const growthFactor = ratio;
	const shrinkFactor = Math.max(minimumRatio, ratio);

	let value = base / 100;

	// プロパティタイプごとに異なる計算式を適用
	switch (property) {
		case "attack":
		case "experience":
			// 攻撃・経験値: 上限が無い量なのでレベル差ぶんそのまま増える
			// レベル差10ごとにpropertyRatio倍 (例: propertyRatioが2ならレベル差10で2倍、20で4倍)
			value *= growthFactor;
			break;

		case "defence":
		case "speed":
			// 防御・速度: レベル差に反比例（高レベルほど被ダメージ・所要時間が減少）
			// レベル差10ごとに1/propertyRatio (例: propertyRatioが2ならレベル差10で被ダメージ・所要時間が半分)
			value /= shrinkFactor;
			break;

		case "accuracy":
		case "evasion":
		case "chance":
		case "restore":
			// 命中・回避・成功確率・回復量: いずれも0〜100%に収まる量なのでオッズ倍率で動かす
			// (例: propertyRatioが2なら成功確率80%はレベル差10で88.9%、ミス率は半分に近づく)
			value = applyOddsRatio(value, growthFactor);
			break;
	}

	return value * 100;
}

/**
 * レベル差から倍率を計算する（指数関数）。
 * y = e^((ln n / 10)wx) で、レベル差10ごとにn倍・-10ごとに1/n倍になる設計。
 * nはワールドの一般設定 propertyRatio（既定は2）で、1にするとレベル差の影響が無くなる。
 * wはプロパティごとの重み（propertyWeights）で、倍率が二重に掛かるプロパティだけ効きを弱める。
 * レベル差0のときは1になり、基本値がそのまま使われる
 */
export function calculateRatio(x: number, property: Type.condition.PropertyTypes): number {
	return Math.exp(((Math.log(getPropertyRatio()) * propertyWeights[property]) / 10) * x);
}

/**
 * ワールドに設定されたレベル差10ごとの倍率を取得する。
 * propertyRatioを後から追加したため、値を持たない旧ワールドや1未満の不正値は既定値へ丸める
 * （1未満だとレベル差が有利なほど弱くなる逆転が起きるため）
 */
function getPropertyRatio(): number {
	const propertyRatio = Data.world.basic.general.propertyRatio;
	return propertyRatio >= 1 ? propertyRatio : defaultPropertyRatio;
}

/**
 * ステータスの説明欄（装備・所持アイテムによる補正値の合計）。バーの explanation と flagColor へそのまま渡す。
 * statusColumn のミニバーと同じ「アイテムがもたらす影響」を数え、プラスなら肯定色・マイナスなら否定色・±0なら色を付けない。
 *
 * カテゴリ側の集計（summerizedProperties）を足し合わせないのは、対象カテゴリが "*" のプロパティが
 * カテゴリ数だけ複製されて入っているため。ミニバーはカテゴリごとに読むので複製されたままが正しいが、
 * 合計はアイテムの定義を1件ずつ数えないとカテゴリ数に比例して膨らむ
 */
export function getStatusSummary(): { text: string; flag: boolean | undefined } {
	let total = 0;
	for (const effective of getEffectiveItems()) {
		// "*" を展開させないため、対象カテゴリをアイテム自身のカテゴリに固定した複製を渡す（元のワールド定義は書き換えない）
		const properties = effective.item.world.properties.map((property) => ({ ...property, category: effective.item.categoryId }));
		for (const property of Control.dictionary.utilize.spiliProperties(properties, effective.item.categoryId, Data.world)) total += property.value * effective.multiplier;
	}
	return { text: Control.utils.primitive.getWithSign(total), flag: Control.ui.style.getSignFlag(total) };
}

/**
 * カテゴリの説明欄（そのカテゴリへのプロパティ合計値）。バーの explanation と flagColor へそのまま渡す。
 * getStatusSummary と同じ判定（プラスなら肯定色・マイナスなら否定色・±0なら色を付けない）を、
 * 対象カテゴリで集計済みの summerizedProperties に対して行う
 */
export function getCategoryStatusSummary(category: Type.dictionary.Category): { text: string; flag: boolean | undefined } {
	let total = 0;
	for (const property of category.summerizedProperties.values()) total += property.value;
	return { text: Control.utils.primitive.getWithSign(total), flag: Control.ui.style.getSignFlag(total) };
}

// プロパティリストをMapに変換するユーティリティ関数
export function listToMap<T extends { id: Type.condition.PropertyTypes }>(list: T[]): Map<Type.condition.PropertyTypes, T> {
	const map: Map<Type.condition.PropertyTypes, T> = new Map();
	for (const node of list) map.set(node.id, node);
	return map;
}
