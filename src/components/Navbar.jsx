import { useState, useEffect } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="navbar-start">
          <div className="mobile-menu-container relative lg:hidden">
            <button 
              className="mobile-menu p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaX className="h-5 w-5 text-white" />
              ) : (
                <FaAlignRight className="h-5 w-5 text-white" />
              )}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-10 left-0 w-56 bg-[#111111] border border-[#222222] rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li><a href="/" className="block px-4 py-2 text-white hover:text-[#d3e97a] transition-colors">Home</a></li>
                  <li><a href="/work" className="block px-4 py-2 text-white hover:text-[#d3e97a] transition-colors">Work</a></li>
                  <li><a href="/about" className="block px-4 py-2 text-white hover:text-[#d3e97a] transition-colors">About Me</a></li>
                  <li><a href="/#contact" className="block px-4 py-2 text-white hover:text-[#d3e97a] transition-colors">Contact</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="navbar-center flex justify-center">
          <a href="/" className="logo-text text-xl font-bold text-white">
            <span className="text-[#d3e97a]">Y</span>USUF <span className="text-[#d3e97a]">M</span>UHAMMED
          </a>
        </div>
        
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            <li><a href="/" className="text-white hover:text-[#d3e97a] transition-colors">Home</a></li>
            <li><a href="/#work" className="text-white hover:text-[#d3e97a] transition-colors">Work</a></li>
            <li><a href="/about" className="text-white hover:text-[#d3e97a] transition-colors">About Me</a></li>
            <li><a href="/#contact" className="text-white hover:text-[#d3e97a] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
