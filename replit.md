# Amanda's Anagram Portfolio - Architecture Overview

## Overview

This is a modern full-stack web application showcasing Amanda's creative portfolio centered around anagrams and wordplay. The application is built with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM. It features a beautifully designed landing page with smooth animations and a sophisticated UI component system powered by shadcn/ui.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with a custom design system featuring Amanda-specific color variables
- **UI Components**: shadcn/ui component library providing consistent, accessible components
- **Animation**: Framer Motion for smooth animations and interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Typography**: Custom font integration (Inter and Playfair Display) for elegant typography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Middleware**: Express middleware for JSON parsing, logging, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Component Structure
The frontend is organized into modular sections:
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Eye-catching landing area with animated elements
- **Anagrams Section**: Showcase of different anagram interpretations of "Amanda"
- **About Section**: Personal story and skills presentation
- **Contact Section**: Contact information and social links
- **Footer**: Simple footer with copyright information

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: User management with username/password authentication
- **Migrations**: Structured database versioning in `/migrations` directory
- **Connection**: Neon Database serverless PostgreSQL integration

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class for in-memory data during development
- **Extensibility**: Designed to easily swap to database-backed storage

### UI System
- **Design System**: Custom CSS variables for consistent theming
- **Component Library**: Comprehensive set of reusable UI components
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Development Tools
- **Build System**: Vite for fast builds and hot module replacement
- **Type Safety**: Comprehensive TypeScript configuration
- **Code Quality**: ESLint and Prettier integration (implied)
- **Error Handling**: Runtime error overlay for development debugging

## Data Flow

### Client-Server Communication
1. **Frontend Requests**: React components use TanStack Query for API calls
2. **API Routing**: Express routes handle requests with `/api` prefix
3. **Data Processing**: Server processes requests and interacts with storage layer
4. **Response**: JSON responses sent back to client with proper error handling

### State Management
1. **Server State**: TanStack Query manages server data with caching and synchronization
2. **Client State**: React hooks and context for local component state
3. **Form State**: React Hook Form with Zod validation for type-safe forms

### Authentication Flow
- User schema prepared for authentication implementation
- Session management ready for integration
- Storage interface designed to support user operations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router alternative (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Animation**: Framer Motion for smooth transitions
- **Data Fetching**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server Framework**: Express.js for HTTP server
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Development**: tsx for TypeScript execution
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utilities**: date-fns for date manipulation

### Development Dependencies
- **Build Tools**: Vite with React plugin and TypeScript support
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Error Handling**: Runtime error modal for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied to PostgreSQL database
4. **Environment**: Environment variables for database connection and configuration

### Production Setup
- **Server**: Express serves both API routes and static frontend assets
- **Database**: PostgreSQL via Neon Database for production data storage
- **Assets**: Static files served from build output directory
- **Process Management**: Node.js process with proper error handling

### Development Workflow
- **Hot Reload**: Vite middleware integrated with Express for development
- **Database**: Memory storage for development, easy switch to PostgreSQL
- **Logging**: Structured logging for API requests and responses
- **Error Handling**: Comprehensive error boundaries and logging

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```