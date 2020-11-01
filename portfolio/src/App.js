import './App.css';
import './Mobile.css';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Background />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
