import heroImage from '/assets/images/img.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div className="hero-section relative z-10 min-h-screen px-4 md:px-8 flex items-center">
        <div className="hero-content flex-col lg:flex-row gap-12 max-w-6xl w-full mx-auto py-16">
          {/* Text content first */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
              Software Engineer
            </div>
            <h1 className="heading-one leading-none">I AM, </h1>
            <h1 className="heading-one leading-none mb-4">YUSUF MUHAMMED</h1>
            <p className="body-medium hero-bdy-txt py-6 text-[#C7C7C7] max-w-xl">
              A Software Engineer
              with a passion for crafting elegant solutions to complex problems. 
              With expertise in full-stack development and a keen eye for detail, 
              I transform ideas into robust, user-friendly applications. 
              My journey in tech is driven by continuous learning and innovation.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start mt-6">
              <button className="contact-btn hover:bg-[#c8de62] transition duration-300 flex items-center gap-2">
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-[#333] transition duration-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-[#333] transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Image after text */}
          <div className="flex-1 relative">
            {/* Green circle highlight behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d3e97a] to-transparent opacity-20 blur-lg rounded-full"></div>
            <img
              src={heroImage}
              className="max-w-sm w-full rounded-lg shadow-2xl hero-img mx-auto relative z-10 border border-[#222222]"
              alt="Yusuf Muhammed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
