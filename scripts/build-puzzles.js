/**
 * Build puzzles.js from parts, apply fixes, validate, write output.
 * Run: node scripts/build-puzzles.js
 */
const fs = require("fs");
const path = require("path");
const { puzzles: part1 } = require("./puzzles-part1.js");
const { puzzles21to50 } = require("./puzzles-part2.js");

// Deep clone helpers
function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

const puzzles = clone(part1).concat(clone(puzzles21to50));

// —— Targeted quality fixes ——

function replaceGroup(puzzleId, difficulty, group) {
  const p = puzzles.find((x) => x.id === puzzleId);
  if (!p) throw new Error("Missing puzzle " + puzzleId);
  const idx = p.groups.findIndex((g) => g.difficulty === difficulty);
  if (idx < 0) throw new Error(`Puzzle ${puzzleId}: no difficulty ${difficulty}`);
  p.groups[idx] = group;
}

// Puzzle 3: Optic is NOT an eye-movement nerve — replace group
replaceGroup(3, 3, {
  category: "Cranial Nerves III, IV, and VI… Plus a Near Miss",
  difficulty: 3,
  terms: ["Oculomotor", "Trochlear", "Abducens", "Trigeminal"],
  explanation:
    "CN III, IV, and VI innervate extraocular muscles; trigeminal (CN V) is the sensory near-miss often confused in cranial-nerve lists.",
});

// Actually that's still awkward as a "category". Better clean category:
replaceGroup(3, 3, {
  category: "Branches of the Trigeminal Nerve",
  difficulty: 3,
  terms: ["Ophthalmic", "Maxillary", "Mandibular", "V1–V3"],
  explanation: "CN V divides into V1 (ophthalmic), V2 (maxillary), and V3 (mandibular); V1–V3 names the set.",
});

// V1-V3 with Ophthalmic/Maxillary/Mandibular has conceptual overlap (same things). Fix properly:
replaceGroup(3, 3, {
  category: "Parasympathetic Cranial Nerves",
  difficulty: 3,
  terms: ["Oculomotor", "Facial", "Glossopharyngeal", "Vagus"],
  explanation: "CN III, VII, IX, and X carry parasympathetic fibers.",
});

// Puzzle 13: avoid Apixaban overlap with puzzle 27 DOACs; improve tricky category
replaceGroup(13, 1, {
  category: "Anticoagulants",
  difficulty: 1,
  terms: ["Warfarin", "Heparin", "Enoxaparin", "Fondaparinux"],
  explanation: "Agents used to prevent or treat thrombosis.",
});
replaceGroup(13, 4, {
  category: "Heavy Metal Toxicities",
  difficulty: 4,
  terms: ["Lead", "Mercury", "Arsenic", "Iron"],
  explanation: "Classic metals causing clinically important poisonings.",
});

// Puzzle 17: STAT is not "as needed"
replaceGroup(17, 4, {
  category: "Prescription Frequency Abbreviations",
  difficulty: 4,
  terms: ["BID", "TID", "QID", "QHS"],
  explanation: "Twice daily, three times daily, four times daily, and every bedtime.",
});

// Puzzle 20: avoid repeating proximal carpals from puzzle 1 — use distal row
replaceGroup(20, 2, {
  category: "Distal Carpal Bones",
  difficulty: 2,
  terms: ["Trapezium", "Trapezoid", "Capitate", "Hamate"],
  explanation: "The four bones of the distal carpal row.",
});

// Puzzle 23: awkward fourth term
replaceGroup(23, 4, {
  category: "Can Be Described as Left- or Right-Sided",
  difficulty: 4,
  terms: ["Heart Failure", "Hemicolectomy", "Pneumothorax", "Otitis Media"],
  explanation: "Conditions or procedures commonly specified by laterality or sided physiology.",
});

// Puzzle 28: weak mnemonic category
replaceGroup(28, 4, {
  category: "ABCDE Trauma Survey Elements",
  difficulty: 4,
  terms: ["Airway", "Breathing", "Circulation", "Disability"],
  explanation: "First four steps of the ATLS primary survey (Exposure omitted).",
});

// Puzzle 31: VF listed twice under different names — invalid
replaceGroup(31, 3, {
  category: "ACLS Pulseless Arrest Rhythms",
  difficulty: 3,
  terms: ["VF", "pVT", "Asystole", "PEA"],
  explanation: "The four rhythms considered in adult cardiac arrest algorithms.",
});

// Puzzle 33: Colles/Smith already in puzzle 5
replaceGroup(33, 4, {
  category: "___ Fracture (Descriptive)",
  difficulty: 4,
  terms: ["Boxer's", "Nightstick", "March", "Greenstick"],
  explanation: "Descriptive fracture names from mechanism or appearance.",
});

