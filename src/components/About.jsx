import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa'

function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="divider-horizontal mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Line Shape Design */}
          <div className="lg:w-2/5 relative h-[400px] flex items-center justify-center">
            {/* Green circle highlight behind the shapes */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d3e97a] to-transparent opacity-20 blur-lg rounded-full"></div>
            
            {/* Abstract Line Shape Design */}
            <div className="w-full h-full relative z-10 border border-[#222222] rounded-lg bg-[#111111] overflow-hidden flex items-center justify-center p-4">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid Background */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222222" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Abstract Code/Circuit Lines */}
                <path 
                  d="M 30 200 C 50 100, 350 120, 370 30" 
                  stroke="#d3e97a" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
                <path 
                  d="M 30 250 C 200 280, 300 220, 370 250" 
                  stroke="#d3e97a" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse" 
                  style={{ animationDelay: "1s" }}
                />
                <path 
                  d="M 30 300 C 100 350, 250 320, 370 380" 
                  stroke="#d3e97a" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse" 
                  style={{ animationDelay: "1.5s" }}
                />
                
                {/* Nodes and Connection Points */}
                <circle cx="30" cy="200" r="5" fill="#d3e97a" />
                <circle cx="370" cy="30" r="5" fill="#d3e97a" />
                <circle cx="30" cy="250" r="5" fill="#d3e97a" />
                <circle cx="370" cy="250" r="5" fill="#d3e97a" />
                <circle cx="30" cy="300" r="5" fill="#d3e97a" />
                <circle cx="370" cy="380" r="5" fill="#d3e97a" />
                
                {/* Decorative Elements */}
                <circle cx="200" cy="200" r="80" stroke="#333333" strokeWidth="15" fill="none" />
                <circle cx="200" cy="200" r="40" stroke="#d3e97a" strokeWidth="2" fill="none" />
                <circle cx="200" cy="200" r="5" fill="#d3e97a" />
                
                {/* Code Brackets */}
                <text x="150" y="190" fill="#d3e97a" fontSize="24" fontFamily="monospace">{'{'}</text>
                <text x="235" y="190" fill="#d3e97a" fontSize="24" fontFamily="monospace">{'}'}</text>
                <text x="165" y="220" fill="#555555" fontSize="12" fontFamily="monospace">code</text>
              </svg>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:w-3/5">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
              My Journey
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Passionate Software Engineer & Problem Solver</h3>
            <p className="text-[#C7C7C7] mb-6">
              I&apos;m a dedicated software engineer with a passion for creating efficient, elegant solutions that solve real-world problems. 
              My journey in technology began with a curiosity about how things work, which evolved into a career building innovative applications.
            </p>
            <p className="text-[#C7C7C7] mb-8">
              I believe in writing clean, maintainable code and continuously expanding my knowledge to stay at the forefront of technology trends.
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#111111] p-6 rounded-lg border border-[#222222] hover:border-[#d3e97a] transition duration-300">
                <FaCode className="text-[#d3e97a] text-3xl mb-4" />
                <h4 className="text-white font-semibold mb-2">Frontend Development</h4>
                <p className="text-[#C7C7C7] text-sm">Creating responsive, user-friendly interfaces with modern frameworks</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-lg border border-[#222222] hover:border-[#d3e97a] transition duration-300">
                <FaServer className="text-[#d3e97a] text-3xl mb-4" />
                <h4 className="text-white font-semibold mb-2">Backend Systems</h4>
                <p className="text-[#C7C7C7] text-sm">Building robust APIs and server architecture that scales</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-lg border border-[#222222] hover:border-[#d3e97a] transition duration-300">
                <FaMobileAlt className="text-[#d3e97a] text-3xl mb-4" />
                <h4 className="text-white font-semibold mb-2">Mobile Development</h4>
                <p className="text-[#C7C7C7] text-sm">Crafting cross-platform mobile applications with native-like experiences</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="contact-btn hover:bg-[#c8de62] transition duration-300 flex items-center gap-2">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;