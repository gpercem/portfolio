import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import WorksButton from './WorksButton';
import './WorksNavigation.css';

const WorksNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveCategory = () => {
    const path = location.pathname;
    if (path.includes('/games')) return 'games';
    if (path.includes('/projects')) return 'projects';
    if (path.includes('/apps')) return 'apps';
    return 'designs'; // default
  };

  const activeCategory = getActiveCategory();

  const handleNavigation = (category) => {
    if (category === 'designs') {
      navigate('/works');
    } else {
      navigate(`/works/${category}`);
    }
  };

  return (
    <section className="works-navigation">
      <WorksButton 
        onClick={() => handleNavigation('designs')}
        className={activeCategory === 'designs' ? 'active' : ''}
      >
        MY DESIGNS
      </WorksButton>
      <WorksButton 
        type="image"
        onClick={() => handleNavigation('games')}
        className={activeCategory === 'games' ? 'active' : ''}
      >
        MY GAMES
      </WorksButton>
      <WorksButton 
        onClick={() => handleNavigation('projects')}
        className={activeCategory === 'projects' ? 'active' : ''}
      >
        MY PROJECTS
      </WorksButton>
      <WorksButton 
        onClick={() => handleNavigation('apps')}
        className={activeCategory === 'apps' ? 'active' : ''}
      >
        MY APPS
      </WorksButton>
    </section>
  );
};

export default WorksNavigation;
