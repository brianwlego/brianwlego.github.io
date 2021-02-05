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
      // fetch('https://quizcard-frontend.herokuapp.com/')
      // fetch('https://quizcard-backend.herokuapp.com/api/v1/wakeup')
  
      // fetch('https://notfcebook-backend.herokuapp.com/api/v1/wakeup')
      // fetch('https://notfcebook.herokuapp.com/login')
  
      // fetch('https://cocktail-companion.herokuapp.com/')
      // fetch('https://cocktailcompanion-api.herokuapp.com/wakeup')
  
      // fetch('https://mixhub.herokuapp.com/')
  }, []);

  let [mobile, setMobile] = useState(window.innerWidth < 600 ? true : false)

  const [theme, setTheme] = useState(6 < new Date().getHours() < 18 ? 'dark' : 'light')
  


  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  console.log(mobile)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        {mobile ? null : <NavBar toggle={toggleTheme} theme={theme}/>}
        <Intro />
        <Background />
        <Skills />
        <Projects />
      </div>
      {mobile ? <NavBar toggle={toggleTheme} theme={theme}/> : null}
    </ThemeProvider>
  );
}

export default App;
