import React from 'react';
import { SKILLS } from '../constants';

export const SkillCloud: React.FC = () => {
  return (
    <div className="sect wrap">
      <header className="sect__head">
        <h2 className="sect__title">Technical stack</h2>
        <p className="sect__note">The tools I reach for in production.</p>
      </header>

      <dl className="stack">
        {SKILLS.map((group) => (
          <div key={group.category} className="stack__row">
            <dt className="stack__cat">{group.category}</dt>
            <dd>
              <ul className="stack__list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
