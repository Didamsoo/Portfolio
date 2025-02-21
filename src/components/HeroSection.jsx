import React from 'react';
import './HeroSection.scss';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="hero-section" 
      id="hero" 
      aria-labelledby="hero-title"
    >
      <img 
        src={`${process.env.PUBLIC_URL}/img/adam.webp`} 
        alt={t('profile_image_alt')} 
        className="PhotoProfile" 
        loading="lazy" 
        aria-hidden="true" 
      />
      <header>
        <h1 className="hero-title" id="hero-title">
          <span>{t('hero_title_span')}</span>
        </h1>
      </header>
      <p className="hero-description">
        {t('hero_description')}
      </p>
      <div className="contact-right">
        <a 
          href="mailto:adam.elmardi@gmail.com" 
          className="get-in-touch" 
          aria-label={t('contact_button')} 
          title={t('contact_button')} 
          rel="noopener noreferrer"
        >
          {t('contact_button')} <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
