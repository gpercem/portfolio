import React from 'react';
import './PageStyles.css'; // Common styles for pages
import '../App.css'; // Ensure App.css is imported for glowing button styles
import GlowingButton from '../components/GlowingButton';

const HomePage = () => {
  return (
    <> {/* Use Fragment as hero-section will be full-width and doesn't need a .page-container wrapper */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome</h1>
          <p className="hero-subtitle">Grab a seat, feel like home.</p>
        </div>
      </section>

      <section className="two-column-section">
        <div className="column column-wider">
          <h2>Hello! I am Gökhan.</h2>
          <p>Welcome to my site. I'm a software engineering student who likes working on computer technologies and creating digital art.</p>
          <p>Here, you'll find explorations in design, development, and about my personal experiences. Come on in and see what I've been working on!</p>
          <div style={{ height: '10px' }}></div>
          {/* Glowing Button */}
          <GlowingButton>CONTACT ME</GlowingButton>
        </div>
        <div className="column column-narrower">

        </div>
      </section>
    </>
  );
};

export default HomePage;
