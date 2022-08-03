import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Main from './components/main/Main'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/experience" element={<Experience/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    </AnimatePresence>
    
  )
}

export default App