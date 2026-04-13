import { ArrowUpRight } from 'lucide-react'

import { SOCIAL_LINKS } from '@/content/socials'
import { SectionShell } from '@/components/section-shell'

export function SocialSection() {
  return (
    <SectionShell
      id="socials"
      eyebrow="Find Me Online"
      title="Social"
      description="These are my social platforms where you can explore my work, follow my progress, and reach out to me."
    >
      <div className="divide-y divide-white/10">
        {SOCIAL_LINKS.map((item, index) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={item.label}
              className="animate-fade-up group flex items-center justify-between gap-4 py-4 transition duration-200 hover:text-white"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex min-w-0 items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center border border-white/10 text-slate-200">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-medium text-white">{item.label}</h3>
                  <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition duration-200 group-hover:text-sky-100" />
            </a>
          )
        })}
      </div>
    </SectionShell>
  )
}
