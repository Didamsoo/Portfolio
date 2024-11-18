import React, { useState } from 'react';
import './Projects.scss';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import projectImage1 from '../img/p1.webp';
import projectImage2 from '../img/p2.webp';
import projectImage3 from '../img/p3.webp';
import projectImage4 from '../img/p4.webp';
import projectImage5 from '../img/p5.webp';
import projectImage6 from '../img/p6.webp';

const projectImages = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6
];

const projectLinks = [
  "https://github.com/Didamsoo/ProjetOPCL",
  "https://github.com/Didamsoo/OPC_P3",
  "https://github.com/Didamsoo/OPC_P4",
  "https://github.com/Didamsoo/OPC_P5",
  "https://github.com/Didamsoo/OPC_P6",
  "https://github.com/Didamsoo"
];

function Projects() {
  const { t } = useTranslation();
  const [modalProject, setModalProject] = useState(null);

  const openModal = (projectId) => {
    setModalProject(projectId);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <header>
        <h1 className="section-title" id="projects-heading">{t('selected')}</h1>
        <h2 className="section-title secondary">{t('projects_2024')}</h2>
      </header>

      {/* Galerie des projets avec <ul> et <li> pour une structure sémantique correcte */}
      <ul className="project-gallery" role="list">
        {projectImages.map((image, index) => (
          <li key={index} className="project" onClick={() => openModal(index + 1)}>
            <article aria-labelledby={`project-title-${index}`} className="project-card">
              <img 
                src={image} 
                alt={`${t(`project_${index + 1}_title`)} - ${t(`project_${index + 1}_description`)}`} 
                className="project-image"
                loading="lazy"
              />
              <div className="project-info">
                <h3 id={`project-title-${index}`} className="project-link">
                  {t(`project_${index + 1}_title`)}
                </h3>
                <p>{t('click_to_discover')}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Modale pour le projet sélectionné */}
      {modalProject && (
        <div className="modal" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeModal} 
              aria-label={t('close_modal')}
              title={t('close_modal')}
            >
              &times;
            </button>
            <h2>{t(`project_${modalProject}_title`)}</h2>
            <p><strong>{t('description')} :</strong> {t(`project_${modalProject}_description`)}</p>
            <p><strong>{t('technologies')} :</strong> {t(`project_${modalProject}_technologies`)}</p>
            <p><strong>{t('challenges')} :</strong> {t(`project_${modalProject}_challenges`)}</p>
            
            {/* Lien vers GitHub */}
            <a 
              href={projectLinks[modalProject - 1]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
              aria-label={`${t('view_on_github')} - ${t(`project_${modalProject}_title`)}`}
              title={`${t('view_on_github')} - ${t(`project_${modalProject}_title`)}`}
            >
              <FaArrowRight className="arrow" /> {t('view_on_github')}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
