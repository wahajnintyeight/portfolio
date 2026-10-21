import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ImageCarousel } from './ImageCarousel';

const splitTitle = (title: string) => {
  const [name, ...kind] = title.split(' - ');
  return { name, kind: kind.join(' - ') };
};

export const ProjectSlider: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);
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
    <div className="sect wrap">
      <header className="sect__head">
        <h2 className="sect__title">Selected work</h2>
        <p className="sect__note">{PROJECTS.length} projects, shipped across product, platform and mobile.</p>
      </header>

      <div className="work">
        {PROJECTS.map((project, i) => {
          const { name, kind } = splitTitle(project.title);
          const isOpen = openId === project.id;
          return (
            <article key={project.id} className="work__item" data-open={isOpen}>
              <h3>
                <button
                  className="work__head"
                  aria-expanded={isOpen}
                  aria-controls={`work-${project.id}`}
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                >
                  <span className="work__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="work__title">{name}</span>
                  <span className="work__kind">{kind}</span>
                  <span className="work__period">{project.period}</span>
                  <span className="work__toggle" aria-hidden="true">+</span>
                </button>
              </h3>

              <div className="work__panel" id={`work-${project.id}`} role="region" aria-label={name}>
                <div className="work__clip" inert={!isOpen}>
                  <div className="work__inner">
                    <div className="work__copy">
                      <ul>
                        {project.description.map((d, k) => <li key={k}>{d}</li>)}
                      </ul>
                      <p className="work__stack">
                        {project.techStack.map((t) => <span key={t}>{t}</span>)}
                      </p>
                    </div>

                    <div className="work__shots">
                      {project.images.map((src, k) => (
                        <button
                          key={k}
                          className="work__shot"
                          onClick={() => openCarousel(project.images, k)}
                          aria-label={`View ${name} screenshot ${k + 1} of ${project.images.length}`}
                        >
                          <img src={src} alt="" loading="lazy" />
                          {k === 0 && project.images.length > 1 && (
                            <span className="work__shot-count">{project.images.length} images</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
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
