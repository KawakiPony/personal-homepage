import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { Theme, Language, Translation } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  t: Translation['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, lang, toggleLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/Logo.svg" alt="KawakiPony Logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {lang === 'zh' ? '码上毕设' : 'GradGo'}
            </span>
            <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 hidden sm:inline-block">
              by KawakiPony
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#hero" className="hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.home}</a>
              <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.about}</a>
              <a href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.services}</a>
              <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">{t.contact}</a>
              <a href="https://gradgo.top/front" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-primary-600 dark:text-primary-400 hover:underline">{t.portfolio}</a>
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Language"
            >
              <div className="flex items-center space-x-1 text-sm font-semibold">
                <Languages size={20} />
                <span>{lang === 'zh' ? 'EN' : '中'}</span>
              </div>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-yellow-500 dark:text-yellow-400"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleLang}
              className="p-1 rounded-md text-gray-600 dark:text-gray-300"
            >
               <span className="text-xs font-bold border border-current rounded px-1">{lang.toUpperCase()}</span>
            </button>
             <button
              onClick={toggleTheme}
              className="p-1 rounded-md text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg白 dark:bg-dark-card border-b border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">{t.home}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">{t.about}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">{t.services}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">{t.contact}</a>
            <a href="https://gradgo.top/front" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>{t.portfolio}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
