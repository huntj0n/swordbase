import React, {useEffect} from 'react';
import './App.scss';
import gsap from 'gsap';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';


function App() {

  useEffect(() => {
    //vh for mobile

    //gsap timeline
    const tl = gsap.timeline()
    .from('.text', 1.8, {
      x: -100,
      ease: 'power4.out',
      opacity: 0,
      delay: 1,
      stagger: {amount: 0.3}
    })
    .to('.text', {display: 'none', delay: .5})
    .to('.intro__slider', 1.5, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
  }, [])

  return (
    <div className="app">
      <Header />
      <Intro />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />

      <Nav />
    </div>
  );
}

export default App;
