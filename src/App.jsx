import { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import GridBackground from './components/GridBackground'
import PageTransition from './components/PageTransition'
import LoadingSpinner from './components/LoadingSpinner'
import { initSmoothScroll } from './utils/smoothScroll'
import './App.css'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // Preload all pages
  useEffect(() => {
    const preloadPages = async () => {
      try {
        await Promise.all([
          import('./pages/Home'),
          import('./pages/About'),
          import('./pages/Projects'),
          import('./pages/Contact')
        ])
        setIsLoading(false)
      } catch (error) {
        console.error('Error preloading pages:', error)
        setIsLoading(false)
      }
    }

    preloadPages()
  }, [])

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

  if (isLoading) {
    return (
      <div className="app">
        <GridBackground />
        <LoadingSpinner />
      </div>
    )
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
