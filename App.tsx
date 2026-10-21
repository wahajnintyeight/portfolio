import React, { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/ExperienceList';
import { ProjectSlider } from './components/ProjectSlider';
import { SkillCloud } from './components/SkillCloud';
import { Section } from './components/Section';
import { CHATBOT_URL, EDUCATION, PROFILE } from './constants';
import { trackVisit } from './lib/trackVisit';

export default function App() {
  // Fire-and-forget visit tracking on first mount.
  useEffect(() => {
    trackVisit();
  }, []);

  const email = PROFILE.socials.find((s) => s.platform === 'Email');

  return (
    <MotionConfig reducedMotion="user">
      <a href="#work" className="skip">Skip to work</a>

      <header className="nav">
        <div className="wrap nav__row">
          <a href="#top" className="nav__mark">{PROFILE.name}</a>
          <nav className="nav__links" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav__cta link" href={CHATBOT_URL} target="_blank" rel="noreferrer">Ask my AI</a>
        </div>
      </header>

      <main id="top">
        <Hero />

        <Section id="work">
          <ProjectSlider />
        </Section>

        <Section id="experience">
          <ExperienceList />
        </Section>

        <Section id="skills">
          <SkillCloud />
        </Section>

        <Section id="education">
          <div className="sect wrap">
            <header className="sect__head">
              <h2 className="sect__title">Education</h2>
            </header>
            <div className="ledger">
              <article className="ledger__row">
                <p className="ledger__when">{EDUCATION.period}</p>
                <div>
                  <h3 className="ledger__role">{EDUCATION.institution}</h3>
                  <p className="ledger__org"><span>{EDUCATION.location}</span></p>
                </div>
                <p>{EDUCATION.degree}</p>
              </article>
            </div>
          </div>
        </Section>
      </main>

      <footer className="foot" id="contact">
        <div className="wrap">
          <p className="foot__lead">Let's build something.</p>
          {email && <a className="foot__mail" href={email.url}>{email.display}</a>}

          <nav className="foot__links" aria-label="Elsewhere">
            {PROFILE.socials.filter((s) => s.platform !== 'Email').map((s) => (
              <a key={s.platform} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {s.platform}
              </a>
            ))}
          </nav>

          <div className="foot__base">
            <span>© {new Date().getFullYear()} {PROFILE.name}</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
