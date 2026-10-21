import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/ExperienceList';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillCloud } from './components/SkillCloud';
import { Icons } from './components/Icons';
import { CHATBOT_URL, EDUCATION, PROFILE } from './constants';
import { trackVisit } from './lib/trackVisit';

const SECTIONS = [
  { id: 'work', label: 'Work', navLabel: 'Work', icon: Icons.code },
  { id: 'experience', label: 'Experience', navLabel: 'Career', icon: Icons.briefcase },
  { id: 'skills', label: 'Stack', navLabel: 'Stack', icon: Icons.layers },
  { id: 'education', label: 'Education', navLabel: 'Study', icon: Icons.education },
  { id: 'contact', label: 'Contact', navLabel: 'Contact', icon: Icons.mail },
];

export default function App() {
  // Fire-and-forget visit tracking on first mount.
  useEffect(() => {
    trackVisit();
  }, []);

  const email = PROFILE.socials.find((social) => social.platform === 'Email');

  return (
    <>
      <a href="#work" className="skip">Skip to work</a>

      <header className="nav">
        <div className="nav__row">
          <a href="#top" className="nav__mark" aria-label={`${PROFILE.name}, home`}>
            MW<span aria-hidden="true">.</span>
          </a>

          <nav id="section-navigation" className="nav__links" aria-label="Sections">
            <p className="nav__caption">On this page</p>
            <ol>
              {SECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <li key={section.id}>
                    <a href={`#${section.id}`} aria-label={section.label}>
                      <span className="nav__icon" aria-hidden="true"><Icon size={18} strokeWidth={1.75} /></span>
                      <span className="nav__label">{section.navLabel}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
            <a className="nav__ai" href={CHATBOT_URL} target="_blank" rel="noreferrer">
              Ask my AI <Icons.externalLink size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />

        <section id="work">
          <ProjectGrid />
        </section>

        <section id="experience">
          <ExperienceList />
        </section>

        <section id="skills">
          <SkillCloud />
        </section>

        <section id="education">
          <div className="sect wrap">
            <header className="sect__head">
              <h2 className="sect__title">Education</h2>
            </header>
            <div className="ledger">
              <article className="ledger__row ledger__row--education">
                <p className="ledger__when">{EDUCATION.period}</p>
                <div>
                  <h3 className="ledger__role">{EDUCATION.institution}</h3>
                  <p className="ledger__org"><span>{EDUCATION.location}</span></p>
                </div>
                <p className="education__degree">{EDUCATION.degree}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="sect wrap contact">
            <header className="sect__head contact__head">
              <h2 className="sect__title">Let’s build something.</h2>
            </header>
            <div className="contact__body">
              <div>
                <p className="contact__label">Reach out directly</p>
                {email && <a className="contact__mail" href={email.url}>{email.display}<Icons.externalLink size={16} aria-hidden="true" /></a>}
              </div>
              <nav className="contact__socials" aria-label="Contact and social links">
                {PROFILE.socials.filter((social) => social.platform !== 'Email').map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {social.platform}{social.url.startsWith('http') && <Icons.externalLink size={14} aria-hidden="true" />}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot__line">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>{PROFILE.location}</span>
          <a href="#top">Back to top <Icons.arrowUp size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