// Puzzle 34: keep three ossicles + related muscle (from part2)
replaceGroup(34, 2, {
  category: "Middle Ear: Ossicles & Stapedius",
  difficulty: 2,
  terms: ["Malleus", "Incus", "Stapes", "Stapedius"],
  explanation: "The three auditory ossicles and the stapedius muscle that dampens stapes movement.",
});
// Puzzle 39: awkward instrument category
replaceGroup(39, 4, {
  category: "Bedside Procedural Tools",
  difficulty: 4,
  terms: ["Laryngoscope", "Otoscope", "Ophthalmoscope", "Speculum"],
  explanation: "Common instruments for airway and HEENT examination.",
});

// Puzzle 42: Lidocaine duplicate with local anesthetics puzzle — change antiarrhythmics
replaceGroup(42, 1, {
  category: "Antiarrhythmic Drugs",
  difficulty: 1,
  terms: ["Amiodarone", "Sotalol", "Flecainide", "Adenosine"],
  explanation: "Agents used to treat or terminate cardiac arrhythmias.",
});

// Puzzle 8: reorder difficulties for better progression
(function () {
  const p = puzzles.find((x) => x.id === 8);
  p.groups = [
    {
      category: "SSRI Antidepressants",
      difficulty: 1,
      terms: ["Fluoxetine", "Sertraline", "Escitalopram", "Paroxetine"],
      explanation: "Selective serotonin reuptake inhibitors.",
    },
    {
      category: "Liver Chemistries",
      difficulty: 2,
      terms: ["AST", "ALT", "ALP", "Bilirubin"],
      explanation: "Labs commonly used to assess hepatocellular and cholestatic injury.",
    },
    {
      category: "Cross-Sectional Imaging",
      difficulty: 3,
      terms: ["MRI", "CT", "PET", "Ultrasound"],
      explanation: "Common imaging modalities used for diagnosis and staging.",
    },
    {
      category: "Gell & Coombs Hypersensitivity Types",
      difficulty: 4,
      terms: ["Type I", "Type II", "Type III", "Type IV"],
      explanation: "The classic four hypersensitivity reaction classifications.",
    },
  ];
})();
// Puzzle 27: phlegmon category is confusing
replaceGroup(27, 4, {
  category: "Fluid Collections That May Need Drainage",
  difficulty: 4,
  terms: ["Abscess", "Empyema", "Hematoma", "Seroma"],
  explanation: "Localized collections sometimes managed with drainage.",
});

// Puzzle 48: whimsical category — tighten
replaceGroup(48, 4, {
  category: "Heart Sound / Rhythm Metaphors",
  difficulty: 4,
  terms: ["Gallop", "Rub", "Click", "Snap"],
  explanation: "Descriptive auscultatory findings (S3/S4 gallop, pericardial rub, click, opening snap).",
});

// Puzzle 1 Capitate/Hamate also in puzzle 20 now for distal — puzzle 1 has Capitate Hamate too. Fix puzzle 1 carpals to different set or mix.
replaceGroup(13, 3, {
  category: "Elevated Primary Skin Lesions",
  difficulty: 3,
  terms: ["Papule", "Plaque", "Nodule", "Wheal"],
  explanation: "Raised primary lesion morphologies commonly taught in dermatology.",
});

// Reduce "Frontal" reuse across orbit / skull / sinus puzzles
replaceGroup(1, 2, {
  category: "Bones of the Orbit",
  difficulty: 2,
  terms: ["Zygomatic", "Lacrimal", "Sphenoid", "Palatine"],
  explanation: "Bones that help form the walls of the bony orbit.",
});

// Puzzle 40 sinus Frontal overlaps orbit Frontal across puzzles — OK.

// Puzzle 31 still has synonym issue fixed. Puzzle 42 PEA etc OK.

// Fix puzzle 22 religious category — St. Jude is a hospital, a bit stretchy
replaceGroup(22, 4, {
  category: "Historically Named After Saints",
  difficulty: 4,
  terms: ["St. Anthony's Fire", "St. Vitus Dance", "St. Louis Encephalitis", "Sydenham"],
  explanation: "Saint-associated disease names (ergotism/erysipelas, Sydenham chorea, flavivirus encephalitis; Sydenham is the near-miss physician eponym).",
});

// Sydenham breaks the pattern. Cleaner:
replaceGroup(22, 4, {
  category: "Arboviral Encephalitides",
  difficulty: 4,
  terms: ["West Nile", "St. Louis", "Eastern Equine", "Western Equine"],
  explanation: "Mosquito-borne viral encephalitides.",
});

