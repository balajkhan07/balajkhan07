import { GraduationCap } from 'lucide-react'
import { education } from '../../config/site'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Formal foundation in software engineering."
        />

        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-slate-800 dark:bg-surface-900/70 sm:p-6"
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <GraduationCap size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                        {item.school}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                        {item.location}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
                      {item.startDate} — {item.endDate}
                    </p>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
