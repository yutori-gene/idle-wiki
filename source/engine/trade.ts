import * as Type from "~p/type";
import * as Data from "~p/data";
import * as Control from "~p/control";

export function countMatchedRequirements(requirements: Type.world.Requirement[], requiringGroup: boolean = false): number {
	let count = Number.MAX_SAFE_INTEGER;
	for (const requirement of requirements) count = Math.min(count, countMatchedRequirement(requirement, requiringGroup));
	return count;
}

export function countMatchedRequirement(requirement: Type.world.Requirement, requiringGroup: boolean = false): number {
	if (requiringGroup) {
		if (requirement.count > sumGroupRequirement(requirement)) return 0;
		return Number.MAX_SAFE_INTEGER;
	}
	switch (requirement.type) {
		case "category": {
			const category = Data.dictionary.getCategory(requirement.id);
			if (requirement.count > category.user.level) return 0;
			return Number.MAX_SAFE_INTEGER;
		}
		case "action": {
			const action = Data.dictionary.getAction(requirement.id);
			if (requirement.count > action.user.count) return 0;
			return Number.MAX_SAFE_INTEGER;
		}
		case "item": {
			const item = Data.dictionary.getItem(requirement.id);
			if (item.itemType === "normal") {
				const equippingsId = Data.dictionary.getCategory(item.categoryId).user.equipments;
				if (requirement.equipment && !equippingsId.includes(requirement.id)) return 0;
			}
			if (requirement.count > item.user.countNow) return 0;
			// 1回あたりの消費は count そのものではなく chance で抽選されるので、消費の期待値（count × chance）で割って実行できる回数を出す。
			// 期待値が0（chance:0＝装備が条件・消費はしない要求／count:0）のものは在庫が減らないため、回数を制限しない
			const expectedCount = requirement.count * requirement.chance;
			if (expectedCount <= 0) return Number.MAX_SAFE_INTEGER;
			return Math.min(Number.MAX_SAFE_INTEGER, Math.floor(item.user.countNow / expectedCount));
		}
	}
}

// requirement.idをグループIDとして扱い、そのグループに属するカテゴリのレベル・アクションの実行回数・アイテムの所持数の合計を返す。
// ロック中（released以外）のものは合計から除く。equipment・chanceは個別アイテム向けの判定なのでグループ集計では見ない
export function sumGroupRequirement(requirement: Type.world.Requirement): number {
	switch (requirement.type) {
		case "category":
			return Data.dictionary
				.getList(true)
				.categories.filter((category) => category.world.group === requirement.id && !Control.economy.check.unreleased(category))
				.reduce((sum, category) => sum + category.user.level, 0);
		case "action":
			return Data.dictionary
				.getList(true)
				.actions.filter((action) => action.world.group === requirement.id && !Control.economy.check.unreleased(action))
				.reduce((sum, action) => sum + action.user.count, 0);
		case "item":
			return Data.dictionary
				.getList(true)
				.items.filter((item) => item.world.group === requirement.id && !Control.economy.check.unreleased(item))
				.reduce((sum, item) => sum + item.user.countNow, 0);
	}
}

export function reduceRequirements(requirements: Type.world.Requirement[], count: number): Type.user.Trade[] {
	const trades: Type.user.Trade[] = [];
	for (const requirement of requirements) {
		if (requirement.type !== "item") continue;
		// chance判定: 確率を満たさなければ消費しない。所持数の確認より先に判定する。
		// chance:0（装備が条件・消費はしない要求）は在庫を1つも減らさないため、
		// 在庫が尽きていても成立させないと装備消耗品を扱うアクションが実行できない
		if (Math.random() >= requirement.chance) continue;
		const item = Data.dictionary.getItem(requirement.id);
		const tradeCount = requirement.count * count;
		if (tradeCount > item.user.countNow) throw new Error(`Insufficient item count: required [${tradeCount}] but only have [${item.user.countNow}] for item [${requirement.id}]`);
		item.user.countNow -= tradeCount;
		trades.push({ id: requirement.id, actionedCount: 1, tradedCount: tradeCount * -1, type: requirement.type });
	}
	if (trades.length > 0) {
		Control.economy.check.invalidateLockedCache();
		refreshPassiveProperties(trades);
	}
	return trades;
}

