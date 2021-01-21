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

  const sectionClickhandler = (e) => {
    if (e.target.className !== "project-img"){
      console.log('Hiiiii')
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
        <ProjectCard
          link="https://cocktail-companion.herokuapp.com/"
          title="Cocktail Companion"
          description="Single page application which allows users to search cocktails based on ingredients, a combination of ingredients, or the cocktails themself. Also gives the user the ability create their own cocktail."
          images={[CC1,CC2,CC3,CC4,CC5,CC6]}
        />
        <ProjectCard
          link="https://mixhub.herokuapp.com/"
          title="MixHub"
          description="A playlist creator for users to document DJ’s tracklists at live events and festivals. User's can verify & like tracks of fellow users playlists."
          images={[MH1,MH2,MH3,MH4,MH5,MH6,MH7]}
        />
      </div>
    </section>
  )
}

export default Projects