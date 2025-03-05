import { FaReact, FaNodeJs, FaAws, FaJs, FaPython, FaGitAlt, FaDocker, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiExpress, SiMongodb, SiRedux, 
         SiTailwindcss, SiGraphql, SiDjango, SiGo, SiSpring, SiNestjs } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import '../styles/Stack.css';

function Stack() {
    // Updated tech stack list - removed Kubernetes (too specialized) and JWT (not a core tech),
    // added more relevant technologies for a software engineer
    const technologies = [
        { id: 1, name: 'JavaScript', icon: <FaJs /> },
        { id: 2, name: 'TypeScript', icon: <SiTypescript /> },
        { id: 3, name: 'React', icon: <FaReact /> },
        { id: 4, name: 'Next.js', icon: <SiNextdotjs /> },
        { id: 5, name: 'Node.js', icon: <FaNodeJs /> },
        { id: 6, name: 'Express', icon: <SiExpress /> },
        { id: 7, name: 'Redux', icon: <SiRedux /> },
        { id: 8, name: 'MongoDB', icon: <SiMongodb /> },
        { id: 9, name: 'PostgreSQL', icon: <SiPostgresql /> },
        { id: 10, name: 'GraphQL', icon: <SiGraphql /> },
        { id: 17, name: 'Docker', icon: <FaDocker /> },
        { id: 18, name: 'AWS', icon: <FaAws /> },
        { id: 19, name: 'Git', icon: <FaGitAlt /> },
        { id: 20, name: 'VS Code', icon: <TbBrandVscode /> },
        { id: 21, name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ];

    // Double the array to create a seamless loop effect
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <div className="stack-section" id="stack">
            <h2 className="section-title">My Tech Stack</h2>
            <p className="section-subtitle">Technologies I work with</p>
            
            <div className="marquee-container">
                <div className="marquee-track">
                    {duplicatedTechnologies.map((tech, index) => (
                        <div key={`${tech.id}-${index}`} className="tech-item">
                            <div className="tech-icon">{tech.icon}</div>
                            <p className="tech-name">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stack;