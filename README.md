# Fjelldata Portfolio Website

This repository contains the source code for [fjelldata.com](https://fjelldata.com), a portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Custom animations with CSS keyframes
  - Responsive design patterns
- **UI Components**: 
  - Headless UI for accessible dialogs
  - Lucide React icons for consistent iconography
  - Custom interactive components
- **Routing**: React Router
- **Maps**: Leaflet/React Leaflet

## Development

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The website is automatically deployed to fjelldata.com through a GitHub Actions CI/CD pipeline. The deployment process is triggered on every push to the `main` branch:

1. GitHub Actions checks out the repository
2. Dependencies are installed (`npm ci`)
3. Project is built (`npm run build`)
4. Built files are copied to the production server via SCP
5. Apache is restarted to serve the new files

### Server Configuration

- **Server OS**: Debian
- **Web Server**: Apache2
- **Deployment Path**: `/var/www/fjelldata/dist`
- **SSH Access**: Port 444 with key authentication
- **Build Strategy**: Static file hosting (no server-side build)

### Security

- All deployments use SSH key authentication
- No passwords are stored in the repository
- All secrets are stored as GitHub repository secrets
- Production server only receives pre-built static files

## Project Structure

```
├── public/          # Static assets
│   ├── screenshots/  # Project portfolio images
│   └── *.jpg        # Profile and other images
├── src/
│   ├── assets/      # Project assets
│   ├── components/  # React components
│   │   ├── Hero.tsx       # Hero section with animations
│   │   ├── Features.tsx   # Features with dialogs
│   │   ├── Portfolio.tsx  # Project showcase
│   │   └── ...           # Other components
│   ├── hooks/       # Custom React hooks
│   │   └── useTypewriter.ts  # Typewriter animation
│   ├── types/       # TypeScript definitions
│   └── App.tsx      # Root component
├── .vscode/         # Editor configuration
├── vite.config.ts   # Vite configuration
└── tailwind.config.js
```

## Portfolio Features

- Responsive design optimized for all devices
- Interactive map integration
- Project showcase with screenshots
- Contact form integration
- SEO optimization with meta tags
- Advanced animations and interactions:
  - Interactive hero section with image transitions
  - Smart hover effects (desktop only)
  - Smooth image swap animations
  - Responsive click animations
- Price comparison features:
  - Real-time market rate comparisons
  - Interactive pricing dialogs
  - Transparent cost breakdowns
- Expertise showcase:
  - Scalable service offerings
  - Personal consultation information
  - Service level descriptions