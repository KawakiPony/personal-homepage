import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-1">
          <p className="text-gray-500 dark:text-gray-400 font-medium">© {new Date().getFullYear()} GradGo</p>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 dark:text-gray-500 mt-2 hover:underline">蜀ICP备2025173615号</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
