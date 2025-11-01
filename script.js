// // Smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// Smooth scroll with easing
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 60; // 60 = navbar高度
    const distance = targetY - startY;
    const duration = 700; // 毫秒
    let startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  });
});


// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  root.classList.add('light');
  themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
  root.classList.toggle('light');
  const light = root.classList.contains('light');
  themeBtn.textContent = light ? '☀️' : '🌙';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});


let lastScroll = 0;
const nav = document.querySelector('.site-nav');

// window.addEventListener('scroll', () => {
//   const current = window.scrollY;
//   if (current > lastScroll && current > 100) {
//     nav.style.transform = 'translateY(-100%)';
//   } else {
//     nav.style.transform = 'translateY(0)';
//   }
//   lastScroll = current;
// });


