# Fjelldata Portfolio Website

This repository contains the source code for [fjelldata.com](https://fjelldata.com), a portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Maps**: Leaflet/React Leaflet
- **UI Components**: Headless UI, Lucide React icons
- **Routing**: React Router

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
├── src/
│   ├── assets/     # Project assets
│   ├── components/ # React components
│   ├── hooks/      # Custom React hooks
│   ├── media/      # Media files
│   └── App.tsx     # Root component
├── vite.config.ts  # Vite configuration
└── tailwind.config.js
```

## Portfolio Features

- Responsive design
- Interactive map integration
- Project showcase with screenshots
- Contact form
- Custom animations and transitions
- SEO optimization with meta tags