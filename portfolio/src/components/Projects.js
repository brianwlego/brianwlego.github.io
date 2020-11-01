import React from 'react'

function Projects(){

  return(
    <section className="section projects">
      <div id="projects-header">
        <h3>Projects</h3>
      </div>
      <div id="projects-content">
        <div className="project-wrapper quizcard">
          <a href="https://quizcard-frontend.herokuapp.com/"  target="_blank" rel="noreferrer" ><h5>QuizCard</h5></a>
          <p>A study aid that uses Quizzes and FlashCards to help students. Allows them to also create their own Quizzes/FlashCards for a more specialized experience</p>
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