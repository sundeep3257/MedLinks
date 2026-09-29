# MedLinks

A daily medical grouping puzzle: find four groups of four related terms. One new puzzle unlocks each day at midnight (device local time). Past puzzles are available in the archive back to **September 1, 2026**.

## Project structure

```
/
├── index.html          # Main game
├── metrics.html        # Secret owner metrics portal
├── gamekey.csv         # Puzzle data
├── css/styles.css
├── js/
│   ├── config.js       # Put your GA4 Measurement ID here
│   ├── analytics.js    # Sends events to Google Analytics 4
│   └── app.js
├── favicon.svg
└── README.md
```

## Run locally

```bash
npx --yes serve .
```

## User metrics (Google Analytics 4)

The game sends anonymous events to **Google Analytics 4**. You do **not** need a separate Render web service.

### Tracked events

| Event | Meaning |
| --- | --- |
| `medlinks_page_view` | Someone loaded the site |
| `medlinks_puzzle_start` | A puzzle was started (`puzzle_date` param) |
| `medlinks_puzzle_win` | Puzzle completed successfully |
| `medlinks_puzzle_loss` | Puzzle failed (out of mistakes) |

### Setup steps

1. Open [Google Analytics](https://analytics.google.com/) and sign in with your Google account.
2. **Admin** (gear) → **Create** → **Property** (GA4).
3. Add a **Web** data stream:
   - Website URL = your Render site (e.g. `https://medlinks.onrender.com`)
   - Stream name = `MedLinks`
4. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
5. In this repo, edit `js/config.js`:
   ```js
   gaMeasurementId: "G-XXXXXXXXXX",
   ```
6. Commit / push and let Render redeploy the static site (or upload the updated `config.js`).
7. Visit your live site once, play a bit, then in GA4 open **Reports → Realtime** to confirm events appear (can take a minute).
8. For historical counts: **Reports → Engagement → Events**.

Optional — mark `puzzle_date` as a custom dimension in GA4 (Admin → Custom definitions) so you can break down starts/wins/losses by puzzle day more easily.

### Owner-only portal on your site

- Click the **MedLinks** title **5 times** quickly, **or** go to `/metrics.html`
- Passphrase-gated owner portal (set hash in `js/config.js`)

## Daily puzzles & archive

- One puzzle per day from `2026-09-01`.
- Unlock uses the visitor’s local calendar date.
- Archive lists only unlocked puzzles.

## Puzzle data (`gamekey.csv`)

Append dated rows to add future puzzles, then redeploy.

## Deploy on Render (Static Site)

| Field | Value |
| --- | --- |
| **Publish Directory** | `.` |
| **Build Command** | blank or `true` |
| **Environment variables** | none |

Publish at least: `index.html`, `metrics.html`, `gamekey.csv`, `css/`, `js/`, `favicon.svg`.

## License / notes

Original game content and UI. Not affiliated with the New York Times, Connections, or Wordle.
