# VYBR Landing Page

## Overview
This is a Next.js 14 landing page for VYBR (formerly GatorVibe), a student community platform. The project features a modern, responsive design built with React 18, TypeScript, and Tailwind CSS with Radix UI components.

## Recent Changes
- **2025-09-15**: Imported GitHub project and configured for Replit environment
- **2025-09-15**: Updated Next.js configuration to work with Replit's proxy system
- **2025-09-15**: Configured dev server to bind to 0.0.0.0:5000 for Replit compatibility
- **2025-09-15**: Added allowedDevOrigins configuration to handle cross-origin requests

## Project Architecture

### Tech Stack
- **Frontend**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Static export capable

### Project Structure
```
├── pages/               # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper component
│   ├── _document.tsx   # HTML document structure
│   └── index.tsx       # Homepage
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components (Radix + Tailwind)
│   │   ├── Header.tsx  # Site header with navigation
│   │   ├── Hero.tsx    # Landing page hero section
│   │   ├── Features.tsx # Features showcase
│   │   └── Footer.tsx  # Site footer
│   ├── lib/           # Utility functions
│   └── styles/        # Global CSS and Tailwind
└── public/            # Static assets (favicons, manifest)
```

### Key Features
- Responsive design with mobile-first approach
- Animated UI elements with custom CSS animations
- Static export compatible for various hosting platforms
- SEO optimized with proper meta tags
- Accessibility-first with Radix UI components

## Configuration

### Replit-Specific Setup
- **Host Configuration**: Configured to bind to 0.0.0.0:5000 for Replit proxy
- **Cross-Origin Requests**: Enabled `allowedDevOrigins: '*'` for development
- **Headers**: Added X-Frame-Options: ALLOWALL for iframe compatibility
- **Workflow**: Single frontend server workflow on port 5000

### Development
- **Server**: Next.js development server with hot module replacement
- **Port**: 5000 (required for Replit)
- **Build**: Standard Next.js build process
- **Linting**: ESLint with Next.js recommended configuration

## User Preferences
- Clean, modern UI design with purple color scheme
- Focus on student-oriented messaging and features
- Responsive design across all device sizes
- Smooth animations and transitions