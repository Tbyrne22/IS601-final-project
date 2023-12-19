'use client'
import * as React from 'react';
import AppNavbar from './views/AppNavbar';
import WithRoot from './withRoot';

function Home() {
  return (
    <>
      <AppNavbar />
      
    </>
  );
}

export default WithRoot(Home);