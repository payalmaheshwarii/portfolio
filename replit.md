# Overview

This is a full-stack portfolio website application built with React on the frontend and Express.js on the backend. The project showcases a professional portfolio with sections for about, experience, skills, projects, education, and contact information. It's configured as a modern web application with TypeScript support, component-based architecture using shadcn/ui, and database integration capabilities using Drizzle ORM with PostgreSQL.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a component-based architecture pattern:

- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with a custom dark theme configuration and CSS variables for consistent theming
- **UI Components**: shadcn/ui component library providing pre-built, accessible components (buttons, cards, forms, etc.)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a clean separation of concerns with organized directories:
- `/components` - Reusable UI components and page sections
- `/pages` - Route components
- `/lib` - Utility functions and configurations
- `/hooks` - Custom React hooks

## Backend Architecture

The backend uses a minimal Express.js setup with a modular storage interface pattern:

- **Framework**: Express.js with TypeScript
- **Storage Layer**: Abstract storage interface (`IStorage`) with pluggable implementations
- **Current Implementation**: In-memory storage (`MemStorage`) for development
- **Database Ready**: Configured for PostgreSQL integration via Drizzle ORM
- **Middleware**: JSON parsing, URL encoding, and custom request logging

The backend architecture supports easy swapping between storage implementations (memory, database, etc.) through the storage interface pattern.

## Database Schema

The application uses Drizzle ORM with PostgreSQL and includes:

- **Users Table**: Basic user structure with id, username, and password fields
- **Schema Validation**: Zod integration for type-safe database operations
- **Migration Support**: Drizzle Kit for database migrations and schema management

## Development Environment

The project is optimized for development with:

- **Hot Reloading**: Vite development server with HMR
- **TypeScript**: Strict type checking across frontend and backend
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **ESM Modules**: Modern ES module setup throughout the stack

## Styling and Design System

The application implements a comprehensive design system:

- **Dark Theme**: Custom dark color palette with CSS variables
- **Typography**: Inter font family for consistency
- **Component Variants**: Class Variance Authority for component styling variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels and semantic HTML structure

The design follows a professional, modern aesthetic suitable for a portfolio website with smooth animations and interactive elements.

# External Dependencies

## Frontend Dependencies

- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Headless UI primitives for accessibility
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class handling
- **wouter**: Lightweight routing library
- **lucide-react**: Icon library
- **react-hook-form**: Form handling and validation

## Backend Dependencies

- **express**: Web application framework
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **drizzle-zod**: Zod integration for schema validation
- **connect-pg-simple**: PostgreSQL session store (configured but not active)

## Development Dependencies

- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools

## Build and Deployment

The application is configured for multiple deployment scenarios:

- **Development**: `npm run dev` with hot reloading
- **Production Build**: `npm run build` creates optimized static assets and server bundle
- **Database Operations**: `npm run db:push` for schema synchronization

The build process creates a `dist/` directory with both client assets and server bundle, suitable for deployment to various hosting platforms.