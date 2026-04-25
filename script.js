/* ══════════════════════════════════════
   SECHU — Pastelería & Minipastelería
   script.js
══════════════════════════════════════ */

// ── NAV: efecto sombra al hacer scroll ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── REVEAL: animación de aparición al hacer scroll ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ── FORMULARIO: validación y envío ──
function submitForm() {
  const name    = document.getElementById('fname').value.trim();
  const type    = document.getElementById('ftype').value;

  if (!name || !type) {
    alert('Por favor completá al menos tu nombre y el tipo de pedido.');
    return;
  }

  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// ── MENÚ MOBILE: toggle ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.style.display = '';
  } else {
    links.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: rgba(253,248,242,0.98);
      padding: 2rem 5%;
      gap: 1.5rem;
      border-bottom: 1px solid rgba(212,135,106,0.15);
      backdrop-filter: blur(12px);
      z-index: 99;
    `;
  }
}

// Cerrar el menú mobile al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.style.display = '';
  });
});
