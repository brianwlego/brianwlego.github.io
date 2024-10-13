import React, {useState} from 'react'
import Image from './Image'

function ProjectCard(props){

  const renderImages = () => {
    return props.images.map(i => {
      return <Image key={i.id} img={i.src.default} proj={props.title} chosen={props.chosen !== "" ? true : false} />
    })
  }



  return(
    <div className="project-wrapper">
        <div>
          <a 
          // href={props.link}  
          target="_blank" 
          rel="noreferrer" >
            <h5>{props.title} &#8614;</h5>
          </a>
          <p className="stack">{props.stack}</p>
        </div>
          <p className="description">{props.description}</p>
          {props.chosen !== "" ? 
            <img 
              alt="" 
              src={props.chosen} 
              className={`chosen ${props.title}`} 
              onClick={(e)=>props.clickHandler(e)}/> 
            : null}
          <div 
            className="project-img-wrapper" 
            // onClick={(e)=>props.clickHandler(e)} 
            onScroll={(e)=>props.clickHandler(e)}
          >
            {renderImages()}
          </div>
        </div>
  )
}

export default ProjectCard;