
  # GatorVibe Landing Page

A modern, responsive landing page built with Next.js 14, React 18, and Tailwind CSS. This is the official landing page for GatorVibe - the ultimate student community platform.

## 🎯 Problem & Solution

### The Problem
College students struggle with three major challenges:
- **Housing Search Chaos**: Difficulty finding verified, affordable student housing near campus with limited reliable information
- **Roommate Matching Stress**: Finding compatible roommates through unreliable methods and limited compatibility data
- **FOMO**: Missing out on campus events, activities, and opportunities due to poor communication channels

### Our Solution
GatorVibe is the ultimate student community platform that addresses these pain points through:

**🏠 Student Housing Hub**
- Verified apartments, dorms, and shared housing options near campus
- Browse photos, compare prices, and read authentic reviews
- Filter by budget, amenities, and distance to campus

**🏠 Smart Roommate Matching** 
- Advanced compatibility algorithm considering lifestyle preferences
- Personality matching based on study habits and living preferences
- Eliminate housing stress with data-driven roommate selection

**📅 Campus Events Hub**
- Never miss campus activities, parties, or study groups
- Real-time notifications for events that match your interests
- Stay connected to everything happening on campus

**Why GatorVibe?**
- **500+ students** already on the waitlist
- **50+ universities** showing interest
- **AI-powered** matching for better connections
- **Free** for all students
- **Privacy-focused** with no spam guarantee

## 🚀 Features

- **Next.js 14** with App Router and static export
- **React 18** with TypeScript
- **Tailwind CSS** for styling with custom design system
- **Radix UI** components for accessibility
- **Lucide React** icons
- **Production-ready** with SEO optimization
- **Static export** compatible for easy deployment

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Development Build
```bash
npm run build
```

### Static Export (for static hosting)
```bash
npm run export
```

The static files will be generated in the `out` directory.

## 🏗️ Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App component
│   ├── _document.tsx     # Document component
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── figma/       # Figma-specific components
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── ...config files
```

## 🎨 Components

The project uses a comprehensive set of UI components built with Radix UI:

- **Layout**: Header, Footer, Hero, Features, Testimonials, CTA
- **UI Components**: Button, Card, Input, Dialog, Dropdown, etc.
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🔧 Configuration

- **Next.js**: Configured for static export in `next.config.js`
- **Tailwind CSS**: Custom design system in `tailwind.config.js`
- **TypeScript**: Strict configuration in `tsconfig.json`
- **ESLint**: Next.js recommended rules

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 SEO & Performance

- Meta tags and Open Graph optimization
- Semantic HTML structure
- Optimized images with fallbacks
- Fast loading with Next.js optimizations

## 📄 License

This project is private and proprietary to GatorVibe.

---

Built with ❤️ for the GatorVibe community

  This is a code bundle for GatorVibe Landing Page Design. The original project is available at https://www.figma.com/design/ipRpJil2bfGodgI563TMUX/GatorVibe-Landing-Page-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  