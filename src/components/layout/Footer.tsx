import { siteConfig } from '../../config/site'
import { GitHubIcon } from '../icons/SocialIcons'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {year} · Senior Full Stack Engineer
          </p>
        </div>
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          <GitHubIcon size={16} />
          GitHub
        </a>
      </Container>
    </footer>
  )
}
