import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-surface-900/80 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
