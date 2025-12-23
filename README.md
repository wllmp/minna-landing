# Minna Landing Page

Marketing site for Minna (皆) — the local-first context engine that gives AI agents long-term memory.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
mina-landing/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── ArchitectureDiagram.tsx
│   ├── IntegrationLogo.tsx
│   └── StatusLight.tsx
└── public/              # Static assets
```

## Design

The landing page uses a dark, developer-focused aesthetic with:
- **Colors**: Deep blacks with amber accents (status light motif)
- **Typography**: Space Grotesk (display) + JetBrains Mono (code)
- **Effects**: Subtle grid backgrounds, glow effects, and staggered animations

