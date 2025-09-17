import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="bg-black text-white py-40 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-8xl lg:text-9xl font-bold mb-6 text-primary-500">404</h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siden ble ikke funnet</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Beklager, siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="btn-primary flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Til forsiden</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Gå tilbake</span>
            </button>
          </div>

          <div className="mt-12 text-gray-400">
            <p>Eller prøv en av disse sidene:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/portfolio" className="text-primary-500 hover:text-primary-400 transition-colors">
                Portefølje
              </Link>
              <Link to="/services" className="text-primary-500 hover:text-primary-400 transition-colors">
                Tjenester
              </Link>
              <Link to="/contact" className="text-primary-500 hover:text-primary-400 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;