import {
  BookCopy,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  CalendarCheck2,
  FolderGit2,
  GraduationCap,
  Search,
  SquareLibrary,
} from 'lucide-react'

import type { JourneyEntry } from './types'

export const JOURNEY_ENTRIES: JourneyEntry[] = [
  {
    title: 'Commitment to AI Techniques',
    date: 'Apr 2026',
    description:
      'Over the past two months, I have been actively practicing and refining AI-driven techniques, particularly with Codex, to improve efficiency in building products. I am still experimenting, learning, and expanding my skills to adapt to the evolving era of development.',
    icon: Bot,
  },
  {
    title: 'Continuous Exploration of Frameworks',
    date: 'Feb 2026',
    description:
      "Currently exploring different frameworks to identify where I can excel. At the same time, I've been mastering the essence of prompt engineering with Codex to build personal projects that aligns to my wants and needs. As part of this growth, it expands my knowledge to web, desktop, and mobile development.",
    icon: BookCopy,
  },
  {
    title: 'Transitioning from Learning to Job Hunting',
    date: 'Jan 2026',
    description:
      "Moved from the learning phase into job searching, with a solid base from beginner to intermediate work. I'm now looking for a role that fits my skills, despite the challenging market we have right now.",
    icon: Search,
  },
  {
    title: 'Joined a non-funded dev organization',
    date: 'Nov 2025',
    description:
      "Joined an organization formed with old friends to collaborate on projects that are useful and potentially others. It's non-funded and focused on crafting skills, polishing workflows, and releasing projects publicly only when the team decides.",
    icon: FolderGit2,
  },
  {
    title: 'Improving skills through The Odin Project',
    date: 'Oct 2025',
    description:
      "On a friend's recommendation, I started The Odin Project's Full Stack JavaScript curriculum, building personal projects for my portfolio while further strengthening my web development skills.",
    icon: BookOpenText,
  },
  {
    title: 'Learning modern web development through freeCodeCamp',
    date: 'Sep 2025',
    description:
      'Took freeCodeCamp courses and built small projects that reinforced HTML, CSS, JavaScript, React, and REST API fundamentals.',
    icon: SquareLibrary,
  },
  {
    title: 'Starting web development through CS50W',
    date: 'Dec 2024',
    description:
      'Used CS50W to deepen understanding of web development, system structure, and building projects with clearer organization.',
    icon: SquareLibrary,
  },
  {
    title: 'Strengthening fundamentals through CS50x',
    date: 'Nov 2024',
    description:
      'Took CS50x to fill gaps in programming fundamentals and establish a stronger base for long-term development growth.',
    icon: SquareLibrary,
  },
  {
    title: 'Realization and Career Shift',
    date: 'Jul 2023',
    description:
      'Completed 10 months onboard, supporting bridge and deck operations through safety routines, watch rotations, and daily duties while working with a multicultural crew. Along the way, I handled minor reporting/technical issues and actively sought feedback to grow my responsibility, and this experience ultimately led me to shift my career toward web development which is what I truly wanted to pursue.',
    icon: CalendarCheck2,
  },
  {
    title: 'First job as a Deck Cadet',
    date: 'Sep 2022',
    description:
      'After a long period of submitting job applications to various companies and agencies, I secured my first deck cadet role and signed a 9-month onboard contract.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Completed Classroom Instruction in BS Maritime Transportation',
    date: 'Sep 2021',
    description: 'Completed three years of academic coursework in BS Maritime Transportation.',
    icon: GraduationCap,
  },
]
