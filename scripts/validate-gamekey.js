/**
 * Validate gamekey.csv parse + daily unlock rules
 */
const fs = require("fs");
const path = require("path");

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
    if (ch === '"') inQuotes = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") field += ch;
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => String(c).trim()));
}

const text = fs.readFileSync(path.join(__dirname, "..", "gamekey.csv"), "utf8");
const rows = parseCsv(text);
const header = rows[0];
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

console.log("rows", rows.length - 1);
console.log("first", rows[1][idx.date], rows[1][idx.easy_category]);
console.log("tricky", JSON.stringify(rows[1][idx.tricky_category]));
console.log("last", rows[rows.length - 1][idx.date]);

const today = "2026-09-28";
const unlocked = rows.slice(1).filter((r) => r[idx.date] <= today);
console.log("unlocked on", today, "=", unlocked.length);

// uniqueness + 16 terms
let errors = 0;
for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  const terms = [];
  ["easy", "medium", "hard", "tricky"].forEach((p) => {
    for (let n = 1; n <= 4; n++) terms.push(r[idx[`${p}_term${n}`]]);
  });
  const uniq = new Set(terms.map((t) => String(t).toLowerCase()));
  if (uniq.size !== 16) {
    console.error("bad terms", r[idx.date], uniq.size);
    errors++;
  }
}
console.log(errors ? `FAIL ${errors}` : "CSV VALID");
