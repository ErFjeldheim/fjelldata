import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white relative">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Fjelldata logo"
            className="h-[7.2rem] w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6 mr-6">
            <Link to="/services" className="hover:text-gray-300 transition-colors">Tjenester</Link>
            <Link to="/portfolio" className="hover:text-gray-300 transition-colors">Portefølje</Link>
          </div>
          <Link to="/contact" className="btn-primary">
            Ta kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/services" 
              className="text-lg hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjenester
            </Link>
            <Link 
              to="/portfolio" 
              className="text-lg hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portefølje
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Få tilbud
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
