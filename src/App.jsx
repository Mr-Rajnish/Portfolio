
import './App.css'

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Achievement from './components/Achievements/Achievement';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setDarkMode(savedMode === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <AboutMe/>
      <Experience/>
      <Projects />
      <Education/>
      <Achievement/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;