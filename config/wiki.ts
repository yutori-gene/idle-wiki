// wiki の手書き設定（源泉）。生成スクリプトはここを読んで、ワールドのデータに無い「分類」や「参照先」を補う。
// ワールドにカテゴリが増えた・設計ドキュメントの見出しが変わったときはここを直す（npm run wiki-check が指摘する）

/** 生成する言語。先頭が既定言語（ルート / から転送する先）。ワールドの名前・説明は今は ja しか無い */
export const languages = ["ja"] as const;
export type Language = (typeof languages)[number];

/**
 * カテゴリの「型」（plan.md「カテゴリパターン」節の8型）。カテゴリ id → 型名。
 * 開発者向け情報で、その型の雛形の節を抜粋するのに使う。ここに無いカテゴリは抜粋なし
 */
export const categoryPatterns: { [categoryId: string]: string } = {
	park: "ダンジョン型",
	forest: "ダンジョン型",
	town: "ダンジョン型",
	sea: "ダンジョン型",
	northland: "ダンジョン型",
	factory: "ダンジョン型",
	volcano: "ダンジョン型",
	castle: "ダンジョン型",
	hell: "ダンジョン型",
	"sky-garden": "ダンジョン型",
	greenhouse: "生産型",
	kitchen: "生産型",
	basement: "生産型",
	"melee-weapon": "装備管理型",
	"throwing-weapon": "装備管理型",
	"explosive-weapon": "装備管理型",
	armor: "装備管理型",
	accessory: "装備管理型",
	bedroom: "拠点育成型",
	workshop: "拠点育成型",
	study: "知識型",
	garden: "委任型",
	loft: "開錠型",
	warehouse: "保管型",
};

/**
 * 設計ドキュメントの参照先。値は「ファイル名#見出しの先頭一致」。
 * 見出しは日付などの注記が後ろに付くことが多いので先頭一致で探す（例: "plan.md#ダンジョン型の雛形"）
 */
export interface DesignReference {
	/** 型名 → その型のカテゴリページで抜粋する節 */
	patterns: { [pattern: string]: string[] };
	/** 種別ごとに全ページへ付ける参照（リンクのみ） */
	category: string[];
	action: { [progressType: string]: string[] };
	item: string[];
	/** アイテムグループ id → 追加で付ける参照 */
	itemGroups: { [groupId: string]: string[] };
	skill: string[];
	event: { [timing: string]: string[] };
	group: string[];
}

export const designReferences: DesignReference = {
	patterns: {
		ダンジョン型: ["plan.md#ダンジョン型の雛形"],
		生産型: ["plan.md#生産型の雛形"],
		装備管理型: ["plan.md#装備管理型の雛形"],
		拠点育成型: ["plan.md#拠点育成型の雛形"],
		知識型: ["plan.md#知識型の雛形"],
		委任型: ["plan.md#委任型の雛形"],
		開錠型: ["plan.md#開錠型の雛形"],
		保管型: ["plan.md#保管型の雛形"],
	},
	category: ["plan.md#カテゴリ設定", "plan.md#進行ゲート", "plan.md#カテゴリ役割分担"],
	action: {
		"*": ["plan.md#アクションパターン", "plan.md#Action 列補完ルール", "plan.md#アクション基準秒数"],
		stamina: ["plan.md#モンスター設定", "plan.md#スキルの雛形"],
	},
	item: ["plan.md#Item値段", "plan.md#アイテム要件（`Item.requirements`）方針", "plan.md#入手経路パターン"],
	itemGroups: {
		"melee-weapon": ["plan.md#装備設計"],
		"throwing-weapon": ["plan.md#装備設計"],
		"explosive-weapon": ["plan.md#装備設計"],
		"head-armor": ["plan.md#装備設計"],
		"body-armor": ["plan.md#装備設計"],
		"arm-armor": ["plan.md#装備設計"],
		"leg-armor": ["plan.md#装備設計"],
		accessory: ["plan.md#装備設計"],
		brooch: ["plan.md#装備設計"],
		ring: ["plan.md#装備設計"],
		pet: ["plan.md#ペット設計"],
		cooking: ["plan.md#消耗チャネル＝料理とポーション"],
		potion: ["plan.md#消耗チャネル＝料理とポーション"],
		treasure: ["plan.md#秘宝経済＝第2通貨の使い道"],
		container: ["plan.md#容器9種は changed イベントで容量を配る"],
		book: ["plan.md#知識型の雛形"],
		knowledge: ["plan.md#知識型の雛形"],
		ability: ["plan.md#能力10種＝スキルの器"],
	},
	skill: ["plan.md#スキルの雛形"],
	event: {
		"*": ["plan.md#イベント・ストーリー", "terms.md#イベントタイミング"],
		changed: ["plan.md#changed（小イベント＋隠しイベント）"],
	},
	group: ["plan.md#group.csv 構造ルール", "terms.md#ゲームコンテンツ用語"],
};

/** 開発者向けに全文を公開する設計ドキュメント（source/world/doc のファイル名 → 表示名）。並びがサイドバー順 */
export const publishedDocuments: { [file: string]: string } = {
	"plan.md": "設計方針（plan.md）",
	"terms.md": "用語集（terms.md）",
	"roadmap.md": "ロードマップ（roadmap.md）",
	"fix.md": "エンジンの懸念（fix.md）",
	"csv-removed.md": "CSV から消したもの（csv-removed.md）",
	"session.md": "作業の現在地（session.md）",
	"history.md": "経過の記録（history.md）",
};

/**
 * 手書きページ（notes/<lang>/pages 配下）をサイドバーのどこに出すか。パスは拡張子なし。
 * ここに無い手書きページも公開はされる（サイドバーに出ないだけ）
 */
export const sidebarPages: { [section: string]: string[] } = {
	guide: ["guide/beginner"],
	system: ["system/basics", "system/progress", "system/combat", "system/equipment", "system/event"],
};
