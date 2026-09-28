# MedLinks

A daily medical grouping puzzle: find four groups of four related terms. One new puzzle unlocks each day at midnight (device local time). Past puzzles are available in the archive back to **September 1, 2026**.

## Project structure

```
/
├── index.html          # Main page
├── gamekey.csv         # Ground-truth puzzle data (one row per day)
├── css/styles.css
├── js/app.js           # Gameplay, daily unlock, archive, localStorage
├── scripts/            # Optional CSV export/validate helpers
├── favicon.svg
└── README.md
```

## Run locally

Serve the folder over HTTP (required so the browser can fetch `gamekey.csv`):

```bash
npx --yes serve .
```

Then open the URL shown in the terminal.

## Daily puzzles & archive

- Puzzles are scheduled one per day starting `2026-09-01`.
- Availability uses the visitor’s **local calendar date** (unlocks at local midnight).
- The archive lists every row in `gamekey.csv`; future dates stay locked until their day.

## Puzzle data (`gamekey.csv`)

`gamekey.csv` is the source of truth. Each row is one daily puzzle with a board-wide **theme** (for example Labor and Delivery, Oncology, Orthopedics). All 16 terms fit that theme, so groups can’t be solved merely by being “the only vaccines/bones/labs on the board.”

| Column groups | Contents |
| --- | --- |
| `date` | `YYYY-MM-DD` |
| `theme` | Board-wide topic (not shown as a spoiler in-game) |
| `easy_*` | category, 4 terms, explanation |
| `medium_*` | category, 4 terms, explanation |
| `hard_*` | category, 4 terms, explanation |
| `tricky_*` | category, 4 terms, explanation |

### Add future puzzles

1. Append a new row to `gamekey.csv` with the next date and four category groups.
2. Redeploy / refresh the static files.
3. That puzzle becomes playable at local midnight on its `date`.

Optional helper (regenerates the CSV from the older `js/puzzles.js` seed data):

```bash
node scripts/export-gamekey.js
node scripts/validate-gamekey.js
```

## Deploy

Upload / push the project root (including `gamekey.csv`) to any static host: GitHub Pages, Netlify, Vercel, Render Static Sites, Cloudflare Pages, etc.

No environment variables or backend required. Progress is stored in the browser via `localStorage`.

### Deploy on Render (Static Site)

1. Put this project in a GitHub (or GitLab/Bitbucket) repository and push it.
2. In the [Render Dashboard](https://dashboard.render.com/), click **New +** → **Static Site**.
3. Connect the repository.
4. Use these settings:

| Field | Value |
| --- | --- |
| **Name** | `medlinks` (or any name you like) |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | leave blank |
| **Build Command** | leave blank, or use `true` |
| **Publish Directory** | `.` |

5. **Environment variables:** none required.
6. Click **Create Static Site**.

Render will serve `index.html` from the repo root along with `css/`, `js/`, `gamekey.csv`, and `favicon.svg`.

**Required runtime files (must be in the published root):**

- `index.html`
- `gamekey.csv`
- `css/styles.css`
- `js/app.js`
- `favicon.svg`

`scripts/` and `js/puzzles.js` are optional (helpers / seed data only; the live game reads `gamekey.csv`).

## License / notes

Original game content and UI. Not affiliated with the New York Times, Connections, or Wordle.
