import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Productes from './components/Productes/Productes';
import { GlobalStyle } from './GlobalStyle';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Hero/>
        <Productes />
        <Feature />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
