import { FloatingDockDemo } from './navbar/navbar.jsx'
import { BackgroundRippleEffectDemo } from './background/background.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'
import CaseStudies from './caseStudies/caseStudies.jsx'
import Footer from './footer/footer.jsx'
import './index.css'

function App() {
  return (
    <main className='flex flex-col pb-24'>
      <BackgroundRippleEffectDemo />
      <About />
      <Projects />
      <CaseStudies />
      <Footer />
      <FloatingDockDemo />
    </main>
  )
}

export default App
