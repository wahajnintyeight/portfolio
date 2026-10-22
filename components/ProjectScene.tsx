import React from 'react';
import { Project } from '../types';
import { Icons } from './Icons';

interface ProjectSceneProps {
  project: Project;
  onOpenImages: (project: Project, index?: number) => void;
}

export const ProjectScene: React.FC<ProjectSceneProps> = ({ project, onOpenImages }) => {
  const name = project.title.split(' - ')[0];
  const hasSecondView = project.images.length > 1 && project.id !== 'projemble';

  return (
    <article className="showcase" data-project={project.id}>
      <div className="showcase__copy">
        <h3>{name}</h3>
        <p className="showcase__purpose">{project.summary}</p>
        <ul className="showcase__tools" aria-label="Key technologies">
          {project.techStack.slice(0, 3).map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <div className="showcase__actions">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="contact-button">
              Visit project<Icons.projectArrow size={18} aria-hidden="true" />
            </a>
          )}
          <button className="showcase__screenshots" type="button" onClick={() => onOpenImages(project)}>
            <Icons.image size={18} aria-hidden="true" />Screenshots
          </button>
        </div>
        <details className="showcase__details">
          <summary>What I built<Icons.arrowRight size={17} aria-hidden="true" /></summary>
          <div className="showcase__description">
            <p>{project.period.replace(' - ', ' – ')} · {project.location}</p>
            <ul>{project.description.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <p>{project.techStack.join(' · ')}</p>
          </div>
        </details>
      </div>
      <div className="project-scene">
        <span className="project-scene__word" aria-hidden="true">{name}</span>
        <button className="project-scene__main" type="button" onClick={() => onOpenImages(project)}
          aria-label={`Enlarge ${name} screenshot`}>
          <img src={project.images[0]} alt={`${name} interface`} width={1280} height={800} decoding="async" />
          <span className="project-scene__enlarge" aria-hidden="true"><Icons.projectArrow size={22} /></span>
        </button>
        {hasSecondView && (
          <button className="project-scene__secondary" type="button" onClick={() => onOpenImages(project, 1)}
            aria-label={`Enlarge ${name} second screenshot`}>
            <img src={project.images[1]} alt={`${name}, another view`} width={1280} height={800} decoding="async" />
          </button>
        )}
      </div>
    </article>
  );
};
