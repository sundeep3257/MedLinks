/**
 * Generate /gamekey.csv from js/puzzles.js
 * Run: node scripts/export-gamekey.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { console, window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "js", "puzzles.js"), "utf8"), sandbox);
const puzzles = sandbox.window.MED_PUZZLES;

function csvEscape(value) {
  let str = String(value == null ? "" : value);
  // Normalize curly quotes / dashes that can mangle in some encodings
  str = str
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...");
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function addDays(iso, n) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + n);
  return dt.toISOString().slice(0, 10);
}

const START = "2026-09-01";
const headers = [
  "date",
  "easy_category",
  "easy_term1",
  "easy_term2",
  "easy_term3",
  "easy_term4",
  "easy_explanation",
  "medium_category",
  "medium_term1",
  "medium_term2",
  "medium_term3",
  "medium_term4",
  "medium_explanation",
  "hard_category",
  "hard_term1",
  "hard_term2",
  "hard_term3",
  "hard_term4",
  "hard_explanation",
  "tricky_category",
  "tricky_term1",
  "tricky_term2",
  "tricky_term3",
  "tricky_term4",
  "tricky_explanation",
];

const lines = [headers.join(",")];

puzzles
  .slice()
  .sort((a, b) => a.id - b.id)
  .forEach((puzzle, index) => {
    const date = addDays(START, index);
    const byDiff = {};
    puzzle.groups.forEach((g) => {
      byDiff[g.difficulty] = g;
    });
    const cells = [date];
    [1, 2, 3, 4].forEach((diff) => {
      const g = byDiff[diff];
      if (!g) throw new Error(`Puzzle ${puzzle.id} missing difficulty ${diff}`);
      cells.push(g.category, ...g.terms, g.explanation || "");
    });
    lines.push(cells.map(csvEscape).join(","));
  });

const outPath = path.join(root, "gamekey.csv");
fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
console.log(`Wrote ${outPath} (${puzzles.length} games, ${START} → ${addDays(START, puzzles.length - 1)})`);
