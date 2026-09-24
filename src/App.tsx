import { ThemeProvider } from './hooks/useTheme'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Highlights } from './components/sections/Highlights'
import { Philosophy } from './components/sections/Philosophy'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { WhatIBuild } from './components/sections/WhatIBuild'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Highlights />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <WhatIBuild />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
