import { motion } from 'framer-motion'

const nodes = [
  { x: 18, y: 28, label: 'UI' },
  { x: 72, y: 22, label: 'API' },
  { x: 48, y: 52, label: 'App' },
  { x: 22, y: 72, label: 'DB' },
  { x: 78, y: 68, label: 'Auth' },
]

const badges = ['React', 'Node.js', 'GraphQL', 'MongoDB', 'TypeScript', 'PostgreSQL']

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/10 via-transparent to-slate-400/10 dark:from-accent-400/15 dark:to-slate-700/20" />
      <div className="absolute inset-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/80 dark:bg-surface-900/70 dark:shadow-black/40">
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200/80 px-4 py-3 dark:border-slate-700/80">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="ml-2 font-mono text-[11px] text-slate-500">fullstack — architecture</span>
        </div>

        <div className="relative h-[calc(100%-2.75rem)] p-4">
          <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {/* Connection lines */}
            <motion.line
              x1="18" y1="28" x2="48" y2="52"
              stroke="url(#lineGrad)" strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.line
              x1="72" y1="22" x2="48" y2="52"
              stroke="url(#lineGrad)" strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.35 }}
            />
            <motion.line
              x1="48" y1="52" x2="22" y2="72"
              stroke="url(#lineGrad)" strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.line
              x1="48" y1="52" x2="78" y2="68"
              stroke="url(#lineGrad)" strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.65 }}
            />

            {nodes.map((node, i) => (
              <g key={node.label}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="currentColor"
                  className="text-surface-100 dark:text-surface-800"
                  stroke="#14b8a6"
                  strokeWidth="0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="0.35"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: [1, 1.45, 1], opacity: [0.45, 0, 0.45] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.4 }}
                />
                <text
                  x={node.x}
                  y={node.y + 1.2}
                  textAnchor="middle"
                  className="fill-slate-700 dark:fill-slate-200"
                  style={{ fontSize: '3.2px', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Floating tech badges */}
          {badges.map((badge, i) => {
            const positions = [
              'left-[6%] top-[18%]',
              'right-[8%] top-[28%]',
              'left-[10%] bottom-[28%]',
              'right-[6%] bottom-[22%]',
              'left-[36%] top-[8%]',
              'right-[28%] bottom-[8%]',
            ]
            return (
              <motion.span
                key={badge}
                className={`absolute ${positions[i]} rounded-md border border-slate-200/90 bg-white/90 px-2 py-1 font-mono text-[10px] font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-surface-800/90 dark:text-slate-200`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: 0.8 + i * 0.08 },
                  y: { duration: 3.5 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
                }}
              >
                {badge}
              </motion.span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
