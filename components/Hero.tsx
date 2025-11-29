import React from 'react';
import { Translation } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  t: Translation['hero'];
  onChatClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onChatClick }) => {
  const avatarUrl = '/assets/avatar.jpg';
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden mx-auto transition-transform hover:scale-105 duration-300">
            <img 
              src={avatarUrl}
              alt="KawakiPony Avatar" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/300/300'; }}
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800"></div>
        </div>

        {/* Text Content */}
        <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4 tracking-wide">
          {t.greeting}
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            {t.role}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
          {t.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
          <a 
            href="https://www.gradgo.top"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 md:text-lg transition-all shadow-lg hover:shadow-primary-600/30"
          >
            {t.cta}
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <button 
            onClick={onChatClick}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg transition-all shadow-sm hover:shadow-md"
          >
            <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
            {t.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
