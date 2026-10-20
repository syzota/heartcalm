import ProductTube from '../components/ProductTube.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Results() {
  return (
    <section id="hasil" className="section results-section">
      <div className="container results-layout"><div className="results-product"><span className="result-bubble result-bubble--one" aria-hidden="true" /><span className="result-bubble result-bubble--two" aria-hidden="true" /><ProductTube variant="results" /><span className="result-doodle" aria-hidden="true">little care,<br />big love ♥</span></div>
        <div className="results-content"><SectionHeading eyebrow="Results in focus" title={<>A happier skin <em>routine.</em></>} description="Sedikit perhatian setiap hari untuk kulit yang terasa lebih nyaman. Lihat perjalanan rutinitas perawatan kulitmu." />
          <div className="result-comparison" aria-label="Contoh kartu hasil penggunaan ilustratif"><div className="result-preview result-preview--before"><span>Visual awal</span><div className="result-preview__graphic" aria-hidden="true" /></div><div className="result-preview result-preview--after"><span>Visual akhir</span><div className="result-preview__graphic" aria-hidden="true" /></div></div>
          <p className="result-disclaimer"><i className="bi bi-info-circle" aria-hidden="true" /> Gambar hanya ilustrasi.</p>
          <div className="result-points"><span><i className="bi bi-check-circle-fill" aria-hidden="true" /> Terasa kenyal dan bersih</span><span><i className="bi bi-check-circle-fill" aria-hidden="true" /> Rutinitas sederhana</span><span><i className="bi bi-check-circle-fill" aria-hidden="true" /> Fokus kenyamanan kulit</span></div>
        </div>
      </div>
    </section>
  );
}
