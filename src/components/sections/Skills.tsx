import { alsoFamiliar, skillCategories } from '../../config/site'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Organized by the layers I work across — from services and data to infrastructure and integrations."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500 dark:text-slate-500">Also familiar with:</span>
          {alsoFamiliar.map((skill) => (
            <Badge key={skill} className="opacity-90">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  )
}
