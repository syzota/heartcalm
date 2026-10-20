import ProductTube from '../components/ProductTube.jsx';
import { externalLinks } from '../data/links.js';
import { scrollToSection } from '../components/Navbar.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow--one" aria-hidden="true" /><div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="scribble-pill"><i className="bi bi-stars" aria-hidden="true" /> NEW ROUTINE, NEW MOOD</div>
          <h1>Calm your skin.<br /><em>Glow your way.</em></h1>
          <p>Meet <strong>HEARTCALM Acne Water Gel</strong> — water gel dengan tekstur ringan yang memberi sentuhan segar untuk rutinitas perawatan kulitmu.</p>
          <div className="hero-actions"><a href={externalLinks.purchase} target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn--primary">Beli Sekarang <i className="bi bi-arrow-up-right" aria-hidden="true" /></a><a href={externalLinks.contact} target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn--outline"><i className="bi bi-whatsapp" aria-hidden="true" /> Konsultasi Admin</a></div>
          <div className="hero-footnote"><span><i className="bi bi-droplet-half" aria-hidden="true" /> Lightweight water gel</span><span><i className="bi bi-heart" aria-hidden="true" /> Skin-first routine</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-art__halo" aria-hidden="true" /><div className="jelly-blob jelly-blob--a" aria-hidden="true" /><div className="jelly-blob jelly-blob--b" aria-hidden="true" />
          <ProductTube variant="hero" />
          <div className="handwritten-note" aria-hidden="true">Your daily<br />dose of<br />skin love! ♡</div>
          <div className="hero-star hero-star--one" aria-hidden="true">✳</div><div className="hero-star hero-star--two" aria-hidden="true">✦</div>
          <div className="hero-art__caption">SOFT ON SKIN · BIG ON LOVE</div>
        </div>
      </div>
      <button type="button" className="scroll-cue" onClick={() => scrollToSection('bahan')}>SCROLL TO EXPLORE <i className="bi bi-arrow-down" aria-hidden="true" /></button>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}
