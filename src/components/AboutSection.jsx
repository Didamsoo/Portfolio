import React from 'react';
import './AboutSection.scss';

import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section visible" id="about"> 
      <div className="about-left">
        <p className="about-label">➔ {t('about_label')}</p>
        
      </div>
      <div className="about-right">
        <p className="about-description">{t('about_description')}</p>
        
        
        <div className="journey-section">
          <h2 className="journey-title">{t('journey_title')}</h2>

          <div className="journey-item">
            <div className="journey-number">01</div>
            <div className="journey-details">
              <h3>{t('journey_1_title')}</h3>
              <p>{t('journey_1_duration')}</p>
            </div>
          </div>

          <hr className="divider" />

          <div className="journey-item">
            <div className="journey-number">02</div>
            <div className="journey-details">
              <h3>{t('journey_2_title')}</h3>
              <p>{t('journey_2_duration')}</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutSection;
