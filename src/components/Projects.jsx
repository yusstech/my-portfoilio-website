import React from 'react';
import { projects } from "../projectdata.js";
import "./Projects.css";
import { 
  FaWordpress, 
  FaReact, 
  FaNodeJs, 
  FaVuejs, 
  FaAngular, 
  FaPhp, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaAws, 
  FaDocker, 
  FaLaravel 
} from "react-icons/fa";
import { 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedux, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiFirebase, 
  SiDjango, 
  SiFlask,
  SiTypescript,
  SiJavascript,
  SiGraphql
} from "react-icons/si";

function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Technology icon mapping
  const techIcons = {
    // Frontend
    "react": { icon: <FaReact size={24} className="tech-icon" title="React" />, color: "#61dafb" },
    "vuejs": { icon: <FaVuejs size={24} className="tech-icon" title="Vue.js" />, color: "#4FC08D" },
    "angular": { icon: <FaAngular size={24} className="tech-icon" title="Angular" />, color: "#DD0031" },
    "nextjs": { icon: <SiNextdotjs size={24} className="tech-icon" title="Next.js" />, color: "#000000" },
    "redux": { icon: <SiRedux size={24} className="tech-icon" title="Redux" />, color: "#764ABC" },
    "tailwindcss": { icon: <SiTailwindcss size={24} className="tech-icon" title="Tailwind CSS" />, color: "#38B2AC" },
    "bootstrap": { icon: <SiBootstrap size={24} className="tech-icon" title="Bootstrap" />, color: "#7952B3" },
    
    // Backend
    "nodejs": { icon: <FaNodeJs size={24} className="tech-icon" title="Node.js" />, color: "#68a063" },
    "express": { icon: <SiExpress size={24} className="tech-icon" title="Express.js" />, color: "#ffffff" },
    "php": { icon: <FaPhp size={24} className="tech-icon" title="PHP" />, color: "#777BB4" },
    "python": { icon: <FaPython size={24} className="tech-icon" title="Python" />, color: "#3776AB" },
    "java": { icon: <FaJava size={24} className="tech-icon" title="Java" />, color: "#007396" },
    "django": { icon: <SiDjango size={24} className="tech-icon" title="Django" />, color: "#092E20" },
    "flask": { icon: <SiFlask size={24} className="tech-icon" title="Flask" />, color: "#000000" },
    "laravel": { icon: <FaLaravel size={24} className="tech-icon" title="Laravel" />, color: "#FF2D20" },
    
    // CMS
    "wordpress": { icon: <FaWordpress size={24} className="tech-icon" title="WordPress" />, color: "#21759b" },
    
    // Databases
    "mongodb": { icon: <SiMongodb size={24} className="tech-icon" title="MongoDB" />, color: "#47A248" },
    "postgresql": { icon: <SiPostgresql size={24} className="tech-icon" title="PostgreSQL" />, color: "#336791" },
    "mysql": { icon: <SiMysql size={24} className="tech-icon" title="MySQL" />, color: "#4479A1" },
    "database": { icon: <FaDatabase size={24} className="tech-icon" title="Database" />, color: "#f29111" },
    
    // Cloud & DevOps
    "aws": { icon: <FaAws size={24} className="tech-icon" title="AWS" />, color: "#FF9900" },
    "docker": { icon: <FaDocker size={24} className="tech-icon" title="Docker" />, color: "#2496ED" },
    "firebase": { icon: <SiFirebase size={24} className="tech-icon" title="Firebase" />, color: "#FFCA28" },
    
    // Languages & Others
    "typescript": { icon: <SiTypescript size={24} className="tech-icon" title="TypeScript" />, color: "#3178C6" },
    "javascript": { icon: <SiJavascript size={24} className="tech-icon" title="JavaScript" />, color: "#F7DF1E" },
    "graphql": { icon: <SiGraphql size={24} className="tech-icon" title="GraphQL" />, color: "#E10098" }
  };

  // Function to render tech icon with custom styling
  const renderTechIcon = (tech, index) => {
    // Check if we have an icon for this tech
    const techData = techIcons[tech.toLowerCase()];
    
    if (techData) {
      // Clone the icon element and apply the specific tech color
      const styledIcon = React.cloneElement(techData.icon, {
        style: { color: techData.color }
      });
      
      return (
        <div key={index} className="tech-icon-container" title={techData.icon.props.title}>
          {styledIcon}
        </div>
      );
    }
    
    // Fallback for technologies not in our mapping
    return (
      <div key={index} className="tech-icon-container">
        <div className="tech-label">{tech}</div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card card p-0 cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="project-image object-cover w-full"
                />
              </div>
              
              <div className="p-6">
                <h3 className="project-title mb-4">{project.name}</h3>
                <p className="project-description mb-6">{project.description}</p>
                
                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div>
                    <p className="project-info-title mb-2">TECH STACK</p>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack && project.techStack.map((tech, index) => 
                        renderTechIcon(tech, index)
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="live-demo border-demo px-4 py-2 rounded-md flex items-center cursor-pointer"
                  >
                    LIVE DEMO
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-link flex items-center cursor-pointer"
                    >
                      GITHUB
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
