'use client'
import * as React from 'react';
import WithRoot from '../withRoot';
import AppNavbar from '../views/AppNavbar';
import Footer from '../views/Footer';
import MyProjectsPage from '../views/ProjectsPage';

function Projects() {
  return (
    <>
      <AppNavbar />
      <MyProjectsPage />
      <Footer />
    </>
  );
}

export default WithRoot(Projects);