import * as Control from "~p/control";
import * as Data from "~p/data";
import * as Type from "~p/type";

let lastUpdated = 0;

// 時間スキップ（skipOffline）の刻み幅。まとめて一度に消化すると、その間のレベル上昇による
// 速度変化が反映されず実際にプレイした場合より進みが少なくなるため、細かく区切って回す
const skipStepMs = 1000;

export function updateOffline() {
	Control.ui.toaster.toggleLine(false);
	while (checkUpdate(false)) {
		// 更新対象がなくなるまで繰り返すだけなので処理は不要
	}
	Control.economy.check.invalidateLockedCache();
	Control.ui.toaster.toggleLine(true);
}

// デバッグ用：指定時間ぶんの経過をオフライン扱いで一気に消化する（デバッグカラムの時間スキップ）。
// 実行中アクションの基準時刻を過去へずらしてからupdateOffline()へ通し、その時間だけ離席していた場合と同じ経路で進行させる。
// スキップは離席ではないので、オフライン集計（progressing.offline）と復帰イベント（comebacked）の状態は
// 消化前へ戻し、復帰カラムが開かないようにする。戻り値はスキップ中に増減したアイテムの一覧（通知用）
export function skipOffline(durationMs: number): Type.user.Trade[] {
	if (durationMs <= 0) return [];

	// 消化後に書き戻すオフラインの記録。スキップは離席ではないので、消化中に積まれた記録は捨てる
	const offlineRecords = Control.game.offline.pull();
	// 復帰イベントはオフライン進行の副作用（update中のevent.check）で成立してしまうため、成立前の状態を控える
	const comebackedEvents = Data.dictionary.getList(true).events.filter((event) => event.world.timing == "comebacked");
	const comebackedStates = comebackedEvents.map((event) => ({ ...event.user }));
	// スキップ前の所持数。オフラインの記録はアクションごとに分かれるため、総増減は所持数の差から取る
	const counts = new Map(Data.dictionary.getList(true).items.map((item) => [item.id, item.user.countNow]));

	// 加速中はずらした時間にも倍率が掛かって指定より進んでしまうため、消化の間だけ加速を止める
	const acceleration = Data.user.config.acceleration;
	const accelerating = acceleration.active;
	acceleration.active = false;

	// 統計のプレイ時間もスキップぶん進める。初回イベント前（0）は開始扱いにしないため触らない
	if (Data.user.playing.time.initialized > 0) Data.user.playing.time.initialized -= durationMs;

	for (let rest = durationMs; rest > 0; rest -= skipStepMs) {
		const step = Math.min(skipStepMs, rest);
		// 実行中の基準時刻を刻みぶん過去へずらすと、その差が経過時間としてupdateOfflineに消化される
		Data.user.categories.forEach((category) => {
			const progressing = category.progressing;
			if (!progressing) return;
			progressing.time.updated -= step;
			progressing.time.ending -= step;
		});
		updateOffline();
		// 実行中が無くなったら、以降の刻みを回しても何も起きない（予約はアクションの終了時にしか進まない）
		if (Control.game.progress.getAllProgressing().length == 0) break;
	}

	acceleration.active = accelerating;
	Control.game.offline.push(offlineRecords);
	comebackedEvents.forEach((event, index) => Object.assign(event.user, comebackedStates[index]));
	// スキップの消化そのものに時間が掛かる。更新ループのフレーム停止検出がこれを離席と取り違えないよう基準を取り直す
	Control.lifecycle.player.markFramed();

	return Data.dictionary
		.getList(true)
		.items.map((item): Type.user.Trade => ({ id: item.id, type: "item", actionedCount: 1, tradedCount: item.user.countNow - (counts.get(item.id) ?? 0) }))
		.filter((trade) => trade.tradedCount != 0);
}

