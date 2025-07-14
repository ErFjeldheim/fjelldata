import React from 'react';
import { Clock, Users, Heart } from 'lucide-react';

const Hero: React.FC = () => {
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
                <span className="text-gray-300">Andre: 1000-2000kr/t</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Direkte, personlig rådgivning</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="btn-primary">
                Kontakt
              </button>
              <button className="btn-secondary">
                Portefølje
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <img 
                src="\src\media\erik_kvadrat.jpg" 
                alt="IT-ekspert" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;