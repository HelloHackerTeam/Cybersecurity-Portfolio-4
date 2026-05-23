import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Gallery from '../sections/Gallery'
import Achievements from '../sections/Achievements'
import Education from '../sections/Education'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function Home({ theme, setTheme }){
  return (
    <div>
      <CustomCursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="scroll-smooth">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
