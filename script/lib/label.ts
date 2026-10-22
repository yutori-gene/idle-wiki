// 生成ページに出す固定の文言。言語を足すときは Labels を満たすオブジェクトを labels に足す（型が抜けを検出する）。
// ゲーム内と同じ呼び方にそろえる（idle の player/data/presets.ts の日本語名が正本）
import type { Language } from "../../config/wiki.ts";
import type * as Condition from "../../source/type/conditionType.ts";

export type PageType = "category" | "action" | "item" | "skill" | "event" | "group";

export interface Labels {
	wikiName: (worldName: string) => string;
	types: Record<PageType, string>;
	progress: Record<Condition.ActionProgressTypes, string>;
	progressExplanation: Record<Condition.ActionProgressTypes, string>;
	equipment: Record<Condition.EquipmentTypes, string>;
	equipmentExplanation: Record<Condition.EquipmentTypes, string>;
	locked: Record<Condition.LockedTypes, string>;
	timing: Record<Condition.EventTimingTypes, string>;
	property: Record<Condition.PropertyTypes, string>;
	yes: string;
	no: string;
	none: string;
	unlimited: string;
	mainCoin: string;
	time: { day: string; hour: string; minute: string; second: string };
	timeUnit: Record<Condition.TimeTypes, string>;
}

const ja: Labels = {
	wikiName: (worldName) => `${worldName} wiki`,
	types: { category: "カテゴリ", action: "アクション", item: "アイテム", skill: "スキル", event: "イベント", group: "グループ" },
	progress: { persistent: "連続", single: "単発", snap: "即時", stamina: "スタミナ（戦闘）" },
	progressExplanation: {
		persistent: "時間で進み、止めるまで繰り返す。オフライン中も進む",
		single: "1回ずつ進む。100%になったら開封して報酬を受け取る",
		snap: "実行した瞬間に完了する",
		stamina: "ターン制の戦闘。最初のターンでHPを回復し、以降は攻撃と被弾を繰り返す。敵のHPを0にすれば勝ち、自分のHPが尽きると力尽きる",
	},
	equipment: { necessary: "装備必須", unnecessary: "装備不要", impossible: "装備不可", consumable: "消費装備" },
	equipmentExplanation: {
		necessary: "装備しているあいだ効果を発揮する。装備グループごとに1つだけ",
		unnecessary: "持っているだけで効果を発揮する。所持数に比例して効果が増える",
		impossible: "装備できない（素材・消耗品など）",
		consumable: "装備して使う。使うたびに消費する",
	},
	locked: { secreted: "秘匿", hidden: "非表示", hinted: "ヒント表示", released: "解放済み" },
	timing: {
		tasked: "条件達成（タスク）",
		changed: "変化時（隠し）",
		comebacked: "おかえりなさい",
		gameovered: "ゲームオーバー",
		welcomed: "ようこそ",
		completed: "コンプリート",
		obtained: "獲得",
	},
	property: { attack: "攻撃", defence: "防御", accuracy: "精度", evasion: "回避", restore: "回復", speed: "速度", chance: "成功率", experience: "経験値" },
	yes: "あり",
	no: "なし",
	none: "—",
	unlimited: "無制限",
	mainCoin: "メイン通貨",
	time: { day: "日", hour: "時間", minute: "分", second: "秒" },
	timeUnit: { seconds: "秒", minutes: "分", hours: "時間", days: "日", years: "年", centuries: "世紀", endless: "（終わりなし）" },
};

export const labels: Record<Language, Labels> = { ja };
