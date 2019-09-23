import React from 'react';
import Header from './components/header/header';
import About from './components/about/about'


import Nav from './components/header/nav'
import Pic from './components/about/profile'
import Work from './resume/work'


function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Pic />
    <About />
    <Work/>  
    
    
    
    </div>
  );
}

export default App;
