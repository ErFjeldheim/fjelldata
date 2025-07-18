import React from 'react';
import { Code, GitBranch, BrainCircuit, Building2, GraduationCap, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Webutvikling',
      description: 'Moderne, responsive nettsider og web-applikasjoner skreddersydd for din bedrift.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'IT-Rådgivning',
      description: 'Strategisk IT-rådgivning for å optimalisere din bedrifts digitale tilstedeværelse og effektivitet.',
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: 'Systemutvikling',
      description: 'Utvikling av skreddersydde systemer og integrasjoner for din bedrift.',
      icon: <GitBranch className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">IT-tjenester for din bedrift</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesjonell IT-kompetanse til konkurransedyktige priser. Med relevant utdanning og praktisk erfaring 
            leverer jeg robuste løsninger.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="text-primary-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Min Bakgrunn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">6 års erfaring</h3>
                <p className="text-gray-300">Selvstendig IT-konsulent siden 2019</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Utdanning</h3>
                <p className="text-gray-300">Bachelor i Informatikk ved NTNU (pågående)</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Building2 className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">SMB-fokus</h3>
                <p className="text-gray-300">Spesialisert på små og mellomstore bedrifter</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/contact" className="btn-primary inline-block">
            Ta kontakt for en uforpliktende prat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
