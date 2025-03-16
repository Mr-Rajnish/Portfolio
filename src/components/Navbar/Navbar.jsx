import './Navbar.css';
import React, { useState } from 'react';
import logo from "../../assets/logo.png";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="Logo" />
      <div className="nav-links">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
      </button>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button onClick={() => { toggleDarkMode(); closeMenu(); }}>
            {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
