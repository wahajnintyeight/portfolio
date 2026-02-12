import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-indigo-300 bg-indigo-950/30 border border-indigo-500/20 rounded-md hover:bg-indigo-900/40 hover:border-indigo-400/40 transition-colors cursor-default">
      {name}
    </span>
  );
};