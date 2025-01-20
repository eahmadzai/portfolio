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
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 
                    hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                          px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 
                          transition-colors duration-200"
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
    </>
  );
} 