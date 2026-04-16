# Portfolio

One-page portfolio built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Overview

The app is organized as a desktop split-view and a mobile-friendly single-column layout:

- Left pane: identity, summary, availability state, quick contact actions, tech stack, and social icons
- Right pane: sticky section navigation, projects, certificates, journey, and social links
- Navigation: smooth in-page scrolling across portfolio sections
- Availability: direct contact actions with the external `Resume` button placed in the `Currently looking` area
- Content: local typed source files under `src/content`

The current availability state is controlled in code and can render either:

- an open-to-work callout with direct actions such as Email, WhatsApp, and Viber
- a hired state with an optional company name

## Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS v4

## Features

- One-page portfolio architecture with no client-side router
- Sticky desktop shell with independently scrollable content pane
- Responsive mobile layout with wrapped navigation and stacked action controls
- Typed portfolio content for projects, certificates, journey, profile, socials, and tech stack
- Smooth section scrolling from the right-pane navigation
- Resume link exposed in the availability action group
- Availability panel with content-driven action buttons
- Floating scroll-to-top button that appears after scrolling

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the test suite:

```bash
npm run test:run
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Content Configuration

Most portfolio content is intentionally editable without touching layout components.

- `src/content/profile.ts`: name, title, summary, availability state, and quick actions
- `src/content/navigation.ts`: in-page nav items and the resume URL
- `src/content/projects.ts`: grouped projects for Showcase, The Odin Project, and freeCodeCamp
- `src/content/certificates.ts`: certificate entries
- `src/content/journey.ts`: timeline entries
- `src/content/socials.ts`: public social/contact links
- `src/content/tech-stack.ts`: stack badges shown in the left pane

> [!NOTE]
> If you change your resume location, update `RESUME_LINK.href` in `src/content/navigation.ts`.

> [!NOTE]
> If you want to switch from open-to-work to hired, update `PROFILE.availability` in `src/content/profile.ts`.

## Verification

The current verification workflow is:

```bash
npm run test:run -- test/portfolio-app.test.tsx
npm run lint
npm run build
```

These checks cover the app shell, in-page navigation, representative content rendering, outbound links, and the absence of React Router in active app code.

## License
This is a source-available project. You can use it and modify it for personal, non-commercial purposes, but you may not redistribute it or claim it as your own. See the [LICENSE](./LICENSE) file for full details.
