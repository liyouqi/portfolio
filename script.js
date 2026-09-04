const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeButton = document.getElementById('themeToggle');
const root = document.documentElement;
const yearNode = document.getElementById('year');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

if (localStorage.getItem('theme') === 'light') root.classList.add('light');

function updateThemeButton() {
  const isLight = root.classList.contains('light');
  themeButton.querySelector('span').textContent = isLight ? '◐' : '☼';
  themeButton.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

if (themeButton) {
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateThemeButton();
  });
}

const revealItems = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 },
  );
  revealItems.forEach((element) => observer.observe(element));
}
