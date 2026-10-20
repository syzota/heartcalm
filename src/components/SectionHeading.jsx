export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`section-intro section-intro--${align} ${light ? 'section-intro--light' : ''}`}>
      {eyebrow && <span className="eyebrow"><i className="bi bi-stars" aria-hidden="true" /> {eyebrow}</span>}
      <h2 className="display-title">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
