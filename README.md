# onehub

**One Hub** — Ottawa's premier business directory. Connect. Discover. Grow.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
onehub-front/
├── app/                        # Next.js App Router
│   ├── (marketing)/            # Route group — static marketing pages
│   │   ├── about/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   └── events/page.tsx
│   ├── add/page.tsx            # Add a business (client form)
│   ├── api/businesses/         # REST API route handlers
│   ├── components/             # Shared UI components
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── content/                    # All UI copy — translation-ready
│   ├── en/                     # English locale
│   │   ├── common.ts           # Site-wide strings (logo, footer)
│   │   ├── nav.ts              # Navigation labels & search
│   │   ├── home.ts             # Home page copy
│   │   ├── about.ts
│   │   ├── contact.ts
│   │   ├── careers.ts
│   │   ├── events.ts
│   │   ├── add.ts              # Add-business form copy
│   │   ├── business-list.ts    # Business list empty states
│   │   └── chat.ts             # Chat assistant strings
│   └── index.ts                # Locale resolver + re-exports
├── lib/                        # Pure business logic (no Next.js deps)
│   ├── data/businesses.ts      # In-memory store + mock data
│   ├── services/               # Service layer
│   │   └── business.service.ts
│   └── types/                  # Shared TypeScript types
│       └── business.types.ts
└── public/                     # Static assets
```

## Adding a New Locale

1. Duplicate `content/en/` → `content/fr/` (or any locale code).
2. Translate every exported object.
3. Add `'fr'` to the `Locale` union in `content/index.ts`.
4. Register the new locale in the `locales` map in `content/index.ts`.
5. Pass the active locale to `getContent(locale)` from your root layout or middleware.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
