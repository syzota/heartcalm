/** CSS-based product packaging visual. */
export default function ProductTube({ variant = 'hero', className = '' }) {
  return (
    <div className={`product-illustration product-illustration--${variant} ${className}`} role="img" aria-label="HEARTCALM Acne Water Gel dalam kemasan tube pink">
      <div className="product-tube">
        <div className="product-tube__shine" />
        <div className="product-tube__top" />
        <div className="product-tube__body">
          <div className="product-tube__mark"><i className="bi bi-heart-fill" aria-hidden="true" /></div>
          <div className="product-tube__brand">HEARTCALM</div>
          <div className="product-tube__wave" />
          <div className="product-tube__type">Acne<br />Water Gel</div>
          <div className="product-tube__caption">CALM · HYDRATE · CARE</div>
          <div className="product-tube__sparkle">✳</div>
          <div className="product-tube__weight">50 g</div>
        </div>
        <div className="product-tube__cap" />
      </div>
    </div>
  );
}
