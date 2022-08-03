import React from "react";
import LogoComponent from "../../subComponents/logo/LogoComponent";
import MainSocials from "../../subComponents/socials/MainSocials";
import "./experience.css";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Experience = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <container>
        <LogoComponent />
        <MainSocials />

        <NavLink to="/">
          <motion.h3
            className="eHome"
            initial={{
              x: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              x: "calc(1.5rem + 2vw)",
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            style={{ rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </motion.h3>
        </NavLink>

        <section id="experience">
        <h5>Languages I Speak</h5>
        <h5>Technology I Use</h5>
          <h2>Experience</h2>

          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <h4>Languages</h4>
              <div className="experience__content">
                <article className="experience__details">
                  <h4>HTML</h4>
                  <h4>CSS</h4>
                  <h4>JavaScript</h4>
                </article>
              </div>
              <h4>Frameworks and Libraries</h4>
              <div className="experience__content">
                <article className="experience__details">
                  <h4>React</h4>
                  <h4>React Native</h4>
                </article>
              </div>
            </div>

            <div className="experience__backend">
              <h3>Backend Development</h3>
              <h4>Languages</h4>
              <div className="experience__content">
                <article className="experience__details">
                  <h4>PHP</h4>
                  <h4>Python</h4>
                  <h4>MySQL</h4>
                  <h4>MongoDB</h4>
                </article>
              </div>
              <h4>Frameworks</h4>
              <div className="experience__content">
                <article className="experience__details">
                  <h4>Express JS</h4>
                </article>
              </div>
            </div>
          </div>
        </section>
      </container>
    </motion.div>
  );
};

export default Experience;
