import React, { useState } from 'react';
import './Projects.scss';
import { useTranslation } from 'react-i18next';
import projectImage1 from '../img/p1.webp';
import projectImage2 from '../img/p2.webp';
import projectImage3 from '../img/p3.webp';
import projectImage4 from '../img/p4.webp';
import projectImage5 from '../img/p5.webp';
import projectImage6 from '../img/p6.webp';

const projectsData = [
  { id: 1, image: projectImage1 },
  { id: 2, image: projectImage2 },
  { id: 3, image: projectImage3 },
  { id: 4, image: projectImage4 },
  { id: 5, image: projectImage5 },
  { id: 6, image: projectImage6 },
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const { t } = useTranslation();

  const openModal = (projectId) => {
    setModalProject(projectId);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="projects container" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">{t('projects_title')}</h2>
      <div className="project-gallery">
        {projectsData.map((project) => (
          <div className="project" key={project.id} onClick={() => openModal(project.id)}>
            <img 
              src={project.image} 
              alt={`Projet ${t(`project_${project.id}_title`)}`} 
              className="project-image"
              loading="lazy"
            />
            <div className="project-info">
              <button className="project-link">
                {t(`project_${project.id}_title`)}
              </button>
              <p>{t('click_to_discover')}</p>
            </div>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modal" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{t(`project_${modalProject}_title`)}</h2>
            <p><strong>{t('description')} :</strong> {t(`project_${modalProject}_description`)}</p>
            <p><strong>{t('technologies')} :</strong> {t(`project_${modalProject}_technologies`)}</p>
            <p><strong>{t('challenges')} :</strong> {t(`project_${modalProject}_challenges`)}</p>
            <p>
              <a 
                href={`https://github.com/Didamsoo/ProjetOPC${modalProject}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                {t('view_on_github')}
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
