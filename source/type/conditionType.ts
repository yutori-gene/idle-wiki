
export const BasicList = ["category", "action", "item"] as const;
export type BasicTypes = (typeof BasicList)[number];

export const TitleIdList = [...BasicList, "group", "event", "skill", "preset"] as const;
export type TitleIdTypes = (typeof TitleIdList)[number];

export const StaminaList = ["attack", "defence", "accuracy", "evasion", "restore"] as const;
export type StaminaTypes = (typeof StaminaList)[number];

export const PropertyList = [...StaminaList, "speed", "chance", "experience"] as const;
export type PropertyTypes = (typeof PropertyList)[number];

export const EquipmentList = ["necessary", "unnecessary", "impossible", "consumable"] as const; // 装備して効果を発揮、装備して消費しながら効果を発揮（モンスターとアクション１につき）、装備できなくて装備しなくても効果を発揮、装備できない
export type EquipmentTypes = (typeof EquipmentList)[number];

export const EvenTimingList = ["tasked", "changed", "comebacked", "gameovered", "welcomed", "completed", "obtained"] as const; //gameoverd, completed => taskedで実行できる。obtained => singleアクション（宝箱など）開封確認時にrequirementsを満たせばacquisitionsを付与。changed => アクション完了・アイテム数変更等のタイミングで、直近の変化量が条件を満たせば何度でも発動（player UIには一切表示されない）
export type EventTimingTypes = (typeof EvenTimingList)[number];

// tasked・changed以外のタイミング。world.events.uniqueの固定枠（追加・削除不可）のキーになる。並びはEvenTimingListからtasked・changedを除いた順を保つ
export const FixedEventTimingList = ["comebacked", "gameovered", "welcomed", "completed", "obtained"] as const;
export type FixedEventTimingTypes = (typeof FixedEventTimingList)[number];

export const AlignList = ["top-left", "top", "top-right", "left", "center", "right", "bottom-left", "bottom", "bottom-right"] as const;
export type AlignTypes = (typeof AlignList)[number];

export const TimeList = ["seconds", "minutes", "hours", "days", "years", "centuries", "endless"] as const;
export type TimeTypes = (typeof TimeList)[number];

export const LanguageCodeList = ["en", "zh", "es", "pt", "fr", "ru", "de", "ja", "id", "ko"] as const; //vite.config.tsに直書きしてるので変更時は注意
export type LanguageCodeTypes = (typeof LanguageCodeList)[number];

export const LanguageLabelList = ["English", "中文（简体）", "Español", "Português", "Français", "Русский", "Deutsch", "日本語", "Bahasa Indonesia", "한국어"] as const;
export type LanguageLavelTypes = (typeof LanguageLabelList)[number];

export const ActionProgressList = ["persistent", "single", "snap", "stamina"] as const;
export type ActionProgressTypes = (typeof ActionProgressList)[number];

export const PhaseList = ["initial", "welcomed", "comebacked", "finished"] as const;
export type PhaseTypes = (typeof PhaseList)[number];

export const ProgressList = ["progressing", "possible", "impossible"] as const;
export type ProgressTypes = (typeof ProgressList)[number];

export const LockedList = ["secreted", "hidden", "hinted", "released"] as const;
export type LockedTypes = (typeof LockedList)[number];

export const ExtensionList = ["world", "character", "properties", "calculation", "property", "player", "category", "actions", "items", "tasks", "skills", "action", "act", "item", "trade", "use", "item", "event", "skill", "group"];
export type ExtensionTypes = (typeof ExtensionList)[number];

export const ItemTypeList = ["normal", "coin", "capacity", "queue"] as const;
export type ItemTypes = (typeof ItemTypeList)[number];
