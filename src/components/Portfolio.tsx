import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Fjelldata',
      description: 'Min personlige porteføljeside bygget med moderne web-teknologier. Fokus på ytelse, tilgjengelighet og brukervennlighet.',
      url: 'https://github.com/ErFjeldheim/fjelldata',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsivt Design']
    },
    {
      title: 'Skjold Arena',
      description: 'Moderne nettside for Skjold Arena - bygdehuset i Skjold. Utviklet med WordPress i en LAMP stack',
      url: 'https://skjoldarena.no/',
      technologies: ['WordPress', 'Tilpasset Design', 'LAMP Stack', 'Responsivt Design']
    },
    {
      title: 'Tante Ulrika',
      description: 'Skreddersydd presentasjonsside for Tante Ulrika. Bygget med WordPress og WooCommerce.',
      url: 'https://tanteulrika.no/',
      technologies: ['WordPress', 'Elementor', 'Tilpasset Theme']
    },
    {
      title: 'Lensmannsgarden Isvik',
      description: 'Informativ bookingside for historiske Lensmannsgarden i Isvik. WordPress-løsning med fokus på brukeropplevelse.',
      url: 'https://lensmannsgarden-isvik.no/',
      technologies: ['WordPress', 'Online Booking', 'Responsivt Design', 'SEO']
    },
    {
      title: 'Matland Gard',
      description: 'Moderne bookingside for Matland Gard. Utviklet i WordPress med fokus på ytelse og søkemotoroptimalisering.',
      url: 'https://matlandgard.no/',
      technologies: ['WordPress', 'Tilpasset Theme', 'Responsivt Design', 'SEO']
    },
    {
      title: 'Skjold Singel & Stein',
      description: 'Nettside vedlikehold i tillegg til Google annonsering, og søkemotoroptimalisering',
      url: 'https://skjoldsingelogstein.no/',
      technologies: ['Google Ads', 'SEO', 'Drift', 'Strategi', 'Rådgivning']
    }
  ];

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Portefølje</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
              <div className="aspect-video w-full relative">
                <img
                  src={project.url.includes('github.com') 
                    ? '/screenshots/fjelldata.com.png'
                    : `/screenshots/${new URL(project.url).hostname}.png`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <span>Besøk nettside</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-500 bg-opacity-20 text-primary-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