// 装備不要のアイテムは所持数に比例して効くため、個数が変わったら効き先カテゴリの集計を作り直す
function refreshPassiveProperties(trades: Type.user.Trade[]): void {
	const categoryIds = new Set<string>();
	for (const trade of trades) {
		if (trade.type !== "item") continue;
		const item = Data.dictionary.getItem(trade.id);
		if (item.world.equipmentType !== "unnecessary") continue;
		for (const property of item.properties) categoryIds.add(property.categoryId);
	}
	for (const categoryId of categoryIds) Control.game.property.refreshProperty(categoryId);
}

// 単一の acquisition を処理し、Trade を返す（count=0 なら処理するが Trade は返さない）
function processSingleAcquisition(acquisition: Type.world.Acquisition, count: number): Type.user.Trade | undefined {
	const tradeCount = acquisition.count * count;

	switch (acquisition.type) {
		case "category": {
			const category = Data.dictionary.getCategory(acquisition.id);
			category.user.level += Control.game.property.calculateProperty(acquisition.count, 0, "experience");
			if (category.user.level < 0) category.user.level = 0;
			if (category.user.level > Data.world.basic.general.maxCategoryLevels) {
				category.user.level = Data.world.basic.general.maxCategoryLevels;
			}
			break;
		}
		case "action": {
			const action = Data.dictionary.getAction(acquisition.id);
			action.user.count += tradeCount;
			if (action.user.count < 0) action.user.count = 0;
			break;
		}
		case "item": {
			const item = Data.dictionary.getItem(acquisition.id);
			item.user.countNow += tradeCount;
			if (item.world.maximum > 0 && item.user.countNow > item.world.maximum) {
				item.user.countNow = item.world.maximum;
			}
			item.user.countRecord += tradeCount;
			if (item.user.countRecord < 0) item.user.countRecord = 0;
			if (item.user.countNow < 0) item.user.countNow = 0;
			break;
		}
	}

	// count が 0 の場合は Trade を記録しない
	if (tradeCount === 0) return undefined;

	return { id: acquisition.id, actionedCount: 1, tradedCount: tradeCount, type: acquisition.type };
}

export function addAcquisitions(
	acquisitions: Type.world.Acquisition[],
	count: number,
	success: boolean = true
): Type.user.Trade[] {
	const trades: Type.user.Trade[] = [];

	if (acquisitions.length === 0) return trades;

	// 各ノードごとに chance で個別判定（複数取得・全不取得あり）
	// chance >= 0: 成功時のみ評価、chance < 0: 失敗時のみ評価。確率は絶対値で判定
	for (const acquisition of acquisitions) {
		const isFailureNode = acquisition.chance < 0;
		if (isFailureNode === success) continue;
		if (Math.random() >= Math.abs(acquisition.chance)) continue;

		const trade = processSingleAcquisition(acquisition, count);
		if (trade) trades.push(trade);
	}

	if (trades.length > 0) {
		Control.economy.check.invalidateLockedCache();
		refreshPassiveProperties(trades);
		// 数量が変化するあらゆる経路（アクション報酬・購入・売却・デバッグ調整・宝箱開封）がこの関数を通るため、
		// changed（timing=changed）の発動判定はここ一箇所に集約する
		Control.game.event.checkChanged(trades);
	}
	return trades;
}

// 同じidの増減をひとまとめにする。積むのは必ず複製で、渡されたオブジェクトは書き換えない。
// 実体をそのまま積むと、同じ増減を複数の集計が共有してしまう（アクション完了時の totalLogs と
// offline.logs がその例で、次の完了ぶんが共有先にも足され、オフライン集計が二重に増えていた）
export function summarizeTrades(trades: Type.user.Trade[]): Type.user.Trade[] {
	const joinedList: Type.user.Trade[] = [];
	for (const trade of trades) {
		const joined = joinedList.filter((node) => node.id === trade.id)[0];
		if (joined) {
			joined.actionedCount += trade.actionedCount;
			joined.tradedCount += trade.tradedCount;
		} else {
			joinedList.push({ ...trade });
		}
	}
	return joinedList;
}

