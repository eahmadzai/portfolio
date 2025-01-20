import Navbar from "./components/navbar";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const jobs = [
    {
      title: "Full Stack Developer",
      company: "GSP Green State Power",
      companyLink: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://gsp-af.com/&ved=2ahUKEwiRvq7t3YOLAxWIRvEDHblRKcIQFnoECDsQAQ&usg=AOvVaw3SZj-1LRTAI6sfFtOhI7aI",
      period: "2024 - Present",
      description: "Developing and maintaining web applications using React, Next.js, and Laravel. Leading frontend development and implementing responsive designs."
    },
    {
      title: "Full Stack Developer",
      company: "Mukhtar Abaseen Logistics",
      companyLink: "https://mukhtarabaseen.com",
      period: "2022 - 2023",
      description: "Built and maintained company's web platform using Vue.js and Laravel. Implemented key features and improved application performance."
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
            <div className="max-w-4xl mx-auto relative">
              {/* Profile Section */}
              <div className="text-center mb-24 relative">
                {/* Profile Image with Animated Border */}
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    rounded-full animate-spin-slow blur-xl opacity-50" />
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative ring-4 
                    ring-white dark:ring-gray-800 shadow-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Ehsanullah Ahmadzai"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 
                  to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Hi, I&apos;m Ehsanullah Ahmadzai
                </h1>
                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span> | Problem Solver | Tech Enthusiast
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Passionate about creating elegant solutions and bringing ideas to life through code.
                  Let&apos;s build something amazing together!
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link 
                    href="/projects"
                    className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
                      text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all 
                      transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>View My Work</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="group px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl 
                      hover:bg-gray-900 dark:hover:bg-gray-600 transition-all transform 
                      hover:-translate-y-1 hover:shadow-lg"
                  >
                    Contact Me
                  </Link>

                  <a
                    href="/Ehsanullah%20Ahmadzai%20CV.pdf"
                    download
                    className="group px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 
                      text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all 
                      transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" 
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="mt-32">
                <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r 
                  from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Work Experience
                </h2>
                <div className="space-y-12">
                  {jobs.map((job, index) => (
                    <div 
                      key={index}
                      className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl 
                        shadow-lg p-8 text-left transform transition-all duration-300 
                        hover:scale-[1.02] hover:shadow-2xl border border-gray-100/20 
                        dark:border-gray-700/50 relative overflow-hidden"
                    >
                      {/* Card Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                        via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 
                          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3">
                          <a 
                            href={job.companyLink} 
                            className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 
                              dark:hover:text-blue-300 transition-colors flex items-center gap-2 w-fit"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 
                              group-hover:translate-x-0 transition-all" 
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <span className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 
                            bg-gray-100 dark:bg-gray-700/50 px-4 py-1 rounded-full text-sm 
                            font-medium">
                            {job.period}
                          </span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-20 flex justify-center gap-8">
                <a 
                  href="https://github.com/settings/profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transform hover:scale-110 transition-all"
                >
                  <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform" 
                    fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahsanullah-ahmadzai-391552182" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transform hover:scale-110 transition-all"
                >
                  <svg className="w-8 h-8 transform group-hover:rotate-12 transition-transform" 
                    fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
