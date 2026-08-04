/* TeqStudy Godot Course — shared interaction layer */
(function () {
  "use strict";

  const STORAGE_KEY = "teqstudy-godot-progress";

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function trackId() {
    const path = location.pathname;
    if (path.includes("/2d/")) return "gridfall-2d";
    if (path.includes("/3d/")) return "glitchfall-3d";
    return null;
  }

  function lessonSlug() {
    const m = location.pathname.match(/\/([^/]+)\.html$/);
    return m ? m[1] : null;
  }

  /* ---------- Copy buttons ---------- */
  function enhanceCodeBlocks() {
    document.querySelectorAll(".code").forEach((block) => {
      if (block.querySelector(".copy-btn")) return;
      const pre = block.querySelector("pre");
      if (!pre) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.setAttribute("aria-label", "Copy code");
      btn.textContent = "Copy";

      btn.addEventListener("click", async () => {
        const text = pre.innerText.replace(/\n$/, "");
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = "Copied";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 1600);
        } catch {
          // Fallback for older browsers / non-secure contexts
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          btn.textContent = "Copied";
          setTimeout(() => (btn.textContent = "Copy"), 1600);
        }
      });

      const head = block.querySelector(".code-head");
      if (head) {
        head.appendChild(btn);
      } else {
        btn.classList.add("copy-btn-float");
        block.appendChild(btn);
      }
    });
  }

  /* ---------- Keyboard navigation ---------- */
  function setupKeyboardNav() {
    const prev = document.querySelector(".lesson-nav a:not(.next):not(.disabled)");
    const next = document.querySelector(".lesson-nav a.next:not(.disabled)");

    document.addEventListener("keydown", (e) => {
      // Ignore when typing in inputs
      if (e.target.matches("input, textarea, select, [contenteditable]")) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "ArrowLeft" && prev) {
        e.preventDefault();
        location.href = prev.href;
      } else if (e.key === "ArrowRight" && next) {
        e.preventDefault();
        // Mark current lesson complete when advancing
        markCurrentComplete();
        location.href = next.href;
      }
    });
  }

  /* ---------- Progress ---------- */
  function markCurrentComplete() {
    const track = trackId();
    const slug = lessonSlug();
    if (!track || !slug || slug.includes("gridfall") || slug.includes("glitchfall") || slug === "godot-course") {
      return;
    }
    const data = loadProgress();
    if (!data[track]) data[track] = {};
    data[track][slug] = true;
    saveProgress(data);
  }

  function markOnNextClick() {
    document.querySelectorAll(".lesson-nav a.next").forEach((a) => {
      a.addEventListener("click", () => markCurrentComplete());
    });
  }

  /* ---------- Syllabus progress dots ---------- */
  function enhanceSyllabus() {
    const track = trackId();
    if (!track) return;
    const data = loadProgress()[track] || {};
    let done = 0;
    let total = 0;

    document.querySelectorAll(".lessons a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const m = href.match(/([^/]+)\.html$/);
      if (!m) return;
      const slug = m[1];
      total += 1;
      if (data[slug]) {
        done += 1;
        a.classList.add("done");
        if (!a.querySelector(".done-mark")) {
          const mark = document.createElement("span");
          mark.className = "done-mark";
          mark.setAttribute("aria-hidden", "true");
          mark.textContent = "✓";
          a.appendChild(mark);
        }
      }
    });

    // Progress summary under hero if present
    const hero = document.querySelector(".hero");
    if (hero && total > 0) {
      let bar = document.querySelector(".progress-summary");
      if (!bar) {
        bar = document.createElement("div");
        bar.className = "progress-summary";
        hero.appendChild(bar);
      }
      const pct = Math.round((done / total) * 100);
      bar.innerHTML =
        `<div class="progress-label"><span>${done} / ${total} lessons</span><span>${pct}%</span></div>` +
        `<div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`;
    }
  }

  /* ---------- Lesson topbar progress ---------- */
  function enhanceLessonTopbar() {
    const right = document.querySelector(".topbar .right");
    if (!right) return;
    const match = right.textContent.match(/Lesson\s+(\d+)\s*\/\s*(\d+)/i);
    if (!match) return;
    const current = parseInt(match[1], 10);
    const total = parseInt(match[2], 10);
    if (!total) return;

    const track = trackId();
    const data = (loadProgress()[track] || {});
    // Approximate completed = current-1 if we haven't stored yet
    let done = Object.keys(data).length;
    if (done < current - 1) done = current - 1;

    const pct = Math.min(100, Math.round((current / total) * 100));
    const bar = document.createElement("div");
    bar.className = "topbar-progress";
    bar.innerHTML = `<div class="topbar-progress-fill" style="width:${pct}%"></div>`;
    document.querySelector(".topbar")?.appendChild(bar);
  }

  /* ---------- Keyboard hint ---------- */
  function addNavHint() {
    const nav = document.querySelector(".lesson-nav");
    if (!nav) return;
    if (nav.querySelector(".nav-hint")) return;
    const hint = document.createElement("p");
    hint.className = "nav-hint";
    hint.textContent = "Tip: ← → arrow keys also navigate lessons";
    nav.parentNode.insertBefore(hint, nav.nextSibling);
  }

  /* ---------- Last viewed ---------- */
  function recordView() {
    const track = trackId();
    const slug = lessonSlug();
    if (!track || !slug) return;
    if (slug.includes("gridfall") || slug.includes("glitchfall") || slug === "godot-course") return;
    const data = loadProgress();
    data._last = data._last || {};
    data._last[track] = slug;
    saveProgress(data);
  }

  function highlightLastViewed() {
    const track = trackId();
    if (!track) return;
    const data = loadProgress();
    const last = (data._last || {})[track];
    if (!last) return;
    document.querySelectorAll(".lessons a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.includes(last + ".html")) {
        a.classList.add("current");
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    enhanceCodeBlocks();
    setupKeyboardNav();
    markOnNextClick();
    recordView();
    enhanceSyllabus();
    highlightLastViewed();
    enhanceLessonTopbar();
    addNavHint();
  });
})();
