import React, { useState, useRef, Suspense } from 'react';
import { Clock, Heart, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const Confetti = React.lazy(() => import('react-confetti'));

const Hero: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiDimensions, setConfettiDimensions] = useState({ width: 500, height: 500 });
  const imageRef = useRef<HTMLButtonElement>(null);

  const handleImageClick = () => {
    // Få faktiske dimensjoner av bildet
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setConfettiDimensions({ width: rect.width, height: rect.height });
    }
    
    setShowConfetti(true);
    // Skjul konfetti etter 8 sekunder
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  return (
    <section className="bg-black text-white pt-4 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              IT-ekspertise.{' '}
              <span className="text-primary-500">500kr/t.</span>{' '}
              Ingen mellomledd.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Personlig IT-rådgivning til en rimelig pris. Spar på pålitelige IT-løsninger.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Fast 500kr/t sats</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coins className="h-5 w-5 text-primary-500" />
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
          
          <button 
            type="button"
            ref={imageRef} 
            className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg appearance-none bg-transparent border-none p-0 text-left" 
            onClick={handleImageClick}
            aria-label="Vis konfetti effekt"
          >
            <div className="absolute inset-0 bg-primary-500 rounded-lg opacity-0 transition-opacity duration-300 md:group-hover:opacity-10 pointer-events-none"></div>
            <img 
              src="/erik_kvadrat.jpg"
              alt="IT-ekspert Erik Hjelm Fjeldheim fra Fjelldata"
              loading="eager"
              fetchPriority="high"
              width={500}
              height={500}
              className="hero-image w-full h-full rounded-lg object-cover transform transition-transform duration-300 shadow-xl md:group-hover:scale-[1.02]"
            />
            {showConfetti && (
              <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                <Suspense fallback={null}>
                  <Confetti
                    width={confettiDimensions.width}
                    height={confettiDimensions.height}
                    recycle={false}
                    numberOfPieces={1000}
                    gravity={0.3}
                  />
                </Suspense>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;