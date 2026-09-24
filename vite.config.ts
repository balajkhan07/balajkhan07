import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

/**
 * Project site: https://balajkhan07.github.io/balajkhan/
 * (GitHub username is balajkhan07, repo is balajkhan)
 *
 * For a root user site later, rename the repo to balajkhan07.github.io
 * and set VITE_BASE_PATH=/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || '/balajkhan/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