export function getBuyingValue(item: Type.dictionary.Item): number {
	if (item.itemType === "capacity") {
		return getCapacityBuyingPrice();
	}
	if (item.itemType === "queue") {
		return getQueueBuyingPrice();
	}
	return item.world.buyingValue <= 0 ? 0 : Math.floor(item.world.buyingValue);
}

// 枠を1つずつ購入する唯一のシステムアイテム（容量・キュー）か判定
export function isSlotItem(item: Type.dictionary.Item): boolean {
	return item.itemType === "capacity" || item.itemType === "queue";
}

export function getCurrentItemTypesCount(): number {
	return Data.dictionary.getList(true).items.filter((item) => item.itemType === "normal" && item.user.countNow > 0).length;
}

// 枠アイテム（容量・キュー）の実体を取得。ワールド定義に無い場合はundefined
function getSlotItem(id: string): Type.dictionary.Item | undefined {
	try {
		return Data.dictionary.getItem(id);
	} catch {
		return undefined;
	}
}

export function getCapacityItem(): Type.dictionary.Item | undefined {
	return getSlotItem(Data.world.basic.general.capacity.information.id);
}

export function getQueueItem(): Type.dictionary.Item | undefined {
	return getSlotItem(Data.world.basic.general.queue.information.id);
}

export function getMaxCapacity(): number {
	const capacityItem = getCapacityItem();
	if (!capacityItem) return 0;
	const { initialCount } = Data.world.basic.general.capacity;
	// initialCountが0の場合は無制限（0を返す）
	if (initialCount === 0) {
		return 0;
	}
	return capacityItem.user.countNow;
}

// queue（連続実行キューの枠）— capacity の getMaxCapacity/getCurrentItemTypesCount と対称。
// キューは実行中(先頭)も1枠を消費するため、枠は最低1を必ず確保する（0枠だと何も実行できなくなる）。
export function getMaxQueue(): number {
	return Math.max(1, Data.user.playing.queue.countNow);
}

/** キューに入っているアクション数（実行中＋待機） */
export function getQueueCount(): number {
	return Data.user.playing.reservations.length;
}

/** キューに空きがあるか。説明欄の肯定/否定の色分け（満杯＝否定）に使う */
export function hasQueueRoom(): boolean {
	return Control.ui.style.getRoomFlag(getQueueCount(), getMaxQueue());
}

/** 所持枠に空きがあるか。キューと同じ扱い */
export function hasCapacityRoom(): boolean {
	return Control.ui.style.getRoomFlag(getCurrentItemTypesCount(), getMaxCapacity());
}

/** キューの説明欄（実行中を含むキュー数 / 最大数）。バーの explanation と flagColor へそのまま渡す */
export function getQueueSummary(): { text: string; flag: boolean } {
	return { text: Control.utils.primitive.toCountSummary(getQueueCount(), getMaxQueue()), flag: hasQueueRoom() };
}

/**
 * 所持枠の説明欄（種類数 / 容量）。キューと同じ形。
 * 容量が最大（initialCount=0の無制限）のワールドは分母が無いので種類数だけを出し、空き具合の色も付けない
 */
export function getCapacitySummary(): { text: string; flag: boolean | undefined } {
	const current = getCurrentItemTypesCount();
	const max = getMaxCapacity();
	if (max <= 0) return { text: Control.utils.primitive.toStandardCount(current), flag: undefined };
	return { text: Control.utils.primitive.toCountSummary(current, max), flag: hasCapacityRoom() };
}

export function getCapacityBuyingPrice(): number {
	const { increasingRate, initialCost, initialCount, buyingLimit } = Data.world.basic.general.capacity;

	// initialCountが0の場合は購入不可
	if (initialCount === 0) {
		return 0;
	}
	// 購入回数が上限に達している場合は購入不可
	if (isLimitReached(buyingLimit, Data.user.playing.capacityBuyed)) {
		return 0;
	}

	return getSlotBuyingPrice(initialCost, increasingRate, Data.user.playing.capacityBuyed);
}

