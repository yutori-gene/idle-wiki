// idle リポジトリから wiki の材料を source/ へ取り込む（スナップショット）。
// 実行: npm run wiki-sync [-- <idle のパス>]   既定は隣の ../idle
//
// source/ は丸ごとこのスクリプトの生成物。手で編集しない（次の取り込みで上書きされる）。
// 取り込むものと置き場所は下の COPIES が正本。
import * as FS from "fs";
import * as path from "path";
import { execFileSync } from "child_process";
import { createHash } from "crypto";
import { root, sourceDirectory } from "./lib/path.ts";

/** idle 側のパス → source/ 側のパス。ディレクトリは拡張子で絞る */
interface Copy {
	from: string;
	to: string;
	extension?: string;
	transform?: (text: string) => string;
}

const COPIES: Copy[] = [
	// ワールド本体（変換済み・id 解決済み）
	{ from: "world/world.json", to: "world/world.json" },
	// CSV にしか無い列（tier・rare・memo）を拾うため
	{ from: "world/list", to: "world/list", extension: ".csv" },
	// 設計ドキュメント（開発者向けの抜粋と全文ページ）
	{ from: "world/doc", to: "world/doc", extension: ".md" },
	// カテゴリごとの手書き欄（入手経路パターン）を抜き出すため
	{ from: "world/view/overview.md", to: "world/view/overview.md" },
	// ワールドの型。生成スクリプトの型チェックに使う（worldType の変更に追従しているかを tsc で検出する）
	{ from: "editor/type/worldType.ts", to: "type/worldType.ts", transform: (text) => text.replace(/from\s+"~p\/type\/conditionType"/, 'from "./conditionType.ts"') },
	{ from: "player/type/conditionType.ts", to: "type/conditionType.ts", transform: stripPrimitive },
	// 計算値の式の出どころ。読むだけ（コンパイルしない）。ダイジェストが変わったら script/lib/calc.ts を見直す
	{ from: "player/control/game/property.ts", to: "engine/property.ts" },
	{ from: "player/control/game/update.ts", to: "engine/update.ts" },
	{ from: "player/control/economy/trade.ts", to: "engine/trade.ts" },
	{ from: "player/data/constant.ts", to: "engine/constant.ts" },
];

/** conditionType.ts は player の primitive に依存する1行だけを持つので、その依存を外す */
function stripPrimitive(text: string): string {
	return text
		.split("\n")
		.filter((line) => !line.includes("primitive"))
		.join("\n");
}

function sha256(buffer: Buffer): string {
	return createHash("sha256").update(buffer).digest("hex");
}

function git(idle: string, args: string[]): string {
	try {
		return execFileSync("git", ["-C", idle, ...args], { encoding: "utf8" }).trim();
	} catch {
		return "";
	}
}

function main(): void {
	const idle = path.resolve(root, process.argv[2] ?? process.env.IDLE_PATH ?? "../idle");
	if (!FS.existsSync(path.join(idle, "world/world.json"))) {
		console.error(`idle リポジトリが見つからない: ${idle}（npm run wiki-sync -- <idle のパス> で指定する）`);
		process.exit(1);
	}

	// 前回の取り込みを丸ごと捨ててから入れ直す（idle 側で消えたファイルを残さないため）
	FS.rmSync(sourceDirectory, { recursive: true, force: true });

	const digests: { [file: string]: string } = {};
	for (const copy of COPIES) {
		const from = path.join(idle, copy.from);
		const files = FS.statSync(from).isDirectory()
			? FS.readdirSync(from)
					.filter((name) => !copy.extension || name.endsWith(copy.extension))
					.sort()
					.map((name) => ({ from: path.join(from, name), to: path.join(copy.to, name) }))
			: [{ from, to: copy.to }];
		for (const file of files) {
			const target = path.join(sourceDirectory, file.to);
			FS.mkdirSync(path.dirname(target), { recursive: true });
			const buffer = copy.transform ? Buffer.from(copy.transform(FS.readFileSync(file.from, "utf8"))) : FS.readFileSync(file.from);
			FS.writeFileSync(target, buffer);
			digests[file.to] = sha256(buffer);
		}
	}

	const world = JSON.parse(FS.readFileSync(path.join(sourceDirectory, "world/world.json"), "utf8"));
	const snapshot = {
		// どの時点の idle を取り込んだか。wiki のフッターと開発者ページに出す
		idleCommit: git(idle, ["rev-parse", "HEAD"]),
		idleBranch: git(idle, ["rev-parse", "--abbrev-ref", "HEAD"]),
		idleCommitDate: git(idle, ["log", "-1", "--format=%cI"]),
		worldId: world.basic.overview.information.id,
		worldVersion: world.basic.development.version,
		syncedAt: new Date().toISOString(),
		digests,
	};
	FS.writeFileSync(path.join(sourceDirectory, "snapshot.json"), JSON.stringify(snapshot, null, "\t") + "\n");
	console.log(`取り込み完了: ${Object.keys(digests).length} ファイル（idle ${snapshot.idleCommit.slice(0, 7)} / world ${snapshot.worldVersion}）`);
}

main();
