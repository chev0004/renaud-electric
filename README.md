# Next.js Template

A clean Next.js template project with TypeScript, Tailwind CSS, and Biome for code formatting and linting.

## Features

- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Biome** - Fast formatter and linter
- **React Compiler** - Automatic React optimizations

## Getting Started

First, install dependencies:

```bash
bun install
# or
npm install
# or
pnpm install
```

Then, run the development server:

```bash
bun dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── biome.json              # Biome configuration
└── postcss.config.mjs      # PostCSS configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