export function getQueueBuyingPrice(): number {
	const { increasingRate, initialCost, buyingLimit } = Data.world.basic.general.queue;
	// initialCostが0以下の場合は購入不可（queue未定義の旧ワールドへのフォールバック定義など）
	if (initialCost <= 0) {
		return 0;
	}
	// 購入回数が上限に達している場合は購入不可
	if (isLimitReached(buyingLimit, Data.user.playing.queueBuyed)) {
		return 0;
	}

	return getSlotBuyingPrice(initialCost, increasingRate, Data.user.playing.queueBuyed);
}

// 購入回数の上限（buyingLimit）を取得（容量・キュー共通）。0は無制限
export function getSlotBuyingLimit(item: Type.dictionary.Item): number {
	if (item.itemType === "capacity") return Data.world.basic.general.capacity.buyingLimit;
	if (item.itemType === "queue") return Data.world.basic.general.queue.buyingLimit;
	return 0;
}

// 購入回数が上限（buyingLimit）に達しているか判定（容量・キュー共通）。報酬による枠増加は対象外
export function isSlotLimitReached(item: Type.dictionary.Item): boolean {
	if (item.itemType === "capacity") return isLimitReached(Data.world.basic.general.capacity.buyingLimit, Data.user.playing.capacityBuyed);
	if (item.itemType === "queue") return isLimitReached(Data.world.basic.general.queue.buyingLimit, Data.user.playing.queueBuyed);
	return false;
}

// buyingLimitが負（-1）はそもそも購入不可、0は無制限、正は購入回数の上限
function isLimitReached(buyingLimit: number, purchasedCount: number): boolean {
	if (buyingLimit < 0) return true;
	return buyingLimit > 0 && purchasedCount >= buyingLimit;
}

// 購入した回数を基準に次の1枠の価格を計算（容量・キュー共通）
function getSlotBuyingPrice(initialCost: number, increasingRate: number, purchasedCount: number): number {
	return Math.floor(initialCost * Math.pow(increasingRate, purchasedCount));
}

export function getSellingValue(item: Type.dictionary.Item): number {
	const sellingValue = item.world.sellingValue;
	return sellingValue > 0 ? Math.floor(sellingValue) : 0;
}

// アイテムの売買に使う通貨を解決（購入・売却共通）。容量・キューは専用のcoinId、通常アイテムは item.world.coinId 由来。空/未対応ならメイン通貨
export function resolveCoin(item: Type.dictionary.Item): Type.dictionary.Item {
	if (item.itemType === "capacity") return getCapacityCoin();
	if (item.itemType === "queue") return getQueueCoin();
	return Control.game.progress.getCoin(item.world.coinId);
}

// 容量購入に使う通貨を解決。capacity.coinId が空/未対応ならメイン通貨
export function getCapacityCoin(): Type.dictionary.Item {
	return Control.game.progress.getCoin(Data.world.basic.general.capacity.coinId);
}

// キュー枠購入に使う通貨を解決。queue.coinId が空/未対応ならメイン通貨
export function getQueueCoin(): Type.dictionary.Item {
	return Control.game.progress.getCoin(Data.world.basic.general.queue.coinId);
}

/**
 * アイテムを購入する。容量・キューは枠を1つずつ増やす専用処理を通る。
 * 購入できたら取引ログを返し、できなければ undefined を返す（呼び出し側で失敗を通知する）
 */
