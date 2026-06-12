// script.js
const totalLessons = 9;
const completed = new Set();
let currentLesson = 0;

function showLesson(idx) {
  // Hide all lessons and deactivate sidebar items
  document.querySelectorAll('.lesson').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  // Activate selected lesson and sidebar item
  document.getElementById('lesson-' + idx).classList.add('active');
  document.querySelectorAll('.nav-item')[idx].classList.add('active');
  
  currentLesson = idx;
  completed.add(idx);
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
  const pct = Math.round((completed.size / totalLessons) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPct').textContent = pct + '%';
  
  // Add checkmarks to the sidebar for completed lessons
  document.querySelectorAll('.nav-item').forEach((n, i) => {
    let check = n.querySelector('.nav-check');
    if (completed.has(i)) {
      if (!check) {
        check = document.createElement('span');
        check.className = 'nav-check';
        check.textContent = '✓';
        n.appendChild(check);
      }
    }
  });
}

function checkQuiz(btn, isCorrect) {
  const block = btn.closest('.quiz-block');
  const options = block.querySelectorAll('.quiz-option');
  const lessonEl = btn.closest('.lesson');
  const lessonId = lessonEl.id.split('-')[1];
  const feedback = document.getElementById('qfeedback-' + lessonId);

  // Disable all buttons once an answer is chosen
  options.forEach(o => o.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    feedback.textContent = '🎉 Correct! Great job!';
    feedback.className = 'quiz-feedback show ok';
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '❌ Not quite — check the lesson notes and try again!';
    feedback.className = 'quiz-feedback show bad';
    // Highlight the correct answer for learning purposes
    options.forEach(o => {
      if (o.getAttribute('onclick').includes('true')) {
        o.classList.add('correct');
      }
    });
  }
}

// Initialize the first lesson
document.addEventListener("DOMContentLoaded", () => {
    completed.add(0);
    updateProgress();
});