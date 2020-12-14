import './App.css';
import './Mobile.css';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  const dummyFetches = () => {
    fetch('https://quizcard-frontend.herokuapp.com/')
    .then(console.log).catch(console.log)
    fetch('https://quizcard-backend.herokuapp.com/')
    .then(console.log).catch(console.log)

    fetch('https://notfcebook-backend.herokuapp.com/')
    .then(console.log).catch(console.log)
    fetch('https://notfcebook.herokuapp.com/')
    .then(console.log).catch(console.log)

    fetch('https://cocktail-companion.herokuapp.com/')
    .then(console.log).catch(console.log)
    fetch('https://cocktailcompanion-api.herokuapp.com/')
    .then(console.log).catch(console.log)
  }


  return (
    <div className="App">
      {dummyFetches()}
      <NavBar />
      <Intro />
      <Background />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
