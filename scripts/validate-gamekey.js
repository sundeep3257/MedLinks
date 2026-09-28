/**
 * Validate gamekey.csv parse + structure (supports optional theme column)
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
      } else if (ch === '"') inQuotes = false;
      else field += ch;
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
const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));

const required = ["date"];
["easy", "medium", "hard", "tricky"].forEach((p) => {
  required.push(`${p}_category`, `${p}_term1`, `${p}_term2`, `${p}_term3`, `${p}_term4`);
});
const missing = required.filter((c) => idx[c] == null);
if (missing.length) {
  console.error("Missing columns:", missing.join(", "));
  process.exit(1);
}

let errors = 0;
for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  const terms = [];
  ["easy", "medium", "hard", "tricky"].forEach((p) => {
    for (let n = 1; n <= 4; n++) terms.push(String(r[idx[`${p}_term${n}`]] || "").trim());
  });
  const uniq = new Set(terms.map((t) => t.toLowerCase()));
  if (uniq.size !== 16) {
    console.error("bad terms", r[idx.date], uniq.size);
    errors++;
  }
}

console.log("rows", rows.length - 1);
console.log("has theme column:", idx.theme != null);
console.log("first theme:", rows[1][idx.theme]);
console.log(errors ? `FAIL ${errors}` : "CSV VALID");
process.exit(errors ? 1 : 0);
