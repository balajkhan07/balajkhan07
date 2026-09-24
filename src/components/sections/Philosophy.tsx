import { philosophy } from '../../config/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Philosophy() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title="How I approach software"
          description="A short set of principles that guide architecture and day-to-day decisions."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.map((item, index) => (
            <div
              key={item.title}
              className="bg-white p-6 dark:bg-surface-900"
            >
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
