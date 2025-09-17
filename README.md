# Fjelldata Portfolio Website

This repository contains the source code for [fjelldata.com](https://fjelldata.com), a portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Custom animations with CSS keyframes
  - Responsive design patterns with custom container padding
- **UI Components**: 
  - Headless UI for accessible dialogs and modals
  - Lucide React icons for consistent iconography
  - React Confetti for interactive celebrations
  - Custom interactive components
- **Routing**: React Router DOM v7
- **Maps**: Leaflet/React Leaflet for interactive contact maps
- **Additional Libraries**:
  - React Icons for extended icon support

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
- **Hardware**: Custom PC built from scratch using a Ryzen 5 3400G APU, 16GB DDR4 RAM, and a 1TB NVMe SSD

### Security

- All deployments use SSH key authentication
- No passwords are stored in the repository
- All secrets are stored as GitHub repository secrets
- Production server only receives pre-built static files

## Project Structure

```
├── public/          # Static assets
│   ├── screenshots/  # Project portfolio images
│   ├── erik_kvadrat.jpg  # Profile image
│   └── *.png/.svg   # Logos and other images
├── src/
│   ├── assets/      # Project assets
│   │   └── react.svg # React logo
│   ├── components/  # React components
│   │   ├── Hero.tsx       # Hero section with animations and confetti
│   │   ├── Features.tsx   # Features with interactive dialogs
│   │   ├── Portfolio.tsx  # Project showcase with hover effects
│   │   ├── Services.tsx   # Services overview and background
│   │   ├── Contact.tsx    # Contact information with interactive map
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── MetaTags.tsx   # SEO meta tags management
│   │   ├── NotFoundPage.tsx # 404 error page for undefined routes
│   │   └── ErrorBoundary.tsx # Error handling component
│   ├── hooks/       # Custom React hooks
│   │   └── useTypewriter.ts  # Typewriter animation effect
│   ├── types/       # TypeScript definitions
│   │   └── css.d.ts # CSS module type definitions
│   ├── App.tsx      # Root component with routing
│   ├── main.tsx     # Application entry point
│   ├── index.css    # Global styles and Tailwind config
│   └── App.css      # Component-specific styles
├── .vscode/         # Editor configuration
├── vite.config.ts   # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig*.json   # TypeScript configurations
└── eslint.config.js # ESLint configuration
```

## Portfolio Features

- **Responsive Design**: Optimized for all devices with custom container padding system
- **Interactive Elements**: 
  - Hero image with confetti animation on click
  - Smart hover effects (desktop only)
  - Responsive click animations
- **Interactive Map Integration**: Leaflet-based contact map with custom markers
- **Project Showcase**: Portfolio with screenshots and technology tags
- **Contact System**: Direct contact information with phone and email links
- **SEO Optimization**: Meta tags management with route-specific content
- **Advanced Animations and Interactions**:
  - Interactive hero section with hover effects and confetti
  - Typewriter effect for dynamic text display
  - Feature dialogs with price comparisons and service details
  - Hover effects and transitions on portfolio cards and navigation elements
- **Price Comparison Features**:
  - Market rate price comparisons in interactive dialogs
  - Transparent cost breakdowns showing savings
- **Service Showcase**:
  - Scalable service offerings with detailed breakdowns
  - Personal consultation information
  - Professional background and credentials display
- **Multi-page Navigation**: React Router implementation with:
  - Home page with Hero and Features
  - Dedicated Portfolio page
  - Services page with background information
  - Contact page with interactive map
  - 404 Not Found page for undefined routes
- **Error Handling**: Error boundary implementation for robust user experience