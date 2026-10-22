import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';
import { Icons } from './Icons';

export const Hero: React.FC = () => (
  <section className="hero wrap" aria-labelledby="intro-heading">
    <div className="hero__intro">
      <h1 id="intro-heading">Hey, I’m<br />Wahaj<span>.</span></h1>
      <p className="hero__role">Software developer</p>
      <ul className="hero__tools" aria-label="Core technologies">
        {['Go', 'PHP', 'Node.js', 'React'].map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </div>
    <div className="hero__portrait" aria-hidden="true">
      <img src={PROFILE_IMAGE_URL} alt="" width={1070} height={1470}
        fetchPriority="high" decoding="async" />
    </div>
    <div className="hero__actions">
      <a className="contact-button" href="#work">
        Explore my work<Icons.projectArrow size={20} aria-hidden="true" />
      </a>
    </div>
  </section>
);
