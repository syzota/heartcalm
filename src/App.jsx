import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Ingredients from './sections/Ingredients.jsx';
import Benefits from './sections/Benefits.jsx';
import SkinConcerns from './sections/SkinConcerns.jsx';
import Results from './sections/Results.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Newsletter from './sections/Newsletter.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">Lewati ke konten utama</a>
      <Navbar />
      <main>
        <Hero />
        <Ingredients />
        <Benefits />
        <SkinConcerns />
        <Results />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
