/* ════════════════════════════════════════════════════════════════
   TeqStudy — Course Manifest
   Real, verified lesson counts for every course that implements
   localStorage progress tracking (teqstudy_progress::<file>).

   This list is intentionally NOT "every course on the site" — most
   of TeqStudy's 50+ course pages don't yet persist lesson-level
   progress, so counting them would mean fabricating numbers. The
   dashboard's "Topics Mastered" stat is honestly scoped to what's
   actually trackable today. See README note in the dashboard JS
   for how this expands as more courses add tracking.
   ════════════════════════════════════════════════════════════════ */

window.TEQ_COURSE_MANIFEST = [
  { file: 'raspberry-pi-course.html',      title: 'Raspberry Pi for Complete Beginners', track: 'Embedded & IoT',   totalLessons: 12 },
  { file: 'plc-programming-course.html',   title: 'PLC Programming for Complete Beginners', track: 'Embedded & IoT', totalLessons: 13 },
  { file: 'hv-electrician-fundamentals/index.html', title: 'High Voltage Electrician Fundamentals', track: 'Embedded & IoT', totalLessons: 9 },
  { file: 'high-voltage-engineering-course.html', title: 'High Voltage Engineering for Beginners', track: 'Embedded & IoT', totalLessons: 12 },
  { file: 'networking-course.html',        title: 'Networking: Beginner to Job-Ready',   track: 'Networking',       totalLessons: 15 },
  { file: 'unity-course.html',             title: 'Unity Mobile Game Dev',               track: 'Game Development', totalLessons: 17 },
  { file: 'android-studio-course.html',    title: 'Android Studio: 2D Side-Scroller',    track: 'Game Development', totalLessons: 15 },
  { file: 'trading-investing-course.html', title: 'Trading & Investing for Complete Beginners', track: 'Trading & Investing', totalLessons: 12 }
];

/* Display titles for pages that don't have lesson-level tracking,
   so "Continue Learning" can still show a real, readable name
   instead of a raw filename when it resumes to one of these. */
window.TEQ_PAGE_TITLES = {
  'index.html': 'Dashboard',
  'terminal-course.html': 'Terminal Mastery: Bash & PowerShell',
  'terminal-cheatsheet.html': 'Terminal Mastery — Quick Reference',
  'CLion_GUI_Development_Course.html': 'CLion GUI Development',
  'ide-setup-environments-course.html': 'IDE Setup & Environments',
  'docker-course.html': 'Docker for Beginners',
  'docker-intermediate-course.html': 'Docker Intermediate',
  'kubernetes-beginner-course.html': 'Kubernetes for Beginners',
  'kubernetes-intermediate-course.html': 'Kubernetes Intermediate',
  'self-hosted-backend-course.html': 'Self-Hosted Backends'
  /* Falls back to a title-cased filename for anything not listed here. */
};
