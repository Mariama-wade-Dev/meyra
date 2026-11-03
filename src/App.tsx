import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-prune focus:px-5 focus:py-3 focus:text-ivory"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