export function updateOnline() {
	// バックグラウンドとの往復（離脱・復帰）を、経過時間をオンライン扱いで消化する前に済ませる。
	// falseはこのフレームで消化してはいけない（画面が隠れている）ことを示し、離れていた時間は
	// 復帰時にまとめてオフライン進行として消化される
	if (Control.lifecycle.player.catchUpBackground()) {
		const durationTime = Date.now() - lastUpdated;
		if (durationTime >= (Data.user.config.performingHighly ? 100 : 500)) {
			Control.ui.toaster.toggleLine(true);
			while (checkUpdate(true)) {
				// 更新対象がなくなるまで繰り返すだけなので処理は不要
			}
			// 解放（カテゴリ・アクション）の通知。売買や報酬の受け取りでも解放されるため、
			// アクションの完了に紐付けず、更新のたびに状態を見る
			Control.economy.check.notifyReleased();
			Control.ui.scroll.updateRestricScroll();
			lastUpdated = Date.now();
		}
	}
	requestAnimationFrame(updateOnline);
}

function checkUpdate(online: boolean): boolean {
	Data.user.categories.forEach((category) => {
		if (category.progressing) updateProgress(category.progressing, online);
	});

	const targets = Data.user.categories.filter((category) => category.progressing?.general.flag).sort((a, b) => a.progressing!.time.ending - b.progressing!.time.ending);
	if (targets.length == 0) return false;
	const progressing = targets[0].progressing;
	if (!progressing || progressing.time.percentage < 1) return false;

	updateAction(progressing, online);

	return true;
}

function updateProgress(progressing: Type.user.Progressing, online: boolean) {
	const action = Data.dictionary.getAction(progressing.general.id);
	if (action.world.progressType == "snap") return;
	const currentTime = Date.now(); //ミリセカンド
	const category = Data.dictionary.getCategory(action.categoryId);
	const matchedRequirements = Control.economy.trade.countMatchedRequirements(action.world.requirements) > 0;
	const acceleration = Data.user.config.acceleration;
	const debugging = Control.economy.check.debugMode();
	const durationTime = (currentTime - progressing.time.updated) * (debugging && acceleration.active ? acceleration.multiplier : 1);

	if (matchedRequirements && durationTime > 0) {
		const actionTime = Control.game.progress.calcuateActionTime(action);
		progressing.time.updated = currentTime;
		progressing.time.percentage += durationTime / actionTime;
		progressing.time.ending = currentTime + actionTime * (1 - progressing.time.percentage);
		progressing.active.time += durationTime;
		if (action.world.progressType == "single") action.user.percentage = progressing.time.percentage;
	}
	if (!matchedRequirements) {
		// 実行中が進行中に要件喪失。standalone=false ならレーンが空くので次の予約へ進める
		Control.game.progress.endActionAndAdvance(category, 0, online);
	}
}

