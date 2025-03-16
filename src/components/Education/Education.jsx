import './Education.css';
import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    date: "2018 - 2022",
    title: "Schooling",
    Organization: "St'Xavier's High School",
    Marks:'92% in 10th  83% in 12th',
    location: "Azamgarh UttarPradesh.",
    side: "right"
  },
  {
    date: "Aug 2022 - April 2026",
    title: "Under-Graduation",
    Organization: "Poornima University",
    Marks:'9.64 CGPA (upto 5th Semester)',
    location: "Jaipur Rajasthan.",
    side: "left"
  },
];

const Education = () => {
  return (
    <div id='education' className="education-container">
      <h2 className="education-heading">Education </h2>
      <div className="underline"></div>
      
      <div className="timeline-container">
        <div className="vertical-line"></div>
        
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`timeline-card ${edu.side}`}
            initial={{ opacity: 0, x: edu.side === "right" ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="connector"></div>
            <div className="card-content">
              <div className="card-date">{edu.date}</div>
              <h3 className="card-title">{edu.title}</h3>
              <h4 className="card-organization">{edu.Organization}</h4>
              <h3 className='card-Marks'>{edu.Marks}</h3>
              <p className="card-location">{edu.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;