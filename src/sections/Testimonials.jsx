import SectionHeading from '../components/SectionHeading.jsx';
import { testimonials } from '../data/productData.js';
import { reviewPhotos } from '../data/reviewPhotos.js';

/**
 * For project deployment on GitHub Pages, public asset paths need Vite's BASE_URL.
 * Photo example: assets/reviews/review-01.webp
 */
function resolveReviewPhoto(photo) {
  if (!photo) return null;
  if (/^https?:\/\//i.test(photo)) return photo;
  return `${import.meta.env.BASE_URL}${photo.replace(/^\/+/, '')}`;
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="section testimonials-section hc-reviews-section">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="The love notes"
          title={<>Good words. <em>Good vibes.</em></>}
          description="Little notes, lots of love. Cerita dari komunitas yang suka skincare dengan cara menyenangkan."
        />

        <div className="testimonials-grid hc-review-gallery" aria-label="Galeri ulasan HEARTCALM">
          {testimonials.map((review, index) => {
            // Prefer photos configured directly in productData; otherwise reviewPhotos.js.
            const photo = resolveReviewPhoto(review.photo ?? reviewPhotos[index]);
            return (
              <article className="hc-review-polaroid" key={`${review.name}-${index}`} tabIndex={0}>
                <div className={`hc-review-polaroid__image hc-review-polaroid__image--${index % 4}`}>
                  <div className="hc-review-polaroid__fallback" aria-hidden="true">
                    <i className="bi bi-heart-pulse" />
                    <span>HEARTCALM<br />GOOD SKIN CLUB</span>
                  </div>
                  {photo && (
                    <img
                      src={photo}
                      alt={`Foto pendukung review ${review.name}`}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => { event.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  <span className="hc-review-polaroid__sticker" aria-hidden="true">LOVE NOTE {String(index + 1).padStart(2, '0')} ♡</span>
                </div>
                <div className="hc-review-polaroid__content">
                  <div className="hc-review-polaroid__stars" role="img" aria-label="5 dari 5 bintang">★★★★★</div>
                  <p>“{review.quote}”</p>
                  <div className="hc-review-polaroid__author">
                    <span className={`review-avatar review-avatar--${review.color}`} aria-hidden="true">{review.initial ?? review.name.charAt(0)}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.title}</span>
                    </div>
                    <i className="bi bi-heart-fill" aria-hidden="true" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
