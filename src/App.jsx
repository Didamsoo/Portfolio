import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


import Section from './components/Section';
import './App.scss';
import './index.scss';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Section id="hero">
          <HeroSection />
        </Section>
        <Section id="about">
          <AboutSection />
        </Section>
        <Section id="project">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </Router>
  );
}

export default App;
