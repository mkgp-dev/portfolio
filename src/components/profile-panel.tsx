import { PROFILE } from '@/content/profile'
import { SOCIAL_LINKS } from '@/content/socials'
import { TECH_STACK } from '@/content/tech-stack'

export function ProfilePanel() {
  return (
    <aside className="py-4 md:py-0 lg:sticky lg:top-0 lg:self-start">
      <div className="flex w-full flex-col gap-6 px-1 md:gap-7 lg:max-h-[calc(100dvh-4rem)] lg:pr-6">
        <div className="space-y-1">
          <h1 className="font-heading text-3xl font-bold leading-none text-white sm:text-4xl">
            {PROFILE.name}
          </h1>
          <p className="text-xl font-thin leading-tight text-slate-200 sm:text-2xl">
            {PROFILE.title}
          </p>
        </div>

        <div className="space-y-4 text-[0.98rem] leading-6 text-slate-300">
          {PROFILE.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4 border border-sky-300/20 bg-sky-300/8 p-4">
          <div className="space-y-2">
            <p
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] ${
                PROFILE.availability.isOpenToWork
                  ? 'bg-emerald-400/12 text-emerald-200'
                  : 'bg-white/8 text-slate-200'
              }`}
            >
              {PROFILE.availability.isOpenToWork ? 'Currently looking' : 'Currently hired'}
            </p>
            <p className="text-sm leading-6 text-slate-200">
              {PROFILE.availability.isOpenToWork
                ? PROFILE.availability.message
                : `Currently hired${PROFILE.availability.currentCompany ? ` at ${PROFILE.availability.currentCompany}` : ''}.`}
            </p>
          </div>

          {PROFILE.availability.isOpenToWork ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {PROFILE.availability.actions.map((action) => {
                const Icon = action.icon
                const isDisabled = action.href.length === 0
                const isExternal = action.href.length > 0 && !action.href.startsWith('mailto:')

                if (isDisabled) {
                  return (
                    <button
                      key={action.label}
                      type="button"
                      disabled
                      className="inline-flex min-h-10 w-full items-center justify-center gap-2 border border-white/10 px-3 py-2 text-sm text-slate-500 sm:justify-start"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {action.label}
                    </button>
                  )
                }

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-sm text-sky-50 transition duration-200 hover:border-sky-200/40 hover:bg-sky-300/16 sm:justify-start"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {action.label}
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
            {TECH_STACK.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <span
                    aria-label={item.name}
                    className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/10 px-2.5 py-1.5 text-sm text-slate-300 transition duration-200 hover:border-sky-300/30 hover:text-white"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {item.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-5 md:mt-2">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon
            const external = !item.href.startsWith('mailto:')

            return (
              <a
                key={item.label}
                href={item.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                aria-label={item.label}
                className="text-slate-300 transition duration-200 hover:text-white"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
