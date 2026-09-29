import { MotionConfig } from 'framer-motion'
import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Story } from './components/sections/Story'
import { About } from './components/sections/About'
import { Journey } from './components/sections/Journey'
import { Characters } from './components/sections/Characters'
import { WhyTalk } from './components/sections/WhyTalk'
import { Culture } from './components/sections/Culture'
import { HowItWorks } from './components/sections/HowItWorks'
import { RpgTool } from './components/sections/RpgTool'
import { Safety } from './components/sections/Safety'
import { SLA } from './components/sections/SLA'
import { Team } from './components/sections/Team'
import { Finale } from './components/sections/Finale'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-osso focus:px-5 focus:py-3 focus:font-semibold focus:text-terra">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Story />
        <About />
        <Journey />
        <Characters />
        <WhyTalk />
        <Culture />
        <HowItWorks />
        <RpgTool />
        <Safety />
        <SLA />
        <Team />
        <Finale />
      </main>
      <Footer />
    </MotionConfig>
  )
}
