import React from 'react';
import { CHATBOT_URL, PROFILE, PROFILE_IMAGE_URL } from '../constants';
import { MetricsGrid } from './MetricsGrid';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  const email = PROFILE.socials.find((s) => s.platform === 'Email');
  const technologies = PROFILE.role.split('|').slice(1).map((item) => item.trim());

  return (
    <section className="hero wrap" aria-labelledby="hero-name">
      <div className="hero__intro">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          Available for new opportunities
        </p>

        <h1 className="hero__name" id="hero-name">{PROFILE.name}</h1>
        <p className="hero__role">{PROFILE.role.split('|')[0].trim()}</p>
        <p className="hero__lede">{PROFILE.summary}</p>

        <div className="hero__actions">
          <a href="#work" className="hero__button hero__button--primary">Explore my work</a>
          {email && <a href={email.url} className="hero__button hero__button--quiet">Get in touch</a>}
          <a
            href={CHATBOT_URL}
            target="_blank"
            rel="noreferrer"
            className="hero__button hero__button--quiet"
            aria-label="Ask my AI chatbot about me (opens in a new tab)"
          >
            Ask my AI
            <Icons.externalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__stage">
        <p className="hero__fact hero__fact--location">
          <span>Based in</span>
          {PROFILE.location}
        </p>
        <figure className="hero__portrait">
          <img src={PROFILE_IMAGE_URL} alt={`Portrait of ${PROFILE.name}`} width={640} height={800} />
        </figure>
        <p className="hero__fact hero__fact--focus">
          <span>Working with</span>
          {technologies.join(' / ')}
        </p>
      </div>

      <MetricsGrid />
    </section>
  );
};
