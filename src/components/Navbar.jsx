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
  
  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="mobile-menu lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaX className="h-5 w-5 text-white" />
              ) : (
                <FaAlignRight className="h-5 w-5 text-white" />
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-text menu-sm dropdown-content bg-[#111111] border border-[#222222] rounded-lg z-50 mt-3 w-52 p-4 shadow-xl"
              >
                <li><a href="/" className="py-2 hover:text-[#d3e97a] transition-colors">Home</a></li>
                <li><a href="/#work" className="py-2 hover:text-[#d3e97a] transition-colors">Work</a></li>
                <li><a href="/about" className="py-2 hover:text-[#d3e97a] transition-colors">About Me</a></li>
                <li><a href="/#contact" className="py-2 hover:text-[#d3e97a] transition-colors">Contact</a></li>
              </ul>
            )}
          </div>
          <a href="/" className="logo-text text-xl font-bold text-white">
            <span className="text-[#d3e97a]">Y</span>USUF <span className="text-[#d3e97a]">M</span>UHAMMED
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            <li><a href="/" className="text-white hover:text-[#d3e97a] transition-colors">Home</a></li>
            <li><a href="/#work" className="text-white hover:text-[#d3e97a] transition-colors">Work</a></li>
            <li><a href="/about" className="text-white hover:text-[#d3e97a] transition-colors">About Me</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <a 
            href="/#contact" 
            className="btn btn-sm md:btn-md border-[#d3e97a] bg-transparent text-[#d3e97a] hover:bg-[#d3e97a] hover:text-black transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
