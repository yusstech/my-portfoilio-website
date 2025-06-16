import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
// import Projects from '../components/Projects'; // Commented out temporarily
import Stack from '../components/Stack';
import Contact from '../components/Contact';
// Removing unused Footer import
import AboutPage from './AboutPage';
import Blog from '../components/Blog';
import BlogPage from './BlogPage';
import BlogPost from '../components/BlogPost';
import WordPressMaintenance from '../components/WordPressMaintenance';

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/wordpress-maintenance" element={<WordPressMaintenance />} />
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <Stack />
            {/* <Projects /> Temporarily hidden */}
            <About />
            <Blog />
            <Contact /> 
            
         
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default Home;