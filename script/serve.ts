// site/ をローカルで確かめるための静的サーバー。実行: npm run wiki-serve [-- <ポート>]
import * as http from "http";
import * as FS from "fs";
import * as path from "path";
import { siteDirectory } from "./lib/path.ts";

const TYPES: { [extension: string]: string } = {
	".html": "text/html; charset=utf-8",
	".md": "text/markdown; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".png": "image/png",
};

const port = Number(process.argv[2] ?? 3000);
http
	.createServer((request, response) => {
		const url = decodeURIComponent((request.url ?? "/").split("?")[0]);
		const file = path.join(siteDirectory, url.endsWith("/") ? `${url}index.html` : url);
		if (!file.startsWith(siteDirectory) || !FS.existsSync(file) || FS.statSync(file).isDirectory()) {
			response.writeHead(404);
			response.end("not found");
			return;
		}
		response.writeHead(200, { "Content-Type": TYPES[path.extname(file)] ?? "application/octet-stream" });
		FS.createReadStream(file).pipe(response);
	})
	.listen(port, () => console.log(`http://localhost:${port}/`));
