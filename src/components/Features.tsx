import React from 'react';
import { MessageCircle, Target, Sparkles, User } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Klare, faste timepriser',
      description: 'Profesjonell IT-støtte til 500kr/t. Ingen ekstra kostnader.',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Sammenlign med bransjeledere',
      description: 'Sammenlign våre priser direkte med toppfirmaer. Optimaliser utgiftene dine.',
      color: 'text-green-500'
    },
    {
      icon: Sparkles,
      title: 'Skalerbar, etterspørselbasert ekspertise',
      description: 'Fleksibel støtte for alle prosjektstørrelser. Juster etter behov.',
      color: 'text-purple-500'
    },
    {
      icon: User,
      title: 'Personlig, responsiv rådgivning',
      description: 'Arbeid direkte med din konsulent. Rask og pålielig service.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Profesjonell IT-rådgivning. Rettferdige priser.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center">
              <div className="mb-6">
                <feature.icon className={`h-12 w-12 ${feature.color} mx-auto`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;