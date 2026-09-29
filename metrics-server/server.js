/**
 * MedLinks metrics server
 * - POST /api/event   (public) anonymous counters
 * - POST /api/login   (public) owner password → session token
 * - GET  /api/stats   (auth)   aggregated metrics
 * - GET  /admin       (public HTML; data requires login)
 *
 * Env:
 *   ADMIN_PASSWORD   required in production
 *   PORT             default 3001
 *   CORS_ORIGIN      comma-separated allowed origins (static site URL)
 *   DATA_DIR         where metrics.json is stored (default ./data)
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const PORT = Number(process.env.PORT) || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "change-me-locally";
const CORS_ORIGIN = (process.env.CORS_ORIGIN || "*")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "metrics.json");

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
/** @type {Map<string, number>} token -> expiry */
const sessions = new Map();

function defaultStore() {
  return {
    uniqueViewers: {}, // sessionId -> firstSeen ISO
    totals: {
      pageViews: 0,
      puzzleStarts: 0,
      wins: 0,
      losses: 0,
    },
    byPuzzle: {}, // date -> { starts, wins, losses }
    updatedAt: null,
  };
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadStore() {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) return defaultStore();
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const base = defaultStore();
    return {
      ...base,
      ...raw,
      totals: { ...base.totals, ...(raw.totals || {}) },
      uniqueViewers: raw.uniqueViewers || {},
      byPuzzle: raw.byPuzzle || {},
    };
  } catch {
    return defaultStore();
  }
}

function saveStore(store) {
  ensureDataDir();
  store.updatedAt = new Date().toISOString();
  const tmp = DATA_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(store, null, 2), "utf8");
  fs.renameSync(tmp, DATA_FILE);
}

let store = loadStore();

function puzzleBucket(date) {
  if (!store.byPuzzle[date]) {
    store.byPuzzle[date] = { starts: 0, wins: 0, losses: 0 };
  }
  return store.byPuzzle[date];
}

function validEventType(type) {
  return ["page_view", "puzzle_start", "puzzle_win", "puzzle_loss"].includes(type);
}

function createToken() {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, Date.now() + TOKEN_TTL_MS);
  return token;
}

function isAuthed(req) {
  const header = req.headers.authorization || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) return false;
  const token = match[1].trim();
  const exp = sessions.get(token);
  if (!exp) return false;
  if (Date.now() > exp) {
    sessions.delete(token);
    return false;
  }
  return true;
}

function timingSafeEqualString(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    // still compare to reduce timing leaks on length
    crypto.timingSafeEqual(bufA, Buffer.alloc(bufA.length));
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    origin: function (origin, cb) {
      if (!origin || CORS_ORIGIN.includes("*") || CORS_ORIGIN.includes(origin)) {
        return cb(null, true);
      }
      return cb(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "8kb" }));

const eventLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/event", eventLimiter, (req, res) => {
  const type = req.body && req.body.type;
  const sessionId = String((req.body && req.body.sessionId) || "").slice(0, 80);
  const puzzleDate = req.body && req.body.puzzleDate
    ? String(req.body.puzzleDate).slice(0, 32)
    : null;

  if (!validEventType(type)) {
    return res.status(400).json({ error: "Invalid event type" });
  }

  if (type !== "page_view") {
    if (!puzzleDate || !/^\d{4}-\d{2}-\d{2}$/.test(puzzleDate)) {
      return res.status(400).json({ error: "Invalid puzzleDate" });
    }
  }

  if (type === "page_view") {
    store.totals.pageViews += 1;
    if (sessionId && !store.uniqueViewers[sessionId]) {
      store.uniqueViewers[sessionId] = new Date().toISOString();
    }
  } else if (type === "puzzle_start") {
    store.totals.puzzleStarts += 1;
    puzzleBucket(puzzleDate).starts += 1;
  } else if (type === "puzzle_win") {
    store.totals.wins += 1;
    puzzleBucket(puzzleDate).wins += 1;
  } else if (type === "puzzle_loss") {
    store.totals.losses += 1;
    puzzleBucket(puzzleDate).losses += 1;
  }

  try {
    saveStore(store);
  } catch (err) {
    console.error("Failed to save metrics:", err);
    return res.status(500).json({ error: "Save failed" });
  }

  res.status(204).end();
});

app.post("/api/login", loginLimiter, (req, res) => {
  const password = req.body && req.body.password;
  if (!timingSafeEqualString(password || "", ADMIN_PASSWORD)) {
    return res.status(401).json({ error: "Invalid password" });
  }
  if (ADMIN_PASSWORD === "change-me-locally") {
    console.warn(
      "[MedLinks metrics] Using default ADMIN_PASSWORD — set a strong secret in production."
    );
  }
  const token = createToken();
  res.json({ token, expiresInMs: TOKEN_TTL_MS });
});

app.get("/api/stats", (req, res) => {
  if (!isAuthed(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const byPuzzle = Object.keys(store.byPuzzle)
    .sort()
    .map((date) => ({
      date,
      starts: store.byPuzzle[date].starts || 0,
      wins: store.byPuzzle[date].wins || 0,
      losses: store.byPuzzle[date].losses || 0,
    }));

  res.json({
    updatedAt: store.updatedAt,
    totals: {
      pageViews: store.totals.pageViews || 0,
      uniqueViewers: Object.keys(store.uniqueViewers || {}).length,
      puzzleStarts: store.totals.puzzleStarts || 0,
      wins: store.totals.wins || 0,
      losses: store.totals.losses || 0,
    },
    byPuzzle,
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.redirect("/admin.html");
});

app.listen(PORT, () => {
  console.log(`MedLinks metrics listening on :${PORT}`);
  if (ADMIN_PASSWORD === "change-me-locally") {
    console.warn("WARNING: Set ADMIN_PASSWORD before production use.");
  }
});
