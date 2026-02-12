import React from 'react';
import { PROFILE } from '../constants';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  // Using a local variable for the image if provided, otherwise using the placeholder logic in constants.
  // Note: In a real scenario, the user would upload their specific image. 
  // We will style this to handle any aspect ratio gracefully.
  
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 font-mono text-sm tracking-wide">
               <Icons.terminal size={16} />
               <span>System Online</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              {PROFILE.name.split(" ")[0]} <br />
              <span className="text-zinc-500">{PROFILE.name.split(" ")[1]}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-zinc-400 font-light max-w-lg">
              {PROFILE.role}
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed max-w-xl text-lg">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {PROFILE.socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500/50 hover:bg-zinc-800 transition-all group"
                >
                  {Icon && <Icon size={18} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            {/* 
               The user provided image should be placed here.
               For the sake of the design, we are using a grayscale filter that reveals color on hover
            */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop"
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shadow-xl">
               <div className="text-center">
                 <span className="block text-2xl font-bold text-white">4+</span>
                 <span className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};