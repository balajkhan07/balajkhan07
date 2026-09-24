import { aboutContent } from '../../config/site'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Full-stack engineer building end-to-end products"
              description="Comfortable across APIs, data, integrations, and the interfaces users work in every day."
            />
            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {aboutContent.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-surface-100/80 p-6 dark:border-slate-800 dark:from-surface-900 dark:to-surface-950 sm:p-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Focus areas
            </h3>
            <ul className="mt-5 space-y-3">
              {aboutContent.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {['APIs', 'Integrations', 'Databases', 'Cloud', 'Performance'].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
