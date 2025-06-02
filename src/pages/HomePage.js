import React from 'react';
import './PageStyles.css'; // Common styles for pages
import '../App.css'; // Ensure App.css is imported for glowing button styles
import GlowingButton from '../components/GlowingButton';
import AboutButtonsSection from '../components/AboutButtonsSection';


import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaItchIo } from 'react-icons/fa6';

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome</h1>
          <p className="hero-subtitle">Grab a seat, feel like home.</p>
        </div>
      </section>

      <section className="two-column-section">
        <div className="column column-wider column-yellow">
          <h2>Hello! I am Gökhan.</h2>
          <p>Welcome to my site. I'm a software engineering student who likes working on computer technologies and creating digital art.</p>
          <div style={{ height: '10px' }}></div>
          {/* Glowing Button */}
          <GlowingButton>CONTACT ME</GlowingButton>
        </div>
        <div className="column column-narrower column-green">

        </div>
      </section>

      <AboutButtonsSection />

      <section className="two-column-section">
        <div className="column column-narrower column-green">
          <h2>My Socials</h2>
          <a className="social" href="https://www.linkedin.com/in/gokhanpercem/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24}/> <p>gokhanpercem</p> 
          </a>
          <a className="social" href="https://www.github.com/gokhanpercem" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24}/> <p>gpercem</p>
          </a>
          <a className="social" href="https://gokomon.itch.io/" target="_blank" rel="noopener noreferrer">
            <FaItchIo size={24}/> <p>gokomon</p>
          </a>
          <a class="social" href="https://www.instagram.com/gokhanpercem/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24}/> <p>gokhanpercem</p>
          </a>
          <div style={{ height: '10px' }}></div>
          {/* Glowing Button */}
        </div>
        <div className="column column-wider column-yellow">

        </div>
      </section>
    </>
  );
};

export default HomePage;
