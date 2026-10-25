const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeButton = document.getElementById('themeToggle');
const root = document.documentElement;
const yearNode = document.getElementById('year');

if (yearNode) yearNode.textContent = new Date().getFullYear();

function closeNavigation() {
  if (!siteNav || !navToggle) return;
  siteNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
}

try {
  if (localStorage.getItem('theme') === 'light') root.classList.add('light');
} catch { /* Keep navigation and content usable when storage is unavailable. */ }

function updateThemeButton() {
  const isLight = root.classList.contains('light');
  themeButton.querySelector('span').textContent = isLight ? '◐' : '☼';
  themeButton.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

if (themeButton) {
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    root.classList.toggle('light');
    try {
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    } catch { /* Theme still works for this page visit. */ }
    updateThemeButton();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});
