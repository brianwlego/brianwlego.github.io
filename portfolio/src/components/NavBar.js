import React from 'react'
import BrianLegoResume from '../BrianLegoResume.pdf'
import { MDBIcon} from "mdbreact";

function NavBar({toggle, theme}){


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
          icon="file-alt" 
          size="2x"
          className={theme === 'dark' ? 'invert' : ''} 
          id="resume" />
      </a>
      <a href="mailto:legobw@gmail.com" target="_blank" rel="noreferrer" >
        <MDBIcon 
        className={theme === 'dark' ? 'invert' : ''} 
        size="2x"
        icon="envelope-open"
        id="email" />
      </a>
      <a href="https://www.linkedin.com/in/brian-lego/" target="_blank" rel="noreferrer" >
        <MDBIcon 
          className={theme === 'dark' ? 'invert' : ''} 
          size="2x"
          fab
          icon="linkedin"
          id="linkedin" />
        </a>
      <a href="https://github.com/brianwlego" target="_blank" rel="noreferrer" >
        <MDBIcon 
          className={theme === 'dark'? 'invert' : ''} 
          size="2x"
          fab
          icon="github"
          id="github" />
      </a>
      <a href="https://medium.com/@legobw" target="_blank" rel="noreferrer" >
        <MDBIcon
          className={theme === 'dark' ? 'invert' : ''} 
          size="2x"
          fab
          icon="blogger-b"
          id="blog" />
        </a>
    </div>
    </>
  )
}

export default NavBar