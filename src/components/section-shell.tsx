import type { PropsWithChildren } from 'react'

type SectionShellProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  description: string
}>

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-0 px-5 pb-7 pt-4 sm:px-7 sm:pb-8 sm:pt-5"
    >
      <div className="mb-5 space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h2
            id={`${id}-heading`}
            className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-[1.8rem]"
          >
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-slate-400 sm:text-[0.98rem]">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  )
}
