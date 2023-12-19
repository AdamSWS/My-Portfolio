import React from 'react';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Downloads from './components/Downloads/Downloads';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar className="custom-navbar" />
      <div id="home-section"><Home /></div>
      <div id="about-section"><About /></div>
      <div id="skills-section"><Skills /></div>
      <div id="projects-section"><Projects /></div>
      <div id="downloads-section"><Downloads /></div>
      <div id="contact-section"><Contact /></div>
    </div>
  );
}

export default App;
