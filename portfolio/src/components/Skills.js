import React from 'react'

function Skills(){

  return(
    <section className="section skills">
      <div id="skills-header">
        <h3>Skills</h3>
      </div>
      <div id="skills-content">
        <div id="frontend">
          <h5>Frontend</h5>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>ERB</p>
          <p>EJS</p>
        </div>
        <div id="backend">
          <h5>Backend</h5>
          <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>Node.js</p>
          <p>Express</p>
        </div>
        <div id="dbtools">
          <h5>DB/Tools</h5>
          <p>Git</p>
          <p>GitHub</p>
          <p>mySQL</p>
          <p>Postgresql</p>
          <p>MongoDB</p>
          <p>AWS - s3</p>
        </div>
      </div>
    </section>
  )
}

export default Skills