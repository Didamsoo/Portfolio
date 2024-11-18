import React from 'react';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

// Importation des images des compétences
import reactLogo from '../img/reactjs.webp';
import sassLogo from '../img/sass.webp';
import nodejsLogo from '../img/nodejs.webp';
import expressLogo from '../img/express.webp';
import mongodbLogo from '../img/mongodb.webp';
import githubLogo from '../img/github.webp';
import postmanLogo from '../img/postman.webp';
import swaggerLogo from '../img/swagger.webp';

const skillsData = [
  {
    category: 'front_end',
    skills: [
      { name: 'ReactJS', img: reactLogo },
      { name: 'Sass', img: sassLogo },
    ],
  },
  {
    category: 'back_end',
    skills: [
      { name: 'NodeJS', img: nodejsLogo },
      { name: 'ExpressJS', img: expressLogo },
      { name: 'MongoDB', img: mongodbLogo },
    ],
  },
  {
    category: 'tools',
    skills: [
      { name: 'GitHub', img: githubLogo },
      { name: 'Postman', img: postmanLogo },
      { name: 'Swagger', img: swaggerLogo },
    ],
  },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills container" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">{t('skills_title')}</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h4>{t(`skills_category_${category.category}`)}</h4>
            <div className="skills-logos">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <img src={skill.img} alt={`${skill.name} Logo`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
