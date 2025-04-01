import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white" style={{lineHeight: ".5"}}>
          Mahmoud Sayed 
        </h1>
        <h1 className="text-2xl md:text-4xl  mb-6 dark:text-white">
          Front-end Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I create beautiful, responsive websites that deliver exceptional user experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <a
          href="../../mahmoudSayedCV.pdf"
          download
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          <FileText className="w-5 h-5" />
          Download CV
        </a>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </a>
      </div>
    </section>
  );
}