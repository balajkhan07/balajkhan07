import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../config/site'
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { HeroVisual } from '../visual/HeroVisual'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-400/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-600/20" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-600 dark:text-accent-400"
          >
            {siteConfig.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {siteConfig.name}
            <span className="mt-2 block text-2xl font-medium text-slate-600 dark:text-slate-300 sm:text-3xl lg:text-3xl">
              {siteConfig.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-500"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              View My Work
              <ArrowDownRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  )
}
