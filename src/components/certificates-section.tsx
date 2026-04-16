import { CERTIFICATES } from '@/content/certificates'
import { SectionShell } from '@/components/section-shell'

export function CertificatesSection() {
  return (
    <SectionShell
      id="certificates"
      eyebrow="Verified Developer Credentials"
      title="Certificates"
      description="A collection of official certificates that validate my training, completed coursework, and commitment to building a strong foundation as a developer. View each certificate directly from this section."
    >
      <div className="divide-y divide-white/10">
        {CERTIFICATES.map((certificate, index) => (
          <article
            key={certificate.name}
            className="animate-fade-up py-4"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-medium text-white">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-100"
                  >
                    {certificate.name}
                  </a>
                </h3>
                <p className="text-sm text-slate-400">{certificate.issuer}</p>
              </div>
              <span className="w-fit shrink-0 whitespace-nowrap border border-white/10 px-2 py-1 text-xs leading-none text-slate-300">
                {certificate.date}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{certificate.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
