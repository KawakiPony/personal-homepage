import React from 'react';
import { Translation, ServiceItem } from '../types';

interface ServicesProps {
  t: Translation['services'];
}

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <div className="relative group bg-white dark:bg-dark-card p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1">
    <div>
      <span className="rounded-lg inline-flex p-3 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 ring-4 ring-white dark:ring-dark-card group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </span>
    </div>
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        <span className="absolute inset-0" aria-hidden="true" />
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {item.description}
      </p>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ t }) => {
  const servicesList = Object.values(t.items);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-bg/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;