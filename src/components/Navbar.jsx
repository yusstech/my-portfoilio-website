import { useState, useEffect } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
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

  // Helper function to determine if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
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
                  <li>
                    <Link 
                      to="/" 
                      className={`block px-4 py-2 transition-colors ${isActive('/') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className={`block px-4 py-2 transition-colors ${isActive('/blog') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className={`block px-4 py-2 transition-colors ${isActive('/about') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="/#contact" 
                      className="block px-4 py-2 text-white hover:text-[#d3e97a] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="navbar-center flex justify-center">
          <Link to="/" className="logo-text text-xl font-bold text-white">
            <span className="text-[#d3e97a]">Y</span>USUF <span className="text-[#d3e97a]">M</span>UHAMMED
          </Link>
        </div>
        
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            <li>
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-[#d3e97a]' : 'text-white hover:text-[#d3e97a]'}`}
              >
                About Me
              </Link>
            </li>
            <li>
              <a 
                href="/#contact" 
                className="text-white hover:text-[#d3e97a] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
