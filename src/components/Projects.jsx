import React, { useState, useRef } from 'react';
import './Projects.scss';
import { useTranslation } from 'react-i18next';
import projectImage1 from '../img/Booki.webp';
import projectImage2 from '../img/p2.webp';
import projectImage3 from '../img/p3.webp';
import projectImage4 from '../img/p4.webp';
import projectImage5 from '../img/p5.webp';
import projectImage6 from '../img/p6.webp';

const projectsData = [
  {
    id: 1,
    image: projectImage1,
    title: 'Booki',
    github: 'https://github.com/Didamsoo/ProjetOPCL'
  },
  {
    id: 2,
    image: projectImage2,
    title: 'Sophie Bluel',
    github: 'https://github.com/Didamsoo/OPC_P3'
  },
  {
    id: 3,
    image: projectImage3,
    title: 'Qwenta',
    github: 'https://github.com/Didamsoo'
  },
  {
    id: 4,
    image: projectImage4,
    title: 'Nina Carducci',
    github: 'https://github.com/Didamsoo/OPC_P4'
  },
  {
    id: 5,
    image: projectImage5,
    title: 'Kasa',
    github: 'https://github.com/Didamsoo/OPC_P5'
  },
  {
    id: 6,
    image: projectImage6,
    title: 'Mon Vieux Grimoire',
    github: 'https://github.com/Didamsoo/OPC_P6'
  }
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const { t } = useTranslation();
  const modalRef = useRef(null);

  const openModal = (projectId) => {
    const selectedProject = projectsData.find((project) => project.id === projectId);
    setModalProject(selectedProject);
    
    // Attendre que la modale soit visible puis faire défiler la page vers celle-ci
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
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
        <div className="modal" onClick={closeModal} aria-modal="true" role="dialog" ref={modalRef}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalProject.title}</h2>
            <p><strong>{t('description')} :</strong> {t(`project_${modalProject.id}_description`)}</p>
            <p><strong>{t('technologies')} :</strong> {t(`project_${modalProject.id}_technologies`)}</p>
            <p><strong>{t('challenges')} :</strong> {t(`project_${modalProject.id}_challenges`)}</p>
            <p>
              <a 
                href={modalProject.github} 
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
