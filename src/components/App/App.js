import React from 'react';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AboutMe from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer'

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
      <Footer />
    </div>
  );
}

export default App;
