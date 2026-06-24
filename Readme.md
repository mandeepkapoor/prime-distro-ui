# Prime Distro Ltd Website

## Project Overview

Corporate marketing website for Prime Distro Ltd.

### Goals

- Strong online presence
- Mobile-first responsive design
- Light/Dark theme support
- SEO optimized
- Fast loading
- Astro-based architecture
- Centralized content management
- Easy future localization
- Component-based structure

---

## Development Environment

| Tool         | Version |
| ------------ | ------- |
| Node.js      | v25.6.1 |
| npm          | v11.9.0 |
| create-astro | v5.1.0 |

---

## Project Creation

Project created using:

```bash
npm create astro@latest .
```

Selections:

- Template: Minimal (empty)
- Install dependencies: Yes
- Git initialized: Yes

---

## Architecture Decisions

### Content Strategy

All website text is stored outside components.

Benefits:

- Easier maintenance
- Future multi-language support
- Non-developers can update content
- Consistent wording across pages

Current structure:

```text
src/data/
└── en.json
```

Future structure:

```text
src/data/
├── en.json
├── fr.json
├── de.json
└── ...
```

### Theme Strategy

Support:

- Light Theme
- Dark Theme

Theme preference is stored in browser localStorage.

### Component Strategy

All UI sections are reusable Astro components.

```text
src/components/
├── Header.astro
├── Hero.astro
├── ThemeToggle.astro
└── ...
```

### Styling Strategy

Global styles:

```text
src/styles/global.css
```

Component styles:

```text
src/styles/
├── header.css
├── hero.css
├── theme-toggle.css
└── ...
```

No component-specific styling should live inside Astro files.

### Script Strategy

Client-side scripts are stored separately.

```text
src/scripts/
├── theme-toggle.ts
└── ...
```

### SEO Strategy

Target keywords:

- UK Vape Wholesale Distributor
- Nicotine Pouch Wholesale UK
- Trade Vape Supplier UK
- Wholesale Vape Distributor

---

## Running Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321
```

Stop the server:

```bash
Ctrl + C
```

---

## Useful Commands

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run Astro checks:

```bash
npm run astro check
```

---

## Current Project Structure

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   └── ThemeToggle.astro
│
├── data/
│   └── en.json
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
├── scripts/
│   └── theme-toggle.ts
│
└── styles/
    ├── global.css
    ├── header.css
    ├── hero.css
    └── theme-toggle.css
```

---

## Development Log

### Step 1 - Project Initialization

- Astro project initialized
- Minimal template selected
- Dependencies installed
- Git repository initialized

### Step 2 - Base Architecture

- Created components directory
- Created data directory
- Created layouts directory
- Created styles directory

### Step 3 - Content System

- Implemented JSON-driven content architecture
- Added translation-ready structure
- Renamed content file to en.json

### Step 4 - Layout System

- Created BaseLayout.astro
- Added SEO title support
- Added SEO description support

### Step 5 - Homepage Foundation

- Created homepage using Astro layout
- Connected JSON content

### Step 6 - Styling Foundation

- Added global styling
- Added design variables
- Added responsive typography

### Step 7 - Translation Architecture

- Prepared project for future multilingual support

### Step 8 - Theme Infrastructure

- Added light theme
- Added dark theme
- Added localStorage theme persistence
- Added browser preference detection

### Step 9 - Header Component

- Created reusable Header component
- Connected navigation to JSON content

### Step 10 - Hero Component

- Created reusable Hero component
- Connected Hero content to JSON content

### Step 11 - Theme Toggle

- Created reusable ThemeToggle component
- Added separate TypeScript script
- Added separate stylesheet
- Successfully implemented theme switching

---

## Future Enhancements

- Mobile navigation drawer
- Trust Bar section
- About section
- Brands section
- Why Us section
- FAQ section
- Trade Enquiry form
- Footer
- Structured SEO metadata
- Open Graph tags
- Sitemap
- Robots.txt
- Analytics integration
- CMS integration
- Multi-language support