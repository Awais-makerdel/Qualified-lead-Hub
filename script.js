// script.js
// Small interactions: mobile nav toggle, accordion, form fake-submit, year.

document.addEventListener('DOMContentLoaded', function () {
  // mobile nav
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle && navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // accordion
  const accToggles = document.querySelectorAll('.acc-toggle');
  accToggles.forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const expanded = panel.style.display === 'block';
      // close others
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.acc-toggle .acc-icon').forEach(i => i.textContent = '+');
      if (!expanded) {
        panel.style.display = 'block';
        this.querySelector('.acc-icon').textContent = '−';
      } else {
        panel.style.display = 'none';
        this.querySelector('.acc-icon').textContent = '+';
      }
    });
  });

  // smooth anchor scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        navLinks.classList.remove('show');
      }
    });
  });

  // fake contact form submit
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const sendBtn = document.getElementById('sendBtn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sendBtn.disabled = true;
      sendBtn.textContent = 'Sending...';
      status.textContent = '';
      // fake network delay
      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Audit Request';
        status.textContent = 'Thanks! Your audit request has been received. I will reply within 24 hours.';
        form.reset();
      }, 900);
    });
  }

  // set year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
