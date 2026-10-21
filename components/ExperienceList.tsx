import React from 'react';
import { EXPERIENCE } from '../constants';

export const ExperienceList: React.FC = () => {
  return (
    <div className="sect wrap">
      <header className="sect__head">
        <h2 className="sect__title">Experience</h2>
        <p className="sect__note">Four years of production PHP, Node.js and Go.</p>
      </header>

      <div className="ledger">
        {EXPERIENCE.map((exp) => (
          <article key={exp.id} className="ledger__row">
            <p className="ledger__when">{exp.period}</p>
            <div>
              <h3 className="ledger__role">{exp.role}</h3>
              <p className="ledger__org">{exp.company} <span>· {exp.location}</span></p>
            </div>
            <ul className="ledger__points">
              {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
