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

function Projects(){
  const [chosen, setChosen] = useState("")

  const clickHandler = (e) => {
    const ele = e.target.src
    if (ele === chosen){
      setChosen("")
    } else{
      setChosen(e.target.src)
    }
  }

  return(
    <section className="section projects" >
      <div id="projects-header">
        <h3>Projects</h3>
      </div>
      <div id="projects-content">
        <div className="project-wrapper quizcard">
          <a href="https://quizcard-frontend.herokuapp.com/"  target="_blank" rel="noreferrer" ><h5>QuizCard</h5></a>
          <p>A study aid that uses Quizzes and FlashCards to help students. Allows them to also create their own Quizzes/FlashCards for a more specialized experience</p>
          {chosen !== "" ? <img alt="" src={chosen} className="chosen" onClick={()=>setChosen("")}/> : null}
          <div class="project-img-wrapper" onClick={(e)=>clickHandler(e)} onScroll={()=>setChosen("")} >
            <Image img={Login} chosen={chosen !== "" ? true : false} />
            <Image img={Home} chosen={chosen !== "" ? true : false} />
            <Image img={HomeOpen} chosen={chosen !== "" ? true : false} />
            <Image img={Profile} chosen={chosen !== "" ? true : false} />
            <Image img={Quiz} chosen={chosen !== "" ? true : false} />
            <Image img={QuizAnswer} chosen={chosen !== "" ? true : false} />
            <Image img={Deck} chosen={chosen !== "" ? true : false} />
            <Image img={QEdit} chosen={chosen !== "" ? true : false} />
            <Image img={DEdit} chosen={chosen !== "" ? true : false} />
          </div>
        </div>
        <div className="project-wrapper fcebook">
          <h5>!fcebook</h5>
          <p>A social media application that allows users to ‘follow’ friends, make posts, and comment on friend’s posts.</p>
        </div>
        <div className="project-wrapper cocktail">
          <h5>Cocktail Companion</h5>
          <p>Static application which allows users to search cocktails based on ingredients.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects