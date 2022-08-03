import React from "react";
import "./main.css";
import LogoComponent from "../../subComponents/logo/LogoComponent";
import MainSocials from "../../subComponents/socials/MainSocials";
import CTA from "../../subComponents/cta/CTA";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";



const Main = () => {
  
  return (
    <div>
      <LogoComponent />
      {/* <Theme/> */}
      <button></button>

      <header>
        <div className="container main__container">
          <h5>Hello I'm</h5>
          <h1>Cameron</h1>
          <h5 className="text-light">An Aspiring Fullstack Developer</h5>
          <CTA />
          <MainSocials />
        </div>

        <NavLink to="/portfolio">
          <motion.h3
            className="portfolio"
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
            Portfolio
          </motion.h3>
        </NavLink>

        <NavLink to="/experience">
          <motion.h3
            className="experience"
            initial={{
              x: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              x: "calc(-1.5rem - 2vw)",
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            style={{ rotate: 270 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </motion.h3>
        </NavLink>

        <NavLink to="/about">
          <motion.h3
            className="about"
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: "calc(1rem + 1vw)",
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h3>
        </NavLink>

      </header>
    </div>
  );
};

export default Main;
