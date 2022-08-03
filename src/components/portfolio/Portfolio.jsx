import React from 'react'
import LogoComponent from '../../subComponents/logo/LogoComponent'
import MainSocials from '../../subComponents/socials/MainSocials'
import './portfolio.css'

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import IMG1 from '../../assets/SportsHub.png'
import IMG2 from '../../assets/CabsOnline.png'


const container ={
  hidden: {opacity: 0},
  show:{
    opacity: 1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const portData=[
  {
    id:1,
    image: IMG1,
    title: 'SportsHub',
    desc: 'An application for athletes to host and join sporting events',
    github: 'https://github.com/CamGham/SportsHub',
    demo: '_blank',
  },
  {
    id:2,
    image: IMG2,
    title: 'CabsOnline',
    desc: 'A simple user form and admin database request for booking cabs',
    github: 'https://github.com/CamGham/CabsOnline',
    demo: '_blank',
  },
]


const Portfolio = () => {
  return (
    <motion.div
variants={container}
initial="hidden"
animate="show"
exit={{
  opacity: 0, transition:{duration: 0.5}
}}
>
  <container>
      <LogoComponent/>
      <MainSocials/>

      <NavLink to="/">
          <motion.h3
            className="pHome"
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
            Home
          </motion.h3>
        </NavLink>


<section id="portfolio">
  <h5>Things I've Made</h5>
  <h2>Portfolio</h2>

  <div className="container portfolio__container">
    {
      portData.map(({id, image, title, desc, github, demo}) => {
        return(
          <article key={id} className='portfolio__item'>
        <div className="portfolio__item-img">
            <img src={image} alt={title}/>
        </div>
          <h3>{title}</h3>
          <h4>{desc}</h4>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary'>Live Demo</a>
      </div>
      </article>
        )
    })}

  </div>
</section>

</container>
    </motion.div>
  )
}

export default Portfolio