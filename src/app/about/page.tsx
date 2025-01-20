"use client"
import Navbar from "../components/navbar";

export default function About() {
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
            <div className="max-w-4xl mx-auto relative">
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r 
                from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                About Me
              </h1>
              
              <section className="mb-20">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                  shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                  dark:hover:border-blue-400/30 transition-all">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    I&apos;m a passionate full-stack developer with Two years of experience building web applications.
                    My journey in software development started with Mukhtar Abaseen Logistics and continued with
                    GSP Green State Power as a full-stack developer.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I specialize in creating efficient, scalable, and user-friendly applications using modern technologies.
                    My approach combines technical expertise with a strong focus on delivering business value.
                  </p>
                </div>
              </section>

              <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent">
                  Experience
                </h2>
                <div className="space-y-6">
                  {/* Experience Cards */}
                  <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                    shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                    dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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

                  <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                    shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                    dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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

              <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Skills Cards */}
                  <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 
                    shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                    dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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

                  <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 
                    shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                    dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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

                  <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 
                    shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                    dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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

              <section>
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 
                  to-purple-600 bg-clip-text text-transparent">
                  Education
                </h2>
                <div className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                  shadow-lg border border-gray-100/20 dark:border-gray-700/50 hover:border-blue-500/30 
                  dark:hover:border-blue-400/30 transition-all hover:scale-[1.02] duration-300">
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