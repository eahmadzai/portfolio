"use client"
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-16">
        <div className="container max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">About Me</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I&apos;m a passionate full-stack developer with Two years of experience building web applications.
                My journey in software development started with Mukhtar Abaseen Logistics and continued with
                GSP Green State Power as a full-stack developer.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-700 dark:text-gray-200">Frontend</h3>
                  <ul className="text-gray-600 dark:text-gray-300">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-700 dark:text-gray-200">Backend</h3>
                  <ul className="text-gray-600 dark:text-gray-300">
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>API Development</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-700 dark:text-gray-200">Tools</h3>
                  <ul className="text-gray-600 dark:text-gray-300">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}