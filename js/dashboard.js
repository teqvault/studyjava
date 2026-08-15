'use strict';
/* ════════════════════════════════════════════════════════════════
   TeqStudy Dashboard — real data wiring.
   Reads teqstudy_activity (site-wide visits/time, from
   activity-tracker.js) and each trackable course's own
   teqstudy_progress::<file> key. Nothing here is placeholder data —
   every number rendered is computed from what's actually in
   localStorage. Genuinely new users see honest empty/zero states,
   not sample data.
   ════════════════════════════════════════════════════════════════ */

var SESSIONS_KEY = 'teqstudy_sessions';
var WEEKLY_HOURS_GOAL = 10; // a sensible default target, not tracked user history

function fmtDateKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function loadActivity() {
  try {
    var raw = localStorage.getItem('teqstudy_activity');
    var data = raw ? JSON.parse(raw) : {};
    if (!data.days) data.days = {};
    return data;
  } catch (e) { return { days: {} }; }
}

/* ---------- Streak ---------- */
function computeStreak(days) {
  var msDay = 86400000;
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var cursor = new Date(today);
  if (!days[fmtDateKey(today)]) cursor = new Date(today.getTime() - msDay);

  var streak = 0;
  while (days[fmtDateKey(cursor)] > 0) {
    streak++;
    cursor = new Date(cursor.getTime() - msDay);
  }
  return streak;
}

/* ---------- Study time & active days (rolling 7-day window) ---------- */
function last7DayKeys() {
  var keys = [];
  var d = new Date();
  for (var i = 0; i < 7; i++) {
    keys.push(fmtDateKey(d));
    d.setDate(d.getDate() - 1);
  }
  return keys;
}

function computeWeekStats(days) {
  var keys = last7DayKeys();
  var totalSeconds = 0, activeDays = 0;
  keys.forEach(function (k) {
    var s = days[k] || 0;
    totalSeconds += s;
    if (s > 0) activeDays++;
  });
  return { hours: totalSeconds / 3600, activeDays: activeDays };
}

/* ---------- Topics mastered (only the courses that really track lessons) ---------- */
function computeTopicsMastered() {
  var manifest = window.TEQ_COURSE_MANIFEST || [];
  var doneTotal = 0, lessonTotal = 0;
  var perCourse = [];

  manifest.forEach(function (c) {
    lessonTotal += c.totalLessons;
    var doneCount = 0;
    try {
      var raw = localStorage.getItem('teqstudy_progress::' + c.file);
      if (raw) {
        var parsed = JSON.parse(raw);
        doneCount = Array.isArray(parsed.done) ? parsed.done.length : 0;
      }
    } catch (e) { /* ignore malformed entry */ }
    doneTotal += doneCount;
    perCourse.push({ file: c.file, title: c.title, done: doneCount, total: c.totalLessons });
  });

  return { doneTotal: doneTotal, lessonTotal: lessonTotal, perCourse: perCourse };
}

