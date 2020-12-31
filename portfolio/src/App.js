import './App.css';
import './Mobile.css';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://quizcard-frontend.herokuapp.com/login')
    fetch('https://quizcard-backend.herokuapp.com/')

    fetch('https://notfcebook-backend.herokuapp.com/login')
    fetch('https://notfcebook.herokuapp.com/')

    fetch('https://cocktail-companion.herokuapp.com/')
    fetch('https://cocktailcompanion-api.herokuapp.com/')
  }, []);

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    console.log('inside toggle')
    if (theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <NavBar toggle={toggleTheme}/>
        <Intro />
        <Background />
        <Skills />
        <Projects />
      </div>

    </ThemeProvider>
  );
}

export default App;
