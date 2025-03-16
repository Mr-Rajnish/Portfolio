import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Aug-Sept 2024",
    title: "Web Development Intern",
    company: "Zidio Development",
    description: "Training-based internship focusing on full-stack web dev. Built real-world projects to gain practical experience in modern web technologies.",
    side: "right"
  },
  {
    date: "Jan 2025 - Present",
    title: "MERN Stack Developer Intern",
    company: "Ricoz Pvt. Ltd",
    description: "Developing full-stack solutions for client projects. Implementing frontend interfaces and backend APIs using modern frameworks.",
    side: "left"
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h2 className="experience-heading">Professional Experience</h2>
      <div className="underline"></div>
      
      <div className="timeline-container">
        <div className="vertical-line"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-card ${exp.side}`}
            initial={{ opacity: 0, x: exp.side === "right" ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="connector"></div>
            <div className="card-content">
              <div className="card-date">{exp.date}</div>
              <h3 className="card-title">{exp.title}</h3>
              <h4 className="card-company">{exp.company}</h4>
              <p className="card-description">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;