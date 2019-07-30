import React from 'react';

import Home from '../Home/Home.jsx';
import AboutMe from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';

import NavBar from '../shared/NavBar/NavBar.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
