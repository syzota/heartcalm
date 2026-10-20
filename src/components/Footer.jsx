import { navigation } from '../data/productData.js';
import { externalLinks } from '../data/links.js';
import { scrollToSection } from './Navbar.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <button className="wordmark footer-brand" onClick={() => scrollToSection('home')} type="button">HEARTCALM <i className="bi bi-heart-fill" aria-hidden="true" /></button>
          <p>Little care, big love.<br />Kenali kebutuhan kulitmu, satu langkah setiap hari.</p>
          <div className="footer-socials"><a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram" aria-hidden="true" /></a><a href={externalLinks.contact} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp HEARTCALM"><i className="bi bi-whatsapp" aria-hidden="true" /></a></div>
        </div>
        <div><h3>Explore</h3><ul>{navigation.map((item) => <li key={item.id}><button type="button" onClick={() => scrollToSection(item.id)}>{item.label}</button></li>)}</ul></div>
        <div><h3>Say hello</h3><ul><li><a href={externalLinks.contact} target="_blank" rel="noopener noreferrer">Konsultasi Admin <i className="bi bi-arrow-up-right" aria-hidden="true" /></a></li><li><a href={externalLinks.purchase} target="_blank" rel="noopener noreferrer">Temukan Produk <i className="bi bi-arrow-up-right" aria-hidden="true" /></a></li><li><button type="button" onClick={() => scrollToSection('newsletter')}>Newsletter</button></li></ul></div>
        <div className="footer-statement">GOOD SKIN DAYS<br /><span>START WITH</span><br />A LITTLE LOVE. <i className="bi bi-heart-fill" aria-hidden="true" /></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} HEARTCALM. All rights reserved.</span><span>Made with love for your skin ♡</span></div>
    </footer>
  );
}
