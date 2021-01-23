import React from 'react';
import './App.scss';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="app">
      <Nav />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
