import { Mail } from 'lucide-react'
import { SiViber, SiWhatsapp } from '@icons-pack/react-simple-icons'

import type { Profile } from './types'

export const PROFILE: Profile = {
  name: 'Mark Kenneth Pelayo',
  title: 'Junior Web/Software Developer',
  summary: [
    'I’m a developer who enjoys crafting clean, user-friendly web and software solutions with a focus on user experience, performance, and maintainable code, while also leveraging AI-assisted coding agents to improve workflow and development efficiency.',
  ],
  availability: {
    isOpenToWork: true,
    message:
      'Open to junior opportunities where product thinking, collaboration, and a commitment to growth are valued.',
    currentCompany: '',
    actions: [
      {
        label: 'Email',
        href: 'mailto:contact@mkgpdev.xyz',
        icon: Mail,
      },
      {
        label: 'WhatsApp',
        href: 'https://wa.me/639555686251',
        icon: SiWhatsapp,
      },
      {
        label: 'Viber',
        href: 'viber://chat?number=%2B639555686251',
        icon: SiViber,
      },
    ],
  },
}
