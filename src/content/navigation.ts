import { Award, Info, Code, CircleUserRound, FileText } from 'lucide-react'

import type { NavItem } from './types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'journey', label: 'Journey', icon: Info },
  { id: 'socials', label: 'Social', icon: CircleUserRound },
]

export const RESUME_LINK = {
  label: 'Resume',
  href: 'https://github.com/mkgp-dev/mkgp-dev/blob/main/storage/resume.pdf',
  icon: FileText,
}
