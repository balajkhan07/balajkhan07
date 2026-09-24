import { Database, Layout, Server, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { highlights } from '../../config/site'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<(typeof highlights)[number]['icon'], LucideIcon> = {
  server: Server,
  layout: Layout,
  database: Database,
  sparkles: Sparkles,
}

export function Highlights() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Engineering Highlights"
          title="Where I spend my time"
          description="Core strengths across full-stack product work, APIs, data, and AI-assisted engineering."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <Card key={item.title} className="h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
