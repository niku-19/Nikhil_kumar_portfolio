import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
const PortFolio = () => {
  return (
    <>
      <section id="project">
        <motion.h5 initial = {{
          opacity: 0,
          x: -200,
          scale: 3,
          blur : 100,
        }}
        whileInView = {{
          opacity: 1,
          x: 0,
          scale: 1,
          blur : 0,
          transition: {
            duration: 1.5,
          }
        }}>My Recent Work</motion.h5>
        <motion.h1 initial = {{
          opacity: 0,
          x: 200,
          scale: 3,
          blur : 100,
        }}
        whileInView = {{
          opacity: 1,
          x: 0,
          scale: 1,
          blur : 0,
          transition: {
            duration: 1.5,
          }
        }}>Portfolio</motion.h1>
        <div className="container portfolio__container">
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default PortFolio;
