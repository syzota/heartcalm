import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Basic format validation. This is an interface simulation, NOT email storage.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const isValid = EMAIL_PATTERN.test(email.trim());
  const showError = touched && !isValid;

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);
    if (!isValid) return;
    setConfirmedEmail(email.trim());
    setShowModal(true);
    setEmail('');
    setTouched(false);
  }

  return (
    <section id="newsletter" className="newsletter-section"><div className="newsletter-bubble newsletter-bubble--one" aria-hidden="true" /><div className="newsletter-bubble newsletter-bubble--two" aria-hidden="true" /><div className="container newsletter-inner"><span className="newsletter-sticker">JOIN THE<br />GOOD SKIN CLUB ♡</span><span className="eyebrow">A LOVE LETTER TO YOUR INBOX</span><h2>Stay in the <em>glow!</em></h2><p>Skincare tips, inspiration, dan info terbaru — langsung ke inbox kamu.</p>
      <Form className="newsletter-form" onSubmit={handleSubmit} noValidate><Form.Group controlId="newsletter-email" className="newsletter-form__group"><Form.Label className="visually-hidden">Alamat email</Form.Label><Form.Control type="email" inputMode="email" autoComplete="email" placeholder="Masukkan email kamu" value={email} isInvalid={showError} onChange={(event) => setEmail(event.target.value)} onBlur={() => setTouched(true)} required aria-describedby={showError ? 'newsletter-error' : undefined} /><button className="pill-btn pill-btn--primary" type="submit">Subscribe <i className="bi bi-arrow-right" aria-hidden="true" /></button><Form.Control.Feedback type="invalid" id="newsletter-error">Masukkan alamat email yang valid, misalnya nama@email.com.</Form.Control.Feedback></Form.Group></Form>
    </div>
    <Modal show={showModal} onHide={() => setShowModal(false)} centered aria-labelledby="newsletter-confirmation-title"><Modal.Header closeButton><Modal.Title id="newsletter-confirmation-title">Thanks for the love! ♡</Modal.Title></Modal.Header><Modal.Body><div className="modal-check"><i className="bi bi-envelope-heart-fill" aria-hidden="true" /></div><p>Terima kasih, <strong>{confirmedEmail}</strong>! Senang kamu sudah mampir.</p><p>Keep glowing with HEARTCALM ♡</p></Modal.Body><Modal.Footer><Button className="pill-btn pill-btn--primary" onClick={() => setShowModal(false)}>Oke, mengerti!</Button></Modal.Footer></Modal>
    </section>
  );
}
