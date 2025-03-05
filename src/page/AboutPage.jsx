import { FaUser, FaMusic, FaBook, FaHiking, FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  // Interests/hobbies data
  const hobbies = [
    {
      title: "Coding Side Projects",
      icon: <FaCode />,
      description: "I enjoy building small applications to experiment with new technologies and frameworks."
    },
    {
      title: "Music Production",
      icon: <FaMusic />,
      description: "Creating electronic music and exploring different sound design techniques."
    },
    {
      title: "Reading",
      icon: <FaBook />,
      description: "I'm passionate about technical books, science fiction, and personal development literature."
    },
    {
      title: "Hiking",
      icon: <FaHiking />,
      description: "Exploring nature trails and enjoying the outdoors helps me recharge and stay creative."
    }
  ];

  // Social links
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 bg-[#0a0a0a]">
        {/* Hero Section */}
        <div className="relative bg-[#111111] py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d3e97a]/10 to-transparent blur-lg"></div>
            <div className="h-40 w-40 rounded-full bg-[#d3e97a]/10 absolute -top-10 -left-10 blur-3xl"></div>
            <div className="h-60 w-60 rounded-full bg-[#d3e97a]/5 absolute -bottom-20 -right-20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-[#d3e97a]">Me</span>
              </h1>
              <p className="text-[#C7C7C7] text-lg mb-8">
                Software engineer, creative thinker, and lifelong learner passionate about building meaningful digital experiences.
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#222222] hover:bg-[#d3e97a] text-white hover:text-black flex items-center justify-center transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
                Biography
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              
              <div className="space-y-4 text-[#C7C7C7]">
                <p>
                  Hello! I&apos;m Yusuf Muhammed, a passionate software engineer with over 5 years of experience in web development. 
                  My journey in tech began when I was in college, experimenting with HTML and CSS to build simple websites.
                </p>
                <p>
                  After graduating with a degree in Computer Science, I dove headfirst into the world of professional development,
                  focusing primarily on frontend technologies while expanding my knowledge of backend systems.
                </p>
                <p>
                  I believe in the power of clean, maintainable code and user-centered design. My approach to development 
                  combines technical excellence with creative problem-solving to build applications that not only function 
                  flawlessly but also provide exceptional user experiences.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects,
                  or mentoring aspiring developers. I&apos;m always eager to learn and grow in this ever-evolving field.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d3e97a]/20 to-transparent blur-lg rounded-lg"></div>
              <div className="relative bg-[#111111] border border-[#222222] rounded-lg p-1">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square bg-[#0a0a0a]/50 rounded-md flex items-center justify-center text-[#d3e97a]/5 overflow-hidden"
                    >
                      <FaCode className="text-5xl" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-[#111111]/80 backdrop-blur-sm p-6 rounded-lg border border-[#222222]">
                    <FaUser className="text-4xl text-[#d3e97a] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Yusuf Muhammed</h3>
                    <p className="text-[#C7C7C7]">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hobbies & Interests */}
        <div className="py-20 bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
                Interests
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Beyond Coding</h2>
              <p className="text-[#C7C7C7] max-w-2xl mx-auto">
                When I&apos;m not immersed in code, here are some activities that keep me inspired and balanced.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="bg-[#0a0a0a] border border-[#222222] hover:border-[#d3e97a] transition-all duration-300 rounded-lg p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#222222] text-[#d3e97a] flex items-center justify-center mb-4">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
                  <p className="text-[#C7C7C7]">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Work Experience Component */}
        <WorkExperience />
        
        {/* Contact Component */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default AboutPage; 