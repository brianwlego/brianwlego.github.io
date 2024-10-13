import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import { getAllImages } from '../helperFunctions';
const QCImages = getAllImages(require.context('../Images/QCImages', true));
const MHImages = getAllImages(require.context('../Images/MHImages', true));
const CCImages = getAllImages(require.context('../Images/CCImages', true));
const FBImages = getAllImages(require.context('../Images/FBImages', true));

function Projects(){
  const [chosenQC, setChosenQC] = useState('')
  const [chosenFB, setChosenFB] = useState('')
  const [chosenCC, setChosenCC] = useState('')
  const [chosenMH, setChosenMH] = useState('')
  
  const clickHandler = (e) => {
    switch (e.target.className) {
      case 'project-img Quizcard':
        setChosenQC(e.target.src)
        break;
      case 'project-img !fcebook':
        setChosenFB(e.target.src)
        break;
      case 'project-img Cocktail Companion':
        setChosenCC(e.target.src)
        break;
      case 'project-img MixHub':
        setChosenMH(e.target.src)
        break;
      default:
        setChosenQC('')
        setChosenFB('')
        setChosenCC('')
        setChosenMH('')
        break;
    }
  }


  return(
    <section className="section projects" onClick={(e)=>clickHandler(e)}>
      <div id="projects-header">
        <h3>Projects</h3>
      </div>
      <div id="projects-content">
        <div id='top-proj-content'>
          <ProjectCard 
            link="https://quizcard-frontend.herokuapp.com/"
            title="Quizcard"
            stack="React | Redux | Router - Rails API | Postgres | AWS-S3"
            description="A study aid using Quizzes and FlashCards. Allows users to create their own Quizzes/FlashCards."
            images={QCImages}
            chosen={chosenQC}
            clickHandler={clickHandler}
            />
          <ProjectCard
            link="https://notfcebook.herokuapp.com/"
            title="!fcebook"
            stack="React | Router - Rails API | Postgres | AWS-S3"
            description="A social media clone that allows users to ‘follow’ friends, make posts, and comment on friend’s posts."
            images={FBImages}
            chosen={chosenFB}
            clickHandler={clickHandler}
          />
        </div>
        <div id='btm-proj-content'>
          <ProjectCard
            link="https://cocktail-companion.herokuapp.com/"
            title="Cocktail Companion"
            stack="Vanilla JS - Rails API | Postgres"
            description="Application allowing users to search cocktails by name/ingredient(s) or create their own."
            images={CCImages}
            chosen={chosenCC}
            clickHandler={clickHandler}
          />
          <ProjectCard
            link="https://mixhub.herokuapp.com/"
            title="MixHub"
            stack="Rails | SQLite | ERB"
            description="A playlist creator for users to document DJ’s tracklists at live events and festivals. User's can verify & like tracks of fellow users playlists."
            images={MHImages}
            chosen={chosenMH}
            clickHandler={clickHandler}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects