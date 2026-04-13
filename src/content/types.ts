import type { ComponentType, SVGProps } from 'react'
import type { LucideIcon } from 'lucide-react'

export type SectionId = 'projects' | 'certificates' | 'journey' | 'socials'
export type ProjectGroupId = 'showcase' | 'odin-project' | 'freecodecamp'

export type NavItem = {
  id: SectionId
  label: string
  icon: LucideIcon
}

export type Profile = {
  name: string
  title: string
  summary: string[]
  availability: Availability
}

export type Project = {
  name: string
  category?: string
  description?: string
  stack: string[]
  sourceUrl?: string
  liveUrl?: string
}

export type ProjectGroup = {
  id: ProjectGroupId
  title: string
  projects: Project[]
}

export type Certificate = {
  name: string
  issuer: string
  date: string
  description: string
  link: string
}

export type JourneyEntry = {
  title: string
  date: string
  description: string
  icon: LucideIcon
}

export type BrandIcon = ComponentType<SVGProps<SVGSVGElement>>
export type AppIcon = LucideIcon | BrandIcon

export type AvailabilityAction = {
  label: string
  href: string
  icon: AppIcon
}

export type Availability = {
  isOpenToWork: boolean
  message: string
  currentCompany: string
  actions: AvailabilityAction[]
}

export type SocialLink = {
  label: string
  href: string
  description: string
  icon: AppIcon
}

export type TechStackItem = {
  name: string
  icon: AppIcon
}
