import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { useTranslation } from 'react-i18next';

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [modalProject, setModalProject] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) =>
        console.error('Erreur lors du chargement des projets :', error)
      );
  }, []);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section
      className="projects container"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">{t('projects_title')}</h2>
      <div className="project-gallery">
        {projectsData.map((project) => (
          <div
            className="project"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={`Projet ${project.title}`}
              className="project-image"
              loading="lazy"
            />
            <div className="project-info">
              <button className="project-link">{project.title}</button>
              <p>{t('click_to_discover')}</p>
            </div>
          </div>
        ))}
      </div>
      {modalProject && (
        <div
          className="modal"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalProject.title}</h2>
            <p>
              <strong>{t('description')} :</strong> {modalProject.description}
            </p>
            <p>
              <strong>{t('technologies')} :</strong> {modalProject.technologies}
            </p>
            <p>
              <strong>{t('challenges')} :</strong> {modalProject.challenges}
            </p>
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
