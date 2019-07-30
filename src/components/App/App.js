import React from 'react';

import Landing from '../Landing/Landing.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Contact from '../Contact/Contact.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';

import NavBar from '../shared/NavBar/NavBar.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
