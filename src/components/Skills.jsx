import React from 'react';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
import skillImage1 from '../img/reactjs.webp';
import skillImage2 from '../img/sass.webp';
import skillImage3 from '../img/nodejs.webp';
import skillImage4 from '../img/express.webp';
import skillImage5 from '../img/mongodb.webp';
import skillImage6 from '../img/github.webp';
import skillImage7 from '../img/postman.webp';
import skillImage8 from '../img/swagger.webp';

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <h2>{t('skills_title')}</h2>
      <div className="skills-container">
        {/* Front-end Section */}
        <div className="skill-category">
          <h4>{t('skills_frontend')}</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src={skillImage1} alt="ReactJs Logo" />
              <p>ReactJS</p>
            </div>
            <div className="skill-item">
              <img src={skillImage2} alt="Sass Logo" />
              <p>Sass</p>
            </div>
          </div>
        </div>

        {/* Back-end Section */}
        <div className="skill-category">
          <h4>{t('skills_backend')}</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src={skillImage3} alt="NodeJS Logo" />
              <p>NodeJS</p>
            </div>
            <div className="skill-item">
              <img src={skillImage4} alt="ExpressJS Logo" />
              <p>ExpressJS</p>
            </div>
            <div className="skill-item">
              <img src={skillImage5} alt="MongoDB Logo" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="skill-category">
          <h4>{t('skills_tools')}</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src={skillImage6} alt="GitHub Logo" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <img src={skillImage7} alt="Postman Logo" />
              <p>Postman</p>
            </div>
            <div className="skill-item">
              <img src={skillImage8} alt="Swagger Logo" />
              <p>Swagger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
