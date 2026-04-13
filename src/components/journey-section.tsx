import { JOURNEY_ENTRIES } from '@/content/journey'
import { SectionShell } from '@/components/section-shell'

export function JourneySection() {
  return (
    <SectionShell
      id="journey"
      eyebrow="Developer Status"
      title="Journey"
      description="A timeline of my developer journey, highlighting my growth, experiences, and evolving status from the beginning of my path up to where I am today."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-3 top-3 w-px bg-white/12" aria-hidden="true" />
        <ol className="space-y-8">
          {JOURNEY_ENTRIES.map((entry, index) => {
            const Icon = entry.icon

            return (
              <li
                key={entry.title}
                className="animate-fade-up relative pl-10"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <div className="absolute left-0 top-2 inline-flex size-6 items-center justify-center rounded-full bg-white text-slate-950">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{entry.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{entry.date}</p>
                  <div className="mt-4 border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm leading-6 text-slate-300">{entry.description}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </SectionShell>
  )
}
