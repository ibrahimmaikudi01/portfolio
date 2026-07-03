const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    const bar = entry.target.querySelector('.skill-bar');
    if (bar) {
      bar.style.transform = `scaleX(${bar.dataset.width})`;
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const bar = entry.target.querySelector('.skill-bar');
    if (bar) {
      setTimeout(() => {
        bar.style.transform = `scaleX(${bar.dataset.width})`;
      }, 200);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-card').forEach(el => skillObserver.observe(el));

const allNavLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    allNavLinks.forEach(a => a.style.color = '');
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.style.color = 'var(--cyan)';
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

window.addEventListener('load', () => {
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });
});
