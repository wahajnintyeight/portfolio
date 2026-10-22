import React from 'react';
import { SKILLS } from '../constants';
import { Icons } from './Icons';

const GROUP_ICONS = [Icons.code, Icons.layers, Icons.database, Icons.cloud];

export const SkillCloud: React.FC = () => (
  <div className="section wrap toolkit">
    <h2>What I build with<span>.</span></h2>
    <dl className="stack">
      {SKILLS.map((group, index) => {
        const Icon = GROUP_ICONS[index] ?? Icons.code;
        return (
          <div key={group.category} className="stack__group">
            <dt><Icon size={20} strokeWidth={1.6} aria-hidden="true" />{group.category}</dt>
            <dd><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></dd>
          </div>
        );
      })}
    </dl>
  </div>
);
