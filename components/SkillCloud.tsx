import React from 'react';
import { SKILLS } from '../constants';
import { Icons } from './Icons';
import { SkillBadge } from './SkillBadge';

export const SkillCloud: React.FC = () => {
  return (
    <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <Icons.cloud className="text-indigo-400" size={24} />
        <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
        {SKILLS.map((cat) => (
          <div key={cat.category}>
            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              {cat.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};