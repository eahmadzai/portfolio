"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => {
    return pathname === path 
      ? "text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30" 
      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50";
  };

  return (
    <nav className="fixed w-full z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b 
      border-gray-200/30 dark:border-gray-700/30 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 
                to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Ehsanullah Ahmadzai
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  href={path} 
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(path)}`}
                >
                  {label}
                </Link>
              ))}
            </div>
            
            <div className="pl-2 ml-2 border-l border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                  dark:hover:bg-gray-700 transition-all duration-200 text-gray-600 
                  dark:text-gray-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}