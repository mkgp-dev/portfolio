import { Code2, Globe, Mail } from 'lucide-react'
import {
  SiFreecodecamp,
  SiGithub,
} from '@icons-pack/react-simple-icons'

import type { SocialLink } from './types'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/mkgp-dev',
    description: 'Source code, experiments, and public project history.',
    icon: SiGithub,
  },
  {
    label: 'freeCodeCamp',
    href: 'https://www.freecodecamp.org/mkgp-dev',
    description: 'Certification profile and learning progress.',
    icon: SiFreecodecamp,
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/mkgp-dev',
    description: 'Frontend exercises and small interactive builds.',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mkgpdev',
    description: 'Professional profile and work history.',
    icon: Globe,
  },
  {
    label: 'Email',
    href: 'mailto:contact@mkgpdev.xyz',
    description: 'Direct contact for opportunities and collaboration.',
    icon: Mail,
  },
]
