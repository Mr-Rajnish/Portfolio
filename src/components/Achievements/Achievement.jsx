import React from 'react';
import { motion } from 'framer-motion';
import './Achievement.css';

function Achievement() {
  const achievements = [
    {
      title: '400+ DSA Questions',
      description: 'Solved More than 400  DSA Questions across diffrent platforms like Leetcode and GeeksForGeeks.'
    },
    {
        title: 'Campus Ambassador',
        description: 'Worked As a Campus Ambassador of Native Engineering Solutions and Zuno (by Foundit) Organizations in Poornima University.'
      },
      {
        title: 'Academic Topper',
        description: 'Academic Topper in Poornima University with 9.64 CGPA.'
      },
      {
        title: 'Top-5 Hackathon',
        description: 'Secured Top 5 Position in the HackItBuild Hackathon focused on BlockChain between 80+ Teams across Poornima Group.'
      },
      {
        title: 'Reasearch Paper',
        description: 'Completed A Review Research Paper on Machine Learning Algorithms.'
      },
      {
        title: 'Mentor',
        description: 'Have An Wonderfull Opportunity while guiding First Year Students in Academics as well as Projects and Skills.'
      },
      {
        title: 'Certification',
        description: 'Certified in Programming in Java and Learning Analytics Tools from IIT Kanpur NPTEL .'
      },
    // Add more achievements as needed
  ];

  const achievementList = [...achievements, ...achievements];

  return (
    <div   className="achievement" id='achievements'>
      <h1  style={{paddingTop:'1.5rem'}} className="achievement-heading">Achievements</h1>
      <div className="underline-achievement"></div>
      <div className="achievement-carousel-container">
        <motion.div
          className="achievement-carousel"
          animate={{ x: ['-50%', '50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {achievementList.map((achievement, index) => (
            <Card key={index} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Card({ achievement }) {
    return (
      <div className="achievement-card">
        <div className="achievement-card-border">
          <h4 className="achievement-year">2022 - 2026</h4>
          <h3 className="achievement-title">{achievement.title}</h3>
          <p className="achievement-description">{achievement.description}</p>
        </div>
      </div>
    );
  }

export default Achievement;