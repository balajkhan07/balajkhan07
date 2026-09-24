import { Database, Layout, Plug, Server, Sparkles, Webhook } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { whatIBuild } from '../../config/site'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<(typeof whatIBuild)[number]['icon'], LucideIcon> = {
  server: Server,
  layout: Layout,
  api: Webhook,
  database: Database,
  plug: Plug,
  sparkles: Sparkles,
}

export function WhatIBuild() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What I Build"
          title="Full-stack engineering in practice"
          description="The kinds of systems and product surfaces that define most of my day-to-day work."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <Card key={item.title}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-surface-800 dark:text-accent-400">
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