// —— Validation ——

function validate(list) {
  const errors = [];
  if (list.length !== 50) errors.push(`Expected 50 puzzles, got ${list.length}`);

  const ids = new Set();
  const termFreq = new Map();

  list.forEach((puzzle) => {
    if (ids.has(puzzle.id)) errors.push(`Duplicate id ${puzzle.id}`);
    ids.add(puzzle.id);
    if (!puzzle.groups || puzzle.groups.length !== 4) {
      errors.push(`Puzzle ${puzzle.id}: need 4 groups`);
      return;
    }
    const diffs = new Set();
    const terms = [];
    puzzle.groups.forEach((g, gi) => {
      if (![1, 2, 3, 4].includes(g.difficulty)) {
        errors.push(`Puzzle ${puzzle.id} g${gi}: bad difficulty`);
      }
      diffs.add(g.difficulty);
      if (!g.terms || g.terms.length !== 4) {
        errors.push(`Puzzle ${puzzle.id} g${gi}: need 4 terms`);
        return;
      }
      g.terms.forEach((t) => terms.push(String(t).trim()));
    });
    if (diffs.size !== 4) errors.push(`Puzzle ${puzzle.id}: difficulties must be 1-4 once each`);
    const lower = terms.map((t) => t.toLowerCase());
    const uniq = new Set(lower);
    if (uniq.size !== 16) {
      errors.push(`Puzzle ${puzzle.id}: ${uniq.size} unique terms (need 16). Terms: ${terms.join(" | ")}`);
    }
    lower.forEach((t) => {
      termFreq.set(t, (termFreq.get(t) || 0) + 1);
    });
  });

  for (let i = 1; i <= 50; i++) {
    if (!ids.has(i)) errors.push(`Missing puzzle id ${i}`);
  }

  const heavy = [...termFreq.entries()].filter(([, n]) => n >= 4).sort((a, b) => b[1] - a[1]);
  return { errors, heavy, termFreq };
}

const { errors, heavy } = validate(puzzles);
if (errors.length) {
  console.error("VALIDATION FAILED:\n" + errors.join("\n"));
  process.exit(1);
}

console.log("Validation OK: 50 puzzles");
console.log(
  "Most reused terms (≥4):",
  heavy
    .slice(0, 15)
    .map(([t, n]) => `${t}(${n})`)
    .join(", ") || "none"
);

// Ensure ids sorted
puzzles.sort((a, b) => a.id - b.id);

const out = `/**
 * Med Connections — puzzle data (50 puzzles)
 * Edit this file to add or revise puzzles. Each puzzle must have:
 * - id (1–50)
 * - exactly 4 groups
 * - difficulties 1–4 used once each (1=Easy … 4=Tricky)
 * - exactly 4 unique terms per group (16 unique terms per puzzle)
 *
 * Loaded as window.MED_PUZZLES for the static site.
 */
(function (global) {
  "use strict";

  const MED_PUZZLES = ${JSON.stringify(puzzles, null, 2)};

  // Lightweight validation at load time
  (function validateMedPuzzles(list) {
    const errors = [];
    if (!Array.isArray(list) || list.length !== 50) {
      errors.push("Expected 50 puzzles, got " + (list && list.length));
    }
    (list || []).forEach(function (puzzle) {
      var n = puzzle.id;
      if (!puzzle.groups || puzzle.groups.length !== 4) {
        errors.push("Puzzle " + n + ": expected 4 groups");
        return;
      }
      var diffs = {};
      var terms = [];
      puzzle.groups.forEach(function (g, gi) {
        diffs[g.difficulty] = true;
        if (!g.terms || g.terms.length !== 4) {
          errors.push("Puzzle " + n + " group " + gi + ": expected 4 terms");
          return;
        }
        g.terms.forEach(function (t) { terms.push(String(t).toLowerCase()); });
      });
      if (Object.keys(diffs).length !== 4) {
        errors.push("Puzzle " + n + ": difficulties must be 1–4 exactly once");
      }
      var uniq = {};
      terms.forEach(function (t) { uniq[t] = true; });
      if (Object.keys(uniq).length !== 16) {
        errors.push("Puzzle " + n + ": expected 16 unique terms, got " + Object.keys(uniq).length);
      }
    });
    if (errors.length) {
      console.error("[Med Connections] Puzzle data errors:\\n" + errors.join("\\n"));
    }
  })(MED_PUZZLES);

  global.MED_PUZZLES = MED_PUZZLES;
})(typeof window !== "undefined" ? window : globalThis);
`;

const outPath = path.join(__dirname, "..", "js", "puzzles.js");
fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath);
