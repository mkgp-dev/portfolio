import type { MouseEvent } from 'react'

import { RESUME_LINK } from '@/content/navigation'
import type { NavItem } from '@/content/types'

export function PortfolioNav({ items }: { items: NavItem[] }) {
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav aria-label="Portfolio sections">
      <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-slate-300 transition duration-200 hover:border-white/10 hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:justify-start"
              >
                <Icon className="size-4 text-sky-200/75" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          )
        })}

        <li>
          <a
            href={RESUME_LINK.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-sm text-sky-50 transition duration-200 hover:border-sky-200/40 hover:bg-sky-300/16 focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:justify-start"
          >
            <RESUME_LINK.icon className="size-4 text-sky-100" aria-hidden="true" />
            {RESUME_LINK.label}
          </a>
        </li>
      </ul>
    </nav>
  )
}
