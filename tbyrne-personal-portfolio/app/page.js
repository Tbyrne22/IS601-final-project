'use client'
import * as React from 'react';
import AppNavbar from './views/AppNavbar';
import HeroSection from './views/HeroSection';
import WithRoot from './withRoot';
import HeroTransition from './views/HeroTransition';

function Home() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <HeroTransition />
    </>
  );
}

export default WithRoot(Home);