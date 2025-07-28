import React, { useState } from 'react';
import { Wallet, BarChart2, Scale, User } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { useTypewriter } from '../hooks/useTypewriter';

const Features: React.FC = () => {
  const [dialogState, setDialogState] = useState<{ isOpen: boolean; type: 'prices' | 'comparison' | 'scalable' | 'personal' }>({
    isOpen: false,
    type: 'prices'
  });

  // Dialog state handler
  const handleDialog = (isOpen: boolean, type = dialogState.type) => {
    setDialogState({ isOpen, type });
  };

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
      icon: Wallet,
      title: 'Klare, faste timepriser',
      description: 'Profesjonell IT-støtte til 500kr/t. Ingen ekstra kostnader.',
      color: 'text-primary-500',
      type: 'prices' as const
    },
    {
      icon: Scale,
      title: 'Sammenlign med bransjeledere',
      description: 'Sammenlign våre priser direkte med toppfirmaer. Optimaliser utgiftene dine.',
      color: 'text-green-500',
      type: 'comparison' as const
    },
    {
      icon: BarChart2,
      title: 'Skalerbar ekspertise',
      description: 'Fleksibel støtte for alle prosjektstørrelser. Juster etter behov.',
      color: 'text-purple-500',
      type: 'scalable' as const
    },
    {
      icon: User,
      title: 'Personlig, responsiv rådgivning',
      description: 'Arbeid direkte med meg. Rask og pålitelig service.',
      color: 'text-orange-500',
      type: 'personal' as const
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
                className="feature-card text-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleDialog(true, feature.type)}
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

      <Transition show={dialogState.isOpen && (dialogState.type === 'prices' || dialogState.type === 'comparison')} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setDialogState({ isOpen: false, type: dialogState.type })}
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
                  <div className={`p-4 rounded-lg border mb-6 ${
                    dialogState.type === 'comparison' 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-primary-50 border-primary-200'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className={`text-xl font-semibold ${
                          dialogState.type === 'comparison' ? 'text-green-900' : 'text-primary-900'
                        }`}>Fjelldata</h4>
                        <p className={`text-sm mt-1 ${
                          dialogState.type === 'comparison' ? 'text-green-700' : 'text-primary-700'
                        }`}>Fast timepris uten overraskelser</p>
                      </div>
                      <div className={`text-2xl font-bold ${
                        dialogState.type === 'comparison' ? 'text-green-700' : 'text-primary-700'
                      }`}>500 kr/t</div>
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

                  <div className={`mt-8 p-4 rounded-lg ${
                    dialogState.type === 'comparison' ? 'bg-blue-50' : 'bg-green-50'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-2 ${
                      dialogState.type === 'comparison' ? 'text-blue-800' : 'text-green-800'
                    }`}>Din besparelse</h4>
                    <p className={dialogState.type === 'comparison' ? 'text-blue-700' : 'text-green-700'}>
                      Ved å velge Fjelldata kan du spare mellom{' '}
                      <span className="font-bold">500-1000 kr per time</span>{' '}
                      sammenlignet med tradisjonelle konsulentselskaper.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      dialogState.type === 'prices' 
                        ? 'bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500'
                        : 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500'
                    }`}
                    onClick={() => setDialogState({ isOpen: false, type: dialogState.type })}
                  >
                    Lukk
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition show={dialogState.isOpen && dialogState.type === 'scalable'} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setDialogState({ isOpen: false, type: dialogState.type })}
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

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

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
                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900 mb-6">
                  Skalerbar IT-ekspertise
                </Dialog.Title>

                <div className="mt-4 space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-semibold text-purple-900 mb-2">Fleksible løsninger</h4>
                    <p className="text-purple-700">
                      Jeg tilpasser tjenester etter dine behov, enten det er enkle konsultasjoner eller omfattende prosjekter.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Små prosjekter</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Teknisk rådgivning</li>
                        <li>• Feilsøking</li>
                        <li>• Mindre utviklingsoppgaver</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Store prosjekter</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Systemutvikling</li>
                        <li>• Integrasjonsprosjekter</li>
                        <li>• Kontinuerlig support</li>
                        <li>• Avtale med eksterne konsulenter for spisskompetanse</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Tilpasningsdyktig kapasitet</h4>
                    <p className="text-blue-700">
                      Start med det du trenger nå, og skaler opp eller ned etter behov. Ingen bindingstid eller minimumskjøp.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                    onClick={() => setDialogState({ isOpen: false, type: dialogState.type })}
                  >
                    Lukk
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition show={dialogState.isOpen && dialogState.type === 'personal'} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setDialogState({ isOpen: false, type: dialogState.type })}
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

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

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
                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900 mb-6">
                  Personlig rådgivning
                </Dialog.Title>

                <div className="mt-4 space-y-6">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="text-lg font-semibold text-orange-900 mb-2">Din dedikerte IT-partner</h4>
                    <p className="text-orange-700">
                      Direkte kommunikasjon, ingen mellomledd, ingen byråkrati.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Tilgjengelighet</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Rask responstid på henvendelser</li>
                        <li>• Fleksible møtetidspunkt</li>
                        <li>• Remote eller på stedet etter behov</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Kommunikasjonskanaler</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• E-post og telefon</li>
                        <li>• Teams/Slack</li>
                        <li>• Personlige møter ved behov</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Service-garanti</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Feil fra min side rettes opp i uten ekstra kostnad</li>
                        <li>• Bare effektive timer faktureres</li>
                        <li>• Løpende status-oppdateringer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                    onClick={() => setDialogState({ isOpen: false, type: dialogState.type })}
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