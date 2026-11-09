import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { Icons } from './Icons';
import '../styles/project-overview.css';

interface ProjectOverviewProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;
  const name = project.title.split(' - ')[0];

  return (
    <dialog
      ref={dialogRef}
      className="project-overview"
      aria-labelledby={`overview-title-${project.id}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="project-overview__layout">
        <div className="project-overview__visual">
          <img src={project.images[0]} alt={`${name} project preview`} />
          <span>{project.period} <i aria-hidden="true">/</i> {project.location}</span>
        </div>

        <div className="project-overview__content">
          <header className="project-overview__topline">
            <p className="project-overview__eyebrow">Project overview <span>/</span> {project.id}</p>
            <button type="button" className="project-overview__close" onClick={onClose} autoFocus>
              Close<Icons.close size={18} aria-hidden="true" />
            </button>
          </header>

          <p className="project-overview__eyebrow">The idea</p>
          <h2 id={`overview-title-${project.id}`}>{name}<span>.</span></h2>
          <p className="project-overview__lead">{project.overview}</p>

          <section className="project-overview__section" aria-labelledby={`overview-build-${project.id}`}>
            <h3 id={`overview-build-${project.id}`}>Inside the build</h3>
            <ul>{project.description.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </section>

          <section className="project-overview__section" aria-labelledby={`overview-stack-${project.id}`}>
            <h3 id={`overview-stack-${project.id}`}>Made with</h3>
            <ul className="project-overview__stack">
              {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>

          {project.url && (
            <a className="project-overview__visit" href={project.url} target="_blank" rel="noreferrer">
              Visit project<Icons.projectArrow size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
};