/* ---------- Continue Learning ---------- */
function titleForPath(path) {
  if (window.TEQ_PAGE_TITLES && window.TEQ_PAGE_TITLES[path]) return window.TEQ_PAGE_TITLES[path];
  var manifestEntry = (window.TEQ_COURSE_MANIFEST || []).find(function (c) { return c.file === path; });
  if (manifestEntry) return manifestEntry.title;
  return path.replace(/\.html$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}

function getContinueLearning(activity) {
  var lv = activity.lastVisited;
  if (!lv || !lv.path) return null;

  var manifestEntry = (window.TEQ_COURSE_MANIFEST || []).find(function (c) { return c.file === lv.path; });
  var pct = null;
  if (manifestEntry) {
    try {
      var raw = localStorage.getItem('teqstudy_progress::' + manifestEntry.file);
      if (raw) {
        var parsed = JSON.parse(raw);
        var done = Array.isArray(parsed.done) ? parsed.done.length : 0;
        pct = Math.round((done / manifestEntry.totalLessons) * 100);
      }
    } catch (e) { /* leave pct null */ }
  }

  return {
    path: lv.path,
    title: titleForPath(lv.path),
    track: manifestEntry ? manifestEntry.track : null,
    pct: pct,
    timestamp: lv.timestamp
  };
}

function timeAgo(ts) {
  var diff = Date.now() - ts;
  var mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + ' minute' + (mins === 1 ? '' : 's') + ' ago';
  var hours = Math.floor(mins / 60);
  if (hours < 24) return hours + ' hour' + (hours === 1 ? '' : 's') + ' ago';
  var days = Math.floor(hours / 24);
  return days + ' day' + (days === 1 ? '' : 's') + ' ago';
}

/* ---------- Rendering ---------- */
function ringDashArray(pct) {
  var clamped = Math.max(0, Math.min(100, pct));
  return clamped + ', 100';
}

function renderStats() {
  var activity = loadActivity();
  var week = computeWeekStats(activity.days);
  var streak = computeStreak(activity.days);
  var topics = computeTopicsMastered();

  // Topics Mastered ring
  var topicsPct = topics.lessonTotal ? Math.round((topics.doneTotal / topics.lessonTotal) * 100) : 0;
  document.getElementById('topicsRingFill').setAttribute('stroke-dasharray', ringDashArray(topicsPct));
  document.getElementById('topicsValue').textContent = topics.doneTotal;
  document.getElementById('topicsOf').textContent = '/' + topics.lessonTotal;

  // Study Time ring (against the default weekly goal)
  var studyPct = Math.round(Math.min(100, (week.hours / WEEKLY_HOURS_GOAL) * 100));
  document.getElementById('studyRingFill').setAttribute('stroke-dasharray', ringDashArray(studyPct));
  document.getElementById('studyValue').textContent = week.hours.toFixed(1);
  document.getElementById('studyOf').textContent = '/' + WEEKLY_HOURS_GOAL + ' hrs';

  // Weekly Goal ring = active days this week out of 7
  var activeDaysPct = Math.round((week.activeDays / 7) * 100);
  document.getElementById('goalRingFill').setAttribute('stroke-dasharray', ringDashArray(activeDaysPct));
  document.getElementById('goalValue').textContent = activeDaysPct + '%';
  document.getElementById('goalFooter').textContent = week.activeDays + ' of 7 days active';

  // Streak
  var streakPct = Math.min(100, (streak / 30) * 100); // visual fill scales toward a 30-day milestone
  document.getElementById('streakRingFill').setAttribute('stroke-dasharray', (streakPct * 2.827).toFixed(0) + ' 400');
  document.getElementById('streakNumber').textContent = streak;
  document.getElementById('streakSub').textContent = streak === 0
    ? 'Visit today to start a streak'
    : 'Consistency builds mastery';

  renderContinueLearning(activity);
  renderProgressList(topics.perCourse);
}

function renderContinueLearning(activity) {
  var card = document.getElementById('continueCard');
  var cl = getContinueLearning(activity);

  if (!cl) {
    card.innerHTML =
      '<div class="continue-left">' +
        '<div class="continue-badge">👋 Welcome</div>' +
        '<h2 class="continue-title">Pick something to <span>start learning</span></h2>' +
        '<p class="continue-desc">You haven\'t visited a course yet — browse the catalog to get going. Once you do, this card will pick up right where you left off.</p>' +
        '<a href="pages/courses.html" class="btn-continue">Browse Courses</a>' +
      '</div>';
    return;
  }

  var progressHtml = cl.pct !== null
    ? '<div class="progress-row"><div class="progress-bar"><div class="progress-fill" style="width:' + cl.pct + '%"></div></div><span class="progress-pct">' + cl.pct + '% complete</span></div>'
    : '';

  card.innerHTML =
    '<div class="continue-left">' +
      '<div class="continue-badge">★ Last visited</div>' +
      '<h2 class="continue-title">' + escapeHtml(cl.title) + '</h2>' +
      (cl.track ? '<p class="continue-desc">' + escapeHtml(cl.track) + '</p>' : '') +
      '<div class="continue-meta">⏱ Last studied ' + timeAgo(cl.timestamp) + '</div>' +
      progressHtml +
      '<a href="pages/' + encodeURIComponent(cl.path) + '" class="btn-continue">' +
        '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' +
        'Continue Learning' +
      '</a>' +
    '</div>';
}

function renderProgressList(perCourse) {
  var list = document.getElementById('progressList');
  var started = perCourse.filter(function (c) { return c.done > 0; });

  if (started.length === 0) {
    list.innerHTML = '<div class="progress-empty">No courses started yet — progress on the six lesson-tracked courses will show up here.</div>';
    return;
  }

  list.innerHTML = started.map(function (c) {
    var pct = Math.round((c.done / c.total) * 100);
    return '<a href="pages/' + encodeURIComponent(c.file) + '" class="progress-item" style="display:block;text-decoration:none;">' +
      '<div class="progress-item-top"><span class="progress-item-title">' + escapeHtml(c.title) + '</span>' +
      '<span class="progress-item-pct">' + c.done + '/' + c.total + '</span></div>' +
      '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
    '</a>';
  }).join('');
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}

/* ---------- Focus timers (Pomodoro / Deep Work / Quick Review) ---------- */
var TIMER_PRESETS = {
  pomodoro: { minutes: 25, name: 'Pomodoro', cls: 'pomodoro' },
  deep: { minutes: 50, name: 'Deep Work', cls: 'deep' },
  review: { minutes: 15, name: 'Quick Review', cls: 'review' }
};

var timerState = { remaining: 0, total: 0, interval: null, running: false, kind: null, startedAt: null };

function fmtClock(seconds) {
  var m = Math.floor(seconds / 60);
  var s = Math.floor(seconds % 60);
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function openTimer(kind) {
  var preset = TIMER_PRESETS[kind];
  if (!preset) return;
  clearInterval(timerState.interval);
  timerState = { remaining: preset.minutes * 60, total: preset.minutes * 60, interval: null, running: false, kind: kind, startedAt: null };

  document.getElementById('timerName').textContent = preset.name;
  var display = document.getElementById('timerDisplay');
  display.className = 'timer-display ' + preset.cls;
  display.textContent = fmtClock(timerState.remaining);
  document.getElementById('timerStartPause').textContent = 'Start';
  document.getElementById('timerModal').classList.add('open');
  startPauseTimer(); // auto-start on open, matching "quick start" intent
}

function startPauseTimer() {
  if (timerState.running) {
    clearInterval(timerState.interval);
    timerState.running = false;
    document.getElementById('timerStartPause').textContent = 'Resume';
    logElapsedSinceStart();
    return;
  }
  timerState.running = true;
  timerState.startedAt = Date.now();
  document.getElementById('timerStartPause').textContent = 'Pause';
  timerState.interval = setInterval(function () {
    timerState.remaining--;
    document.getElementById('timerDisplay').textContent = fmtClock(Math.max(0, timerState.remaining));
    if (timerState.remaining <= 0) {
      clearInterval(timerState.interval);
      timerState.running = false;
      logElapsedSinceStart();
      document.getElementById('timerName').textContent = TIMER_PRESETS[timerState.kind].name + ' — complete!';
      document.getElementById('timerStartPause').textContent = 'Done';
      renderStats();
    }
  }, 1000);
}

function logElapsedSinceStart() {
  if (!timerState.startedAt) return;
  var elapsed = Math.round((Date.now() - timerState.startedAt) / 1000);
  if (elapsed > 0 && window.TeqActivity) window.TeqActivity.addSeconds(elapsed);
  timerState.startedAt = null;
}

function closeTimer() {
  if (timerState.running) logElapsedSinceStart();
  clearInterval(timerState.interval);
  document.getElementById('timerModal').classList.remove('open');
  renderStats();
}

/* ---------- Sessions (real, user-managed, localStorage) ---------- */
function loadSessions() {
  try {
    var raw = localStorage.getItem(SESSIONS_KEY);
    var list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) { return []; }
}

function saveSessions(list) {
  try { localStorage.setItem(SESSIONS_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
}

function renderSessions() {
  var list = loadSessions().filter(function (s) { return s.datetime >= Date.now() - 3600000; }); // drop sessions more than an hour past
  list.sort(function (a, b) { return a.datetime - b.datetime; });
  saveSessions(list);

  var container = document.getElementById('sessionList');
  if (list.length === 0) {
    container.innerHTML = '<div class="session-empty">No upcoming sessions yet.</div>';
    return;
  }

  var icons = ['cyan', 'amber', 'purple'];
  container.innerHTML = list.map(function (s, i) {
    var d = new Date(s.datetime);
    var dayLabel = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    var timeLabel = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    return '<div class="session-card">' +
      '<div class="session-top-row">' +
        '<div class="session-icon ' + icons[i % 3] + '">📌</div>' +
        '<div class="session-body">' +
          '<div class="session-name">' + escapeHtml(s.title) + '</div>' +
          (s.note ? '<div class="session-sub">' + escapeHtml(s.note) + '</div>' : '') +
          '<div class="session-meta"><span class="time">' + dayLabel + ' · ' + timeLabel + '</span></div>' +
        '</div>' +
        '<button class="session-delete" data-id="' + s.id + '" title="Remove">×</button>' +
      '</div>' +
    '</div>';
  }).join('');

  container.querySelectorAll('.session-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-id');
      saveSessions(loadSessions().filter(function (s) { return String(s.id) !== id; }));
      renderSessions();
    });
  });
}

