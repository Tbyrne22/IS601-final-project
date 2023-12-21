'use client'
import * as React from 'react';
import WithRoot from '../withRoot';
import AppNavbar from '../views/AppNavbar';
import Footer from '../views/Footer';

function Projects() {
  return (
    <>
      <AppNavbar />

      <Footer />
    </>
  );
}

export default WithRoot(Projects);