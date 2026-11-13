// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// Dark / light theme (remembered in localStorage when available)
const root = document.documentElement;
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme', 'dark');
} catch (e) {}
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Scroll-reveal + animated score bars
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      const bar = entry.target.querySelector('.bar');
      if (bar) bar.firstElementChild.style.width = bar.dataset.value + '%';
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Highlight active nav link
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a[href^="#"]');
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => spy.observe(s));

// Contact form: validates, then opens the visitor's email app with a prefilled message
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  note.classList.remove('error');
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    note.classList.add('error');
    note.textContent = 'Please fill in your name, a valid email and a message.';
    return;
  }
  const subject = encodeURIComponent('Portfolio enquiry from ' + name);
  const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
  window.location.href = 'mailto:akhilamathassery919@gmail.com?subject=' + subject + '&body=' + body;
  note.textContent = 'Opening your email app…';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
