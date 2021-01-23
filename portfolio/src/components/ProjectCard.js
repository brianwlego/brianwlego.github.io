import React, {useState} from 'react'
import Image from './Image'

function ProjectCard(props){
  const [chosenPic, setChosenPic] = useState("")

  const renderImages = () => {
    return props.images.map(i => {
      return <Image img={i} chosen={chosenPic !== "" && props.clicked ? true : false} />
    })
  }

  const clickHandler = (e) => {
    const ele = e.target.src
    if (ele === chosenPic){
      setChosenPic("")
    } else{
      setChosenPic(e.target.src)
    }
  }

  console.log(props)
  
  return(
    <div className="project-wrapper">
          <a href={props.link}  target="_blank" rel="noreferrer" ><h5>{props.title} &#8614;</h5></a>
          <p>{props.description}</p>
          {chosenPic !== "" && props.clicked ? <img alt="" src={chosenPic} className="chosen" onClick={()=>setChosenPic("")}/> : null}
          <div 
            className="project-img-wrapper" 
            onClick={(e)=>clickHandler(e)} 
            onScroll={()=>setChosenPic("")}
          >
            {renderImages()}
          </div>
        </div>
  )
}

export default ProjectCard;