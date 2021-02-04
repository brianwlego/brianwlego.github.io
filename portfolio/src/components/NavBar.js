import React, { useState } from 'react'
import BrianLegoResume from '../BrianLegoResume.pdf'
import { MDBIcon} from "mdbreact";
import {motion, useCycle} from 'framer-motion'

function NavBar({toggle, theme}){
  const [resume, cycleResume] = useCycle({x: 0, opacity: 0, transition: {duration: .2}},{x: 52, opacity: 1})
  const [email, cycleEmail] = useCycle({x: 0, opacity: 0, transition: {duration: .2}},{x: 45, opacity: 1})
  const [linkedin, cycleLinkedIn] = useCycle({x: 0, opacity: 0, transition: {duration: .2}},{x: 55, opacity: 1})
  const [github, cycleGithub] = useCycle({x: 0, opacity: 0, transition: {duration: .2}},{x: 48, opacity: 1})
  const [blog, cycleBlog] = useCycle({x: 0, opacity: 0, transition: {duration: .2}},{x: 40, opacity: 1})


  return(
    <>
      <MDBIcon 
        id="darkmode"
        style={theme !== 'dark' ? {color: 'rgba(29, 29, 29, 0.95)'} : {color: 'white'}} 
        size="2x"
        far
        icon="moon"
        onClick={() => toggle()}/>
    <div id="navbar">
      <a href={BrianLegoResume} target="_blank" rel="noreferrer" >
        <MDBIcon 
          onMouseOver={()=>cycleResume()} 
          onMouseOut={()=>cycleResume()}
          icon="file-alt" 
          size="2x"
          className={theme === 'dark' ? 'invert' : ''} 
          id="resume" />
      </a>
      <a href="mailto:legobw@gmail.com" target="_blank" rel="noreferrer" >
        <MDBIcon
        onMouseEnter={()=>cycleEmail()} 
        onMouseOut={()=>cycleEmail()}
        className={theme === 'dark' ? 'invert' : ''} 
        size="2x"
        icon="envelope-open"
        id="email" />
      </a>
      <a href="https://www.linkedin.com/in/brian-lego/" target="_blank" rel="noreferrer" >
        <MDBIcon
          onMouseEnter={()=>cycleLinkedIn()} 
          onMouseOut={()=>cycleLinkedIn()}
          className={theme === 'dark' ? 'invert' : ''} 
          size="2x"
          fab
          icon="linkedin"
          id="linkedin" />
        </a>
      <a href="https://github.com/brianwlego" target="_blank" rel="noreferrer" >
        <MDBIcon
          onMouseEnter={()=>cycleGithub()} 
          onMouseOut={()=>cycleGithub()}
          className={theme === 'dark'? 'invert' : ''} 
          size="2x"
          fab
          icon="github"
          id="github" />
      </a>
      <a href="https://medium.com/@legobw" target="_blank" rel="noreferrer" >
        <MDBIcon
          onMouseEnter={()=>cycleBlog()} 
          onMouseOut={()=>cycleBlog()}
          className={theme === 'dark' ? 'invert' : ''} 
          size="2x"
          fab
          icon="blogger-b"
          id="blog" />
        </a>
    </div>
    <div className="popouts">
      <motion.p animate={resume}>Resume</motion.p> 
      <motion.p animate={email}>Email</motion.p>
      <motion.p animate={linkedin}>LinkedIn</motion.p>
      <motion.p animate={github}>GitHub</motion.p>
      <motion.p animate={blog}>Blog</motion.p>
    </div>
    </>
  )
}

export default NavBar