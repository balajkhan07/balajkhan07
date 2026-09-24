import { Check, Copy, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../config/site'
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = siteConfig.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-surface-50 to-accent-500/5 p-8 dark:border-slate-800 dark:from-surface-900 dark:via-surface-950 dark:to-accent-500/10 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Let&apos;s build something useful
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Open to roles, freelance work, consulting, and conversations about full-stack products,
                APIs, and integrations. Reach out by email or connect on LinkedIn.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${siteConfig.email}`}>
                  <Mail size={16} />
                  Email Me
                </Button>
                <Button type="button" variant="secondary" onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy Email'}
                </Button>
              </div>
            </div>

            <ul className="space-y-4 rounded-2xl border border-slate-200/80 bg-white/70 p-6 dark:border-slate-700 dark:bg-surface-950/50">
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <Mail size={16} className="text-accent-600 dark:text-accent-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-600 dark:hover:text-accent-400">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <LinkedInIcon size={16} className="text-accent-600 dark:text-accent-400" />
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-600 dark:hover:text-accent-400"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <GitHubIcon size={16} className="text-accent-600 dark:text-accent-400" />
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-600 dark:hover:text-accent-400"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <MapPin size={16} className="text-accent-600 dark:text-accent-400" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
