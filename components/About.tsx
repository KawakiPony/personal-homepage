import React from 'react';
import { Translation } from '../types';
import { Award, Briefcase, Smile } from 'lucide-react';

interface AboutProps {
  t: Translation['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">KawakiPony</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t.title}
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-500 dark:text-gray-300">
            <p className="mb-6">{t.content1}</p>
            <p>{t.content2}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-gray-50 dark:bg-dark-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
                <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{t.stats.experience}</dt>
            </div>

            <div className="bg-gray-50 dark:bg-dark-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{t.stats.projects}</dt>
            </div>

            <div className="bg-gray-50 dark:bg-dark-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-4">
                <Smile className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{t.stats.satisfaction}</dt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;