import { HiEye, HiMail } from 'react-icons/hi'
import { Link } from 'react-router'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <div className="hero-content glass">
            <h1 className="hero-title">
              Hi, I'm <span className="text-accent">Gökhan Perçem</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create beautiful and functional web applications using modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                <HiEye />
                <span>View My Work</span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                <HiMail />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
