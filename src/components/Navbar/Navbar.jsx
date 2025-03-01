import './Navbar.css';
import React, { useState } from 'react';
import logo from "../../assets/logo.png";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="Logo" />
      <div className="nav-links">
        <a href="#about">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
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
          <a href="#about">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;