
import './AboutMe.css';
import React from 'react';
import aboutMePic from '../../assets/AboutMepic.jpg';
import frontend from '../../assets/frontend-img.jpeg';
import backend from '../../assets/backend-img.jpeg';
import fullstack from '../../assets/fullstack-img.jpeg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState,useEffect } from 'react';
function AboutMe() {
    const phrases = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Machine Learning",
      ];
    
       // State variables to manage the typing effect
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed in milliseconds

  // Effect hook to handle typing and deleting
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        // Typing phase: Add one character at a time
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          // Fully typed: Pause for 2 seconds, then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase: Remove one character at a time
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          // Fully deleted: Move to the next phrase and reset
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    // Set a timeout to update text at the specified speed
    const timer = setTimeout(handleTyping, typingSpeed);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);
  return (
    <div>
    <div className="about-me" id="about">

      <div className="text-container">
        <h1>Hey !!<br/> Rajnish Singh here,</h1><b> <h2 className="typing-effect">{currentText}</h2></b><br /><br />
         {/* Social Media Icons */}
         <div className="footer-icons">
          <a href="https://github.com/Mr-Rajnish" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github-icon" />
          </a>

          <a href="https://www.linkedin.com/in/rajnish-singh-610662256/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin-icon" />
          </a>

          <a href="https://www.instagram.com/singh_rajnish_here/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram-icon" />
          </a>

          <a href="https://leetcode.com/u/MrRajnish_singh/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="icon leetcode-icon" />
          </a>
        </div>
        <br /><br />
        <button id='resume-link'><a href="https://coral-gracia-55.tiiny.site">Resume</a>
        </button>
      </div>
      <div className="image-container">
        <img src={aboutMePic} alt="Profile Photo" />
      </div>

      </div>
   
      <h1 className='services-h1'>Services</h1>
      
      <div className="services-container">
       
        
        <div className="service-card">
          {/* Placeholder for icon, e.g., <i className="fas fa-laptop-code"></i> */}
          <h3>Full Stack Web Development</h3>
          <p>Building complete web applications from frontend to backend.</p>
          <img  className='service-type' src={fullstack} alt="" />
        </div>
        <div className="service-card">
          {/* Placeholder for icon, e.g., <i className="fas fa-brain"></i> */}
          <h3>Machine Learning & Data Services</h3>
          <p>Transforming raw data into insights through cleaning, preprocessing, modeling, and visualization.</p>
          <img  className='service-type'  src="https://www.malomatia.com/wp-content/uploads/2023/11/Data-Ai-Webpage-05.png" alt="" />
        </div>
        <div className="service-card">
          {/* Placeholder for icon, e.g., <i className="fas fa-desktop"></i> */}
          <h3>Frontend Development</h3>
          <p>Crafting responsive and interactive user interfaces.</p>
          <img className='service-type' src={frontend} alt="" />
        </div>
        <div className="service-card">
          {/* Placeholder for icon, e.g., <i className="fas fa-server"></i> */}
          <h3>Backend Development</h3>
          <p>Developing robust server-side logic and database management.</p>
          <img className='service-type' src={backend} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;