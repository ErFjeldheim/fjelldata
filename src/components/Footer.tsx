import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Kontaktinformasjon */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:erik@fjelldata.com" 
                  className="inline-flex items-center justify-center text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  erik@fjelldata.com
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/4uirXnX2YTa4AMrz8"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Vindafjord, Norge
                </a>
              </li>
            </ul>
          </div>

          {/* Snarveier */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Snarveier</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Portefølje
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosiale medier */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Følg meg</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href="https://github.com/ErFjeldheim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/fjeldheim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Fjelldata. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
