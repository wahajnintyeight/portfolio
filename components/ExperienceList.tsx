import React from 'react';
import { EXPERIENCE } from '../constants';
import { Icons } from './Icons';

export const ExperienceList: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-12">
        <Icons.briefcase className="text-indigo-400" size={24} />
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </div>
      
      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="group relative pl-8 border-l border-zinc-800 hover:border-indigo-500/50 transition-colors">
            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-800 group-hover:bg-indigo-500 transition-colors" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-mono text-zinc-500 mt-2 sm:mt-0">{exp.period}</span>
            </div>
            
            <ul className="text-zinc-400 mb-6 space-y-2 max-w-3xl list-disc list-inside">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="leading-relaxed pl-2 marker:text-indigo-500/50">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
