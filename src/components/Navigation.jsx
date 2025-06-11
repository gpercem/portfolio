import { NavLink, useLocation, useNavigate } from 'react-router'
import { HiHome, HiUser, HiBriefcase, HiMail, HiSun, HiMoon } from 'react-icons/hi'
import { useEffect, useRef } from 'react'
import './Navigation.css'

const Navigation = ({ theme, toggleTheme }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const bubbleRef = useRef(null)
  const navMenuRef = useRef(null)

  const navItems = [
    { path: '/', label: 'Home', icon: HiHome },
    { path: '/about', label: 'About', icon: HiUser },
    { path: '/projects', label: 'Projects', icon: HiBriefcase },
    { path: '/contact', label: 'Contact', icon: HiMail }
  ]

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.path === location.pathname)
    if (activeIndex >= 0 && bubbleRef.current && navMenuRef.current) {
      const navLinks = navMenuRef.current.querySelectorAll('.nav-link')
      const activeLink = navLinks[activeIndex]
      
      if (activeLink) {
        const bubble = bubbleRef.current
        const menuRect = navMenuRef.current.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()
        
        bubble.style.width = `${linkRect.width}px`
        bubble.style.left = `${linkRect.left - menuRect.left}px`
      }
    }
  }, [location.pathname, navItems])

  const handleNavClick = (targetPath, event) => {
    event.preventDefault()
    
    navigate(targetPath, { 
      replace: false // Ensure we're creating a new history entry
    })
  }

  return (
    <nav className="navigation glass">
      <div className="nav-container">
        <ul className="nav-menu" ref={navMenuRef}>
          <div className="nav-bubble" ref={bubbleRef}></div>
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.path} className="nav-item">
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.path, e)}
                >
                  <IconComponent className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <HiMoon /> : <HiSun />}
        </button>
      </div>
    </nav>
  )
}

export default Navigation
