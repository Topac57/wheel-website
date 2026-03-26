# ReifenDrive - Premium Tire & Rim Service Website

## Overview

ReifenDrive is a premium one-page website (with service detail sub-pages) for a tire and rim service business located in Wuppertal, Germany. The business is owned by Taha Taleb and offers services like tire changes, mounting, balancing, brake caliper painting, rim service, and tire buying/selling.

The primary goal of the website is to drive phone calls and WhatsApp contacts. It features a mobile-first, premium design with SEO optimization for local search in German. The site is a React SPA with an Express backend and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript (not Next.js despite some attached asset notes — the actual implementation uses Vite + React)
- **Routing**: Wouter (lightweight client-side router) — routes defined in `client/src/App.tsx`
- **Styling**: Tailwind CSS with custom CSS variables for theming, plus shadcn/ui component library (New York style)
- **Animations**: Framer Motion for premium fade/scale animations
- **State Management**: TanStack React Query for server state (services list, inquiry mutations)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Full shadcn/ui component set in `client/src/components/ui/`
- **Smooth Scrolling**: react-scroll for one-page navigation between section anchors (#home, #services, #about, #contact)
- **Fonts**: DM Sans (body) and Outfit (display headings) via Google Fonts
- **Brand Colors**: Primary green `#38b000`, white background, black secondary

### Page Structure
- **Home page** (`/`): One-page layout with Hero, Services grid, About, Contact (direct call/WhatsApp cards), and embedded Google Map
- **Service detail pages** (`/leistungen/*`): 7 individual pages using a shared `ServiceDetailLayout` component — Reifenwechsel, Reifenmontage, Auswuchten, Optische Aufbereitung von Bremssätteln (slug: bremssattel-lackierung), Felgen Smart Repair (slug: felgen-instandsetzung), Reifen-An-Verkauf, Pannendienst-24-7
- **404 page**: Simple not-found component
- **Floating actions**: WhatsApp button (desktop) and sticky bottom contact bar (mobile) on all pages

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript, compiled with tsx (dev) and esbuild (production)
- **API Pattern**: Simple REST endpoints defined in `shared/routes.ts` with Zod validation
- **Endpoints**:
  - `GET /api/services` — returns all services from DB
  - `POST /api/inquiries` — creates a contact inquiry
- **Dev Server**: Vite dev server integrated as Express middleware (HMR via `server/vite.ts`)
- **Production**: Static files served from `dist/public`, server bundled to `dist/index.cjs`

### Data Storage
- **Database**: PostgreSQL (required — `DATABASE_URL` env var)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation bridging
- **Schema** (in `shared/schema.ts`):
  - `services` table: id, title, description, icon (Lucide icon name), category, image URL, slug
  - `inquiries` table: id, name, phone, message, createdAt
- **Migrations**: Drizzle Kit with `db:push` command, migrations output to `./migrations/`
- **Seeding**: Services are re-seeded on every server startup in `storage.seedServices()` (deletes all, re-inserts 6 services)

### Shared Code
- `shared/schema.ts` — database table definitions, Zod schemas, TypeScript types
- `shared/routes.ts` — API route definitions with paths, methods, input/output schemas (acts as a lightweight API contract)

### Build System
- **Dev**: `tsx server/index.ts` with Vite HMR
- **Build**: Custom `script/build.ts` — Vite builds the client, esbuild bundles the server. Server dependencies are selectively bundled vs externalized.
- **Production**: `node dist/index.cjs`

### SEO Implementation
- Meta tags set in `client/index.html` (title, description, OpenGraph, Twitter cards)
- JSON-LD structured data (`@type: AutoRepair`) embedded in HTML head
- Dynamic meta tag updates via `client/src/components/SEO.tsx` component for service detail pages
- All content in German targeting local Wuppertal search terms
- Semantic HTML with single H1

## External Dependencies

### Database
- **PostgreSQL** — required, connection via `DATABASE_URL` environment variable
- **connect-pg-simple** — available for session storage (not actively used for auth currently)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **express** — HTTP server
- **@tanstack/react-query** — async state management
- **framer-motion** — animations
- **react-scroll** — smooth scroll navigation
- **wouter** — client-side routing
- **zod** + **drizzle-zod** — validation
- **shadcn/ui** ecosystem (Radix primitives, class-variance-authority, tailwind-merge, clsx)
- **react-hook-form** + **@hookform/resolvers** — form handling

### External Services
- **Google Maps** — embedded iframe for business location (Ludwig-Richter-Str. 13, 42429 Wuppertal)
- **WhatsApp** — deep link (`wa.me/491637947079`) for instant messaging
- **Imgur** — external image hosting for service card background images

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — error overlay in dev
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — dev-only Replit integrations