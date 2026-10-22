import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ImageCarousel } from './ImageCarousel';
import { ProjectScene } from './ProjectScene';
import { Icons } from './Icons';
import { getTabIndex } from '../lib/tabNavigation';

export const ProjectGrid: React.FC = () => {
  const [gallery, setGallery] = useState<{ project: Project; index: number } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const openGallery = (project: Project, index = 0) => setGallery({ project, index });
  const project = PROJECTS[activeIndex];

  useEffect(() => {
    const selectLinkedProject = () => {
      const index = PROJECTS.findIndex((item) => window.location.hash === `#project-${item.id}`);
      if (index >= 0) {
        setActiveIndex(index);
        tabRefs.current[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    };
    selectLinkedProject();
    window.addEventListener('hashchange', selectLinkedProject);
    return () => window.removeEventListener('hashchange', selectLinkedProject);
  }, []);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = getTabIndex(event.key, index, PROJECTS.length);
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  const move = (offset: number) => {
    const next = (activeIndex + offset + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(next);
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  return (
    <div className="wrap work-gallery">
      <div className="showcase-heading">
        <h2>Things I’ve built<span>.</span></h2>
        <div className="showcase-pager" aria-label="Browse projects">
          <span>{activeIndex + 1}<span> / {PROJECTS.length}</span></span>
          <button type="button" onClick={() => move(-1)} aria-label="Previous project"><Icons.arrowLeft size={21} aria-hidden="true" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project"><Icons.arrowRight size={21} aria-hidden="true" /></button>
        </div>
      </div>
      <div className="project-navigator" role="tablist" aria-label="Choose a project">
        {PROJECTS.map((item, index) => (
          <button key={item.id} id={`project-${item.id}`} role="tab" type="button"
            ref={(element) => { tabRefs.current[index] = element; }}
            aria-selected={index === activeIndex} aria-controls="project-panel" tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)} onKeyDown={(event) => onTabKeyDown(event, index)}>
            <img src={item.images[0]} alt="" width={160} height={90} loading="lazy" />
            <span>{item.title.split(' - ')[0]}</span>
          </button>
        ))}
      </div>
      <div id="project-panel" role="tabpanel" aria-labelledby={`project-${project.id}`} tabIndex={0}>
        <ProjectScene key={project.id} project={project} onOpenImages={openGallery} />
      </div>
      <ImageCarousel
        images={gallery?.project.images ?? []}
        title={gallery?.project.title}
        isOpen={gallery !== null}
        initialIndex={gallery?.index ?? 0}
        onClose={() => setGallery(null)}
      />
    </div>
  );
};
