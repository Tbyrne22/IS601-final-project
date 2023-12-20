'use client'
import * as React from 'react';
import AppNavbar from './views/AppNavbar';
import HeroSection from './views/HeroSection';
import WithRoot from './withRoot';

function Home() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
    </>
  );
}

export default WithRoot(Home);