function showSessionForm() {
  document.getElementById('sessionAddBtn').style.display = 'none';
  document.getElementById('sessionForm').style.display = 'flex';
}

function hideSessionForm() {
  document.getElementById('sessionAddBtn').style.display = 'block';
  document.getElementById('sessionForm').style.display = 'none';
  document.getElementById('sessionTitleInput').value = '';
  document.getElementById('sessionNoteInput').value = '';
  document.getElementById('sessionDateInput').value = '';
  document.getElementById('sessionTimeInput').value = '';
}

function saveNewSession() {
  var title = document.getElementById('sessionTitleInput').value.trim();
  var note = document.getElementById('sessionNoteInput').value.trim();
  var dateVal = document.getElementById('sessionDateInput').value;
  var timeVal = document.getElementById('sessionTimeInput').value;
  if (!title || !dateVal || !timeVal) return;

  var dt = new Date(dateVal + 'T' + timeVal);
  if (isNaN(dt.getTime())) return;

  var list = loadSessions();
  list.push({ id: Date.now(), title: title, note: note, datetime: dt.getTime() });
  saveSessions(list);
  hideSessionForm();
  renderSessions();
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', function () {
  renderStats();
  renderSessions();

  document.querySelectorAll('.qs-card').forEach(function (btn) {
    btn.addEventListener('click', function () { openTimer(btn.getAttribute('data-timer')); });
  });
  document.getElementById('timerClose').addEventListener('click', closeTimer);
  document.getElementById('timerStartPause').addEventListener('click', startPauseTimer);
  document.getElementById('timerModal').addEventListener('click', function (e) {
    if (e.target.id === 'timerModal') closeTimer();
  });

  document.getElementById('sessionAddBtn').addEventListener('click', showSessionForm);
  document.getElementById('sessionCancelBtn').addEventListener('click', hideSessionForm);
  document.getElementById('sessionSaveBtn').addEventListener('click', saveNewSession);

  // Refresh stats periodically so a long-open dashboard tab stays current
  // (e.g. streak ticking over at midnight, or the flush interval landing).
  setInterval(renderStats, 30000);
});
