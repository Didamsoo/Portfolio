import React, { useEffect, useState } from 'react';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/skills.json`)
      .then((response) => response.json())
      .then((data) => setSkillsData(data))
      .catch((error) =>
        console.error('Erreur lors du chargement des compétences :', error)
      );
  }, []);

  return (
    <section className="skills container">
      <h2>{t('skills_title')}</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h4>{category.category}</h4>
            <div className="skills-logos">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <img
                    src={process.env.PUBLIC_URL + skill.img}
                    alt={`${skill.name} Logo`}
                  />
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
