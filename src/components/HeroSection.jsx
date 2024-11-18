import React from 'react';
import './HeroSection.scss';
import { useTranslation } from 'react-i18next';
import profileImage from '../img/adam.webp';
import './Contact.scss';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      {/* Photo de profil */}
      <img 
        src={profileImage} 
        alt={t('profile_image_alt')} 
        className="PhotoProfile" 
        loading="lazy" 
        aria-hidden="true"
      />

      {/* Titre principal */}
      <header>
        <h1 className="hero-title" id="hero-title">
          <span>{t('hero_title_span')}</span> {t('hero_title')}
        </h1>
      </header>

      {/* Description */}
      <p className="hero-description">
        {t('hero_description')}
      </p>

      {/* Bouton "Get in touch" qui ouvre un email */}
      <div className="contact-right">
        <a 
          href="mailto:adam@gmail.com" 
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
