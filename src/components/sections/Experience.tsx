import { experience } from '../../config/site'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="Roles across insurance, logistics, and enterprise software delivery."
        />

        <div className="relative space-y-6 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-slate-200 dark:before:bg-slate-800 sm:before:left-[15px]">
          {experience.map((job) => (
            <article key={job.id} className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-500 bg-surface-50 dark:bg-surface-950">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </span>

              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-slate-800 dark:bg-surface-900/70 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                      {job.company}
                      {job.location && (
                        <span className="font-normal text-slate-500 dark:text-slate-500">
                          {' '}
                          · {job.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
                    {job.startDate} — {job.endDate}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.description}
                </p>

                {job.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
