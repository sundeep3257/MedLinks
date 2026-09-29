/**
 * MedLinks metrics via Google Analytics 4 (static-site friendly).
 * No self-hosted web service required — events go to your GA4 property.
 */
(function (global) {
  "use strict";

  const STARTED_KEY = "medlinks-metrics-started";
  let ready = false;

  function config() {
    return global.MEDLINKS_CONFIG || {};
  }

  function measurementId() {
    return String(config().gaMeasurementId || "").trim();
  }

  function ensureGtag() {
    const id = measurementId();
    if (!id || ready) return !!id;
    if (global.gtag && global.dataLayer) {
      ready = true;
      return true;
    }

    global.dataLayer = global.dataLayer || [];
    function gtag() {
      global.dataLayer.push(arguments);
    }
    global.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id, {
      anonymize_ip: true,
      send_page_view: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(script);
    ready = true;
    return true;
  }

  function send(eventName, params) {
    if (!ensureGtag()) return;
    try {
      global.gtag("event", eventName, params || {});
    } catch {
      /* ignore */
    }
  }

  function alreadyStarted(puzzleDate) {
    try {
      const raw = sessionStorage.getItem(STARTED_KEY);
      const map = raw ? JSON.parse(raw) : {};
      return !!map[puzzleDate];
    } catch {
      return false;
    }
  }

  function markStarted(puzzleDate) {
    try {
      const raw = sessionStorage.getItem(STARTED_KEY);
      const map = raw ? JSON.parse(raw) : {};
      map[puzzleDate] = true;
      sessionStorage.setItem(STARTED_KEY, JSON.stringify(map));
    } catch {
      /* ignore */
    }
  }

  const MedLinksAnalytics = {
    pageView: function () {
      send("page_view", {
        page_title: document.title,
        page_location: String(location.href),
      });
      send("medlinks_page_view", {
        page_path: location.pathname || "/",
      });
    },
    puzzleStart: function (puzzleDate) {
      if (!puzzleDate || alreadyStarted(puzzleDate)) return;
      markStarted(puzzleDate);
      send("medlinks_puzzle_start", {
        puzzle_date: puzzleDate,
      });
    },
    puzzleWin: function (puzzleDate) {
      if (!puzzleDate) return;
      send("medlinks_puzzle_win", {
        puzzle_date: puzzleDate,
      });
    },
    puzzleLoss: function (puzzleDate) {
      if (!puzzleDate) return;
      send("medlinks_puzzle_loss", {
        puzzle_date: puzzleDate,
      });
    },
  };

  global.MedLinksAnalytics = MedLinksAnalytics;
})(typeof window !== "undefined" ? window : globalThis);
