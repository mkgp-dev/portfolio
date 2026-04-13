import { useState } from 'react'
import { ArrowUpRight, ExternalLink, GitBranch } from 'lucide-react'

import { PROJECT_GROUPS } from '@/content/projects'
import { SectionShell } from '@/components/section-shell'

export function ProjectsSection() {
  const [activeGroupId, setActiveGroupId] = useState(PROJECT_GROUPS[0].id)
  const activeGroup =
    PROJECT_GROUPS.find((group) => group.id === activeGroupId) ?? PROJECT_GROUPS[0]

  return (
    <SectionShell
      id="projects"
      eyebrow="Coursework & Personal Projects"
      title="Projects"
      description="These projects were created through coursework and personal exploration, showcasing my practical experience, curiosity, and continuous growth in development."
    >
      <div className="space-y-5">
        <div
          role="tablist"
          aria-label="Project categories"
          className="grid gap-1 border border-white/10 bg-white/[0.03] p-1 sm:inline-flex sm:w-full sm:flex-wrap"
        >
          {PROJECT_GROUPS.map((group) => (
            <button
              key={group.id}
              id={`project-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={activeGroup.id === group.id}
              aria-controls={`project-panel-${group.id}`}
              tabIndex={activeGroup.id === group.id ? 0 : -1}
              className={`min-h-10 cursor-pointer px-3 py-2 text-sm transition duration-200 sm:min-w-[9rem] ${
                activeGroup.id === group.id
                  ? 'bg-white text-slate-950'
                  : 'text-slate-300 hover:bg-white/6 hover:text-white'
              }`}
              onClick={() => {
                setActiveGroupId(group.id)
              }}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div
          id={`project-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-labelledby={`project-tab-${activeGroup.id}`}
          className="space-y-4"
        >

          <div key={activeGroup.id} className="columns-1 gap-3 md:columns-2">
            {activeGroup.projects.map((project) => (
              <article
                key={`${activeGroup.id}-${project.name}`}
                className="animate-fade-up mb-3 break-inside-avoid border border-white/10 bg-white/[0.03] p-4 transition duration-200 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-white">{project.name}</h3>
                  {project.description ? (
                    <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                  ) : null}
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5 text-xs">
                  {project.stack.map((item) => (
                    <li
                      key={`${project.name}-${item}`}
                      className="border border-white/10 px-2 py-1 text-slate-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {(project.sourceUrl || project.liveUrl) && (
                  <div className="mt-4 flex flex-wrap justify-end gap-4 text-xs text-slate-300">
                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Source for ${project.name}`}
                        className="inline-flex min-h-8 items-center gap-1 hover:text-white"
                      >
                        <GitBranch className="size-3.5" aria-hidden="true" />
                        View source
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                        className="inline-flex min-h-8 items-center gap-1 hover:text-white"
                      >
                        {project.sourceUrl ? (
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                        ) : (
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        )}
                        Visit site
                      </a>
                    ) : null}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
