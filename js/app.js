/**
 * MedLinks — game logic
 * Loads puzzles from /gamekey.csv (one puzzle per calendar day).
 */

(function () {
  "use strict";

  const STORAGE_KEY = "medlinks-progress-v2";
  const GAMEKEY_URL = "gamekey.csv";
  const MAX_MISTAKES = 4;
  const DIFF_EMOJI = { 1: "🟨", 2: "🟩", 3: "🟦", 4: "🟪" };
  const DIFF_PREFIX = {
    1: "easy",
    2: "medium",
    3: "hard",
    4: "tricky",
  };

  /** @type {Array<{date:string, number:number, groups:Array}>} */
  let puzzles = [];
  let progress = null;
  let state = null;

  // —— Dates (device local timezone) ——

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  /** Local calendar date as YYYY-MM-DD */
  function localDateISO(d) {
    const dt = d || new Date();
    return `${dt.getFullYear()}-${pad2(dt.getMonth() + 1)}-${pad2(dt.getDate())}`;
  }

  function parseISODate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function formatDisplayDate(iso) {
    const dt = parseISODate(iso);
    return dt.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function todayISO() {
    return localDateISO(new Date());
  }

  function isUnlocked(dateISO) {
    return dateISO <= todayISO();
  }

  /** Accept YYYY-MM-DD or M/D/YYYY (common after Excel edits). */
  function normalizePuzzleDate(raw) {
    const s = String(raw || "").trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
    const slash = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slash) {
      return `${slash[3]}-${pad2(Number(slash[1]))}-${pad2(Number(slash[2]))}`;
    }
    return null;
  }

  // —— CSV parsing ——

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const next = text[i + 1];

      if (inQuotes) {
        if (ch === '"' && next === '"') {
          field += '"';
          i++;
        } else if (ch === '"') {
          inQuotes = false;
        } else {
          field += ch;
        }
        continue;
      }

      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (ch === "\r") {
        // ignore; handle \r\n via \n
      } else {
        field += ch;
      }
    }

    if (field.length || row.length) {
      row.push(field);
      rows.push(row);
    }

    return rows.filter((r) => r.some((cell) => String(cell).trim() !== ""));
  }

  function rowsToPuzzles(rows) {
    if (!rows.length) throw new Error("gamekey.csv is empty");
    const header = rows[0].map((h) => h.trim());
    const idx = {};
    header.forEach((h, i) => {
      idx[h] = i;
    });

    const required = ["date"];
    [1, 2, 3, 4].forEach((d) => {
      const p = DIFF_PREFIX[d];
      required.push(
        `${p}_category`,
        `${p}_term1`,
        `${p}_term2`,
        `${p}_term3`,
        `${p}_term4`
      );
    });
    required.forEach((col) => {
      if (idx[col] == null) throw new Error(`gamekey.csv missing column: ${col}`);
    });

    const list = [];
    for (let r = 1; r < rows.length; r++) {
      const cells = rows[r];
      const dateRaw = String(cells[idx.date] || "").trim();
      const date = normalizePuzzleDate(dateRaw);
      if (!date) {
        throw new Error(`Invalid date on row ${r + 1}: ${dateRaw}`);
      }

      const groups = [1, 2, 3, 4].map((difficulty) => {
        const p = DIFF_PREFIX[difficulty];
        const explanationCol = `${p}_explanation`;
        return {
          category: String(cells[idx[`${p}_category`]] || "").trim(),
          difficulty,
          terms: [1, 2, 3, 4].map((n) =>
            String(cells[idx[`${p}_term${n}`]] || "").trim()
          ),
          explanation:
            idx[explanationCol] != null
              ? String(cells[idx[explanationCol]] || "").trim()
              : "",
        };
      });

      list.push({
        date,
        number: list.length + 1,
        groups,
      });
    }

    list.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
    list.forEach((p, i) => {
      p.number = i + 1;
    });
    return list;
  }

  function validatePuzzles(list) {
    const errors = [];
    const dates = new Set();

    (list || []).forEach((puzzle) => {
      const n = puzzle.date || puzzle.number;
      if (dates.has(puzzle.date)) errors.push(`Duplicate date ${puzzle.date}`);
      dates.add(puzzle.date);

      if (!puzzle.groups || puzzle.groups.length !== 4) {
        errors.push(`Puzzle ${n}: expected 4 groups`);
        return;
      }
      const diffs = new Set();
      const terms = [];
      puzzle.groups.forEach((g, gi) => {
        if (!g.category) errors.push(`Puzzle ${n} group ${gi}: missing category`);
        if (![1, 2, 3, 4].includes(g.difficulty)) {
          errors.push(`Puzzle ${n} group ${gi}: invalid difficulty`);
        }
        diffs.add(g.difficulty);
        if (!g.terms || g.terms.length !== 4) {
          errors.push(`Puzzle ${n} group ${gi}: expected 4 terms`);
          return;
        }
        g.terms.forEach((t) => {
          if (!t) errors.push(`Puzzle ${n} group ${gi}: empty term`);
          terms.push(t);
        });
      });
      if (diffs.size !== 4) {
        errors.push(`Puzzle ${n}: difficulties must be 1–4 exactly once`);
      }
      const unique = new Set(terms.map((t) => t.toLowerCase()));
      if (unique.size !== 16) {
        errors.push(`Puzzle ${n}: expected 16 unique terms, got ${unique.size}`);
      }
    });

    if (errors.length) {
      console.error("[MedLinks] Puzzle validation failed:\n" + errors.join("\n"));
    } else {
      console.info(`[MedLinks] Loaded ${list.length} puzzles from gamekey.csv`);
    }
    return errors;
  }

  // —— Storage ——

  function defaultProgress() {
    return {
      currentDate: null,
      puzzles: {}, // date -> { status, guesses }
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress();
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return defaultProgress();
      return {
        currentDate: data.currentDate || null,
        puzzles: data.puzzles && typeof data.puzzles === "object" ? data.puzzles : {},
      };
    } catch {
      return defaultProgress();
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save progress:", e);
    }
  }

  // —— Helpers ——

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const s = new Set(a.map((x) => x.toLowerCase()));
    return b.every((x) => s.has(x.toLowerCase()));
  }

  function findGroup(puzzle, terms) {
    return puzzle.groups.find((g) => sameSet(g.terms, terms));
  }

  function countOverlap(selected, groupTerms) {
    const s = new Set(selected.map((t) => t.toLowerCase()));
    return groupTerms.filter((t) => s.has(t.toLowerCase())).length;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getPuzzleByDate(date) {
    return puzzles.find((p) => p.date === date);
  }

  function availablePuzzles() {
    return puzzles.filter((p) => isUnlocked(p.date));
  }

  function latestAvailable() {
    const avail = availablePuzzles();
    return avail.length ? avail[avail.length - 1] : null;
  }

  function adjacentAvailable(date, delta) {
    const avail = availablePuzzles();
    const idx = avail.findIndex((p) => p.date === date);
    if (idx < 0) return null;
    return avail[idx + delta] || null;
  }

  // —— DOM ——

  const els = {
    puzzleDateLabel: document.getElementById("puzzle-date-label"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    puzzleSelectBtn: document.getElementById("puzzle-select-btn"),
    todayBtn: document.getElementById("today-btn"),
    archiveBtn: document.getElementById("archive-btn"),
    statusMessage: document.getElementById("status-message"),
    solvedArea: document.getElementById("solved-area"),
    tileGrid: document.getElementById("tile-grid"),
    mistakeDots: document.getElementById("mistake-dots"),
    shuffleBtn: document.getElementById("shuffle-btn"),
    deselectBtn: document.getElementById("deselect-btn"),
    submitBtn: document.getElementById("submit-btn"),
    resultsModal: document.getElementById("results-modal"),
    resultsTitle: document.getElementById("results-title"),
    resultsSubtitle: document.getElementById("results-subtitle"),
    resultsGrid: document.getElementById("results-grid"),
    copyBtn: document.getElementById("copy-btn"),
    playNextBtn: document.getElementById("play-next-btn"),
    viewArchiveBtn: document.getElementById("view-archive-btn"),
    reopenResultsBtn: document.getElementById("reopen-results-btn"),
    resetBtn: document.getElementById("reset-btn"),
    confirmResetBtn: document.getElementById("confirm-reset-btn"),
    archiveList: document.getElementById("archive-list"),
    helpBtn: document.getElementById("help-btn"),
  };

  function createState(puzzle) {
    const saved = progress.puzzles[puzzle.date];
    const finished = saved && (saved.status === "won" || saved.status === "lost");

    if (finished) {
      return {
        puzzle,
        remainingTerms: [],
        selected: [],
        solved: reconstructSolvedOrder(puzzle, saved),
        mistakesLeft: 0,
        guessHistory: saved.guesses || [],
        status: saved.status,
      };
    }

    return {
      puzzle,
      remainingTerms: shuffle(puzzle.groups.flatMap((g) => g.terms)),
      selected: [],
      solved: [],
      mistakesLeft: MAX_MISTAKES,
      guessHistory: [],
      status: "playing",
      _pastSelections: [],
      _submitting: false,
    };
  }

  /** Restore solved rows in the order the player found them. */
  function reconstructSolvedOrder(puzzle, saved) {
    const byDiff = {};
    puzzle.groups.forEach((g) => {
      byDiff[g.difficulty] = g;
    });

    const ordered = [];
    const used = new Set();

    if (Array.isArray(saved.solvedOrder) && saved.solvedOrder.length) {
      saved.solvedOrder.forEach((diff) => {
        const g = byDiff[diff];
        if (g && !used.has(g.category)) {
          ordered.push(g);
          used.add(g.category);
        }
      });
    } else {
      // Infer correct guesses: a results row of four matching difficulties
      (saved.guesses || []).forEach((row) => {
        if (
          Array.isArray(row) &&
          row.length === 4 &&
          row.every((d) => d === row[0])
        ) {
          const g = byDiff[row[0]];
          if (g && !used.has(g.category)) {
            ordered.push(g);
            used.add(g.category);
          }
        }
      });
    }

    // Any remaining (e.g. revealed after a loss) follow in difficulty order
    puzzle.groups
      .slice()
      .sort((a, b) => a.difficulty - b.difficulty)
      .forEach((g) => {
        if (!used.has(g.category)) ordered.push(g);
      });

    return ordered;
  }

  // —— Rendering ——

  function setStatus(text, kind) {
    els.statusMessage.textContent = text || "";
    els.statusMessage.className = "status-message" + (kind ? ` is-${kind}` : "");
  }

  function renderMistakeDots() {
    const used = MAX_MISTAKES - state.mistakesLeft;
    els.mistakeDots.innerHTML = "";
    els.mistakeDots.setAttribute(
      "aria-label",
      `${state.mistakesLeft} mistake${state.mistakesLeft === 1 ? "" : "s"} remaining`
    );
    for (let i = 0; i < MAX_MISTAKES; i++) {
      const dot = document.createElement("span");
      dot.className = "mistake-dot" + (i < used ? " is-used" : "");
      els.mistakeDots.appendChild(dot);
    }
  }

  function renderSolved() {
    els.solvedArea.innerHTML = "";
    // Keep the order the player solved categories (do not re-sort by difficulty)
    state.solved.forEach((group) => {
      const block = document.createElement("div");
      block.className = `solved-block diff-${group.difficulty}`;
      block.setAttribute("role", "status");
      const showExplanation =
        (state.status === "won" || state.status === "lost") && group.explanation;
      block.innerHTML =
        `<p class="solved-category">${escapeHtml(group.category)}</p>` +
        `<p class="solved-terms">${escapeHtml(group.terms.join(", "))}</p>` +
        (showExplanation
          ? `<p class="solved-explanation">${escapeHtml(group.explanation)}</p>`
          : "");
      els.solvedArea.appendChild(block);
    });
  }

  function renderTiles() {
    els.tileGrid.innerHTML = "";
    if (state.status !== "playing") {
      els.tileGrid.hidden = true;
      return;
    }
    els.tileGrid.hidden = false;

    state.remainingTerms.forEach((term) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tile" + (state.selected.includes(term) ? " is-selected" : "");
      btn.textContent = term;
      btn.setAttribute("aria-pressed", state.selected.includes(term) ? "true" : "false");
      btn.setAttribute("aria-label", term);
      btn.addEventListener("click", () => toggleSelect(term));
      els.tileGrid.appendChild(btn);
    });
  }

  function populateResultsContent() {
    els.resultsTitle.textContent = state.status === "won" ? "Well done!" : "Next time.";
    const label = formatDisplayDate(state.puzzle.date);
    els.resultsSubtitle.textContent =
      state.status === "won"
        ? `You solved MedLinks for ${label}.`
        : `MedLinks for ${label} — here's the solution.`;

    els.resultsGrid.innerHTML = "";
    state.guessHistory.forEach((diffs) => {
      const row = document.createElement("div");
      row.className = "result-row";
      diffs.forEach((d) => {
        const sq = document.createElement("span");
        sq.className = `result-sq diff-${d}`;
        row.appendChild(sq);
      });
      els.resultsGrid.appendChild(row);
    });

    const next = adjacentAvailable(state.puzzle.date, 1);
    els.playNextBtn.disabled = !next;
    els.playNextBtn.textContent = next ? "Next Puzzle" : "No newer puzzle";
  }

  function showResultsModal() {
    if (state.status !== "won" && state.status !== "lost") return;
    populateResultsContent();
    openModal("results-modal");
  }

  function renderResultsChrome() {
    const finished = state.status === "won" || state.status === "lost";
    els.reopenResultsBtn.classList.toggle("hidden", !finished);
    // Hide play controls while finished; show View Results instead
    els.shuffleBtn.classList.toggle("hidden", finished);
    els.deselectBtn.classList.toggle("hidden", finished);
    els.submitBtn.classList.toggle("hidden", finished);
  }

  function renderChrome() {
    const today = todayISO();
    const isToday = state.puzzle.date === today;
    els.puzzleDateLabel.textContent = isToday
      ? `Today · ${formatDisplayDate(state.puzzle.date)}`
      : formatDisplayDate(state.puzzle.date);

    els.todayBtn.classList.toggle("hidden", isToday);

    els.prevBtn.disabled = !adjacentAvailable(state.puzzle.date, -1);
    els.nextBtn.disabled = !adjacentAvailable(state.puzzle.date, 1);

    const playing = state.status === "playing";
    els.shuffleBtn.disabled = !playing;
    els.deselectBtn.disabled = !playing || state.selected.length === 0;
    els.submitBtn.disabled = !playing || state.selected.length !== 4;

    document.querySelector(".mistakes").style.visibility =
      state.status === "playing" ? "visible" : "hidden";

    renderResultsChrome();
  }

  function renderAll() {
    renderChrome();
    renderMistakeDots();
    renderSolved();
    renderTiles();
  }

  // —— Actions ——

  function toggleSelect(term) {
    if (state.status !== "playing") return;
    const idx = state.selected.indexOf(term);
    if (idx >= 0) {
      state.selected.splice(idx, 1);
    } else {
      if (state.selected.length >= 4) {
        setStatus("Select only four terms.", "error");
        return;
      }
      state.selected.push(term);
    }
    setStatus("");
    renderTiles();
    renderChrome();
  }

  function deselectAll() {
    state.selected = [];
    setStatus("");
    renderTiles();
    renderChrome();
  }

  function shuffleTiles() {
    if (state.status !== "playing") return;
    state.remainingTerms = shuffle(state.remainingTerms);
    renderTiles();
  }

  function difficultyForTerm(term) {
    const g = state.puzzle.groups.find((group) =>
      group.terms.some((t) => t.toLowerCase() === term.toLowerCase())
    );
    return g ? g.difficulty : 1;
  }

  function recordGuess(selectedTerms) {
    state.guessHistory.push(
      selectedTerms.map(difficultyForTerm).sort((a, b) => a - b)
    );
  }

  function handleCorrect(group) {
    recordGuess(state.selected);
    state.solved.push(group);
    state.remainingTerms = state.remainingTerms.filter(
      (t) => !group.terms.some((gt) => gt.toLowerCase() === t.toLowerCase())
    );
    state.selected = [];
    setStatus("Correct!", "success");

    if (state.solved.length === 4) {
      endGame("won");
    } else {
      renderAll();
      window.setTimeout(() => {
        if (state.status === "playing") setStatus("");
      }, 1200);
    }
  }

  function handleIncorrect(selected) {
    recordGuess(selected);
    state.mistakesLeft -= 1;

    let oneAway = false;
    for (const g of state.puzzle.groups) {
      if (state.solved.includes(g)) continue;
      if (countOverlap(selected, g.terms) === 3) {
        oneAway = true;
        break;
      }
    }

    els.tileGrid.querySelectorAll(".tile.is-selected").forEach((t) => {
      t.classList.add("is-shake");
    });

    setStatus(oneAway ? "One away…" : "Incorrect", oneAway ? "one-away" : "error");
    renderMistakeDots();

    if (state.mistakesLeft <= 0) {
      window.setTimeout(() => endGame("lost"), 450);
      return;
    }

    window.setTimeout(() => {
      state.selected = [];
      renderTiles();
      renderChrome();
      if (state.status === "playing") {
        window.setTimeout(() => setStatus(""), 900);
      }
    }, 450);
  }

  function submitGuess() {
    if (state.status !== "playing" || state.selected.length !== 4) return;
    if (state._submitting) return;
    state._submitting = true;

    const key = state.selected
      .map((t) => t.toLowerCase())
      .sort()
      .join("|");
    const prior = state._pastSelections || [];
    if (prior.includes(key)) {
      setStatus("Already guessed.", "error");
      state._submitting = false;
      return;
    }
    state._pastSelections = prior.concat(key);

    const group = findGroup(state.puzzle, state.selected);
    if (group) {
      handleCorrect(group);
      state._submitting = false;
    } else {
      handleIncorrect(state.selected.slice());
      window.setTimeout(() => {
        state._submitting = false;
      }, 500);
    }
  }

  function endGame(outcome) {
    state.status = outcome;
    state.selected = [];

    if (outcome === "lost") {
      // Append unsolved groups after ones found during play
      state.puzzle.groups
        .filter((g) => !state.solved.some((s) => s.category === g.category))
        .slice()
        .sort((a, b) => a.difficulty - b.difficulty)
        .forEach((g) => state.solved.push(g));
      state.remainingTerms = [];
      setStatus("Out of mistakes — solution revealed.", "error");
      if (window.MedLinksAnalytics) {
        window.MedLinksAnalytics.puzzleLoss(state.puzzle.date);
      }
    } else {
      setStatus("Puzzle complete!", "success");
      fireSideConfetti();
      if (window.MedLinksAnalytics) {
        window.MedLinksAnalytics.puzzleWin(state.puzzle.date);
      }
    }

    progress.puzzles[state.puzzle.date] = {
      status: outcome,
      guesses: state.guessHistory,
      solvedOrder: state.solved.map((g) => g.difficulty),
    };
    progress.currentDate = state.puzzle.date;
    saveProgress(progress);
    renderAll();

    // Overlay results like Wordle/Connections (brief delay so win confetti starts first)
    const delay = outcome === "won" ? 550 : 350;
    window.setTimeout(() => showResultsModal(), delay);
  }

  // —— Confetti (from left & right edges on win) ——

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function fireSideConfetti() {
    if (prefersReducedMotion()) return;

    const existing = document.getElementById("confetti-canvas");
    if (existing) existing.remove();

    const canvas = document.createElement("canvas");
    canvas.id = "confetti-canvas";
    canvas.className = "confetti-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const colors = ["#e8c547", "#6baf8d", "#6b8fc7", "#b87a9e", "#faf9f6", "#1a1a1a"];
    let particles = [];
    let raf = 0;
    let start = 0;
    const DURATION = 2800;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function spawnBurst(side) {
      const count = 55;
      for (let i = 0; i < count; i++) {
        const fromLeft = side === "left";
        const x = fromLeft ? -8 : canvas.width + 8;
        const y = canvas.height * (0.15 + Math.random() * 0.7);
        const speed = 7 + Math.random() * 9;
        const angle = fromLeft
          ? -0.45 + Math.random() * 0.9
          : Math.PI - 0.45 + Math.random() * 0.9;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (2 + Math.random() * 4),
          w: 5 + Math.random() * 5,
          h: 7 + Math.random() * 8,
          color: colors[(Math.random() * colors.length) | 0],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.35,
          gravity: 0.14 + Math.random() * 0.08,
          drag: 0.988,
          alpha: 1,
        });
      }
    }

    spawnBurst("left");
    spawnBurst("right");
    window.setTimeout(() => {
      spawnBurst("left");
      spawnBurst("right");
    }, 180);

    function frame(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (elapsed > DURATION - 700) {
          p.alpha = Math.max(0, (DURATION - elapsed) / 700);
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < DURATION) {
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        canvas.remove();
      }
    }

    raf = requestAnimationFrame(frame);
  }

  function loadPuzzleByDate(date, options) {
    const opts = options || {};
    const puzzle = getPuzzleByDate(date);
    if (!puzzle) {
      setStatus("Puzzle not found.", "error");
      return;
    }
    if (!isUnlocked(puzzle.date)) {
      setStatus("That puzzle unlocks at midnight on its date.", "error");
      return;
    }
    closeModal("results-modal");
    state = createState(puzzle);
    progress.currentDate = puzzle.date;
    saveProgress(progress);
    setStatus("");
    renderAll();

    if (state.status === "playing" && window.MedLinksAnalytics) {
      window.MedLinksAnalytics.puzzleStart(puzzle.date);
    }

    // Returning to a finished puzzle shows results overlay (Wordle-style)
    if (
      opts.showResults !== false &&
      (state.status === "won" || state.status === "lost")
    ) {
      window.setTimeout(() => showResultsModal(), 200);
    }
  }

  function buildResultsText() {
    const lines = [
      `MedLinks #${state.puzzle.number}`,
      state.puzzle.date,
    ];
    state.guessHistory.forEach((row) => {
      lines.push(row.map((d) => DIFF_EMOJI[d]).join(""));
    });
    return lines.join("\n");
  }

  async function copyResults() {
    const text = buildResultsText();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      const prev = els.copyBtn.textContent;
      els.copyBtn.textContent = "Copied!";
      window.setTimeout(() => {
        els.copyBtn.textContent = prev;
      }, 1500);
    } catch {
      setStatus("Could not copy — select and copy manually.", "error");
    }
  }

  // —— Modals / archive ——

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("hidden");
    const focusable = modal.querySelector(
      "button:not([data-close]), .archive-item:not(:disabled)"
    );
    if (focusable) focusable.focus();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("hidden");
  }

  function renderArchive() {
    els.archiveList.innerHTML = "";
    const today = todayISO();
    const available = availablePuzzles();

    if (!available.length) {
      const empty = document.createElement("p");
      empty.className = "archive-intro";
      empty.textContent = "No puzzles are available yet.";
      els.archiveList.appendChild(empty);
      return;
    }

    // Newest first — today's puzzle appears at the top when it unlocks
    available
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .forEach((puzzle) => {
        const saved = progress.puzzles[puzzle.date];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "archive-item";
        if (puzzle.date === state.puzzle.date) btn.classList.add("is-current");
        if (saved && saved.status === "won") btn.classList.add("is-won");
        if (saved && saved.status === "lost") btn.classList.add("is-lost");

        const badge = puzzle.date === today ? "Today" : `#${puzzle.number}`;

        btn.innerHTML =
          `<span class="archive-item-date">${escapeHtml(formatDisplayDate(puzzle.date))}</span>` +
          `<span class="archive-item-badge">${escapeHtml(badge)}</span>`;

        btn.setAttribute(
          "aria-label",
          `Play puzzle for ${formatDisplayDate(puzzle.date)}`
        );

        btn.addEventListener("click", () => {
          closeModal("archive-modal");
          loadPuzzleByDate(puzzle.date);
        });

        els.archiveList.appendChild(btn);
      });
  }

  function bindEvents() {
    els.submitBtn.addEventListener("click", submitGuess);
    els.shuffleBtn.addEventListener("click", shuffleTiles);
    els.deselectBtn.addEventListener("click", deselectAll);
    els.prevBtn.addEventListener("click", () => {
      const prev = adjacentAvailable(state.puzzle.date, -1);
      if (prev) loadPuzzleByDate(prev.date);
    });
    els.nextBtn.addEventListener("click", () => {
      const next = adjacentAvailable(state.puzzle.date, 1);
      if (next) loadPuzzleByDate(next.date);
    });
    els.todayBtn.addEventListener("click", () => {
      const latest = latestAvailable();
      if (latest) loadPuzzleByDate(latest.date);
    });
    els.playNextBtn.addEventListener("click", () => {
      const next = adjacentAvailable(state.puzzle.date, 1);
      if (next) {
        closeModal("results-modal");
        loadPuzzleByDate(next.date);
      }
    });
    els.copyBtn.addEventListener("click", copyResults);
    els.reopenResultsBtn.addEventListener("click", () => showResultsModal());
    els.viewArchiveBtn.addEventListener("click", () => {
      closeModal("results-modal");
      renderArchive();
      openModal("archive-modal");
    });
    els.puzzleSelectBtn.addEventListener("click", () => {
      closeModal("results-modal");
      renderArchive();
      openModal("archive-modal");
    });
    els.archiveBtn.addEventListener("click", () => {
      closeModal("results-modal");
      renderArchive();
      openModal("archive-modal");
    });
    els.helpBtn.addEventListener("click", () => openModal("help-modal"));
    els.resetBtn.addEventListener("click", () => openModal("reset-modal"));

    // Secret owner entry: click the MedLinks title 5 times quickly
    (function bindOwnerMetricsGesture() {
      const title = document.querySelector(".brand-title");
      if (!title) return;
      let clicks = 0;
      let timer = 0;
      title.style.cursor = "default";
      title.title = "";
      title.addEventListener("click", () => {
        clicks += 1;
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          clicks = 0;
        }, 1400);
        if (clicks >= 5) {
          clicks = 0;
          window.location.href = "metrics.html";
        }
      });
    })();
    els.confirmResetBtn.addEventListener("click", () => {
      progress = defaultProgress();
      saveProgress(progress);
      closeModal("reset-modal");
      closeModal("results-modal");
      const latest = latestAvailable();
      if (latest) loadPuzzleByDate(latest.date, { showResults: false });
      setStatus("Progress reset.", "success");
    });

    document.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => closeModal(el.getAttribute("data-close")));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        ["results-modal", "archive-modal", "help-modal", "reset-modal"].forEach(closeModal);
      }
      if (
        e.key === "Enter" &&
        state &&
        state.status === "playing" &&
        state.selected.length === 4
      ) {
        const tag = (e.target && e.target.tagName) || "";
        if (tag !== "BUTTON") submitGuess();
      }
    });
  }

  async function loadGameKey() {
    const response = await fetch(GAMEKEY_URL, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Could not load ${GAMEKEY_URL} (${response.status})`);
    }
    const text = await response.text();
    const rows = parseCsv(text);
    return rowsToPuzzles(rows);
  }

  async function init() {
    progress = loadProgress();
    bindEvents();

    if (window.MedLinksAnalytics) {
      window.MedLinksAnalytics.pageView();
    }

    try {
      puzzles = await loadGameKey();
    } catch (err) {
      console.error(err);
      const isFetchFailure =
        err instanceof TypeError ||
        (err && err.message && /failed to fetch|networkerror|load failed/i.test(err.message));
      setStatus(
        isFetchFailure
          ? "Could not load gamekey.csv. Serve this site over HTTP (not as a raw file)."
          : `Could not load gamekey.csv: ${err.message || err}`,
        "error"
      );
      return;
    }

    validatePuzzles(puzzles);
    if (!puzzles.length) {
      setStatus("No puzzles found in gamekey.csv.", "error");
      return;
    }

    const latest = latestAvailable();
    if (!latest) {
      const first = puzzles[0];
      setStatus(
        `The first MedLinks puzzle unlocks on ${formatDisplayDate(first.date)}.`,
        "error"
      );
      // Still render archive of locked dates
      state = {
        puzzle: first,
        remainingTerms: [],
        selected: [],
        solved: [],
        mistakesLeft: MAX_MISTAKES,
        guessHistory: [],
        status: "locked",
      };
      renderChrome();
      renderArchive();
      return;
    }

    // Prefer last viewed if still available; otherwise today's (latest unlocked)
    let start = latest;
    if (progress.currentDate && isUnlocked(progress.currentDate)) {
      const remembered = getPuzzleByDate(progress.currentDate);
      if (remembered) start = remembered;
    }
    // Default landing: always today's puzzle for daily habit
    start = latest;
    loadPuzzleByDate(start.date);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
