// source/ のスナップショットを読む。ワールドの正本は world.json で、CSV は world.json に乗らない列（tier・rare・memo）の補助にだけ使う
import * as FS from "fs";
import * as path from "path";
import type * as Type from "../../source/type/worldType.ts";
import { sourceDirectory } from "./path.ts";

/** CSV の1行。ヘッダ名 → セルの文字列 */
export type CsvRow = { [column: string]: string };

export interface Snapshot {
	idleCommit: string;
	idleBranch: string;
	idleCommitDate: string;
	worldId: string;
	worldVersion: string;
	syncedAt: string;
	digests: { [file: string]: string };
}

export interface Source {
	world: Type.World;
	/** CSV 名（拡張子なし）→ id → 行 */
	csv: { [name: string]: Map<string, CsvRow> };
	/** 設計ドキュメント名（plan.md など）→ 本文 */
	documents: Map<string, string>;
	/** view/overview.md の手書き欄。カテゴリ名 → 本文 */
	overviewFills: Map<string, string>;
	snapshot: Snapshot;
}

/**
 * CSV を1行1オブジェクトに読む。引用符とその中のカンマ・二重引用符・改行を解釈する
 * @param text CSV の全文
 * @returns ヘッダ名をキーにした行の配列。全セルが空の行は捨てる
 */
export function parseCsv(text: string): CsvRow[] {
	const body = text.replace(/^﻿/, "");
	const lines: string[][] = [];
	let cells: string[] = [];
	let cell = "";
	let quoted = false;
	for (let index = 0; index < body.length; index++) {
		const character = body[index];
		if (quoted) {
			if (character !== '"') cell += character;
			else if (body[index + 1] === '"') {
				cell += '"';
				index++;
			} else quoted = false;
			continue;
		}
		if (character === '"') quoted = true;
		else if (character === ",") {
			cells.push(cell);
			cell = "";
		} else if (character === "\n") {
			cells.push(cell);
			lines.push(cells);
			cells = [];
			cell = "";
		} else if (character !== "\r") cell += character;
	}
	if (cell !== "" || cells.length > 0) {
		cells.push(cell);
		lines.push(cells);
	}
	const [header, ...rows] = lines;
	return rows
		.filter((row) => row.some((value) => value.trim() !== ""))
		.map((row) => Object.fromEntries(header.map((column, index) => [column.trim(), (row[index] ?? "").trim()])));
}

/** overview.md の `<!-- fill:カテゴリ名 -->` 〜 `<!-- /fill -->` を拾う（overview.py が再生成でも引き継ぐ手書き欄） */
function parseOverviewFills(text: string): Map<string, string> {
	const fills = new Map<string, string>();
	for (const match of text.matchAll(/<!-- fill:(.+?) -->([\s\S]*?)<!-- \/fill -->/g)) {
		const body = match[2].trim();
		if (body) fills.set(match[1].trim(), body);
	}
	return fills;
}

export function loadSource(): Source {
	const read = (file: string): string => FS.readFileSync(path.join(sourceDirectory, file), "utf8");
	if (!FS.existsSync(path.join(sourceDirectory, "world/world.json"))) throw new Error("source/ が空。先に npm run wiki-sync を実行する");

	const csv: Source["csv"] = {};
	for (const name of FS.readdirSync(path.join(sourceDirectory, "world/list"))) {
		if (!name.endsWith(".csv")) continue;
		const rows = parseCsv(read(path.join("world/list", name)));
		csv[name.replace(/\.csv$/, "")] = new Map(rows.map((row) => [row.id, row]));
	}

	const documents = new Map<string, string>();
	for (const name of FS.readdirSync(path.join(sourceDirectory, "world/doc")).sort()) {
		if (name.endsWith(".md")) documents.set(name, read(path.join("world/doc", name)));
	}

	const overviewPath = "world/view/overview.md";
	const overviewFills = FS.existsSync(path.join(sourceDirectory, overviewPath)) ? parseOverviewFills(read(overviewPath)) : new Map<string, string>();

	return {
		world: JSON.parse(read("world/world.json")) as Type.World,
		csv,
		documents,
		overviewFills,
		snapshot: JSON.parse(read("snapshot.json")) as Snapshot,
	};
}
