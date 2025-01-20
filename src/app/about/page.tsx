"use client"
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors">
        <div className="relative">
          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-500/10 
              rounded-full blur-[100px] transform -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/20 dark:bg-purple-500/10 
              rounded-full blur-[100px] transform translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-pink-200/10 dark:bg-pink-500/5 
              rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Updated container with more natural spacing */}
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto relative">
              {/* Updated title styling */}
              <h1 className="text-6xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r 
                from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient
                tracking-tight">
                About Me
              </h1>
              
              {/* Updated section spacing and card styling */}
              <section className="mb-24">
                <div className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-10 
                  shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                  dark:hover:border-blue-400/20 transition-all duration-500">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Hey there! I&apos;m a full-stack developer who loves turning ideas into reality through code. 
                    Over the past two years, I&apos;ve had the incredible opportunity to grow from my first role at 
                    Mukhtar Abaseen Logistics to my current position at GSP Green State Power, where I continue 
                    to challenge myself and learn every day.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    What drives me is creating solutions that not only work flawlessly but also make people&apos;s lives 
                    easier. I believe in writing clean, efficient code while keeping the end-user in mind. When I&apos;m 
                    not coding, you&apos;ll find me exploring new technologies and finding ways to bring more value to 
                    the projects I work on.
                  </p>
                </div>
              </section>

              {/* Updated section headers */}
              <section className="mb-24">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Experience
                </h2>
                <div className="space-y-8">
                  {/* Updated experience cards */}
                  <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-10 
                    shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                    dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Full Stack Developer - GSP Green State Power
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">2024 - Present</p>
                      <ul className="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Developed and maintained multiple web applications using React and Laravel</li>
                        <li>Implemented responsive designs and improved user experience</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-10 
                    shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                    dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Web Developer - Mukhtar Abaseen Logistics
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">2022 - 2023</p>
                      <ul className="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Built and maintained company website and internal tools</li>
                        <li>Integrated payment systems and tracking functionality</li>
                        <li>Optimized database queries and application performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Updated skills section */}
              <section className="mb-24">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Updated skills cards */}
                  <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 
                    shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                    dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Frontend
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 
                    shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                    dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Backend
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['Laravel', 'PHP', 'MySQL', 'API Development'].map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 
                    shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                    dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Tools & Others
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {['Git', 'Docker', 'VS Code'].map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Updated education section */}
              <section>
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Education
                </h2>
                <div className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-10 
                  shadow-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-500/20 
                  dark:hover:border-blue-400/20 transition-all duration-500 hover:scale-[1.01]">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Bachelor in Computer Science
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                    University of Bakhtar - 2024
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}