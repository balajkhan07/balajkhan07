import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  target?: string
  rel?: string
  'aria-label'?: string
}

const variants = {
  primary:
    'bg-accent-500 text-surface-950 hover:bg-accent-400 shadow-lg shadow-accent-500/20 border border-transparent',
  secondary:
    'bg-transparent text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400',
  ghost:
    'bg-transparent text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 border border-transparent',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  onClick,
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:focus-visible:ring-offset-surface-950 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
