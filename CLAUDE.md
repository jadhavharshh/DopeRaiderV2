# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Architecture

**DopeRaider V2** is a React-based web game built with TypeScript, Vite, and Tailwind CSS. The application uses React Router for navigation between game screens.

### Core Structure

- **Single Page Application**: Uses React Router with `createBrowserRouter` for client-side routing
- **Screen-based Navigation**: Each game feature is a separate screen component in `/src/pages/`
- **Component Architecture**: Reusable UI components in `/src/components/` and specialized sub-components in `/src/pages/InventoryScreenSections/`
- **Icon System**: Custom SVG icon components organized in `/src/icons/` with nested directory structure
- **Static Assets**: Game images and SVG files stored in `/src/static/img/`

### Key Game Screens & Routes

The game is organized around core gameplay areas:

- **Player Management**: `/player/inventory`, `/player/trophies`, `/player/social`, `/player/upgrades`
- **World Navigation**: `/map`, `/map/chinatown`
- **Economy**: `/market`, `/market/trade`
- **Production**: `/production`, `/production/active`
- **Raiding System**: `/raid`, `/raid/active`, `/raid/players`, `/raid/players/protected`, `/raid/win`
- **Special Features**: `/airdrop`
- **Entry Point**: `/` (IntroScreen)

### Technology Stack

- **React 19** with TypeScript for UI
- **Vite** for build tooling and development server
- **Tailwind CSS v4** with Vite plugin for styling
- **React Router DOM v7** for navigation
- **Lucide React** for additional icons
- **Class Variance Authority** and **clsx/tailwind-merge** for conditional styling

### Development Patterns

- Uses path alias `@/*` pointing to `./src/*` for imports
- Styled with Tailwind utility classes and custom gradients
- Icon components follow consistent naming and export patterns
- Screen components use JSX.Element return type annotation
- Static assets imported as modules for proper bundling

### File Organization

```
src/
├── pages/              # Main game screens
├── components/         # Reusable UI components  
├── icons/              # Custom SVG icon components
├── lib/                # Utility functions (cn helper)
├── static/img/         # Game assets and images
└── pages/InventoryScreenSections/  # Specialized inventory components
```

The codebase follows modern React patterns with functional components, uses TypeScript for type safety, and employs a mobile-first responsive design approach.