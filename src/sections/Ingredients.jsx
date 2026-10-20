import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Accordion from 'react-bootstrap/Accordion';
import SectionHeading from '../components/SectionHeading.jsx';
import { ingredients, additionalIngredients } from '../data/productData.js';
import { scrollToSection } from '../components/Navbar.jsx';

/** 3D motion only for fine pointers; never runs on touch or reduced-motion devices. */
export default function Ingredients() {
  const gridRef = useRef(null);
  const [activeDetail, setActiveDetail] = useState('main-0');

  function handleExplore(index) {
    setActiveDetail(`main-${index}`);
    scrollToSection('bahan-detail');
  }

  useEffect(() => {
    const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canTilt || reduceMotion || !gridRef.current) return undefined;

    const cards = gridRef.current.querySelectorAll('.hc-ingredient-3d');
    VanillaTilt.init(cards, {
      max: 11,
      speed: 450,
      scale: 1.035,
      perspective: 1100,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      glare: true,
      'max-glare': 0.10,
      gyroscope: false,
    });

    // React StrictMode mounts and unmounts effects twice in development.
    return () => cards.forEach((card) => card.vanillaTilt?.destroy());
  }, []);

  return (
    <section id="bahan" className="section ingredients-section hc-ingredients-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Good stuff inside"
            title={<>Meet the <em>skin-loving</em> ingredients.</>}
            description="Empat ingredient spotlight untuk kenalan lebih dekat dengan HEARTCALM."
          />
          <span className="handwriting-sticker" aria-hidden="true">Good vibes<br />for your skin ♡</span>
        </div>

        <div ref={gridRef} className="ingredients-grid hc-ingredients-grid">
          {ingredients.map((ingredient, index) => (
            <article
              key={ingredient.name}
              className={`hc-ingredient-3d hc-ingredient-3d--${ingredient.color}`}
              aria-label={`Ingredient: ${ingredient.name}`}
            >
              <span className="hc-ingredient-3d__watermark" aria-hidden="true">HEARTCALM</span>
              <span className="hc-ingredient-3d__number">{ingredient.number ?? String(index + 1).padStart(2, '0')} / 04</span>
              <div className="hc-ingredient-3d__orb" aria-hidden="true" />
              <div className="hc-ingredient-3d__graphic" aria-hidden="true">
                <i className={`bi ${ingredient.icon || 'bi-heart'}`} />
              </div>
              <div className="hc-ingredient-3d__copy">
                <span className="hc-ingredient-3d__eyebrow">INGREDIENT SPOTLIGHT</span>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.short}</p>
              </div>
              <button
                type="button"
                className="hc-ingredient-3d__link"
                onClick={() => handleExplore(index)}
                aria-label={`Lihat rincian ${ingredient.name}`}
              >
                Explore <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        {/* Required by assessment: accordion for additional ingredients. */}
        <div id="bahan-detail" className="ingredient-faq hc-ingredient-details">
          <div>
            <span className="eyebrow">THE DETAILS</span>
            <h3>More about<br /><em>what goes in.</em></h3>
            <p>Kenali empat bahan unggulan HEARTCALM dan temukan bahan pendukung lainnya di bawah ini. Klik Explore pada kartu untuk membuka detail bahan yang kamu pilih.</p>
          </div>
          <Accordion activeKey={activeDetail} onSelect={(key) => setActiveDetail(key)} className="heartcalm-accordion">
            {ingredients.map((item, index) => (
              <Accordion.Item key={item.name} eventKey={`main-${index}`}>
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body>{item.detail}</Accordion.Body>
              </Accordion.Item>
            ))}
            <div className="hc-ingredient-details__subheading">BAHAN TAMBAHAN</div>
            {additionalIngredients.map((item, index) => (
              <Accordion.Item key={item.title} eventKey={`extra-${index}`}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.detail}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
