'use client'
import * as React from 'react';
import AppNavbar from './views/AppNavbar';
import HeroSection from './views/HeroSection';
import WithRoot from './withRoot';
import HeroTransition from './views/HeroTransition';
import ProjectSection from './views/ProjectsSection';
import Footer from './views/Footer';

function Home() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <HeroTransition />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default WithRoot(Home);