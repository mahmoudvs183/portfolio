import React from 'react';
import { Code2, Cpu, Globe2, Palette, FileText } from 'lucide-react';


const skills = [
  { icon: Code2, name: 'Frontend Development', description: 'Expert in React, TypeScript, and modern web technologies' },
  { icon: Palette, name: 'UI/UX Design', description: 'Creating beautiful, intuitive user interfaces' },
  { icon: Globe2, name: 'Responsive Design', description: 'Mobile-first approach for all screen sizes' },
  { icon: Cpu, name: 'Performance', description: 'Optimized applications for maximum speed' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <div className="mb-16 relative max-w-2xl mx-auto">
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400" style={{width: "265px",height: "265px"}}>
                <img
                  src="../../photoMe.jpg"
                  alt="Mahmoud Sayed"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
            href="../../mahmoudSayedCV.pdf"
            download
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </a>
            </div>
            <h3 className="text-2xl font-semibold dark:text-white">Front-end Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate front-end developer with a keen eye for creating beautiful, functional, 
              and user-friendly websites. With years of experience in web development, I specialize 
              in building modern web applications using cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver 
              exceptional digital experiences that meet both user needs and business goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:scale-105">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h4 className="font-semibold mb-2 dark:text-white">{skill.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}