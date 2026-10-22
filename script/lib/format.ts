// Markdown／HTML を組み立てる小道具。ページの見た目の約束（RULES.md「表記」）はここに集める
import type * as Type from "../../source/type/worldType.ts";
import type { Model } from "./model.ts";
import type { PageType } from "./label.ts";

export function escapeHtml(text: string): string {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** 表のセル・リンク文字列に入れる文字列。表を壊す | と改行、Markdown の記号を無効にする */
export function escapeMarkdown(text: string): string {
	return escapeHtml(text)
		.replace(/\\/g, "\\\\")
		.replace(/\|/g, "\\|")
		.replace(/([*_[\]`])/g, "\\$1")
		.replace(/\r?\n/g, "<br>");
}

/**
 * アイコンの HTML。優先順は image → iconify → emoji（いずれ SVG などの画像へ置き換わる前提で、表示はここ1か所に寄せる）。
 * image は URL・data URI ならそのまま、それ以外はサイトの assets/world/ からの相対パスとみなす
 */
export function icon(information: Type.Information, className = "wiki-icon"): string {
	const { image, iconify, emoji } = information.icon;
	if (image) {
		const source = /^(https?:|data:)/.test(image) ? image : `assets/world/${image}`;
		return `<img class="${className}" src="${escapeHtml(source)}" alt="">`;
	}
	if (iconify) {
		const [prefix, name] = iconify.split(":");
		if (prefix && name) return `<img class="${className}" src="https://api.iconify.design/${encodeURIComponent(prefix)}/${encodeURIComponent(name)}.svg" alt="">`;
	}
	return `<span class="${className}">${escapeHtml(emoji || "・")}</span>`;
}

/** アイコン＋名前（リンクなし） */
export function title(information: Type.Information): string {
	return `${icon(information)}${escapeMarkdown(information.name)}`;
}

/** 要素へのリンク（Markdown）。存在しない id は打ち消し線で出して警告に積む */
export function link(model: Model, type: PageType, id: string, text?: string): string {
	const information = model.information(type, id);
	if (!information) {
		model.warn(`存在しない参照: ${type}:${id}`);
		return `~~${escapeMarkdown(id)}~~`;
	}
	return `[${text !== undefined ? escapeMarkdown(text) : title(information)}](${model.path(type, id)})`;
}

/** 要素へのリンク（HTML。インフォボックスなど HTML の中で使う） */
export function linkHtml(model: Model, type: PageType, id: string): string {
	const information = model.information(type, id);
	if (!information) {
		model.warn(`存在しない参照: ${type}:${id}`);
		return `<del>${escapeHtml(id)}</del>`;
	}
	return `<a href="#${model.path(type, id)}">${icon(information)}${escapeHtml(information.name)}</a>`;
}

/** 表。行が無ければ空文字（＝節ごと省く判断は呼び出し側） */
export function table(headers: string[], rows: string[][], options: { filter?: boolean } = {}): string {
	if (rows.length === 0) return "";
	const lines = [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`, ...rows.map((row) => `| ${row.join(" | ")} |`)];
	// filter: 一覧ページの絞り込み欄。直後の表に site/assets/wiki.js が入力欄を付ける
	return (options.filter ? '<div class="wiki-filter"></div>\n\n' : "") + lines.join("\n");
}

/** 見出し＋本文。本文が空なら節ごと省く */
export function section(heading: string, body: string, level = 2): string {
	return body.trim() ? `${"#".repeat(level)} ${heading}\n\n${body.trim()}` : "";
}

/** 折りたたみ。本文は Markdown として描画されるよう空行で挟む */
export function details(summary: string, body: string): string {
	return body.trim() ? `<details><summary>${escapeHtml(summary)}</summary>\n\n${body.trim()}\n\n</details>` : "";
}

/** 段落を空行でつなぐ（空の段落は捨てる） */
export function join(...blocks: string[]): string {
	return blocks.filter((block) => block.trim() !== "").join("\n\n") + "\n";
}

/** 数値。整数は桁区切り、小数は最大 digits 桁（末尾の0は落とす） */
export function number(value: number, digits = 2): string {
	if (!Number.isFinite(value)) return "∞";
	return value.toLocaleString("ja-JP", { maximumFractionDigits: digits });
}

/** 個数の期待値。小さい値ほど桁を残す（0.025 が 0 に丸まらないように） */
export function amount(value: number): string {
	const absolute = Math.abs(value);
	return number(value, absolute >= 100 ? 0 : absolute >= 1 ? 1 : 3);
}

/** 割合（0〜1）を % で。小さい値ほど有効数字を残す */
export function percent(ratio: number): string {
	return percentValue(ratio * 100);
}

/** すでに % 単位の値を % で */
export function percentValue(value: number): string {
	if (!Number.isFinite(value)) return "∞";
	const absolute = Math.abs(value);
	const digits = absolute === 0 || absolute >= 10 ? 1 : absolute >= 1 ? 2 : 3;
	return `${number(value, digits)}%`;
}

/** 秒を「1時間30分」のように。1分未満は小数第1位まで */
export function duration(seconds: number, units: { day: string; hour: string; minute: string; second: string }): string {
	if (!Number.isFinite(seconds)) return "∞";
	if (seconds < 60) return `${number(seconds, 1)}${units.second}`;
	const total = Math.round(seconds);
	const parts: [number, string][] = [
		[Math.floor(total / 86400), units.day],
		[Math.floor((total % 86400) / 3600), units.hour],
		[Math.floor((total % 3600) / 60), units.minute],
		[total % 60, units.second],
	];
	const first = parts.findIndex(([value]) => value > 0);
	// 上から2単位だけ出す（1日2時間・3時間5分・4分10秒）
	return parts
		.slice(first, first + 2)
		.filter(([value]) => value > 0)
		.map(([value, unit]) => `${value}${unit}`)
		.join("");
}

/** 符号付き */
export function signed(value: number): string {
	return value > 0 ? `+${number(value)}` : number(value);
}

export interface InfoboxRow {
	label: string;
	/** HTML */
	value: string;
}

/** Melvor 風のインフォボックス（右上の囲み）。HTML で出すので値は HTML を渡す。説明文はページ冒頭の引用に出すのでここには入れない */
export function infobox(information: Type.Information, color: string, rows: InfoboxRow[]): string {
	const body = rows
		.filter((row) => row.value !== "")
		.map((row) => `<tr><th>${escapeHtml(row.label)}</th><td>${row.value}</td></tr>`)
		.join("");
	return [
		`<div class="wiki-infobox" style="--accent:${escapeHtml(color)}">`,
		`<div class="wiki-infobox-title">${escapeHtml(information.name)}</div>`,
		`<div class="wiki-infobox-icon">${icon(information, "wiki-icon-large")}</div>`,
		`<table>${body}</table>`,
		"</div>",
	].join("");
}

/** ナビボックスに並べる上限。これより多い仲間は、全ページに複製すると重いので一覧ページへのリンクだけにする */
export const NAVBOX_LIMIT = 40;

/**
 * 同じグループなどの横並びのリンク集（Melvor のナビボックス）。
 * links が NAVBOX_LIMIT を超えるときは overflow（一覧ページへのリンク HTML）だけを出す
 */
export function navbox(heading: string, links: string[], color: string, overflow = ""): string {
	if (links.length === 0) return "";
	const body = links.length > NAVBOX_LIMIT && overflow ? `${links.length}件。${overflow}` : links.join(" ・ ");
	return `<div class="wiki-navbox" style="--accent:${escapeHtml(color)}"><div class="wiki-navbox-title">${escapeHtml(heading)}</div><div class="wiki-navbox-body">${body}</div></div>`;
}
