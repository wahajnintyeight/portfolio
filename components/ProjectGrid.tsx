import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ImageCarousel } from './ImageCarousel';
import { Icons } from './Icons';

export const ProjectGrid: React.FC = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = PROJECTS[selectedProjectIndex];

  const openCarousel = (images: string[], index = 0) => {
    if (!images.length) return;
    setSelectedProjectImages(images);
    setInitialImageIndex(index);
    setCarouselOpen(true);
  };

  return (
    <div className="sect wrap">
      <header className="sect__head">
        <h2 className="sect__title">Selected work</h2>
        <p className="sect__note">Choose a project to inspect its screens, implementation notes and stack.</p>
      </header>

      <div className="workbench">
        <nav className="workbench__index" aria-label="Project index">
          {PROJECTS.map((project, index) => (
            <button
              className="workbench__item"
              type="button"
              key={project.id}
              aria-pressed={selectedProjectIndex === index}
              aria-controls="workbench-panel"
              onClick={() => setSelectedProjectIndex(index)}
            >
              <span className="workbench__name">{project.title.split(' - ')[0]}</span>
              <span className="workbench__stack">{project.techStack.slice(0, 2).join(' · ')}</span>
            </button>
          ))}
        </nav>

        <article className="workbench__panel" id="workbench-panel">
          <header className="workbench__panel-head">
            <h3 className="workbench__title" aria-live="polite">{selectedProject.title}</h3>
            <p className="workbench__meta">
              <span>{selectedProject.period.replace(' - ', ' – ')}</span>
              <span>{selectedProject.location}</span>
            </p>
            {selectedProject.url && (
              <a className="workbench__site" href={selectedProject.url} target="_blank" rel="noreferrer">
                Visit live site <Icons.externalLink size={14} aria-hidden="true" />
              </a>
            )}
          </header>

          <div className="workbench__body">
            {selectedProject.images[0] && (
              <div className="workbench__visual">
                <figure className="workbench__figure">
                  <button
                    className="workbench__shot"
                    type="button"
                    onClick={() => openCarousel(selectedProject.images)}
                    aria-label={`Open ${selectedProject.title} screenshots`}
                  >
                    <img
                      src={selectedProject.images[0]}
                      alt={`${selectedProject.title} screen 1`}
                      width={1280}
                      height={800}
                      loading="lazy"
                    />
                  </button>
                  <figcaption className="workbench__caption">
                    <span>Screen 01 / {String(selectedProject.images.length).padStart(2, '0')}</span>
                    <span>Open to inspect <Icons.externalLink size={13} aria-hidden="true" /></span>
                  </figcaption>
                </figure>

                {selectedProject.images.length > 1 && (
                  <nav className="workbench__thumbs" aria-label={`${selectedProject.title} screenshots`}>
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => openCarousel(selectedProject.images, index)}
                        aria-label={`Open screenshot ${index + 1} of ${selectedProject.images.length}`}
                      >
                        <img src={image} alt="" width={1280} height={800} loading="lazy" />
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            )}

            <div className="workbench__details">
              <ul className="workbench__description">
                {selectedProject.description.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="workbench__details-stack">
                <p className="workbench__stack-label">Built with</p>
                <ul aria-label="Technology stack">
                  {selectedProject.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </article>
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
