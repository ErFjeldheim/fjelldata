import React, { useState } from 'react';
import { Clock, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState('/erik_kvadrat.jpg');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const img = document.querySelector('.hero-image');
    img?.classList.add('clicked');
    
    // Bytt bilde når det er ute av syne (etter 40% av animasjonen)
    setTimeout(() => {
      setCurrentImage(current => 
        current === '/erik_kvadrat.jpg' ? '/erik_kvadrat_2.jpg' : '/erik_kvadrat.jpg'
      );
    }, 600); // 40% av 1.5s = 600ms

    // Reset animasjon og state
    setTimeout(() => {
      img?.classList.remove('clicked');
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              IT-ekspertise.{' '}
              <span className="text-primary-500">500kr/t.</span>{' '}
              Ingen mellomledd.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seniorrådgivning til uslåelige priser. Spar på førsteklasses IT-løsninger.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Fast 500kr/t sats</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Markedspris: 1000-2000kr/t</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Direkte, personlig rådgivning</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Link to="/contact" className="btn-primary">
                Kontakt
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                Portefølje
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square group cursor-pointer overflow-hidden" onClick={handleImageClick}>
            <div className="absolute inset-0 bg-primary-500 rounded-lg opacity-0 transition-opacity duration-300 @media(hover: hover) { group-hover:opacity-10 }"></div>
            <img 
              src={currentImage}
              alt="IT-ekspert Erik Fjeldheim fra Fjelldata"
              loading="lazy"
              width={500}
              height={500}
              className="hero-image w-full h-full rounded-lg object-cover transform transition-transform duration-300 shadow-xl @media(hover: hover) { group-hover:scale-[1.02] }"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;