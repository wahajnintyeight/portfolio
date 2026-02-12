import React from 'react';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/ExperienceList';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillCloud } from './components/SkillCloud';
import { Section } from './components/Section';
import { EDUCATION, PROFILE } from './constants';
import { Icons } from './components/Icons';

function App() {
  return (
    <main className="min-h-screen selection:bg-indigo-500/30">
      
      {/* Top Gradient Line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pb-32">
        
        {/* Navigation / Header - Minimal */}
        <header className="flex justify-between items-center py-6 border-b border-zinc-900/50 mb-10">
          <div className="text-zinc-500 font-mono text-xs">
            {PROFILE.location}
          </div>
          <div className="flex gap-4">
             {PROFILE.socials.slice(0, 2).map(s => {
                const Icon = Icons[s.icon as keyof typeof Icons];
                return (
                  <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-indigo-400 transition-colors">
                    {Icon && <Icon size={18} />}
                  </a>
                )
             })}
          </div>
        </header>

        <Section delay={100}>
          <Hero />
        </Section>

        <div className="space-y-32">
          
          <Section delay={200} id="experience">
            <ExperienceList />
          </Section>

          <Section delay={300} id="projects">
            <ProjectGrid />
          </Section>

          <Section delay={400} id="skills">
            <SkillCloud />
          </Section>

          <Section delay={500} id="education">
             <div className="flex items-center gap-3 mb-6">
                <Icons.code className="text-indigo-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-100">{EDUCATION.institution}</h4>
                    <p className="text-zinc-400">{EDUCATION.degree}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-right">
                    <span className="block text-zinc-300 font-medium">{EDUCATION.location}</span>
                    <span className="text-sm font-mono text-zinc-500">{EDUCATION.period}</span>
                  </div>
              </div>
          </Section>

        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-zinc-900 pt-12 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind, and TypeScript.</p>
        </footer>

      </div>
    </main>
  );
}

export default App;