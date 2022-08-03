import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
import { motion } from "framer-motion";
import './theme.css'
import React, {useState} from 'react';


const Theme = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  };
  return (
    <motion.div className='Theme'
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
      <button className='theme-btn' click={click}>

    {
      (click ?
         <MdDarkMode size={30} onClick={() => handleClick()}/> :
          <MdOutlineDarkMode size={30} onClick={() => handleClick()}/>)

    }
    
      </button>
    </motion.div>  
  )
}

export default Theme