"use client"
import Navbar from "../components/navbar";
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "ProCode Developers",
      description: "Professional development platform and community",
      technologies: ["Vue.js", "Laravel", "TypeScript"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=ProCode+Developers"
    },
    {
      title: "Global Reach Admission",
      description: "Educational platform for international student admissions",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://placehold.co/600x400/dc2626/ffffff?text=Global+Reach"
    },
    {
      title: "DNB Platform",
      description: "Digital banking and financial services platform",
      technologies: ["Next.js", "Django", "TypeScript"],
      image: "https://placehold.co/600x400/16a34a/ffffff?text=DNB+Platform"
    },
    {
      title: "Medica Healthcare",
      description: "Healthcare management and patient care system",
      technologies: ["React", "Laravel", "TypeScript"],
      image: "https://placehold.co/600x400/9333ea/ffffff?text=Medica+Healthcare"
    },
    {
      title: "Invest Afghanistan",
      description: "Investment and financial management platform",
      technologies: ["React", "Django", "TypeScript"],
      image: "https://placehold.co/600x400/ea580c/ffffff?text=Invest+Afghanistan"
    },{
        title: "Gig Employment System",
        description: "Employment and job listing platform",
        technologies: ["Vue.js", "Laravel", "TypeScript"],
        image: "https://placehold.co/600x400/ea580c/ffffff?text=Gig+Employment"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="max-w-7xl mx-auto relative">
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r 
                from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                My Projects
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl 
                      overflow-hidden shadow-lg border border-gray-100/20 dark:border-gray-700/50 
                      hover:border-blue-500/30 dark:hover:border-blue-400/30 
                      transition-all hover:scale-[1.02] duration-300"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 
                              dark:text-blue-300 px-3 py-1 rounded-full text-sm 
                              hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 