import { CertificatesSection } from '@/components/certificates-section'
import { JourneySection } from '@/components/journey-section'
import { PortfolioNav } from '@/components/portfolio-nav'
import { ProfilePanel } from '@/components/profile-panel'
import { ProjectsSection } from '@/components/projects-section'
import { SocialSection } from '@/components/social-section'
import { NAV_ITEMS } from '@/content/navigation'

export function PortfolioPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-8 lg:h-dvh lg:py-8">
        <div className="grid gap-6 md:grid-cols-[1.35fr_2.15fr] md:gap-4 lg:h-full">
          <ProfilePanel />

          <div className="border border-white/10 bg-white/[0.03] lg:flex lg:h-full lg:flex-col lg:overflow-hidden">
            <div className="border-b border-white/10 px-4 py-3 sm:px-5 lg:shrink-0">
              <PortfolioNav items={NAV_ITEMS} />
            </div>

            <main className="divide-y divide-white/10 lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
              <ProjectsSection />
              <CertificatesSection />
              <JourneySection />
              <SocialSection />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
