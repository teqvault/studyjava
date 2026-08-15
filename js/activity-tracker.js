/* ════════════════════════════════════════════════════════════════
   TeqStudy — Activity Tracker
   Shared, site-wide script. Include on every page (course pages and
   the dashboard) so streaks, study time, and "continue learning"
   are backed by real data instead of placeholder numbers.

   Storage: one shared key, teqstudy_activity, holding:
     {
       days: { "2026-08-14": 1834, ... }   // active seconds per day
       lastVisited: { path, timestamp }     // for Continue Learning
     }

   Design notes:
   - "Active seconds" only accumulates while the tab is visible
     (Page Visibility API) — a page left open in a background tab
     doesn't inflate study time.
   - Flushes periodically + on visibility change + on unload, so a
     hard refresh or closed tab doesn't lose more than ~15s of data.
   - lastVisited records this page as "last" every time it loads —
     any page can be the one Continue Learning resumes to, not just
     the six lesson-tracked courses.
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var KEY = 'teqstudy_activity';
  var FLUSH_INTERVAL_MS = 15000;

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return { days: {}, lastVisited: null };
      var data = JSON.parse(raw);
      if (!data.days) data.days = {};
      return data;
    } catch (e) {
      return { days: {}, lastVisited: null };
    }
  }

  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable — fail silently */ }
  }

  // Record this page as the most recently visited, every load —
  // except the dashboard itself, since "Continue Learning" should
  // resume to actual course content, not point back at itself.
  (function recordVisit() {
    var path = location.pathname.split('/').pop() || 'index.html';
    if (path === 'index.html' && !location.pathname.includes('/pages/')) return;
    var data = load();
    data.lastVisited = { path: path, timestamp: Date.now() };
    save(data);
  })();

  // Accumulate active seconds while the tab is visible.
  var pendingSeconds = 0;
  var lastTick = Date.now();
  var tickTimer = null;

  function tick() {
    if (document.visibilityState === 'visible') {
      var now = Date.now();
      pendingSeconds += (now - lastTick) / 1000;
      lastTick = now;
    } else {
      lastTick = Date.now();
    }
  }

  function flush() {
    tick();
    if (pendingSeconds < 1) return;
    var data = load();
    var key = todayKey();
    data.days[key] = Math.round((data.days[key] || 0) + pendingSeconds);
    save(data);
    pendingSeconds = 0;
  }

  tickTimer = setInterval(function () { tick(); flush(); }, FLUSH_INTERVAL_MS);

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush();
    else lastTick = Date.now();
  });

  window.addEventListener('beforeunload', flush);
  window.addEventListener('pagehide', flush);

  // Exposed for pages that want to log deliberate focus-session time
  // (e.g. the dashboard's Pomodoro/Deep Work/Quick Review timers)
  // directly, without waiting on the visibility-based tick.
  window.TeqActivity = {
    addSeconds: function (seconds) {
      if (!seconds || seconds <= 0) return;
      var data = load();
      var key = todayKey();
      data.days[key] = Math.round((data.days[key] || 0) + seconds);
      save(data);
    },
    getData: load
  };
})();
