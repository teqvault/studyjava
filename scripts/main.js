// Java/scripts/main.js

window.done = new Set([0]);
window.current = 0;

/**
 * Universal Navigation
 * @param {number} idx - Index of the lesson to show
 * @param {number} total - Total lessons on the current page
 */
window.go = function(idx, total) {
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
    
    updateProgress(total);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Universal Progress Tracker
 */
window.updateProgress = function(total) {
    const pct = Math.round((window.done.size / total) * 100);
    const fill = document.getElementById('pFill') || document.getElementById('progressFill');
    const txt = document.getElementById('pPct') || document.getElementById('progressPct');
    
    if (fill) fill.style.width = pct + '%';
    if (txt) txt.textContent = pct + '%';
};

/**
 * Universal Quiz Handler
 * @param {HTMLElement} btn - The clicked button
 * @param {boolean} correct - Whether the answer is correct
 * @param {object} explObj - Object containing feedback strings
 */
window.Q = function(btn, correct, explObj) {
    const block = btn.closest('.quiz') || btn.closest('.quiz-block');
    const opts = block.querySelectorAll('.quiz-opt, .quiz-option');
    
    opts.forEach(b => {
        b.disabled = true;
        // Optional: highlight correct answer
        if(b.getAttribute('onclick') && b.getAttribute('onclick').includes('true')) {
            b.classList.add('correct');
        }
    });
    
    if (!correct) btn.classList.add('wrong');
    
    // Find lesson ID
    const lessonEl = btn.closest('.lesson');
    const lessonId = lessonEl ? lessonEl.id.replace('L', '').replace('lesson-', '') : '0';
    
    const fb = document.getElementById('qf' + lessonId) || document.getElementById('qfeedback-' + lessonId);
    if (fb) {
        fb.className = 'quiz-fb show ' + (correct ? 'ok' : 'bad');
        fb.textContent = (correct ? '✓ Correct! ' : '✗ Not quite. ') + (explObj ? explObj[lessonId] : '');
    }
};