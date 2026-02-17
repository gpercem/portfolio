import { HiEye, HiDocumentDownload } from 'react-icons/hi'
import GlassButton from '../components/GlassButton'
import './Home.css'

const Home = () => {
  return (
    <div className="home-layout">
      <div className="hero-content glass">
        <p className="hero-label">Full Stack & Game Developer</p>
        <h1 className="hero-title">
          Hi, I'm <span className="text-accent">Gökhan Perçem</span>
        </h1>
        <p className="hero-description">
          I love building cool games and websites.
        </p>
        <div className="hero-actions">
          <GlassButton to="/projects" variant="primary">
            <HiEye />
            <span>View My Work</span>
          </GlassButton>
          <GlassButton href="/files/gokhan-percem-cv-2026-02.pdf" variant="secondary">
            <HiDocumentDownload />
            <span>Download CV</span>
          </GlassButton>
        </div>
      </div>

      <div className="github-section">
        <div className="github-graph-card glass">
          <div className="github-graph-header">
            <span className="github-indicator"></span>
            <span className="github-label">GitHub Contributions</span>
          </div>
          <div className="github-graph-wrapper">
            <img
              src="https://ghchart.rshah.org/gpercem"
              alt="GitHub Contribution Graph"
              className="github-graph-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
