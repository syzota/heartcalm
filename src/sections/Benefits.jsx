import { benefits } from '../data/productData.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Benefits() {
  return (
    <section id="manfaat" className="section benefits-section">
      <div className="container">
        <SectionHeading align="center" eyebrow="Feel-good essentials" title={<>A little love, <em>every day.</em></>} description="Empat alasan untuk mencintai rutinitas skincare yang ringan, nyaman, dan menyenangkan." />
        <div className="benefit-grid">{benefits.map(({ title, body, icon, tone }) => <article key={title} className="benefit-card"><div className={`benefit-icon benefit-icon--${tone}`}><i className={`bi ${icon}`} aria-hidden="true" /></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
      <div className="benefits-marquee" aria-hidden="true">SOFT SKIN CLUB ✳ LOVE YOUR ROUTINE ✳ GOOD SKIN ENERGY ✳ SOFT SKIN CLUB ✳</div>
    </section>
  );
}
