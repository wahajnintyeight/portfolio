import React from 'react';
import { SKILLS } from '../constants';
import { Icons } from './Icons';

export const SkillCloud: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-12">
        <Icons.cpu className="text-indigo-400" size={24} />
        <h2 className="text-3xl font-bold text-white">Technical Stack</h2>
      </div>
      
      <div className="grid sm:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup) => (
          <div key={skillGroup.category} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              {skillGroup.category}
            </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
