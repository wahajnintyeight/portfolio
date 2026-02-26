import React from 'react';
import { motion } from 'motion/react';
import { PROFILE, PROFILE_IMAGE_URL } from '../constants';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  return (
    <div className="py-12 sm:py-24 lg:py-32">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6 border border-indigo-500/20"
          >
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8">
            <span className="block mb-2 text-zinc-400 text-2xl sm:text-3xl font-normal">Hi, I'm</span>
            {PROFILE.name}
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 group">
              View Projects
              <Icons.arrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              {PROFILE.socials.map((s) => {
                const Icon = Icons[s.icon as keyof typeof Icons];
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                    aria-label={s.platform}
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-3xl group-hover:blur-2xl transition-all duration-700" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 ring-1 ring-white/10 rotate-3 transition-transform duration-500 group-hover:rotate-0">
               <img 
                  src={PROFILE_IMAGE_URL} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
