import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Sparkles,
  Code,
  Database,
  Globe
} from 'lucide-react'

import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-[#f5ebdf] text-[#480f1b]">

      {/* Navigation */}

      <header className="sticky top-0 z-50 bg-[#f5ebdf]/95 backdrop-blur-lg border-b border-[#480f1b]/15">

        <nav className="max-w-[1440px] mx-auto px-6 md:px-14 h-20 flex items-center justify-between">

          <a
            href="#home"
            className="font-editorial text-4xl font-semibold tracking-tight"
          >
            AS<span className="text-[#986b59]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">

            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-label text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#986b59] transition-colors"
              >
                {item.label}
              </a>
            ))}

          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 border-b border-[#480f1b] pb-1 font-label uppercase text-[11px] tracking-widest"
          >
            Let's Connect <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </nav>

        {menuOpen && (
          <div className="md:hidden px-6 py-6 border-t border-[#480f1b]/15">

            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-label text-sm uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}

          </div>
        )}

      </header>

      <main>

        {/* Editorial Hero */}

        <section
          id="home"
          className="max-w-[1440px] mx-auto px-6 md:px-14 pt-10 md:pt-14 pb-14 scroll-mt-20"
        >

          {/* Magazine Header */}

          <div className="flex items-center justify-between gap-4">

            <span className="font-label text-[9px] md:text-[11px] uppercase tracking-[0.25em]">
              Creative Development
            </span>

            <div className="hidden sm:flex flex-1 items-center px-8">

              <div className="h-px bg-[#bb9380] w-full" />

              <Sparkles
                size={16}
                className="mx-3 text-[#986b59]"
              />

              <div className="h-px bg-[#bb9380] w-full" />

            </div>

            <span className="font-label text-[9px] md:text-[11px] uppercase tracking-widest">
              Vol. 01 / 2026
            </span>

          </div>

          {/* Portfolio Heading */}

          <motion.h1
                initial={
                reduceMotion
                ? false
                 : { opacity: 0, y: 25 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-editorial text-[13vw] md:text-[10vw] xl:text-[110px] leading-none font-medium tracking-[-0.065em] text-center py-8 md:py-10"
>
                 PORTFOLIO
                 </motion.h1>

          <div className="flex items-center gap-5">

            <div className="h-px bg-[#bb9380] flex-1" />

            <span className="text-[#986b59] text-lg">
              ✧
            </span>

            <div className="h-px bg-[#bb9380] flex-1" />

          </div>

          {/* Main Introduction */}

          <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-8 lg:gap-16 items-center py-8 lg:py-10">

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15
              }}
            >

              <div className="flex items-center gap-3 mb-6">

                <span className="w-2 h-2 bg-[#480f1b] rounded-full" />

                <span className="font-label text-[10px] uppercase tracking-[0.25em]">
                  Open to opportunities
                </span>

              </div>

              <p className="font-label text-xs md:text-sm uppercase tracking-[0.25em] text-[#80594c] mb-5">
                Frontend Developer
              </p>

              <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-medium">

                Where creativity

                <br />

                meets{' '}

                <span className="italic text-[#986b59]">
                  code.
                </span>

              </h2>

              <div className="border-l border-[#bb9380] pl-6 mt-7 max-w-lg">

                <p className="text-[#594038] leading-[1.9] text-sm md:text-base">

                  I'm Azeema Shaheen, a Computer Science graduate
                  with a passion for building intuitive web interfaces,
                  database-driven applications and meaningful
                  digital experiences.

                </p>

                <p className="text-[#594038] leading-[1.9] text-sm md:text-base mt-3">

                  Combining creative design with practical
                  software development, from frontend interfaces
                  to backend business logic.

                </p>

              </div>

              {/* Signature */}

              <p className="font-signature text-5xl md:text-6xl text-[#986b59] mt-7">
                Azeema Shaheen
              </p>

              {/* Hero Buttons */}

              <div className="flex flex-wrap gap-4 mt-7">

                <a
                  href="#projects"
                  className="bg-[#480f1b] text-[#fff9f2] px-6 py-4 flex items-center gap-3 font-label text-[10px] tracking-widest uppercase hover:bg-[#692534] transition-colors"
                >
                  Explore My Work

                  <ArrowUpRight size={17} />

                </a>

                <a
                  href="#contact"
                  className="border border-[#480f1b] px-6 py-4 flex items-center gap-3 font-label text-[10px] tracking-widest uppercase hover:bg-[#480f1b] hover:text-[#fff9f2] transition-colors"
                >
                  Get In Touch

                  <ArrowUpRight size={17} />

                </a>

                {/* Download Resume */}

                <a
                  href={`${import.meta.env.BASE_URL}Azeema-Shaheen-Resume.pdf`}
                  download="Azeema-Shaheen-Resume.pdf"
                  className="inline-flex items-center justify-center gap-3 border border-[#480f1b] px-6 py-4 font-label text-[10px] uppercase tracking-widest text-[#480f1b] hover:bg-[#480f1b] hover:text-[#f5ebdf] transition-colors duration-300"
                >
                  Download Resume

                  <ArrowDown size={17} />

                </a>

              </div>

            </motion.div>

            {/* Custom Monogram */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.96 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              className="relative max-w-[410px] w-full mx-auto"
            >

              <div className="absolute -left-5 top-1/2 text-[#986b59] text-4xl">
                ✧
              </div>

              <div className="absolute -right-4 top-16 text-[#986b59] text-3xl">
                ✦
              </div>

              <div className="border border-[#bb9380] p-3 rounded-t-full">

                <div className="bg-[#480f1b] rounded-t-full aspect-[4/4.8] relative overflow-hidden flex flex-col items-center justify-center text-[#f5ebdf]">

                  <div className="absolute inset-4 border border-[#bb9380]/60 rounded-t-full" />

                  <div className="absolute top-16 text-[#bb9380] text-2xl">
                    ✧
                  </div>

                  <svg
                    viewBox="0 0 250 230"
                    className="w-[85%] relative"
                    role="img"
                    aria-label="Azeema Shaheen monogram"
                  >

                    <text
                      x="101"
                      y="165"
                      textAnchor="middle"
                      fontFamily="Cormorant Garamond, Georgia, serif"
                      fontSize="185"
                      fontWeight="400"
                      fill="#f5ebdf"
                    >
                      A
                    </text>

                    <text
                      x="155"
                      y="199"
                      textAnchor="middle"
                      fontFamily="Cormorant Garamond, Georgia, serif"
                      fontStyle="italic"
                      fontSize="180"
                      fill="#bb9380"
                    >
                      S
                    </text>

                  </svg>

                  <div className="relative text-center px-6">

                    <div className="w-12 h-px bg-[#bb9380] mx-auto mb-5" />

                    <p className="font-label text-[10px] tracking-[0.3em] uppercase">
                      Design · Code · Create
                    </p>

                    <p className="font-editorial italic text-xl text-[#d9b9a7] mt-3">
                      Built with purpose.
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex justify-between mt-4 font-label uppercase text-[9px] tracking-widest text-[#80594c]">

                <span>Est. 2026</span>

                <span>Based in Pakistan</span>

              </div>

            </motion.div>

          </div>

          {/* Bottom Editorial Strip */}

          <div className="border-y border-[#bb9380] py-5 grid grid-cols-3 gap-3">

            {[
              {
                icon: Code,
                label: 'Frontend Development'
              },
              {
                icon: Database,
                label: 'Backend & Databases'
              },
              {
                icon: Globe,
                label: 'APIs & Deployment'
              }
            ].map(({ icon: Icon, label }) => (

              <div
                key={label}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center"
              >

                <Icon
                  size={20}
                  strokeWidth={1.4}
                />

                <span className="font-label text-[9px] md:text-[10px] tracking-wider uppercase">

                  {label}

                </span>

              </div>

            ))}

          </div>

          <a
            href="#projects"
            className="flex items-center justify-center gap-2 mt-8 text-[#80594c]"
          >

            <span className="font-label text-[9px] tracking-widest uppercase">
              Discover my work
            </span>

            <ArrowDown size={14} />

          </a>

        </section>

        {/* Featured Work Section */}

        <section
          id="projects"
          className="bg-[#480f1b] text-[#f5ebdf] py-16 md:py-20 px-6 md:px-14 scroll-mt-20"
        >

          <div className="max-w-[1328px] mx-auto">

            <div className="flex items-center gap-6">

              <div className="flex-1 h-px bg-[#bb9380]/50" />

              <span className="font-label text-[10px] tracking-[0.3em] uppercase">
                ✧ Selected Work ✧
              </span>

              <div className="flex-1 h-px bg-[#bb9380]/50" />

            </div>

            <h2 className="font-editorial text-5xl md:text-7xl text-center my-6">
              Ideas brought to life.
            </h2>

            <p className="text-center max-w-xl mx-auto text-[#e0c8ba] text-sm leading-relaxed">

              A selection of projects exploring web development,
              user experience and database-driven solutions.

            </p>

            {/* Project Cards */}

            <Projects />

          </div>

        </section>

        {/* About and Skills Section */}

        <About />

        {/* Contact Section and Footer */}

        <Contact />

      </main>

    </div>
  )
}

export default App