import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/ExperienceList';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillCloud } from './components/SkillCloud';
import { Icons } from './components/Icons';
import { CHATBOT_URL, PROFILE } from './constants';
import { trackVisit } from './lib/trackVisit';

const SECTIONS = [
  { id: 'work', label: 'Work', icon: Icons.code },
  { id: 'about', label: 'About', icon: Icons.user },
  { id: 'skills', label: 'Stack', icon: Icons.layers },
  { id: 'contact', label: 'Contact', icon: Icons.mail },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('work');
  const email = PROFILE.socials.find((social) => social.platform === 'Email');

  useEffect(() => { trackVisit(); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-12% 0px -45% 0px' });
    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#work" className="skip">Skip to work</a>
      <header className="site-header" id="top">
        <div className="wrap site-header__row">
          <a className="wordmark" href="#top" aria-label={`${PROFILE.name}, back to top`}>wahaj<span>.</span></a>
          <nav className="section-nav" aria-label="Sections">
            <ul>
              {SECTIONS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? 'location' : undefined}
                    onClick={() => setActiveSection(id)}
                  >
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="contact-button" href="#contact" aria-label="Get in touch">
            <span>Say hello</span><Icons.projectArrow size={20} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <section id="work" className="section-break" aria-label="Selected work"><ProjectGrid /></section>
        <section id="about" className="section section-break wrap about" aria-labelledby="about-heading">
          <div className="about__intro">
            <h2 id="about-heading">Where I’ve built<span>.</span></h2>
            <p>I build developer tools and web products with Go, PHP, Node.js, and React.</p>
            <p className="about__location"><Icons.mapPin size={16} aria-hidden="true" />{PROFILE.location}</p>
          </div>
          <ExperienceList />
        </section>
        <section id="skills" className="section-break"><SkillCloud /></section>
        <section id="contact" className="section section-break wrap contact" aria-labelledby="contact-heading">
          <span className="contact__brace" aria-hidden="true">{'}'}</span>
          <h2 id="contact-heading">Say hello<span>.</span></h2>
          {email && (
            <a className="contact__mail" href={email.url}>
              {email.display}<Icons.externalLink size={22} aria-hidden="true" />
            </a>
          )}
          <div className="contact__links">
            <nav className="contact__socials" aria-label="Contact and social links">
              {PROFILE.socials.filter((social) => social.platform !== 'Email').map((social) => {
                const Icon = Icons[social.icon];
                return (
                  <a key={social.platform} href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <Icon size={17} aria-hidden="true" />{social.platform}
                  </a>
                );
              })}
            </nav>
            <a href={CHATBOT_URL} target="_blank" rel="noreferrer" className="contact__ai">
              Ask my AI<Icons.externalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <a href="#top">Back to top<Icons.arrowUp size={15} aria-hidden="true" /></a>
      </footer>
    </>
  );
}
