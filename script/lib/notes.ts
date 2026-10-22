// 手書きの追記（notes/<lang>/<ページのパス>.md）と手書きページ（notes/<lang>/pages/<パス>.md）を読む。
// どちらも本文中の [[type:id]] / [[type:id|表示名]] を要素へのリンクに展開する（名前が変わってもリンクが追従する）
import * as FS from "fs";
import * as path from "path";
import type { Language } from "../../config/wiki.ts";
import { notesDirectory } from "./path.ts";
import { link } from "./format.ts";
import type { Model } from "./model.ts";
import type { PageType } from "./label.ts";

const PAGE_TYPES: PageType[] = ["category", "action", "item", "skill", "event", "group"];

/** notes ディレクトリ配下の .md を、拡張子なしの相対パス → 本文で集める */
function collect(directory: string, prefix = ""): Map<string, string> {
	const files = new Map<string, string>();
	if (!FS.existsSync(directory)) return files;
	for (const entry of FS.readdirSync(directory, { withFileTypes: true })) {
		const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) for (const [key, value] of collect(absolute, relative)) files.set(key, value);
		else if (entry.name.endsWith(".md")) files.set(relative.replace(/\.md$/, ""), FS.readFileSync(absolute, "utf8"));
	}
	return files;
}

export class Notes {
	private readonly model: Model;
	private readonly inserts = new Map<string, string>();
	/** 手書きページ。パス（pages/ を除く）→ 本文 */
	readonly pages = new Map<string, string>();
	private readonly used = new Set<string>();

	constructor(model: Model, language: Language) {
		this.model = model;
		for (const [key, value] of collect(path.join(notesDirectory, language))) {
			if (key.startsWith("pages/")) this.pages.set(key.slice("pages/".length), value);
			else this.inserts.set(key, value);
		}
	}

	/** 生成ページ path（言語を除く。例: item/lemon）への追記。無ければ空文字 */
	insert(pagePath: string): string {
		const text = this.inserts.get(pagePath);
		if (text === undefined) return "";
		this.used.add(pagePath);
		return this.expand(text).trim();
	}

	/** [[type:id]] を展開する */
	expand(text: string): string {
		return text.replace(/\[\[([a-z]+):([^\]|]+)(?:\|([^\]]+))?\]\]/g, (whole, type: string, id: string, label?: string) => {
			if (!PAGE_TYPES.includes(type as PageType)) {
				this.model.warn(`notes のリンク記法が不正: ${whole}`);
				return whole;
			}
			return link(this.model, type as PageType, id.trim(), label?.trim());
		});
	}

	/** 差し込み先のページが無い追記（id の変更・削除で宙に浮いたもの） */
	orphans(): string[] {
		return [...this.inserts.keys()].filter((key) => !this.used.has(key)).sort();
	}
}
