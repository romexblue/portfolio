import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import AppContext from './helpers/AppContext'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = (toggler) => {
    localStorage.setItem("darkMode", toggler);
    setDarkMode(toggler);
  };

  return (
    <AppContext.Provider value={{
      darkMode: darkMode,
      darkModeToggle: darkModeToggle,
    }}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </AppContext.Provider>
  )
}

export default App
