import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MetaTags from './components/MetaTags';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-black">
          <MetaTags />
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <MetaTags 
                  title="Fjelldata - IT-konsulent til 500kr/t"
                  description="Profesjonell IT-rådgivning og utviklingstjenester. Fast timepris på 500kr/t uten mellomledd."
                />
                <Hero />
                <Features />
              </>
            } />
            <Route path="/contact" element={
              <>
                <MetaTags 
                  title="Kontakt Fjelldata - IT-konsulent"
                  description="Ta kontakt for en uforpliktende prat om dine IT-behov. Fast timepris på 500kr/t."
                />
                <Contact />
              </>
            } />
            <Route path="/portfolio" element={
              <>
                <MetaTags 
                  title="Fjelldata Portefølje - Tidligere Prosjekter"
                  description="Se våre tidligere prosjekter og løsninger vi har levert til fornøyde kunder."
                />
                <Portfolio />
              </>
            } />
            <Route path="/services" element={
              <>
                <MetaTags 
                  title="Fjelldata Tjenester - IT-konsulent"
                  description="Webutvikling, IT-rådgivning og systemutvikling til fast timepris på 500kr/t."
                />
                <Services />
              </>
            } />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;