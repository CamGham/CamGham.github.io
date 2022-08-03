import React from 'react'
import CV from '../../assets/3- CV Template 2022 v3.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="" className='btn'>Download CV</a>
        <a href="/contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA