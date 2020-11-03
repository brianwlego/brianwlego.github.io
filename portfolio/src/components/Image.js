import React from 'react'


function Image(props){


  return(
    <img alt="" src={props.img} className={props.chosen ? "project-img blur" : "project-img"}/>
  )
}

export default Image