import React from 'react';
import { EXPERIENCE } from '../constants';
import { Icons } from './Icons';

export const ExperienceList: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3 mb-8">
        <Icons.code className="text-indigo-400" size={24} />
        <h3 className="text-2xl font-bold text-white">Work Experience</h3>
      </div>

      <div className="relative border-l border-zinc-800 ml-3 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={job.id} className="relative pl-8 sm:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors"></div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-xl font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                {job.role}
              </h4>
              <span className="font-mono text-sm text-zinc-500 mt-1 sm:mt-0 bg-zinc-900 px-2 py-1 rounded">
                {job.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-zinc-400 text-sm">
              <span className="font-medium text-zinc-300">{job.company}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
              <span>{job.location}</span>
            </div>

            <ul className="space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-400 text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0 group-hover:bg-indigo-500/50 transition-colors"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};