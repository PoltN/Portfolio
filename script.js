const translations = {
  fr: {
    nav: { projects: 'Projets', about: 'À propos', contact: 'Contact', available: 'Disponible sept. 2026' },
    hero: {
      tag: 'Stratégie · Product · Design · Code',
      h1a: 'EMILIO', h1b: 'CAGNOT.',
      sub: "Je pilote des projets digitaux de la vision à la livraison — stratégie, UX, code. HETIC, 21 ans — projets réels pour Betclic, Orange Business, Ball'N Connect, Enedis.",
      cta1: 'Voir les projets', cta2: 'Télécharger le CV',
    },
    stats: ['Projets clients réels', '1ère mission freelance décrochée seul', 'HETIC Grande École', 'Bilingue, 7 ans à Barcelone'],
    projectsLabel: 'Projets sélectionnés', projectsLink: 'Tout voir →',
    xpLabel: 'Expériences', skillsLabel: 'Ce que je maîtrise',
    ctaH: 'Travaillons ensemble.',
    ctaP: 'Je recherche une alternance chef de projet digital / Product Owner à partir de septembre 2026. Tech, culture, musique, mode, médias.',
    ctaBtn1: 'Me contacter', ctaBtn2: 'Télécharger le CV',
    footerCopy: '© 2026 Emilio Cagnot',
    // About page
    aboutTitle: 'À propos',
    aboutSub: 'Profil hybride Business × Tech × Product × UX — à l\'intersection entre la vision, la stratégie et l\'exécution.',
    aboutFormation: 'Formation', aboutValues: 'Ce qui me définit',
    contactMe: 'Me contacter', downloadCV: 'Télécharger le CV',
    // Projects page
    projectsTitle: 'Projets',
    projectsIntro: "À HETIC, la pédagogie repose sur des projets concrets, menés en conditions réelles — parfois directement avec de vrais clients. Ce portfolio regroupe 12 projets réalisés sur 3 ans : appels d'offres en conditions agence, missions clients directes, créations solo de A à Z. Une approche hybride qui mêle stratégie, design et code.",
    filterAll: 'Tous', filterUX: 'UX / Design', filterStrategy: 'Stratégie', filterDev: 'Dev', filterBranding: 'Branding',
    tier1Label: 'Projets phares', tier2Label: 'Projets solides', tier3Label: 'Projets complémentaires',
    // Contact page
    contactTitle: 'Contact',
    contactSub: 'Une opportunité, une collaboration, une question — je réponds en moins de 24h.',
  },
  en: {
    nav: { projects: 'Projects', about: 'About', contact: 'Contact', available: 'Available Sept. 2026' },
    hero: {
      tag: 'Strategy · Product · Design · Code',
      h1a: 'EMILIO', h1b: 'CAGNOT.',
      sub: "I drive digital projects from vision to delivery — strategy, UX, code. HETIC, 21 y/o — real projects for Betclic, Orange Business, Ball'N Connect, Enedis.",
      cta1: 'View projects', cta2: 'Download CV',
    },
    stats: ['Real client projects', 'First freelance landed solo at 19', 'HETIC Grande École', 'Bilingual, 7 yrs in Barcelona'],
    projectsLabel: 'Selected projects', projectsLink: 'View all →',
    xpLabel: 'Experience', skillsLabel: 'What I master',
    ctaH: "Let's work together.",
    ctaP: 'Looking for a digital PM / Product Owner apprenticeship from September 2026. Tech, culture, music, fashion, media.',
    ctaBtn1: 'Get in touch', ctaBtn2: 'Download CV',
    footerCopy: '© 2026 Emilio Cagnot',
    // About page
    aboutTitle: 'About',
    aboutSub: 'Hybrid Business × Tech × Product × UX profile — at the intersection of vision, strategy and execution.',
    aboutFormation: 'Education', aboutValues: 'What defines me',
    contactMe: 'Get in touch', downloadCV: 'Download CV',
    // Projects page
    projectsTitle: 'Projects',
    projectsIntro: 'At HETIC, the pedagogy is built around real-world projects — sometimes directly with actual clients. This portfolio brings together 12 projects over 3 years: agency-style pitches, direct client missions, and solo creations from scratch. A hybrid approach blending strategy, design and code.',
    filterAll: 'All', filterUX: 'UX / Design', filterStrategy: 'Strategy', filterDev: 'Dev', filterBranding: 'Branding',
    tier1Label: 'Featured projects', tier2Label: 'Key projects', tier3Label: 'Additional projects',
    // Contact page
    contactTitle: 'Contact',
    contactSub: 'An opportunity, a collaboration, a question — I reply within 24h.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(l) {
  currentLang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const T = translations[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = el.dataset.i18n.split('.').reduce((o, k) => o?.[k], T);
    if (val !== undefined) el.textContent = val;
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}

function initCursor() {
  if (window.innerWidth < 768) return;
  const cursor = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if (!cursor || !ring) return;
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button, .project-card, .stat, .value-card, .tier2-card, .tier3-item, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

function initTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.endsWith('.pdf')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.18s ease';
      setTimeout(() => { window.location.href = href; }, 180);
    });
  });
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.28s ease';
    document.body.style.opacity = '1';
  });
}

function initNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  initReveal();
  initCursor();
  initTransitions();
  initNav();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
