import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

/**
 * User site (https://balajkhan.github.io) → base '/'
 * Requires a GitHub repo named: balajkhan.github.io
 *
 * Override with VITE_BASE_PATH if you ever deploy as a project site.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
