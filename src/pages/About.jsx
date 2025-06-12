import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-bento-grid">
        {/* Large Intro Card */}
        <div className="bento-item bento-intro glass">
          <div className="bento-content">
            <h2>Hello, I'm Gokhan</h2>
            <p>
              Full stack developer passionate about building beautiful, functional, and user-friendly applications. I love modern web technologies and creative problem solving.
            </p>
          </div>
        </div>
        {/* Skills Card */}
        <div className="bento-item bento-skills glass">
          <div className="bento-content">
            <div className="skills-header">
              <h3>Skills</h3>
              <div className="skills-list">
                <span>React</span>
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>CSS</span>
                <span>Python</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
        {/* Experience Card - Now contains Stats content */}
        <div className="bento-item bento-experience glass">
          <div className="bento-content">
            <h3>Stats</h3>
            <div className="stats-list">
              <div>
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div>
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div>
                <span className="stat-number">100+</span>
                <span className="stat-label">Commits/mo</span>
              </div>
            </div>
          </div>
        </div>
        {/* Education Card */}
        <div className="bento-item bento-education glass">
          <div className="bento-content">
            <h3>Education</h3>
            <div>
              <strong>BSc Computer Science</strong>
              <div className="bento-period">2016 - 2020</div>
              <div>Software engineering & web development</div>
            </div>
          </div>
        </div>
        {/* Interests Card */}
        <div className="bento-item bento-interests glass">
          <div className="bento-content">
            <h3>Interests</h3>
            <ul className="interests-list">
              <li>Space Tech</li>
              <li>Music</li>
              <li>Learning</li>
              <li>Open Source</li>
            </ul>
          </div>
        </div>
        {/* Stats Card - Now contains Experience content */}
        <div className="bento-item bento-stats glass">
          <div className="bento-content">
            <h3>Experience</h3>
            <div>
              <strong>Full Stack Developer</strong>
              <div className="bento-period">2020 - Present</div>
              <div>Modern web apps, UI/UX, backend APIs</div>
            </div>
          </div>
        </div>
        {/* Contact Card */}
        <div className="bento-item bento-contact glass">
          <div className="bento-content">
            <h3>Let's Connect</h3>
            <p>Open to new opportunities and collaborations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
