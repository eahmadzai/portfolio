"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => {
    return pathname === path ? "text-blue-400" : "text-gray-300";
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 shadow-lg fixed w-full z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Ehsanullah Ahmadzai
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className={`hover:text-blue-400 px-3 py-2 rounded-md transition-colors ${isActive('/')}`}>
                Home
              </Link>
              <Link href="/projects" className={`hover:text-blue-400 px-3 py-2 rounded-md transition-colors ${isActive('/projects')}`}>
                Projects
              </Link>
              <Link href="/about" className={`hover:text-blue-400 px-3 py-2 rounded-md transition-colors ${isActive('/about')}`}>
                About
              </Link>
              <Link href="/contact" className={`hover:text-blue-400 px-3 py-2 rounded-md transition-colors ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}