import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-slate-200 bg-white/70 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-surface-900/80 dark:text-slate-300 ${className}`}
    >
      {children}
    </span>
  )
}
