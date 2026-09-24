import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={hover ? { y: -3 } : undefined}
      className={`rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-surface-900/70 dark:shadow-none ${className}`}
    >
      {children}
    </motion.div>
  )
}
