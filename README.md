# Hofmedia Site

A modern landing page built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This is a static landing page for Hofmedia, showcasing services and company information. The site is built using Next.js with static export functionality, making it perfect for hosting on any static hosting platform.

## Tech Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

## Features

- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ Static site generation (no backend required)
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
# Create production build
npm run build
```

This will generate a static export in the `out/` directory that can be deployed to any static hosting service.

### Lint

```bash
# Run ESLint
npm run lint
```

## Deployment

The site is configured with `output: 'export'` in `next.config.ts`, which means it generates a fully static site. You can deploy the contents of the `out/` directory to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Project Structure

```
hofmedia-site/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## License

ISC
