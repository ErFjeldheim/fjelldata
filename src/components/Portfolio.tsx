import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
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
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <span>{project.url.includes('github.com') ? 'Besøk kildekode' : 'Besøk nettside'}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <span>Kildekode</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
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
