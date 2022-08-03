import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoComponent from "../../subComponents/logo/LogoComponent";
import MainSocials from "../../subComponents/socials/MainSocials";

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

const About = () => {
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
            className="aHome"
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: "calc(1rem + 1vw)",
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </motion.h3>
        </NavLink>


          <motion.div className="container about__box"
          initial={{height:'0vh'}}
          animate={{height:'auto'}}

          transition={{type:'spring', duration:2, delay:1}}
          >
            <div className="text">

            <h1>Hi,</h1>
            <h4>I'm Cam, and I am currently in my thrid year of software engineering at AUT univeristy. </h4>
            <h4>I am keen to learn anything SE related, but am mostly interested in learning about full stack development and the processes that the industry currently use aswell as plan to use in order to utilize modern technology.</h4>
            </div>

          </motion.div>



      </container>
    </motion.div>
  );
};

export default About;
