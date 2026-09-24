import { ExternalLink } from 'lucide-react'
import { projects } from '../../config/site'
import { GitHubIcon } from '../icons/SocialIcons'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Representative systems based on the kinds of platforms I build. Edit these entries in src/config/site.ts — no confidential client details included."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                </div>
                {project.isExample && (
                  <span className="shrink-0 rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:border-slate-700">
                    Editable
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {project.challenges.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technical challenges
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {project.challenges.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-5 flex gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                    >
                      <GitHubIcon size={15} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
