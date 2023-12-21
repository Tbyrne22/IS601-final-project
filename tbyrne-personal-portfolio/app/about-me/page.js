'use client'
import * as React from 'react';
import WithRoot from '../withRoot';
import AppNavbar from '../views/AppNavbar';
import AboutMeSection from '../views/AboutMeSection';
import Footer from '../views/Footer';

function AboutMe() {
  return (
    <>
      <AppNavbar />
      <AboutMeSection />
      <Footer />
    </>
  );
}

export default WithRoot(AboutMe);