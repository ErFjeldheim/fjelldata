import React, { useState } from 'react';
import { MessageCircle, Target, Sparkles, User } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { useTypewriter } from '../hooks/useTypewriter';

const Features: React.FC = () => {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const animatedText = useTypewriter([
    'rådgivning',
    'drift',
    'implementering',
    'utvikling',
    'feilsøking'
  ], 100, 75, 2000);

  const competitors = [
    {
      name: 'Gjennomsnittlig IT-konsulent',
      hourlyRate: 1200,
      comment: 'Basert på markedsundersøkelser'
    },
    {
      name: 'Store konsulentselskaper',
      hourlyRate: 1500,
      comment: 'Typisk timepris for senior konsulenter'
    },
    {
      name: 'Freelance spesialister',
      hourlyRate: 1000,
      comment: 'Varierer basert på erfaring'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Klare, faste timepriser',
      description: 'Profesjonell IT-støtte til 500kr/t. Ingen ekstra kostnader.',
      color: 'text-blue-500',
      onClick: () => setIsComparisonOpen(true)
    },
    {
      icon: Target,
      title: 'Sammenlign med bransjeledere',
      description: 'Sammenlign våre priser direkte med toppfirmaer. Optimaliser utgiftene dine.',
      color: 'text-green-500',
      onClick: () => setIsComparisonOpen(true)
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
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Profesjonell{' '}
              <span className="inline-flex whitespace-nowrap">
                IT-<span className="text-primary-500 min-w-fit">{animatedText}</span>
              </span>
              .{' '}
              <span className="block mt-2">Rettferdige priser.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card text-center ${feature.onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
                onClick={feature.onClick}
              >
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

      <Transition show={isComparisonOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsComparisonOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 mb-6"
                >
                  Prissammenligning
                </Dialog.Title>

                <div className="mt-4 space-y-6">
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold text-primary-900">Fjelldata</h4>
                        <p className="text-primary-700 text-sm mt-1">Fast timepris uten overraskelser</p>
                      </div>
                      <div className="text-2xl font-bold text-primary-700">500 kr/t</div>
                    </div>
                  </div>

                  {competitors.map((competitor, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{competitor.name}</h4>
                          <p className="text-gray-500 text-sm mt-1">{competitor.comment}</p>
                        </div>
                        <div className="text-xl font-semibold text-gray-700">{competitor.hourlyRate} kr/t</div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-8 bg-green-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Din besparelse</h4>
                    <p className="text-green-700">
                      Ved å velge Fjelldata kan du spare mellom{' '}
                      <span className="font-bold">500-1000 kr per time</span>{' '}
                      sammenlignet med tradisjonelle konsulentselskaper.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                    onClick={() => setIsComparisonOpen(false)}
                  >
                    Lukk
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Features;