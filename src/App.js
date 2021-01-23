import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

function App() {

  return (
    <div className="app">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
