import { useState } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="navbar navbar-section shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="mobile-menu lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaX className="h-5 w-5" />
            ) : (
              <FaAlignRight className="h-5 w-5" />
            )}
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-text menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow menu-xl"
            >
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About me</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </div>
        <a href="/" className="logo-text text-xl font-bold">YUSUF MUHAMMED</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a href="#contact" className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;
