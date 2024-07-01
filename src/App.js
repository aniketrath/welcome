import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

import { Introduction, Experience, Projects, Contact } from './components/index'
import { Box, Footer } from './components/Root/index'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loading-wrapper ${loading ? 'visible' : 'hidden'}`}>
        <LoadingScreen />
      </div>
      <Box>
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </>
  )
}



