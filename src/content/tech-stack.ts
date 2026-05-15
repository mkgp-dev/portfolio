import {
  SiDaisyui,
  SiDrizzle,
  SiElectron,
  SiExpress,
  SiFastify,
  SiMantine,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTanstack,
  SiTauri,
  SiTypescript,
  SiWxt
} from '@icons-pack/react-simple-icons'
import { Bot } from 'lucide-react'

import type { TechStackItem } from './types'

export const TECH_STACK: TechStackItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'TanStack', icon: SiTanstack },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Fastify', icon: SiFastify },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Postgres', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Drizzle', icon: SiDrizzle },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'daisyUI', icon: SiDaisyui },
  { name: 'Mantine', icon: SiMantine },
  { name: 'Tauri', icon: SiTauri },
  { name: 'Electron', icon: SiElectron },
  { name: 'WXT', icon: SiWxt },
  { name: 'Codex', icon: Bot },
]
