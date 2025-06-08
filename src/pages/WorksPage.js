import React from 'react';
import { Routes, Route } from 'react-router';
import './PageStyles.css';
import WorksNavigation from '../components/WorksNavigation';
import PageTransition from '../components/PageTransition';
import Designs from './works/Designs';
import Games from './works/Games';
import Projects from './works/Projects';
import Apps from './works/Apps';

const WorksPage = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <WorksNavigation />
        <Routes>
          <Route path="/" element={<Designs />} />
          <Route path="/games" element={<Games />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </PageTransition>
  );
};

export default WorksPage;