export function buy(item: Type.dictionary.Item, count: number): Type.user.Trade[] | undefined {
	const slot = isSlotItem(item);
	// 購入回数の上限チェック（容量・キューのみ。上限到達時は価格0で購入UI自体が消えるため防御的ガード）
	if (slot && isSlotLimitReached(item)) {
		const limitReachedPreset = Data.dictionary.getPreset("purchase-limit-reached");
		Control.ui.toaster.showTip(limitReachedPreset.information.explanation, limitReachedPreset, true);
		return;
	}
	const coin = resolveCoin(item);
	const buyingValue = getBuyingValue(item);
	if (count <= 0 || count >= coin.user.countNow || buyingValue == 0) return;

	// 容量チェック（容量・キューアイテム自体は除外）
	if (!slot) {
		const canAcquire = Control.economy.check.canAcquireItems([{ id: item.id, count: 1, chance: 1, type: "item" }]);
		if (!canAcquire) {
			const capacityFullPreset = Data.dictionary.getPreset("capacity-full");
			Control.ui.toaster.showTip(capacityFullPreset.information.explanation, capacityFullPreset, true);
			return;
		}
	}

	// 容量・キューの場合は特別処理
	if (slot) {
		// コストを支払う
		const requirementTrades = reduceRequirements([{ type: "item", id: coin.id, count: buyingValue, chance: 1, equipment: false }], count);

		// 枠を増加させる
		item.user.countNow += count;

		// 購入数を記録
		if (item.itemType === "capacity") Data.user.playing.capacityBuyed += count;
		else Data.user.playing.queueBuyed += count;

		const acquisitionTrades: Type.user.Trade[] = [{ id: item.id, actionedCount: 1, tradedCount: count, type: "item" }];
		// 容量・キューの加算は addAcquisitions を通らないため、changed の判定をここで個別に呼ぶ
		Control.game.event.checkChanged(acquisitionTrades);

		Control.ui.component.forceUpdate();
		return summarizeTrades([...requirementTrades, ...acquisitionTrades]);
	}

	// 通常のアイテムの場合
	const acquisitionTrades = addAcquisitions([{ id: item.id, count: 1, chance: 1, type: "item" }], count);
	const requirementTrades = reduceRequirements([{ type: "item", id: coin.id, count: buyingValue, chance: 1, equipment: false }], count);
	Control.ui.component.forceUpdate();
	return summarizeTrades([...requirementTrades, ...acquisitionTrades]);
}

/**
 * アイテムを売却する。
 * 売却できたら取引ログを返し、できなければ undefined を返す（呼び出し側で失敗を通知する）
 */
export function sell(item: Type.dictionary.Item, count: number): Type.user.Trade[] | undefined {
	const coin = resolveCoin(item);
	const sellingValue = item.world.sellingValue;
	if (count <= 0 || count > item.user.countNow || sellingValue == 0) return;
	const acquisitionTrades = addAcquisitions([{ id: coin.id, count: sellingValue, chance: 1, type: "item" }], count);
	const requirementTrades = reduceRequirements([{ type: "item", id: item.id, count: 1, chance: 1, equipment: false }], count);
	Control.game.progress.unequipZeroItems(); // 0個になった装備を解除
	Control.ui.component.forceUpdate();
	return summarizeTrades([...requirementTrades, ...acquisitionTrades]);
}

export function adjust(type: Type.condition.BasicTypes, id: string, sign: string, count: number): void {
	const adjustedCount = sign === "plus" ? count : -count;

	// IDが空の場合、すべてのアイテムに対して操作を実行
	if (id === "") {
		const list = Data.dictionary.getList(true);
		const acquisitions: Type.world.Acquisition[] = [];

		// typeに応じて対応するリストのすべてのIDを取得
		switch (type) {
			case "category":
				for (const category of list.categories) {
					acquisitions.push({ type: "category", id: category.id, count: adjustedCount, chance: 1 });
				}
				break;
			case "action":
				for (const action of list.actions) {
					acquisitions.push({ type: "action", id: action.id, count: adjustedCount, chance: 1 });
				}
				break;
			case "item":
				for (const item of list.items) {
					acquisitions.push({ type: "item", id: item.id, count: adjustedCount, chance: 1 });
				}
				break;
		}

		// 簡潔なメッセージを表示
		const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
		Control.ui.toaster.showTip(`Adjusted all ${typeCapitalized} by ${adjustedCount}`, Data.dictionary.getPreset("adjustment"), true);
		// adjust では全て確実に取得させる（chance=1 で全取得）
		addAcquisitions(acquisitions, 1);
		Control.ui.component.forceUpdate();
		return;
	}

	// IDの存在確認
	try {
		Data.dictionary.getBasic(id, type as Type.condition.TitleIdTypes);
	} catch {
		Control.ui.toaster.showTip(`"${type}" ID "${id}" not found`, Data.dictionary.getPreset("adjustment"), false);
		return;
	}

	const acquisition: Type.world.Acquisition = {
		type: type,
		id: id,
		count: adjustedCount,
		chance: 1,
	};

	// adjust では全て確実に取得させる（chance=1 で全取得）
	const trades = addAcquisitions([acquisition], 1);
	Control.ui.toaster.showTrade(summarizeTrades(trades));
	Control.ui.component.forceUpdate();
}
