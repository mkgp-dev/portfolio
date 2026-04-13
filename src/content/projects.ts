import type { ProjectGroup } from './types'

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'showcase',
    title: 'Showcase',
    projects: [
      {
        name: 'Codex Skills',
        description: 'A collection of reusable Codex skills for coding tasks.',
        stack: [
          'Codex',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/codex-skills',
      },
      {
        name: 'Kaizer Music Player',
        description: 'Your personal alternative desktop music player.',
        stack: [
          'Electron',
          'React',
          'TypeScript',
          'Tailwind',
          'TanStack Router',
          'TanStack Query',
          'Drizzle',
          'SQLite',
        ],
        sourceUrl: 'https://github.com/ternilabs/kaizer-music-player',
      },
      {
        name: 'Tyche Renderer',
        description:
          'Compile and render videos using a React Native-inspired component workflow.',
        stack: ['React', 'TypeScript', 'Tailwind'],
      },
      {
        name: 'Tyche',
        description:
          'A creative studio for building shareable card visuals and short cover artwork, plus a text-to-speech page.',
        stack: [
          'React',
          'TypeScript',
          'React Router',
          'TanStack Query',
          'Tailwind',
          'shadcn/ui',
        ],
        liveUrl: 'https://github.com/ternilabs/snapshots/tree/main/tyche',
      },
      {
        name: 'Personal Blog',
        description:
          "Personal blog platform with an integrated CMS for content publishing, post management, and comment moderation.",
        stack: [
          'React',
          'TypeScript',
          'React Router',
          'TanStack Query',
          'Tailwind',
          'shadcn/ui',
          'TipTap',
          'localForage',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/blog-cms',
        liveUrl: 'https://blog.mkgpdev.xyz',
      },
      {
        name: 'Personal Blog CMS API',
        description: 'API-only backend for my personal blog system.',
        stack: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'jsonwebtoken', 'Zod', 'Pino'],
        sourceUrl: 'https://github.com/mkgp-dev/blog-cms-api',
      },
      {
        name: 'Nova',
        description:
          'A modern, lightweight point-of-sale management project focused on restaurants and still under development.',
        stack: ['Tauri', 'Tailwind', 'shadcn/ui', 'SQLite', 'Postgres'],
        liveUrl: 'https://github.com/ternilabs/snapshots/tree/main/nova',
      },
      {
        name: 'Resume Makinator',
        description:
          'A modern, browser-based tool that helps anyone create a polished resume.',
        stack: [
          'React',
          'TypeScript',
          'Tailwind',
          'DaisyUI',
          'Zustand',
          'localForage',
          'react-pdf',
          'dndkit',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/resume-makinator',
        liveUrl: 'https://rm.mkgpdev.xyz',
      },
      {
        name: 'Ship Wreck',
        description: 'A simple Battleship project.',
        stack: ['Webpack', 'Tailwind', 'Jest'],
        sourceUrl: 'https://github.com/mkgp-dev/ship-wreck',
        liveUrl: 'https://mkgp-dev.github.io/ship-wreck',
      },
      {
        name: 'Forecast Me',
        description: 'A simple Weather App project.',
        stack: ['Webpack', 'Tailwind'],
        sourceUrl: 'https://github.com/mkgp-dev/forecast-me',
        liveUrl: 'https://mkgp-dev.github.io/forecast-me',
      },
      {
        name: 'What to do',
        description: 'A simple To-Do List project.',
        stack: ['Webpack', 'Tailwind', 'localForage'],
        sourceUrl: 'https://github.com/mkgp-dev/what-to-do',
        liveUrl: 'https://mkgp-dev.github.io/what-to-do',
      },
      {
        name: 'Hard Licker',
        description: 'A simple Restaurant Page project.',
        stack: ['Webpack', 'CSS'],
        sourceUrl:
          'https://github.com/mkgp-dev/personal-top-archive/blob/main/restaurant-page/open-source',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/restaurant-page',
      },
      {
        name: 'Blog Portfolio PHP',
        description: 'Blog PHP integrated with your portfolio.',
        stack: ['PHP', 'HTML', 'JavaScript', 'jQuery', 'Bootstrap'],
        sourceUrl: 'https://github.com/mkgp-dev/Blog-Portfolio-PHP',
      },
    ],
  },
  {
    id: 'odin-project',
    title: 'The Odin Project',
    projects: [
      {
        name: 'Droppy',
        description: 'A simple File Uploader project.',
        stack: [
          'Node.js',
          'Express',
          'TypeScript',
          'Tailwind',
          'Prisma',
          'Postgres',
          'Passport',
          'Multer',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/droppy',
      },
      {
        name: 'Message Wall Membership',
        description: 'A simple Members Only project.',
        stack: [
          'Node.js',
          'Express',
          'TypeScript',
          'Tailwind',
          'DaisyUI',
          'Postgres',
          'Passport',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/message-wall-membership',
      },
      {
        name: 'Playtory',
        description: 'A simple Inventory Application project.',
        stack: ['Node.js', 'Express', 'TypeScript', 'Tailwind', 'DaisyUI', 'Postgres'],
        sourceUrl: 'https://github.com/mkgp-dev/playtory',
      },
      {
        name: 'Message Wall',
        description: 'A simple Mini Message Board project.',
        stack: ['Node.js', 'Express', 'TypeScript', 'Tailwind', 'DaisyUI', 'nanoid'],
        sourceUrl: 'https://github.com/mkgp-dev/message-wall',
      },
      {
        name: 'Shople',
        description: 'A simple Shopping Cart project.',
        stack: [
          'React',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
          'Vitest',
          'Zustand',
          'React Router',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/shople',
      },
      {
        name: 'Memoire',
        description: 'A simple Memory Card project.',
        stack: [
          'React',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
          'Motion',
          'Zustand',
          'localForage',
        ],
        sourceUrl: 'https://github.com/mkgp-dev/memoire',
      },
      {
        name: 'Unofficial Portfolio',
        description: 'A simple Homepage project.',
        stack: ['Webpack', 'Tailwind'],
        sourceUrl: 'https://github.com/mkgp-dev/unofficial-portfolio',
        liveUrl: 'https://mkgp-dev.github.io/unofficial-portfolio',
      },
      {
        name: 'Tic Tac Toe',
        description: 'A simple Tic Tac Toe project.',
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/blob/main/tic-tac-toe',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/tic-tac-toe',
      },
      {
        name: 'Library',
        description: 'A simple Library project.',
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/tree/main/library',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/library',
      },
      {
        name: 'Admin Dashboard',
        description: 'A simple Admin Dashboard project.',
        stack: ['HTML', 'CSS'],
        sourceUrl:
          'https://github.com/mkgp-dev/personal-top-archive/tree/main/admin-dashboard',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/admin-dashboard',
      },
      {
        name: 'Sign-up Form',
        description: 'A simple Sign-up Form project.',
        stack: ['HTML', 'CSS'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/tree/main/sign-up-form',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/sign-up-form',
      },
      {
        name: 'Calculator',
        description: 'A simple Calculator project.',
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/tree/main/calculator',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/calculator',
      },
      {
        name: 'Etch a Sketch',
        description: 'A simple Etch a Sketch project.',
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceUrl:
          'https://github.com/mkgp-dev/personal-top-archive/tree/main/etch-a-sketch',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/etch-a-sketch',
      },
      {
        name: 'Rock Paper Scissors',
        description: 'A simple Rock Paper Scissors project.',
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceUrl:
          'https://github.com/mkgp-dev/personal-top-archive/tree/main/rock-paper-scissors',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/rock-paper-scissors',
      },
      {
        name: 'Landing Page',
        description: 'A simple Landing Page project.',
        stack: ['HTML', 'CSS'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/tree/main/landing-page',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/landing-page',
      },
      {
        name: 'Recipe',
        description: 'A simple Recipe project.',
        stack: ['HTML'],
        sourceUrl: 'https://github.com/mkgp-dev/personal-top-archive/blob/main/odin-recipes',
        liveUrl: 'https://mkgp-dev.github.io/personal-top-archive/odin-recipes',
      },
    ],
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    projects: [
      {
        name: '25 + 5 Clock',
        stack: ['React', 'Bootstrap'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/yyeVRvM',
      },
      {
        name: 'JavaScript Calculator',
        stack: ['React', 'Bootstrap'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/jEWVWGj',
      },
      {
        name: 'Drum Machine',
        stack: ['React', 'Bootstrap'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/EaPgXyB',
      },
      {
        name: 'Markdown Previewer',
        stack: ['React', 'Bootstrap'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/EaPgXyB',
      },
      {
        name: 'Random Quote Machine',
        stack: ['React', 'Bootstrap'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/JoGKdEz',
      },
      {
        name: 'freeCodeCamp Back End',
        description:
          'A certificate project from freeCodeCamp that compiles every objective from Back End Development and APIs into one app.',
        stack: ['Node.js', 'Express', 'MongoDB', 'Multer'],
        sourceUrl: 'https://github.com/mkgp-dev/freeCodeCamp-Back-End',
      },
      {
        name: 'Personal Portfolio Webpage',
        stack: ['HTML', 'CSS'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/jEWVbJQ',
      },
      {
        name: 'Product Landing Page',
        stack: ['HTML', 'CSS'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/KwVNdbr',
      },
      {
        name: 'Technical Documentation Page',
        stack: ['HTML', 'CSS'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/XJXNmxv',
      },
      {
        name: 'Tribute Page',
        stack: ['HTML', 'CSS'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/zxrovLg',
      },
      {
        name: 'Survey Form',
        stack: ['HTML', 'CSS'],
        liveUrl: 'https://codepen.io/mkgp-dev/full/OPMbywO',
      },
    ],
  },
]
