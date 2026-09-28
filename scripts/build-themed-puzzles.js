/**
 * Build themed puzzles → js/puzzles.js + gamekey.csv
 */
const fs = require("fs");
const path = require("path");

const puzzles = []
  .concat(require("./themed-puzzles-a.js"))
  .concat(require("./themed-puzzles-b.js"))
  .concat(require("./themed-puzzles-c.js"))
  .sort((a, b) => a.id - b.id);

function validate(list) {
  const errors = [];
  if (list.length !== 50) errors.push(`Expected 50, got ${list.length}`);
  const ids = new Set();
  list.forEach((p) => {
    if (ids.has(p.id)) errors.push(`dup id ${p.id}`);
    ids.add(p.id);
    if (!p.groups || p.groups.length !== 4) errors.push(`p${p.id}: groups`);
    const diffs = new Set();
    const terms = [];
    p.groups.forEach((g, gi) => {
      diffs.add(g.difficulty);
      if (!g.category) errors.push(`p${p.id} g${gi}: no category`);
      if (!g.terms || g.terms.length !== 4) errors.push(`p${p.id} g${gi}: terms`);
      (g.terms || []).forEach((t) => {
        if (!String(t).trim()) errors.push(`p${p.id} g${gi}: empty`);
        if (/BAD|DUPLICATE|FIXME|TODO_PLACEHOLDER/i.test(String(t)) || /BAD|DUPLICATE|FIXME|TODO_PLACEHOLDER/i.test(String(g.explanation || ""))) {
          errors.push(`p${p.id}: leftover placeholder`);
        }
        terms.push(String(t).trim().toLowerCase());
      });
    });
    if (diffs.size !== 4) errors.push(`p${p.id}: difficulties`);
    if (new Set(terms).size !== 16) {
      const dups = terms.filter((t, i) => terms.indexOf(t) !== i);
      errors.push(`p${p.id}: unique ${new Set(terms).size} dups=${[...new Set(dups)].join("|")}`);
    }
  });
  for (let i = 1; i <= 50; i++) if (!ids.has(i)) errors.push(`missing ${i}`);
  return errors;
}

const errors = validate(puzzles);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validation OK — themes:");
puzzles.forEach((p) => console.log(`  #${p.id} ${p.theme}`));

const root = path.join(__dirname, "..");
const puzzlesJs = `/**
 * MedLinks themed puzzle seed data.
 * Runtime source of truth: /gamekey.csv
 */
(function (global) {
  "use strict";
  global.MED_PUZZLES = ${JSON.stringify(
    puzzles.map(({ id, groups }) => ({ id, groups })),
    null,
    2
  )};
})(typeof window !== "undefined" ? window : globalThis);
`;
fs.writeFileSync(path.join(root, "js", "puzzles.js"), puzzlesJs, "utf8");

function csvEscape(value) {
  let str = String(value == null ? "" : value);
  str = str
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u2013\u2014]/g, "-");
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
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
  "theme",
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
puzzles.forEach((puzzle, index) => {
  const date = addDays(START, index);
  const byDiff = {};
  puzzle.groups.forEach((g) => {
    byDiff[g.difficulty] = g;
  });
  const cells = [date, puzzle.theme || ""];
  [1, 2, 3, 4].forEach((diff) => {
    const g = byDiff[diff];
    cells.push(g.category, ...g.terms, g.explanation || "");
  });
  lines.push(cells.map(csvEscape).join(","));
});

fs.writeFileSync(path.join(root, "gamekey.csv"), lines.join("\n") + "\n", "utf8");
console.log(`Wrote gamekey.csv with theme column (${puzzles.length} games)`);
