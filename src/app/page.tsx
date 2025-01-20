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
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="pt-16"> {/* Padding top to account for fixed navbar */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Profile Image */}
              <div className="mb-8 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ehsanullah Ahmadzai"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hi, I&apos;m Ehsanullah Ahmadzai
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Let&apos;s build something amazing together!
              </p>
              
              {/* Add Jobs Section after the existing content */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                  Work Experience
                </h2>
                <div className="space-y-8">
                  {jobs.map((job, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left
                        transform transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {job.title}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <a href={job.companyLink} className="text-blue-600 dark:text-blue-400 font-medium">
                          {job.company}
                        </a>
                        <span className="text-gray-600 dark:text-gray-400">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap pt-8">
                <Link 
                  href="/projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                >
                  Contact Me
                </Link>
                <a
                  href="/Ehsanullah%20Ahmadzai%20CV.pdf"
                  download="Ehsanullah Ahmadzai CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex justify-center gap-6">
                <a 
                    href="https://github.com/settings/profile" 
                    target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahsanullah-ahmadzai-391552182?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
