import React from "react";
import { motion } from "framer-motion";
import ServicesCardWebDesign from "./ServicesCard";
import ServicesCardResponsibe from "./ServicesCardResponsibe";
import ServicesCardDevelopment from "./ServicesCardDevelopment";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section id="services">
        <motion.h5
        initial={{
          opacity: 0,
          y: -50,
          scale: .1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1.5,
          },
        }}
        >What I Can Do</motion.h5>
        <motion.h1
        initial={{
          opacity: 0,
          y: -50,
          scale: .1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1.5,
          },
        }}
        >Services</motion.h1>
        <div className="container services__container">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <ServicesCardWebDesign Title={"Web Design"} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <ServicesCardResponsibe Title={"Responsibe Design"} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <ServicesCardDevelopment Title={"Development"} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
