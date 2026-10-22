import React, { useRef, useState } from 'react';
import { EDUCATION, EXPERIENCE } from '../constants';
import { Icons } from './Icons';
import { CAREER_HIGHLIGHTS } from './career-highlights';
import { getTabIndex } from '../lib/tabNavigation';

export const ExperienceList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const experience = EXPERIENCE[activeIndex];
  const highlights = CAREER_HIGHLIGHTS[experience.id] ?? [];

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = getTabIndex(event.key, index, EXPERIENCE.length);
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  };

  return (
    <div className="career" id="experience">
      <div className="career-chapters" role="tablist" aria-label="Career chapters">
        {EXPERIENCE.map((item, index) => (
          <button key={item.id} id={`career-tab-${item.id}`} type="button" role="tab"
            ref={(element) => { tabRefs.current[index] = element; }}
            aria-selected={index === activeIndex} aria-controls="career-panel" tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)} onKeyDown={(event) => onTabKeyDown(event, index)}>
            <span>{item.period}</span><strong>{item.company}</strong>
            <Icons.projectArrow size={20} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="career-story" id="career-panel" role="tabpanel"
        aria-labelledby={`career-tab-${experience.id}`} tabIndex={0}>
        <div className="career-story__identity">
          <h3>{experience.company}</h3>
          <p className="career-story__role">{experience.role}</p>
          <p className="career-story__location"><Icons.mapPin size={15} aria-hidden="true" />{experience.location}</p>
        </div>
        <div className="career-story__work" key={experience.id}>
          <ul className="career-highlights">
            {highlights.map((highlight) => {
              const Icon = Icons[highlight.icon];
              return (
                <li key={highlight.title}>
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  <div><h4>{highlight.title}</h4><p>{highlight.detail}</p></div>
                </li>
              );
            })}
          </ul>
          <details className="career-story__details">
            <summary>View role details<Icons.arrowRight size={17} aria-hidden="true" /></summary>
            <ul>{experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
          </details>
        </div>
      </div>
      <div className="career-education" id="education">
        <Icons.education size={30} strokeWidth={1.5} aria-hidden="true" />
        <div><h3>{EDUCATION.institution}</h3><p>{EDUCATION.degree}</p></div>
        <p>{EDUCATION.period}</p>
      </div>
    </div>
  );
};
