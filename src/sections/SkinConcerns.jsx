import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeading from '../components/SectionHeading.jsx';
import { skinConcerns } from '../data/productData.js';

export default function SkinConcerns() {
  const [index, setIndex] = useState(0);
  return (
    <section id="permasalahan" className="section concerns-section">
      <div className="container concerns-layout">
        <div className="concerns-copy"><SectionHeading eyebrow="Let's talk skin" title={<>Real skin.<br /><em>Real moments.</em></>} description="Setiap kulit punya cerita. Kenali permasalahan yang sering ditemui dan temukan rutinitas yang sesuai kebutuhanmu." />
          <div className="carousel-control-row"><button type="button" onClick={() => setIndex((index - 1 + skinConcerns.length) % skinConcerns.length)} aria-label="Permasalahan sebelumnya"><i className="bi bi-arrow-left" aria-hidden="true" /></button><button type="button" onClick={() => setIndex((index + 1) % skinConcerns.length)} aria-label="Permasalahan berikutnya"><i className="bi bi-arrow-right" aria-hidden="true" /></button><span>{String(index + 1).padStart(2, '0')} / {String(skinConcerns.length).padStart(2, '0')}</span></div>
        </div>
        <div className="concerns-carousel-wrap"><Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} controls={false} interval={null} touch indicators aria-label="Carousel permasalahan kulit">
          {skinConcerns.map((concern) => <Carousel.Item key={concern.title}><article className="concern-card"><div className={`concern-card__illustration concern-card__illustration--${concern.type}`} role="img" aria-label={`Ilustrasi kondisi ${concern.title.toLowerCase()}`}><div className="skin-illustration"><span className="skin-illustration__cheek" /></div><div className="concern-label">SKIN CONCERN {concern.number}</div></div><div className="concern-card__text"><h3>{concern.title}</h3><p>{concern.description}</p><span>Swipe or use the arrows <i className="bi bi-arrow-left-right" aria-hidden="true" /></span></div></article></Carousel.Item>)}
        </Carousel></div>
      </div>
    </section>
  );
}
