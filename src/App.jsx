import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     
        <Navbar />
        <Hero />
        <Stack />
        {/* <div className="container mx-auto flex justify-center flex-wrap gap-6"> */}   
        <Projects />
        
        <About />
        
        <Contact /> 
        
      </div>
    
  );
}

export default App;