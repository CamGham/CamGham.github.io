import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoComponent from "../../subComponents/logo/LogoComponent";

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

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b98fwoc', 'template_bgd8hs4', form.current, 'mN2_dRxbxnOn-tal_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

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

        <NavLink to="/">
          <motion.h3
            className="cHome"
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

        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>

          <div className="container contact-container">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </container>
    </motion.div>
  );
};

export default Contact;
