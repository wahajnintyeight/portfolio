import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Icons } from './Icons';
import { SkillBadge } from './SkillBadge';
import { ImageCarousel } from './ImageCarousel';

export const ProjectSlider: React.FC = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openCarousel = (images: string[], index: number = 0) => {
    if (!images || images.length === 0) return;
    setSelectedProjectImages(images);
    setInitialImageIndex(index);
    setCarouselOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <Icons.database className="text-indigo-400" size={24} />
        <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="flex-none w-[90vw] md:w-[600px] snap-center flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 group"
          >
            {/* Project Image Header */}
            {project.images && project.images.length > 0 && (
              <div 
                className="relative h-64 w-full overflow-hidden cursor-pointer group/image"
                onClick={() => openCarousel(project.images)}
              >
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-fill transition-transform duration-700 group-hover/image:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-700 text-white text-sm font-medium transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                      <Icons.image size={16} />
                      <span>View Gallery ({project.images.length})</span>
                   </div>
                </div>

                {/* Multiple items indicator */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur text-xs text-white rounded flex items-center gap-1">
                    <Icons.image size={12} />
                    <span>+{project.images.length - 1}</span>
                  </div>
                )}
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-950 whitespace-nowrap ml-2">
                  {project.period}
                </span>
              </div>

              <div className="mb-6 flex-grow space-y-3">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-3">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50 mt-auto">
                {project.techStack.map((tech) => (
                  <SkillBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageCarousel 
        images={selectedProjectImages}
        isOpen={carouselOpen}
        onClose={() => setCarouselOpen(false)}
        initialIndex={initialImageIndex}
      />
    </div>
  );
};
