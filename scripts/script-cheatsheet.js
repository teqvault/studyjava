// script-cheatsheet.js
const totalLessons = 5; // Updated for the 5 sections of the cheatsheet
const completed = new Set();
let currentLesson = 0;

function showLesson(idx) {
  // Hide all sections and deactivate sidebar items
  document.querySelectorAll('.lesson').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  // Activate selected section and sidebar item
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
  
  // Add checkmarks to the sidebar for viewed sections
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

// Initialize the first section
document.addEventListener("DOMContentLoaded", () => {
    completed.add(0);
    updateProgress();
});