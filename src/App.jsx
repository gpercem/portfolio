import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import GridBackground from './components/GridBackground'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { initSmoothScroll } from './utils/smoothScroll'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  useEffect(() => {
    // Check for saved theme first, then fall back to system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
    
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    
    // Listen for system theme changes only if no saved preference
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e) => {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Initialize smooth scrolling
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="app">
      <GridBackground />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
