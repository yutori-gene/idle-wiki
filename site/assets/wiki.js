// wiki の docsify プラグイン（手書き）。
//   - サイドバー上部の検索（site/search/<lang>.json を引く。docsify 標準の検索は全ページを取りに行くので使わない）
//   - 一覧の絞り込み欄と見出しクリックでの並べ替え（生成物の <div class="wiki-filter"> の直後の表が対象）
//   - mermaid の図（```mermaid のコードブロック）
(function () {
	var config = window.WIKI_CONFIG;

	// --- 共通 -------------------------------------------------------------

	/** 表記ゆれを吸収する（全角半角・大文字小文字・カタカナ→ひらがな） */
	function normalize(text) {
		return String(text)
			.normalize("NFKC")
			.toLowerCase()
			.replace(/[ァ-ヶ]/g, function (character) {
				return String.fromCharCode(character.charCodeAt(0) - 0x60);
			});
	}

	/** いま表示しているページの言語（パスの先頭）。無ければ既定言語 */
	function currentLanguage() {
		var match = /^#\/([^/?]+)/.exec(location.hash);
		return match && config.languages.indexOf(match[1]) >= 0 ? match[1] : config.languages[0];
	}

	function escapeHtml(text) {
		return String(text).replace(/[&<>"]/g, function (character) {
			return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
		});
	}

	// --- 検索 -------------------------------------------------------------

	var indexes = {};

	function loadIndex(language) {
		if (!indexes[language]) {
			indexes[language] = fetch("search/" + language + ".json")
				.then(function (response) {
					return response.json();
				})
				.then(function (entries) {
					return entries.map(function (entry) {
						entry.name = normalize(entry.n);
						entry.id = normalize(entry.i);
						entry.text = normalize(entry.x);
						return entry;
					});
				});
		}
		return indexes[language];
	}

	/** 名前の前方一致 > 名前の部分一致 > id > 説明文 の順に並べる */
	function search(entries, query) {
		var words = normalize(query).split(/\s+/).filter(Boolean);
		if (words.length === 0) return [];
		var scored = [];
		entries.forEach(function (entry) {
			var score = 0;
			for (var index = 0; index < words.length; index++) {
				var word = words[index];
				if (entry.name.indexOf(word) === 0) score += 8;
				else if (entry.name.indexOf(word) >= 0) score += 5;
				else if (entry.id.indexOf(word) >= 0) score += 3;
				else if (entry.text.indexOf(word) >= 0) score += 1;
				else return;
			}
			scored.push({ entry: entry, score: score - entry.n.length / 1000 });
		});
		scored.sort(function (a, b) {
			return b.score - a.score;
		});
		return scored.slice(0, 50).map(function (item) {
			return item.entry;
		});
	}

	function mountSearch() {
		var sidebar = document.querySelector(".sidebar");
		if (!sidebar || sidebar.querySelector(".wiki-search")) return;
		var box = document.createElement("div");
		box.className = "wiki-search";
		box.innerHTML = '<input type="search" placeholder="検索（名前・id・説明）" aria-label="検索"><ul></ul>';
		var nav = sidebar.querySelector(".sidebar-nav");
		sidebar.insertBefore(box, nav);
		var input = box.querySelector("input");
		var list = box.querySelector("ul");
		var selected = 0;

		function render(results) {
			selected = 0;
			list.innerHTML = results
				.map(function (entry, index) {
					return (
						'<li><a href="#' + escapeHtml(entry.p) + '"' + (index === 0 ? ' class="selected"' : "") + ">" +
						'<span class="wiki-icon">' + escapeHtml(entry.e || "・") + "</span>" +
						'<span class="wiki-search-name">' + escapeHtml(entry.n) + "</span>" +
						'<span class="wiki-search-type">' + escapeHtml(entry.t) + "</span></a></li>"
					);
				})
				.join("");
		}

		function select(offset) {
			var links = list.querySelectorAll("a");
			if (links.length === 0) return;
			links[selected].classList.remove("selected");
			selected = (selected + offset + links.length) % links.length;
			links[selected].classList.add("selected");
			links[selected].scrollIntoView({ block: "nearest" });
		}

		input.addEventListener("input", function () {
			var query = input.value;
			loadIndex(currentLanguage()).then(function (entries) {
				if (input.value === query) render(search(entries, query));
			});
		});
		input.addEventListener("keydown", function (event) {
			if (event.key === "ArrowDown") select(1);
			else if (event.key === "ArrowUp") select(-1);
			else if (event.key === "Enter") {
				var link = list.querySelectorAll("a")[selected];
				if (link) location.hash = link.getAttribute("href").slice(1);
			} else if (event.key === "Escape") {
				input.value = "";
				render([]);
				return;
			} else return;
			event.preventDefault();
		});
		list.addEventListener("click", function () {
			input.value = "";
			render([]);
		});
	}

	// --- 一覧の絞り込み・並べ替え ------------------------------------------

	/** セルの並べ替え用の値。数値として読めれば数値（「1,234」「12.5%」「Lv7」「1時間30分」も数値扱い） */
	function sortValue(cell) {
		var text = cell.textContent.trim();
		var time = /^(?:(\d+)日)?(?:(\d+)時間)?(?:(\d+)分)?(?:([\d.]+)秒)?$/.exec(text);
		if (time && text) return (+(time[1] || 0)) * 86400 + (+(time[2] || 0)) * 3600 + (+(time[3] || 0)) * 60 + (+(time[4] || 0));
		var number = text.replace(/[,%]|^Lv|^[+±]|回$|種$|本$/g, "");
		if (number !== "" && !isNaN(number)) return parseFloat(number);
		return normalize(text);
	}

	function enhanceTable(marker) {
		var table = marker.nextElementSibling;
		while (table && table.tagName !== "TABLE") table = table.nextElementSibling;
		if (!table || table.dataset.enhanced) return;
		table.dataset.enhanced = "1";
		var body = table.tBodies[0];
		if (!body) return;
		var rows = Array.prototype.slice.call(body.rows);

		marker.innerHTML = '<input type="search" placeholder="絞り込み"><span></span>';
		var input = marker.querySelector("input");
		var counter = marker.querySelector("span");
		counter.textContent = rows.length + "件";
		var texts = rows.map(function (row) {
			return normalize(row.textContent);
		});
		input.addEventListener("input", function () {
			var words = normalize(input.value).split(/\s+/).filter(Boolean);
			var shown = 0;
			rows.forEach(function (row, index) {
				var visible = words.every(function (word) {
					return texts[index].indexOf(word) >= 0;
				});
				row.style.display = visible ? "" : "none";
				if (visible) shown++;
			});
			counter.textContent = shown + " / " + rows.length + "件";
		});

		var headers = table.tHead ? table.tHead.rows[0].cells : [];
		Array.prototype.forEach.call(headers, function (header, column) {
			header.classList.add("wiki-sortable");
			header.addEventListener("click", function () {
				var order = header.dataset.order === "asc" ? "desc" : "asc";
				Array.prototype.forEach.call(headers, function (other) {
					delete other.dataset.order;
				});
				header.dataset.order = order;
				var sorted = rows.slice().sort(function (a, b) {
					var left = sortValue(a.cells[column]);
					var right = sortValue(b.cells[column]);
					var result = typeof left === typeof right ? (left < right ? -1 : left > right ? 1 : 0) : typeof left === "number" ? -1 : 1;
					return order === "asc" ? result : -result;
				});
				sorted.forEach(function (row) {
					body.appendChild(row);
				});
			});
		});
	}

	// --- mermaid ------------------------------------------------------------

	var mermaidReady = false;

	function renderMermaid() {
		if (!window.mermaid) return;
		if (!mermaidReady) {
			var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
			window.mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: dark ? "dark" : "default", flowchart: { useMaxWidth: false } });
			mermaidReady = true;
		}
		var nodes = [];
		document.querySelectorAll('.markdown-section pre[data-lang="mermaid"]').forEach(function (pre) {
			var container = document.createElement("div");
			container.className = "mermaid";
			container.textContent = pre.textContent;
			pre.parentNode.replaceChild(container, pre);
			nodes.push(container);
		});
		if (nodes.length) window.mermaid.run({ nodes: nodes });
	}

	// --- docsify へ登録 ------------------------------------------------------

	function plugin(hook) {
		hook.mounted(mountSearch);
		hook.doneEach(function () {
			// docsify はサイドバーの見出しからタブ名を作るが、要素ページはサイドバーに無いので h1 から作る
			var heading = document.querySelector(".markdown-section h1");
			if (heading) document.title = heading.textContent.trim() + " - " + config.name;
			mountSearch();
			document.querySelectorAll(".markdown-section .wiki-filter").forEach(enhanceTable);
			renderMermaid();
		});
	}

	window.$docsify = window.$docsify || {};
	window.$docsify.plugins = [plugin].concat(window.$docsify.plugins || []);
})();
