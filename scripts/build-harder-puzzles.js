/**
 * Build harder puzzle set into js/puzzles.js and gamekey.csv
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const partA = require("./harder-puzzles-a.js");
const partB = require("./harder-puzzles-b.js");
const partC = require("./harder-puzzles-c.js");

const puzzles = partA.concat(partB, partC).sort((a, b) => a.id - b.id);

function validate(list) {
  const errors = [];
  if (list.length !== 50) errors.push(`Expected 50, got ${list.length}`);
  const ids = new Set();
  const termFreq = new Map();

  list.forEach((p) => {
    if (ids.has(p.id)) errors.push(`dup id ${p.id}`);
    ids.add(p.id);
    if (!p.groups || p.groups.length !== 4) errors.push(`p${p.id} groups`);
    const diffs = new Set();
    const terms = [];
    p.groups.forEach((g) => {
      diffs.add(g.difficulty);
      if (!g.terms || g.terms.length !== 4) errors.push(`p${p.id} terms`);
      (g.terms || []).forEach((t) => {
        if (!String(t).trim()) errors.push(`p${p.id} empty`);
        terms.push(String(t).trim());
      });
    });
    if (diffs.size !== 4) errors.push(`p${p.id} diffs`);
    const uniq = new Set(terms.map((t) => t.toLowerCase()));
    if (uniq.size !== 16) {
      errors.push(`p${p.id} unique=${uniq.size}: ${terms.join(" | ")}`);
    }
    terms.forEach((t) => {
      const k = t.toLowerCase();
      termFreq.set(k, (termFreq.get(k) || 0) + 1);
    });
  });
  for (let i = 1; i <= 50; i++) if (!ids.has(i)) errors.push(`missing ${i}`);
  return { errors, termFreq };
}

const { errors, termFreq } = validate(puzzles);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const heavy = [...termFreq.entries()].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]);
console.log("Validation OK");
console.log(
  "Terms used ≥3 times:",
  heavy.map(([t, n]) => `${t}(${n})`).join(", ") || "none"
);

// Write puzzles.js
const puzzlesJs = `/**
 * MedLinks — puzzle seed data (50 puzzles)
 * Runtime ground truth is /gamekey.csv. Regenerate CSV via:
 *   node scripts/build-harder-puzzles.js
 */
(function (global) {
  "use strict";
  const MED_PUZZLES = ${JSON.stringify(puzzles, null, 2)};
  global.MED_PUZZLES = MED_PUZZLES;
})(typeof window !== "undefined" ? window : globalThis);
`;

const root = path.join(__dirname, "..");
fs.writeFileSync(path.join(root, "js", "puzzles.js"), puzzlesJs, "utf8");

// Write gamekey.csv (reuse export logic)
function csvEscape(value) {
  let str = String(value == null ? "" : value);
  str = str
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...");
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
  const cells = [date];
  [1, 2, 3, 4].forEach((diff) => {
    const g = byDiff[diff];
    cells.push(g.category, ...g.terms, g.explanation || "");
  });
  lines.push(cells.map(csvEscape).join(","));
});

fs.writeFileSync(path.join(root, "gamekey.csv"), lines.join("\n") + "\n", "utf8");
console.log(`Wrote gamekey.csv (${puzzles.length} games, ${START} → ${addDays(START, 49)})`);
