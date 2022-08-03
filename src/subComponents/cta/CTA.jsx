import React from 'react'
import { NavLink } from 'react-router-dom'
import CV from '../../assets/3- CV Template 2022 v3.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="" className='btn'>Download CV</a>
        <NavLink to="/contactme"><div className='btn btn-primary'>Contact Me!</div></NavLink>
    </div>
  )
}

export default CTA