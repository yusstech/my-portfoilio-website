import { projects } from "../projectdata.js";
import "./Projects.css";

function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="project-info-title mb-1">YEAR</p>
                    <p className="project-info">{project.year}</p>
                  </div>
                  <div>
                    <p className="project-info-title mb-1">ROLE</p>
                    <p className="project-info">{project.role}</p>
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
