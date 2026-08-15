/* ===== State ===== */
let currentModule = 0;
let completed = JSON.parse(localStorage.getItem('hv-course-completed') || '[]');

/* ===== DOM Refs ===== */
const contentEl = document.getElementById('content');
const topbarTitle = document.getElementById('topbarTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const completeBtn = document.getElementById('completeBtn');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const sidebarClose = document.getElementById('sidebarClose');
const themeToggle = document.getElementById('themeToggle');
const resetBtn = document.getElementById('resetProgress');
const navItems = document.querySelectorAll('.nav-item');

/* ===== Theme ===== */
function initTheme() {
  const saved = localStorage.getItem('hv-course-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : '');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
}
themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('hv-course-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('hv-course-theme', 'light');
  }
});

/* ===== Progress ===== */
function updateProgress() {
  const pct = Math.round((completed.length / modules.length) * 100);
  progressFill.style.width = pct + '%';
  progressPercent.textContent = pct + '%';

  navItems.forEach((item, i) => {
    item.classList.toggle('completed', completed.includes(i));
  });
}

function saveProgress() {
  localStorage.setItem('hv-course-completed', JSON.stringify(completed));
  updateProgress();
}

/* ===== Render Module ===== */
function renderModule(index) {
  const mod = modules[index];
  currentModule = index;

  // Update nav
  navItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

  topbarTitle.textContent = `Module ${mod.number} — ${mod.title}`;

  // Build content
  let html = `
    <div class="module-header">
      <div class="module-number">MODULE ${mod.number}</div>
      <h1 class="module-title">${mod.title}</h1>
      <p class="module-intro">${mod.intro}</p>
    </div>

    <div class="objectives">
      <h3>Learning Objectives</h3>
      <ul>
        ${mod.objectives.map(o => `<li>${o}</li>`).join('')}
      </ul>
    </div>

    ${mod.content}
  `;

  // Review questions
  if (mod.questions && mod.questions.length) {
    html += `
      <div class="review">
        <h3>Review Questions</h3>
        ${mod.questions.map((q, qi) => `
          <div class="question" data-q="${qi}">
            <div class="question-text">${qi + 1}. ${q.q}</div>
            <div class="question-options">
              ${q.options.map((opt, oi) => `
                <label class="option" data-opt="${oi}">
                  <input type="radio" name="q${qi}" value="${oi}" />
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
            <div class="feedback" id="feedback-${qi}"></div>
          </div>
        `).join('')}
      </div>
    `;
  }

  contentEl.innerHTML = html;

  // Attach question listeners
  if (mod.questions) {
    mod.questions.forEach((q, qi) => {
      const options = contentEl.querySelectorAll(`.question[data-q="${qi}"] .option`);
      options.forEach(opt => {
        opt.addEventListener('click', () => {
          const selected = parseInt(opt.dataset.opt);
          const feedback = document.getElementById(`feedback-${qi}`);

          // Clear previous
          options.forEach(o => {
            o.classList.remove('selected', 'correct', 'incorrect');
          });

          opt.classList.add('selected');
          const input = opt.querySelector('input');
          if (input) input.checked = true;

          if (selected === q.answer) {
            opt.classList.add('correct');
            feedback.textContent = 'Correct.';
            feedback.className = 'feedback show correct';
          } else {
            opt.classList.add('incorrect');
            options[q.answer].classList.add('correct');
            feedback.textContent = 'Incorrect. The correct answer is highlighted.';
            feedback.className = 'feedback show incorrect';
          }
        });
      });
    });
  }

  // Update buttons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === modules.length - 1;

  const isComplete = completed.includes(index);
  completeBtn.textContent = isComplete ? 'Completed ✓' : 'Mark Complete';
  completeBtn.classList.toggle('completed', isComplete);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile sidebar
  sidebar.classList.remove('open');
  document.querySelector('.overlay')?.classList.remove('show');
}

/* ===== Navigation ===== */
prevBtn.addEventListener('click', () => {
  if (currentModule > 0) renderModule(currentModule - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentModule < modules.length - 1) renderModule(currentModule + 1);
});

completeBtn.addEventListener('click', () => {
  if (!completed.includes(currentModule)) {
    completed.push(currentModule);
    saveProgress();
  }
  completeBtn.textContent = 'Completed ✓';
  completeBtn.classList.add('completed');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const idx = parseInt(item.dataset.module);
    renderModule(idx);
  });
});

/* ===== Mobile Menu ===== */
function createOverlay() {
  let overlay = document.querySelector('.overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
  return overlay;
}

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
  createOverlay().classList.add('show');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
  document.querySelector('.overlay')?.classList.remove('show');
});

/* ===== Reset ===== */
resetBtn.addEventListener('click', () => {
  if (confirm('Reset all course progress?')) {
    completed = [];
    saveProgress();
    renderModule(currentModule);
  }
});

/* ===== Init ===== */
initTheme();
updateProgress();
renderModule(0);
