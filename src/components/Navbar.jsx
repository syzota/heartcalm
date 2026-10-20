import { useEffect, useState } from 'react';
import { navigation } from '../data/productData.js';
import { externalLinks } from '../data/links.js';

const sections = ['home', ...navigation.map((item) => item.id), 'newsletter'];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const header = document.querySelector('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const y = window.scrollY + element.getBoundingClientRect().top - headerHeight - 10;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: y, behavior: reducedMotion ? 'auto' : 'smooth' });
  window.history.replaceState(null, '', `#${id}`);
}

export { scrollToSection };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length) setActive(intersecting[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const target = document.getElementById(id);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  function handleNavigate(id) {
    setOpen(false);
    setActive(id);
    scrollToSection(id);
  }

  return (
    <header className="site-header">
      <div className="top-ribbon" aria-label="Informasi kampanye">YOUR DAILY DOSE OF SKIN COMFORT ✳ YOUR DAILY DOSE OF SKIN COMFORT ✳ YOUR DAILY DOSE OF SKIN COMFORT</div>
      <div className="container header-inner">
        <button type="button" className="wordmark" onClick={() => handleNavigate('home')} aria-label="Kembali ke bagian atas">HEARTCALM <i className="bi bi-heart-fill" aria-hidden="true" /></button>
        <nav className={`header-nav ${open ? 'header-nav--open' : ''}`} aria-label="Navigasi utama" id="main-menu">
          {navigation.map(({ id, label }) => (
            <button key={id} className={`nav-anchor ${active === id ? 'is-active' : ''}`} type="button" onClick={() => handleNavigate(id)} aria-current={active === id ? 'location' : undefined}>{label}</button>
          ))}
          <a className="mobile-menu-cta" href={externalLinks.purchase} target="_blank" rel="noopener noreferrer">Beli Sekarang <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <a href={externalLinks.purchase} target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn--primary header-buy">Beli Sekarang <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
          <button type="button" className="menu-toggle" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-controls="main-menu" aria-expanded={open} onClick={() => setOpen(!open)}><i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" /></button>
        </div>
      </div>
    </header>
  );
}
