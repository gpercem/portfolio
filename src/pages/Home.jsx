import { HiEye, HiDocumentDownload } from 'react-icons/hi'
import GlassButton from '../components/GlassButton'
import './Home.css'

const Home = () => {
  return (
    <div className="hero-content glass">
      <h1 className="hero-title">
        Hi, I'm <span className="text-accent">Gökhan Perçem</span>
      </h1>
      <p className="hero-subtitle">Full Stack & Game Developer</p>
      <p className="hero-description">
        I love building cool games and websites.
        <br />
        Perfection is the key to my work.
      </p>
      <div className="hero-actions">
        <GlassButton to="/projects" variant="primary">
          <HiEye />
          <span>View My Work</span>
        </GlassButton>
        <GlassButton href="/files/gokhan-percem-cv.pdf" variant="secondary">
          <HiDocumentDownload />
          <span>Download CV</span>
        </GlassButton>
      </div>
    </div>
  )
}

export default Home
