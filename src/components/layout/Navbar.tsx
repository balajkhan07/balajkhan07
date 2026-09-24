import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'projects',
  'contact',
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-surface-50/90 backdrop-blur-xl dark:border-slate-800/80 dark:bg-surface-950/90'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between section-pad">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="text-accent-600 dark:text-accent-400">{siteConfig.shortName}</span>
          <span className="ml-2 hidden sm:inline">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 sm:inline-flex"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 sm:inline-flex"
          >
            <LinkedInIcon size={18} />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-surface-50 dark:border-slate-800 dark:bg-surface-950 lg:hidden"
          >
            <ul className="section-pad flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-surface-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-3 px-3 pt-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <GitHubIcon size={16} /> GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
