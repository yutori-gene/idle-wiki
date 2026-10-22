// 設計ドキュメント（source/world/doc/*.md）の見出しを読む。docsify と同じ規則で見出しの id（?id=）を作る

export interface Heading {
	level: number;
	text: string;
	slug: string;
	/** 見出し行の行番号（0始まり） */
	line: number;
}

// docsify v4 の slugify と同じ（lib/docsify.js）。同じ文字列の2回目以降は -1, -2 … が付く
const SLUG_REMOVE = /[ -⁯⸀-⹿\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

function slugify(text: string, cache: Map<string, number>): string {
	let slug = text
		.trim()
		.replace(/[A-Z]+/g, (upper) => upper.toLowerCase())
		.replace(/<[^>]+>/g, "")
		.replace(SLUG_REMOVE, "")
		.replace(/\s/g, "-")
		.replace(/-+/g, "-")
		.replace(/^(\d)/, "_$1");
	const count = cache.has(slug) ? cache.get(slug)! + 1 : 0;
	cache.set(slug, count);
	if (count) slug = `${slug}-${count}`;
	return slug;
}

/** 見出しの Markdown を、描画後の文字（docsify が slug にする文字）へ寄せる */
function plainHeading(text: string): string {
	return text
		.replace(/`([^`]*)`/g, "$1")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/\*\*([^*]*)\*\*/g, "$1")
		.replace(/\s+#+\s*$/, "")
		.trim();
}

const headingCache = new Map<string, Heading[]>();

/** 文書の見出し一覧。コードブロックの中は数えない（同じ文書は何千ページから引かれるので覚えておく） */
export function listHeadings(markdown: string): Heading[] {
	const cached = headingCache.get(markdown);
	if (cached) return cached;
	const headings: Heading[] = [];
	const cache = new Map<string, number>();
	let fenced = false;
	markdown.split("\n").forEach((line, index) => {
		if (/^\s*```/.test(line)) fenced = !fenced;
		if (fenced) return;
		const match = /^(#{1,6})\s+(.+)$/.exec(line);
		if (!match) return;
		const text = plainHeading(match[2]);
		headings.push({ level: match[1].length, text, slug: slugify(text, cache), line: index });
	});
	headingCache.set(markdown, headings);
	return headings;
}

/** 先頭一致で見出しを探す（見出しの後ろに日付などの注記が付くことが多いため）。記号の揺れを避けるため描画後の文字で比べる */
export function findHeading(markdown: string, prefix: string): Heading | undefined {
	const wanted = plainHeading(prefix);
	return listHeadings(markdown).find((heading) => heading.text.startsWith(wanted));
}

/** 見出しから次の同格以上の見出しの手前までを抜き出す。抜粋内の見出しは shift 段下げる */
export function extractSection(markdown: string, prefix: string, shift: number): string | undefined {
	const headings = listHeadings(markdown);
	const start = headings.findIndex((heading) => heading.text.startsWith(plainHeading(prefix)));
	if (start < 0) return undefined;
	const level = headings[start].level;
	const end = headings.slice(start + 1).find((heading) => heading.level <= level);
	const lines = markdown.split("\n").slice(headings[start].line + 1, end ? end.line : undefined);
	let fenced = false;
	return lines
		.map((line) => {
			if (/^\s*```/.test(line)) fenced = !fenced;
			if (fenced) return line;
			return line.replace(/^(#{1,6})(\s)/, (_whole, hashes: string, space: string) => "#".repeat(Math.min(6, hashes.length - level + shift + 1)) + space);
		})
		.join("\n")
		.trim();
}

/**
 * 文書内のリンクを wiki 内のリンクへ書き換える。公開している文書へのリンクはそのページへ、
 * それ以外のローカルパス（idle の中のファイル）は private リポジトリなので辿れない＝リンクを外して名前だけ残す
 */
export function rewriteLinks(markdown: string, published: string[], pathOf: (file: string) => string, current: string): string {
	return markdown.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)\)/g, (whole, bang: string, text: string, target: string) => {
		if (/^(https?:|mailto:)/.test(target)) return whole;
		if (bang) return `\`${text || target}\``;
		const [file, anchor] = target.split("#");
		const name = file.split("/").pop() ?? "";
		if (file === "" && anchor) return `[${text}](${pathOf(current)}?id=${encodeURIComponent(anchor)})`;
		if (published.includes(name)) return `[${text}](${pathOf(name)}${anchor ? `?id=${encodeURIComponent(anchor)}` : ""})`;
		return text;
	});
}
