import React from 'react';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

import gsap from 'gsap';

function App() {

  const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

  tl.to('.text', {y: "0%", duration: 1, stagger: 0.25})
  .to('.intro__textSlider', 1.8, {
    y: "-100%", duration: 1.8, delay: 0.5
  })
  .to('.intro', {y: "-100%", duration: 1}, "-=1.4")

  return (
    <div className="app">
      <Header />
      <Intro />
      <Home />
      {/* <Projects />
      <About />
      <Contact />
      <Footer />

      <Nav /> */}
    </div>
  );
}

export default App;