export function updateAction(progressing: Type.user.Progressing, online: boolean, opening = false) {
	const action = Data.dictionary.getAction(progressing.general.id);
	const category = Data.dictionary.getCategory(action.categoryId);
	// stamina型はターンごとにスキルを抽選し、その戦闘値をこのターンだけの補正としてプロパティへ載せる
	const skills = action.world.progressType == "stamina" && progressing.combat ? Control.game.skill.selectTurnSkills(action, progressing.combat) : undefined;
	// 発動したスキルはダメージ量と同じ形で左右下へ出す。オフライン進行では画面に出ないので、説明の初回判定も消費しない
	if (online && skills) Control.game.skill.showTurnSkills(skills);
	const properties = Control.game.property.listToMap(Control.game.property.calculatePropertties(progressing.general.id, skills?.correction));
	const matchedRequirements = Control.economy.trade.countMatchedRequirements(action.world.requirements) > 0;

	// 経験値を入れるカテゴリを決定（attributeまたはactionのcategoryId）
	const experienceCategoryId = action.world.attribute || action.categoryId;
	const experienceCategory = Data.dictionary.getCategory(experienceCategoryId);

	let leveledUp = false;
	let trades: Type.user.Trade[] = [];
	// completedは定数だ！と怒られる
	const completed = action.world.progressType == "stamina" ? updateCombat(action, progressing, properties) : updateNonCombat();

	if (matchedRequirements) {
		if (completed) {
			if (action.world.progressType == "single" && !opening) {
				action.user.percentage = progressing.time.percentage = 1;
				// single はここで早期 return するため、退避分を再開できるよう standalone=false なら次の予約へ前進する
				Control.game.progress.endActionAndAdvance(category, 0, online);
				return;
			}

			// chance判定（成功確率）
			const chanceSuccess = Math.random() < properties.get("chance")!.value / 100;

			// アイテム消費（成功・失敗に関わらず実行）。
			// 要求の消費を先に行う。装備消耗品の消費（consumeItem）を先にすると、同じアイテムが
			// 要求にも含まれる場合に在庫が尽き、冒頭の countMatchedRequirements で確認した前提が崩れる
			const requirementTrades = Control.economy.trade.reduceRequirements(action.world.requirements, 1);
			const consumed = Control.game.progress.consumeItem(action);
			const consumedTrades = [...requirementTrades, ...consumed];
			Control.game.progress.unequipZeroItems();

			if (!chanceSuccess) {
				// chance判定失敗時: アイテム消費 + 失敗時専用 acquisitions（chance<0）
				trades = [...consumedTrades, ...Control.economy.trade.addAcquisitions(action.world.acquisitions, 1, false)];
				Control.ui.toaster.showActionFailed(action);
			} else {
				// chance判定成功時: 通常の報酬処理
				// 経験値計算前のレベル
				const previousLevel = experienceCategory.user.level;

				// 取得物の処理
				trades = [...consumedTrades, ...Control.economy.trade.addAcquisitions(action.world.acquisitions, 1)];

				// levelCommonRatioによるレベルアップ難易度の指数的増加
				const currentLevel = Math.floor(experienceCategory.user.level);
				const levelDivisor = Math.pow(Data.world.basic.general.levelCommonRatio, Math.max(0, currentLevel - 1));

				// アクション自身の経験値の計算（attributeのカテゴリに追加）
				if (experienceCategory.world.numeric) {
					experienceCategory.user.level += (properties.get("experience")!.value / 100) / levelDivisor;

					// レベル上限チェック
					if (experienceCategory.user.level < 0) experienceCategory.user.level = 0;
					if (experienceCategory.user.level > Data.world.basic.general.maxCategoryLevels) {
						experienceCategory.user.level = Data.world.basic.general.maxCategoryLevels;
					}

					leveledUp = Math.floor(previousLevel) < Math.floor(experienceCategory.user.level);
				}

				// アクションの記録（成功時のみ）
				progressing.active.count++;
				if (experienceCategory.world.numeric) {
					progressing.active.experience += (properties.get("experience")!.value / 100) / levelDivisor;
				}

				// アクションのカウント増加（成功時のみ）
				action.user.count++;

				Control.game.event.check();
				Control.economy.check.invalidateLockedCache();
			}

			// totalLogsは成功・失敗どちらでも記録
			progressing.general.totalLogs = Control.economy.trade.summarizeTrades([...progressing.general.totalLogs, ...trades]);
		}

		// updateProgress(progressing);
		if (opening) action.user.percentage = progressing.time.percentage = 0;
		else progressing.time.percentage -= 1; //パーセントを100%引くという意味

		Control.ui.toaster.showTrade(trades);
		if (leveledUp) Control.ui.toaster.showLeveled(experienceCategoryId);

		if (online) {
			// check()で成立したイベント（completed等）はhashが変わらないと自動表示されないため、
			// forceUpdate（再レンダリングのみ）とは別にここで明示的にカラムを開く
			Control.lifecycle.player.showEventsNow();
			Control.ui.component.forceUpdate();
		} else if (completed) {
			// completed==falseは戦闘の回復ターンなど「まだ決着していないターン」。記録すると
			// stamina型の実行回数（勝利数）が戦闘ターン数にずれてしまうため、決着したときだけ積む
			Control.game.offline.record(progressing, experienceCategory, trades, leveledUp);
		}

		// opening（single開封）は actSnap のローカルprogressingで一発実行するため、
		// category.user.progressing が張られておらず、末尾のendActionを呼ぶとundefinedでthrowする。
		// snapと同様に自動endActionの対象外とする。
		const reachedMaxCount = progressing.active.count >= progressing.general.maxCount;
		const reachedMaximum = action.world.maximum > 0 && action.user.count >= action.world.maximum;
		if ((reachedMaxCount || reachedMaximum) && action.world.progressType != "snap" && !opening) {
			// standalone=false（排他レーン）は自然完了時に次の予約へ連鎖する。離席時の余り時間を carryMs として引き継ぐ
			const carryMs = !category.world.standaloneProgress ? Math.max(0, progressing.time.percentage) * Control.game.progress.calcuateActionTime(action) : 0;
			Control.game.progress.endActionAndAdvance(category, carryMs, online);
		}
	} else {
		// 実行中が要件喪失で停止。standalone=false ならレーンが空くので次の実行可能な予約へ進める
		Control.game.progress.endActionAndAdvance(category, 0, online);
	}
}

