import React, { useState } from 'react'
import Image from './Image'
import ProjectCard from './ProjectCard'

import QC1 from '../QuizCardImages/1Login.png'
import QC2 from '../QuizCardImages/2HomePage.png'
import QC3 from '../QuizCardImages/3Profile.png'
import QC4 from '../QuizCardImages/4HomePageOpen.png'
import QC5 from '../QuizCardImages/5QuizShow.png'
import QC6 from '../QuizCardImages/6QuizShowAnswer.png'
import QC7 from '../QuizCardImages/7DeckShow.png'
import QC8 from '../QuizCardImages/8QuizEdit.png'
import QC9 from '../QuizCardImages/9DeckEdit.png'

import MH1 from '../MixHubImages/1mh.png'
import MH2 from '../MixHubImages/2mh.png'
import MH3 from '../MixHubImages/3mh.png'
import MH4 from '../MixHubImages/4mh.png'
import MH5 from '../MixHubImages/5mh.png'
import MH6 from '../MixHubImages/6mh.png'
import MH7 from '../MixHubImages/7mh.png'

import CC1 from '../CCImages/1cc.png'
import CC2 from '../CCImages/2cc.png'
import CC3 from '../CCImages/3cc.png'
import CC4 from '../CCImages/4cc.png'
import CC5 from '../CCImages/5cc.png'
import CC6 from '../CCImages/6cc.png'

import FB1 from '../FBImages/1fb.png'
import FB2 from '../FBImages/2fb.png'
import FB3 from '../FBImages/3fb.png'
import FB4 from '../FBImages/4fb.png'
import FB5 from '../FBImages/5fb.png'

function Projects(){
  const [chosenQC, setChosenQC] = useState("")
  const [chosenCC, setChosenCC] = useState("")
  const [chosenFB, setChosenFB] = useState("")
  const [chosenMH, setChosenMH] = useState("")

  const clickHandlerQC = (e) => {
    const ele = e.target.src
    if (ele === chosenQC){
      setChosenQC("")
    } else{
      setChosenQC(e.target.src)
    }
  }
  const clickHandlerCC = (e) => {
    const ele = e.target.src
    if (ele === chosenCC){
      setChosenCC("")
    } else{
      setChosenCC(e.target.src)
    }
  }
  const clickHandlerFB = (e) => {
    const ele = e.target.src
    if (ele === chosenFB){
      setChosenFB("")
    } else{
      setChosenFB(e.target.src)
    }
  }
  const clickHandlerMH = (e) => {
    const ele = e.target.src
    if (ele === chosenMH){
      setChosenMH("")
    } else{
      setChosenMH(e.target.src)
    }
  }

  const sectionClickhandler = (e) => {
    if (e.target.className === "project-img"){
      
    } else {
      setChosenCC("")
      setChosenQC("")
      setChosenFB("")
      setChosenMH("")
    }
  }


  return(
    <section className="section projects" onClick={(e)=>sectionClickhandler(e)}>
      <div id="projects-header">
        <h3>Projects</h3>
      </div>
      <div id="projects-content">
        <ProjectCard 
          link="https://quizcard-frontend.herokuapp.com/"
          title="Quizcard"
          description="A study aid that uses Quizzes and FlashCards. Allows users to create their own Quizzes/FlashCards for a more personalized experience."
          images={[QC1,QC2,QC3,QC4,QC5,QC6,QC7,QC8,QC9]}
          />
        <ProjectCard
          link="https://notfcebook.herokuapp.com/"
          title="!fcebook"
          description="A practice exercise to recreate a social media clone that allows users to ‘follow’ friends, make posts, and comment on friend’s posts."
          images={[FB1,FB2,FB3,FB4,FB5]}
        />
        <div className="project-wrapper cocktail">
          <a href="https://cocktail-companion.herokuapp.com/" target="_blank" rel="noreferrer">
            <h5>Cocktail Companion &#8614;</h5>
          </a>
          
          <p>Single page application which allows users to search cocktails based on ingredients, a combination of ingredients, or the cocktails themself. Also gives the user the ability create their own cocktail.</p>
          {chosenCC !== "" ? <img alt="" src={chosenCC} className="chosen" onClick={()=>setChosenCC("")}/> : null}
          <div className="project-img-wrapper" onClick={(e)=>clickHandlerCC(e)} onScroll={()=>setChosenCC("")} >
            <Image img={CC1} chosen={chosenCC !== "" ? true : false} />
            <Image img={CC2} chosen={chosenCC !== "" ? true : false} />
            <Image img={CC3} chosen={chosenCC !== "" ? true : false} />
            <Image img={CC4} chosen={chosenCC !== "" ? true : false} />
            <Image img={CC5} chosen={chosenCC !== "" ? true : false} />
            <Image img={CC6} chosen={chosenCC !== "" ? true : false} />
          </div>
        </div>
          <div className="project-wrapper mixhub">
          <a href="https://mixhub.herokuapp.com/" target="_blank" rel="noreferrer">
            <h5>MixHub &#8614;</h5>
          </a>
          
          <p>A playlist creator for users to document DJ’s tracklists at live events and festivals. User's can verify & like tracks of fellow users playlists </p>
          {chosenMH !== "" ? <img alt="" src={chosenMH} className="chosen" onClick={()=>setChosenMH("")}/> : null}
          <div className="project-img-wrapper" onClick={(e)=>clickHandlerMH(e)} onScroll={()=>setChosenMH("")} >
            <Image img={MH1} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH2} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH3} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH4} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH5} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH6} chosen={chosenMH !== "" ? true : false} />
            <Image img={MH7} chosen={chosenMH !== "" ? true : false} />
          </div>
        </div>
        <ProjectCard 
          link="https://quizcard-frontend.herokuapp.com/"
          title="Quizcard"
          description="A study aid that uses Quizzes and FlashCards. Allows users to create their own Quizzes/FlashCards for a more personalized experience."
          images={[QC1,QC2,QC3,QC4,QC5,QC6,QC7,QC8,QC9]}
        />
      </div>
    </section>
  )
}

export default Projects