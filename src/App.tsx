import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MetaTags from './components/MetaTags';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-black flex flex-col">
          <MetaTags />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <MetaTags 
                    title="Fjelldata - Personlig IT-konsulent 500kr/t"
                    description="Personlig IT-rådgivning til rimelig pris. Tilpasselige og pålitelige IT-løsninger uten mellomledd for små og mellomstore bedrifter."
                  />
                  <Hero />
                  <Features />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <MetaTags 
                    title="Kontakt Fjelldata - Personlig IT-konsulent"
                    description="Ta kontakt for personlig IT-rådgivning til rimelig pris - kun 500kr/t. Ingen mellomledd, direkte kommunikasjon."
                  />
                  <Contact />
                </>
              } />
              <Route path="/portfolio" element={
                <>
                  <MetaTags 
                    title="Fjelldata Portefølje - Pålitelige IT-løsninger"
                    description="Se våre tidligere prosjekter og tilpasselige IT-løsninger levert til fornøyde kunder. WordPress, React og systemutvikling."
                  />
                  <Portfolio />
                </>
              } />
              <Route path="/services" element={
                <>
                  <MetaTags 
                    title="Fjelldata Tjenester - Personlig IT-rådgivning"
                    description="Webutvikling, IT-rådgivning og systemutvikling. Personlig, tilpasselig service til rimelig pris - 500kr/t for SMB."
                  />
                  <Services />
                </>
              } />
              <Route path="*" element={
                <>
                  <MetaTags 
                    title="404 - Siden ikke funnet | Fjelldata"
                    description="Beklager, siden du leter etter eksisterer ikke. Gå tilbake til Fjelldata for IT-rådgivning og webutvikling."
                  />
                  <NotFoundPage />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;