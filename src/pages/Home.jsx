import { HiEye, HiMail } from 'react-icons/hi'
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
        I create beautiful and functional web applications using modern technologies.
        Passionate about clean code, user experience, and innovative solutions.
      </p>
      <div className="hero-actions">
        <GlassButton to="/projects" variant="primary">
          <HiEye />
          <span>View My Work</span>
        </GlassButton>
        <GlassButton to="/contact" variant="secondary">
          <HiMail />
          <span>Get In Touch</span>
        </GlassButton>
      </div>
    </div>
  )
}

export default Home
