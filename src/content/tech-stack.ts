import {
  SiDaisyui,
  SiElectron,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiTauri,
  SiTypescript
} from '@icons-pack/react-simple-icons'
import { Bot } from 'lucide-react'

import type { TechStackItem } from './types'

export const TECH_STACK: TechStackItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'TanStack Query', icon: SiReactquery },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Postgres', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'daisyUI', icon: SiDaisyui },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Electron', icon: SiElectron },
  { name: 'Codex', icon: Bot },
]