function updateNonCombat(): boolean {
	return true;
}

function updateCombat(action: Type.dictionary.Action, progressing: Type.user.Progressing, properties: Map<Type.condition.PropertyTypes, Type.control.Property>): boolean {
	const combat = progressing.combat!;

	if (combat.tern == 0) {
		combat.oppositePercentage = 100;
		// 直前の戦闘で溜めた味方・相手スキルのrestoreは、この回復量の計算（calculatePropertties）に補正として入っている
		const recovery = properties.get("restore")!.value;
		// console.log(recovery)
		combat.thissidePercentage = Math.min(combat.thissidePercentage + recovery, 100);
		combat.thissideRestore = combat.oppositeRestore = undefined;
		combat.tern++;
		Control.ui.toaster.showStatus(combat, action.id);
		if (recovery != 0) Control.ui.toaster.showStatusPop(Control.utils.primitive.toPercentageText(recovery, true, true), true, Data.dictionary.getPreset("restore").information);
		return false;
	} else {
		// 装備補正を含むpropertiesから判定する。プロパティ画面に出る値とダメージを一致させるため計算を一本化している
		const attack = Math.random() < properties.get("accuracy")!.value / 100 ? properties.get("attack")!.value : 0;
		const defence = Math.random() > properties.get("evasion")!.value / 100 ? properties.get("defence")!.value : 0;
		combat.thissidePercentage -= defence;
		combat.oppositePercentage -= attack;

		const lossed = combat.thissidePercentage <= 0;
		const winned = combat.oppositePercentage <= 0 && !lossed;

		// 勝利時のアクション自身の+1トースト（旧実装）は、updateAction側で表示される報酬アイテムの
		// トーストとアイコンが重なる場合があり（例: 夜光ガニの報酬「カニの殻」が同じ🦀アイコン）、
		// 「+1」が二重に見えるバグの原因になっていたため廃止した。勝利は敵ステータスバーの消滅と
		// 報酬トーストで十分伝わる
		// ダメージを受けた（>0）ときは attack のアイコンで「-n%」、防いだ（0）ときは defence のアイコンで「0%」を体力インジケータの上に一瞬だけ重ねて知らせる
		Control.ui.toaster.showStatusPop(Control.utils.primitive.toPercentageText(defence, true, true, true), true, Data.dictionary.getPreset(defence > 0 ? "attack" : "defence").information);
		Control.ui.toaster.showStatusPop(Control.utils.primitive.toPercentageText(attack, true, true, true), false, Data.dictionary.getPreset(attack > 0 ? "attack" : "defence").information);
		// console.log(attack, defence);

		if (winned || lossed) combat.tern = 0;
		else combat.tern++;
		Control.ui.toaster.showStatus(combat, action.id);

		if (lossed) {
			Control.ui.toaster.showActionFailed(action);
			// gameoveredイベントはcomebackedと違って一度claimedになると再チェックされない
			// （event.check()の先頭でclaimed済みは早期returnする）ため、次のcheck()でまた
			// releasedを立てられるよう、ここで毎回released/claimedをリセットする
			Control.game.event.resetType("gameovered");
			Data.user.playing.gameovered = true;
			Control.game.progress.stopAllProgressing();
			// ゲームオーバー時は実行中の中断だけでなく、待機中の予約もすべて破棄する
			Data.user.playing.reservations = [];
			Control.ui.toaster.hideCombat();
			Control.game.event.check();
			Control.lifecycle.player.showEventsNow();
			Control.ui.component.forceUpdate();
			return false;
		} else if (winned) {
			// 倒した相手（右下）だけ消す。プレイヤー自身のスタミナ（左下）は連戦に備えて残す
			Control.ui.toaster.hideCombat(true);
			return true;
		}
	}

	// エラー避け
	return false;
}
