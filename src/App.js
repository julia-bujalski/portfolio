import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './views/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
