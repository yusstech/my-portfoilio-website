import { FaBriefcase, FaDownload, FaCode, FaGraduationCap } from 'react-icons/fa';

function WorkExperience() {
  // Sample work experience data - replace with your actual data
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead the development of responsive web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2022",
      description: "Developed and maintained web applications using MERN stack. Collaborated with design and product teams to deliver high-quality user experiences."
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Creative Web Agency",
      period: "2017 - 2019",
      description: "Created responsive websites for clients across various industries. Utilized WordPress, PHP, and JavaScript to implement custom solutions."
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD"] }
  ];

  return (
    <div className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-[#d3e97a] mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-16 pl-8 border-l-2 border-[#222222]">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-[#0a0a0a] border-2 border-[#d3e97a] rounded-full -left-[19px] top-0 flex items-center justify-center">
                <FaBriefcase className="text-[#d3e97a] text-xs" />
              </div>
              
              {/* Content */}
              <div className="bg-[#111111] border border-[#222222] hover:border-[#d3e97a] transition-all duration-300 rounded-lg p-6 ml-4">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="px-3 py-1 bg-[#222222] text-[#d3e97a] text-xs rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-[#d3e97a] font-medium mb-4">{exp.company}</h4>
                <p className="text-[#C7C7C7] text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#111111] border border-[#222222] hover:border-[#d3e97a] transition-all duration-300 rounded-lg p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <FaCode className="text-[#d3e97a]" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-[#222222] text-[#C7C7C7] text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education - Optional section */}
        <div className="mb-12 bg-[#111111] border border-[#222222] rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-[#d3e97a]" />
            Education
          </h3>
          <div className="mb-2">
            <h4 className="text-[#d3e97a] font-medium">Bachelor of Science in Computer Science</h4>
            <p className="text-[#C7C7C7]">University of Technology • 2013 - 2017</p>
          </div>
          <p className="text-[#C7C7C7] text-sm">
            Focused on software engineering and web technologies. Participated in several
            hackathons and coding competitions.
          </p>
        </div>

        {/* Resume Download CTA */}
        <div className="text-center">
          <a 
            href="/resume.pdf" 
            download="Yusuf_Muhammed_Resume.pdf"
            className="inline-flex items-center gap-2 btn btn-lg border-[#d3e97a] bg-transparent text-[#d3e97a] hover:bg-[#d3e97a] hover:text-black transition-all"
          >
            <FaDownload />
            Download My Resume
          </a>
          <p className="text-[#C7C7C7] mt-4 text-sm">
            Get the complete overview of my experience, skills, and qualifications
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience; 