const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const service = link.dataset.service;
    const select = document.querySelector('select[name="service"]');
    if (!select || !service) return;
    const option = [...select.options].find((item) => item.textContent.trim() === service.trim());
    if (option) select.value = option.value;
  });
});

document.querySelector('#inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const contact = String(form.get('contact') || '').trim();
  const service = String(form.get('service') || '').trim();
  const details = String(form.get('details') || '').trim();

  const message = [
    'Hello Colora Studio, I would like to discuss a project.',
    `Name / Business: ${name}`,
    `Contact: ${contact}`,
    `Service: ${service}`,
    `Project details: ${details}`
  ].join('\n');

  window.open(`https://wa.me/250781882554?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
