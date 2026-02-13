import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: 'Fjelldata',
    description: 'Min personlige porteføljeside bygget med moderne web-teknologier. Fokus på ytelse, tilgjengelighet og brukervennlighet.',
    url: 'https://github.com/ErFjeldheim/fjelldata',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsivt Design']
  },
  {
    title: 'Haugalandsved',
    description: 'Nettbutikk for salg av ved på Haugalandet. Utviklet med SvelteKit for lynrask ytelse.',
    url: 'https://haugalandsved.no',
    repoUrl: 'https://github.com/ErFjeldheim/haugalandsved',
    technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'Stripe']
  },
  {
    title: 'Matland Gard',
    description: 'Ny og modernisert nettside for Matland Gard. Bygget med moderne teknologi.',
    url: 'https://new.matlandgard.no/',
    repoUrl: 'https://github.com/ErFjeldheim/matland-gard',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe']
  },
  {
    title: 'Skjold Arena',
    description: 'Moderne nettside for Skjold Arena - bygdehuset i Skjold. Utviklet med WordPress i en LAMP stack',
    url: 'https://skjoldarena.no/',
    technologies: ['WordPress', 'Tilpasset Design', 'LAMP Stack', 'Responsivt Design']
  },
  {
    title: 'Lensmannsgarden Isvik',
    description: 'Informativ bookingside for historiske Lensmannsgarden i Isvik.',
    url: 'https://lensmannsgarden-isvik.no/',
    technologies: ['WordPress', 'Online Booking', 'Responsivt Design', 'SEO']
  },
  {
    title: 'Tante Ulrika',
    description: 'Skreddersydd presentasjonsside for Tante Ulrika. Bygget med WordPress og Elementor',
    url: 'https://tanteulrika.no/',
    technologies: ['WordPress', 'Elementor', 'Tilpasset Theme']
  },
  {
    title: 'PangoHub',
    description: 'Intern administrasjonsplattform for Pango. Dashboard og verktøy for daglig drift.',
    url: 'https://pangohub.fjelldata.com/',
    repoUrl: 'https://github.com/ErFjeldheim/PangoHub',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'Radix UI']
  },
  {
    title: 'Skjold Singel & Stein',
    description: 'Nettside vedlikehold i tillegg til Google annonsering, og søkemotoroptimalisering',
    url: 'https://skjoldsingelogstein.no/',
    technologies: ['Google Ads', 'SEO', 'Drift', 'Strategi', 'Rådgivning']
  }
];
