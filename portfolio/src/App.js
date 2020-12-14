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
    fetch('https://quizcard-backend.herokuapp.com/')

    fetch('https://notfcebook-backend.herokuapp.com/')
    fetch('https://notfcebook.herokuapp.com/')

    fetch('https://cocktail-companion.herokuapp.com/')
    fetch('https://cocktailcompanion-api.herokuapp.com/')
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
