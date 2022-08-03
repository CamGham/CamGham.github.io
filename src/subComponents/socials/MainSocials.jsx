import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { motion } from "framer-motion";
import "./mainsocials.css"

const MainSocials = () => {
  return (
    <motion.div className='main__socials'
    initial={{
      height:0
    }}
    animate={{
      height: '13rem'
    }}
    transition={{
      type: 'spring', duration:1, delay: 0.8
    }}
    >
        <motion.a href='https://github.com/CamGham' 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          >
              <BsGithub size={30}/></motion.a>
        <motion.a href="https://www.linkedin.com/in/cameron-graham-611444241/"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        ><BsLinkedin size={30}/></motion.a>
    </motion.div>  
  )
}

export default MainSocials