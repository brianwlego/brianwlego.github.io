import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Intro() {
  let [hover, setHover] = useState(0)


  return (
    <section className="section intro">
      <div style={{display: 'flex'}} id="intro-hi-hand">
        <h3>Hi! </h3>
        <motion.h3 
          id="waving-hand"
          onClick={()=>setHover(hover+=1)}
          animate={{rotate: [5,0,8,0,5,0,8,0]}}
          transition={hover ? {duration: .6} : {delay: 1.5,duration: .6}}
        > &#128075;</motion.h3>
        </div>
      <br/>
      <h3>I'm Brian Lego, a full-stack software engineer with a passion for web development and new technologies. </h3>
    </section>
  )
}

export default Intro