import React from 'react'
import blog from '../icons/blogging.png'
import resume from '../icons/cv.png'
import email from '../icons/email.png'
import github from '../icons/github.png'
import linkedin from '../icons/linkedin.png'
import BrianLegoResume from '../BrianLegoResume.pdf'

function NavBar(){

  

  return(
    <div id="navbar">
      <button id="theme-toggle" onClick={''}>Dark</button>
      <a href={BrianLegoResume} target="_blank" rel="noreferrer" ><img alt="" src={resume} id="resume" /></a>
      <a href="mailto:legobw@gmail.com" target="_blank" rel="noreferrer" ><img alt="" src={email} id="email" /></a>
      <a href="https://www.linkedin.com/in/brian-lego/" target="_blank" rel="noreferrer" ><img alt="" src={linkedin} id="linkedin" /></a>
      <a href="https://github.com/brianwlego" target="_blank" rel="noreferrer" ><img alt="" src={github} id="github" /></a>
      <a href="https://medium.com/@legobw" target="_blank" rel="noreferrer" ><img alt="" src={blog} id="blog" /></a>
    </div>
  )
}

export default NavBar