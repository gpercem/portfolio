import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Close mobile menu on resize to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-left">
          {isMobileView ? (
            <button className="nav-icon language-icon" aria-label="Language">
              🌐
            </button>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/works" className="nav-link">My Works</Link>
            </>
          )}
        </div>
        <div className="nav-center">
          <Link to="/" className="logo-text">Gökhan Perçem</Link>
        </div>
        <div className="nav-right">
          {isMobileView ? (
            <button onClick={toggleMobileMenu} className="nav-icon hamburger-icon" aria-label="Menu">
              ☰
            </button>
          ) : (
            <>
              <Link to="/about" className="nav-link">About Me</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </>
          )}
        </div>
      </nav>
      {isMobileView && isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/works" className="mobile-nav-link" onClick={toggleMobileMenu}>My Works</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About Me</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
