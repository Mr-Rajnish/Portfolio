import './Projects.css';
import React from 'react';
import { motion } from 'framer-motion';
import RajnishRestro from '../../assets/Rajnish-Restro-img.png';
import movierecommendatation from '../../assets/movie-recommendation-img.png';
import rverse from '../../assets/R-verse-img.png';
import aarogyakendra from '../../assets/AarogyaKendra.png';
import wanderlust from '../../assets/wanderlust-img.png';
import algerianforest from '../../assets/Algerian-img.png';

function Projects() {
  const projects = [
    {
        title: 'Movie Recommendation System',
        image: movierecommendatation,
        link: 'https://movie-react-orcin.vercel.app/'
      },
    {
      title: 'Rajnish Restro: Food Delivery Application',
      image: RajnishRestro,
      link: 'https://food-delivery-frontend-qa09.onrender.com/'
    },
    {
      title: 'AarogyaKendra',
      image: aarogyakendra,
      link: 'https://aarogyakendra-rajnish.streamlit.app/'
    },
    {
      title: 'Wanderlust',
      image: wanderlust,
      link: 'https://wanderlust-nbsk.onrender.com/listings'
    },
    {
      title: 'R-Verse: AI Solution',
      image: rverse,
      link: 'https://r-verse-ten.vercel.app/'
    },
    {
      title: 'Algerian ForestFire Prediction',
      image: algerianforest,
      link: 'https://forestfiredataset-project1ml.onrender.com/'
    },
  ];

  // Duplicate the projects array to create a seamless infinite scroll effect
  const projectList = [...projects, ...projects];

  return (
    <div className="projects" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="carousel-container">
            <motion.div
  className="carousel"
  animate={{ x: ['0%', '-100%'] }} // Ensures smooth looping
  transition={{
    ease: 'linear',
    duration: 20, // Adjust speed for smooth effect
    repeat: Infinity,
  }}
>
  {projectList.map((project, index) => (
    <Card key={index} project={project} />
  ))}
</motion.div>

      </div>
    </div>
  );
}

function Card({ project }) {
  return (
    <div className="card-content">
      <a href={project.link} target="_blank" rel="noreferrer">
        <img className="project-img" src={project.image} alt={project.title} />
        <div className="info">
          <h3>{project.title}</h3>
        </div>
      </a>
    </div>
  );
}

export default Projects;
