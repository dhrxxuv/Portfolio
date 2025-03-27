import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Trophy, Star, Award, GraduationCap, Download, ExternalLink } from 'lucide-react';

function App() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const projects = [
    {
      title: "Streamo - AI Movie Recommender",
      description: "AI-powered movie recommendation platform with GPT search functionality and multi-language support",
      tags: ["React", "Redux", "Tailwind CSS", "TMDB API", "Gemini API"],
      codeLink: "https://github.com/dhrxxuv/streamoo",
      demoLink: "#",
      accentColor: "bg-blue-500"
    },
    {
      title: "FoodFunda - Food Order App",
      description: "Food delivery platform with real-time updates from Swiggy API and conflict-driven UI",
      tags: ["React", "Redux Toolkit", "Swiggy API", "React Hooks"],
      codeLink: "https://github.com/dhrxxuv/foodfunda",
      demoLink: "#",
      accentColor: "bg-purple-500"
    },
    {
      title: "Paytm Wallet Gateway",
      description: "Digital wallet system with payment transactions and real-time balance updates",
      tags: ["React", "Express.js", "MongoDB", "JWT"],
      codeLink: "https://github.com/dhrxxuv/Paytm_wallet_gateway",
      demoLink: "#",
      accentColor: "bg-pink-500"
    },
    {
      title: "Phone Automation System",
      description: "GUI for controlling and testing Android/iOS devices with comprehensive testing features",
      tags: ["Python", "Appium", "OpenCV", "Tesseract OCR", "Twilio API"],
      codeLink: "https://github.com/dhrxxuv/Paytm_wallet_gateway",
      demoLink: "#",
      accentColor: "bg-green-500"
    },
    {
      title: "Full-Stack Todo App",
      description: "Task management system with responsive design and efficient state management",
      tags: ["React", "Express.js", "MongoDB", "REST API"],
      codeLink: "https://github.com/dhrxxuv/Todo-App",
      demoLink: "#",
      accentColor: "bg-yellow-500"
    }
  ];

  return (
    <div className="text-white overflow-x-hidden relative bg-gray-900">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-50 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Floating Binary Code */}
      <div className="fixed inset-0 -z-40 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute font-mono text-green-400 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              writingMode: 'vertical-rl'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2)_0,transparent_70%)]"></div>
        
        {/* Glitch Effect Container */}
        <div className="glitch-container absolute inset-0 overflow-hidden">
          <div className="glitch-layer"></div>
          <div className="glitch-layer"></div>
          <div className="glitch-layer"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 py-32">
          <Code className="w-20 h-20 mx-auto mb-8 text-purple-400 animate-pulse hover:animate-spin transition-all" />
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text" data-text="Dhruv Neekhra">
            Dhruv Neekhra
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
            <span className="inline-block glitch-text-sm" data-text="SDE Intern at SkillQuest Learning">
              SDE Intern at SkillQuest Learning
            </span>
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center gap-8">
              <a href="https://www.linkedin.com/in/dhruv-neekhra-576a7b226/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-10 h-10" />
              </a>
              <a href="https://github.com/dhrxxuv" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <Github className="w-10 h-10" />
              </a>
              <a href="mailto:dhruvneekhra01@gmail.com" className="text-red-400 hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-10 h-10" />
              </a>
            </div>
            
            <a href="https://drive.google.com/file/d/1j_BStVeVDYbxvG9wiSwUW3McqX4gCHEL/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden group">
              <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}


      {/* Skills Section */}
      <section ref={addToRefs} className="section-reveal min-h-screen py-24 relative border-b border-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="inline-block glitch-text-sm" data-text="Skills & Tech">
              Skills & Tech
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: "Languages", 
                skills: ["C++", "Python", "JavaScript", "HTML/CSS"] 
              },
              { 
                title: "Frontend", 
                skills: ["React.js", "Redux", "Tailwind CSS", "Bootstrap"] 
              },
              { 
                title: "Backend", 
                skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"] 
              },
              { 
                title: "Tools & Other", 
                skills: ["Git", "MySQL", "Appium", "OpenCV", "Tesseract OCR"] 
              }
            ].map((category, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={addToRefs} className="section-reveal min-h-screen py-24 relative border-b border-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="inline-block glitch-text-sm" data-text="Experience">
              Experience
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Software Engineer Intern</h3>
                  <p className="text-xl text-gray-400 mt-2">SkillQuest Learning | Jan 2025 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Designed and developed frontend using React</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Implemented robust APIs with FastAPI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Conducted unit testing for optimal functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={addToRefs} className="section-reveal min-h-screen py-24 relative border-b border-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="inline-block glitch-text-sm" data-text="Education">
              Education
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Bachelor of Technology</h3>
                  <p className="text-xl text-gray-400 mt-2">ITM University, Gwalior | 2021 - 2025</p>
                  <p className="text-lg text-gray-300 mt-2">Computer Science Engineering (CGPA: 8.15)</p>
                </div>
                <GraduationCap className="w-12 h-12 text-purple-400" />
              </div>
              <p className="text-gray-400">Specialized in software development and web technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={addToRefs} className="section-reveal min-h-screen py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="inline-block glitch-text-sm" data-text="Achievements">
              Achievements
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-500">
              <Trophy className="w-12 h-12 mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-3 text-purple-400">Eureka Challenge 2.0 Semifinalist</h3>
              <p className="text-xl text-gray-300">Varroc Engineering Competition</p>
              <p className="mt-4 text-gray-400">Ranked among top participants out of 22,000+ competitors</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-500">
              <Award className="w-12 h-12 mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-3 text-purple-400">3 Star in C++ (GFG)</h3>
              <p className="text-xl text-gray-300">GeeksforGeeks Problem Solving</p>
              <p className="mt-4 text-gray-400">Demonstrated strong problem-solving skills in C++</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="section-reveal min-h-screen py-24 relative border-b border-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="inline-block glitch-text-sm" data-text="My Projects">
              My Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-xl border border-gray-800 hover:border-${project.accentColor.split('-')[1]}-400 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 ${project.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demoLink} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className={`px-3 py-1 text-xs rounded-full ${project.accentColor}/20 text-${project.accentColor.split('-')[1]}-300 border border-${project.accentColor.split('-')[1]}-500/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        /* Glitch Effect */
        .glitch-container {
          pointer-events: none;
        }
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1));
          mix-blend-mode: screen;
          opacity: 0;
        }
        .glitch-layer:nth-child(1) {
          transform: translate(-2px, -2px);
          animation: glitch-anim-1 8s infinite;
        }
        .glitch-layer:nth-child(2) {
          transform: translate(2px, 2px);
          animation: glitch-anim-2 8s infinite;
        }
        .glitch-layer:nth-child(3) {
          transform: translate(3px, -3px);
          animation: glitch-anim-3 8s infinite;
        }
        
        @keyframes glitch-anim-1 {
          0%, 100% { opacity: 0; }
          5%, 7%, 15%, 17% { opacity: 0.3; }
        }
        @keyframes glitch-anim-2 {
          0%, 100% { opacity: 0; }
          3%, 9%, 13%, 19% { opacity: 0.3; }
        }
        @keyframes glitch-anim-3 {
          0%, 100% { opacity: 0; }
          2%, 6%, 10%, 14% { opacity: 0.3; }
        }
        
        /* Glitch Text */
        .glitch-text {
          position: relative;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch-text::before {
          color: #f0f;
          z-index: -1;
          animation: glitch-effect-1 3s infinite;
        }
        .glitch-text::after {
          color: #0ff;
          z-index: -2;
          animation: glitch-effect-2 3s infinite;
        }
        
        .glitch-text-sm::before, .glitch-text-sm::after {
          opacity: 0.5;
        }
        
        @keyframes glitch-effect-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-effect-2 {
          0% { transform: translate(0); }
          20% { transform: translate(3px, -3px); }
          40% { transform: translate(3px, 3px); }
          60% { transform: translate(-3px, -3px); }
          80% { transform: translate(-3px, 3px); }
          100% { transform: translate(0); }
        }
        
        /* Section Reveal Animation */
        .section-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default App;