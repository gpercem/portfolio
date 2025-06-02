import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import './App.css';

// AnimatePresence requires a location from useLocation
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="page-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
