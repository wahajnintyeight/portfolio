import React from 'react';
import { CHATBOT_URL, PROFILE, PROFILE_IMAGE_URL } from '../constants';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  const [first, ...rest] = PROFILE.name.split(' ');
  const email = PROFILE.socials.find((s) => s.platform === 'Email');

  return (
    <section className="hero wrap" aria-labelledby="hero-name">
      <p className="hero__status">
        <span className="hero__dot" aria-hidden="true" />
        Available for new opportunities
      </p>

      <h1 className="hero__name" id="hero-name">
        <span className="hero__line"><span>{first}</span></span>
        <span className="hero__line"><span>{rest.join(' ')}</span></span>
      </h1>

      <hr className="hero__rule" />

      <div className="hero__body">
        <div>
          <p className="hero__lede">{PROFILE.summary}</p>
          <div className="hero__actions">
            <a href="#work" className="link">See selected work</a>
            <a
              href={CHATBOT_URL}
              target="_blank"
              rel="noreferrer"
              className="link link--accent"
              aria-label="Ask my AI chatbot about me (opens in a new tab)"
            >
              Ask my AI
              <Icons.externalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Role</dt>
            <dd>{PROFILE.role}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{PROFILE.location}</dd>
          </div>
          {email && (
            <div>
              <dt>Write to</dt>
              <dd><a className="link" href={email.url}>{email.display}</a></dd>
            </div>
          )}
        </dl>

        <figure className="hero__portrait">
          <img src={PROFILE_IMAGE_URL} alt={`Portrait of ${PROFILE.name}`} width={640} height={800} />
          <figcaption>{PROFILE.location}</figcaption>
        </figure>
      </div>
    </section>
  );
};
