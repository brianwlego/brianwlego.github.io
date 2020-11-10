import React, { useState } from 'react'
import Image from './Image'

import Login from '../QuizCardImages/1Login.png'
import Home from '../QuizCardImages/2HomePage.png'
import Profile from '../QuizCardImages/3Profile.png'
import HomeOpen from '../QuizCardImages/4HomePageOpen.png'
import Quiz from '../QuizCardImages/5QuizShow.png'
import QuizAnswer from '../QuizCardImages/6QuizShowAnswer.png'
import Deck from '../QuizCardImages/7DeckShow.png'
import QEdit from '../QuizCardImages/8QuizEdit.png'
import DEdit from '../QuizCardImages/9DeckEdit.png'

import CC1 from '../CCImages/1cc.png'
import CC2 from '../CCImages/2cc.png'
import CC3 from '../CCImages/3cc.png'
import CC4 from '../CCImages/4cc.png'
import CC5 from '../CCImages/5cc.png'
import CC6 from '../CCImages/6cc.png'

function Projects(){
  const [chosenQC, setChosenQC] = useState("")
  const [chosenCC, setChosenCC] = useState("")

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

  const sectionClickhandler = (e) => {
    console.log(e.target)
    if (e.target.className === "project-img"){
      
    } else {
      setChosenCC("")
      setChosenQC("")
    }
  }


  return(
    <section className="section projects" onClick={(e)=>sectionClickhandler(e)}>
      <div id="projects-header">
        <h3>Projects</h3>
      </div>
      <div id="projects-content">
        <div className="project-wrapper quizcard">
          <a href="https://quizcard-frontend.herokuapp.com/"  target="_blank" rel="noreferrer" ><h5>QuizCard &#8614;</h5></a>
          <p>A study aid that uses Quizzes and FlashCards. Allows users to also create their own Quizzes/FlashCards for a more personalized experience.</p>
          {chosenQC !== "" ? <img alt="" src={chosenQC} className="chosen" onClick={()=>setChosenQC("")}/> : null}
          <div class="project-img-wrapper" onClick={(e)=>clickHandlerQC(e)} onScroll={()=>setChosenQC("")} >
            <Image img={Login} chosen={chosenQC !== "" ? true : false} />
            <Image img={Home} chosen={chosenQC !== "" ? true : false} />
            <Image img={HomeOpen} chosen={chosenQC !== "" ? true : false} />
            <Image img={Profile} chosen={chosenQC !== "" ? true : false} />
            <Image img={Quiz} chosen={chosenQC !== "" ? true : false} />
            <Image img={QuizAnswer} chosen={chosenQC !== "" ? true : false} />
            <Image img={Deck} chosen={chosenQC !== "" ? true : false} />
            <Image img={QEdit} chosen={chosenQC !== "" ? true : false} />
            <Image img={DEdit} chosen={chosenQC !== "" ? true : false} />
          </div>
        </div>
        <div className="project-wrapper fcebook">
          <a href="https://notfcebook.herokuapp.com/" target="_blank" rel="noreferrer">
            <h5>!fcebook &#8614;</h5>
          </a>
          
          <p>A social media clone that allows users to ‘follow’ friends, make posts, and comment on friend’s posts.</p>
        </div>
        <div className="project-wrapper cocktail">
          <a href="https://cocktail-companion.herokuapp.com/" target="_blank" rel="noreferrer">
            <h5>Cocktail Companion &#8614;</h5>
          </a>
          
          <p>Single page application which allows users to search cocktails based on ingredients or create their own.</p>
          {chosenCC !== "" ? <img alt="" src={chosenCC} className="chosen" onClick={()=>setChosenCC("")}/> : null}
          <div class="project-img-wrapper" onClick={(e)=>clickHandlerCC(e)} onScroll={()=>setChosenCC("")} >
          <Image img={CC1} chosen={chosenCC !== "" ? true : false} />
          <Image img={CC2} chosen={chosenCC !== "" ? true : false} />
          <Image img={CC3} chosen={chosenCC !== "" ? true : false} />
          <Image img={CC4} chosen={chosenCC !== "" ? true : false} />
          <Image img={CC5} chosen={chosenCC !== "" ? true : false} />
          <Image img={CC6} chosen={chosenCC !== "" ? true : false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects