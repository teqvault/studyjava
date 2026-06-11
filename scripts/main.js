// Java/scripts/main.js

window.done = new Set([0]);
window.current = 0;

// Auto-detect total lessons on the page
function getTotalLessons() {
    return document.querySelectorAll('.lesson').length || 1;
}

/**
 * Universal Navigation
 * @param {number} idx - Index of the lesson to show
 */
window.go = function(idx) {
    const active = document.querySelector('.lesson.active');
    if (active) active.classList.remove('active');

    const next = document.getElementById('L' + idx) || document.getElementById('lesson-' + idx);
    if (next) {
        next.classList.add('active');
        window.current = idx;
        window.done.add(idx);
    }

    // Update Sidebar Navigation
    const btns = document.querySelectorAll('.nav-btn, .nav-item');
    btns.forEach((b, i) => {
        b.classList.remove('active');
        if (window.done.has(i) && i !== idx) b.classList.add('done');
    });
    if (btns[idx]) btns[idx].classList.add('active');

    // Sync Mobile Nav
    const sel = document.getElementById('mobileLessonSelect');
    if (sel) sel.value = idx;

    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Universal Progress Tracker
 */
window.updateProgress = function() {
    const total = getTotalLessons();
    let pct = Math.round((window.done.size / total) * 100);
    if (isNaN(pct) || pct > 100) pct = Math.min(pct, 100);

    const fill = document.getElementById('pFill')
               || document.getElementById('progressFill')
               || document.getElementById('opFill');
    const txt  = document.getElementById('pPct')
               || document.getElementById('progressPct')
               || document.getElementById('opPct');

    if (fill) fill.style.width = pct + '%';
    if (txt)  txt.textContent  = pct + '%';
};

/**
 * Universal Quiz Handler
 * @param {HTMLElement} btn   - The clicked button
 * @param {boolean}     correct - Whether the answer is correct
 * @param {string}      [expl]  - Optional explanation string
 */
window.Q = function(btn, correct, expl) {
    const block = btn.closest('.quiz') || btn.closest('.quiz-block') || btn.closest('.quiz-box');
    if (!block) return;

    const opts = block.querySelectorAll('.quiz-opt, .quiz-option');
    opts.forEach(b => {
        b.disabled = true;
        const oc = b.getAttribute('onclick') || '';
        if (oc.match(/Q\s*\(\s*this\s*,\s*true/)) b.classList.add('correct');
    });
    if (!correct) btn.classList.add('wrong');

    // Find feedback element — search inside the block first, then by lesson ID
    let fb = block.querySelector('.quiz-fb, .quiz-feedback, .quiz-fb');
    if (!fb) {
        const lessonEl = btn.closest('[id]');
        if (lessonEl) {
            const lessonId = lessonEl.id.replace(/^L/, '').replace(/^lesson-/, '');
            fb = document.getElementById('qf' + lessonId)
              || document.getElementById('qfeedback-' + lessonId);
        }
    }

    if (fb) {
        fb.className = fb.className.replace(/\bshow\b|\bok\b|\bbad\b/g, '').trim();
        fb.classList.add('show', correct ? 'ok' : 'bad');
        fb.textContent = (correct ? '✓ Correct! ' : '✗ Not quite. ') + (expl || '');
    }
};

// Auto-initialize on load
window.addEventListener('load', () => {
    updateProgress();
});
