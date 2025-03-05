import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './page/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <Stack />
            {/* <div className="container mx-auto flex justify-center flex-wrap gap-6"> */}   
            <Projects />
            
            <About />
            
            <Contact /> 
            
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;