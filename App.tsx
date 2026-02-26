import React from 'react';
import { Hero } from './components/Hero';
import { ExperienceList } from './components/ExperienceList';
import { ProjectSlider } from './components/ProjectSlider';
import { SkillCloud } from './components/SkillCloud';
import { Section } from './components/Section';
import { EDUCATION, PROFILE, PROFILE_IMAGE_URL } from './constants';
import { Icons } from './components/Icons';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-indigo-500/30 font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-12 pb-32">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center py-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold tracking-tight hidden sm:block">
              {PROFILE.name}
            </span>
          </div>
          
          <nav className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800 hidden md:block" />
            <div className="flex gap-4">
               {PROFILE.socials.map(s => {
                  const Icon = Icons[s.icon as keyof typeof Icons];
                  return (
                    <a 
                      key={s.platform} 
                      href={s.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-zinc-500 hover:text-white transition-colors"
                      aria-label={s.platform}
                    >
                      {Icon && <Icon size={20} />}
                    </a>
                  )
               })}
            </div>
          </nav>
        </header>

        <Section delay={100}>
          <Hero />
        </Section>

        <div className="space-y-48 mt-20">
          
          <Section delay={200} id="experience">
            <ExperienceList />
          </Section>

          <Section delay={300} id="projects">
            <ProjectSlider />
          </Section>

          <Section delay={400} id="skills">
            <SkillCloud />
          </Section>

          <Section delay={500} id="education">
             <div className="flex items-center gap-3 mb-12">
                <Icons.education className="text-indigo-400" size={24} />
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>
              <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl flex flex-col sm:flex-row justify-between sm:items-center hover:border-zinc-700 transition-all">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-1">{EDUCATION.institution}</h3>
                    <p className="text-zinc-400 text-lg">{EDUCATION.degree}</p>
                  </div>
                  <div className="mt-6 sm:mt-0 text-left sm:text-right">
                    <span className="block text-zinc-300 font-medium mb-1">{EDUCATION.location}</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-mono text-zinc-500">
                      {EDUCATION.period}
                    </span>
                  </div>
              </div>
          </Section>

        </div>

        {/* Footer */}
        <footer className="mt-48 border-t border-zinc-900 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Back to top</a>
            <a href="mailto:alex@example.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>

      </div>
    </main>
  );
}
